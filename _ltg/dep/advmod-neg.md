---
layout: relation
title: 'advmod:neg'
shortdef: 'negation particle'
udver: '2'
---

The `advmod:neg` relation is used to confer negative polarity to any other element than predicate. Most often it is used for negation particle _ni_.

~~~ conllu
# sentence-label They have no idea who wrote it.
# text = Jim nav ni jausmys, kurs tū pīraksteja.
1	Jim	jis	PRON	pp3mpdn	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	2	obl	2:obl:dat	LvtbNodeId=a-ltg-Cairo-p12s1w1
2	nav	nabyut	VERB	vmnipii30ay	Evident=Fh|Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-ltg-Cairo-p12s1w2
3	ni	ni	PART	q	_	4	advmod:neg	4:advmod:neg	LvtbNodeId=a-ltg-Cairo-p12s1w3
4	jausmys	jausma	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	LvtbNodeId=a-ltg-Cairo-p12s1w4|SpaceAfter=No
5	,	,	PUNCT	zc	_	8	punct	8:punct	LvtbNodeId=a-ltg-Cairo-p12s1w5
6	kurs	kurs	DET	pr0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	8	nsubj	8:nsubj	LvtbNodeId=a-ltg-Cairo-p12s1w6
7	tū	tys	PRON	pd3msan	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	obj	8:obj	LvtbNodeId=a-ltg-Cairo-p12s1w7
8	pīraksteja	pīraksteit	VERB	vmnist330an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	4	acl	4:acl	LvtbNodeId=a-ltg-Cairo-p12s1w8|SpaceAfter=No
9	.	.	PUNCT	zs	_	2	punct	2:punct	LvtbNodeId=a-ltg-Cairo-p12s1w9

~~~

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:23 CET -->
