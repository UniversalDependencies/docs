---
layout: base
title:  'Statistics of discourse in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `discourse`

This relation is universal.

2 nodes (0%) are attached to their parents as `discourse`.

1 instances of `discourse` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 2 pairs of parts of speech are connected with `discourse`: <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (1; 50% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-INTJ.html">INTJ</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Beh	Beh	ADV	B	_	5	discourse	_	_
2	,	[PUNCT]	PUNCT	FF	_	5	punct	_	_
3	certo	certo	ADV	B	_	5	advmod	_	_
4	sarebbe	essere	AUX	V	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	fantastico	fantastico	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
6	se	se	SCONJ	CS	_	8	mark	_	_
7	ci	ci	PRON	PC	Clitic=Yes|Gender=Masc|Number=Plur|Person=1|PronType=Prs	8	iobj	_	_
8	cadesse	cadere	VERB	V	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	advcl	_	_
9	tra	tra	ADP	E	_	11	case	_	_
10	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	11	det	_	_
11	mani	mano	NOUN	S	Gender=Fem|Number=Plur	8	obl	_	_
12	o	o	CCONJ	CC	_	13	cc	_	_
13	trovassimo	trovare	VERB	V	Mood=Sub|Number=Plur|Person=1|Tense=Imp|VerbForm=Fin	8	conj	_	_
14	sotto	sotto	ADP	E	_	17	case	_	_
15	a	a	ADP	E	_	14	fixed	_	_
16	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	cuscino	cuscino	NOUN	S	Gender=Masc|Number=Sing	13	obl	_	_
18	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	guida	guida	NOUN	S	Gender=Fem|Number=Sing	13	obj	_	_
20	,	[PUNCT]	PUNCT	FF	_	22	punct	_	_
21	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	manuale	manuale	NOUN	S	Gender=Masc|Number=Sing	19	conj	_	_
23	completo	completo	ADJ	A	Gender=Masc|Number=Sing	22	amod	_	_
24	con	con	ADP	E	_	26	case	_	_
25	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	26	det	_	_
26	istruzioni	istruzione	NOUN	S	Gender=Fem|Number=Plur	22	nmod	_	_
27	per	per	ADP	E	_	29	mark	_	_
28	essere	essere	AUX	V	VerbForm=Inf	29	cop	_	_
29	felici	felice	ADJ	A	Gender=Masc|Number=Plur	26	acl	_	_
30	.	[PUNCT]	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 28 discourse	color:blue
1	Rispondere	rispondere	VERB	V	VerbForm=Inf	8	csubj	_	_
2	a	a	ADP	E	_	4	case	_	_
3	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	domanda	domanda	NOUN	S	Gender=Fem|Number=Sing	1	obl	_	_
5	di	di	ADP	E	_	7	case	_	_
6	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	7	det	_	_
7	tipo	tipo	NOUN	S	Gender=Masc|Number=Sing	4	nmod	_	_
8	risulta	risultare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	di	di	ADP	E	_	11	case	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	tutto	tutto	ADV	B	_	8	obl	_	_
12	complicato	complicato	ADJ	A	Gender=Masc|Number=Sing	8	xcomp	_	_
13	,	,	PUNCT	FF	_	8	punct	_	_
14	ma	ma	CCONJ	CC	_	33	cc	_	_
15	se	se	SCONJ	CS	_	20	mark	_	_
16	realmente	realmente	ADV	B	_	20	advmod	_	_
17	questa	questo	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	18	det	_	_
18	ricerca	ricerca	NOUN	S	Gender=Fem|Number=Sing	20	nsubj	_	_
19	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	20	expl	_	_
20	presentasse	presentare	VERB	V	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	33	advcl	_	_
21	come	come	ADP	E	_	22	case	_	_
22	soluzione	soluzione	NOUN	S	Gender=Fem|Number=Sing	20	obl	_	_
23	a	a	ADP	E	_	25	case	_	_
24	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	25	det	_	_
25	malattie	malattia	NOUN	S	Gender=Fem|Number=Plur	22	nmod	_	_
26	neurologiche	neurologico	ADJ	A	Gender=Fem|Number=Plur	25	amod	_	_
27	,	,	PUNCT	FF	_	20	punct	_	_
28	beh	beh	INTJ	I	_	20	discourse	_	_
29	,	,	PUNCT	FF	_	31	punct	_	_
30	che	che	PRON	PR	_	31	nsubj	_	_
31	dire	dire	VERB	V	VerbForm=Inf	20	parataxis	_	_
32	,	,	PUNCT	FF	_	33	punct	_	_
33	sarebbe	essere	VERB	V	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	conj	_	_
34	l'	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	35	det	_	_
35	investimento	investimento	NOUN	S	Gender=Masc|Number=Sing	33	obj	_	_
36	che	che	PRON	PR	_	38	nsubj	_	_
37	più	più	ADV	B	_	38	advmod	_	_
38	appagherebbe	appagare	VERB	V	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	35	acl:relcl	_	_
39	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	40	det	_	_
40	generazioni	generazione	NOUN	S	Gender=Fem|Number=Plur	38	obj	_	_
41	future	futuro	ADJ	A	Gender=Fem|Number=Plur	40	amod	_	_
42	,	,	PUNCT	FF	_	35	punct	_	_
43	premiando	premiare	VERB	V	VerbForm=Ger	35	advcl	_	_
44	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	45	det	_	_
45	progresso	progresso	NOUN	S	Gender=Masc|Number=Sing	43	obj	_	_
46	conseguito	conseguire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	45	acl	_	_
47	grazie	grazie	NOUN	S	_	51	case	_	_
48	a	a	ADP	E	_	47	fixed	_	_
49	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	51	det	_	_
50	continuo	continuo	ADJ	A	Gender=Masc|Number=Sing	51	amod	_	_
51	avanzare	avanzare	NOUN	S	_	46	obl	_	_
52	di	di	ADP	E	_	54	case	_	_
53	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	54	det	_	_
54	tecnologia	tecnologia	NOUN	S	Gender=Fem|Number=Sing	51	nmod	_	_
55	.	.	PUNCT	FS	_	8	punct	_	_

~~~


