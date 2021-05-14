---
layout: relation
title:  'xcomp:pred'
shortdef : 'predicate'
udver: '2'
---

We follow the Irish UD treebank by using the label `xcomp:pred` to mark predicates of the substantive verb _bee_ (to be), which can have predicate arguments in the form of adverbial, adjectival and prepositional phrases.

As in Irish, this differs from copular constructions.

### Examples

#### Adjectival Predicate

~~~ sdparse
Nagh vel oo maynrey \n NEG are you happy
xcomp:pred(vel, maynrey)
nsubj(vel, oo)
~~~

#### PP Predicate

~~~ sdparse
Ta 'n lioar ass clou \n Is the book out-of print
case(clou, ass)
xcomp:pred(Ta, clou)
nsubj(Ta, lioar)
~~~

#### Adverbial Predicate

~~~ sdparse
Cuin vees ee back \n When will-be she back
xcomp:pred(vees, back)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:23 CEST 2021 -->
