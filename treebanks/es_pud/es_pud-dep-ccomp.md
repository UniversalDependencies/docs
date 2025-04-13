---
layout: base
title:  'Statistics of ccomp in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `ccomp`

This relation is universal.

148 nodes (1%) are attached to their parents as `ccomp`.

146 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.60135135135135.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (123; 83% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (11; 7% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (11; 7% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Eso	eso	DET	DT	Gender=Masc|Number=Sing|PronType=Dem	2	nsubj	_	_
2	es	ser	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	lo	él	PRON	DT	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	4	det	_	_
4	que	que	PRON	REL	Gender=Masc|Number=Sing|PronType=Rel	6	obj	_	_
5	no	no	ADV	RB	Polarity=Neg	6	advmod	_	_
6	necesitamos	necesitar	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
7	en	en	ADP	IN	_	9	case	_	_
8	nuestro	nuestro	DET	DTP$	Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	9	det	_	_
9	país	país	NOUN	NN	Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
10	,	,	PUNCT	,	PunctType=Comm	11	punct	_	_
11	amigos	amigo	NOUN	NN	Gender=Masc|Number=Plur	2	vocative	_	SpaceAfter=No
12	.	.	PUNCT	.	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 ccomp	color:blue
1	El	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	año	año	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj	_	_
3	pasado	pasado	ADJ	JJ	Gender=Masc|Number=Sing	2	amod	_	_
4	fue	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	_
5	un	uno	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	año	año	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
7	increíble	increíble	ADJ	JJ	Gender=Masc|Number=Sing	6	amod	_	_
8	y	y	CCONJ	CC	_	9	cc	_	_
9	espero	esperar	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	conj	_	_
10	que	que	SCONJ	IN	_	13	mark	_	_
11	seamos	ser	AUX	VBC	Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	13	cop	_	_
12	todavía	todavía	ADV	RB	_	13	advmod	_	_
13	mejores	mejor	ADJ	JJR	Degree=Cmp|Number=Plur	9	ccomp	_	_
14	en	en	ADP	IN	_	15	case	_	_
15	2017	2017	NUM	CD	Gender=Masc|NumForm=Digit|NumType=Card	13	obl	_	SpaceAfter=No
16	.	.	PUNCT	.	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 ccomp	color:blue
1	No	no	ADV	RB	Polarity=Neg	2	advmod	_	_
2	digo	decir	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	a	a	ADP	IN	_	5	case	_	_
4	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	ligera	ligera	NOUN	NN	Gender=Fem|Number=Sing	2	obl	_	_
6	que	que	SCONJ	IN	_	9	mark	_	_
7	es	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	una	uno	DET	DT	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	bestia	bestia	NOUN	NN	Gender=Fem|Number=Sing	2	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	.	PunctType=Peri	2	punct	_	_

~~~


