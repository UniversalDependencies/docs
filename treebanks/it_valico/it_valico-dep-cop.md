---
layout: base
title:  'Statistics of cop in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `cop`

This relation is universal.

134 nodes (2%) are attached to their parents as `cop`.

132 instances of `cop` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8134328358209.

The following 7 pairs of parts of speech are connected with `cop`: <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-AUX.html">AUX</a></tt> (68; 51% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-AUX.html">AUX</a></tt> (56; 42% instances), <tt><a href="it_valico-pos-PRON.html">PRON</a></tt>-<tt><a href="it_valico-pos-AUX.html">AUX</a></tt> (4; 3% instances), <tt><a href="it_valico-pos-ADV.html">ADV</a></tt>-<tt><a href="it_valico-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="it_valico-pos-NUM.html">NUM</a></tt>-<tt><a href="it_valico-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_valico-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	Ero	essere	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	2	cop	_	_
2	stanca	stanco	ADJ	A	Gender=Fem|Number=Sing	0	root	_	_
3	e	e	CCONJ	CC	_	4	cc	_	_
4	pensavo	pensare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	2	conj	_	_
5	a	a	ADP	E	_	6	case	_	_
6	niente	niente	PRON	PI	PronType=Ind	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cop	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	mio	mio	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	4	det:poss	_	_
4	fidanzato	fidanzato	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	4	punct	_	_
6	Lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	amo	amare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	parataxis	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	7	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cop	color:blue
1	Crede	credere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	che	che	SCONJ	CS	_	6	mark	_	_
3	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	ragazza	ragazza	NOUN	S	Gender=Fem|Number=Sing	6	nsubj	_	_
5	fosse	essere	AUX	V	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
6	alegre	alegre	ADJ	A	Number=Sing	1	ccomp	_	_
7	ma	ma	CCONJ	CC	_	10	cc	_	_
8	non	non	ADV	BN	PronType=Neg	10	advmod	_	_
9	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	quello	quello	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	6	conj	_	_
11	che	che	PRON	PR	PronType=Rel	12	nsubj	_	_
12	pasò	pasare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	acl:relcl	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	1	punct	_	SpacesAfter=\n

~~~


