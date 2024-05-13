---
layout: base
title:  'Statistics of ccomp in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `ccomp`

This relation is universal.

347 nodes (1%) are attached to their parents as `ccomp`.

345 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.82708933717579.

The following 10 pairs of parts of speech are connected with `ccomp`: <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (247; 71% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt> (37; 11% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (27; 8% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (18; 5% instances), <tt><a href="it_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="it_partut-pos-AUX.html">AUX</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Spero	sperare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	che	che	SCONJ	CS	_	4	mark	_	_
3	sarà	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	aux	_	_
4	esaminata	esaminare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	1	ccomp	_	_
5	con	con	ADP	E	_	7	case	_	_
6	uno	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	spirito	spirito	NOUN	S	Gender=Masc|Number=Sing	4	obl	_	_
8	positivo	positivo	ADJ	A	Gender=Masc|Number=Sing	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 ccomp	color:blue
1	Sappiamo	sapere	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	1	nsubj	_	_
3	che	che	SCONJ	CS	_	8	mark	_	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	terra	terra	NOUN	S	Gender=Fem|Number=Sing	8	nsubj	_	_
6	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	in	in	ADP	E	_	8	case	_	_
8	pericolo	pericolo	NOUN	S	Gender=Masc|Number=Sing	1	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp	color:blue
1	Ritengo	ritenere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	sia	essere	AUX	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	importante	importante	ADJ	A	Number=Sing	1	ccomp	_	_
4	che	che	SCONJ	CS	_	8	mark	_	_
5	questa	questo	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	6	det	_	_
6	direttiva	direttiva	NOUN	S	Gender=Fem|Number=Sing	8	nsubj:pass	_	_
7	sia	essere	AUX	VA	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	_	_
8	approvata	approvare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	ccomp	_	_
9	adesso	adesso	ADV	B	_	8	advmod	_	SpaceAfter=No
10	;	;	PUNCT	FC	_	1	punct	_	_

~~~


