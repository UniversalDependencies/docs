---
layout: base
title:  'Statistics of appos in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `appos`

This relation is universal.

81 nodes (0%) are attached to their parents as `appos`.

81 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.8641975308642.

The following 12 pairs of parts of speech are connected with `appos`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (39; 48% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (13; 16% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (8; 10% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (7; 9% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (3; 4% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 appos	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	cop	_	_
2	Plaid	plaid	NOUN	noun	Gender=Fem|Number=Sing	5	nsubj	_	_
3	Cymru	Cymru	PROPN	place	Gender=Fem|Number=Sing	2	flat	_	_
4	yn	yn	PART	pred	_	5	case:pred	_	_
5	aelod	aelod	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
6	o	o	ADP	prep	_	7	case	_	_
7	Gynghrair	cynghrair	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	5	nmod	_	_
8	Rhydd	rhydd	ADJ	pos	Degree=Pos	7	amod	_	_
9	Ewrop	Ewrop	PROPN	place	_	7	flat	_	_
10	(	(	PUNCT	punct	_	11	punct	_	SpaceAfter=No
11	EFA	Efa	NOUN	noun	Gender=Fem|Number=Sing	7	appos	_	SpaceAfter=No
12	)	)	PUNCT	punct	_	11	punct	_	SpaceAfter=No
13	.	.	PUNCT	punct	_	5	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 appos	color:blue
1	Cafodd	cael	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
2	Owain	Owain	PROPN	person	_	1	nsubj	_	_
3	Gwynedd	Gwynedd	PROPN	place	Gender=Masc|Number=Sing	2	flat:name	_	_
4	ddau	dau	NUM	num	Gender=Masc|Mutation=SM	5	nummod	_	_
5	fab	mab	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	1	obj	_	_
6	ganddi	gan	ADP	cprep	Gender=Fem|Number=Sing|Person=3	5	nmod	_	SpaceAfter=No
7	,	,	PUNCT	punct	_	8	punct	_	_
8	Dafydd	Dafydd	PROPN	person	_	5	appos	_	_
9	a	a	CCONJ	cconj	_	10	cc	_	_
10	Rhodri	Rhodri	PROPN	person	_	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 16 appos	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
2	'r	y	DET	art	_	3	det	_	_
3	geiriau	gair	NOUN	noun	Gender=Masc|Number=Plur	1	nsubj	_	_
4	wedi	wedi	AUX	ante	_	6	aux	_	_
5	eu	eu	PRON	dep	Number=Plur|Person=3|PronType=Prs	6	obj	_	_
6	ysgrifennu	ysgrifennu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
7	gan	gan	ADP	prep	_	8	case	_	_
8	John	John	PROPN	person	_	6	obl:agent	_	_
9	Howel	Howel	PROPN	person	Gender=Masc|Number=Sing	8	flat:name	_	_
10	(	(	PUNCT	punct	_	11	punct	_	SpaceAfter=No
11	1774	1774	NUM	num	Number=Sing	9	nmod	_	SpaceAfter=No
12	-	-	PUNCT	punct	_	13	punct	_	SpaceAfter=No
13	1830	1830	NUM	num	Number=Sing	11	nmod	_	SpaceAfter=No
14	)	)	PUNCT	punct	_	11	punct	_	_
15	sef	sef	CCONJ	cconj	_	16	cc	_	_
16	bardd	bardd	NOUN	noun	Gender=Masc|Number=Sing	8	appos	_	_
17	a	a	CCONJ	cconj	_	18	cc	_	_
18	golygydd	golygydd	NOUN	noun	Gender=Masc|Number=Sing	16	conj	_	_
19	llenyddol	llenyddol	ADJ	pos	Degree=Pos	18	amod	_	SpaceAfter=No
20	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


