---
layout: base
title:  'Statistics of parataxis in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `parataxis`

This relation is universal.

30 nodes (0%) are attached to their parents as `parataxis`.

21 instances of `parataxis` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.5.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (16; 53% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (5; 17% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (3; 10% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (3; 10% instances), <tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 22 parataxis	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	genitore	genitore	NOUN	S	Gender=Masc|Number=Sing	15	nsubj	_	_
3	cui	cui	PRON	PR	PronType=Rel	5	iobj	_	_
4	viene	venire	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	affidato	affidare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl	_	_
6	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	bambino	bambino	NOUN	S	Gender=Masc|Number=Sing	5	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	FF	_	5	punct	_	_
9	dopo	dopo	ADP	E	_	11	case	_	_
10	dieci	dieci	NUM	N	NumType=Card	11	nummod	_	_
11	anni	anno	NOUN	S	Gender=Masc|Number=Plur	15	obl	_	SpaceAfter=No
12	,	,	PUNCT	FF	_	11	punct	_	_
13	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	15	expl	_	_
14	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux	_	_
15	convinto	convincere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
16	che	che	SCONJ	CS	_	20	mark	_	_
17	quello	quello	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	20	nsubj	_	_
18	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	_
19	suo	suo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	20	det	_	_
20	figlio	figlio	NOUN	S	Gender=Masc|Number=Sing	15	ccomp	_	_
21	-	-	PUNCT	FB	_	22	punct	_	_
22	credete	credere	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	15	parataxis	_	_
23	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	22	iobj	_	_
24	-	-	PUNCT	FB	_	22	punct	_	_
25	ed	e	CCONJ	CC	_	28	cc	_	_
26	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	_	_
27	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	28	det	_	_
28	bene	bene	NOUN	S	Gender=Masc|Number=Sing	15	conj	_	_
29	che	che	SCONJ	CS	_	30	mark	_	_
30	sia	essere	VERB	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	csubj	_	_
31	così	così	ADV	B	_	30	advmod	_	_
32	per	per	ADP	E	_	34	case	_	_
33	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	34	det	_	_
34	minore	minore	NOUN	S	Gender=Masc|Number=Sing	30	obl	_	SpaceAfter=No
35	.	.	PUNCT	FS	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 parataxis	color:blue
1	Signor	signore	NOUN	S	Gender=Masc|Number=Sing	6	vocative	_	_
2	Ministro	ministro	NOUN	S	Gender=Masc|Number=Sing	1	compound	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	1	punct	_	_
4	ecco	ecco	ADV	B	_	6	advmod	_	_
5	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	parola	parola	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
7	chiave	chiave	NOUN	S	Gender=Fem|Number=Sing	6	compound	_	SpaceAfter=No
8	:	:	PUNCT	FC	_	9	punct	_	_
9	coraggio	coraggio	NOUN	S	Gender=Masc|Number=Sing	6	nmod	_	_
10	e	e	CCONJ	CC	_	14	cc	_	_
11	-	-	PUNCT	FF	_	12	punct	_	_
12	aggiungo	aggiungere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	parataxis	_	_
13	-	-	PUNCT	FF	_	12	punct	_	_
14	responsabilità	responsabilità	NOUN	S	Gender=Fem	9	conj	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	6	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 21 parataxis	color:blue
1	Da	da	ADP	E	_	3	case	_	_
2	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	punto	punto	NOUN	S	Gender=Masc|Number=Sing	7	obl	_	_
4	di	di	ADP	E	_	5	case	_	_
5	vista	vista	NOUN	S	Gender=Fem|Number=Sing	3	nmod	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	3	punct	_	_
7	abbiamo	avere	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	necessità	necessità	NOUN	S	Gender=Fem	7	obj	_	_
10	di	di	ADP	E	_	11	mark	_	_
11	stare	stare	VERB	V	VerbForm=Inf	9	acl	_	_
12	sicuramente	sicuramente	ADV	B	_	13	advmod	_	_
13	uniti	unito	ADJ	A	Gender=Masc|Number=Plur	11	xcomp	_	SpaceAfter=No
14	;	;	PUNCT	FC	_	16	punct	_	_
15	di	di	ADP	E	_	16	mark	_	_
16	prendere	prendere	VERB	V	VerbForm=Inf	11	conj	_	_
17	misure	misura	NOUN	S	Gender=Fem|Number=Plur	16	obj	_	_
18	straordinarie	straordinario	ADJ	A	Gender=Fem|Number=Plur	17	amod	_	_
19	e	e	CCONJ	CC	_	24	cc	_	_
20	-	-	PUNCT	FB	_	21	punct	_	_
21	ripeto	ripetere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	24	parataxis	_	_
22	-	-	PUNCT	FB	_	21	punct	_	_
23	anche	anche	ADV	B	_	24	advmod	_	_
24	dure	duro	ADJ	A	Gender=Fem|Number=Plur	18	conj	_	_
25	in	in	ADP	E	_	27	case	_	_
26	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	27	det	_	_
27	confronti	confronto	NOUN	S	Gender=Masc|Number=Plur	17	obl	_	_
28	di	di	ADP	E	_	29	case	_	_
29	chi	chi	PRON	PR	PronType=Rel	27	nmod	_	_
30	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	32	expl	_	_
31	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	32	aux	_	_
32	reso	rendere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	29	acl	_	_
33	responsabile	responsabile	ADJ	A	Number=Sing	32	xcomp	_	_
34	di	di	ADP	E	_	35	case	_	_
35	atti	atto	NOUN	S	Gender=Masc|Number=Plur	33	obl	_	_
36	di	di	ADP	E	_	37	case	_	_
37	violenza	violenza	NOUN	S	Gender=Fem|Number=Sing	35	nmod	_	_
38	a	a	ADP	E	_	40	case	_	_
39	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	40	det	_	_
40	interno	interno	NOUN	S	Gender=Masc|Number=Sing	35	nmod	_	_
41	di	di	ADP	E	_	43	case	_	_
42	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	43	det	_	_
43	strutture	struttura	NOUN	S	Gender=Fem|Number=Plur	40	nmod	_	SpaceAfter=No
44	.	.	PUNCT	FS	_	7	punct	_	_

~~~


