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
conj(amahraspandān, mēnōy)
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
conj(gufsišn, afsōsgarīh)
~~~

Middle Persian has a relatively low referential density and omission of identical parts in coordination is common. This does not pose a problem if coordination only affects two equal parts (e.g. two objects). However, it is also possible to coordinate pairs. In English, these may seem like two coordinated sentences with simple omission of identical parts, e.g. <br>'Peter gives a book to Mary and a voucher to John.' as short for 'Peter gives a book to Mary and (Peter gives) a voucher to John.'<br>In Middle Persian, the most common word order would be: 'Peter a book to Mary and a voucher to John gives.' Following the UD principle of linking conjuncts only to what precedes them would result in a verbless head clause 'Peter a book to Mary' as head of 'and a voucher to John gives.', which is not felicitous.

- "A woman (is not allowed) not to take a husband and a man is not allowed not to take a wife." (omitted word in parantheses)
~~~ sdparse
zan šōy nē kirdan ud mard zan nē kirdan nē pāduxšāy \n woman husband not make and man woman not make not authorised
cc(pāduxšāy, ud)
nsubj(pāduxšāy, mard)
xcomp(pāduxšāy, kirdan-9)
advmod(pāduxšāy, nē-10)
obj(kirdan-9, zan-7)
advmod(kirdan-9, nē-8)
obj(kirdan-4, šōy)
advmod(kirdan-4, nē-3)
~~~

In the following example, the resumption of the subject by the enclitic pronoun might be motivated by a long relative clause following the priests (omitted in this example.
- "For I (killed) nine hundred priests over this riddle and I killed nine daughters of the Spitām family."
~~~ sdparse
čē man abar ēn frašn nōsad mowmard u =m nō duxt ī spitāmān ōzad \n because I over this riddle nine_hundred priest and me nine daughter EZ Spitamid killed
cc(ōzad, u)
nsubj(ōzad, =m)
obj(ōzad, duxt)
nummod(duxt, dō)
det(spitāmān, ī)
nmod(duxt, spitāmān)
~~~

In the following example, the identical verb of the relative clauses has been omitted in the first one. Due to the ergative construction, *frōxt* can be interpreted as both active and passive.
- "A legal predecessor who (sold) an object to a person and the person whom that object has been sold to, are litigant regarding that object in another town." (omitted word in parantheses)
~~~ sdparse
dastwar kē xwāstag ō kas ud kas kē ān xwāstag awi =š frōxt pad ān xwāstag pad any šahr hamēmāl hēnd \b legal_predecessor REL object to person and person REL that object to him sold at that object in other town litigant are
cc(kas, ud)
conj(dastwar, kas)
nsubj(hamēmāl, dastwar)
mark(frōxt, kē-8)
acl:relcl(kas, frōxt)
det(xwāstag, det)
nsubj:pass(frōxt, xwāstag)
case(=š, awi)
obl(frōxt, =š)
~~~

<br>An alternative analysis would be an embedded conjunct clause: 'Peter a book to Mary (embedded: and a voucher to John) gives.' but this cannot be reconstructed as two full clauses without change of word order because the direct reconstruction results in an ungrammatical structure: 'Peter a book to Mary and (Peter) a voucher to John (gives) gives.' This analysis would also violate the principle of linking conjuncts to what precedes them.

The obviously correct analysis is that it is possible to coordinate not only single parts but also pairs, which is something that cannot be annotated in UD. The solution is to assume the first part to be the conjunct dependent of the second: 'Peter a book to Mary (gives) and (Peter) a voucher to John gives.' Omission of continued subjects is regular in Middle Persian so that one can assume two rules: 
1. Omit continued subject: 'Peter a book to Mary gives. (Peter) a voucher to John gives.'
2. Coordinate and omit identical parts: 'Peter a book to Mary (gives) and a voucher to John gives.'
The remaining problem is the UD principle of linking conjuncts to what precedes them, which we solve by renaming such dependent relations as `dep:conj`.

- "A woman (is not allowed) not to take a husband and a man is not allowed not to take a wife." (omitted word in parantheses)
~~~ sdparse
zan šōy nē kirdan ud mard zan nē kirdan nē pāduxšāy \n woman husband not make and man woman not make not authorised
cc(pāduxšāy, ud)
nsubj(pāduxšāy, mard)
xcomp(pāduxšāy, kirdan-9)
advmod(pāduxšāy, nē-10)
obj(kirdan-9, zan-7)
advmod(kirdan-9, nē-8)
obj(kirdan-4, šōy)
advmod(kirdan-4, nē-3)
orphan(zan-1, kirdan-4)
dep:conj(pāduxšāy, zan-1)
~~~

Coordination in Middle Persian is also semantically underspecified. This becomes easily apparent in the law book where one finds statements preceded by several conditions, which may or may not share identical participants. Some coordinated clauses form one single conditions (annotated as a conjunct), other coordinated clauses form a second condition (annotated as another subclause). In the latter case, Middle Persian tends to repeat the subjunctor but this does not seem to be obligatory. Thus, clause order matters and the logic of coordination differs ('and, as well' vs. 'also, in addition'). Apparently, this logical difference is not important enough to receive a different structural or lexical representation in Middle Persian, even though it is likely that the intonation pattern differed. However, the manuscripts do not give any hints on that.

- "If (he) does not agree to the good deed and (it is) not his by law, even if (they) are doing (it) for him, then (it) will not count in his favour."
~~~ sdparse
ka pad ān kirbag nē hamdādestān u =š nē pad dād ka =z kas ōy rāy kunēnd ēg =iš bē ō xwēšīh nē rasēd \n if at that good_deed not agreeing and him not by law if also he for do.3PL then him forth to ownership not reaches
mark(hamdādestān, ka-1)
cc(dād, u)
conj(hamdādestān, dād)
advcl(rasēd, hamdādestān)
mark(kunēnd, ka-12)
advcl(rasēd, kunēnd)
~~~


<!-- Interlanguage links updated Út 30. června 2026, 10:59:54 CEST -->
