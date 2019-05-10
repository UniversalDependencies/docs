---
layout: base
title:  'Statistics of cop in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `cop`

This relation is universal.

208 nodes (2%) are attached to their parents as `cop`.

184 instances of `cop` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.17788461538462.

The following 6 pairs of parts of speech are connected with `cop`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (116; 56% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (86; 41% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cop	color:blue
1	Mae	bod	AUX	aux	Number=Sing|Person=3|Tense=Pres	3	cop	_	SpaceAfter=No
2	'n	yn	PART	pred	_	3	case:pred	_	_
3	rhaid	rhaid	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
4	i	i	ADP	prep	_	5	case	_	_
5	ti	ti	PRON	indep	Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
6	ddod	dod	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	3	nmod	_	_
7	cyn	cyn	ADP	prep	_	8	case	_	_
8	yfory	yfory	ADV	adv	_	6	advmod	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 cop	color:blue
1	Mae	bod	AUX	aux	Number=Sing|Person=3|Tense=Pres	7	cop	_	SpaceAfter=No
2	'r	y	DET	art	_	3	det	_	_
3	duw	duw	NOUN	noun	Gender=Masc|Number=Sing	7	nsubj	_	_
4	hwn	hwn	PRON	dem	Gender=Masc|PronType=Dem	3	amod	_	_
5	hefyd	hefyd	ADV	adv	_	7	advmod	_	_
6	yn	yn	PART	pred	_	7	case:pred	_	_
7	gysylltiedig	cysylltiedig	ADJ	pos	Degree=Pos|Mutation=SM	0	root	_	_
8	ag	ag	ADP	prep	_	9	case	_	_
9	amser	amser	NOUN	noun	Gender=Masc|Number=Sing	7	obl	_	_
10	a	a	CCONJ	cconj	_	11	cc	_	_
11	henaint	henaint	NOUN	noun	Gender=Masc|Number=Sing	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	7	punct	_	SpacesAfter=\s\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cop	color:blue
1	Rhwng	rhwng	ADP	prep	_	2	case	_	_
2	1968	1968	NUM	num	_	10	obl	_	_
3	a	a	CCONJ	cconj	_	4	cc	_	_
4	diwedd	diwedd	NOUN	noun	Gender=Masc|Number=Sing	2	conj	_	_
5	y	y	DET	art	_	6	det	_	_
6	1970au	1970	NOUN	noun	Number=Plur	4	nmod	_	_
7	yr	y	PART	aff	_	10	advmod	_	_
8	oedd	bod	AUX	aux	Number=Sing|Person=3|Tense=Imp	10	cop	_	_
9	yn	yn	PART	pred	_	10	case:pred	_	_
10	un	un	NUM	num	_	0	root	_	_
11	o	o	ADP	prep	_	12	case	_	_
12	arweinyddion	arweinydd	NOUN	noun	Gender=Masc|Number=Plur	10	nmod	_	_
13	carismatig	carismatig	ADJ	pos	Degree=Pos	12	amod	_	_
14	mwyaf	mawr	ADJ	sup	Degree=Sup	13	advmod	_	_
15	y	y	DET	art	_	16	det	_	_
16	frwydr	brwydr	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	12	nmod	_	_
17	iaith	iaith	NOUN	noun	Gender=Fem|Number=Sing	16	nmod	_	SpaceAfter=No
18	.	.	PUNCT	punct	_	10	punct	_	SpacesAfter=\n

~~~


