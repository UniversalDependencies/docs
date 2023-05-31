---
layout: base
title:  'Statistics of csubj in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `csubj`

This relation is universal.

39 nodes (0%) are attached to their parents as `csubj`.

20 instances of `csubj` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.30769230769231.

The following 9 pairs of parts of speech are connected with `csubj`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (22; 56% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (5; 13% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (4; 10% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 3% instances).


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


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 6 csubj	color:blue
1	Yn	yn	ADP	prep	_	2	case	_	_
2	ôl	ôl	NOUN	noun	Gender=Masc|Number=Sing	22	obl	_	_
3	y	y	DET	art	_	4	det	_	_
4	trefnwyr	trefnwr	NOUN	noun	Gender=Masc|Number=Plur	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	6	punct	_	_
6	cau	cau	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	22	csubj	_	_
7	Maes	maes	NOUN	noun	Gender=Masc|Number=Sing	6	nsubj	_	_
8	B	b	NOUN	noun	Abbr=Yes|Gender=Masc|Number=Sing	7	nmod	_	_
9	a	a	CCONJ	cconj	_	11	cc	_	SpaceAfter=No
10	'r	y	DET	art	_	11	det	_	_
11	maes	maes	NOUN	noun	Gender=Masc|Number=Sing	7	conj	_	_
12	pebyll	pabell	NOUN	noun	Gender=Masc|Number=Plur	11	nmod	_	_
13	a	a	CCONJ	cconj	_	15	cc	_	SpaceAfter=No
14	'r	y	DET	art	_	15	det	_	_
15	costau	cost	NOUN	noun	Gender=Masc|Number=Plur	6	conj	_	_
16	yn	yn	ADP	prep	_	17	case	_	_
17	sgil	sgil	NOUN	noun	Gender=Masc|Number=Sing	15	nmod	_	_
18	hynny	hyn	PRON	dem	Number=Plur|PronType=Dem	17	det	_	_
19	oedd	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	22	cop	_	_
20	yn	yn	PART	pred	_	22	case:pred	_	_
21	bennaf	pennaf	ADJ	sup	Degree=Sup|Mutation=SM	22	advmod	_	_
22	gyfrifol	cyfrifol	ADJ	pos	Degree=Pos|Gender=Masc|Mutation=SM|Number=Sing	0	root	_	_
23	am	am	ADP	prep	_	25	case	_	_
24	y	y	DET	art	_	25	det	_	_
25	golled	colled	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	22	obl	_	_
26	sylweddol	sylweddol	ADJ	pos	Degree=Pos	25	amod	_	_
27	i	i	ADP	prep	_	29	case	_	SpaceAfter=No
28	'r	y	DET	art	_	29	det	_	_
29	wyl	gŵyl	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	25	nmod	_	SpaceAfter=No
30	.	.	PUNCT	punct	_	22	punct	_	SpacesAfter=\n

~~~


