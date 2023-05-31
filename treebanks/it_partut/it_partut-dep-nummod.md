---
layout: base
title:  'Statistics of nummod in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `nummod`

This relation is universal.

492 nodes (1%) are attached to their parents as `nummod`.

303 instances of `nummod` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.39024390243902.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-NUM.html">NUM</a></tt> (346; 70% instances), <tt><a href="it_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="it_partut-pos-NUM.html">NUM</a></tt> (38; 8% instances), <tt><a href="it_partut-pos-SYM.html">SYM</a></tt>-<tt><a href="it_partut-pos-NUM.html">NUM</a></tt> (36; 7% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-NUM.html">NUM</a></tt> (30; 6% instances), <tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_partut-pos-NUM.html">NUM</a></tt> (23; 5% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-NUM.html">NUM</a></tt> (12; 2% instances), <tt><a href="it_partut-pos-X.html">X</a></tt>-<tt><a href="it_partut-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="it_partut-pos-NUM.html">NUM</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nummod	color:blue
1	1	1	NUM	N	NumType=Card	3	nummod	_	SpaceAfter=No
2	.	.	PUNCT	FF	_	1	punct	_	_
3	Definizioni	definizione	NOUN	S	Gender=Fem|Number=Plur	0	root	_	SpaceAfter=No
4	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nummod	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	mandato	mandato	NOUN	S	Gender=Masc|Number=Sing	7	nsubj	_	_
3	di	di	ADP	E	_	6	case	_	_
4	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
5	altro	altro	ADJ	A	Gender=Masc|Number=Sing	6	amod	_	_
6	giudice	giudice	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	_
7	scade	scadere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	6	6	NUM	N	NumType=Card	7	obl	_	_
10	ottobre	ottobre	NOUN	S	Gender=Masc|Number=Sing	9	flat	_	_
11	2012	2012	NUM	N	NumType=Card	9	nummod	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nummod	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	tasso	tasso	NOUN	S	Gender=Masc|Number=Sing	15	nsubj	_	_
3	ottenuto	ottenere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl	_	_
4	grazie	grazie	NOUN	S	_	7	case	_	_
5	a	a	ADP	E	_	4	fixed	_	_
6	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
7	inserzioni	inserzione	NOUN	S	Gender=Fem|Number=Plur	3	obl	_	_
8	di	di	ADP	E	_	9	case	_	_
9	Facebook	Facebook	PROPN	SP	_	7	nmod	_	_
10	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux	_	_
11	stato	essere	AUX	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	15	cop	_	_
12	di	di	ADP	E	_	15	case	_	_
13	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
14	25	25	NUM	N	NumType=Card	15	nummod	_	SpaceAfter=No
15	%	%	SYM	X	_	0	root	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	15	punct	_	_

~~~


