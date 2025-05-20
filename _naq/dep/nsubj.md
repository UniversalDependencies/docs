---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject (`nsubj`) is a nominal which is the syntactic subject a clause. In Khoekhoe, the second position in the clause is always occupied by the person-gender-number subject marker. If there is a nominal subject in the clause initial position, the subject person-gender-number is suffixed to it and this nominal has the `nsubj` relation. Otherwise, the subject person-gender-number is realized as a clitic. The full syntactic subject can occur in a different position in the clause, in this case it takes take the oblique (accusative) [case](naq-feat/Case) suffix _-a_. In this case the subject person-gender-number clitic has the [expl](naq-dep/expl) relation and the full nominal subject has the `nsubj` relation.

~~~ sdparse
Aob ge ra mû . \n Man.3M.SG.SBJ DECL IPFV see .
nsubj(mû, Aob)
nsubj(see, Man.3M.SG.SBJ)
~~~

~~~ sdparse
Xawe b ge ra mû . \n But 3M.SG.SBJ DECL IPFV see .
nsubj(mû, b)
nsubj(see, 3M.SG.SBJ)
~~~

~~~ sdparse
Xawe b ge aoba ra mû . \n But 3M.SG.SBJ DECL man.3M.SG.OBL IPFV see .
expl(mû, b)
nsubj(mû, aoba)
expl(see, 3M.SG.SBJ)
nsubj(see, man.3M.SG.OBL)
~~~

The governor of the `nsubj` relation is not always a verb: with non-verbal predication the root of the clause can be an adjective or a noun.

~~~ sdparse
Amob ge a gaxu . \n Amos.3M.SG.SBJ DECL is tall .
nsubj(gaxu, Amob)
cop(tall, Amos.3M.SG.SBJ)
~~~

The subject of the clause can also be a nominalized clause (see [csubj](naq-dep/csubj)). 

For subtypes [nsubj:pass]() and [csubj:pass]()) are used for the grammatical subject of a passivized verb.
<!-- Interlanguage links updated So 10. května 2025, 18:15:47 CEST -->
