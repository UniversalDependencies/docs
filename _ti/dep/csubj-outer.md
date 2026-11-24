---
layout: relation
title: 'csubj:outer'
shortdef: 'outer clausal subject'
udver: '2'
---

We use `csubj:outer` for the clausal subject of a copular clause whose predicate is itself a clause with its own subject, to signal that it is not the subject of the nested clause. The subject clause is typically a headless relative clause with ዝ- / *z-*.

~~~ sdparse
እቲ ዝ- ይዝክርኦ እቲ ተግባር ፍጹም ቅቡል ዘይ- ምዃኑ ጥራሕ እዩ ። \n the REL remember.IPFV.Sb1s.Ob3sm the act completely acceptable NEG being.its only be.PRS.Sb3sm .
csubj:outer(ምዃኑ, ይዝክርኦ)
nsubj(ምዃኑ, ተግባር)
xcomp:pred(ምዃኑ, ቅቡል)
cop(ምዃኑ, እዩ)
~~~

"What I remember is only that the act was not at all acceptable." (ti_ref_102b)

~~~ sdparse
እታ ዝ- በለጸት ግን ፡ እታ ኣነ ዝ- ገዛእኩዋ እያ ። \n the.F REL surpass.PFV.Sb3sf but , the.F I REL buy.PFV.Sb1s.Ob3sf be.PRS.Sb3sf .
csubj:outer(ገዛእኩዋ, በለጸት)
nsubj(ገዛእኩዋ, ኣነ)
cop(ገዛእኩዋ, እያ)
~~~

"But the best one is the one that I bought." (ti_ref_184)

When the predicate clause has no subject of its own, the clausal subject is plain [csubj](https://universaldependencies.org/u/dep/csubj.html).
<!-- Interlanguage links updated Út 10. listopadu 2026, 22:38:36 CET -->
