---
layout: base
title:  'Statistics of flat in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `flat`

This relation is universal.

54 nodes (0%) are attached to their parents as `flat`.

54 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25925925925926.

The following 7 pairs of parts of speech are connected with `flat`: <tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (24; 44% instances), <tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt> (13; 24% instances), <tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt> (11; 20% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt> (2; 4% instances), <tt><a href="it_parlamint-pos-X.html">X</a></tt>-<tt><a href="it_parlamint-pos-X.html">X</a></tt> (2; 4% instances), <tt><a href="it_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="it_parlamint-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 flat	color:blue
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


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 flat	color:blue
1	Lei	lei	PRON	PE	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	sta	stare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	a	a	ADP	E	_	5	case	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	diritto	diritto	NOUN	S	Gender=Masc|Number=Sing	2	obl	_	_
6	e	e	CCONJ	CC	_	9	cc	_	_
7	a	a	ADP	E	_	9	case	_	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	sicurezza	sicurezza	NOUN	S	Gender=Fem|Number=Sing	5	conj	_	_
10	come	come	SCONJ	CS	_	16	mark	_	_
11	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
12	suo	suo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	13	det	_	_
13	collega	collega	NOUN	S	Number=Sing	16	nsubj	_	_
14	Di	Di	PROPN	SP	_	13	nmod	_	_
15	Maio	Maio	PROPN	SP	_	14	flat	_	_
16	sta	stare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	advcl	_	_
17	a	a	ADP	E	_	19	case	_	_
18	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	grammatica	grammatica	NOUN	S	Gender=Fem|Number=Sing	16	obl	_	SpaceAfter=No
20	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 31 flat	color:blue
1	Si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	2	expl	_	_
2	tratta	trattare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	di	di	ADP	E	_	4	case	_	_
4	atti	atto	NOUN	S	Gender=Masc|Number=Plur	2	obl	_	_
5	amministrativi	amministrativo	ADJ	A	Gender=Masc|Number=Plur	4	amod	_	_
6	poi	poi	ADV	B	_	7	advmod	_	_
7	confluiti	confluire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	4	acl	_	_
8	in	in	ADP	E	_	14	case	_	_
9	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	14	det	_	_
10	più	più	ADV	B	_	11	advmod	_	_
11	noti	noto	ADJ	A	Gender=Masc|Number=Plur	14	amod	_	_
12	e	e	CCONJ	CC	_	13	cc	_	_
13	recenti	recente	ADJ	A	Number=Plur	11	conj	_	_
14	decreti	decreto	NOUN	S	Gender=Masc|Number=Plur	7	obl	_	SpaceAfter=No
15	-	-	PUNCT	FF	_	14	punct	_	SpaceAfter=No
16	legge	legge	NOUN	S	Gender=Fem|Number=Sing	14	compound	_	_
17	di	di	ADP	E	_	19	case	_	_
18	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	2	2	NUM	N	NumType=Card	14	nmod	_	_
20	marzo	marzo	NOUN	S	Gender=Masc|Number=Sing	19	flat	_	_
21	2020	2020	NUM	N	NumType=Card	19	flat	_	SpaceAfter=No
22	,	,	PUNCT	FF	_	23	punct	_	_
23	n.	numero	NOUN	S	Gender=Masc	14	nmod	_	_
24	9	9	NUM	N	NumType=Card	23	nummod	_	SpaceAfter=No
25	,	,	PUNCT	FF	_	29	punct	_	_
26	e	e	CCONJ	CC	_	29	cc	_	_
27	di	di	ADP	E	_	29	case	_	_
28	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	29	det	_	_
29	9	9	NUM	N	NumType=Card	19	conj	_	_
30	marzo	marzo	NOUN	S	Gender=Masc|Number=Sing	29	flat	_	_
31	2020	2020	NUM	N	NumType=Card	29	flat	_	SpaceAfter=No
32	,	,	PUNCT	FF	_	33	punct	_	_
33	n.	numero	NOUN	S	Gender=Masc	29	nmod	_	_
34	14	14	NUM	N	NumType=Card	33	nummod	_	SpaceAfter=No
35	.	.	PUNCT	FS	_	2	punct	_	_

~~~


