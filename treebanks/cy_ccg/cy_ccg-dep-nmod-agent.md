---
layout: base
title:  'Statistics of nmod:agent in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `nmod:agent`

This relation is a language-specific subtype of <tt><a href="cy_ccg-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="cy_ccg-dep-nmod-poss.html">nmod:poss</a></tt>.

11 nodes (0%) are attached to their parents as `nmod:agent`.

11 instances of `nmod:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.90909090909091.

The following 2 pairs of parts of speech are connected with `nmod:agent`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (9; 82% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (2; 18% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 nmod:agent	color:blue
1	Ar	ar	ADP	prep	_	3	case	_	_
2	y	y	DET	art	_	3	det	_	_
3	dde	de	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	4	advcl	_	_
4	mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	rhestr	rhestr	NOUN	noun	Gender=Fem|Number=Sing	4	nsubj	_	_
6	o	o	ADP	prep	_	7	case	_	_
7	wegamerâu	gwegamera	NOUN	noun	Gender=Masc|Mutation=SM|Number=Plur	5	nmod	_	_
8	sy	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Relative=Rel|Tense=Pres	7	acl:relcl	_	SpaceAfter=No
9	'n	yn	AUX	impf	_	10	aux	_	_
10	cael	cael	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	8	xcomp	_	_
11	eu	eu	PRON	dep	Number=Plur|Person=3|PronType=Prs	12	obj	_	_
12	cynnal	cynnal	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	10	ccomp	_	_
13	gan	gan	ADP	prep	_	15	case	_	_
14	y	y	DET	art	_	15	det	_	_
15	Cyngor	cyngor	NOUN	noun	Gender=Masc|Number=Sing	12	nmod:agent	_	_
16	ac	a	CCONJ	cconj	_	18	cc	_	_
17	gan	gan	ADP	prep	_	18	case	_	_
18	gyrff	corff	NOUN	noun	Gender=Masc|Mutation=SM|Number=Plur	15	conj	_	_
19	eraill	arall	ADJ	pos	Degree=Pos|Number=Plur	18	amod	_	_
20	o	o	ADP	prep	_	21	case	_	_
21	amgylch	amgylch	NOUN	noun	Gender=Masc|Number=Sing	18	nmod	_	_
22	Gwynedd	Gwynedd	PROPN	place	Gender=Masc|Number=Sing	21	nmod	_	SpaceAfter=No
23	.	.	PUNCT	punct	_	4	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 18 nmod:agent	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	SpaceAfter=No
2	'n	yn	PART	pred	_	3	case:pred	_	_
3	debyg	tebyg	ADJ	pos	Degree=Pos|Mutation=SM	0	root	_	_
4	mai	mai	SCONJ	sconj	_	11	mark	_	SpaceAfter=No
5	'r	y	DET	art	_	6	det	_	_
6	cofnod	cofnod	NOUN	noun	Gender=Masc|Number=Sing	11	nsubj	_	_
7	hanesyddol	hanesyddol	ADJ	pos	Degree=Pos	6	amod	_	_
8	cyntaf	cynnar	ADJ	sup	Degree=Sup	7	advmod	_	_
9	o	o	ADP	prep	_	10	case	_	_
10	Aberystwyth	Aberystwyth	PROPN	place	_	6	nmod	_	_
11	oedd	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Imp	3	ccomp	_	_
12	adeiladu	adeiladu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	11	xcomp	_	_
13	caer	caer	NOUN	noun	Gender=Fem|Number=Sing	12	obj	_	_
14	yn	yn	ADP	prep	_	15	case	_	_
15	1109	1109	NUM	num	_	12	obl	_	SpaceAfter=No
16	,	,	PUNCT	punct	_	15	punct	_	_
17	gan	gan	ADP	prep	_	18	case	_	_
18	Gilbert	Gilbert	PROPN	person	_	12	nmod:agent	_	_
19	Fitz	Fitz	PROPN	person	_	18	flat:name	_	_
20	Richard	Richard	PROPN	person	_	19	flat:name	_	SpaceAfter=No
21	.	.	PUNCT	punct	_	12	punct	_	SpacesAfter=\n

~~~


