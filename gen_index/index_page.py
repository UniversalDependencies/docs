link_template="""\
   <ul>
      <li><a href="{langfam_code:}/overview/introduction.html">Introduction</a></li>
      <li><a href="{langfam_code:}/overview/tokenization.html">Tokenization</a></li>
      <li>Morphology
        <ul>
          <li><a href="{langfam_code:}/overview/morphology.html">General principles</a></li>
          <li><a href="{langfam_code:}/pos/index.html">{langfam_name:} POS tags</a> (<a href="{langfam_code:}/pos/all.html">single document</a>)</li>
          <li><a href="{langfam_code:}/feat/index.html">{langfam_name:} features</a> (<a href="{langfam_code:}/feat/all.html">single document</a>)</li>
        </ul>
      </li>
      <li>Syntax
        <ul>
          <li><a href="{langfam_code:}/overview/syntax.html">General principles</a></li>
          <li><a href="{langfam_code:}/overview/specific-syntax.html">Specific constructions</a></li>
          <li><a href="{langfam_code:}/dep/index.html">{langfam_name:} relations</a> (<a href="{langfam_code:}/dep/all.html">single document</a>)</li>
        </ul>
      </li>
    </ul>
"""

import sys
import glob
import os.path
import json
import re
import codecs
import StringIO

SUBSET_ALL, SUBSET_NONEMPTY, SUBSET_EMPTY = range(3)

