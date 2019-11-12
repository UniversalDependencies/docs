---
layout: base
title:  'Statistics of cc in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `cc`

This relation is universal.

488 nodes (3%) are attached to their parents as `cc`.

488 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.6577868852459.

The following 11 pairs of parts of speech are connected with `cc`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (316; 65% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (79; 16% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (36; 7% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (17; 3% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (10; 2% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (10; 2% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (8; 2% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (5; 1% instances), <tt><a href="cy_ccg-pos-DET.html">DET</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (4; 1% instances), <tt><a href="cy_ccg-pos-PART.html">PART</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 cc	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	cop	_	SpaceAfter=No
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc	color:blue
1	Ond	ond	CCONJ	cconj	_	2	cc	_	_
2	gall	gallu	VERB	verb	Mood=Ind|Number=Sing|Person=2|Tense=Fut	0	root	_	_
3	y	y	DET	art	_	4	det	_	_
4	Cymro	Cymro	NOUN	noun	Gender=Masc|Number=Sing	2	nsubj	_	_
5	call	call	ADJ	pos	Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
6	fynd	mynd	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
7	drwy	trwy	ADP	prep	Mutation=SM	8	case	_	_
8	fywyd	bywyd	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	6	obl	_	_
9	heb	heb	ADP	prep	_	11	mark	_	_
10	eu	eu	PRON	dep	Number=Plur|Person=3|PronType=Prs	11	obj	_	_
11	defnyddio	defnyddio	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	6	advcl	_	_
12	o	o	ADP	prep	_	13	case	_	_
13	gwbl	cwbl	ADJ	pos	Degree=Pos|Mutation=SM	11	advmod	_	SpaceAfter=No
14	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 cc	color:blue
1	Pe	pe	CCONJ	cconj	_	6	cc	_	_
2	baswn	bod	AUX	aux	Mood=Ind|Number=Sing|Person=1|Tense=Pqp	6	cop	_	_
3	i	i	PRON	indep	_	6	nsubj	_	_
4	ddim	dim	PART	neg	Mutation=SM	6	advmod	_	_
5	mor	mor	ADV	adv	_	6	advmod	_	_
6	dew	tew	ADJ	pos	Degree=Pos|Mutation=SM	7	advcl	_	_
7	baswn	bod	VERB	verb	Mood=Ind|Number=Sing|Person=1|Tense=Pqp	0	root	_	_
8	i	i	PRON	indep	Number=Sing|Person=1	7	nsubj	_	SpaceAfter=No
9	'n	yn	AUX	impf	_	10	aux	_	_
10	gallu	gallu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	7	xcomp	_	_
11	gwisgo	gwisgo	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	10	xcomp	_	SpaceAfter=No
12	'ch	eich	PRON	dep	Number=Plur|Person=2|Poss=Yes|PronType=Prs	13	nmod:poss	_	_
13	ffrog	ffrog	NOUN	noun	Gender=Fem|Number=Sing	11	obj	_	_
14	chi	chi	PRON	indep	Number=Plur|Person=2|PronType=Prs	13	expl	_	SpaceAfter=No
15	.	.	PUNCT	punct	_	7	punct	_	SpacesAfter=\n

~~~


