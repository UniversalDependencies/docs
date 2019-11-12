---
layout: base
title:  'Statistics of csubj in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `csubj`

This relation is universal.

13 nodes (0%) are attached to their parents as `csubj`.

10 instances of `csubj` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.23076923076923.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (7; 54% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 1 csubj	color:blue
1	Lleihau	lleihau	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	13	csubj	_	_
2	tagfeydd	tagfa	NOUN	noun	Gender=Fem|Number=Plur	1	obj	_	_
3	traffig	traffig	NOUN	noun	Gender=Masc|Number=Sing	2	nmod	_	_
4	rhwng	rhwng	ADP	prep	_	5	case	_	_
5	Ynys	Ynys	PROPN	place	Gender=Fem|Number=Sing	1	obl	_	_
6	Môn	Môn	PROPN	place	Gender=Masc|Number=Sing	5	flat:name	_	_
7	a	a	CCONJ	cconj	_	9	cc	_	SpaceAfter=No
8	'r	yn	DET	art	_	9	det	_	_
9	tir	tir	NOUN	noun	Gender=Masc|Number=Sing	5	conj	_	_
10	mawr	mawr	ADJ	pos	Degree=Pos	9	amod	_	_
11	ydy	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	13	cop	_	SpaceAfter=No
12	'r	y	DET	art	_	13	det	_	_
13	bwriad	bwriad	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
14	.	.	PUNCT	punct	_	13	punct	_	SpacesAfter=\s\n

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 27 csubj	color:blue
1	Os	os	SCONJ	sconj	_	2	mark	_	_
2	ydych	bod	VERB	verb	Mood=Ind|Number=Plur|Person=2|Tense=Pres	0	root	_	_
3	chi	chi	PRON	indep	Number=Plur|Person=2|PronType=Prs	2	nsubj	_	_
4	wedi	wedi	AUX	ante	_	5	aux	_	_
5	ateb	ateb	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
6	"	"	PUNCT	punct	_	7	punct	_	SpaceAfter=No
7	ydw	bod	VERB	verb	Mood=Ind|Number=Sing|Person=1|Tense=Pres	5	acl	_	SpaceAfter=No
8	"	"	PUNCT	punct	_	7	punct	_	_
9	i	i	ADP	prep	_	11	case	_	_
10	unrhyw	unrhyw	ADJ	pos	Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	_
11	un	un	NUM	num	_	5	obl	_	_
12	o	o	ADP	prep	_	14	case	_	SpaceAfter=No
13	'r	y	DET	art	_	14	det	_	_
14	cwestiynau	cwestiwn	NOUN	noun	Gender=Masc|Number=Plur	11	nmod	_	_
15	uchod	uchod	ADJ	pos	Degree=Pos|Gender=Masc|Number=Sing	14	amod	_	SpaceAfter=No
16	,	,	PUNCT	punct	_	20	punct	_	_
17	yna	yna	ADV	adv	_	20	advmod	_	_
18	mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	20	cop	_	SpaceAfter=No
19	'n	yn	PART	pred	_	20	case:pred	_	_
20	debyg	tebyg	ADJ	pos	Degree=Pos|Mutation=SM	2	parataxis	_	_
21	y	y	PART	aff	_	27	advmod	_	_
22	byddai	bod	AUX	aux	Mood=Cnd|Number=Sing|Person=3|Tense=Imp	27	cop	_	_
23	cwrs	cwrs	NOUN	noun	Gender=Masc|Number=Sing	27	nsubj	_	_
24	Sgiliau	sgil	NOUN	noun	Gender=Masc|Number=Plur	23	nmod	_	_
25	Iaith	Iaith	NOUN	noun	Gender=Fem|Number=Sing	24	nmod	_	_
26	yn	yn	PART	pred	_	27	case:pred	_	_
27	ddefnyddiol	defnyddiol	ADJ	pos	Degree=Pos|Mutation=SM	20	csubj	_	_
28	i	i	ADP	prep	_	29	case	_	_
29	chi	chi	PRON	indep	Number=Plur|Person=2|PronType=Prs	27	obl	_	SpaceAfter=No
30	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 csubj	color:blue
1	Chwerwfelys	chwerwfelys	NOUN	noun	Gender=Masc|Number=Sing	4	nsubj	_	_
2	yw	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	SpaceAfter=No
3	'r	y	DET	art	_	4	det	_	_
4	gair	gair	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	:	:	PUNCT	punct	_	6	punct	_	_
6	mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	parataxis	_	_
7	adre	adre	NOUN	noun	Gender=Masc|Number=Sing	6	nsubj	_	_
8	a	a	CCONJ	cconj	_	10	cc	_	SpaceAfter=No
9	'i	ei	PRON	dep	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	10	nmod:poss	_	_
10	gysur	cysur	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	7	conj	_	_
11	cyfarwydd	cyfarwydd	NOUN	noun	Gender=Masc|Number=Sing	10	nmod	_	_
12	yn	yn	AUX	impf	_	13	aux	_	_
13	agosâu	agosâu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	6	xcomp	_	SpaceAfter=No
14	,	,	PUNCT	punct	_	16	punct	_	_
15	ond	ond	CCONJ	cconj	_	16	cc	_	_
16	trist	trist	ADJ	pos	Degree=Pos	6	conj	_	_
17	fydd	bod	AUX	aux	Mood=Ind|Mutation=SM|Number=Sing|Person=3|Tense=Fut	16	cop	_	_
18	gadael	gadael	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	16	csubj	_	_
19	yr	y	DET	art	_	20	det	_	_
20	hyn	hyn	PRON	dem	Number=Plur|PronType=Dem	18	obj	_	_
21	a	a	CCONJ	cconj	_	25	cc	_	_
22	fu	bod	AUX	aux	Mood=Ind|Mutation=SM|Number=Sing|Person=3|Tense=Past	25	cop	_	SpaceAfter=No
23	'n	yn	PART	pred	_	25	case:pred	_	_
24	bedwar	pedwar	NUM	num	Gender=Masc|Mutation=SM|Number=Sing	25	nummod	_	_
25	mis	mis	NOUN	noun	Gender=Masc|Number=Sing	16	conj	_	_
26	arbennig	arbennig	ADJ	pos	Degree=Pos|Gender=Masc|Number=Sing	25	amod	_	_
27	yma	yma	ADV	adv	_	25	advmod	_	SpaceAfter=No
28	'n	yn	ADP	prep	_	29	case	_	_
29	Harvard	Harvard	NOUN	noun	Gender=Masc|Number=Sing	25	nmod	_	SpaceAfter=No
30	.	.	PUNCT	punct	_	6	punct	_	SpacesAfter=\n

~~~


