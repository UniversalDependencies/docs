---
layout: base
title:  'Statistics of aux in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="it_postwita-dep-aux-pass.html">aux:pass</a></tt>.

2087 nodes (2%) are attached to their parents as `aux`.

2082 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21562050790609.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (1986; 95% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (40; 2% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (29; 1% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (12; 1% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="it_postwita-pos-ADV.html">ADV</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="it_postwita-pos-DET.html">DET</a></tt>-<tt><a href="it_postwita-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	@user	@user	SYM	SYM	_	8	vocative:mention	_	_
2	si	sì	INTJ	I	_	8	discourse	_	CorrectForm=sì
3	cazzo	cazzo	INTJ	I	_	8	discourse	_	_
4	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	8	expl	_	SpaceAfter=No
5	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	dep	_	_
6	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
7	devo	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	fare	fare	VERB	V	VerbForm=Inf	0	root	_	_
9	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	13	expl	_	SpaceAfter=No
10	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	dep	_	_
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
1	Governo	governo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
2	Monti	Monti	PROPN	SP	_	1	nmod	_	SpaceAfter=No
3	.	.	PUNCT	FS	_	1	punct	_	_
4	Dobbiamo	dovere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	essere	essere	AUX	V	VerbForm=Inf	6	cop	_	_
6	contenti	contento	ADJ	A	Gender=Masc|Number=Plur	1	parataxis	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	6	punct	_	_
8	http://t.co/pvHm744O	http://t.co/pvHm744O	SYM	X	_	1	dep	_	_

~~~


