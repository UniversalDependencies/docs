import sys
import re
import yaml

from collections import defaultdict
from os import path
from glob import glob

# Generate markdown link definitions for all documents in each of the
# collections defined in Jekyll configuration.

CONFIG_FILE = '_config.yml'

DOCUMENT_EXTENSION = 'md'

INCLUDE_DIRECTORY = '_includes'

def load_config(fn):
    with open(fn) as f:
        return yaml.load(f)

def collections():
    '''Return list of collections defined in CONFIG_FILE.'''
    conf = load_config(CONFIG_FILE)

    if 'collections' in conf:
        return conf['collections']
    else:
        return []

def collection_path(collection):
    '''Return path for given collection.'''

    return '_' + collection

def documents(collection):
    '''Return set of documents in given collection.'''

    cpath = collection_path(collection)
    qpath = path.join(cpath, '*.' + DOCUMENT_EXTENSION)
    docs = glob(qpath)
    return set([path.basename(d) for d in docs])

def slugify(name):
    # modified from http://stackoverflow.com/q/5574042
    #import unicodedata
    slug = name
    #slug = unicodedata.normalize('NFKD', slug)
    slug = slug.encode('ascii', 'ignore')
    # Note: allow slashes in slugs
    slug = re.sub(r'[^a-zA-Z0-9/]+', '-', slug).strip('-')
    slug = re.sub(r'[-]+', '-', slug)
    # Note: Markdown link definitions are case-insensitive, so lower()
    # is required to get the correct matches (see
    # http://daringfireball.net/projects/markdown/syntax#link)
    slug = slug.lower()
    return slug

def linkdef_names(collection, document):
    '''Return list of link definition names for collection, document
    pair.'''

    root = path.splitext(document)[0]
    return [slugify(root), slugify(path.join(collection, root))]

def select_linkdefs(collection, linked_docs):
    '''Return list of link definitions for given collection.

    linked_docs is a map from candidate link definition names to
    (collection, document pairs.'''

    # helper for cmp_linked
    def alpha_prefix(s):
        '''Return non-empty initial alphabetic prefix of given string,
        if any, and full string otherwise.'''

        m = re.match(r'^([a-z]+)', s)
        if m:
            return m.group(1)
        else:
            return s

    # sort function for candidates
    def cmp_linked(a, b):
        # prioritize exact collection matches, next matches by initial
        # alphabetic prefix on collection, and finally just sort to
        # default order.
        if a[0] == collection:
            return -1
        if b[0] == collection:
            return 1
        if alpha_prefix(a[0]) == alpha_prefix(collection):
            return -1
        if alpha_prefix(b[0]) == alpha_prefix(collection):
            return 1
        return cmp(a, b)

    selected = {}
    for l in sorted(linked_docs):
        candidates = linked_docs[l][:]
        candidates.sort(cmp_linked)
        selected[l] = candidates[0]

    return selected

def generate_links(collection, links):
    generated = []
    for name, target in links.items():
        dest_coll, dest_doc = target
        s = '[%s]: ' % name
        dest_doc = re.sub(r'\.md$', '.html', dest_doc)
        if collection == dest_doc:
            # local link
            s += dest_doc
        elif collection == '':
            # non-local to subdir
            s += path.join(dest_coll, dest_doc)
        else:
            # non-local to sister directory
            s+= path.join('..', dest_coll, dest_doc)
        generated.append(s)
    return generated

def output_links(collection, links):
    outfn = path.join(INCLUDE_DIRECTORY, collection + '-links.md')

    def link_sort(a, b):
        # sort by number of slashes first, text next
        return cmp((a.count('/'), a), (b.count('/'), b))

    with open(outfn, 'wt') as outf:
        for l in sorted(links, link_sort):
            print >> outf, l

def process_collections():
    collection_documents = {}

    for c in collections():
        collection_documents[c] = documents(c)

    # map potential link definition names to collection, document
    # pairs that they may apply to.
    linked_docs = defaultdict(list)
    for c in collection_documents:
        for d in collection_documents[c]:
            for l in linkdef_names(c, d):
                linked_docs[l].append((c, d))
    linked_docs = dict(linked_docs)

    # select link definitions for each collection.
    selected_links = {}
    for c in collection_documents:
        selected_links[c] = select_linkdefs(c, linked_docs)

    # generate link definition strings for each collection
    generated_links = {}
    for c in collection_documents:
        generated_links[c] = generate_links(c, selected_links[c])

    # finally, write into include directory
    for c in collection_documents:
        output_links(c, generated_links[c])
    
def main(argv=None):
    if argv is None:
        argv = sys.argv

    process_collections()

if __name__ == '__main__':
    sys.exit(main(sys.argv))
