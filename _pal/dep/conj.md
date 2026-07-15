---
layout: relation
title: 'conj'
shortdef: '<shortdef>'
udver: '2'
---

Conjunct relations are underspecified in Middle Persian. They can link equal parts in a flat structure where the sequence is of no relevance. Further dependents following a conjunct can dependent on the coordinated phrase, i.e. modify both parts, or only to the last. In the latter case, the sequence does matter.

- "ease and bliss on earth" (i.e. ease on earth and bliss on earth)
~~~ sdparse
āsānīh ud xwārīh ī pad gētī \n ease and bliss EZ in world
cc(xwārīh, ud)
conj(āsānīh, xwārīh)
det(gētī, ī)
case(gētī, pad)
nmod(āsānīh, gētī)
~~~

- "How did he create the Amahraspands and the spirit of wisdom?" (i.e. the spirit of wisdom and the Amahraspands)
~~~ sdparse
u =š amahraspandān ud mēnōy ī xrad čiyōn dād \n and him Amahraspand.PL and spirit EZ wisdom how created
obj(dād, amahraspandān)
conj(amahraspandān, mēnōy
cc(mēnōy, ud)
det(xrad, ī)
nmod(mēnōy, xrad)
~~~

- "And whoever is thinking of gossip and mockery, should be kept at a distance!"
~~~ sdparse
ud kē gufsišn ud afsōsgarīh handēšēd dūr dāštan \n and who gossip and mockery thinks far keep.NEC
nsubj(handēšēd, kē)
obj(handēšēd, gufsišn)
cc(afsōsgarīh, ud-4)
conj(gufsišn, asōsgarīh)
~~~

Middle Persian has a relatively low referential density and omission of identical parts in coordination is common. This does not pose a problem if coordination only affects two equal parts (e.g. two objects). However, it is also possible to coordinate pairs. In English, these may seem like two coordinated sentences with simple omission of identical parts, e.g. <br>'Peter gives a book to Mary and a voucher to John.' as short for 'Peter gives a book to Mary and (Peter gives) a voucher to John.'<br>In Middle Persian, the most common word order would be: 'Peter a book to Mary and a voucher to John gives.' Following the UD principle of linking conjuncts only to what precedes them would result in a verbless head clause 'Peter a book to Mary' as head of 'and a voucher to John gives.', which is not felicitous.

- "A woman (is not allowed) not to take a husband and a man is not allowed not to take a wife." (*+nē +pāduxšāy* is omitted)
~~~ sdparse
zan šōy nē kirdan +nē +pāduxšāy ud mard zan nē kirdan nē pāduxšāy \n woman husband not make +not +authorised and man woman not make not authorised
cc(pāduxšāy, ud)
nsubj(pāduxšāy, mard-8)
xcomp(pāduxšāy, kirdan-11)
advmod(pāduxšāy, nē-12)
obj(kirdan-11, zan-9)
advmod(kirdan-11, nē-10)
obj(kirdan-4, šōy)
advmod(kirdan-4, nē-3)
nsubj(+pāduxšāy, zan-1)
xcomp(+pāduxšāy, kirdan-4)
advmod(+pāduxšāy, nē-5)
~~~

<br>An alternative analysis would be an embedded conjunct clause: 'Peter a book to Mary (embedded: and a voucher to John) gives.' but this cannot be reconstructed as two full clauses without change of word order because the direct reconstruction results in an ungrammatical structure: 'Peter a book to Mary and (Peter) a voucher to John (gives) gives.' This analysis would violate the principle of linking conjuncts to what precedes them.

The obviously correct analysis is that it is possible to coordinate single parts but also pairs, which is something that cannot be annotated in UD. The solution is to assume the first part to be the conjunct dependent of the second: 'Peter a book to Mary (gives) and (Peter) a voucher to John gives.' Omission of continued subjects is regular in Middle Persian so that one can assume two rules: 
1. Omit continued subject: 'Peter a book to Mary gives. (Peter) a voucher to John gives.'
2. Coordinate and omit identical parts: 'Peter a book to Mary (gives) and a voucher to John gives.'
The remaining problem is the UD principle of linking conjuncts to what precedes them, which we solve by renaming such dependent relations as `dep:conj`.

Coordination in Middle Persian is also semantically underspecified. This becomes easily apparent in the law book where one finds statements preceded by several conditions, which may or may not share identical participants. Some coordinated clauses form one single conditions, other coordinated clauses form a second condition. In the latter case, Middle Persian tends to repeat the subjunctor but this does not seem to be obligatory. Thus, clause order matters and the logic of coordination differs ('and, as well' vs. 'also, in addition'). Apparently, this logical difference is not important enough to receive a different structural or lexical representation in Middle Persian, even though it is likely that the intonation pattern differed. However, the manuscripts do not give any hints on that.

ex ka ud ka1+2
~~~ sdparse

~~~ sdparse

~~~


<!-- Interlanguage links updated Út 30. června 2026, 10:59:54 CEST -->
