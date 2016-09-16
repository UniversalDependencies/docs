#!/bin/bash

### WARNING: this is a brittle and poorly tested script that makes
### bulk additions to the repository. Don't run this unless you're
### sure what you're doing and know how to clean up the repo if
### anything goes wrong.

# Usage example: addlanguage.sh ar Arabic

set -u
set -e

lc=$1
language=$2

# check that no collection exists already
for c in overview pos feat dep; do 
    f="_${lc}-${c}"
    if [ -e "$f" ]; then
	echo "$f exists, not clobbering"
	exit 1
    fi
done

# check that no table exists already
for c in pos feat dep status; do
    f="_includes/${lc}-${c}-table.html"
    if [ -e "$f" ]; then
	echo "$f exists, not clobbering"
	exit 1
    fi
done

# create a copy of each template collection
for c in overview pos feat dep; do 
    f="_${lc}-${c}"
    cp -r "_template-$c" "$f"
done

# create copies of HTML tables
for c in pos feat dep status; do 
    f="_includes/${lc}-${c}-table.html"
    cp "_includes/template-${c}-table.html" "$f"
done

# replace references to "template" with references to the language
# code in the copied materials:
perl -p -i -e 's/template/'"$lc"'/' "_${lc}-"{overview,pos,feat,dep}/*.md

tmp=`mktemp addlanguage-tmp-XXX`

# add the newly created collections to config.yml.
(perl -pe 'exit if(/^# Template\s*$/)' _config.yml;
 echo "# $language
#
  ${lc}-pos:
    output: true
    permalink: /${lc}/pos/:path.html
  ${lc}-feat:
    output: true
    permalink: /${lc}/feat/:path.html
  ${lc}-dep:
    output: true
    permalink: /${lc}/dep/:path.html
  ${lc}-overview:
    output: true
#"
 perl -pe '$past=1 if(/^# Template\s*$/); $_ = "" unless($past);' _config.yml;
) > $tmp; mv $tmp _config.yml

# (perl -pe 'exit if(/^\s*<li .*"#language-other"/)' index.md;
#  echo '  <li class="ui-state-default"><a href="#language-'${lc}'">'${language}'</a></li>'
#  perl -pe '$past=1 if(/^\s*<li .*"#language-other"/); 
#            $_ = "" unless($past);
#            exit if(/^\s*<!-- new tab template -->\s*$/)' index.md;
#  echo "<!-- \"${language}\" tab -->
# <div id=\"language-${lc}\" markdown=\"1\" class=\"ui-tabs-hide\">
# {% include ${lc}-status-table.html %}

# [Introduction](${lc}/overview/introduction.html)

# * [Tokenization](${lc}/overview/tokenization.html)
# * Morphology
#   * [General principles](${lc}/overview/morphology.html)
#   * [$language POS tags](${lc}/pos/index.html) ([single document](${lc}/pos/all.html))
#   * [$language features](${lc}/feat/index.html) ([single document](${lc}/feat/all.html))
# * Syntax
#   * [General principles](${lc}/overview/syntax.html)
#   * [Specific constructions](${lc}/overview/specific-syntax.html)
#   * [$language dependency relations](${lc}/dep/index.html) ([single document](${lc}/dep/all.html))

# [CoNLL-U format](format.html)

# </div>
# "
#  perl -pe '$past=1 if(/^\s*<!-- new tab template -->\s*$/);
#            $_ = "" unless($past)' index.md;
# ) > $tmp; mv $tmp index.md

git add _${lc}-{overview,pos,dep,feat} _includes/${lc}-{pos,feat,dep,status}-table.html _config.yml
git commit


echo "Please edit also gen_index/flags.json and gen_index/lcodes.json"
