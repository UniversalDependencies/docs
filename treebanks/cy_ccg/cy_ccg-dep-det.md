---
layout: base
title:  'Statistics of det in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `det`

This relation is universal.

2033 nodes (7%) are attached to their parents as `det`.

1953 instances of `det` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05361534677816.

The following 11 pairs of parts of speech are connected with `det`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (1808; 89% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (98; 5% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (56; 3% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (31; 2% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (15; 1% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (12; 1% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (9; 0% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-DET.html">DET</a></tt>-<tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt>-<tt><a href="cy_ccg-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det	color:blue
1	yr	y	PART	aff	_	2	advmod	_	_
2	wy	bod	VERB	verb	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
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
1	Adawes	gadael	VERB	verb	Gender=Fem|Mood=Ind|Mutation=SM|Number=Sing|Person=1|Tense=Past	0	root	_	_
2	i	i	PRON	indep	Number=Sing|Person=1	1	nsubj	_	SpaceAfter=No
3	'm	fy	PRON	dep	Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod:poss	_	_
4	sgidiau	esgid	NOUN	noun	Gender=Fem|Number=Plur	1	obj	_	_
5	fi	i	PRON	indep	Number=Sing|Person=1|PronType=Prs	4	expl	_	_
6	rywle	rhywle	ADV	adv	Mutation=SM	1	advcl	_	_
7	fan	man	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	6	obl	_	_
8	hyn	hyn	PRON	dem	Number=Plur|PronType=Dem	7	det	_	SpaceAfter=No
9	,	,	PUNCT	punct	_	13	punct	_	_
10	dw	bod	AUX	aux	Mood=Ind|Number=Sing|Person=1|Tense=Pres	13	cop	_	_
11	i	i	PRON	indep	Number=Sing|Person=1	13	nsubj	_	SpaceAfter=No
12	'n	yn	PART	pred	_	13	case:pred	_	_
13	siŵr	siŵr	ADJ	pos	Degree=Pos	1	parataxis	_	SpaceAfter=No
14	.	.	PUNCT	punct	_	12	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 det	color:blue
1	Cafodd	cael	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
2	yr	y	DET	art	_	3	det	_	_
3	ymgyrch	ymgyrch	NOUN	noun	Gender=Fem|Number=Sing	1	nsubj	_	_
4	yn	yn	AUX	impf	_	5	aux	_	_
5	cael	cael	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
6	ei	ei	PRON	dep	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	lansio	lansio	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	5	ccomp	_	_
8	ar	ar	ADP	prep	_	9	case	_	_
9	Faes	maes	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	7	obl	_	_
10	y	y	DET	art	_	11	det	_	_
11	Brifwyl	prifwyl	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	9	nmod	_	_
12	yn	yn	ADP	prep	_	14	case	_	_
13	y	y	DET	art	_	14	det	_	_
14	Fenni	Fenni	PROPN	place	Number=Sing	9	nmod	_	SpaceAfter=No
15	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