no_data_token_count_span="""<span class="widespan" style="color:gray"><span class="hint--top hint--info" data-hint="No corpus data">-</span></span>"""
token_count_span="""<span class="widespan"><span class="hint--top hint--info" data-hint="{token_count:,} tokens {word_count:,} words {tree_count:,} sentences">{tcountk}K</span></span>"""
def get_token_count_span(corpus_data):
    token_count=corpus_data.get("token_count",0)
    if token_count==0: #No data
        return no_data_token_count_span
    else:
        if token_count<1000:
            tcountk="&lt;1"
        else:
            tcountk="{:,}".format(token_count//1000)
        return token_count_span.format(tcountk=tcountk,**corpus_data)


def get_column_icons(corpus_data):
    r="""<span class="widespan">"""
    if corpus_data.get("words_with_lemma_count",0)>int(corpus_data.get("word_count")*0.9):
        #r+="""<span class="tagspan"><span class="hint--top hint--info" data-hint="Lemmas">&#9409;</span></span>"""
        r+="""<span class="tagspan"><span class="hint--top hint--info" data-hint="Lemmas"><img class="propertylogo" src="logos/L.svg" /></span></span>"""
    else:
        r+="""<span class="tagspan"></span>"""
    if corpus_data.get("catvals",0)>0:
        #r+="""<span class="tagspan"><span class="hint--top hint--info" data-hint="Features">&#9403;</span></span>"""
        r+="""<span class="tagspan"><span class="hint--top hint--info" data-hint="Features"><img class="propertylogo" src="logos/F.svg" /></span></span>"""
    else:
        r+="""<span class="tagspan"></span>"""
    if corpus_data.get("words_with_deps_count",0)>0:
        #r+="""<span class="tagspan"><span class="hint--top hint--info" data-hint="Secondary dependencies">&#9401;</span></span>"""
        r+="""<span class="tagspan"><span class="hint--top hint--info" data-hint="Secondary dependencies"><img class="propertylogo" src="logos/D.svg" /></span></span>"""
    else:
        r+="""<span class="tagspan"></span>"""
    r+="""</span>"""
    return r

categories={(u"Documentation status",u"stub"):"""<span class="widespan" style="color:gray"><span class="hint--top hint--info" data-hint="No documentation">-</span></span>""",
            (u"Documentation status",u"partial"):"""<span class="widespan"><span class="hint--top hint--info" data-hint="Partial documentation"><i class="fa fa-file-o"></i></span></span>""",
            (u"Documentation status",u"complete"):"""<span class="widespan"><span class="hint--top hint--info" data-hint="Complete documentation"><i class="fa fa-file-text-o"></i></span></span>""",
            (u"Data source",u"unknown"):"""<span class="widespan"><span class="hint--top hint--info" data-hint="Data source not known">-</span></span>""",
            (u"Data source",u"automatic"):"""<span class="widespan"><span class="hint--top hint--info" data-hint="Automatic conversion"><i class="fa fa-cogs"></i></span></span>""",
            (u"Data source",u"semi-automatic"):"""<span class="widespan"><span class="hint--top hint--info" data-hint="Automatic conversion with manual corrections"><i class="fa fa-cogs"></i><!--<i class="fa fa-plus" style="font-size: 0.75em; line-height: 1.33em; vertical-align: +10%;">--><i class="fa fa-check"></i></span></span>""",
            (u"Data source",u"manual"):"""<span class="widespan"><span class="hint--top hint--info" data-hint="Full manual check of the data"><i class="fa fa-user"></i></span></span>""",
            (u"License",u"none"):"""<span class="widespan"><span class="hint--top hint--info" data-hint="License not known">-</span></span>""",
            (u"Data available since",u"UD v1.0"):"""<span class="widespan"><span class="hint--top hint--info" data-hint="First released in UD version 1.0 (Jan 2015)"><i class="fa fa-check"></i></span></span>""",
            (u"Data available since",u"UD v1.1"):"""<span class="widespan"><span class="hint--top hint--info" data-hint="First released in UD version 1.1 (May 2015)"><i class="fa fa-check"></i></span></span>""",
            (u"Data available since",u"UD v1.2"):"""<span class="widespan"><span class="hint--top hint--info" data-hint="First released in UD version 1.2 (November 2015)"><i class="fa fa-check"></i></span></span>""",
            (u"Data available since",u"UD v1.3"):"""<span class="widespan"><span class="hint--top hint--info" data-hint="First released in UD version 1.3 (May 2016)"><i class="fa fa-check"></i></span></span>""",
            (u"Data available since",u"UD v1.4"):"""<span class="widespan"><span class="hint--top hint--info" data-hint="First released in UD version 1.4 (November 2016)"><i class="fa fa-check"></i></span></span>""",
            (u"Data available since",u"UD v2.0"):"""<span class="widespan"><span class="hint--top hint--info" data-hint="First released in UD version 2.0 (March 2017)"><i class="fa fa-check"></i></span></span>""",
            (u"Data available since",u"UD v2.1"):"""<span class="widespan"><span class="hint--top hint--info" data-hint="Scheduled for release in UD version 2.1 (November 2017)"><i class="fa fa-hourglass-end"></i></span></span>""",
            (u"Data available since",u"none"):"""<span class="widespan"><span class="hint--top hint--info" data-hint="No firm schedule for data release">-</span></span>"""}

empty_wide_span="""<span class="widespan"><span class="hint--top hint--info" data-hint="{hint:}">?</span></span>"""
license_span="""<span class="widespan"><span class="hint--top hint--info" data-hint="{license:}">{licenseshort:}</span></span>"""
def get_license_span(lic):
    if "CC BY-NC-SA" in lic:
        return license_span.format(license=lic,licenseshort="""<img class="license"  src="logos/by-nc-sa.svg"/>""")
    elif "CC BY-SA" in lic:
        return license_span.format(license=lic,licenseshort="""<img class="license" src="logos/by-sa.svg"/>""")
    elif "CC BY" in lic:
        return license_span.format(license=lic,licenseshort="""<img class="license" src="logos/by.svg"/>""")
    elif "LGPLLR" in lic:
        return license_span.format(license=lic,licenseshort="""<img class="license" src="logos/LGPLLR.svg"/>""")
    elif "GPL" in lic:
        return license_span.format(license=lic,licenseshort="""<img class="license" src="logos/gpl.svg"/>""")
    else:
        return license_span.format(license=lic,licenseshort=""" """)



valueRe=re.compile(u"^([a-zA-Z ]+): (.+)$")
#known_cats=set(cat for cat,val in categories)
def analyze_readme(dir_name):
    readme_data={u"Documentation status":u"stub",u"Data source":u"automatic conversion",u"License":u"none",u"Data available since":u"none", u"Genre":u"none",u"Contributors":u""}
    readmes=sorted(x for x in glob.glob(os.path.join(dir_name,"*")) if "readme" in x.lower())
    if not readmes: #No readme file!
        return readme_data
    with codecs.open(readmes[0],"r","utf-8") as f:
        for line in f:
            match=valueRe.match(line)
            if match: #Maybe one of our values?
                cat,val=match.group(1).strip(),match.group(2).strip()
                if (cat,val) in categories:
                    #Yes! this is a known category, we have a perfect match
                    readme_data[cat]=val
                elif cat in readme_data: #Known category but unknown value, I guess it's okay
                    #Known cat, but weird val --- should we warn?
                    readme_data[cat]=val
    return readme_data

def get_language_span(l):
    return """<span class="doublewidespan">{}</span>""".format(l.replace(u"_",u" "))

flags=json.loads(open("flags.json").read())
def get_flag_span(lang_name):
    ccode=flags.get(lang_name)
    if ccode:
        return """<span class="flagspan"><img class="flag" src="flags/svg/{}.svg"></span>""".format(ccode)
    else:
        return """<span class="flagspan"> </span>"""

lcodes=json.loads(open("lcodes.json").read())

genres_map=json.loads(open("genre_symbols.json","r").read())
for k,v in genres_map.iteritems():
    genres_map[k]=v.replace("_","-")
def get_genre_span(genres):
    spans=""
    for g in genres.split():
        if g in genres_map:
            spans+="""<span class="genreicon"><i class="fa fa-%s"></i></span>"""%genres_map[g]
        else:
            spans+="""<span class="genreicon"><i class="fa fa-%s"></i></span>"""%genres_map["none"]
    return """<span class="doublewidespan"><span class="hint--top hint--info" data-hint="%s">%s</span></span>"""%(genres,spans)


def is_empty(args, lang, corpus_data):
    # readme_data = analyze_readme(os.path.join(args.ud_data, "UD_"+lang))
    # no_docs = "No documentation" in readme_data["Documentation status"]
    # no_data = corpus_data.get("token_count", 0) == 0
    #return no_data and no_docs
    return corpus_data.get("token_count", 0) == 0

def gen_table(args, subset=SUBSET_NONEMPTY):

    jekyll_data=[] #this will go to jekyll then as data

    a_data=StringIO.StringIO()
    print >> a_data, "<!-- content of _includes/at_glance.html -->"
    print >> a_data, "<!-- do NOT edit by hand, that file is autogenerated using gen_index/index_page.py -->"
    # Will create a line for every language which has a repository
    langs=sorted(os.path.basename(x).replace(".json","") for x in glob.glob("_corpus_data/*.json"))
    for l in langs:
        with open(os.path.join("_corpus_data",l+".json"),"r") as f:
            corpus_data=json.load(f)

        corpus_data[u"lang_code"]=lcodes[l]
        corpus_data[u"lang_name"]=l
        corpus_data[u"langfam_code"]=lcodes[l].split("_")[0]
        corpus_data[u"langfam_name"]=l.split("-")[0]

        readme_data=analyze_readme(os.path.join(args.ud_data,"UD_"+l))

        empty = is_empty(args, l, corpus_data)
        if ((empty and subset == SUBSET_NONEMPTY) or
            (not empty and subset == SUBSET_EMPTY)):
            pass    # Don't write table for this dataset
        else:
            print >> a_data, '<div data-lc="%s">' % lcodes[l]
            print >> a_data, get_flag_span(l)
            print >> a_data, get_language_span(l)
            print >> a_data, get_token_count_span(corpus_data)
            print >> a_data, get_column_icons(corpus_data)
            print >> sys.stderr, l
            for c in (u"Documentation status", u"Data source", u"Data available since"):
                print >> a_data, categories.get((c,readme_data[c]),empty_wide_span.format(hint=readme_data[c]))
            print >> a_data, get_license_span(readme_data[u"License"])
            print >> a_data, get_genre_span(readme_data["Genre"])
            print >> a_data, "</div>"
            print >> a_data, "<div>"
            print >> a_data, link_template.format(**corpus_data)
            print >> a_data, "</div>"

        ldict={}
        ldict[u"lang_name"]=corpus_data[u"lang_name"]
        ldict[u"lang_code"]=corpus_data[u"lang_code"]
        ldict[u"contributors"]=[]
        if readme_data["Contributors"].strip():
            for c in readme_data["Contributors"].strip().split(u";"):
                c=c.strip()
                lf=c.split(u",",1)
                if len(lf)==2:
                    ldict[u"contributors"].append({u"last":lf[0].strip(),u"first":lf[1].strip(), u"full":lf[1].strip()+u" "+lf[0].strip()})
                else:
                    ldict[u"contributors"].append({u"last":c,u"first":u"?",u"full":c})
        jekyll_data.append(ldict)
    return a_data,jekyll_data

if __name__=="__main__":
    import argparse
    parser = argparse.ArgumentParser(description='generates the index page')
    parser.add_argument('--ud-data', required=True, help='Where is the UD data, so I can grab the readmes? (DIRECTORY)')
    parser.add_argument('--ldict', default="../_data/ldata.json", help='Where to write the language dict file? (Default %(default)s)')
    parser.add_argument('--empty', default=False, action='store_true', help='Generate for empty treebanks')
    args = parser.parse_args()

    subset = SUBSET_NONEMPTY if not args.empty else SUBSET_EMPTY

    a_data,ldict=gen_table(args, subset)
    print a_data.getvalue()
    if args.ldict:
        with open(args.ldict,"w") as out:
            json.dump(ldict,out,indent=2)


