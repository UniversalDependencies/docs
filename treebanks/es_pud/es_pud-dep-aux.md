---
layout: base
title:  'Statistics of aux in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="es_pud-dep-aux-pass.html">aux:pass</a></tt>.

301 nodes (1%) are attached to their parents as `aux`.

300 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13953488372093.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (294; 98% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Anteriormente	anteriormente	ADV	RB	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	,	PunctType=Comm	1	punct	_	_
3	solo	solo	ADV	RB	_	4	advmod	_	_
4	blogueros	bloguero	NOUN	NN	Gender=Masc|Number=Plur	6	nsubj	_	_
5	habían	haber	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	6	aux	_	_
6	visto	ver	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	los	el	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	jets	jet	NOUN	NN	Gender=Masc|Number=Plur	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	.	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 aux	color:blue
1	Su	su	PRON	DTP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	gestión	gestión	NOUN	NN	Gender=Fem|Number=Sing	10	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	,	PunctType=Comm	2	punct	_	_
4	sin	sin	ADP	IN	_	10	discourse	_	_
5	embargo	embargo	NOUN	NN	Gender=Masc|Number=Sing	4	fixed	_	SpaceAfter=No
6	,	,	PUNCT	,	PunctType=Comm	4	punct	_	_
7	no	no	ADV	RB	Polarity=Neg	10	advmod	_	_
8	ha	haber	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	aux	_	_
9	estado	estar	AUX	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	cop	_	_
10	exenta	exento	ADJ	JJ	Gender=Fem|Number=Sing	0	root	_	_
11	de	de	ADP	IN	_	12	case	_	_
12	críticas	crítica	NOUN	NN	Gender=Fem|Number=Plur	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	.	PunctType=Peri	10	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 aux	color:blue
1	Antes	antes	ADV	RB	_	16	advmod	_	_
2	de	de	ADP	IN	_	3	case	_	_
3	formar	formar	VERB	VB	VerbForm=Inf	1	xcomp	_	_
4	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	3	compound:prt	_	_
5	los	el	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	Andes	Andes	PROPN	NNP	Gender=Masc|Number=Plur	3	nsubj	_	_
7	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	margen	margen	NOUN	NN	Gender=Masc|Number=Sing	16	nsubj	_	_
9	occidental	occidental	ADJ	JJ	Gender=Masc|Number=Sing	8	amod	_	_
10	de	de	ADP	IN	_	11	case	_	_
11	Sudamérica	Sudamérica	PROPN	NNP	Number=Sing	8	nmod	_	_
12	ya	ya	ADV	RB	_	16	advmod	_	_
13	había	haber	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	16	aux	_	_
14	sido	ser	AUX	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	16	cop	_	_
15	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	lugar	lugar	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
17	de	de	ADP	IN	_	19	case	_	_
18	varias	vario	DET	DT	Gender=Fem|Number=Plur|PronType=Ind	19	det	_	_
19	orogenias	orogenia	NOUN	NN	Gender=Fem|Number=Plur	16	nmod	_	SpaceAfter=No
20	.	.	PUNCT	.	PunctType=Peri	16	punct	_	_

~~~


