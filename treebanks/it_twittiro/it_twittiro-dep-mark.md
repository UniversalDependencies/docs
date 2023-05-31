---
layout: base
title:  'Statistics of mark in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `mark`

This relation is universal.

685 nodes (2%) are attached to their parents as `mark`.

684 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.49051094890511.

The following 17 pairs of parts of speech are connected with `mark`: <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt> (285; 42% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-SCONJ.html">SCONJ</a></tt> (280; 41% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-SCONJ.html">SCONJ</a></tt> (46; 7% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-SCONJ.html">SCONJ</a></tt> (24; 4% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt> (14; 2% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-SCONJ.html">SCONJ</a></tt> (7; 1% instances), <tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt>-<tt><a href="it_twittiro-pos-SCONJ.html">SCONJ</a></tt> (6; 1% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-SCONJ.html">SCONJ</a></tt> (5; 1% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-X.html">X</a></tt>-<tt><a href="it_twittiro-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-X.html">X</a></tt>-<tt><a href="it_twittiro-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark	color:blue
1	@user	@user	SYM	SYM	_	5	vocative:mention	_	_
2	se	se	SCONJ	CS	_	3	mark	_	_
3	continui	continuare	VERB	V	Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	advcl	_	_
4	sarò	essere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	5	aux:pass	_	_
5	costretto	costringere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	a	a	ADP	E	_	7	mark	_	_
7	dar	dare	VERB	V	VerbForm=Inf	5	xcomp	_	_
8	ti	ti	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	7	iobj	_	_
9	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	oscar	oscar	PROPN	SP	_	7	obj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 mark	color:blue
1	se	se	SCONJ	CS	_	5	mark	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	governo	governo	NOUN	S	Gender=Masc|Number=Sing	5	nsubj	_	_
4	Monti	Monti	PROPN	SP	_	3	nmod	_	_
5	fallisce	fallire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	advcl	_	_
6	verrà	venire	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	7	aux:pass	_	_
7	rimpiazzato	rimpiazzare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	da	da	ADP	E	_	10	case	_	_
9	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	metronomo	metronomo	NOUN	S	Gender=Masc|Number=Sing	7	obl:agent	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 mark	color:blue
1	dice	dire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	che	che	SCONJ	CS	_	9	mark	_	_
3	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	4	det	_	SpaceAfter=No
4	anagramma	anagramma	NOUN	S	Gender=Masc|Number=Sing	9	nsubj	_	_
5	di	di	ADP	E	_	6	case	_	_
6	mario	mario	PROPN	SP	_	4	nmod	_	_
7	monti	monti	PROPN	SP	_	6	flat:name	_	_
8	=	=	PUNCT	FF	_	9	punct	_	_
9	matrimonio	matrimonio	NOUN	S	Gender=Masc|Number=Sing	1	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	1	punct	_	_
11	ecco	ecco	ADV	B	_	1	parataxis	_	_
12	perché	perché	SCONJ	CS	_	14	mark	_	_
13	sono	essere	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	14	cop	_	_
14	allergica	allergico	ADJ	A	Gender=Fem|Number=Sing	11	advcl	_	_
15	a	a	ADP	E	_	17	case	_	_
16	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	#manovra	#manovra	SYM	SYM	_	14	obl	_	_

~~~


