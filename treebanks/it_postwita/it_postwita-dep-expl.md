---
layout: base
title:  'Statistics of expl in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `expl`

This relation is universal.
There are 2 language-specific subtypes of `expl`: <tt><a href="it_postwita-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="it_postwita-dep-expl-pass.html">expl:pass</a></tt>.

1058 nodes (1%) are attached to their parents as `expl`.

891 instances of `expl` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25519848771267.

The following 4 pairs of parts of speech are connected with `expl`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1049; 99% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 expl	color:blue
1	@user	@user	SYM	SYM	_	8	vocative:mention	_	_
2	si	sì	INTJ	I	_	8	discourse	_	_
3	cazzo	cazzo	INTJ	I	_	8	discourse	_	_
4	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	8	expl	_	SpaceAfter=No
5	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	goeswith	_	_
6	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
7	devo	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	fare	fare	VERB	V	VerbForm=Inf	0	root	_	_
9	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	13	expl	_	SpaceAfter=No
10	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	goeswith	_	_
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
1	RT	retweet	NOUN	S	_	2	dep	_	_
2	@user	@user	SYM	SYM	_	8	vocative:mention	_	SpaceAfter=No
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 expl	color:blue
1	@user	@user	SYM	SYM	_	3	vocative:mention	_	_
2	non	non	ADV	BN	PronType=Neg	3	advmod	_	_
3	so	sapere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	cosa	cosa	PRON	PQ	PronType=Int	5	obj	_	_
5	sperare	sperare	VERB	V	VerbForm=Inf	3	ccomp	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	5	punct	_	_
7	dove	dove	ADV	B	_	9	advmod	_	_
8	ti	ti	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	9	expl	_	_
9	giri	girare	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	15	advcl	_	_
10	ti	ti	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	9	obj	_	_
11	giri	girare	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	9	advcl	_	_
12	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	15	expl	_	SpaceAfter=No
13	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
14	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	schifo	schifo	NOUN	S	Gender=Masc|Number=Sing	5	parataxis	_	SpaceAfter=No
16	,	,	PUNCT	FF	_	19	punct	_	_
17	sia	sia	CCONJ	CC	_	19	cc	_	_
18	in	in	ADP	E	_	19	case	_	_
19	caso	caso	NOUN	S	Gender=Masc|Number=Sing	15	advcl	_	_
20	di	di	ADP	E	_	21	case	_	_
21	elezioni	elezione	NOUN	S	Gender=Fem|Number=Plur	19	nmod	_	_
22	che	che	SCONJ	CS	_	25	mark	_	_
23	di	di	ADP	E	_	24	case	_	_
24	governo	governo	NOUN	S	Gender=Masc|Number=Sing	25	nmod	_	_
25	monti	monti	PROPN	SP	_	21	nmod	_	_

~~~


