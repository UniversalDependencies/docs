---
layout: base
title:  'Statistics of parataxis:discourse in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `parataxis:discourse`

This relation is a language-specific subtype of <tt><a href="ru_pud-dep-parataxis.html">parataxis</a></tt>.

3 nodes (0%) are attached to their parents as `parataxis:discourse`.

3 instances of `parataxis:discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.

The following 1 pairs of parts of speech are connected with `parataxis:discourse`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-ADP.html">ADP</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 parataxis:discourse	color:blue
1	В	в	ADP	IN	ExtPos=ADV	6	parataxis:discourse	_	_
2	частности	частность	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	,	_	1	punct	_	_
4	Османская	османский	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	Proper=True
5	империя	империя	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
6	хотела	хотеть	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	остановить	остановить	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	6	xcomp	_	_
8	перевоз	перевоз	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obj	_	_
9	зерна	зерно	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	8	nmod	_	SpaceAfter=No
10	,	,	PUNCT	,	_	14	punct	_	_
11	так	так	ADV	RB	Degree=Pos	14	mark	_	_
12	как	как	SCONJ	IN	_	11	fixed	_	_
13	сама	сам	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	14	nsubj	_	_
14	имела	иметь	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	advcl	_	_
15	на	на	ADP	IN	_	16	case	_	_
16	него	оно	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3	14	obl	_	_
17	большой	большой	ADJ	JJ	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	18	amod	_	_
18	спрос	спрос	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	14	obj	_	SpaceAfter=No
19	.	.	PUNCT	.	_	6	punct	_	_

~~~


