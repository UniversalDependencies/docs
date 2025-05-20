---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal dependents of another noun or noun phrase. In Khoekhoe nominal modifiers are mostly in conjunction with the [case](naq-dep/case) relation:

~~~ sdparse
Marias ǃoagu sunub \n Maria opposite side
nmod(sanub, Marias)
case(Marias, ǃoagu)
nmod(side, Maria)
case(Maria, opposite)
~~~

For nominal modifiers representing possession, both with and without possessive [postposition](naq-pos/ADP) _di_, the subtype [nmod:poss]() is used.

~~~ sdparse
Amob (di) ǂkhanis \n Amos ('s) book
nmod:poss(ǂkhanis, Amob)
case(Amob, (di))
nmod:poss(book, Amos)
case(Amos, ('s))
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:15:41 CEST -->
