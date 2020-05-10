---
layout: base
title:  'Statistics of orphan in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `orphan`

This relation is universal.

7 nodes (0%) are attached to their parents as `orphan`.

5 instances of `orphan` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.14285714285714.

The following 6 pairs of parts of speech are connected with `orphan`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (2; 29% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 14% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-X.html">X</a></tt> (1; 14% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 4 orphan	color:blue
1	1912'de	1912	NOUN	NN	Case=Loc|Number=Sing	4	obl	_	orig_deprel=obl:tmod
2	ilk	ilk	ADJ	JJ	Number=Sing	4	amod	_	_
3	film	film	NOUN	NN	Number=Sing	4	nmod:poss	_	_
4	şirketi	şirket	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	13	orphan	_	orig_deprel=nsubj
5	(	(	PUNCT	(	_	6	punct	_	SpaceAfter=No
6	Athina	Athina	PROPN	PROPN	Number=Sing	4	appos	_	Proper=True
7	Film	film	NOUN	NN	Number=Sing	6	appos	_	Proper=True|SpaceAfter=No
8	)	)	PUNCT	)	_	6	punct	_	_
9	ve	ve	CCONJ	CCONJ	_	13	cc	_	ToDo=cc-after-conj
10	1916'da	1916	NOUN	NN	Case=Loc|Number=Sing	13	obl	_	_
11	Asty	Asty	PROPN	PROPN	Number=Sing	13	nsubj	_	Proper=True
12	Film	film	NOUN	NN	Case=Nom|Number=Sing	11	nsubj	_	Proper=True
13	kuruldu	kur	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	SpaceAfter=No
14	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 24 orphan	color:blue
1	Bölgede	bölge	NOUN	NN	Case=Loc|Number=Sing	2	obl	_	_
2	keşfedilen	keşfet	ADJ	VJ	Number=Sing|Polarity=Pos	4	acl	_	_
3	kült	kült	NOUN	NN	Number=Sing	4	compound	_	_
4	kalıntıları	kalıntı	NOUN	NN	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	38	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	4	punct	_	_
6	massebot	massebot	NOUN	NN	Number=Sing	8	advcl	_	_
7	olarak	ol	AUX	CRB	Polarity=Pos	6	cop	_	_
8	bilinen	bil	ADJ	VJ	Number=Sing|Polarity=Pos	38	acl	_	SpaceAfter=No
9	,	,	PUNCT	,	_	14	punct	_	_
10	kuzey	kuzey	NOUN	NN	Number=Sing	13	nmod:poss	_	SpaceAfter=No
11	-	-	PUNCT	-	_	12	punct	_	SpaceAfter=No
12	güney	güney	NOUN	NN	Number=Sing	10	conj	_	_
13	yönünde	yön	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	14	obl	_	_
14	uzanan	uza	ADJ	VJ	Number=Sing|Polarity=Pos	8	conj	_	_
15	ve	ve	CCONJ	CCONJ	_	32	cc	_	_
16	en	en	ADV	RB	_	17	advmod	_	_
17	yükseği	yüksek	NOUN	NN	Case=Nom|Number=Sing	20	nsubj	_	_
18	3	3	NUM	CD	Number=Sing|NumType=Ord	19	nummod	_	_
19	metre	metre	NOUN	NN	Number=Sing	20	nmod:poss	_	_
20	uzunluğunda	uzunluğ	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	32	advcl	_	_
21	olup	ol	AUX	CRB	Polarity=Pos	20	cop	_	_
22	ortası	orta	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	conj	_	orig_deprel=nsubj
23	sunak	sunak	NOUN	NN	Number=Sing	24	nmod:poss	_	_
24	şeklinde	şekil	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	22	orphan	_	orig_deprel=advmod
25	tabanı	taban	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	32	nsubj	_	_
26	ise	i	VERB	VB	Mood=Cnd|Number=Sing|Person=3|Polarity=Pos	32	advcl	_	_
27	büyük	büyük	ADJ	JJ	Number=Sing	30	amod	_	SpaceAfter=No
28	,	,	PUNCT	,	_	27	punct	_	_
29	kare	kare	NOUN	NN	Number=Sing	30	compound	_	_
30	taş	taş	NOUN	NN	Number=Sing	31	compound	_	_
31	şeklinde	şekil	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	32	obl	_	_
32	olan	ol	ADJ	VJ	Number=Sing|Polarity=Pos	22	conj	_	_
33	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	34	det	_	_
34	dizi	dizi	NOUN	NN	Number=Sing	38	compound	_	_
35	on	on	NUM	CD	Number=Sing|NumType=Ord	37	nummod	_	_
36	büyük	büyük	ADJ	JJ	Number=Sing	37	amod	_	_
37	ayaklı	ayaklı	ADJ	JJ	Number=Sing	38	amod	_	_
38	taş	_	NOUN	NN	Number=Sing	0	root	_	_
39	tır	_	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	38	cop	_	_
40	.	.	PUNCT	.	_	38	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 orphan	color:blue
1	Tuna	T	PROPN	PROPN	Number=Sing	2	nmod:poss	_	Proper=True
2	Deltası'nın	Deltası	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nmod:poss	_	Proper=True
3	büyük	büyük	ADJ	JJ	Number=Sing	5	amod	_	_
4	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	5	det	_	_
5	kısmı	kısım	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	orig_deprel=nsubj
6	Romanya'da	Romanya	PROPN	PROPN	Case=Loc|Number=Sing	5	orphan	_	orig_deprel=advmod|Proper=True
7	(	(	PUNCT	(	_	9	punct	_	SpaceAfter=No
8	Tulcea	Tulcea	PROPN	PROPN	Number=Sing	9	nmod:poss	_	Proper=True
9	bölgesi	bölge	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	6	appos	_	SpaceAfter=No
10	)	)	PUNCT	)	_	9	punct	_	SpaceAfter=No
11	,	,	PUNCT	,	_	25	punct	_	_
12	Chilia	Chilia	PROPN	PROPN	Number=Sing	13	nmod:poss	_	Proper=True
13	kolunun	kol	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	15	nmod:poss	_	_
14	sol	sol	ADJ	JJ	Number=Sing	15	amod	_	_
15	kıyısında	kıyı	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	18	amod	_	_
16	ki	ki	ADP	JJ	_	15	case	_	_
17	kuzey	kuzey	NOUN	NN	Number=Sing	18	nmod:poss	_	_
18	kısmı	kısım	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	25	csubj	_	_
19	ise	i	AUX	VB	Mood=Cnd|Number=Sing|Person=3|Polarity=Pos	18	cop	_	_
20	Ukrayna'da	Ukrayna	PROPN	PROPN	Case=Loc|Number=Sing	25	obl	_	Proper=True
21	(	(	PUNCT	(	_	22	punct	_	SpaceAfter=No
22	Odessa	Odessa	PROPN	PROPN	Number=Sing	20	appos	_	Proper=True
23	Oblast	Oblast	PROPN	PROPN	Number=Sing	22	flat	_	Proper=True|SpaceAfter=No
24	)	)	PUNCT	)	_	22	punct	_	_
25	yer	yer	NOUN	NN	Number=Sing	5	conj	_	_
26	almaktadır	al	VERB	VB	Aspect=Prog|Mood=Gen|Number=Sing|Person=3|Tense=Pres	25	compound	_	SpaceAfter=No
27	.	.	PUNCT	.	_	26	punct	_	_

~~~


