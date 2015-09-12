---
layout: base
title:  'Syntax'
permalink: da/overview/specific-syntax.html
---

# Specific constructions

This document is a placeholder for the language-specific overview of
guidelines for specific constructions.

~~~sdparse
My daughter bought some bread and cheese .
NMOD(daughter, My)
SBJ(bought, daughter)
OBJ(bought, and)
NMOD(and, some)
COORD(and, bread)
COORD(and, cheese)
~~~

~~~sdparse
Min datter købte nogle brød og ost .
nobj(Min, datter)
subj(købte, Min)
dobj(købte, nogle)
nobj(nogle, brød)
coord(brød, og)
conj(og, ost)
~~~

~~~sdparse
Min dotter köpte några bröd och ost .
DT(dotter, Min)
SS(köpte, dotter)
OO(köpte, bröd)
DT(bröd, några)
CC(bröd, ost)
++(ost, och)
~~~
