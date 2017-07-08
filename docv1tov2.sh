#!/bin/bash

### WARNING: this is a brittle and poorly tested script that makes
### bulk additions to the repository. Don't run this unless you're
### sure what you're doing and know how to clean up the repo if
### anything goes wrong.



#------------------------------------------------------------------------------
# Renames a v1 label to a v2 label. Tries to also substitute references from
# other files.
# $1 ... type (pos|feat)
# $2 ... old label
# $3 ... new label
#------------------------------------------------------------------------------
function rename_label
{
    type=$1
    old=$2
    new=$3
    # Rename the files about the label in all languages and in the template.
    for i in _*-$type ; do
      lc=`perl -e '$d=qq('$i'); $d=~m/_(.*)-$type/; print $1;'`
      echo $lc $type $old '-->' $new
      if [ -e "$i/$old.md" ] ; then
        echo $i/$old.md already exists.
      else
        git mv $i/$old.md $i/$new.md
        perl -pe 's/title:\s*\x{27}'$old'\x{27}/title: \x{27}'$new'\x{27}\nredirect_from: "'$lc'\/'$type'\/'$old'.html"/;' < $i/$new.md > $tmp
        mv $tmp $i/$tmp.md
      fi
    done
}



#------------------------------------------------------------------------------
# MAIN
#------------------------------------------------------------------------------

tmp=`mktemp docv1tov2-tmp-XXX`

# The CONJ POS tag has been renamed CCONJ. Rename all CONJ files in all languages and in the template.
rename_label pos CONJ CCONJ

for c in overview pos feat dep ; do
  for i in _*-$c ; do
    echo $i
    for j in $i/*.md ; do
      perl -pe 's/\[CONJ\]\(\)/[CCONJ]()/g; s/\[(.*?)\]\(CONJ\)/[$1](CCONJ)/; s/\[(.*?)\]\(..\/pos\/CONJ\)/[$1](..\/pos\/CCONJ)/; s/\`CONJ\`/\`CCONJ\`/g;' < $j > $tmp
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
