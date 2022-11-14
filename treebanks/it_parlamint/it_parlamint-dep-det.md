---
layout: base
title:  'Statistics of det in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `det`

This relation is universal.

3213 nodes (16%) are attached to their parents as `det`.

3210 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12387177093059.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-DET.html">DET</a></tt> (3070; 96% instances), <tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="it_parlamint-pos-DET.html">DET</a></tt> (60; 2% instances), <tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="it_parlamint-pos-DET.html">DET</a></tt> (28; 1% instances), <tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_parlamint-pos-DET.html">DET</a></tt> (20; 1% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-DET.html">DET</a></tt> (15; 0% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-DET.html">DET</a></tt> (12; 0% instances), <tt><a href="it_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="it_parlamint-pos-DET.html">DET</a></tt> (6; 0% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-X.html">X</a></tt>-<tt><a href="it_parlamint-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Tante	tanto	DET	DI	Gender=Fem|Number=Plur|PronType=Ind	2	det	_	_
2	famiglie	famiglia	NOUN	S	Gender=Fem|Number=Plur	6	nsubj	_	_
3	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	6	expl	_	_
4	possono	potere	AUX	VM	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	dunque	dunque	ADV	B	_	6	advmod	_	_
6	trovare	trovare	VERB	V	VerbForm=Inf	0	root	_	_
7	in	in	ADP	E	_	9	case	_	_
8	questa	questo	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	condizione	condizione	NOUN	S	Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	6	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Vorrei	volere	AUX	VM	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	spiegare	spiegare	VERB	V	VerbForm=Inf	0	root	_	_
3	di	di	ADP	E	_	5	case	_	_
4	che	che	DET	DQ	PronType=Int	5	det	_	_
5	cosa	cosa	PRON	PQ	Number=Sing|PronType=Int	7	obl	_	_
6	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	7	expl	_	_
7	tratta	trattare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 det	color:blue
1	Non	non	ADV	BN	PronType=Neg	3	advmod	_	_
2	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	qualcosa	qualcosa	PRON	PI	Number=Sing|PronType=Ind	0	root	_	_
4	di	di	ADP	E	_	5	case	_	_
5	minore	minore	ADJ	A	Number=Sing	3	amod	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	9	punct	_	_
7	ma	ma	CCONJ	CC	_	9	cc	_	_
8	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	destinato	destinare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	conj	_	_
10	a	a	ADP	E	_	11	mark	_	_
11	cambiare	cambiare	VERB	V	VerbForm=Inf	9	xcomp	_	_
12	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	14	det	_	_
13	nostre	nostro	DET	AP	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	14	det	_	_
14	abitudini	abitudine	NOUN	S	Gender=Fem|Number=Plur	11	obj	_	_
15	assai	assai	ADV	B	_	16	advmod	_	_
16	di	di	ADP	E	_	20	case	_	_
17	più	più	ADV	B	_	16	fixed	_	_
18	che	che	SCONJ	CS	_	16	fixed	_	_
19	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	20	det	_	SpaceAfter=No
20	11	11	NUM	N	NumType=Card	11	obl	_	_
21	settembre	settembre	NOUN	S	Gender=Masc|Number=Sing	20	flat	_	SpaceAfter=No
22	.	.	PUNCT	FS	_	3	punct	_	_

~~~


