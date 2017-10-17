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
      if [ -e "$i/$new.md" ] ; then
        echo $i/$new.md already exists.
      else
        git mv $i/$old.md $i/$new.md
        perl -pe 's/title:\s*\x{27}'$old'\x{27}/title: \x{27}'$new'\x{27}\nredirect_from: "'$lc'\/'$type'\/'$old'.html"/;' < $i/$new.md > $tmp
        mv $tmp $i/$new.md
      fi
    done
    # Update the label in references from all md files.
    for c in overview pos feat dep ; do
      for i in _*-$c ; do
        echo $i s/$old/$new/g
        for j in $i/*.md ; do
          perl -pe 's/\['$old'\]\(\)/['$new']()/g; s/\[(.*?)\]\('$old'\)/[$1]('$new')/; s/\[(.*?)\]\(..\/'$type'\/'$old'\)/[$1](..\/'$type'\/'$new')/; s/\`'$old'\`/\`'$new'\`/g;' < $j > $tmp
          mv $tmp $j
        done
      done
    done
    # Update the label in references from the tables of labels.
    for j in _includes/*.html ; do
      echo $j s/$old/$new/g
      perl -pe 's/<a>'$old'<\/a>/<a>'$new'<\/a>/g' < $j > $tmp
      mv $tmp $j
    done
}



#------------------------------------------------------------------------------
# Marks all template pages as v2-compliant.
#------------------------------------------------------------------------------
function templates_are_v2
{
    for i in _template-* ; do
        for j in $i/*.md ; do
            if ! grep -q udver $j ; then
                echo $j
                perl -CDS -e 'while(<>) { if(m/^---/) { $n++; print("udver: \x{27}2\x{27}\n") if($n==2); } print; }' < $j > $tmp
                mv $tmp $j
            fi
        done
    done
}



#------------------------------------------------------------------------------
# MAIN
#------------------------------------------------------------------------------

tmp=`mktemp docv1tov2-tmp-XXX`

#rename_label pos CONJ CCONJ
#rename_label feat Negative Polarity
#rename_label dep dobj obj
#rename_label dep mwe fixed
#rename_label dep name flat
#rename_label dep remnant orphan
templates_are_v2

