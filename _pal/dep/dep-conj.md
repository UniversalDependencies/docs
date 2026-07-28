---
layout: relation
title: 'dep:conj'
shortdef: '<shortdef>'
udver: '2'
---

We use dep:conj for [conjunct](conj) relations that link a conjunct to what follows it.

As Middle Persian displays the finite verb as good as always towards the end, coordination with omission of identical parts usually results in incomplete first parts and complete second parts (see [conj]() for details). We assume that it is possible to coordinate pairs of constituents, which is something that cannot be annotated in UD. The solution is to assume the first part to be the conjunct dependent of the second: 'Peter a book to Mary (gives) and (Peter) a voucher to John gives.' Omission of continued subjects is regular in Middle Persian so that one can assume two rules: 
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

<!-- Interlanguage links updated Út 30. června 2026, 10:59:59 CEST -->
