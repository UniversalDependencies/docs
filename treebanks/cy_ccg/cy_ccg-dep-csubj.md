---
layout: base
title:  'Statistics of csubj in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `csubj`

This relation is universal.

29 nodes (0%) are attached to their parents as `csubj`.

15 instances of `csubj` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.79310344827586.

The following 9 pairs of parts of speech are connected with `csubj`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (15; 52% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (5; 17% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (2; 7% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 csubj	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	'n	yn	AUX	impf	_	3	aux	_	_
3	gwneud	gwneud	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
4	teithio	teithio	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	9	csubj	_	_
5	ar	ar	ADP	prep	_	6	case	_	_
6	gludiant	cludiant	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	4	obl	_	_
7	cyhoeddus	cyhoeddus	ADJ	pos	Degree=Pos	6	amod	_	_
8	yn	yn	PART	pred	_	9	case:pred	_	_
9	brofiad	profiad	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	3	ccomp	_	_
10	gwell	da	ADJ	cmp	Degree=Cmp	9	amod	_	_
11	i	i	ADP	prep	_	12	case	_	_
12	bawb	pawb	PRON	indef	Mutation=SM|PronType=Ind	9	nmod	_	SpaceAfter=No
13	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 13 csubj	color:blue
1	Byddwn	bod	VERB	verb	Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin	0	root	_	_
2	yn	yn	PART	pred	_	3	case:pred	_	_
3	sicr	sicr	ADJ	pos	Degree=Pos	1	advmod	_	_
4	yn	yn	AUX	impf	_	5	aux	_	_
5	cytuno	cytuno	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
6	â	â	ADP	prep	_	7	case	_	_
7	chi	chi	PRON	indep	Number=Plur|Person=2|PronType=Prs	5	obl	_	_
8	bod	bod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	5	ccomp	_	_
9	parhau	parhau	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	8	xcomp	_	_
10	i	i	ADP	prep	_	13	mark	_	_
11	fod	bod	AUX	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	13	cop	_	_
12	yn	yn	PART	pred	_	13	case:pred	_	_
13	egnïol	egnïol	ADJ	pos	Degree=Pos	23	csubj	_	_
14	ar	ar	ADP	prep	_	15	case	_	_
15	ôl	ôl	NOUN	noun	Gender=Masc|Number=Sing	13	obl	_	_
16	i	i	ADP	iprep	_	17	case	_	_
17	chi	chi	PRON	indep	Number=Plur|Person=2|PronType=Prs	18	nsubj	_	_
18	groesi	croesi	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	15	acl	_	SpaceAfter=No
19	'r	y	DET	art	_	20	det	_	_
20	hanner	hanner	NOUN	noun	Gender=Masc|Number=Sing	18	obj	_	_
21	cant	cant	NOUN	noun	Gender=Masc|Number=Sing	20	nmod	_	_
22	yn	yn	PART	pred	_	23	case:pred	_	_
23	bwysig	pwysig	ADJ	pos	Degree=Pos|Mutation=SM	9	ccomp	_	_
24	i	i	ADP	prep	_	26	case	_	_
25	bob	pob	ADJ	pos	Degree=Pos|Mutation=SM	26	amod	_	_
26	un	un	NUM	num	_	23	obl	_	_
27	o	o	ADP	iprep	_	28	case	_	_
28	ni	ni	PRON	indep	Number=Plur|Person=1|PronType=Prs	26	nmod	_	_
29	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


