---
layout: base
title:  'Statistics of ccomp in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `ccomp`

This relation is universal.

149 nodes (1%) are attached to their parents as `ccomp`.

148 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.74496644295302.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (120; 81% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (14; 9% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (12; 8% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Eso	_	DET	DT	Gender=Masc|Number=Sing|PronType=Dem	2	nsubj	_	_
2	es	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	lo	él	PRON	DT	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	4	det	_	_
4	que	_	PRON	REL	Gender=Masc|Number=Sing|PronType=Int,Rel	6	obj	_	_
5	no	_	ADV	RB	Polarity=Neg	6	advmod	_	_
6	necesitamos	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
7	en	_	ADP	IN	_	9	case	_	_
8	nuestro	_	PRON	DTP$	Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	9	det	_	_
9	país	_	NOUN	NN	Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
10	,	_	PUNCT	,	_	11	punct	_	_
11	amigos	_	NOUN	NN	Gender=Masc|Number=Plur	2	vocative	_	SpaceAfter=No
12	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 ccomp	color:blue
1	El	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	año	_	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj	_	_
3	pasado	_	ADJ	JJ	Gender=Masc|Number=Sing	2	amod	_	_
4	fue	ser	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
5	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	año	_	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
7	increíble	_	ADJ	JJ	Gender=Masc|Number=Sing	6	amod	_	_
8	y	_	CCONJ	CC	_	9	cc	_	_
9	espero	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_
10	que	_	SCONJ	IN	_	13	mark	_	_
11	seamos	_	AUX	VBC	Aspect=Imp|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	_
12	todavía	_	ADV	RB	_	13	advmod	_	_
13	mejores	_	ADJ	JJR	Degree=Cmp|Number=Plur	9	ccomp	_	_
14	en	_	ADP	IN	_	15	case	_	_
15	2017	_	NUM	CD	Gender=Masc|NumType=Card	13	obl	_	SpaceAfter=No
16	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 ccomp	color:blue
1	No	_	ADV	RB	Polarity=Neg	2	advmod	_	_
2	digo	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	a	_	ADP	IN	_	5	case	_	_
4	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	ligera	_	NOUN	NN	Gender=Fem|Number=Sing	2	obl	_	_
6	que	_	SCONJ	IN	_	9	mark	_	_
7	es	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
8	una	uno	DET	DT	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	bestia	_	NOUN	NN	Gender=Fem|Number=Sing	2	ccomp	_	SpaceAfter=No
10	.	_	PUNCT	.	_	2	punct	_	_

~~~


