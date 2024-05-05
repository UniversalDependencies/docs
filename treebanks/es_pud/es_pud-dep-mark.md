---
layout: base
title:  'Statistics of mark in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `mark`

This relation is universal.

293 nodes (1%) are attached to their parents as `mark`.

293 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.22184300341297.

The following 11 pairs of parts of speech are connected with `mark`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-SCONJ.html">SCONJ</a></tt> (222; 76% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-SCONJ.html">SCONJ</a></tt> (22; 8% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-SCONJ.html">SCONJ</a></tt> (16; 5% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADP.html">ADP</a></tt> (13; 4% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (9; 3% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="es_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark	color:blue
1	Eso	eso	DET	DT	Gender=Masc|Number=Sing|PronType=Dem	3	nsubj	_	_
2	es	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	lo	él	PRON	DT	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	0	root	_	_
4	que	que	PRON	REL	Gender=Masc|Number=Sing|PronType=Rel	5	nsubj	_	_
5	hace	hacer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
6	que	que	SCONJ	IN	_	7	mark	_	_
7	sigamos	seguir	VERB	VBC	Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
8	volviendo	volver	VERB	VBG	VerbForm=Ger	7	xcomp	_	_
9	a	a	ADP	IN	_	11	case	_	_
10	por	por	ADP	IN	_	11	case	_	_
11	más	más	ADV	RBR	Degree=Cmp	8	advmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 mark	color:blue
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
16	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 mark	color:blue
1	No	no	ADV	RB	Polarity=Neg	2	advmod	_	_
2	digo	decir	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	a	a	ADP	IN	_	5	case	_	_
4	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	ligera	ligera	NOUN	NN	Gender=Fem|Number=Sing	2	obl	_	_
6	que	que	SCONJ	IN	_	9	mark	_	_
7	es	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	una	uno	DET	DT	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	bestia	bestia	NOUN	NN	Gender=Fem|Number=Sing	2	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


