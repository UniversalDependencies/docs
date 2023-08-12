---
layout: base
title:  'Statistics of det:poss in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-det.html">det</a></tt>.

223 nodes (1%) are attached to their parents as `det:poss`.

222 instances of `det:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.43497757847534.

The following 2 pairs of parts of speech are connected with `det:poss`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (222; 100% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:poss	color:blue
1	Das	der	DET	DT	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	obj	_	_
2	brauchen	brauchen	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres	0	root	_	_
3	wir	wir	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
4	in	in	ADP	IN	_	6	case	_	_
5	unserem	unser	DET	DTP$	Case=Dat|Gender=Neut|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	Land	Land	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing	2	obl	_	_
7	nicht	nicht	PART	RB	Polarity=Neg	2	advmod	_	SpaceAfter=No
8	,	,	PUNCT	,	_	9	punct	_	_
9	Leute	Leute	NOUN	NN	Case=Nom|Number=Plur	2	vocative	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 det:poss	color:blue
1	Als	als	SCONJ	CC	_	3	mark	_	_
2	Millican	Millican	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	starb	sterben	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	advcl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	nahmen	nehmen	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Past	0	root	_	_
6	wir	wir	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
7	an	an	VERB	DC	_	5	compound:prt	_	SpaceAfter=No
8	,	,	PUNCT	,	_	21	punct	_	_
9	wir	wir	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	21	nsubj	_	_
10	hätten	haben	AUX	VBC	Mood=Sub|Number=Plur|Person=1|Tense=Past	21	aux	_	_
11	damit	damit	ADV	RB	PronType=Dem	21	advmod	_	_
12	auch	auch	ADV	RB	Degree=Pos	21	advmod	_	_
13	unseren	unser	DET	DTP$	Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	16	det:poss	_	_
14	etwas	etwas	PRON	NN	Gender=Neut|Number=Sing|PronType=Ind	15	obl	_	_
15	störanfälligen	störanfällig	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	16	amod	_	InflectionType=Mixed
16	Odi	Odi	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing	21	obj	_	_
17	zu	zu	ADP	APPR	_	20	case	_	_
18	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	20	det	_	_
19	letzten	letzt	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing	20	amod	_	InflectionType=Weak
20	Mal	Mal	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing	21	obl	_	_
21	gesehen	sehen	VERB	VBN	Tense=Past	5	ccomp	_	SpaceAfter=No
22	.	.	PUNCT	.	_	5	punct	_	_

~~~


