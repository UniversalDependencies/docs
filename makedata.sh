#!/bin/bash

set -u
set -e

DATA_DIRECTORY="_data"
POS_DATA_FILE="$DATA_DIRECTORY/postags.yaml"
FEATURE_DATA_FILE="$DATA_DIRECTORY/features.yaml"
RELATION_DATA_FILE="$DATA_DIRECTORY/relations.yaml"

# remove the old data files, if any
rm -f $POS_DATA_FILE $FEATURE_DATA_FILE $RELATION_DATA_FILE
mkdir -p $DATA_DIRECTORY

for s in "pos" "feat" "dep"; do
    collections=`ls -d _u-$s _*/$s | egrep -v '^_(template|ext)-(pos|feat|dep)$' | perl -pe 's/^_//' | tr '\n' ' '`

    # directory names are collection names with an underscore prefix.
    DIRECTORIES=$(echo " $collections" | perl -pe 's/ (\S)/ _$1/g')

    echo "coll '$collections'"
    echo "dir  '$DIRECTORIES'"

    # unique entry (document) names from per-collection directories
    entries=$(find $DIRECTORIES -name '*.md' -printf '%f\n' |
	perl -pe 's/\.md$//' | sort | uniq)

    if [ "$s" = "pos" ]; then
	       out=$POS_DATA_FILE;
    elif [ "$s" = "feat" ]; then
	       out=$FEATURE_DATA_FILE;
    elif [ "$s" = "dep" ]; then
	       out=$RELATION_DATA_FILE;
    else
	echo "internal error"
	exit 1
    fi

    # generate YAML with relations and collections
    for r in $entries; do
	# special case for labels that are not allowed as filenames (see
	# https://github.com/UniversalDependencies/docs/issues/20)
	e=`echo "$r" | perl -pe 's/^_//; s/_$//'`
	echo "- label: '$e'"
	# (not really "languages", but close enough here)
	echo "  languages:"
	for l in $collections; do
	    if [ -e "_$l/$r.md" ]; then
		# collection directory name vs. permalink variance (see
		# https://github.com/UniversalDependencies/docs/issues/57)
		p=`echo "$l" | perl -pe 's/-(pos|feat|dep)$/\/$1/'`
		echo "  - label: '$p'"
		# Touch the file. Otherwise its HTML will not be re-rendered because only the YAML data file will change.
		grep -v '<!-- Interlanguage links updated' "_$l/$r.md" > filtered ; mv filtered "_$l/$r.md"
		echo '<!-- Interlanguage links updated' `date` '-->' >> "_$l/$r.md"
	    fi
	done
    done > $out

    echo "Found" \
	$(echo "$entries" | wc -w) "entries in" \
	$(echo "$collections" | wc -w) "collections" >&2
done
