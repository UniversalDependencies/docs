---
layout: base
title:  'Statistics of csubj in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `csubj`

This relation is universal.

40 nodes (0%) are attached to their parents as `csubj`.

20 instances of `csubj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.325.

The following 9 pairs of parts of speech are connected with `csubj`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (22; 55% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (5; 13% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (5; 13% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Piti	piti	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
2	ydi	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux	_	_
3	bod	bod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	csubj	_	_
4	y	y	DET	art	_	5	det	_	_
5	bobl	pobl	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	3	nsubj	_	_
6	ddylai	dylu	VERB	verb	Mood=Cnd|Mutation=SM|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	acl:relcl	_	_
7	fod	bod	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	6	xcomp	_	_
8	yn	yn	AUX	impf	_	9	aux	_	_
9	gwrando	gwrando	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	7	xcomp	_	_
10	ar	ar	ADP	prep	_	11	case	_	_
11	hyn	hyn	PRON	dem	Number=Plur|PronType=Dem	9	obl	_	_
12	ddim	dim	PART	neg	Mutation=SM	9	advmod	_	_
13	yma	yma	ADV	adv	_	9	advmod	_	SpaceAfter=No
14	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 csubj	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
2	cynllunio	cynllunio	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	10	csubj	_	_
3	eich	chi	PRON	dep	Number=Plur|Person=2|Poss=Yes|PronType=Prs	4	nmod:poss	_	_
4	taith	taith	NOUN	noun	Gender=Fem|Number=Sing	2	obj	_	_
5	i	i	ADP	prep	_	8	case	_	_
6	fyny	fyny	ADV	adv	_	5	fixed	_	SpaceAfter=No
7	'r	y	DET	art	_	8	det	_	_
8	Wyddfa	Wyddfa	PROPN	place	Gender=Fem|Number=Sing	4	nmod	_	_
9	yn	yn	PART	pred	_	10	case:pred	_	_
10	bwysig	pwysig	ADJ	pos	Degree=Pos|Mutation=SM	0	root	_	_
11	iawn	iawn	ADV	adv	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	10	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 8 csubj	color:blue
1	Ond	ond	CCONJ	cconj	_	3	cc	_	_
2	os	os	SCONJ	sconj	_	3	mark	_	_
3	rhoi	rhoi	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	8	advcl	_	_
4	cynnig	cynnig	NOUN	noun	Gender=Masc|Number=Sing	3	obj	_	_
5	ar	ar	ADP	iprep	_	6	case	_	_
6	hi	hi	PRON	indep	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	obl	_	_
7	,	,	PUNCT	punct	_	8	punct	_	_
8	herio	herio	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	17	csubj	_	_
9	gwleidyddion	gwleidydd	NOUN	noun	Gender=Masc|Number=Plur	8	obj	_	_
10	a	a	CCONJ	cconj	_	12	cc	_	SpaceAfter=No
11	'u	hwy	PRON	dep	Number=Plur|Person=3|PronType=Prs	12	obj	_	_
12	dal	dal	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	8	conj	_	_
13	i	i	ADP	prep	_	14	mark	_	_
14	gyfrif	cyfrif	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	12	xcomp	_	_
15	o	o	ADP	prep	_	16	case	_	_
16	ddifrif	difrif	ADJ	pos	Degree=Pos|Mutation=SM	12	advmod	_	_
17	ddylai	dylu	VERB	verb	Mood=Cnd|Mutation=SM|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
18	fod	bod	AUX	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	20	cop	_	_
19	y	y	DET	art	_	20	det	_	_
20	nod	nod	NOUN	noun	Gender=Masc|Number=Sing	17	xcomp	_	SpaceAfter=No
21	.	.	PUNCT	punct	_	17	punct	_	SpacesAfter=\n

~~~


