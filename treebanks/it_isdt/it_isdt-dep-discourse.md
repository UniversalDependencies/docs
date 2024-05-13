---
layout: base
title:  'Statistics of discourse in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `discourse`

This relation is universal.

62 nodes (0%) are attached to their parents as `discourse`.

49 instances of `discourse` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.90322580645161.

The following 11 pairs of parts of speech are connected with `discourse`: <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-INTJ.html">INTJ</a></tt> (37; 60% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-INTJ.html">INTJ</a></tt> (7; 11% instances), <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt>-<tt><a href="it_isdt-pos-INTJ.html">INTJ</a></tt> (4; 6% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-INTJ.html">INTJ</a></tt> (3; 5% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-INTJ.html">INTJ</a></tt> (3; 5% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-INTJ.html">INTJ</a></tt> (2; 3% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="it_isdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_isdt-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 discourse	color:blue
1	"	"	PUNCT	FB	_	7	punct	7:punct	SpaceAfter=No
2	Grazie	grazie	INTJ	I	_	7	discourse	7:discourse	_
3	Italia	Italia	PROPN	SP	_	2	vocative	2:vocative	SpaceAfter=No
4	,	,	PUNCT	FF	_	2	punct	2:punct	_
5	ti	ti	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	7	iobj	7:iobj	_
6	ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	aux	7:aux	_
7	dato	dare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
8	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	9	det	9:det	SpaceAfter=No
9	oro	oro	NOUN	S	Gender=Masc|Number=Sing	7	obj	7:obj	SpaceAfter=No
10	"	"	PUNCT	FB	_	7	punct	7:punct	SpaceAfter=No
11	.	.	PUNCT	FS	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 discourse	color:blue
1	Oddio	oddio	INTJ	I	_	9	discourse	9:discourse	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	1:punct	_
3	non	non	ADV	BN	PronType=Neg	9	advmod	9:advmod	_
4	che	che	SCONJ	CS	_	5	mark	5:mark	_
5	Berlusconi	Berlusconi	PROPN	SP	_	9	csubj	9:csubj	_
6	sia	essere	AUX	VA	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	9:cop	_
7	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	9:det	_
8	gran	grande	ADJ	A	Number=Sing	9	amod	9:amod	_
9	femminista	femminista	NOUN	S	Number=Sing	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	FS	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 discourse	color:blue
1	"	"	PUNCT	FB	_	7	punct	7:punct	SpaceAfter=No
2	Ma	ma	CCONJ	CC	_	7	cc	7:cc	_
3	no	no	INTJ	I	Polarity=Neg	7	discourse	7:discourse	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	3:punct	_
5	non	non	ADV	BN	PronType=Neg	7	advmod	7:advmod	_
6	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
7	così	così	ADV	B	_	0	root	0:root	_
8	-	-	PUNCT	FB	_	9	punct	9:punct	_
9	replica	replicare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	parataxis	7:parataxis	_
10	Ante	Ante	PROPN	SP	_	9	nsubj	9:nsubj	_
11	-	-	PUNCT	FB	_	9	punct	9:punct	SpaceAfter=No
12	.	.	PUNCT	FS	_	7	punct	7:punct	_

~~~


