---
layout: base
title:  'Statistics of appos in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `appos`

This relation is universal.

268 nodes (1%) are attached to their parents as `appos`.

268 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.20149253731343.

The following 21 pairs of parts of speech are connected with `appos`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (111; 41% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (62; 23% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (33; 12% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (12; 4% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (8; 3% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (8; 3% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (7; 3% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (6; 2% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 appos	color:blue
1	Dyma	dyma	ADV	adv	_	2	advmod	_	_
2	fersiwn	fersiwn	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
3	Elise	Elise	PROPN	person	Gender=Masc|Number=Sing	2	nmod	_	_
4	o	o	ADP	prep	_	6	case	_	SpaceAfter=No
5	'r	y	DET	art	_	6	det	_	_
6	gân	cân	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	2	nmod	_	_
7	Un	un	NUM	num	NumForm=Word|NumType=Card	8	nummod	_	_
8	Seren	Seren	NOUN	noun	Gender=Masc|Number=Sing	6	appos	_	_
9	gan	gan	ADP	prep	_	10	case	_	_
10	Delwyn	Delwyn	PROPN	person	Gender=Masc|Number=Sing	2	nmod	_	_
11	Siôn	Siôn	PROPN	person	Gender=Masc|Number=Sing	10	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 appos	color:blue
1	Cafodd	cael	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	Owain	Owain	PROPN	person	_	1	nsubj	_	_
3	Gwynedd	Gwynedd	PROPN	place	Gender=Masc|Number=Sing	2	flat:name	_	_
4	ddau	dau	NUM	num	Gender=Masc|Mutation=SM|NumForm=Word|NumType=Card	5	nummod	_	_
5	fab	mab	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	1	obj	_	_
6	gan	gan	ADP	iprep	_	7	case	_	_
7	hi	hi	PRON	indep	Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nmod	_	_
8	,	,	PUNCT	punct	_	9	punct	_	_
9	Dafydd	Dafydd	PROPN	person	_	5	appos	_	_
10	a	a	CCONJ	cconj	_	11	cc	_	_
11	Rhodri	Rhodri	PROPN	person	_	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 appos	color:blue
1	Agorwyd	agor	VERB	verb	Mood=Ind|Person=0|Tense=Past|VerbForm=Fin	0	root	_	_
2	y	y	DET	art	_	3	det	_	_
3	llwybr	llwybr	NOUN	noun	Gender=Masc|Number=Sing	1	obj	_	_
4	yn	yn	PART	pred	_	5	case:pred	_	_
5	swyddogol	swyddogol	ADJ	pos	Degree=Pos	1	advmod	_	_
6	yn	yn	ADP	prep	_	7	case	_	_
7	1892	1892	NUM	num	NumForm=Digit|NumType=Card	1	obl	_	_
8	gan	gan	ADP	prep	_	9	case	_	_
9	William	William	PROPN	person	Gender=Masc|Number=Sing	1	obl:agent	_	_
10	Gladstone	Gladstone	PROPN	person	_	9	flat:name	_	SpaceAfter=No
11	,	,	PUNCT	punct	_	14	punct	_	_
12	y	y	DET	art	_	14	det	_	_
13	Prif	prif	ADJ	pos	Degree=Pos	14	amod	_	_
14	Weinidog	gweinidog	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	9	appos	_	SpaceAfter=No
15	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


