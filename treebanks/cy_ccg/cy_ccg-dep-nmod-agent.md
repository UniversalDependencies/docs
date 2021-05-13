---
layout: base
title:  'Statistics of nmod:agent in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `nmod:agent`

This relation is a language-specific subtype of <tt><a href="cy_ccg-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="cy_ccg-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="cy_ccg-dep-nmod-redup.html">nmod:redup</a></tt>.

27 nodes (0%) are attached to their parents as `nmod:agent`.

27 instances of `nmod:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.11111111111111.

The following 2 pairs of parts of speech are connected with `nmod:agent`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (21; 78% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (6; 22% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod:agent	color:blue
1	Ond	ond	CCONJ	cconj	_	3	cc	_	_
2	fe	fe	PART	aff	_	3	advmod	_	_
3	gafodd	cael	VERB	verb	Mood=Ind|Mutation=SM|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	ei	ef	PRON	dep	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
5	wrthod	gwrthod	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	3	ccomp	_	_
6	gan	gan	ADP	prep	_	7	case	_	_
7	lywodraeth	llywodraeth	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	5	nmod:agent	_	_
8	Iwerddon	Iwerddon	PROPN	place	_	7	nmod	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod:agent	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	'r	y	DET	art	_	3	det	_	_
3	geiriau	gair	NOUN	noun	Gender=Masc|Number=Plur	1	nsubj	_	_
4	wedi	wedi	AUX	ante	_	6	aux	_	_
5	eu	hwy	PRON	dep	Number=Plur|Person=3|PronType=Prs	6	obj	_	_
6	ysgrifennu	ysgrifennu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
7	gan	gan	ADP	prep	_	8	case	_	_
8	John	John	PROPN	person	_	6	nmod:agent	_	_
9	Howel	Howel	PROPN	person	Gender=Masc|Number=Sing	8	flat:name	_	_
10	(	(	PUNCT	punct	_	11	punct	_	SpaceAfter=No
11	1774	1774	NUM	num	_	9	nmod	_	SpaceAfter=No
12	-	-	PUNCT	punct	_	13	punct	_	SpaceAfter=No
13	1830	1830	NUM	num	_	11	nmod	_	SpaceAfter=No
14	)	)	PUNCT	punct	_	11	punct	_	_
15	sef	sef	CCONJ	cconj	_	16	cc	_	_
16	bardd	bardd	NOUN	noun	Gender=Masc|Number=Sing	8	appos	_	_
17	a	a	CCONJ	cconj	_	18	cc	_	_
18	golygydd	golygydd	NOUN	noun	Gender=Masc|Number=Sing	16	conj	_	_
19	llenyddol	llenyddol	ADJ	pos	Degree=Pos	18	amod	_	SpaceAfter=No
20	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


