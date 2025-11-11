---
layout: base
title:  'Statistics of obl:agent in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="it_kiparlaforest-dep-obl.html">obl</a></tt>.

4 nodes (0%) are attached to their parents as `obl:agent`.

4 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 59	bgColor:blue
# visual-style 59	fgColor:white
# visual-style 55	bgColor:blue
# visual-style 55	fgColor:white
# visual-style 55 59 obl:agent	color:blue
1	abbiamo	avere	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	reparandum	_	Begin=94.64|KID=28-0|Prolonged=Yes
2	sì	sì	INTJ	_	_	1	discourse	_	KID=28-1
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
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 23 obl:agent	color:blue
1	abbiamo	avere	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	reparandum	_	Begin=94.64|KID=28-0|Prolonged=Yes
2	sì	sì	INTJ	_	_	1	discourse	_	KID=28-1
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
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 19 obl:agent	color:blue
1	sì	sì	INTJ	_	_	3	discourse	_	Begin=32.735|KID=12-0|Prolonged=Yes
2	ci	ci	PRON	_	PronType=Prs	3	expl	_	Clitic=Yes|KID=12-1
3	sono	essere	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=12-2|Prolonged=Yes
4	tre	tre	NUM	_	NumType=Card	5	nummod	_	KID=12-3
5	piani	piano	NOUN	_	Gender=Masc|Number=Plur	3	nsubj	_	End=34.93|Intonation=WeaklyRising|KID=12-4
6	e	e	CCONJ	_	_	12	cc	_	Begin=35.477|KID=14-0|OverlappingGroup=1
7	l'	il	DET	_	Definite=Def|Number=Sing|PronType=Art	9	det	_	KID=14-1|OverlappingGroup=1|SpaceAfter=No
8	ultimo	ultimo	ADJ	_	Gender=Masc|Number=Sing|NumType=Ord	9	amod	_	KID=14-2|OverlappingGroup=1
9	piano	piano	NOUN	_	Gender=Masc|Number=Sing	12	nsubj	_	KID=14-3|Prolonged=Yes
10	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	KID=14-4|Prolonged=Yes
11	una	uno	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	12	det	_	KID=14-5
12	soffitta	soffitta	NOUN	_	Gender=Fem|Number=Sing	3	conj	_	KID=14-6
13	che	che	PRON	_	PronType=Rel	17	nsubj:pass	_	KID=14-7|Prolonged=Yes
14	in	in	ADP	_	_	15	case	_	KID=14-8
15	realtà	realtà	NOUN	_	Gender=Fem	17	obl	_	KID=14-9|Prolonged=Yes
16	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux:pass	_	KID=14-10
17	abitata	abitare	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	12	acl:relcl	_	KID=14-11|Prolonged=Yes
18	da	da	ADP	_	_	19	case	_	KID=14-12
19	uno	uno	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	17	obl:agent	_	KID=14-13
20	di	di	ADP	_	_	23	case	_	KID=14-14a
21	i	il	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	23	det	_	KID=14-14b
22	miei	mio	ADJ	_	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	23	amod	_	KID=14-15
23	zii	zio	NOUN	_	Gender=Masc|Number=Plur	19	nmod	_	End=41.26|KID=14-16

~~~


