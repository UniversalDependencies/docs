---
layout: relation
title: 'csubj:cleft'
shortdef: 'relative clause of a cleft'
udver: '2'
---

Clefting is common in Tigrinya. The clefted element is the predicate and the root of the sentence; it is followed by the copula እዩ / *ʔyu* and by a relativized clause with the prefix ዝ- / *z-*, which is attached to the clefted element as `csubj:cleft`.

~~~ sdparse
ምሸት እዩ ገዛ ዝ- በጽሐ ። \n evening be.PRS.Sb3sm home REL arrive.PFV.Sb3sm .
cop(ምሸት, እዩ)
csubj:cleft(ምሸት, በጽሐ)
obl(በጽሐ, ገዛ)
mark(በጽሐ, ዝ-)
~~~

"It was in the evening that he arrived home." (ti_ref_39a)

When the clefted element is itself a clause with its own subject, the relativized clause is annotated as [csubj:outer](https://universaldependencies.org/ti/dep/csubj-outer.html) instead.
