---
layout: base
title:  'Statistics of det in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `det`

This relation is universal.

3503 nodes (15%) are attached to their parents as `det`.

3503 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11904082215244.

The following 12 pairs of parts of speech are connected with `det`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-DET.html">DET</a></tt> (2981; 85% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (239; 7% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-DET.html">DET</a></tt> (112; 3% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-DET.html">DET</a></tt> (51; 1% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-DET.html">DET</a></tt> (51; 1% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (25; 1% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-DET.html">DET</a></tt> (20; 1% instances), <tt><a href="es_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="es_pud-pos-DET.html">DET</a></tt> (19; 1% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-X.html">X</a></tt>-<tt><a href="es_pud-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	El	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	máximo	máximo	NOUN	NN	Gender=Masc|Number=Sing	4	nsubj	_	_
3	permitido	permitir	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl	_	_
4	es	ser	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	de	de	ADP	IN	_	7	case	_	_
6	5 000	5 000	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	7	nummod	_	_
7	$	$	NOUN	NN	Gender=Masc|Number=Plur	4	obl	_	_
8	por	por	ADP	IN	_	9	case	_	_
9	persona	persona	NOUN	NN	Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Su	su	PRON	DTP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	voz	voz	NOUN	NN	Gender=Fem|Number=Sing	4	nsubj:pass	_	_
3	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	4	expl:pass	_	_
4	escuchó	escuchar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	literalmente	literalmente	ADV	RB	_	4	advmod	_	_
6	por	por	ADP	IN	_	9	case	_	_
7	todo	todo	DET	PDT	Gender=Masc|Number=Sing|PronType=Tot	9	det	_	_
8	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	mundo	mundo	NOUN	NN	Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
10	,	,	PUNCT	,	PunctType=Comm	11	punct	_	_
11	dijo	decir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	parataxis	_	_
12	Leive	Leive	PROPN	NNP	Gender=Fem|Number=Sing	11	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	.	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Trabajó	trabajar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	para	para	ADP	IN	_	4	case	_	_
3	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	BBC	BBC	PROPN	NNP	Gender=Fem|Number=Sing	1	obl	_	_
5	durante	durante	ADP	IN	_	7	case	_	_
6	una	uno	NUM	CD	Gender=Fem|NumForm=Word|NumType=Card	7	nummod	_	_
7	década	década	NOUN	NN	Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	PunctType=Peri	1	punct	_	_

~~~


