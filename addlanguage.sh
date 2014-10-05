#!/bin/bash

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

tmp=`mktemp`

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

(perl -pe 'exit if(/^\s*<li .*"#language-other"/)' index.md;
 echo '  <li class="ui-state-default"><a href="#language-'${lc}'">'${language}'</a></li>'
 perl -pe '$past=1 if(/^\s*<li .*"#language-other"/); 
           $_ = "" unless($past);
           exit if(/^\s*<!-- new tab template -->\s*$/)' index.md;
 echo "<!-- \"${language}\" tab -->
<div id=\"language-${lc}\" markdown=\"1\" class=\"ui-tabs-hide\">
{% include ${lc}-status-table.html %}

[Introduction](${lc}/overview/introduction.html)

* [Tokenization](${lc}/overview/tokenization.html)
* Morphology
  * [General principles](${lc}/overview/morphology.html)
  * [$language POS tags](${lc}/pos/index.html) ([single document](${lc}/pos/all.html))
  * [$language Features](${lc}/feat/index.html) ([single document](${lc}/feat/all.html))
* Syntax
  * [General principles](${lc}/overview/syntax.html)
  * [$language Relations](${lc}/dep/index.html) ([single document](${lc}/dep/all.html))

<small> 
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>
"
 perl -pe '$past=1 if(/^\s*<!-- new tab template -->\s*$/);
           $_ = "" unless($past)' index.md;
) > $tmp; mv $tmp index.md

git add _${lc}-{overview,pos,dep,feat} _includes/${lc}-{pos,feat,dep,status}-table.html index.md _config.yml
git commit
