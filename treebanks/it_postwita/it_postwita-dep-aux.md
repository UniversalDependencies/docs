---
layout: base
title:  'Statistics of aux in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="it_postwita-dep-aux-pass.html">aux:pass</a></tt>.

1103 nodes (2%) are attached to their parents as `aux`.

1100 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21668177697189.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (1052; 95% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (20; 2% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (15; 1% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (6; 1% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	@njallsfirstlove	@njallsfirstlove	SYM	SYM	_	8	vocative:mention	_	_
2	si	sì	INTJ	I	_	8	discourse	_	_
3	cazzo	cazzo	INTJ	I	_	8	discourse	_	_
4	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	8	expl	_	SpaceAfter=No
5	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	dep	_	_
6	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
7	devo	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	fare	fare	VERB	V	VerbForm=Inf	0	root	_	_
9	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	13	expl	_	SpaceAfter=No
10	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	expl	_	_
11	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	obj	_	_
12	posso	potere	AUX	VM	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	fare	fare	VERB	V	VerbForm=Inf	8	conj	_	SpaceAfter=No
14	!	!	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 aux	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	magia	magia	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
3	odierna	odierno	ADJ	A	Gender=Fem|Number=Sing	2	amod	_	_
4	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux	_	_
5	stata	essere	AUX	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	2	cop	_	_
6	non	non	ADV	BN	PronType=Neg	7	advmod	_	_
7	prendere	prendere	VERB	V	VerbForm=Inf	2	csubj	_	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	macchina	macchina	NOUN	S	Gender=Fem|Number=Sing	7	obj	_	_
10	...	...	PUNCT	FS	_	2	punct	_	_
11	ottimo	ottimo	ADJ	A	Gender=Masc|Number=Sing	2	discourse	_	_
12	!!!	!!!	PUNCT	FS	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	Comunque	comunque	SCONJ	CS	_	6	mark	_	_
2	ieri	ieri	ADV	B	_	6	advmod	_	_
3	sera	sera	NOUN	S	Gender=Fem|Number=Sing	2	obl	_	_
4	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	stato	essere	AUX	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	cop	_	_
6	bello	bello	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
7	aw	aw	X	X	_	6	discourse	_	_
8	Gio	Gio	PROPN	SP	_	10	nsubj	_	_
9	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	10	cop	_	_
10	stracucciolino	stracucciolo	ADJ	A	Gender=Masc|Number=Sing	6	conj	_	_

~~~


