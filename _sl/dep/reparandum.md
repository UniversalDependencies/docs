---
layout: relation
title: 'reparandum'
shortdef: 'overridden disfluency'
udver: '2'
---

The `reparandum` relation is used to annotate self-repairs in speech, i.e. instances where a speaker replaces a previously uttered content with a new one. The repaired unit can be syntactically complete or incomplete (i.e. unfinished words, phrases or clauses). In case of shared dependents between the reparandum and its repair, such as modifiers applicable to both, the dependent is attached to the repair, as illustrated in the second example below.


~~~ sdparse
da so te eee ti stroški čim manjši \n that are these-Fem eee these-Masc expenses very small
mark(manjši,da)
cop(manjši,so)
nsubj(manjši,stroški)
det(stroški,ti)
reparandum(ti,te)
mark(small,that)
cop(small,are)
nsubj(small,expenses)
det(expenses,these-Masc)
reparandum(these-Masc,these-Fem)
~~~

~~~ sdparse
kako orož- orožje pa to \n some weap- weapon or something
det(orožje,kako)
reparandum(orožje,orož-)
conj(orožje,to)
cc(to,pa)
det(weapon,some)
reparandum(weapon,weap-)
conj(weapon,something)
cc(something,or)
~~~


<!-- Interlanguage links updated Po 6. listopadu 2023, 21:43:27 CET -->
