---
layout: base
title:  'Statistics of csubj in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="es_pud-dep-csubj-pass.html">csubj:pass</a></tt>.

41 nodes (0%) are attached to their parents as `csubj`.

30 instances of `csubj` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.8780487804878.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (20; 49% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (11; 27% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (6; 15% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 csubj	color:blue
1	Es	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	posible	posible	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
3	que	que	SCONJ	IN	_	9	mark	_	_
4	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	asunto	asunto	NOUN	NN	Gender=Masc|Number=Sing	9	nsubj	_	_
6	no	_	ADV	RB	Polarity=Neg	9	advmod	_	_
7	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	9	compound:prt	_	_
8	haya	haber	AUX	VBC	Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	aux	_	_
9	terminado	terminar	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	csubj	_	_
10	para	para	ADP	IN	_	11	case	_	_
11	Barroso	Barroso	PROPN	NNP	Number=Sing	9	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 csubj	color:blue
1	En	en	ADP	IN	_	3	case	_	_
2	este	este	DET	DT	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	contexto	contexto	NOUN	NN	Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	movilizar	movilizar	VERB	VB	VerbForm=Inf	10	csubj	_	_
6	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	5	compound:prt	_	_
7	contra	contra	ADP	IN	_	9	case	_	_
8	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	industria	industria	NOUN	NN	Gender=Fem|Number=Sing	5	obl	_	_
10	tiene	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
11	sentido	sentido	NOUN	NN	Gender=Masc|Number=Sing	10	obj	_	SpaceAfter=No
12	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	Su	su	PRON	DTP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	sueño	sueño	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
3	es	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
4	terminar	terminar	VERB	VB	VerbForm=Inf	2	csubj	_	_
5	aquí	aquí	ADV	RB	_	4	advmod	_	_
6	su	_	PRON	DTP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	7	det	_	_
7	carrera	carrera	NOUN	NN	Gender=Fem|Number=Sing	4	obj	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


