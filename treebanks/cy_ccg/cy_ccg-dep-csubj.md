---
layout: base
title:  'Statistics of csubj in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `csubj`

This relation is universal.

24 nodes (0%) are attached to their parents as `csubj`.

13 instances of `csubj` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.91666666666667.

The following 8 pairs of parts of speech are connected with `csubj`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (14; 58% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (2; 8% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 csubj	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
2	'n	yn	AUX	impf	_	3	aux	_	_
3	gwneud	gwneud	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
4	teithio	teithio	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	9	csubj	_	_
5	ar	ar	ADP	prep	_	6	case	_	_
6	gludiant	cludiant	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	4	obl	_	_
7	cyhoeddus	cyhoeddus	ADJ	pos	Degree=Pos	6	amod	_	_
8	yn	yn	PART	pred	_	9	case:pred	_	_
9	brofiad	brofiad	NOUN	noun	Gender=Masc|Number=Sing	3	ccomp	_	_
10	gwell	da	ADJ	cmp	Degree=Cmp	9	amod	_	_
11	i	i	ADP	prep	_	12	case	_	_
12	bawb	pawb	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	9	nmod	_	SpaceAfter=No
13	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 13 csubj	color:blue
1	Byddwn	bod	VERB	verb	Mood=Ind|Number=Plur|Person=1|Tense=Fut	0	root	_	_
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
8	B	b	NOUN	noun	Gender=Masc|Number=Sing	7	nmod	_	_
9	a	a	CCONJ	cconj	_	11	cc	_	SpaceAfter=No
10	'r	y	DET	art	_	11	det	_	_
11	maes	maes	NOUN	noun	Gender=Masc|Number=Sing	7	conj	_	_
12	pebyll	pebyll	ADJ	pos	Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	_
13	a	a	CCONJ	cconj	_	15	cc	_	SpaceAfter=No
14	'r	y	DET	art	_	15	det	_	_
15	costau	cost	NOUN	noun	Gender=Masc|Number=Plur	6	conj	_	_
16	yn	yn	ADP	prep	_	17	case	_	_
17	sgil	sgil	NOUN	noun	Gender=Masc|Number=Sing	15	nmod	_	_
18	hynny	hynny	PRON	dem	Number=Plur|PronType=Dem	17	det	_	_
19	oedd	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Imp	22	cop	_	_
20	yn	yn	PART	pred	_	22	case:pred	_	_
21	bennaf	pennaf	ADJ	sup	Degree=Sup|Mutation=SM	22	advmod	_	_
22	gyfrifol	gyfrifol	ADJ	pos	Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
23	am	am	ADP	prep	_	25	case	_	_
24	y	y	DET	art	_	25	det	_	_
25	golled	golled	NOUN	noun	Gender=Masc|Number=Sing	22	obl	_	_
26	sylweddol	sylweddol	ADJ	pos	Degree=Pos	25	amod	_	_
27	i	i	ADP	prep	_	29	case	_	SpaceAfter=No
28	'r	y	DET	art	_	29	det	_	_
29	wyl	gwyl	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	25	nmod	_	SpaceAfter=No
30	.	.	PUNCT	punct	_	22	punct	_	SpacesAfter=\n

~~~


