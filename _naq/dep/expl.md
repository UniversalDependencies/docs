---
layout: relation
title: 'expl'
shortdef: 'expletive'
udver: '2'
---

This relation captures expletive or pleonastic nominals. These are nominals that appear in an argument position of a predicate but which do not themselves satisfy any of the semantic roles of the predicate. The main predicate of the clause (the verb or predicate adjective or noun) is the governor.

In Khoekhoe the subject person-gender-number is always in the clause-second position. In cases when the clause-initial position is not occupied by a lexical subject, the subject person-gender-number occurs as a clitic on whichever element occupies the cluase-initial position. In cases when the clause does not contain a lexical subject, which the subject person-gender-number clitic cross-references, this subject PGN clitic is annotated with [nsubj](naq-dep/nsubj). Otherwise, when the lexical subject is present in the clause, this subject is annotated with [nsubj](naq-dep/nsubj) and the cross-referencing person-gender-number clitic with `expl`.

This way of analysis is parallel to the use of `expl` relation in Greek and Bulgarian for doubling of a lexical nominal and a pronominal clitic, with the former still appearing in its regular role as an argument of the predicate.

~~~ sdparse
Xawe b ge aoba ra mû . \n But 3M.SG.SBJ DECL man.3M.SG.OBL IPFV see .
expl(mû, b)
nsubj(mû, aoba)
expl(see, 3M.SG.SBJ)
nsubj(see, man.3M.SG.OBL)
~~~

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
<!-- Interlanguage links updated So 10. května 2025, 18:15:31 CEST -->
