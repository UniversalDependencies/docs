---
layout: base
title:  'Statistics of flat in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="cy_ccg-dep-flat-name.html">flat:name</a></tt>.

175 nodes (0%) are attached to their parents as `flat`.

175 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.04571428571429.

The following 6 pairs of parts of speech are connected with `flat`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (165; 94% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	SpaceAfter=No
2	'n	yn	PART	pred	_	3	case:pred	_	_
3	fab	mab	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	0	root	_	_
4	i	i	ADP	prep	_	6	case	_	SpaceAfter=No
5	'r	y	DET	art	_	6	det	_	_
6	hanesydd	hanesydd	NOUN	noun	Gender=Masc|Number=Sing	3	nmod	_	_
7	Richard	Richard	PROPN	person	_	6	flat	_	_
8	Cyril	Cyril	PROPN	person	_	7	flat:name	_	_
9	Hughes	Hughes	PROPN	person	_	7	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	Edmwnt	Edmwnt	PROPN	person	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	3	punct	_	_
3	brawd	brawd	NOUN	noun	Gender=Masc|Number=Sing	1	nmod	_	_
4	y	y	DET	art	_	5	det	_	_
5	brenin	Brenin	PROPN	person	_	3	nmod	_	_
6	Edward	Edward	PROPN	person	_	5	flat	_	_
7	I	I	NUM	num	_	6	flat:name	_	_
8	a	a	PRON	rel	PronType=Rel	9	obj	_	_
9	thyfodd	tyfu	VERB	verb	Mood=Ind|Mutation=AM|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	1	acl:relcl	_	_
10	y	y	DET	art	_	11	det	_	_
11	dref	tref	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	9	obj	_	_
12	o	o	ADP	prep	_	13	case	_	_
13	gwmpas	cwmpas	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	9	obl	_	_
14	y	y	DET	art	_	15	det	_	_
15	castell	castell	NOUN	noun	Gender=Masc|Number=Sing	13	nmod	_	SpaceAfter=No
16	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	Rhyddhawyd	rhyddhau	VERB	verb	Mood=Ind|Person=0|Tense=Past|VerbForm=Fin	0	root	_	_
2	un	un	NUM	num	_	3	nummod	_	_
3	albwm	albwm	NOUN	noun	Gender=Masc|Number=Sing	1	obj	_	_
4	o	o	ADP	prep	_	6	case	_	SpaceAfter=No
5	'r	y	DET	art	_	6	det	_	_
6	enw	enw	NOUN	noun	Gender=Masc|Number=Sing	3	nmod	_	_
7	Cariad	cariad	NOUN	noun	Gender=Masc|Number=Sing	6	flat	_	_
8	Cywir	Cywir	ADJ	pos	Degree=Pos|Number=Sing	7	amod	_	_
9	ar	ar	ADP	prep	_	10	case	_	_
10	label	label	NOUN	noun	Gender=Fem|Number=Sing	1	obl	_	_
11	Sain	Sain	PROPN	org	Gender=Fem|Number=Sing	10	flat	_	_
12	ym	yn	ADP	prep	_	13	case	_	_
13	1984	1984	NUM	num	_	1	obl	_	SpaceAfter=No
14	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


