#!/usr/bin/env python3
"""Maintains _data/treebank_sizes.yaml: the size (in words) of every treebank in every
UD release. Together with _data/languages.yaml (family and genus of every language),
it feeds the interactive "Language Diversity Across Releases" charts on the homepage.

The file is only extended: a release is never extracted again once it is in the file.

To add a new release (after its row was added to download.md and the treebank pages
in treebanks/*/index.md were regenerated for it and committed):

    python3 infrastructure/make_diversity_data.py

Where the numbers come from
  * download.md lists every release with its date.
  * docs-automation/valdan/releases.json (downloaded from GitHub) lists the treebank
    repositories that belonged to each release.
  * The sizes come from the treebank pages treebanks/*/index.md, which are generated from
    the data of the latest release: "This corpus contains N sentences, M tokens and K
    syntactic words" (words = tokens if the sentence has no separate syntactic words).
    So only the latest release can be added; the pages say which release they pertain to.
  * The language of a treebank is found through its language code in _data/languages.yaml.

Layout of _data/treebank_sizes.yaml: two lists with one entry per line (JSON, which is valid YAML)
    releases:
    - {"id": "2.19", "date": "2026-11-15", "treebanks": 402, "languages": 226, "exact": true}
    treebanks:
    - {"id": "UD_Afrikaans-AfriBooms", "language": "Afrikaans", "name": "AfriBooms", "words": {"2.19": 49258, ...}}
A treebank missing from a release has no entry for it in "words". A treebank that was renamed
or moved to another repository shows up as separate treebanks.

History: releases 2.1-2.18 were extracted from the committed versions of the former homepage
list (_includes/at_glance.html), filtered with releases.json. UD 1.0-2.0 are not included.
"""
import datetime, glob, json, re, sys, urllib.request

OUTPUT = '_data/treebank_sizes.yaml'
RELEASES_JSON = 'https://raw.githubusercontent.com/UniversalDependencies/docs-automation/master/valdan/releases.json'


# --------------------------------------------------------------------------- input

def read_latest_release():
    """The newest release of download.md as (id, date)."""
    out = []
    for line in open('download.md', encoding='utf-8'):
        m = re.match(r'\* Version (\d+\.\d+) treebanks .*?released (\w+ \d+, \d{4})', line)
        if m:
            out.append((datetime.datetime.strptime(m.group(2), '%B %d, %Y').date(), m.group(1)))
    date, release_id = max(out)
    return release_id, date


def read_release_members(release_id):
    """Repositories that belong to the release, from docs-automation."""
    with urllib.request.urlopen(RELEASES_JSON) as response:
        releases = json.load(response)['releases']
    if release_id not in releases:
        sys.exit('Release %s is not (yet) in docs-automation/valdan/releases.json' % release_id)
    return set(releases[release_id]['treebanks'])


def read_language_names():
    """Language names by code, from _data/languages.yaml."""
    names, name = {}, None
    for line in open('_data/languages.yaml', encoding='utf-8'):
        m = re.match(r'- name: (.*)', line)
        if m:
            name = m.group(1).strip().strip('"')
        m = re.match(r'  code: (.*)', line)
        if m:
            names[m.group(1).strip().strip('"')] = name
    return names


TITLE = re.compile(r"title:\s*'(UD_[^']+)'")
CODE = re.compile(r'\(code: `([^`]+)`\)')
RELEASE = re.compile(r'Download all treebanks: \[UD ([\d.]+)\]')
SIZE = re.compile(r'This corpus contains [\d,]+ sentences(?: and |, )([\d,]+) tokens(?: and ([\d,]+) syntactic words)?')


def read_treebank_pages():
    """Every treebank page as a dict with repository, language code, release and words."""
    pages = []
    for path in sorted(glob.glob('treebanks/*/index.md')):
        text = open(path, encoding='utf-8').read()
        title, code, release, size = TITLE.search(text), CODE.search(text), RELEASE.search(text), SIZE.search(text)
        if not (title and code and release and size):
            print('%s: not understood, skipped' % path, file=sys.stderr)
            continue
        words = (size.group(2) or size.group(1)).replace(',', '')
        pages.append({'repository': title.group(1), 'code': code.group(1), 'release': release.group(1), 'words': int(words)})
    return pages


# ---------------------------------------------------------------- the stored file

def read_stored():
    """Releases and treebanks of OUTPUT (each entry is one line of JSON)."""
    releases, treebanks, current = [], [], None
    for line in open(OUTPUT, encoding='utf-8').read().splitlines():
        if line in ('releases:', 'treebanks:'):
            current = releases if line == 'releases:' else treebanks
        elif line.startswith('- ') and current is not None:
            current.append(json.loads(line[2:]))
    return releases, treebanks


def write_stored(releases, treebanks):
    def entry(o):
        return '- ' + json.dumps(o, ensure_ascii=False, separators=(', ', ': ')) + '\n'
    with open(OUTPUT, 'w', encoding='utf-8') as out:
        out.write('# Size of every treebank in every UD release. Maintained by infrastructure/make_diversity_data.py,\n')
        out.write('# which only adds new releases to this file. Do not edit by hand.\n')
        out.write('releases:\n' + ''.join(entry(r) for r in releases))
        out.write('treebanks:\n' + ''.join(entry(t) for t in treebanks))


# ------------------------------------------------------------------------- main

def main():
    releases, stored = read_stored()
    treebanks = {t['id']: t for t in stored}
    release_id, date = read_latest_release()
    if release_id in {r['id'] for r in releases}:
        print('Release %s is already in %s, nothing to do' % (release_id, OUTPUT), file=sys.stderr)
        return

    members = read_release_members(release_id)
    language_names = read_language_names()
    pages = [p for p in read_treebank_pages() if p['repository'] in members]
    wrong_release = sorted({p['release'] for p in pages} - {release_id})
    if wrong_release:
        sys.exit('The treebank pages pertain to UD %s, not to %s: regenerate them first' % (wrong_release, release_id))
    unknown = sorted({p['code'] for p in pages} - set(language_names))
    if unknown:
        sys.exit('Language codes missing in _data/languages.yaml (run make_languages_yaml.py): %s' % unknown)
    missing = sorted(members - {p['repository'] for p in pages})
    if missing:
        print('WARNING: no treebank page for %s' % missing, file=sys.stderr)

    for p in pages:
        language = language_names[p['code']]
        name = p['repository'].split('-', 1)[1] if '-' in p['repository'] else language
        treebank = treebanks.setdefault(p['repository'], {'id': p['repository'], 'language': language, 'name': name, 'words': {}})
        treebank['language'], treebank['name'] = language, name
        treebank['words'][release_id] = p['words']
    releases.append({'id': release_id, 'date': str(date), 'treebanks': len(members), 'languages': len({language_names[p['code']] for p in pages}), 'exact': True})

    releases.sort(key=lambda r: r['date'])
    write_stored(releases, sorted(treebanks.values(), key=lambda t: (t['language'], t['name'], t['id'])))
    print('Release %s added: %d treebanks (%d members) in %s' % (release_id, len(pages), len(members), OUTPUT), file=sys.stderr)


if __name__ == '__main__':
    main()
