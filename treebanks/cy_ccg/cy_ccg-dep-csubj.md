---
layout: base
title:  'Statistics of csubj in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `csubj`

This relation is universal.

10 nodes (0%) are attached to their parents as `csubj`.

7 instances of `csubj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.5.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (6; 60% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 1 csubj	color:blue
1	Lleihau	lleihau	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	13	csubj	_	_
2	tagfeydd	tagfa	NOUN	noun	_	1	obj	_	_
3	traffig	traffig	NOUN	noun	Gender=Masc|Number=Sing	2	nmod	_	_
4	rhwng	rhwng	ADP	prep	_	5	case	_	_
5	Ynys	Ynys	PROPN	place	Gender=Fem|Number=Sing	1	obl	_	_
6	Môn	Môn	PROPN	place	Gender=Masc|Number=Sing	5	flat:name	_	_
7	a	a	CCONJ	cconj	_	9	cc	_	SpaceAfter=No
8	'r	yn	DET	art	_	9	det	_	_
9	tir	tir	NOUN	noun	Gender=Masc|Number=Sing	5	conj	_	_
10	mawr	mawr	ADJ	pos	Degree=Pos	9	amod	_	_
11	ydy	bod	AUX	aux	Number=Sing|Person=3|Tense=Pres	13	cop	_	SpaceAfter=No
12	'r	y	DET	art	_	13	det	_	_
13	bwriad	bwriad	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
14	.	.	PUNCT	punct	_	13	punct	_	SpacesAfter=\s\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj	color:blue
1	Ei	ei	PRON	dep	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod:poss	_	_
2	ddatguddiad	datguddiad	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	0	root	_	_
3	mawr	mawr	ADJ	pos	Degree=Pos	2	amod	_	_
4	oedd	bod	AUX	aux	Number=Sing|Person=3|Tense=Imp	2	cop	_	_
5	"	"	PUNCT	punct	_	7	punct	_	SpaceAfter=No
6	nad	na	PART	neg	_	7	advmod	_	_
7	oedd	bod	VERB	verb	Number=Sing|Person=3|Tense=Imp	2	csubj	_	_
8	yn	yn	AUX	impf	_	9	aux	_	_
9	gwybod	gwybod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	7	xcomp	_	_
10	dim	dim	NOUN	noun	Gender=Masc|Number=Sing	9	obj	_	_
11	byd	byd	NOUN	noun	Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No
12	"	"	PUNCT	punct	_	7	punct	_	SpaceAfter=No
13	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 csubj	color:blue
1	Yr	y	DET	art	_	2	det	_	_
2	hyn	hyn	PRON	dem	Number=Plur|PronType=Dem	0	root	_	_
3	a	a	PRON	rel	PronType=Rel	4	nsubj	_	_
4	wneir	gwneud	VERB	verb	Mutation=SM|Person=Impers|Tense=Fut	2	acl:relcl	_	_
5	fel	fel	ADP	prep	_	6	case	_	_
6	rheol	rheol	NOUN	noun	Gender=Fem|Number=Sing	4	obl	_	_
7	yw	bod	AUX	aux	Number=Sing|Person=3|Tense=Pres	2	cop	_	_
8	i	i	ADP	prep	_	10	case	_	_
9	ddau	dau	NUM	num	Gender=Masc|Mutation=SM	10	nummod	_	_
10	berson	person	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	11	nsubj	_	_
11	fynd	mynd	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	2	csubj	_	_
12	i	i	ADP	prep	_	11	advmod	_	_
13	mewn	mewn	ADP	prep	_	12	fixed	_	_
14	i	i	ADP	prep	_	16	case	_	SpaceAfter=No
15	'r	y	DET	art	_	16	det	_	_
16	guddfan	guddfan	NOUN	noun	Gender=Fem|Number=Sing	11	obl	_	_
17	ac	ac	CCONJ	cconj	_	18	cc	_	_
18	un	un	NUM	num	_	11	conj	_	_
19	yn	yn	AUX	impf	_	20	aux	_	_
20	dod	dod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	18	xcomp	_	_
21	allan	allan	ADV	adv	_	20	advmod	_	SpaceAfter=No
22	,	,	PUNCT	punct	_	24	punct	_	_
23	fel	fel	ADP	prep	_	24	case	_	_
24	bod	bod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	20	appos	_	_
25	yr	y	DET	art	_	26	det	_	_
26	adar	aderyn	NOUN	noun	Gender=Masc|Number=Plur	24	nsubj	_	_
27	yn	yn	AUX	impf	_	28	aux	_	_
28	credu	credu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	24	xcomp	_	_
29	fod	bod	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	28	ccomp	_	_
30	pawb	pawb	PRON	indep	Gender=Masc|Number=Sing|PronType=Prs	29	nsubj	_	_
31	wedi	wedi	AUX	ante	_	32	aux	_	_
32	mynd	mynd	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	29	xcomp	_	SpaceAfter=No
33	.	.	PUNCT	punct	_	24	punct	_	SpacesAfter=\n

~~~


