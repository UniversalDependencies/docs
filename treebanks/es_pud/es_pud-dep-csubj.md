---
layout: base
title:  'Statistics of csubj in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="es_pud-dep-csubj-pass.html">csubj:pass</a></tt>.

40 nodes (0%) are attached to their parents as `csubj`.

29 instances of `csubj` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.9.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (20; 50% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (10; 25% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (5; 13% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 csubj	color:blue
1	Es	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
2	posible	_	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
3	que	_	SCONJ	IN	_	9	mark	_	_
4	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	asunto	_	NOUN	NN	Gender=Masc|Number=Sing	9	nsubj	_	_
6	no	_	ADV	RB	Polarity=Neg	9	advmod	_	_
7	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	9	compound:prt	_	_
8	haya	haber	AUX	VBC	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	aux	_	_
9	terminado	_	VERB	VBN	VerbForm=Fin	2	csubj	_	_
10	para	_	ADP	IN	_	11	case	_	_
11	Barroso	_	PROPN	NNP	Number=Sing	9	obl	_	SpaceAfter=No
12	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 csubj	color:blue
1	En	_	ADP	IN	_	3	case	_	_
2	este	_	DET	DT	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	contexto	_	NOUN	NN	Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
4	,	_	PUNCT	,	_	3	punct	_	_
5	movilizar	_	VERB	VB	Aspect=Imp|VerbForm=Fin|Voice=Act	10	csubj	_	_
6	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	5	compound:prt	_	_
7	contra	_	ADP	IN	_	9	case	_	_
8	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	industria	_	NOUN	NN	Gender=Fem|Number=Sing	5	obl	_	_
10	tiene	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
11	sentido	_	NOUN	NN	Gender=Masc|Number=Sing	10	obj	_	SpaceAfter=No
12	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	Su	_	PRON	DTP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	sueño	_	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
3	es	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
4	terminar	_	VERB	VB	Aspect=Imp|VerbForm=Fin|Voice=Act	2	csubj	_	_
5	aquí	_	ADV	RB	_	4	advmod	_	_
6	su	_	PRON	DTP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	7	det	_	_
7	carrera	_	NOUN	NN	Gender=Fem|Number=Sing	4	obj	_	SpaceAfter=No
8	.	_	PUNCT	.	_	2	punct	_	_

~~~


