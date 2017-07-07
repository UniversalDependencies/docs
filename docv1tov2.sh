#!/bin/bash

### WARNING: this is a brittle and poorly tested script that makes
### bulk additions to the repository. Don't run this unless you're
### sure what you're doing and know how to clean up the repo if
### anything goes wrong.

# The CONJ POS tag has been renamed CCONJ. Rename all CONJ files in all languages and in the template.
for i in _*-pos ; do
  if [ -e "$i/CCONJ.md" ] ; then
    echo $i/CCONJ.md already exists.
  fi
done

