---
layout: base
title:  'Statistics of fixed in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `fixed`

This relation is universal.

30 nodes (0%) are attached to their parents as `fixed`.

30 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26666666666667.

The following 8 pairs of parts of speech are connected with `fixed`: <tt><a href="it_valico-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="it_valico-pos-SCONJ.html">SCONJ</a></tt> (11; 37% instances), <tt><a href="it_valico-pos-ADP.html">ADP</a></tt>-<tt><a href="it_valico-pos-ADP.html">ADP</a></tt> (7; 23% instances), <tt><a href="it_valico-pos-ADV.html">ADV</a></tt>-<tt><a href="it_valico-pos-ADP.html">ADP</a></tt> (6; 20% instances), <tt><a href="it_valico-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_valico-pos-INTJ.html">INTJ</a></tt> (2; 7% instances), <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances), <tt><a href="it_valico-pos-ADP.html">ADP</a></tt>-<tt><a href="it_valico-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="it_valico-pos-ADP.html">ADP</a></tt>-<tt><a href="it_valico-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="it_valico-pos-ADP.html">ADP</a></tt>-<tt><a href="it_valico-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 fixed	color:blue
1	Per	per	ADP	E	_	2	case	_	_
2	questo	questo	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	5	obl	_	_
3	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	5	expl	_	_
4	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	lanciato	lanciare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	su	su	ADP	E	_	7	case	_	_
7	Luca	Luca	PROPN	SP	_	5	obl	_	_
8	così	così	SCONJ	CS	_	10	mark	_	_
9	che	che	SCONJ	CS	_	8	fixed	_	_
10	cadeva	cadere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	advcl	_	_
11	su	su	ADP	E	_	13	case	_	_
12	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	terra	terra	NOUN	S	Gender=Fem|Number=Sing	10	obl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	5	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	camminato	camminare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
3	sopra	sopra	ADP	E	_	6	case	_	_
4	a	a	ADP	E	_	3	fixed	_	_
5	l'	lo	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	uomo	uomo	NOUN	S	Gender=Masc|Number=Sing	2	obl	_	_
7	e	e	CCONJ	CC	_	8	cc	_	_
8	richiesto	richiedere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	conj	_	_
9	che	che	SCONJ	CS	_	12	mark	_	_
10	l'	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	12	obj	_	SpaceAfter=No
11	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	posata	posare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	8	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 fixed	color:blue
1	Ma	ma	CCONJ	CC	_	11	cc	_	_
2	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	donna	donna	NOUN	S	Gender=Fem|Number=Sing	11	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	invece	invece	ADV	B	_	7	mark	_	_
6	di	di	ADP	E	_	5	fixed	_	_
7	ringraziar	ringraziare	VERB	V	VerbForm=Inf	3	acl	_	_
8	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	11	cop	_	_
10	molto	molto	ADV	B	_	11	advmod	_	_
11	arrabbiata	arrabbiato	ADJ	A	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	11	punct	_	SpacesAfter=\n

~~~


