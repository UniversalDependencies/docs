---
layout: base
title:  'Statistics of det in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `det`

This relation is universal.

736 nodes (7%) are attached to their parents as `det`.

705 instances of `det` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06114130434783.

The following 10 pairs of parts of speech are connected with `det`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (645; 88% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (39; 5% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (15; 2% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (14; 2% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (9; 1% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-DET.html">DET</a></tt>-<tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt>-<tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det	color:blue
1	yr	y	PART	aff	_	2	advmod	_	_
2	wy	bod	VERB	verb	Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	'n	yn	AUX	impf	_	4	aux	_	_
4	eilio	eilio	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
5	Elin	Elin	PROPN	person	_	4	obj	_	_
6	Jones	Jones	PROPN	person	_	5	flat:name	_	_
7	ar	ar	ADP	prep	_	8	case	_	_
8	gyfer	cyfer	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	4	obl	_	_
9	swydd	swydd	NOUN	noun	Gender=Fem|Number=Sing	8	nmod	_	_
10	y	y	DET	art	_	11	det	_	_
11	Llywydd	llywydd	NOUN	noun	Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 det	color:blue
1	Adawes	gadael	VERB	verb	Gender=Fem|Mutation=SM|Number=Sing|Person=1|Tense=Past	0	root	_	_
2	i	i	PRON	indep	Number=Sing|Person=1	1	nsubj	_	SpaceAfter=No
3	'm	fy	PRON	dep	Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod:poss	_	_
4	sgidiau	esgid	NOUN	noun	Number=Plur	1	obj	_	_
5	fi	i	PRON	indep	Number=Sing|Person=1|PronType=Prs	4	expl	_	_
6	rywle	rhywle	ADV	adv	Mutation=SM	1	advcl	_	_
7	fan	man	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	6	obl	_	_
8	hyn	hyn	PRON	dem	Number=Plur|PronType=Dem	7	det	_	SpaceAfter=No
9	,	,	PUNCT	punct	_	13	punct	_	_
10	dw	bod	AUX	aux	Number=Sing|Person=1|Tense=Pres	13	cop	_	_
11	i	i	PRON	indep	Number=Sing|Person=1	13	nsubj	_	SpaceAfter=No
12	'n	yn	PART	pred	_	13	case:pred	_	_
13	siŵr	siŵr	ADJ	pos	Degree=Pos	1	parataxis	_	SpaceAfter=No
14	.	.	PUNCT	punct	_	12	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 det	color:blue
1	Fe	fe	PART	aff	_	3	advmod	_	SpaceAfter=No
2	'i	ei	PRON	dep	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
3	lleolir	lleoli	VERB	verb	Person=Impers|Tense=Pres	0	root	_	_
4	oddi	oddi	ADP	prep	_	6	case	_	_
5	ar	ar	ADP	prep	_	4	fixed	_	_
6	flaen	blaen	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	3	obl	_	_
7	deheuol	eheuol	ADJ	pos	Degree=Pos|Mutation=SM	6	amod	_	_
8	Gorynys	Gorynys	PROPN	place	Gender=Masc|Number=Sing	6	nmod	_	_
9	Malaya	Malaya	PROPN	place	Gender=Masc|Number=Sing	8	flat:name	_	SpaceAfter=No
10	,	,	PUNCT	punct	_	12	punct	_	_
11	137	137	NUM	num	_	12	nummod	_	_
12	km	km	NOUN	noun	Gender=Masc|Number=Sing	15	nmod	_	_
13	i	i	ADP	prep	_	15	case	_	SpaceAfter=No
14	'r	y	DET	art	_	15	det	_	_
15	gogledd	gogledd	NOUN	noun	Gender=Masc|Number=Sing	3	obl	_	_
16	o	o	ADP	prep	_	18	case	_	SpaceAfter=No
17	'r	y	DET	art	_	18	det	_	_
18	Cyhydedd	Cyhydedd	PROPN	place	Gender=Masc|Number=Sing	15	nmod	_	SpaceAfter=No
19	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


