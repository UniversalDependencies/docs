---
layout: base
title:  'Statistics of case in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `case`

This relation is universal.

494 nodes (7%) are attached to their parents as `case`.

493 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.84817813765182.

The following 10 pairs of parts of speech are connected with `case`: <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-ADP.html">ADP</a></tt> (408; 83% instances), <tt><a href="it_valico-pos-PRON.html">PRON</a></tt>-<tt><a href="it_valico-pos-ADP.html">ADP</a></tt> (37; 7% instances), <tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_valico-pos-ADP.html">ADP</a></tt> (21; 4% instances), <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-ADP.html">ADP</a></tt> (11; 2% instances), <tt><a href="it_valico-pos-ADV.html">ADV</a></tt>-<tt><a href="it_valico-pos-ADP.html">ADP</a></tt> (7; 1% instances), <tt><a href="it_valico-pos-DET.html">DET</a></tt>-<tt><a href="it_valico-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="it_valico-pos-NUM.html">NUM</a></tt>-<tt><a href="it_valico-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="it_valico-pos-PRON.html">PRON</a></tt>-<tt><a href="it_valico-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="it_valico-pos-SYM.html">SYM</a></tt>-<tt><a href="it_valico-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 case	color:blue
1	e	e	CCONJ	CC	_	2	cc	_	_
2	piccia	picciare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	l'	lo	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	SpaceAfter=No
4	uomo	uomo	NOUN	S	Gender=Masc|Number=Sing	2	obj	_	_
5	che	che	PRON	PR	PronType=Rel	6	nsubj	_	_
6	aveva	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	acl:relcl	_	_
7	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	rabbia	rabbia	NOUN	S	Gender=Fem|Number=Sing	6	obj	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	2	punct	_	_
10	con	con	ADP	E	_	13	case	_	_
11	i	i	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	13	det	_	_
12	suoi	suo	DET	AP	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	13	det:poss	_	_
13	pugni	pugno	NOUN	S	Gender=Masc|Number=Plur	2	obl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	Ero	essere	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	2	cop	_	_
2	stanca	stanco	ADJ	A	Gender=Fem|Number=Sing	0	root	_	_
3	e	e	CCONJ	CC	_	4	cc	_	_
4	pensavo	pensare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	2	conj	_	_
5	a	a	ADP	E	_	6	case	_	_
6	niente	niente	PRON	PI	PronType=Ind	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
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


