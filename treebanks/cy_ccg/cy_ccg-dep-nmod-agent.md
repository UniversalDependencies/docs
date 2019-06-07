---
layout: base
title:  'Statistics of nmod:agent in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `nmod:agent`

This relation is a language-specific subtype of <tt><a href="cy_ccg-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="cy_ccg-dep-nmod-poss.html">nmod:poss</a></tt>.

6 nodes (0%) are attached to their parents as `nmod:agent`.

6 instances of `nmod:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 2 pairs of parts of speech are connected with `nmod:agent`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (4; 67% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (2; 33% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 nmod:agent	color:blue
1	Parhaodd	parhau	VERB	verb	Number=Sing|Person=3	0	root	_	_
2	Cymru	Cymru	PROPN	place	Gender=Fem|Number=Sing	1	nsubj	_	SpaceAfter=No
3	'n	yn	PART	pred	_	4	case:pred	_	_
4	wlad	gwlad	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	1	xcomp	_	_
5	gristnogol	cristnogol	ADJ	pos	Degree=Pos|Mutation=SM	4	amod	_	_
6	ar	ar	ADP	prep	_	7	case	_	_
7	ôl	ôl	NOUN	noun	Gender=Masc|Number=Sing	4	nmod	_	_
8	goresgyn	goresgyn	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	7	nmod	_	_
9	Lloegr	Lloegr	PROPN	place	_	8	obj	_	_
10	gan	gan	ADP	prep	_	12	case	_	_
11	y	y	DET	art	_	12	det	_	_
12	tylwythau	tylwyth	NOUN	noun	Number=Plur	8	nmod:agent	_	_
13	paganaidd	paganaidd	ADJ	pos	Degree=Pos	12	amod	_	_
14	Tiwtonaidd	Tiwtonaidd	ADJ	pos	Degree=Pos	12	amod	_	SpaceAfter=No
15	.	.	PUNCT	punct	_	4	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 18 nmod:agent	color:blue
1	Mae	bod	AUX	aux	Number=Sing|Person=3|Tense=Pres	3	cop	_	SpaceAfter=No
2	'n	yn	PART	pred	_	3	case:pred	_	_
3	debyg	tebyg	ADJ	pos	Degree=Pos|Mutation=SM	0	root	_	_
4	mai	mai	SCONJ	sconj	_	11	mark	_	SpaceAfter=No
5	'r	y	DET	art	_	6	det	_	_
6	cofnod	cofnod	NOUN	noun	Gender=Masc|Number=Sing	11	nsubj	_	_
7	hanesyddol	hanesyddol	ADJ	pos	Degree=Pos	6	amod	_	_
8	cyntaf	cynnar	ADJ	sup	Degree=Sup	7	advmod	_	_
9	o	o	ADP	prep	_	10	case	_	_
10	Aberystwyth	Aberystwyth	PROPN	place	_	6	nmod	_	_
11	oedd	bod	AUX	aux	Number=Sing|Person=3|Tense=Imp	3	ccomp	_	_
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


