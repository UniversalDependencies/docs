---
layout: base
title:  'Statistics of nummod in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `nummod`

This relation is universal.

183 nodes (1%) are attached to their parents as `nummod`.

126 instances of `nummod` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.10382513661202.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt> (180; 98% instances), <tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nummod	color:blue
1	Esprimo	esprimere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	parere	parere	NOUN	S	Gender=Masc|Number=Sing	1	obj	_	_
3	contrario	contrario	ADJ	A	Gender=Masc|Number=Sing	2	amod	_	_
4	su	su	ADP	E	_	6	case	_	_
5	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	emendamenti	emendamento	NOUN	S	Gender=Masc|Number=Plur	2	nmod	_	_
7	1.111	1.111	NUM	N	NumType=Card	6	nummod	_	_
8	e	e	CCONJ	CC	_	9	cc	_	_
9	1.112	1.112	NUM	N	NumType=Card	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 23 nummod	color:blue
1	Ciò	ciò	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	2	obj	_	_
2	premesso	premettere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	50	advcl	_	_
3	(	(	PUNCT	FB	_	8	punct	_	SpaceAfter=No
4	e	e	CCONJ	CC	_	8	cc	_	_
5	ancora	ancora	ADV	B	_	8	advmod	_	_
6	non	non	ADV	BN	PronType=Neg	8	advmod	_	_
7	per	per	ADP	E	_	8	mark	_	_
8	dare	dare	VERB	V	VerbForm=Inf	2	conj	_	_
9	giustificazioni	giustificazione	NOUN	S	Gender=Fem|Number=Plur	8	obj	_	SpaceAfter=No
10	)	)	PUNCT	FB	_	8	punct	_	SpaceAfter=No
11	,	,	PUNCT	FF	_	2	punct	_	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	situazione	situazione	NOUN	S	Gender=Fem|Number=Sing	50	nsubj	_	_
14	di	di	ADP	E	_	15	case	_	_
15	sovrappopolamento	sovrappopolamento	NOUN	S	Gender=Masc|Number=Sing	13	nmod	_	SpaceAfter=No
16	,	,	PUNCT	FF	_	15	punct	_	_
17	che	che	PRON	PR	PronType=Rel	21	nsubj	_	_
18	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	cop	_	_
19	di	di	ADP	E	_	21	case	_	_
20	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	140	140	NUM	N	NumType=Card	15	acl	_	_
22	per	per	ADP	E	_	23	case	_	_
23	cento	cento	NUM	N	NumType=Card	21	nummod	_	_
24	rispetto	rispetto	ADV	B	_	27	case	_	_
25	a	a	ADP	E	_	24	fixed	_	_
26	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	27	det	_	_
27	possibilità	possibilità	NOUN	S	Gender=Fem	21	obl	_	_
28	di	di	ADP	E	_	30	case	_	_
29	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	30	det	_	_
30	carceri	carcere	NOUN	S	Gender=Fem|Number=Plur	27	nmod	_	_
31	italiane	italiano	ADJ	A	Gender=Fem|Number=Plur	30	amod	_	_
32	(	(	PUNCT	FB	_	33	punct	_	SpaceAfter=No
33	problema	problema	NOUN	S	Gender=Masc|Number=Sing	13	appos	_	_
34	che	che	PRON	PR	PronType=Rel	38	obj	_	_
35	le	le	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	38	iobj	_	_
36	avevamo	avere	AUX	VA	Mood=Ind|Number=Plur|Person=1|Tense=Imp|VerbForm=Fin	38	aux	_	_
37	già	già	ADV	B	_	38	advmod	_	_
38	posto	porre	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	33	acl	_	_
39	e	e	CCONJ	CC	_	44	cc	_	_
40	di	di	ADP	E	_	41	case	_	_
41	cui	cui	PRON	PR	PronType=Rel	44	obl	_	_
42	abbiamo	avere	AUX	VA	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	44	aux	_	_
43	già	già	ADV	B	_	44	advmod	_	_
44	discusso	discutere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	38	conj	_	SpaceAfter=No
45	,	,	PUNCT	FF	_	44	punct	_	_
46	signor	signore	NOUN	S	Gender=Masc|Number=Sing	38	vocative	_	_
47	Ministro	ministro	NOUN	S	Gender=Masc|Number=Sing	46	compound	_	SpaceAfter=No
48	)	)	PUNCT	FB	_	33	punct	_	SpaceAfter=No
49	,	,	PUNCT	FF	_	13	punct	_	_
50	rende	rendere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
51	di	di	ADP	E	_	50	advmod	_	_
52	per	per	ADP	E	_	51	fixed	_	_
53	sé	sé	PRON	PE	PronType=Prs	51	fixed	_	_
54	tutto	tutto	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	50	obj	_	_
55	più	più	ADV	B	_	56	advmod	_	_
56	difficile	difficile	ADJ	A	Number=Sing	50	xcomp	_	_
57	in	in	ADP	E	_	59	case	_	_
58	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	59	det	_	_
59	frangente	frangente	NOUN	S	Gender=Masc|Number=Sing	50	obl	_	_
60	come	come	ADP	E	_	61	case	_	_
61	questo	questo	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	59	nmod	_	SpaceAfter=No
62	.	.	PUNCT	FS	_	50	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 31 nummod	color:blue
1	A	a	ADP	E	_	3	case	_	_
2	tal	tale	DET	DD	Number=Sing|PronType=Dem	3	det	_	_
3	proposito	proposito	NOUN	S	Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	sarebbe	essere	AUX	VA	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	abbastanza	abbastanza	ADV	B	_	7	advmod	_	_
7	semplice	semplice	ADJ	A	Number=Sing	0	root	_	_
8	replicare	replicare	VERB	V	VerbForm=Inf	7	csubj	_	_
9	che	che	SCONJ	CS	_	20	mark	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	14	punct	_	_
11	da	da	ADP	E	_	14	mark	_	_
12	quando	quando	SCONJ	CS	_	11	fixed	_	_
13	sono	essere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	14	cop	_	_
14	Ministro	ministro	NOUN	S	Gender=Masc|Number=Sing	20	advcl	_	_
15	di	di	ADP	E	_	17	case	_	_
16	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	giustizia	giustizia	NOUN	S	Gender=Fem|Number=Sing	14	nmod	_	SpaceAfter=No
18	,	,	PUNCT	FF	_	14	punct	_	_
19	ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	20	aux	_	_
20	previsto	prevedere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	8	ccomp	_	_
21	2.548	2.548	NUM	N	NumType=Card	22	nummod	_	_
22	agenti	agente	NOUN	S	Gender=Masc|Number=Plur	20	obj	_	_
23	di	di	ADP	E	_	24	case	_	_
24	polizia	polizia	NOUN	S	Gender=Fem|Number=Sing	22	nmod	_	_
25	penitenziaria	penitenziario	ADJ	A	Gender=Fem|Number=Sing	24	amod	_	_
26	in	in	ADP	E	_	27	case	_	_
27	più	più	ADV	B	_	22	advmod	_	SpaceAfter=No
28	,	,	PUNCT	FF	_	30	punct	_	_
29	di	di	ADP	E	_	30	case	_	_
30	cui	cui	PRON	PR	PronType=Rel	22	nmod	_	_
31	1.500	1.500	NUM	N	NumType=Card	30	nummod	_	_
32	già	già	ADV	B	_	34	advmod	_	_
33	in	in	ADP	E	_	34	case	_	_
34	servizio	servizio	NOUN	S	Gender=Masc|Number=Sing	31	nmod	_	_
35	e	e	CCONJ	CC	_	36	cc	_	_
36	754	754	NUM	N	NumType=Card	31	conj	_	_
37	prossimamente	prossimamente	ADV	B	_	36	advmod	_	SpaceAfter=No
38	.	.	PUNCT	FS	_	7	punct	_	_

~~~


