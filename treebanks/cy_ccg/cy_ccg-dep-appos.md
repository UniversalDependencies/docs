---
layout: base
title:  'Statistics of appos in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `appos`

This relation is universal.

57 nodes (1%) are attached to their parents as `appos`.

57 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.68421052631579.

The following 10 pairs of parts of speech are connected with `appos`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (29; 51% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (11; 19% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (6; 11% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (3; 5% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 appos	color:blue
1	Mae	bod	AUX	aux	Number=Sing|Person=3|Tense=Pres	5	cop	_	_
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
1	Cafodd	cael	VERB	verb	Number=Sing|Person=3|Tense=Past	0	root	_	_
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
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 appos	color:blue
1	Lleolir	lleoli	VERB	verb	Person=Impers|Tense=Fut	0	root	_	_
2	Castell	castell	NOUN	noun	Gender=Masc|Number=Sing	1	obj	_	_
3	Aberystwyth	Aberystwyth	PROPN	place	_	2	nmod	_	_
4	ar	ar	ADP	prep	_	5	case	_	_
5	frig	brig	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	1	obl	_	_
6	rhwng	rhwng	ADP	prep	_	7	case	_	_
7	traeth	traeth	NOUN	noun	Gender=Masc|Number=Sing	5	nmod	_	_
8	y	y	DET	art	_	9	det	_	_
9	de	de	NOUN	noun	Gender=Masc|Number=Sing	7	nmod	_	_
10	a	a	CCONJ	cconj	_	11	cc	_	_
11	thraeth	traeth	NOUN	noun	Gender=Masc|Mutation=AM|Number=Sing	9	conj	_	_
12	y	y	DET	art	_	13	det	_	_
13	gogledd	gogledd	NOUN	noun	Gender=Masc|Number=Sing	11	nmod	_	_
14	yn	yn	ADP	prep	_	15	case	_	_
15	nhref	tref	NOUN	noun	Gender=Fem|Mutation=NM|Number=Sing	5	nmod	_	_
16	Aberystwyth	Aberystwyth	PROPN	place	_	15	nmod	_	SpaceAfter=No
17	,	,	PUNCT	punct	_	18	punct	_	_
18	Ceredigion	Ceredigion	PROPN	place	_	16	appos	_	SpaceAfter=No
19	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\s\n

~~~


