---
layout: base
title:  'Statistics of appos in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `appos`

This relation is universal.

320 nodes (1%) are attached to their parents as `appos`.

320 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.66875.

The following 15 pairs of parts of speech are connected with `appos`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (141; 44% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (71; 22% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NUM.html">NUM</a></tt> (43; 13% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (36; 11% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (13; 4% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="es_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="es_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-X.html">X</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-X.html">X</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 appos	color:blue
1	También	_	ADV	RB	_	3	advmod	_	_
2	me	_	PRON	SE	Case=Acc,Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs|Reflex=Yes	3	compound:prt	_	_
3	pregunto	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	si	_	SCONJ	IN	_	8	mark	_	_
5	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	Copa	_	NOUN	NN	Gender=Fem|Number=Sing	8	nsubj	_	Proper=True
7	Davis	_	PROPN	NNP	Number=Sing	6	appos	_	_
8	tuvo	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	ccomp	_	_
9	algo	_	NOUN	NN	Gender=Masc|Number=Sing	8	obj	_	_
10	que	_	PRON	REL	Gender=Masc|Number=Sing|PronType=Int,Rel	11	obj	_	_
11	ver	_	VERB	VB	Aspect=Imp|VerbForm=Fin|Voice=Act	9	acl:relcl	_	SpaceAfter=No
12	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 appos	color:blue
1	Son	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
2	las	el	DET	DT	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	3	det	_	_
3	elecciones	_	NOUN	NN	Gender=Fem|Number=Plur	0	root	_	SpaceAfter=No
4	,	_	PUNCT	,	_	5	punct	_	_
5	por	_	ADP	IN	_	3	discourse	_	_
6	supuesto	_	NOUN	NN	Gender=Masc|Number=Sing	5	fixed	_	SpaceAfter=No
7	,	_	PUNCT	,	_	10	punct	_	_
8	no	_	ADV	RB	Polarity=Neg	10	advmod	_	_
9	"	_	PUNCT	``	_	10	punct	_	SpaceAfter=No
10	Juego	_	NOUN	NN	Gender=Masc|Number=Sing	3	appos	_	Proper=True
11	de	_	ADP	IN	_	12	case	_	Proper=True
12	tronos	_	NOUN	NN	Gender=Masc|Number=Plur	10	nmod	_	SpaceAfter=No|Proper=True
13	"	_	PUNCT	''	_	10	punct	_	SpaceAfter=No
14	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	Día	_	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
2	tres	_	NUM	CD	Gender=Masc|NumType=Card	1	appos	_	SpaceAfter=No
3	,	_	PUNCT	,	_	4	punct	_	_
4	estaba	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	_
5	de	_	ADP	IN	_	6	case	_	_
6	vuelta	_	NOUN	NN	Gender=Fem|Number=Sing	4	obl	_	_
7	en	_	ADP	IN	_	8	case	_	_
8	Emicro	_	PROPN	NNP	Number=Sing	4	obl	_	SpaceAfter=No
9	.	_	PUNCT	.	_	1	punct	_	_

~~~


