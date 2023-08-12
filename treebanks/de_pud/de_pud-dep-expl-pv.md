---
layout: base
title:  'Statistics of expl:pv in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-expl.html">expl</a></tt>.

2 nodes (0%) are attached to their parents as `expl:pv`.

1 instances of `expl:pv` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 1 pairs of parts of speech are connected with `expl:pv`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 expl:pv	color:blue
1	Nordalgerien	Nordalgerien	PROPN	NNP	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	_
2	liegt	liegen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	in	in	ADP	IN	_	6	case	_	_
4	der	der	DET	DT	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
5	gemäßigten	gemäßigt	ADJ	JJ	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	InflectionType=Weak
6	Klimazone	Klimazone	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	2	obl	_	_
7	und	und	CCONJ	CC	_	8	cc	_	_
8	erfreut	erfreuen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	conj	_	_
9	sich	sich	PRON	PRP	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	8	expl:pv	_	_
10	eines	ein	DET	DT	Case=Gen|Definite=Ind|Gender=Neut|Number=Sing|NumType=Card|PronType=Art	14	det	_	_
11	milden	mild	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	14	amod	_	SpaceAfter=No|InflectionType=Mixed
12	,	,	PUNCT	,	_	13	punct	_	_
13	mediterranen	mediterran	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	11	conj	_	InflectionType=Mixed
14	Klimas	Klima	NOUN	NN	Case=Gen|Gender=Neut|Number=Sing	8	obj	_	SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	_	_

~~~


