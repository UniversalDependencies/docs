---
layout: relation
title:  'amod'
shortdef : 'adjectival modifier'
---

Nouns may take adjectival modifiers, which are marked with the
dependency type `amod`. 

~~~ sdparse
Азамат үлкен бір ағаш көрді . \n Azamat big one tree sees . 
amod(ағаш-4, үлкен-2)
subj(көрді-5, Азамат-1)
obj(көрді-5, ағаш-4)
~~~

Ordinal numerals:

The `amod` relation is also used for ordinal numerals. Note that these may not be explicitly marked in the morphology.

~~~ sdparse
1968 жылдан бастап Ширазда театр фестивалы өткізіліп тұрды . \n 1968 year-from starting Shiraz-in theatre festival take-place does .
amod(жылдан-2, 1968-1)
nmod(бастап-3, жылдан-2)
~~~

~~~ sdparse
Қызметін 1933 жылы ғана бастаған . \n His-service 1993rd year only he-began .
amod(жылы-3, 1993-2)
~~~

Locative attributives:

Substantives in the attributive form of the locative (-DAGI) are also marked with `amod`. (Pending clarification)

~~~ sdparse
Олар әрдайым үлкен үйдің алдындағы бақшада бірге ойнайды . \n They always big house-of front-in garden-in together play .
amod(бақшада-6, алдындағы-5)
nmod(ойнайды-8, бақшада-6)
subj(ойнайды-8, Олар-1)
~~~


<!-- Interlanguage links updated Út zář 29 20:23:18 CEST 2020 -->
