---
layout: base
title:  'Statistics of nmod:part in UD_Uzbek-UzUDT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UzUDT: Relations: `nmod:part`

This relation is a language-specific subtype of <tt><a href="uz_uzudt-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="uz_uzudt-dep-nmod-poss.html">nmod:poss</a></tt>.

2 nodes (0%) are attached to their parents as `nmod:part`.

2 instances of `nmod:part` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `nmod:part`: <tt><a href="uz_uzudt-pos-NUM.html">NUM</a></tt>-<tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:part	color:blue
1	bir	bir	NUM	M	_	2	nummod	_	_
2	yili	yil	NOUN	N	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	20	nmod	_	_
3	bahor	bahor	NOUN	N	Case=Nom	4	nmod:poss	_	_
4	kunlarining	kun	NOUN	N	Case=Gen|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	5	nmod:part	_	_
5	birida	bir	NUM	M	_	20	nmod	_	_
6	,	,	PUNCT	Y	_	5	punct	_	_
7	shvetsariyaning	shvetsariya	NOUN	N	_	9	nmod:poss	_	_
8	bir	bir	DET	M	PronType=Ind	9	det	_	_
9	vokzalida	vokzal	NOUN	N	_	20	obl	_	_
10	havo	havo	NOUN	N	Case=Nom	11	compound	_	_
11	regulyator	regulyator	NOUN	N	Case=Nom	12	nsubj	_	_
12	oʻrnatilgan	oʻrna	NOUN	N	_	17	amod	_	_
13	chiroyli	chiroyli	ADJ	A	_	17	amod	_	_
14	,	,	PUNCT	Y	_	15	punct	_	_
15	bahaybat	bahaybat	ADJ	A	_	13	conj	_	_
16	bir	bir	DET	M	PronType=Ind	17	det	_	_
17	poyezd	poyezd	NOUN	N	Case=Nom	20	nsubj	_	_
18	qozgʻalish	qozgʻa	VERB	V	_	19	nmod:poss	_	_
19	arafasida	arafa	NOUN	N	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	20	obl	_	_
20	turardi	tur	VERB	V	_	0	root	_	_
21	.	.	PUNCT	Y	_	20	punct	_	_

~~~


