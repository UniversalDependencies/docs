---
layout: base
title:  'Statistics of advcl in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `advcl`

This relation is universal.

175 nodes (1%) are attached to their parents as `advcl`.

126 instances of `advcl` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.66857142857143.

The following 9 pairs of parts of speech are connected with `advcl`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (134; 77% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (15; 9% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (9; 5% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (7; 4% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-SYM.html">SYM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 3 advcl	color:blue
1	Pero	_	CCONJ	CC	_	13	discourse	_	_
2	cuando	_	ADV	WRB	_	3	advmod	_	_
3	sugiero	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	13	advcl	_	_
4	que	_	SCONJ	IN	_	5	mark	_	_
5	utilice	_	VERB	VBC	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	_
6	a	_	ADP	IN	_	7	case	_	_
7	Frank	_	PROPN	NNP	Gender=Masc|Number=Sing	5	obl	_	_
8	de	_	ADP	IN	_	9	case	_	_
9	modelo	_	NOUN	NN	Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
10	,	_	PUNCT	,	_	3	punct	_	_
11	ella	él	PRON	PRP	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
12	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	13	compound:prt	_	_
13	rie	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
14	.	_	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 advcl	color:blue
1	En	_	ADP	IN	_	10	discourse	_	_
2	teoría	_	NOUN	NN	Gender=Fem|Number=Sing	1	fixed	_	SpaceAfter=No
3	,	_	PUNCT	,	_	1	punct	_	_
4	si	_	SCONJ	IN	_	6	mark	_	_
5	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	compound:prt	_	_
6	hace	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	10	advcl	_	_
7	bien	_	ADV	RB	_	6	advmod	_	SpaceAfter=No
8	,	_	PUNCT	,	_	6	punct	_	_
9	es	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
10	indetectable	_	ADJ	JJ	Number=Sing	0	root	_	SpaceAfter=No
11	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 advcl	color:blue
1	Aunque	_	SCONJ	IN	_	3	mark	_	_
2	parezca	_	AUX	VBC	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	sorprendente	_	ADJ	JJ	Gender=Masc|Number=Sing	12	advcl	_	SpaceAfter=No
4	,	_	PUNCT	,	_	3	punct	_	_
5	incluso	_	ADV	RB	_	7	advmod	_	_
6	las	el	DET	DT	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
7	nubes	_	NOUN	NN	Gender=Fem|Number=Plur	12	nsubj	_	_
8	de	_	ADP	IN	_	9	case	_	_
9	lluvia	_	NOUN	NN	Gender=Fem|Number=Sing	7	nmod	_	_
10	ácida	_	ADJ	JJ	Gender=Fem|Number=Sing	9	amod	_	_
11	pueden	poder	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux	_	_
12	tener	_	VERB	VB	Aspect=Imp|VerbForm=Fin	0	root	_	_
13	aspectos	_	NOUN	NN	Gender=Masc|Number=Plur	12	obj	_	_
14	positivos	_	ADJ	JJ	Gender=Masc|Number=Plur	13	amod	_	SpaceAfter=No
15	.	_	PUNCT	.	_	12	punct	_	_

~~~


