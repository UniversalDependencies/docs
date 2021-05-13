---
layout: base
title:  'Statistics of nmod in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `nmod`

This relation is universal.

116 nodes (2%) are attached to their parents as `nmod`.

116 instances of `nmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.97413793103448.

The following 9 pairs of parts of speech are connected with `nmod`: <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (96; 83% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt> (11; 9% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="it_valico-pos-PRON.html">PRON</a></tt>-<tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-NUM.html">NUM</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-PRON.html">PRON</a></tt>-<tt><a href="it_valico-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 nmod	color:blue
1	Finse	Fingere	VERB	V	_	0	root	_	_
2	aveva	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	1	xcomp	_	_
3	paura	paura	NOUN	S	Gender=Fem|Number=Sing	2	obj	_	_
4	di	di	ADP	E	_	6	case	_	_
5	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	rapito	rapito	NOUN	S	Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nmod	color:blue
1	Luca	Luca	PROPN	SP	_	2	nsubj	_	_
2	insegnava	insegnare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	biologia	biologia	NOUN	S	Gender=Fem|Number=Sing	2	obj	_	_
5	a	a	ADP	E	_	7	case	_	_
6	l'	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	università	università	NOUN	S	Gender=Fem	2	obl	_	_
8	di	di	ADP	E	_	9	case	_	_
9	Bologna	Bologna	PROPN	SP	_	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod	color:blue
1	«	«	PUNCT	FB	_	3	punct	_	SpaceAfter=No
2	Non	non	ADV	BN	PronType=Neg	3	advmod	_	_
3	mette	mettere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	parataxis	_	_
4	suo	suo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	5	det:poss	_	_
5	naso	naso	NOUN	S	Gender=Masc|Number=Sing	3	obj	_	_
6	in	in	ADP	E	_	8	case	_	_
7	gli	gli	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	affari	affare	NOUN	S	Gender=Masc|Number=Plur	3	obl	_	_
9	d'	di	ADP	E	_	10	case	_	SpaceAfter=No
10	altre	altro	PRON	PI	Gender=Fem|Number=Plur|PronType=Ind	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	3	punct	_	SpaceAfter=No
12	»	»	PUNCT	FB	_	3	punct	_	_
13	l'	lo	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	SpaceAfter=No
14	uomo	uomo	NOUN	S	Gender=Masc|Number=Sing	15	nsubj	_	_
15	ribatte	ribattere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	15	punct	_	SpacesAfter=\n

~~~


