---
layout: base
title:  'Statistics of advcl in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `advcl`

This relation is universal.

180 nodes (1%) are attached to their parents as `advcl`.

130 instances of `advcl` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.59444444444444.

The following 11 pairs of parts of speech are connected with `advcl`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (142; 79% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (12; 7% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (8; 4% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (6; 3% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (6; 3% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-SYM.html">SYM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 3 advcl	color:blue
1	Pero	pero	CCONJ	CC	_	13	discourse	_	_
2	cuando	cuando	ADV	WRB	PronType=Rel	3	advmod	_	_
3	sugiero	sugerir	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	13	advcl	_	_
4	que	que	SCONJ	IN	_	5	mark	_	_
5	utilice	utilizar	VERB	VBC	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
6	a	a	ADP	IN	_	7	case	_	_
7	Frank	Frank	PROPN	NNP	Gender=Masc|Number=Sing	5	obl	_	_
8	de	de	ADP	IN	_	9	case	_	_
9	modelo	modelo	NOUN	NN	Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
10	,	,	PUNCT	,	PunctType=Comm	3	punct	_	_
11	ella	él	PRON	PRP	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
12	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	13	compound:prt	_	_
13	rie	reír	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
14	.	.	PUNCT	.	PunctType=Peri	13	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 advcl	color:blue
1	En	en	ADP	IN	_	2	case	_	_
2	teoría	teoría	NOUN	NN	Gender=Fem|Number=Sing	10	discourse	_	SpaceAfter=No
3	,	,	PUNCT	,	PunctType=Comm	2	punct	_	_
4	si	si	SCONJ	IN	_	6	mark	_	_
5	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	expl:pass	_	_
6	hace	hacer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	advcl	_	_
7	bien	bien	ADV	RB	_	6	advmod	_	SpaceAfter=No
8	,	,	PUNCT	,	PunctType=Comm	6	punct	_	_
9	es	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	indetectable	indetectable	ADJ	JJ	Number=Sing	0	root	_	SpaceAfter=No
11	.	.	PUNCT	.	PunctType=Peri	10	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 11 advcl	color:blue
1	Debido	deber	VERB	VBN	ExtPos=SCONJ|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	11	mark	_	_
2	a	a	ADP	IN	_	1	fixed	_	_
3	que	que	ADP	IN	_	1	fixed	_	_
4	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	serie	serie	NOUN	NN	Gender=Fem|Number=Sing	11	nsubj	_	_
6	1	1	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	5	appos	_	_
7	ya	ya	ADV	RB	_	11	advmod	_	_
8	no	no	ADV	RB	Polarity=Neg	11	advmod	_	_
9	es	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
10	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	antigua	antigua	NOUN	NN	Gender=Fem|Number=Sing	16	advcl	_	SpaceAfter=No
12	,	,	PUNCT	,	PunctType=Comm	11	punct	_	_
13	muchos	mucho	DET	DT	Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	14	det	_	_
14	usuarios	usuario	NOUN	NN	Gender=Masc|Number=Plur	16	nsubj	_	_
15	pueden	poder	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	16	aux	_	_
16	ahorrar	ahorrar	VERB	VB	VerbForm=Inf	0	root	_	_
17	100	100	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	18	nummod	_	_
18	euros	euro	NOUN	NN	Gender=Masc|Number=Plur	16	obj	_	SpaceAfter=No
19	.	.	PUNCT	.	PunctType=Peri	16	punct	_	_

~~~


