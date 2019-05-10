---
layout: base
title:  'Statistics of nummod in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `nummod`

This relation is universal.

64 nodes (1%) are attached to their parents as `nummod`.

56 instances of `nummod` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.109375.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (59; 92% instances), <tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (3; 5% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	Bu	bod	AUX	aux	Number=Sing|Person=3|Tense=Past	2	cop	_	_
2	farw	marw	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	0	root	_	_
3	yn	yn	ADP	prep	_	4	case	_	_
4	79	79	NUM	num	_	2	obl	_	_
5	oed	oed	NOUN	noun	Gender=Masc|Number=Sing	4	nmod	_	_
6	ar	ar	ADP	prep	_	8	case	_	_
7	15	15	NUM	num	_	8	nummod	_	_
8	Mehefin	Mehefin	NOUN	noun	Gender=Masc|Number=Sing	2	obl	_	_
9	2004	2004	NUM	num	_	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 23 nummod	color:blue
1	Hyd	hyd	ADP	prep	_	3	case	_	_
2	at	at	ADP	prep	_	1	fixed	_	_
3	ddiwedd	diwedd	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	8	obl	_	_
4	Mehefin	Mehefin	NOUN	noun	Gender=Masc|Number=Sing	3	nmod	_	_
5	2008	2008	NUM	num	_	4	nmod	_	SpaceAfter=No
6	,	,	PUNCT	punct	_	8	punct	_	_
7	yr	y	PART	aff	_	8	advmod	_	_
8	oedd	bod	VERB	verb	Number=Sing|Person=3|Tense=Imp	0	root	_	_
9	726600	726600	NUM	num	_	8	nsubj	_	_
10	wedi	wedi	AUX	ante	_	11	aux	_	_
11	dweud	dweud	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	8	xcomp	_	_
12	eu	eu	PRON	dep	Number=Plur|Person=3|PronType=Prs	13	nsubj	_	_
13	bod	bod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	11	advcl	_	_
14	yn	yn	AUX	impf	_	15	aux	_	_
15	gallu	gallu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	13	xcomp	_	_
16	siarad	siarad	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	15	xcomp	_	_
17	Cymraeg	Cymraeg	NOUN	noun	Gender=Fem|Number=Sing	16	obj	_	_
18	yng	yn	ADP	prep	_	19	case	_	_
19	Nghymru	Cymru	PROPN	place	Gender=Fem|Mutation=NM|Number=Sing	16	obl	_	SpaceAfter=No
20	,	,	PUNCT	punct	_	24	punct	_	_
21	sy	bod	AUX	aux	Number=Sing|Person=3|Relative=Rel|Tense=Pres	24	cop	_	SpaceAfter=No
22	'n	yn	PART	pred	_	24	case:pred	_	_
23	25.8	25.8	NUM	card	_	24	nummod	_	SpaceAfter=No
24	%	%	SYM	sym	_	9	acl:relcl	_	_
25	o	o	ADP	prep	_	27	case	_	SpaceAfter=No
26	'r	y	DET	art	_	27	det	_	_
27	boblogaeth	poblogaeth	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	24	nmod	_	SpaceAfter=No
28	.	.	PUNCT	punct	_	8	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	Mae	bod	VERB	verb	Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	ymgyrchwyr	ymgyrchwr	NOUN	noun	Gender=Masc|Number=Plur	1	nsubj	_	_
3	iaith	iaith	NOUN	noun	Gender=Fem|Number=Sing	2	nmod	_	_
4	wedi	wedi	AUX	ante	_	5	aux	_	_
5	gosod	gosod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
6	sticeri	sticeri	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	5	obl	_	_
7	ar	ar	ADP	prep	_	9	case	_	_
8	wyth	wyth	NUM	num	_	9	nummod	_	_
9	deg	deg	NUM	num	Gender=Masc|Number=Sing	5	obl	_	_
10	o	o	ADP	prep	_	11	case	_	_
11	arwyddion	arwydd	NOUN	noun	Gender=Masc|Number=Plur	9	nmod	_	_
12	ffyrdd	ffordd	NOUN	noun	Gender=Masc|Number=Plur	11	nmod	_	_
13	Cyngor	cyngor	NOUN	noun	Gender=Masc|Number=Sing	12	nmod	_	_
14	Wrecsam	Wrecsam	NOUN	noun	Gender=Fem|Number=Sing	13	flat	_	_
15	dros	dros	ADP	prep	_	17	case	_	_
16	y	y	DET	art	_	17	det	_	_
17	penwythnos	penwythnos	NOUN	noun	Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
18	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\s\n

~~~


