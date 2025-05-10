---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

A `cop` is the relation between the nominal predicate and the copulas _a_ (present) and _i_ (non-present). The verbs _hâ_ "be present" and _ǀkhai_ "be absent", despite often being counted among copular verbs, are not analyzed as `cop` for the purposes of UD. The main reasoning is that they function as regular verbs in a clause: they are usualy located in the clause-final position.

Copulas are treated as dependents of the nominal predicate (a [noun](naq-pos/NOUN) or an [adjective](naq-pos/ADJ))

~~~ sdparse
Amob ge a gaxu ao . \n Amos DECL is tall man .
cop(ao, a)
cop(man, is)
~~~

~~~ sdparse
Amob ge a gaxu . \n Amos DECL is tall .
cop(gaxu, a)
cop(tall, is)
~~~

Present copula _a_ may be omitted. 

~~~ sdparse
Amob ge gaxu ao . \n Amos DECL tall man .
nsubj(ao, Amob)
aux(ao, ge)
amod(ao, gaxu)
nsubj(man, Amos)
aux(man, DECL)
amod(man, tall)
~~~

If the copula is accompanied by other auxiliaries for tense, aspect, etc., then they are also given a flat structure, and taken as dependents of the lexical predicate:

~~~ sdparse
Amob ge ge gaxu i . \n Amos DECL PST tall was .
cop(gaxu, i)
aux(gaxu, ge-3)
cop(tall, was)
aux(tall, PST)
~~~

Note that particles _a_ and _i_ are also used in other constructions, for example, with stative verbs. 

~~~ sdparse
Amob ge a mâ . \n Amos DECL STAT.PRS stand .
aux(mâ, a)
aux(stand, STAT.PRS)
~~~

For non-verbal locational and existential predication, the verbs _hâ_ "be present" or _ǀkhai_ "be absent" are used. 

~~~ sdparse
ǀGôan ge skol-i ai hâ . \n Children DECL school at be_present .
nsubj(hâ, ǀGôan)
obl(hâ, skol-i)
nsubj(be_present, Children)
obl(be_present, school)
~~~

<!-- Interlanguage links updated So 10. května 2025, 18:15:17 CEST -->
