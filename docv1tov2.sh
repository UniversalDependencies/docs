#!/bin/bash

### WARNING: this is a brittle and poorly tested script that makes
### bulk additions to the repository. Don't run this unless you're
### sure what you're doing and know how to clean up the repo if
### anything goes wrong.

tmp=`mktemp docv1tov2-tmp-XXX`
# The CONJ POS tag has been renamed CCONJ. Rename all CONJ files in all languages and in the template.
for i in _*-pos ; do
  lc=`perl -e '$d=qq('$i'); $d=~m/_(.*)-pos/; print $1;'`
  echo $lc
  #if [ -e "$i/CCONJ.md" ] ; then
    #echo $i/CCONJ.md already exists.
  #else
    #git mv $i/CONJ.md $i/CCONJ.md
    perl -pe 's/title:\s*\x{27}CONJ\x{27}/title: \x{27}CCONJ\x{27}\nredirect_from: "'$lc'\/pos\/CONJ.html"/; s/\`CONJ\`/\`CCONJ\`/g;' < $i/CCONJ.md > $tmp
    mv $tmp $i/CCONJ.md
  #fi
  # Edit links to CONJ from any other POS documentation file.
done
for c in overview pos feat dep ; do
  for i in _*-$c ; do
    echo $i
    for j in $i/*.md ; do
      perl -pe 's/\[CONJ\]\(\)/[CCONJ]()/g; s/\[(.*?)\]\(..\/pos\/CONJ\)/[$1](..\/pos\/CCONJ)/;' < $j > $tmp
      mv $tmp $j
    done
  done
done
for j in _includes/*.html ; do
  echo $j
  perl -pe 's/<a>CONJ<\/a>/<a>CCONJ<\/a>/g' < $j > $tmp
  mv $tmp $j
done
# git commit -a -m 'Renamed CONJ to CCONJ everywhere.'
