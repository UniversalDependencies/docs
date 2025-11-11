---
layout: base
title:  'Statistics of csubj in UD_Old_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Old_French-ALTM: Relations: `csubj`

This relation is universal.

2 nodes (0%) are attached to their parents as `csubj`.

1 instances of `csubj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 19 csubj	color:blue
1	et	et	CCONJ	_	_	4	cc	_	prpos=Cc|uppos=CONJO
2	si	si	ADV	_	_	4	advmod	_	prpos=Rg|uppos=ADV
3	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	4	cop	_	prpos=Vuc|uppos=EJ
4	coustume	coutume	NOUN	_	Number=Sing	0	root	_	prpos=Nc|uppos=NCS
5	[que	que	SCONJ	_	_	19	mark	_	prpos=Cs|uppos=CONJS
6	comme]	comme	SCONJ	_	_	9	mark	_	prpos=Cs|uppos=CONJS
7	l'	le	DET	_	Definite=Def|PronType=Art	8	det	_	prpos=Da|uppos=D
8	en	on	PRON	_	PronType=Prs	9	nsubj	_	prpos=Pp|uppos=PRO
9	plede	plaider	VERB	_	Number=Sing|Person=3|VerbForm=Fin	19	advcl	_	prpos=Vvc|uppos=VJ
10	de	de	ADP	_	_	11	case	_	prpos=S|uppos=P
11	possession	possession	NOUN	_	Number=Sing	9	obl	_	prpos=Nc|uppos=NCS
12	de	de	ADP	_	_	13	case	_	prpos=S|uppos=P
13	heritage	héritage	NOUN	_	Number=Sing	11	nmod	_	prpos=Nc|SpaceAfter=No|uppos=NCS
14	,	,	PUNCT	_	_	9	punct	_	join=left|prpos=Fw|uppos=PON
15	l'	le	DET	_	Definite=Def|PronType=Art	16	det	_	prpos=Da|uppos=D
16	en	on	PRON	_	PronType=Prs	19	nsubj	_	prpos=Pp|uppos=PRO
17	le	il	PRON	_	PronType=Prs	19	obj	_	prpos=Pp|uppos=PRO
18	puet	pouvoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	19	aux	_	prpos=Vvc|uppos=MDJ
19	[terminer]	terminer	VERB	_	VerbForm=Inf	4	csubj	_	prpos=Vvn|uppos=VX
20	par	par	ADP	_	_	21	case	_	prpos=S|uppos=P
21	la	là	ADV	_	_	19	advmod	_	prpos=Rg|uppos=ADV
22	ou	où	PRON	_	PronType=Rel	25	obl	_	prpos=Pr|uppos=WPRO
23	l'	le	DET	_	Definite=Def|PronType=Art	24	det	_	prpos=Dn|uppos=D
24	en	on	PRON	_	PronType=Prs	25	nsubj	_	prpos=Pp|uppos=PRO
25	veut	vouloir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	21	acl:relcl	_	prpos=Vvc|uppos=VJ
26	et	et	CCONJ	_	_	27	cc	_	prpos=Cc|uppos=CONJO
27	demander	demander	VERB	_	VerbForm=Inf	19	conj	_	prpos=Vvn|uppos=VX
28	devise	devise	NOUN	_	Number=Sing	27	obj	_	prpos=Nc|SpaceAfter=No|uppos=NCS
29	,	,	PUNCT	_	_	19	punct	_	join=left|prpos=Fw|uppos=PON
30	se	si	SCONJ	_	_	33	mark	_	prpos=Cs|uppos=CONJS
31	il	il	PRON	_	PronType=Prs	33	expl	_	prpos=Pp|uppos=PRO
32	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	33	aux:pass	_	prpos=Vuc|uppos=EJ
33	[conneü	connaître	VERB	_	Tense=Past|VerbForm=Part	19	advcl	_	prpos=Ge|uppos=VPP
34	que	que	SCONJ	_	_	39	mark	_	prpos=Cs|uppos=CONJS
35	il	il	PRON	_	PronType=Prs	39	nsubj	_	prpos=Pp|uppos=PRO
36	en]	en	PRON	_	PronType=Prs	39	obj	_	prpos=Pp|uppos=PRO
37	ait	avoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	39	aux	_	prpos=Vuc|uppos=AJ
38	trop	trop	ADV	_	_	39	advmod	_	prpos=Rg|uppos=ADV
39	pris	prendre	VERB	_	Tense=Past|VerbForm=Part	33	ccomp	_	prpos=Ge|SpaceAfter=No|uppos=VPP
40	,	,	PUNCT	_	_	4	punct	_	join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 84	bgColor:blue
# visual-style 84	fgColor:white
# visual-style 93	bgColor:blue
# visual-style 93	fgColor:white
# visual-style 93 84 csubj	color:blue
1	Item	item	ADV	_	_	60	advmod	_	prpos=Rg|SpaceAfter=No|uppos=ADV
2	,	,	PUNCT	_	_	1	punct	_	join=left|prpos=Fw|uppos=PON
3	se	si	SCONJ	_	_	6	mark	_	prpos=Cs|uppos=CONJS
4	un	un	DET	_	Definite=Ind|PronType=Art	5	det	_	prpos=Dn|uppos=D
5	homme	homme	NOUN	_	Number=Sing	6	nsubj	_	corr_head=#mg|prpos=Nc|uppos=NCS
6	a	avoir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	60	advcl	_	prpos=Vuc|uppos=AJ
7	hoir	hoir	NOUN	_	Number=Sing	6	obj	_	prpos=Nc|uppos=NCS
8	masle	mâle	ADJ	_	_	7	amod	_	prpos=Ag|uppos=ADJ
9	de	de	ADP	_	_	12	case	_	prpos=S|uppos=P
10	sa	son	DET	_	Poss=Yes	12	det	_	prpos=Ds|uppos=DZ
11	premiere	premier	ADJ	_	NumType=Ord	12	amod	_	prpos=Mo|uppos=ADJNUM
12	fame	femme	NOUN	_	Number=Sing	6	obl	_	prpos=Nc|uppos=NCS
13	et	et	CCONJ	_	_	16	cc	_	prpos=Cc|uppos=CONJO
14	el[e]	il	PRON	_	PronType=Prs	16	nsubj	_	prpos=Pp|uppos=PRO
15	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	16	aux	_	prpos=Vuc|uppos=EJ
16	morte	mourir	VERB	_	Tense=Past|VerbForm=Part	6	conj	_	prpos=Ge|SpaceAfter=No|uppos=VPP
17	,	,	PUNCT	_	_	6	punct	_	join=left|prpos=Fw|uppos=PON
18	et	et	CCONJ	_	_	21	cc	_	prpos=Cc|uppos=CONJO
19	il	il	PRON	_	PronType=Prs	21	nsubj	_	prpos=Pp|uppos=PRO
20	en	en	PRON	_	PronType=Prs	23	nmod	_	prpos=Pp|uppos=PRO
21	prent	prendre	VERB	_	Number=Sing|Person=3|VerbForm=Fin	6	conj	_	prpos=Vvc|uppos=VJ
22	une	un	DET	_	Definite=Ind|PronType=Art	23	det	_	prpos=Dn|uppos=D
23	autre	autre	PRON	_	PronType=Ind	21	obj	_	prpos=Pi|uppos=PRO
24	et	et	CCONJ	_	_	26	cc	_	prpos=Cc|uppos=CONJO
25	li	il	PRON	_	PronType=Prs	26	iobj	_	prpos=Pp|uppos=PRO
26	fet	faire	VERB	_	Number=Sing|Person=3|VerbForm=Fin	6	conj	_	prpos=Vvc|uppos=VJ
27	don	don	NOUN	_	Number=Sing	26	obj	_	prpos=Nc|uppos=NCS
28	de	de	ADP	_	_	30	case	_	prpos=S|uppos=P
29	son	son	DET	_	Poss=Yes	30	det	_	prpos=Ds|uppos=DZ
30	heritage	héritage	NOUN	_	Number=Sing	27	nmod	_	prpos=Nc|uppos=NCS
31	a	à	ADP	_	_	32	case	_	prpos=S|uppos=P
32	lié	il	PRON	_	PronType=Prs	26	dislocated	_	prpos=Pp|uppos=PRO
33	et	et	CCONJ	_	_	36	cc	_	prpos=Cc|uppos=CONJO
34	a	à	ADP	_	_	36	case	_	prpos=S|uppos=P
35	les	le	DET	_	Definite=Def|PronType=Art	36	det	_	prpos=Da|uppos=D
36	enfans	enfant	NOUN	_	Number=Plur	32	conj	_	prpos=Nc|uppos=NCPL
37	qui	qui	PRON	_	PronType=Rel	40	nsubj	_	prpos=Pr|uppos=WPRO
38	de	de	ADP	_	_	39	case	_	prpos=S|uppos=P
39	lié	il	PRON	_	PronType=Prs	40	obl	_	prpos=Pp|uppos=PRO
40	istront	issir	VERB	_	Number=Plur|Person=3|VerbForm=Fin	36	acl:relcl	_	prpos=Vvc|uppos=VJ
41	et	et	CCONJ	_	_	45	cc	_	prpos=Cc|uppos=CONJO
42	il	il	PRON	_	PronType=Prs	45	nsubj	_	prpos=Pp|uppos=PRO
43	li	il	PRON	_	PronType=Prs	45	iobj	_	prpos=Pp|uppos=PRO
44	en	en	PRON	_	PronType=Prs	47	nmod	_	prpos=Pp|uppos=PRO
45	fet	faire	VERB	_	Number=Sing|Person=3|VerbForm=Fin	6	conj	_	prpos=Vvc|uppos=VJ
46	bonne	bon	ADJ	_	_	47	amod	_	prpos=Ag|uppos=ADJ
47	chartre	chartre	NOUN	_	Number=Sing	45	obj	_	prpos=Nc|SpaceAfter=No|uppos=NCS
48	,	,	PUNCT	_	_	6	punct	_	join=left|prpos=Fw|uppos=PON
49	et	et	CCONJ	_	_	51	cc	_	prpos=Cc|uppos=CONJO
50	puis	puis	ADV	_	_	51	advmod	_	prpos=Rg|uppos=ADV
51	tient	tenir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	6	conj	_	prpos=Vvc|uppos=VJ
52	le	le	DET	_	Definite=Def|PronType=Art	53	det	_	prpos=Da|uppos=D
53	pere	père	NOUN	_	Number=Sing	51	nsubj	_	prpos=Nc|uppos=NCS
54	la	le	DET	_	Definite=Def|PronType=Art	55	det	_	prpos=Da|uppos=D
55	sesine	saisine	NOUN	_	Number=Sing	51	obj	_	prpos=Nc|uppos=NCS
56	toute	tout	DET	_	Definite=Ind	58	det	_	prpos=Di|uppos=D
57	sa	son	DET	_	Poss=Yes	58	det	_	prpos=Ds|uppos=DZ
58	vie	vie	NOUN	_	Number=Sing	51	obl	_	prpos=Nc|SpaceAfter=No|uppos=NCS
59	,	,	PUNCT	_	_	6	punct	_	join=left|prpos=Fw|uppos=PON
60	jugié	juger	VERB	_	Tense=Past|VerbForm=Part	0	root	_	prpos=Ge|uppos=VPP
61	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	60	aux:pass	_	prpos=Vuc|uppos=EJ
62	en	en	ADP	_	_	64	case	_	prpos=S|uppos=P
63	l'	le	DET	_	Definite=Def|PronType=Art	64	det	_	prpos=Da|uppos=D
64	eschequier	échiquier	NOUN	_	Number=Sing	60	obl	_	prpos=Nc|uppos=NCS
65	que	que	SCONJ	_	_	69	mark	_	prpos=Cs|uppos=CONJS
66	cel	cil	DET	_	PronType=Dem	67	det	_	prpos=Dd|uppos=D
67	don	don	NOUN	_	Number=Sing	69	nsubj	_	prpos=Nc|uppos=NCS
68	ne	ne	ADV	_	Polarity=Neg	69	advmod	_	prpos=Rp|uppos=NEG
69	vaut	valoir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	60	ccomp	_	prpos=Vvc|uppos=VJ
70	riens	rien	PRON	_	PronType=Ind	69	obj	_	prpos=Pi|SpaceAfter=No|uppos=PRO
71	,	,	PUNCT	_	_	69	punct	_	join=left|prpos=Fw|uppos=PON
72	ains	ains	ADV	_	_	74	advmod	_	prpos=Rg|uppos=ADV
73	l'	il	PRON	_	PronType=Prs	74	obj	_	prpos=Pp|uppos=PRO
74	enportera	emporter	VERB	_	Number=Sing|Person=3|VerbForm=Fin	69	conj	_	prpos=Vvc|uppos=VJ
75	li	le	DET	_	Definite=Def|PronType=Art	76	det	_	prpos=Da|uppos=D
76	hoir	hoir	NOUN	_	Number=Sing	74	nsubj	_	prpos=Nc|uppos=NCS
77	de	de	ADP	_	_	80	case	_	prpos=S|uppos=P
78	la	le	DET	_	Definite=Def|PronType=Art	80	det	_	prpos=Da|uppos=D
79	premiere	premier	ADJ	_	NumType=Ord	80	amod	_	prpos=Mo|uppos=ADJ
80	fame	femme	NOUN	_	Number=Sing	76	nmod	_	prpos=Nc|SpaceAfter=No|uppos=NCS
81	;	;	PUNCT	_	_	69	punct	_	join=left|prpos=Fw|uppos=PON
82	mes	mais	CCONJ	_	_	93	cc	_	prpos=Cc|uppos=CONJO
83	qui	qui	PRON	_	PronType=Rel	84	nsubj	_	prpos=Pr|uppos=WPRO
84	voudroit	vouloir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	93	csubj	_	prpos=Vvc|uppos=VJ
85	que	que	SCONJ	_	_	88	mark	_	prpos=Cs|uppos=CONJS
86	cel	cil	DET	_	PronType=Dem	87	det	_	prpos=Dd|uppos=D
87	don	don	NOUN	_	Number=Sing	88	nsubj	_	prpos=Nc|uppos=NCS
88	fust	être	VERB	_	Number=Sing|Person=3|VerbForm=Fin	84	ccomp	_	prpos=Vuc|uppos=EJ
89	de	de	ADP	_	_	90	case	_	prpos=S|uppos=P
90	value	value	NOUN	_	Number=Sing	88	obl	_	prpos=Nc|SpaceAfter=No|uppos=NCS
91	,	,	PUNCT	_	_	84	punct	_	join=left|prpos=Fw|uppos=PON
92	si	si	ADV	_	_	93	advmod	_	prpos=Rg|uppos=ADV
93	meist	mettre	VERB	_	Number=Sing|Person=3|VerbForm=Fin	69	conj	_	prpos=Vvc|uppos=VJ
94	l'	le	DET	_	Definite=Def|PronType=Art	95	det	_	prpos=Da|uppos=D
95	enfant	enfant	NOUN	_	Number=Sing	93	obj	_	prpos=Nc|uppos=NCS
96	d'	de	ADP	_	_	97	case	_	prpos=S|uppos=P
97	icele	cil	PRON	_	PronType=Dem	95	nmod	_	prpos=Pd|uppos=PRO
98	en	en	ADP	_	_	100	case	_	prpos=S|uppos=P
99	la	le	DET	_	Definite=Def|PronType=Art	100	det	_	prpos=Da|uppos=D
100	sesine	saisine	NOUN	_	Number=Sing	93	obl	_	prpos=Nc|uppos=NCS
101	de	de	ADP	_	_	103	case	_	prpos=S|uppos=P
102	le	le	DET	_	Definite=Def|PronType=Art	103	det	_	prpos=Da|uppos=D
103	don	don	NOUN	_	Number=Sing	100	nmod	_	prpos=Nc|uppos=NCS
104	hors	hors	ADV	_	ExtPos=ADP	108	case	_	prpos=Rg|uppos=ADV
105	de	de	ADP	_	_	104	fixed	_	prpos=S|uppos=P
106	aveques	avec	ADP	_	_	108	case	_	prpos=S|uppos=P
107	son	son	DET	_	Poss=Yes	108	det	_	prpos=Ds|uppos=DZ
108	pere	père	NOUN	_	Number=Sing	93	obl	_	prpos=Nc|SpaceAfter=No|uppos=NCS
109	.	.	PUNCT	_	_	60	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


