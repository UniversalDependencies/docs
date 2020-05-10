---
layout: base
title:  'Statistics of expl in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `expl`

This relation is universal.

45 nodes (0%) are attached to their parents as `expl`.

35 instances of `expl` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26666666666667.

The following 2 pairs of parts of speech are connected with `expl`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (38; 84% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (7; 16% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 expl	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	hi	hi	PRON	indep	Gender=Fem|Number=Sing|Person=3|PronType=Prs	1	nsubj	_	SpaceAfter=No
3	'n	yn	AUX	impf	_	5	aux	_	_
4	dy	dy	PRON	dep	Number=Sing|Person=2|PronType=Prs	5	obj	_	_
5	garu	caru	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
6	ti	ti	PRON	indep	Number=Sing|Person=2|PronType=Prs	5	expl	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 expl	color:blue
1	yr	y	PART	aff	_	2	advmod	_	_
2	wy	bod	VERB	verb	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	'n	yn	AUX	impf	_	4	aux	_	_
4	teimlo	teimlo	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
5	eich	eich	PRON	dep	Number=Plur|Person=2|PronType=Prs	9	nsubj	_	_
6	bod	bod	AUX	verbnoun	Number=Sing|VerbForm=Vnoun	9	cop	_	_
7	chi	chi	PRON	indep	Number=Plur|Person=2|PronType=Prs	9	expl	_	SpaceAfter=No
8	'n	yn	PART	pred	_	9	case:pred	_	_
9	anhapus	anhapus	ADJ	pos	Degree=Pos	4	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


