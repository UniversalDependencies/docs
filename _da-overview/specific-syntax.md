---
layout: base
title:  'Syntax'
permalink: da/overview/specific-syntax.html
---

# Specific constructions

This document is a placeholder for the language-specific overview of
guidelines for specific constructions.

~~~sdparse
DET NOUN VERB DET NOUN CONJ NOUN PUNCT
NMOD(NOUN-2, DET-1)
SBJ(VERB, NOUN-2)
OBJ(VERB, CONJ)
NMOD(CONJ, DET-4)
COORD(CONJ, NOUN-5)
COORD(CONJ, NOUN-7)
~~~

~~~sdparse
DET NOUN VERB DET NOUN CONJ NOUN PUNCT
nobj(DET-1, NOUN-2)
subj(VERB, DET-1)
dobj(VERB, DET-4)
nobj(DET-4, NOUN-5)
coord(NOUN-5, CONJ)
conj(CONJ, NOUN-7)
~~~

~~~sdparse
DET NOUN VERB DET NOUN CONJ NOUN PUNCT
DT(NOUN-2, DET-1)
SS(VERB, NOUN-2)
OO(VERB, NOUN-5)
DT(NOUN-5, DET-4)
CC(NOUN-5, NOUN-7)
++(NOUN-7, CONJ)
~~~
