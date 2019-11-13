---
layout: base
title:  'Statistics of appos in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `appos`

This relation is universal.

91 nodes (0%) are attached to their parents as `appos`.

91 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.48351648351648.

The following 17 pairs of parts of speech are connected with `appos`: <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (29; 32% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (15; 16% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (10; 11% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (9; 10% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (7; 8% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (3; 3% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-X.html">X</a></tt> (3; 3% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 appos	color:blue
1	Governo	governo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
2	Monti	Monti	PROPN	SP	_	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	5	punct	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	nome	nome	NOUN	S	Gender=Masc|Number=Sing	1	appos	_	_
6	giusto	giusto	ADJ	A	Gender=Masc|Number=Sing	5	amod	_	_
7	per	per	ADP	E	_	9	case	_	_
8	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	paese	paese	NOUN	S	Gender=Masc|Number=Sing	5	nmod	_	_
10	che	che	PRON	PR	PronType=Rel	11	nsubj	_	_
11	ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	acl:relcl	_	_
12	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	destino	destino	NOUN	S	Gender=Masc|Number=Sing	11	obj	_	_
14	in	in	ADP	E	_	15	case	_	_
15	salita	salita	NOUN	S	Gender=Fem|Number=Sing	13	nmod	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 appos	color:blue
1	@user	@user	SYM	SYM	_	2	vocative:mention	_	_
2	Mario	mario	PROPN	SP	_	0	root	_	_
3	Monti	Monti	PROPN	SP	_	2	flat:name	_	_
4	super	super	X	SW	_	2	appos	_	_
5	partes	partes	X	SW	_	4	flat:foreign	_	_
6	=	=	PUNCT	FF	_	7	punct	_	_
7	martirio	martirio	NOUN	S	Gender=Masc|Number=Sing	2	appos	_	_
8	o	o	CCONJ	CC	_	10	cc	_	_
9	superman	superman	PROPN	SP	_	10	nsubj	_	_
10	pesta	pestare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	conj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos	color:blue
1	Governo	governo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
2	#Monti	#Monti	SYM	SYM	_	1	nmod	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	1	punct	_	_
4	Passera	Passera	PROPN	SP	_	1	appos	_	_
5	a	a	ADP	E	_	7	case	_	_
6	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	sviluppo	sviluppo	NOUN	S	Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	1	punct	_	_
9	Dite	dire	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
10	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	9	iobj	_	_
11	cosa	cosa	PRON	PQ	PronType=Int	13	nsubj	_	_
12	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	cambiato	cambiare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	ccomp	_	_
14	da	da	ADP	E	_	15	case	_	_
15	Forza	Forza	PROPN	SP	_	13	obl	_	_
16	Gnocca	Gnocca	PROPN	SP	_	15	flat:name	_	SpaceAfter=No
17	.	.	PUNCT	FS	_	9	punct	_	_

~~~


