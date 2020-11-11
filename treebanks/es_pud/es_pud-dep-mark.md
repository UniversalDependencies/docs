---
layout: base
title:  'Statistics of mark in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `mark`

This relation is universal.

275 nodes (1%) are attached to their parents as `mark`.

275 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.54545454545455.

The following 10 pairs of parts of speech are connected with `mark`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-SCONJ.html">SCONJ</a></tt> (211; 77% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-SCONJ.html">SCONJ</a></tt> (26; 9% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-SCONJ.html">SCONJ</a></tt> (20; 7% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (7; 3% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="es_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 mark	color:blue
1	Eso	_	DET	DT	Gender=Masc|Number=Sing|PronType=Dem	2	nsubj	_	_
2	es	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	lo	él	PRON	DT	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	4	det	_	_
4	que	_	PRON	REL	Gender=Masc|Number=Sing|PronType=Int,Rel	5	nsubj	_	_
5	hace	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
6	que	_	SCONJ	IN	_	8	mark	_	_
7	sigamos	_	AUX	VBC	Aspect=Imp|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
8	volviendo	_	VERB	VBG	Aspect=Imp|VerbForm=Fin	5	ccomp	_	_
9	a	_	ADP	IN	_	11	case	_	_
10	por	_	ADP	IN	_	9	fixed	_	_
11	más	_	ADV	RBR	Degree=Cmp	8	xcomp	_	SpaceAfter=No
12	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 mark	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 mark	color:blue
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


