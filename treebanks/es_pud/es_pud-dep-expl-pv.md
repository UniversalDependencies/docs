---
layout: base
title:  'Statistics of expl:pv in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-expl.html">expl</a></tt>.
There are also 1 other language-specific subtypes of `expl`: <tt><a href="es_pud-dep-expl-pass.html">expl:pass</a></tt>.

2 nodes (0%) are attached to their parents as `expl:pv`.

2 instances of `expl:pv` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 1 pairs of parts of speech are connected with `expl:pv`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 expl:pv	color:blue
1	Los	el	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	sindicatos	sindicato	NOUN	NN	Gender=Masc|Number=Plur	5	nsubj	_	_
3	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	5	expl:pv	_	_
4	han	haber	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	5	aux	_	_
5	mostrado	mostrar	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	muy	muy	ADV	RB	_	7	advmod	_	_
7	combativos	combativo	ADJ	JJ	Gender=Masc|Number=Plur	5	xcomp	_	_
8	y	y	CCONJ	CC	_	10	cc	_	_
9	han	haber	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	10	aux	_	_
10	pedido	pedir	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	conj	_	_
11	en	en	ADP	IN	_	13	case	_	_
12	reiteradas	reiterado	ADJ	JJ	Gender=Fem|Number=Plur	13	amod	_	_
13	ocasiones	ocasión	NOUN	NN	Gender=Fem|Number=Plur	10	obl	_	_
14	derogar	derogar	VERB	VB	VerbForm=Inf	10	xcomp	_	_
15	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	norma	norma	NOUN	NN	Gender=Fem|Number=Sing	14	obj	_	_
17	de	de	ADP	IN	_	19	case	_	_
18	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	que	que	PRON	REL	Gender=Fem|Number=Sing|PronType=Rel	25	obl	_	_
20	Fátima	Fátima	PROPN	NNP	Gender=Fem|Number=Sing	23	nsubj	_	_
21	Báñez	Báñez	PROPN	NNP	Gender=Fem|Number=Sing	20	flat:name	_	_
22	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	23	expl:pv	_	_
23	siente	sentir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	acl:relcl	_	_
24	más	_	ADV	RBR	Degree=Cmp	25	advmod	_	_
25	orgullosa	orgulloso	ADJ	JJ	Gender=Fem|Number=Sing	23	xcomp	_	SpaceAfter=No
26	.	.	PUNCT	.	_	5	punct	_	_

~~~


