---
layout: base
title:  'Statistics of aux in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="it_valico-dep-aux-pass.html">aux:pass</a></tt>.

455 nodes (7%) are attached to their parents as `aux`.

455 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09010989010989.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-AUX.html">AUX</a></tt> (440; 97% instances), <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-AUX.html">AUX</a></tt> (8; 2% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-AUX.html">AUX</a></tt> (7; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	A	a	ADP	E	_	3	case	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	contrario	contrario	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	LOC=adv|SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	donna	donna	NOUN	S	Gender=Fem|Number=Sing	8	nsubj	_	_
7	stava	stare	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	aux	_	_
8	piangendo	piangere	VERB	V	VerbForm=Ger	0	root	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	8	punct	_	_
10	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	testa	testa	NOUN	S	Gender=Fem|Number=Sing	8	parataxis	_	_
12	in	in	ADP	E	_	14	case	_	_
13	le	le	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	14	det	_	_
14	mani	mano	NOUN	S	Gender=Fem|Number=Plur	11	nmod	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	8	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux	color:blue
1	Sono	essere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	stato	essere	AUX	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	cop	_	_
3	coraggioso	coraggioso	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
4	e	e	CCONJ	CC	_	6	cc	_	_
5	ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	battuto	battere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	conj	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	ragazzo	ragazzo	NOUN	S	Gender=Masc|Number=Sing	6	obj	_	_
9	muscoloso	muscoloso	ADJ	A	Gender=Masc|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux	color:blue
1	Sono	essere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	stati	essere	AUX	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	3	cop	_	_
3	coppia	coppia	NOUN	S	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
4	.	.	PUNCT	FS	_	3	punct	_	SpacesAfter=\n

~~~


