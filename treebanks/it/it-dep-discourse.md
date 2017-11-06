---
layout: base
title:  'Statistics of discourse in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `discourse`

This relation is universal.

60 nodes (0%) are attached to their parents as `discourse`.

48 instances of `discourse` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.13333333333333.

The following 10 pairs of parts of speech are connected with `discourse`: <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-INTJ.html">INTJ</a></tt> (37; 62% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-INTJ.html">INTJ</a></tt> (6; 10% instances), <tt><a href="it-pos-ADV.html">ADV</a></tt>-<tt><a href="it-pos-INTJ.html">INTJ</a></tt> (5; 8% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-INTJ.html">INTJ</a></tt> (3; 5% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-INTJ.html">INTJ</a></tt> (3; 5% instances), <tt><a href="it-pos-PRON.html">PRON</a></tt>-<tt><a href="it-pos-INTJ.html">INTJ</a></tt> (2; 3% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="it-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 discourse	color:blue
1	"	"	PUNCT	FB	_	7	punct	_	SpaceAfter=No
2	Grazie	grazie	INTJ	I	_	7	discourse	_	_
3	Italia	Italia	PROPN	SP	_	2	vocative	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	2	punct	_	_
5	ti	ti	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	7	iobj	_	_
6	ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	dato	dare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	oro	oro	NOUN	S	Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
10	"	"	PUNCT	FB	_	7	punct	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 discourse	color:blue
1	Oddio	oddio	INTJ	I	_	9	discourse	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	non	non	ADV	BN	PronType=Neg	9	advmod	_	_
4	che	che	SCONJ	CS	_	5	mark	_	_
5	Berlusconi	Berlusconi	PROPN	SP	_	9	csubj	_	_
6	sia	essere	AUX	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	gran	grande	ADJ	A	Number=Sing	9	amod	_	_
9	femminista	femminista	NOUN	S	Number=Sing	0	root	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 discourse	color:blue
1	"	"	PUNCT	FB	_	3	punct	_	SpaceAfter=No
2	Ma	ma	CCONJ	CC	_	7	cc	_	_
3	no	no	INTJ	I	Polarity=Neg	7	discourse	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	non	non	ADV	BN	PronType=Neg	7	advmod	_	_
6	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	così	così	ADV	B	_	0	root	_	_
8	-	-	PUNCT	FB	_	9	punct	_	_
9	replica	replicare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	parataxis	_	_
10	Ante	Ante	PROPN	SP	_	9	nsubj	_	_
11	-	-	PUNCT	FB	_	9	punct	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	7	punct	_	_

~~~


