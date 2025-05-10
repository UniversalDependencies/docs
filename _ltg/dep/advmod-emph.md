---
layout: relation
title: 'advmod:emph'
shortdef: 'emphasizing word, intensifier'
udver: '2'
---

The `advmod:emph` relation is used attach emphasizing particles to the words they emphasize.

~~~ conllu
# sentence-label He brought a car, but his brother only a bike.
# text = Jis nūpierka mašynu, bet juo bruoļs tik ritini.
1	Jis	jis	PRON	pp3msnn	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj	LvtbNodeId=a-ltg-Cairo-p15s1w1
2	nūpierka	nūpierkt	VERB	vmnist130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-ltg-Cairo-p15s1w2
3	mašynu	mašyna	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	2	obj	2:obj	LvtbNodeId=a-ltg-Cairo-p15s1w3|SpaceAfter=No
4	,	,	PUNCT	zc	_	7	punct	7.1:punct	LvtbNodeId=a-ltg-Cairo-p15s1w4
5	bet	bet	CCONJ	cc	_	7	cc	7.1:cc	LvtbNodeId=a-ltg-Cairo-p15s1w5
6	juo	jis	PRON	pp3msgn	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nmod	7:nmod	LvtbNodeId=a-ltg-Cairo-p15s1w6
7	bruoļs	bruoļs	NOUN	ncmsn2	Case=Nom|Gender=Masc|Number=Sing	2	conj	7.1:nsubj	LvtbNodeId=a-ltg-Cairo-p15s1w7
7.1	nopirka	nopirkt	VERB	vmnist130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	_	_	2:conj	LvtbNodeId=a-ltg-Cairo-p15s1x4
8	tik	tik	PART	q	_	9	advmod:emph	9:advmod:emph	LvtbNodeId=a-ltg-Cairo-p15s1w8
9	ritini	ritiņs	NOUN	ncmsa2	Case=Acc|Gender=Masc|Number=Sing	7	orphan	7.1:obj	LvtbNodeId=a-ltg-Cairo-p15s1w9|SpaceAfter=No
10	.	.	PUNCT	zs	_	2	punct	2:punct	LvtbNodeId=a-ltg-Cairo-p15s1w10

~~~

<!-- Interlanguage links updated So 10. května 2025, 18:14:53 CEST -->
