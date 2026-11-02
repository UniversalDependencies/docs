---
layout: relation
title: 'xcomp:pred'
shortdef: 'predicate of ኮነ'
udver: '2'
---

We use `xcomp:pred` for the nominal or adjectival predicate of the verb ኮነ / *konə* "be, become" and of its verbal noun ምዃን / *mxwan* "being". ኮነ (and ምዃን) is the head of its clause, and its predicate is attached to it as `xcomp:pred`.

~~~ sdparse
ሃብታማት ምዃኖም ኣገሪሙና ። \n rich being.their surprise.CAUS.CONV.Sb3sm.Ob1p .
xcomp:pred(ምዃኖም, ሃብታማት)
csubj(ኣገሪሙና, ምዃኖም)
~~~

"That they are rich surprised us." (ti_ref_63)

~~~ sdparse
ኣስቴር ኣብ ሓጺር ግዜ ሃብታም ኮይና ። \n Aster in short time rich become.CONV.Sb3sf .
nsubj(ኮይና, ኣስቴር)
obl(ኮይና, ግዜ)
case(ግዜ, ኣብ)
amod(ግዜ, ሓጺር)
xcomp:pred(ኮይና, ሃብታም)
~~~

"Aster became rich in a short time." (ti_ref_144)
