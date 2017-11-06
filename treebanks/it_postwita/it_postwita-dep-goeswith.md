---
layout: base
title:  'Statistics of goeswith in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `goeswith`

This relation is universal.

22 nodes (0%) are attached to their parents as `goeswith`.

21 instances of `goeswith` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.04545454545455.

The following 12 pairs of parts of speech are connected with `goeswith`: <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-PUNCT.html">PUNCT</a></tt> (7; 32% instances), <tt><a href="it_postwita-pos-ADV.html">ADV</a></tt>-<tt><a href="it_postwita-pos-PUNCT.html">PUNCT</a></tt> (2; 9% instances), <tt><a href="it_postwita-pos-DET.html">DET</a></tt>-<tt><a href="it_postwita-pos-PUNCT.html">PUNCT</a></tt> (2; 9% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (2; 9% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (2; 9% instances), <tt><a href="it_postwita-pos-ADP.html">ADP</a></tt>-<tt><a href="it_postwita-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="it_postwita-pos-ADP.html">ADP</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt> (1; 5% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="it_postwita-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="it_postwita-pos-SCONJ.html">SCONJ</a></tt> (1; 5% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-PUNCT.html">PUNCT</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 goeswith	color:blue
1	RT	RT	X	X	_	13	dep	_	_
2	@fjfthdirection	@fjfthdirection	SYM	SYM	_	13	vocative:mention	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	Citazioni	citazione	NOUN	S	Gender=Fem|Number=Plur	13	parataxis	_	_
5	pt	parte	NOUN	S	Gender=Fem|Number=Sing	4	compound	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	5	goeswith	_	_
7	426	426	NUM	N	NumType=Card	5	nummod	_	_
8	Voglio	volere	AUX	VM	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	13	aux	_	_
9	solo	solo	ADV	B	_	13	advmod	_	_
10	essere	essere	AUX	V	VerbForm=Inf	13	cop	_	_
11	di	di	ADP	E	_	12	case	_	_
12	nuovo	nuovo	ADJ	A	Gender=Masc|Number=Sing	13	advmod	_	_
13	felice	felice	ADJ	A	Number=Sing	0	root	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	13	punct	_	_
15	http://t.co/KdzaRzWUQr	http://t.co/KdzaRzWUQr	SYM	X	_	13	dep	_	_

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 29 goeswith	color:blue
1	#Grillo	#Grillo	SYM	SYM	_	0	root	_	_
2	a	a	ADP	E	_	5	case	_	_
3	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
4	8	8	NUM	N	NumType=Card	5	nummod	_	SpaceAfter=No
5	%	%	SYM	SYM	_	1	nmod	_	_
6	............	............	PUNCT	FS	_	1	punct	_	_
7	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	doveroso	doveroso	ADJ	A	Gender=Masc|Number=Sing	9	amod	_	_
9	grazie	grazie	INTJ	I	_	1	parataxis	_	_
10	a	a	ADP	E	_	13	case	_	_
11	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	13	det	_	_
12	vari	vario	DET	DI	PronType=Ind	13	amod	_	_
13	#Napolitano	#Napolitano	SYM	SYM	_	9	nmod	_	SpaceAfter=No
14	,	,	PUNCT	FF	_	15	punct	_	_
15	#Bersani	#Bersani	SYM	SYM	_	13	conj	_	SpaceAfter=No
16	,	,	PUNCT	FF	_	17	punct	_	_
17	#Vendola	#Vendola	SYM	SYM	_	13	conj	_	SpaceAfter=No
18	,	,	PUNCT	FF	_	19	punct	_	_
19	#Alemanno	#Alemanno	SYM	SYM	_	13	conj	_	SpaceAfter=No
20	,	,	PUNCT	FF	_	21	punct	_	_
21	#Libero	#Libero	SYM	SYM	_	13	conj	_	SpaceAfter=No
22	,	,	PUNCT	FF	_	23	punct	_	_
23	#IL	#IL	SYM	SYM	_	13	conj	_	_
24	Giornale	Giornale	PROPN	SP	_	23	flat:name	_	SpaceAfter=No
25	,	,	PUNCT	FF	_	26	punct	_	_
26	ecc	ecc	ADV	B	_	13	conj	_	SpaceAfter=No
27	.	.	PUNCT	FS	_	26	goeswith	_	_
28	ecc	ecc	ADV	B	_	13	conj	_	SpaceAfter=No
29	.	.	PUNCT	FS	_	28	goeswith	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 goeswith	color:blue
1	complimenti	complimento	NOUN	S	Gender=Masc|Number=Plur	0	root	_	_
2	a	a	ADP	E	_	4	case	_	_
3	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	coraggio	coraggio	NOUN	S	Gender=Masc|Number=Sing	1	nmod	_	_
5	di	di	ADP	E	_	7	case	_	_
6	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	governo	governo	NOUN	S	Gender=Masc|Number=Sing	4	nmod	_	_
8	Monti	Monti	PROPN	SP	_	7	nmod	_	_
9	su	su	ADP	E	_	11	case	_	_
10	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	_	_
11	taxi	taxi	NOUN	S	Gender=Masc	4	nmod	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	1	punct	_	_
13	a	a	ADP	E	_	20	case	_	_
14	'	'	PUNCT	FB	_	15	goeswith	_	_
15	sto	questo	DET	DD	PronType=Dem	16	det	_	_
16	punto	punto	NOUN	S	Gender=Masc|Number=Sing	20	nsubj	_	_
17	erano	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	20	cop	_	_
18	meglio	meglio	ADV	B	_	20	advmod	_	_
19	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	20	det	_	_
20	pecore	pecora	NOUN	S	Gender=Fem|Number=Plur	1	parataxis	_	_
21	di	di	ADP	E	_	23	case	_	_
22	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	PDL	PDL	PROPN	SP	_	20	nmod	_	SpaceAfter=No
24	.	.	PUNCT	FS	_	20	punct	_	_
25	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	paese	paese	NOUN	S	Gender=Masc|Number=Sing	1	parataxis	_	_
27	ricattato	ricattare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	26	acl	_	_
28	da	da	ADP	E	_	30	case	_	_
29	4	4	NUM	N	NumType=Card	30	nummod	_	_
30	bifolchi	bifolco	NOUN	S	Gender=Masc|Number=Plur	27	obl:agent	_	SpaceAfter=No
31	.	.	PUNCT	FS	_	1	punct	_	_

~~~


