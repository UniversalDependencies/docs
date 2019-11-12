---
layout: base
title:  'Statistics of compound in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `compound`

This relation is universal.

63 nodes (0%) are attached to their parents as `compound`.

63 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.11111111111111.

The following 8 pairs of parts of speech are connected with `compound`: <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (51; 81% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (4; 6% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (3; 5% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (1; 2% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 compound	color:blue
1	Nuovo	nuovo	ADJ	A	Gender=Masc|Number=Sing	2	amod	_	_
2	governo	governo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
3	monti	monti	PROPN	SP	_	2	nmod	_	SpaceAfter=No
4	:	:	PUNCT	FC	_	2	punct	_	_
5	da	da	ADP	E	_	7	case	_	_
6	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	bunga	bunga	PROPN	SP	_	2	parataxis	_	_
8	bunga	bunga	PROPN	SP	_	7	flat:name	_	_
9	a	a	ADP	E	_	11	case	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	banca	banca	NOUN	S	Gender=Fem|Number=Sing	7	nmod	_	_
12	banca	banca	NOUN	S	Gender=Fem|Number=Sing	11	compound	_	_
13	...	...	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	zero	zero	NUM	N	NumType=Card	2	nummod	_	_
2	notizie	notizia	NOUN	S	Gender=Fem|Number=Plur	0	root	_	_
3	decreto	decreto	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	_
4	#tfaordinario	#tfaordinario	SYM	SYM	_	3	compound	_	_
5	II	secondo	ADJ	NO	Number=Sing|NumType=Ord	6	amod	_	_
6	ciclo	ciclo	NOUN	S	Gender=Masc|Number=Sing	3	appos	_	_
7	zero	zero	NUM	N	NumType=Card	8	nummod	_	_
8	notizie	notizia	NOUN	S	Gender=Fem|Number=Plur	2	parataxis	_	_
9	prove	prova	NOUN	S	Gender=Fem|Number=Plur	8	nmod	_	_
10	scritte	scritto	ADJ	A	Gender=Fem|Number=Plur	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	8	punct	_	_
12	A	A	ADP	E	_	14	case	_	_
13	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	faccia	faccia	NOUN	S	Gender=Fem|Number=Sing	2	parataxis	_	_
15	de	de	ADP	E	_	16	case	_	_
16	#labuonascuola	#labuonascuola	SYM	SYM	_	14	nmod	_	_
17	.	.	PUNCT	FS	_	14	punct	_	_
18	#matteorenzi	#matteorenzi	SYM	SYM	_	21	vocative	_	_
19	cosa	cosa	PRON	PQ	PronType=Int	21	obj	_	_
20	stai	stare	AUX	VA	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	21	aux	_	_
21	aspettando	aspettare	VERB	V	VerbForm=Ger	2	parataxis	_	SpaceAfter=No
22	?	?	PUNCT	FS	_	21	punct	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound	color:blue
1	ALLARME	allarme	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
2	ITALIA	italia	PROPN	SP	_	1	compound	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	1	punct	_	_
4	tagli	taglio	NOUN	S	Gender=Masc|Number=Plur	1	parataxis	_	_
5	a	a	ADP	E	_	7	case	_	_
6	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
7	pensioni	pensione	NOUN	S	Gender=Fem|Number=Plur	4	nmod	_	_
8	e	e	CCONJ	CC	_	10	cc	_	_
9	nuove	nuovo	ADJ	A	Gender=Fem|Number=Plur	10	amod	_	_
10	tasse	tassa	NOUN	S	Gender=Fem|Number=Plur	4	conj	_	SpaceAfter=No
11	,	,	PUNCT	FF	_	12	punct	_	_
12	governo	governo	NOUN	S	Gender=Masc|Number=Sing	4	appos	_	_
13	Monti	Monti	PROPN	SP	_	12	nmod	_	SpaceAfter=No
14	:	:	PUNCT	FC	_	15	punct	_	_
15	milioni	milione	NOUN	S	Gender=Masc|Number=Plur	12	parataxis	_	_
16	di	di	ADP	E	_	17	case	_	_
17	rotture	rottura	NOUN	S	Gender=Fem|Number=Plur	15	nmod	_	_
18	(	(	PUNCT	FB	_	20	punct	_	SpaceAfter=No
19	di	di	ADP	E	_	20	case	_	_
20	coglioni	coglione	NOUN	S	Gender=Masc|Number=Plur	17	nmod	_	SpaceAfter=No
21	)	)	PUNCT	FB	_	20	punct	_	_

~~~


