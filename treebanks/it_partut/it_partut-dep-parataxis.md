---
layout: base
title:  'Statistics of parataxis in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `parataxis`

This relation is universal.

18 nodes (0%) are attached to their parents as `parataxis`.

9 instances of `parataxis` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.

The following 5 pairs of parts of speech are connected with `parataxis`: <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (13; 72% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (2; 11% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="it_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 6 parataxis	color:blue
1	Dusty	Dusty	PROPN	SP	_	12	nsubj	_	_
2	e	e	CCONJ	CC	_	3	cc	_	_
3	io	io	PRON	PE	Number=Sing|Person=1|PronType=Prs	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	ci	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	6	iobj	_	_
6	piace	piacere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	parataxis	_	_
7	dir	dire	VERB	V	VerbForm=Inf	6	csubj	_	_
8	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	,	,	PUNCT	FF	_	6	punct	_	_
10	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	domenica	domenica	NOUN	S	Gender=Fem|Number=Sing	12	obl	_	_
12	andiamo	andare	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
13	in	in	ADP	E	_	14	case	_	_
14	chiesa	chiesa	NOUN	S	Gender=Fem|Number=Sing	12	obl	_	_
15	qui	qui	ADV	B	_	12	advmod	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 parataxis	color:blue
1	"	"	PUNCT	FB	_	8	punct	_	SpaceAfter=No
2	In	in	ADP	E	_	5	case	_	_
3	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
4	primo	primo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	5	amod	_	_
5	momento	momento	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	_
6	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
7	molto	molto	ADV	B	_	8	advmod	_	_
8	occupato	occupato	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
9	"	"	PUNCT	FB	_	8	punct	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	8	punct	_	_
11	spiega	spiegare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	parataxis	_	_
12	Saintsbury	Saintsbury	PROPN	SP	_	11	nsubj	_	SpaceAfter=No
13	,	,	PUNCT	FF	_	11	punct	_	_
14	"	"	PUNCT	FB	_	20	punct	_	SpaceAfter=No
15	successivamente	successivamente	ADV	B	_	20	advmod	_	_
16	non	non	ADV	BN	PronType=Neg	20	advmod	_	_
17	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	20	expl	_	_
18	sarebbe	essere	AUX	VA	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux	_	_
19	più	più	ADV	B	_	20	advmod	_	_
20	sentito	sentire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	8	conj	_	_
21	a	a	ADP	E	_	22	case	_	_
22	casa	casa	NOUN	S	Gender=Fem|Number=Sing	20	obl	_	_
23	lì	lì	ADV	B	_	20	advmod	_	_
24	...	.	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 parataxis	color:blue
1	Voglio	volere	AUX	VM	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	presentar	presentare	VERB	V	VerbForm=Inf	0	root	_	_
3	vi	vi	PRON	PC	Clitic=Yes|Number=Plur|Person=2|PronType=Prs	2	iobj	_	_
4	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	set	set	NOUN	S	Gender=Masc	2	obj	_	_
6	di	di	ADP	E	_	8	case	_	_
7	6	6	NUM	N	NumType=Card	8	nummod	_	_
8	soluzioni	soluzione	NOUN	S	Gender=Fem|Number=Plur	5	nmod	_	_
9	micologiche	micologico	ADJ	A	Gender=Fem|Number=Plur	8	amod	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	8	punct	_	_
11	che	che	PRON	PR	PronType=Rel	12	nsubj	_	_
12	usano	usare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	parataxis	_	_
13	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	14	det	_	_
14	funghi	fungo	NOUN	S	Gender=Masc|Number=Plur	12	obj	_	SpaceAfter=No
15	,	,	PUNCT	FF	_	12	punct	_	_
16	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	17	det	_	_
17	quali	quale	PRON	PR	Number=Plur|PronType=Rel	19	nsubj:pass	_	_
18	sono	essere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	aux:pass	_	_
19	basate	basare	VERB	V	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	8	acl:relcl	_	_
20	su	su	ADP	E	_	22	case	_	_
21	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	micelio	micelio	NOUN	S	Gender=Masc|Number=Sing	19	obl	_	SpaceAfter=No
23	.	.	PUNCT	FS	_	2	punct	_	_

~~~


