---
layout: base
title:  'Statistics of nmod:poss in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="cy_ccg-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="cy_ccg-dep-nmod-agent.html">nmod:agent</a></tt>, <tt><a href="cy_ccg-dep-nmod-redup.html">nmod:redup</a></tt>.

505 nodes (1%) are attached to their parents as `nmod:poss`.

503 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.03960396039604.

The following 3 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (473; 94% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (30; 6% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nmod:poss	color:blue
1	Ar	ar	ADP	prep	_	2	case	_	_
2	ôl	ôl	NOUN	noun	Gender=Masc|Number=Sing	8	obl	_	_
3	cyfnod	cyfnod	NOUN	noun	Gender=Masc|Number=Sing	2	nmod	_	_
4	yn	yn	ADP	prep	_	6	case	_	_
5	yr	y	DET	art	_	6	det	_	_
6	ysgol	ysgol	NOUN	noun	Gender=Fem|Number=Sing	3	nmod	_	_
7	leol	lleol	ADJ	pos	Degree=Pos|Mutation=SM	6	amod	_	_
8	gweithiodd	gweithio	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
9	gartref	cartref	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	8	obl	_	_
10	ar	ar	ADP	prep	_	11	case	_	_
11	fferm	fferm	NOUN	noun	Gender=Masc|Number=Sing	8	obl	_	_
12	ei	ef	PRON	dep	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	13	nmod:poss	_	_
13	dad	tad	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	punct	_	8	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:poss	color:blue
1	Efallai	efallai	ADV	adv	_	3	advmod	_	_
2	y	y	DET	art	_	3	det	_	_
3	dewch	dod	VERB	verb	Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin	0	root	_	_
4	i	i	ADP	prep	_	6	case	_	SpaceAfter=No
5	'r	y	DET	art	_	6	det	_	_
6	digwyddiad	digwyddiad	NOUN	noun	Gender=Masc|Number=Sing	3	obl	_	_
7	eich	chi	PRON	dep	Number=Plur|Person=2|Poss=Yes|PronType=Prs	8	nmod:poss	_	_
8	hun	hun	PRON	refl	Number=Sing|PronType=Rcp	6	nmod	_	SpaceAfter=No
9	,	,	PUNCT	punct	_	10	punct	_	_
10	hyd	hyd	NOUN	noun	Gender=Masc|Number=Sing	3	advmod	_	_
11	yn	yn	ADP	prep	_	10	fixed	_	_
12	oed	oed	NOUN	noun	Gender=Masc|Number=Sing	10	fixed	_	SpaceAfter=No
13	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nmod:poss	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
2	o	ef	PRON	indep	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	SpaceAfter=No
3	'n	yn	PART	pred	_	4	case:pred	_	_
4	ddyn	dyn	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	0	root	_	_
5	na	na	PART	neg	_	6	advmod	_	_
6	welais	gweld	VERB	verb	Mood=Ind|Mutation=SM|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	4	ccomp	_	_
7	i	i	PRON	indep	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
8	dim	dim	PART	neg	_	6	advmod	_	_
9	o	o	ADP	prep	_	11	case	_	_
10	'i	ef	PRON	dep	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	11	nmod:poss	_	_
11	debyg	tebyg	ADJ	pos	Degree=Pos|Mutation=SM	6	obj	_	_
12	erioed	erioed	ADV	adv	_	6	advmod	_	SpaceAfter=No
13	.	.	PUNCT	punct	_	4	punct	_	SpacesAfter=\n

~~~


