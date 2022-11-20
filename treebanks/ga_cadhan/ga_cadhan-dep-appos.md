---
layout: base
title:  'Statistics of appos in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `appos`

This relation is universal.

35 nodes (1%) are attached to their parents as `appos`.

35 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.65714285714286.

The following 5 pairs of parts of speech are connected with `appos`: <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (13; 37% instances), <tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (13; 37% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (7; 20% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 appos	color:blue
1	An	an	DET	_	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
2	naomhadh	naoi	NUM	_	NumType=Ord	3	amod	_	_
3	la	lá	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
4	fichiod	fiche	NUM	_	NumType=Card	3	nummod	_	_
5	.i.	.i.	ADJ	_	Abbr=Yes	6	amod	_	_
6	dia	Dé	PROPN	_	Definite=Def|Number=Sing	3	appos	_	_
7	satharn	Satharn	PROPN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 appos	color:blue
1	Macha	Macha	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	Mearan	Mearan	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	agus	agus	CCONJ	_	_	6	cc	_	_
6	Muicneachán	Muicneachán	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	conj	_	_
7	a	a	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	9	nmod:poss	_	_
8	trí	trí	NUM	_	NumType=Card	9	nummod	_	_
9	tréinfhir	tréanfhear	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	1	appos	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 appos	color:blue
1	An	an	DET	_	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
2	dara	dara	NUM	_	NumType=Ord	3	amod	_	_
3	nós	nós	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
6	roinn	roinnt	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	appos	_	_
7	do	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	8	nsubj	_	_
8	bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	6	acl:relcl	_	_
9	ar	ar	ADP	_	_	11	case	_	_
10	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	11	det	_	_
11	bhfearann	fearann	NOUN	_	Case=Nom|Definite=Def|Form=Ecl|Gender=Masc|Number=Sing	8	xcomp:pred	_	_
12	idir	idir	ADP	_	_	14	case	_	_
13	na	an	DET	_	Definite=Def|Number=Plur|PronType=Art	14	det	_	_
14	comhmbráithribh	comhbhráthair	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	6	nmod	_	SpaceAfter=No
15	,	,	PUNCT	_	_	17	punct	_	_
16	d'á	dá	PART	_	Form=Indirect|PronType=Rel	17	obl	_	_
17	ngairid	gair	VERB	_	Form=Ecl|Mood=Ind|Number=Plur|Person=3|Tense=Pres	6	acl:relcl	_	_
18	Gaill	Gall	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	17	nsubj	_	_
19	‘	‘	PUNCT	_	_	20	punct	_	SpaceAfter=No
20	gabháil	gabháil	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	17	obj	_	_
21	cinidh	cine	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	20	nmod	_	SpaceAfter=No
22	,	,	PUNCT	_	_	20	punct	_	SpaceAfter=No
23	’	’	PUNCT	_	_	20	punct	_	_
24	mar	mar	SCONJ	_	_	26	mark	_	_
25	a	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	26	mark:prt	_	_
26	ndéantaoi	déan	VERB	_	Aspect=Imp|Form=Ecl|Person=0|Tense=Past	17	advcl	_	_
27	mion-roinn	mionroinnt	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	26	obj	_	_
28	idir	idir	ADP	_	_	30	case	_	_
29	na	an	DET	_	Definite=Def|Number=Plur|PronType=Art	30	det	_	_
30	comhmbráithribh	comhbhráthair	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	27	nmod	_	_
31	ar	ar	ADP	_	_	33	case	_	_
32	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	33	det	_	_
33	bhfearann	fearann	NOUN	_	Case=Nom|Definite=Def|Form=Ecl|Gender=Masc|Number=Sing	27	nmod	_	SpaceAfter=No
34	.	.	PUNCT	_	_	3	punct	_	_

~~~


