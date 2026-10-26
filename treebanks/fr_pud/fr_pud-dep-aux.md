---
layout: base
title:  'Statistics of aux in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `aux`

This relation is universal.
There are 3 language-specific subtypes of `aux`: <tt><a href="fr_pud-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_pud-dep-aux-pass.html">aux:pass</a></tt>, <tt><a href="fr_pud-dep-aux-tense.html">aux:tense</a></tt>.

1 nodes (0%) are attached to their parents as `aux`.

1 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `aux`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-AUX.html">AUX</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Il	lui	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	wordform=il
2	se	soi	PRON	PRP	Person=3|PronType=Prs|Reflex=Yes	4	expl:pv	_	_
3	voit	voir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	imposer	imposer	VERB	VB	VerbForm=Inf	0	root	_	_
5	a	a	X	FW	ExtPos=ADV|Foreign=Yes	4	advmod	_	_
6	posteriori	posteriori	X	FW	Foreign=Yes	5	fixed	_	_
7	des	un	DET	DT	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	temps	temps	NOUN	NN	Gender=Masc|Number=Plur	4	obj	_	_
9	de	de	ADP	IN	_	10	case	_	_
10	trajet	trajet	NOUN	NN	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	,	_	13	punct	_	_
12	à	à	ADP	IN	_	13	mark	_	_
13	déduire	déduire	VERB	VB	VerbForm=Inf	8	xcomp	_	_
14	de	de	ADP	INDT	_	16	case	_	_
15	les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	16	det	_	_
16	temps	temps	NOUN	NN	Gender=Masc|Number=Plur	13	obl	_	_
17	de	de	ADP	IN	_	18	case	_	_
18	prestations	prestation	NOUN	NN	Gender=Fem|Number=Plur	16	nmod	_	_
19	effectivement	effectivement	ADV	RB	_	20	advmod	_	_
20	accomplies	accompli	ADJ	JJ	Gender=Fem|Number=Plur	18	amod	_	SpaceAfter=No
21	,	,	PUNCT	,	_	23	punct	_	_
22	sans	sans	ADP	IN	_	23	mark	_	_
23	pouvoir	pouvoir	VERB	VB	VerbForm=Inf	4	advcl	_	_
24	contrôler	contrôler	VERB	VB	VerbForm=Inf	23	xcomp	_	_
25	évidemment	évidemment	ADV	RB	_	24	advmod	_	_
26	les	le	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	27	det	_	_
27	temps	temps	NOUN	NN	Gender=Masc|Number=Plur	24	obj	_	_
28	de	de	ADP	IN	_	29	case	_	_
29	trajet	trajet	NOUN	NN	Gender=Masc|Number=Sing	27	nmod	_	_
30	réels	réel	ADJ	JJ	Gender=Masc|Number=Plur	27	amod	_	SpaceAfter=No
31	.	.	PUNCT	.	_	4	punct	_	_

~~~


