---
layout: base
title:  'Statistics of expl in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `expl`

This relation is universal.
There are 2 language-specific subtypes of `expl`: <tt><a href="it_postwita-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="it_postwita-dep-expl-pass.html">expl:pass</a></tt>.

564 nodes (1%) are attached to their parents as `expl`.

476 instances of `expl` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25354609929078.

The following 5 pairs of parts of speech are connected with `expl`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (557; 99% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 expl	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 expl	color:blue
1	RT	RT	X	X	_	2	dep	_	_
2	@RealEmisKilla	@RealEmisKilla	SYM	SYM	_	8	vocative:mention	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	Va	Va	INTJ	I	_	8	discourse	_	_
5	boh	boh	INTJ	I	_	4	discourse	_	_
6	me	me	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	8	expl	_	_
7	ne	ne	PRON	PC	Clitic=Yes|PronType=Prs	8	expl	_	_
8	vó	vó	X	SW	_	0	root	_	_
9	in	in	ADP	E	_	10	case	_	_
10	palestra	palestra	NOUN	S	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
11	,	,	PUNCT	FF	_	14	punct	_	_
12	a	a	ADP	E	_	14	case	_	_
13	più	più	ADV	B	_	14	advmod	_	_
14	tardi	tardi	ADV	B	_	8	discourse	_	SpaceAfter=No
15	!	!	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 expl	color:blue
1	@notapolitica	@notapolitica	SYM	SYM	_	12	vocative:mention	_	SpaceAfter=No
2	:	:	PUNCT	FC	_	1	punct	_	_
3	Stucchi	Stucchi	PROPN	SP	_	12	parataxis	_	SpaceAfter=No
4	:	:	PUNCT	FC	_	3	punct	_	_
5	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	governo	governo	NOUN	S	Gender=Masc|Number=Sing	12	nsubj	_	_
7	Monti	Monti	PROPN	SP	_	6	nmod	_	_
8	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
9	già	già	ADV	B	_	12	advmod	_	_
10	a	a	ADP	E	_	12	case	_	_
11	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	frutta	frutta	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
13	http://t.co/bQn5WEmh	http://t.co/bQn5WEmh	SYM	X	_	12	dep	_	_
14	Le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	15	det	_	_
15	parole	parola	NOUN	S	Gender=Fem|Number=Plur	12	parataxis	_	_
16	di	di	ADP	E	_	17	case	_	_
17	chi	chi	PRON	PR	PronType=Rel	15	nmod	_	_
18	a	a	ADP	E	_	20	case	_	_
19	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
20	frutta	frutta	NOUN	S	Gender=Fem|Number=Sing	17	acl:relcl	_	_
21	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	20	expl	_	SpaceAfter=No
22	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux	_	_
23	stato	essere	AUX	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	20	cop	_	_
24	x	per	ADP	E	_	26	case	_	_
25	3	3	NUM	N	NumType=Card	26	nummod	_	_
26	anni	anno	NOUN	S	Gender=Masc|Number=Plur	20	obl	_	_

~~~


