---
layout: base
title:  'Statistics of expl:pass in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-expl.html">expl</a></tt>.
There are also 1 other language-specific subtypes of `expl`: <tt><a href="es_pud-dep-expl-pv.html">expl:pv</a></tt>.

120 nodes (1%) are attached to their parents as `expl:pass`.

119 instances of `expl:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.325.

The following 1 pairs of parts of speech are connected with `expl:pass`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (120; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl:pass	color:blue
1	Su	su	PRON	DTP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	voz	voz	NOUN	NN	Gender=Fem|Number=Sing	4	nsubj:pass	_	_
3	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	4	expl:pass	_	_
4	escuchó	escuchar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	literalmente	literalmente	ADV	RB	_	4	advmod	_	_
6	por	por	ADP	IN	_	9	case	_	_
7	todo	todo	DET	PDT	Gender=Masc|Number=Sing|PronType=Tot	9	det	_	_
8	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	mundo	mundo	NOUN	NN	Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
10	,	,	PUNCT	,	_	11	punct	_	_
11	dijo	decir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	parataxis	_	_
12	Leive	Leive	PROPN	NNP	Gender=Fem|Number=Sing	11	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	_	_

~~~


