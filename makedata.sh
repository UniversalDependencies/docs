#!/bin/bash

set -u
set -e

DATA_DIRECTORY="_data"
RELATION_DATA_FILE="$DATA_DIRECTORY/relations.yaml"

COLLECTIONS=`ls -d _*-dep | egrep -v '^_template-dep$' | perl -pe 's/^_//' | tr '\n' ' '`

# directory names are collection names with an underscore prefix.
DIRECTORIES=$(echo " $COLLECTIONS" | perl -pe 's/ (\S)/ _$1/g')

echo "coll '$COLLECTIONS'"
echo "dir  '$DIRECTORIES'"

# unique relation (document) names from per-collection directories
RELATIONS=$(find $DIRECTORIES -name '*.md' -printf '%f\n' | 
    perl -pe 's/\.md$//' | sort | uniq)

# clear data dir, if any
if [ -e $DATA_DIRECTORY ]; then
    rm -rf $DATA_DIRECTORY
fi
mkdir $DATA_DIRECTORY

# generate YAML with relations and collections
for r in $RELATIONS; do 
    # special case for labels that are not allowed as filenames (see
    # https://github.com/UniversalDependencies/docs/issues/20)
    e=`echo "$r" | perl -pe 's/^_//; s/_$//'`
    echo "- label: '$e'"
    # (not really "languages", but close enough here)
    echo "  languages:"
    for l in $COLLECTIONS; do
	if [ -e "_$l/$r.md" ]; then
	    # collection directory name vs. permalink variance (see
	    # https://github.com/UniversalDependencies/docs/issues/57)
	    p=`echo "$l" | perl -pe 's/-(pos|feat|dep)$/\/$1/'`
	    echo "  - label: '$p'"
	fi
    done
done > $RELATION_DATA_FILE

echo "Found" \
    $(echo "$RELATIONS" | wc -w) "relations in" \
    $(echo "$COLLECTIONS" | wc -w) "collections" >&2
