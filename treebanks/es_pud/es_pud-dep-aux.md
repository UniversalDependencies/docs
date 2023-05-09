---
layout: base
title:  'Statistics of aux in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="es_pud-dep-aux-pass.html">aux:pass</a></tt>.

342 nodes (1%) are attached to their parents as `aux`.

341 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25146198830409.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (332; 97% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Anteriormente	anteriormente	ADV	RB	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	solo	solo	ADV	RB	_	4	advmod	_	_
4	blogueros	_	NOUN	NN	Gender=Masc|Number=Plur	6	nsubj	_	_
5	habían	haber	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	6	aux	_	_
6	visto	_	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	los	el	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	jets	_	NOUN	NN	Gender=Masc|Number=Plur	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 aux	color:blue
1	Su	_	PRON	DTP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	gestión	gestión	NOUN	NN	Gender=Fem|Number=Sing	10	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	sin	sin	ADP	IN	_	10	discourse	_	_
5	embargo	embargo	NOUN	NN	Gender=Masc|Number=Sing	4	fixed	_	SpaceAfter=No
6	,	,	PUNCT	,	_	4	punct	_	_
7	no	_	ADV	RB	Polarity=Neg	10	advmod	_	_
8	ha	haber	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	aux	_	_
9	estado	estar	AUX	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	cop	_	_
10	exenta	_	ADJ	JJ	Gender=Fem|Number=Sing	0	root	_	_
11	de	de	ADP	IN	_	12	case	_	_
12	críticas	_	NOUN	NN	Gender=Fem|Number=Plur	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Danevirke	Danevirke	PROPN	NNP	Number=Sing	5	nsubj	_	_
2	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	5	compound:prt	_	_
3	ha	haber	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux	_	_
4	mantenido	_	AUX	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	cop	_	_
5	parte	parte	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	_
6	de	de	ADP	IN	_	7	case	_	_
7	Alemania	Alemania	PROPN	NNP	Number=Sing	5	nmod	_	_
8	desde	desde	ADP	IN	_	9	case	_	_
9	entonces	entonces	ADV	RB	_	5	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	5	punct	_	_

~~~


