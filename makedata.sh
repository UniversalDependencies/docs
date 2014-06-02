#!/bin/bash

set -u
set -e

DATA_DIRECTORY="_data"
RELATION_DATA_FILE="$DATA_DIRECTORY/relations.yaml"

LANGUAGES="en fi usd"

# directory names are language names with an underscore prefix.
DIRECTORIES=$(echo $LANGUAGES | perl -pe 's/(\b\S)/_$1/g')

# unique relation (document) names from per-language directories
RELATIONS=$(find $DIRECTORIES -name '*.md' -printf '%f\n' | 
    perl -pe 's/\.md$//' | sort | uniq)

# clear data dir, if any
if [ -e $DATA_DIRECTORY ]; then
    rm -rf $DATA_DIRECTORY
fi
mkdir $DATA_DIRECTORY

# generate YAML with relations and languages
for r in $RELATIONS; do 
    echo "- label: '$r'"
    echo "  languages:"
    for l in $LANGUAGES; do
	if [ -e "_$l/$r.md" ]; then
	    echo "  - label: '$l'"
	fi
    done
done > $RELATION_DATA_FILE

echo "Found" \
    $(echo "$RELATIONS" | wc -w) "relations in" \
    $(echo "$LANGUAGES" | wc -w) "languages" >&2
