---
layout: base
title:  'Statistics of obl:agent in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="it_kiparlaforest-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="it_kiparlaforest-dep-obl-tmod.html">obl:tmod</a></tt>.

7 nodes (0%) are attached to their parents as `obl:agent`.

7 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 4 pairs of parts of speech are connected with `obl:agent`: <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (2; 29% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (2; 29% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (2; 29% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-X.html">X</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 59	bgColor:blue
# visual-style 59	fgColor:white
# visual-style 55	bgColor:blue
# visual-style 55	fgColor:white
# visual-style 55 59 obl:agent	color:blue
1	abbiamo	avere	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	reparandum	_	Begin=94.64|KID=28-0|Prolonged=Yes
2	sì	sì	ADV	_	_	1	discourse	_	KID=28-1
3	me	me	X	_	_	1	dep	_	KID=28-2|Prolonged=Yes
4	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	KID=28-3
5	prato	prato	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	KID=28-4|Prolonged=Yes
6	c'	ci	PRON	_	PronType=Prs	7	expl	_	Clitic=Yes|KID=28-5|Truncated=Yes
7	è	essere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=28-6
8	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	KID=28-7
9	grande	grande	ADJ	_	Number=Sing	10	amod	_	KID=28-8
10	prato	prato	NOUN	_	Gender=Masc|Number=Sing	7	nsubj	_	End=98.65|Intonation=WeaklyRising|KID=28-9
11	e	e	CCONJ	_	_	16	discourse	_	Begin=99.277|KID=29-0
12	in	in	ADP	_	_	13	case	_	KID=29-1
13	realtà	realtà	NOUN	_	Gender=Fem|Number=Sing	16	obl	_	KID=29-2
14	ce	ce	PRON	_	PronType=Prs	16	expl	_	Clitic=Yes|KID=29-3
15	ne	ne	PRON	_	PronType=Prs	16	iobj	_	Clitic=Yes|KID=29-4
16	son	essere	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	parataxis	_	KID=29-5
17	due	due	NUM	_	NumType=Card	16	nsubj	_	End=100.75|Intonation=WeaklyRising|KID=29-6|Prolonged=Yes
18	e	e	CCONJ	_	_	20	cc	_	Begin=101.147|KID=30-0|Prolonged=Yes
19	sono	essere	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	20	aux:pass	_	KID=30-1
20	divisi	dividere	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	16	conj	_	KID=30-2
21	da	da	ADP	_	_	23	case	_	KID=30-3a
22	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	_	KID=30-3b
23	strada	strada	NOUN	_	Gender=Fem|Number=Sing	20	obl:agent	_	KID=30-4
24	che	che	PRON	_	PronType=Rel	25	reparandum	_	KID=30-5|Prolonged=Yes
25	che	che	PRON	_	PronType=Rel	26	nsubj	_	KID=30-6
26	porta	portare	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	acl:relcl	_	KID=30-7
27	a	a	ADP	_	_	28	case	_	KID=30-8
28	casa	casa	NOUN	_	Gender=Fem|Number=Sing	26	obl	_	KID=30-9
29	mia	mio	ADJ	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	28	amod	_	End=105.09|Intonation=WeaklyRising|KID=30-10
30	e	e	CCONJ	_	_	33	cc	_	Begin=105.843|KID=31-0|Prolonged=Yes
31	sotto	sotto	ADP	_	_	32	case	_	KID=31-1
32	casa	casa	NOUN	_	Gender=Fem|Number=Sing	33	obl	_	KID=31-2
33	abbiamo	avere	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	16	conj	_	KID=31-3
34	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	35	reparandum	_	KID=31-4|Prolonged=Yes
35	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	36	det	_	KID=31-5
36	orto	orto	NOUN	_	Gender=Masc|Number=Sing	33	obj	_	KID=31-6
37	molto	molto	ADV	_	_	38	advmod	_	KID=31-7
38	grande	grande	ADJ	_	Number=Sing	36	amod	_	KID=31-8|Prolonged=Yes
39	che	che	PRON	_	PronType=Rel	41	nsubj	_	KID=31-9
40	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	41	aux:pass	_	KID=31-10
41	gestito	gestire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	36	acl:relcl	_	KID=31-11
42	da	da	ADP	_	_	45	reparandum	_	KID=31-12
43	una	uno	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	44	det	_	KID=31-13|Prolonged=Yes
44	parte	parte	NOUN	_	Gender=Fem|Number=Sing	41	orphan	_	KID=31-14
45	da	da	ADP	_	_	47	case	_	KID=31-15
46	mia	mio	DET	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	47	det:poss	_	KID=31-16
47	nonna	nonno	NOUN	_	Gender=Fem|Number=Sing	44	obl:agent	_	KID=31-17
48	e	e	CCONJ	_	_	52	cc	_	KID=31-18
49	da	da	ADP	_	_	52	case	_	KID=31-19a
50	i	il	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	52	det	_	KID=31-19b
51	miei	mio	ADJ	_	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	52	amod	_	KID=31-20
52	genitori	genitore	NOUN	_	Gender=Masc|Number=Plur	47	conj	_	KID=31-21|Prolonged=Yes
53	un'	uno	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	55	det	_	KID=31-22|SpaceAfter=No
54	altra	altro	ADJ	_	Gender=Fem|Number=Sing	55	amod	_	KID=31-23
55	parte	parte	NOUN	_	Gender=Fem|Number=Sing	44	conj	_	KID=31-24
56	da	da	ADP	_	_	59	case	_	KID=31-25|Prolonged=Yes
57	un'	uno	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	59	det	_	KID=31-26|SpaceAfter=No
58	altra	altro	ADJ	_	Gender=Fem|Number=Sing	59	amod	_	KID=31-27
59	famiglia	famiglia	NOUN	_	Gender=Fem|Number=Sing	55	obl:agent	_	End=115.32|Intonation=WeaklyRising|KID=31-28
60	e	e	CCONJ	_	_	64	cc	_	Begin=115.761|KID=32-0|Prolonged=Yes
61	intorno	intorno	ADV	_	_	64	advmod	_	KID=32-1
62	comunque	comunque	CCONJ	_	_	64	advmod	_	KID=32-2
63	c'	ci	PRON	_	PronType=Prs	64	expl	_	Clitic=Yes|KID=32-3|SpaceAfter=No
64	è	essere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	conj	_	KID=32-4
65	campagna	campagna	NOUN	_	Gender=Fem|Number=Sing	64	nsubj	_	End=119.07|Intonation=Falling|KID=32-5
66	quindi	quindi	CCONJ	_	_	74	cc	_	Begin=119.576|KID=34-0|OverlappingGroup=3|Prolonged=Yes
67	ehm	ehm	INTJ	_	_	74	discourse	_	KID=34-1|Prolonged=Yes
68	per	per	ADP	_	_	69	case	_	KID=34-2
69	questo	questo	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	74	obl	_	KID=34-3
70	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	71	cop	_	KID=34-4
71	immer~	immerso	ADJ	_	_	74	reparandum	_	Interrupted=Yes|KID=34-5
72	cioè	cioè	CCONJ	_	_	74	discourse	_	KID=34-6
73	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	74	cop	_	KID=34-7
74	immersa	immerso	ADJ	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	64	conj	_	KID=34-8
75	in	in	ADP	_	_	77	case	_	KID=34-9a
76	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	77	det	_	KID=34-9b
77	natura	natura	NOUN	_	Gender=Fem|Number=Sing	74	obl	_	KID=34-10

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 obl:agent	color:blue
1	noi	noi	PRON	_	Number=Plur|Person=1|PronType=Prs	2	nsubj	_	Begin=2827.664|KID=1098-0
2	troviamo	trovare	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	KID=1098-1
3	le	il	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	4	det	_	KID=1098-2
4	iscrizioni	iscrizione	NOUN	_	Gender=Fem|Number=Plur	2	obj	_	KID=1098-3
5	scritte	scrivere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl	_	KID=1098-4
6	da	da	ADP	_	_	8	case	_	KID=1098-5
7	queste	questo	DET	_	Gender=Fem|Number=Plur|PronType=Dem	8	det	_	KID=1098-6
8	persone	persona	NOUN	_	Gender=Fem|Number=Plur	5	obl:agent	_	KID=1098-7
9	che	che	SCONJ	_	PronType=Rel	11	obj	_	KID=1098-8
10	tutti	tutto	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	11	nsubj	_	KID=1098-9
11	chiamavano	chiamare	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	8	acl:relcl	_	KID=1098-10
12	arabi	arabo	NOUN	_	Gender=Masc|Number=Plur	11	xcomp	_	End=2831.793|Intonation=WeaklyRising|KID=1098-11

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:agent	color:blue
1	scritti	scrivere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Begin=1248.45|KID=471-0
2	da	da	ADP	_	_	3	case	_	KID=471-1
3	qualcuno	qualcuno	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	1	obl:agent	_	KID=471-2
4	che	che	CCONJ	_	PronType=Rel	9	nsubj	_	KID=471-3
5	per	per	ADP	_	_	6	case	_	KID=471-4
6	caso	caso	NOUN	_	Gender=Masc|Number=Sing	9	obl	_	End=1250.626|Intonation=WeaklyRising|KID=471-5
7	si	si	PRON	_	Person=3|PronType=Prs	9	expl	_	Begin=1250.773|KID=472-0
8	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	KID=472-1
9	trovato	trovare	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	acl:relcl	_	KID=472-2
10	a	a	ADP	_	_	11	case	_	KID=472-3
11	contatto	contatto	NOUN	_	Gender=Masc|Number=Sing	9	obl	_	KID=472-4
12	con	con	ADP	_	_	14	case	_	KID=472-5
13	degli	del	DET	_	_	14	det	_	KID=472-6
14	arabi	arabo	NOUN	_	Gender=Masc|Number=Plur	9	obl	_	KID=472-7
15	in	in	ADP	_	_	17	case	_	KID=472-8a
16	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	KID=472-8b
17	passato	passato	NOUN	_	Gender=Masc|Number=Sing	9	obl	_	End=1253.83|Intonation=WeaklyRising|KID=472-9

~~~


