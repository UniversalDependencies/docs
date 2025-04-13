---
layout: base
title:  'Statistics of appos in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `appos`

This relation is universal.

40 nodes (1%) are attached to their parents as `appos`.

40 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.525.

The following 5 pairs of parts of speech are connected with `appos`: <tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (16; 40% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (12; 30% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (10; 25% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


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
9	tréinfhir	tréanfhear	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	1	appos	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 appos	color:blue
1	Tri	trí	NUM	_	NumType=Card	2	nummod	_	_
2	naimhde	namhaid	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	0	root	_	_
3	an	an	DET	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	anma	anam	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	2	nmod	_	_
5	gach	gach	DET	_	Definite=Def	6	det	_	_
6	am	am	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	obl:tmod	_	_
7	diabhal	diabhal	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	saoghal	saol	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	conj	_	SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	's	agus	CCONJ	_	_	13	cc	_	_
12	a	a	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	13	nmod:poss	_	_
13	cholann	colainn	NOUN	_	Case=Nom|Definite=Def|Form=Len|Gender=Fem|Number=Sing	7	conj	_	_
14	da	dá	SCONJ	_	_	15	mark	_	_
15	mbera	beir	VERB	_	Form=Ecl|Mood=Sub|Number=Sing|Person=2|Tense=Pres	20	advcl	_	_
16	tusa	tú	PRON	_	Number=Sing|Person=2|PronType=Emp	15	nsubj	_	_
17	a	a	DET	_	Number=Plur|Person=3|Poss=Yes	18	nmod:poss	_	_
18	mbuaidh	bua	NOUN	_	Case=Nom|Definite=Def|Form=Ecl|Gender=Masc|Number=Sing	15	obj	_	_
19	sin	sin	PRON	_	PronType=Dem	18	det	_	_
20	rachair	téigh	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Fut	2	parataxis	_	_
21	go	go	PART	_	PartType=Ad	22	mark:prt	_	_
22	réidh	réidh	ADJ	_	Degree=Pos	20	advmod	_	_
23	don	do	ADP	_	Number=Sing|PronType=Art	24	case	_	_
24	Righthigh	rítheach	NOUN	_	Case=Dat|Definite=Def|Gender=Masc|Number=Sing	20	obl	_	SpaceAfter=No
25	.	.	PUNCT	_	_	20	punct	_	_

~~~


