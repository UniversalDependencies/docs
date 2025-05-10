---
layout: base
title:  'Statistics of parataxis in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `parataxis`

This relation is universal.

35 nodes (0%) are attached to their parents as `parataxis`.

35 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.0285714285714.

The following 3 pairs of parts of speech are connected with `parataxis`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (21; 60% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (13; 37% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 parataxis	color:blue
1	Et	et	CCONJ	_	_	5	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	sur	sur	ADP	_	_	3	case	_	gold_pos=ADP|prpos=S|uppos=P
3	ce	ce	PRON	_	PronType=Dem	5	obl	_	gold_pos=PRON|prpos=Pd|uppos=PRO
4	le	il	PRON	_	PronType=Prs	5	obj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
5	prierent	prier	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
6	d'	de	ADP	_	_	8	mark	_	gold_pos=ADP|prpos=S|SpaceAfter=No|uppos=P
7	en	en	PRON	_	PronType=Prs	10	nmod	_	gold_pos=PRON|join=left|prpos=Pp|uppos=PRO
8	avoir	avoir	VERB	_	VerbForm=Inf	5	xcomp	_	gold_pos=VERB|prpos=Vun|uppos=AX
9	la	le	DET	_	Definite=Def	10	det	_	gold_pos=DET|prpos=Da|uppos=D
10	veue	vue	NOUN	_	_	8	obj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
11	,	,	PUNCT	_	_	8	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
12	ce	ce	PRON	_	PronType=Dem	5	parataxis	_	gold_pos=PRON|prpos=Pd|uppos=PRO
13	que	que	PRON	_	PronType=Rel	15	obj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
14	ilz	il	PRON	_	PronType=Prs	15	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
15	fyst	faire	VERB	_	VerbForm=Fin	12	acl:relcl	_	gold_pos=VERB|prpos=Vvc|SpaceAfter=No|uppos=VJ
16	,	,	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis	color:blue
1	«	«	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON
2	Non	non	ADV	_	Polarity=Neg	3	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
3	feroy	faire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|SpaceAfter=No|uppos=VJ
4	,	,	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
5	»	»	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON
6	se	ce	PRON	_	PronType=Prs	7	obj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
7	dyst	dire	VERB	_	VerbForm=Fin	3	parataxis	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
8	elle	il	PRON	_	PronType=Prs	7	nsubj	_	gold_pos=PRON|prpos=Pp|SpaceAfter=No|uppos=PRO
9	,	,	PUNCT	_	_	7	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 65	bgColor:blue
# visual-style 65	fgColor:white
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 46 65 parataxis	color:blue
1	le	le	ADP	_	_	3	case	_	gold_pos=ADP|prpos=S|uppos=P
2	lequel	lequel	DET	_	_	3	det	_	gold_pos=DET|prpos=Dr|uppos=WD
3	procureur	procureur	NOUN	_	_	5	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
4	avouns	avoir	AUX	_	VerbForm=Fin	5	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
5	respondu	répondre	VERB	_	VerbForm=Part	0	root	_	gold_pos=VERB|prpos=Ge|uppos=VPP
6	ne	ne	ADV	_	Polarity=Neg	7	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
7	pouvoir	pouvoir	VERB	_	VerbForm=Inf	5	ccomp	_	gold_pos=AUX|prpos=Vvn|uppos=MDX
8	alcunement	aucunement	ADV	_	_	7	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
9	proceder	procéder	VERB	_	VerbForm=Inf	7	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
10	a	à	ADP	_	_	12	case	_	gold_pos=ADP|prpos=S|uppos=P|wordform=à
11	le	le	DET	_	Definite=Def	12	det	_	gold_pos=DET|prpos=Da|uppos=D
12	faict	fait	NOUN	_	_	9	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
13	de	de	ADP	_	_	15	case	_	gold_pos=ADP|prpos=S|uppos=P
14	ladite	ledit	DET	_	Definite=Ind	15	det	_	gold_pos=DET|prpos=Di|uppos=D
15	matyere	matière	NOUN	_	_	12	nmod	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
16	,	,	PUNCT	_	_	9	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
17	entendu	entendre	VERB	_	ExtPos=SCONJ|VerbForm=Part	21	mark	_	gold_pos=VERB|prpos=Ge|uppos=VPP
18	que	que	SCONJ	_	_	17	fixed	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
19	nous	nous	PRON	_	PronType=Prs	21	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
20	avouns	avoir	AUX	_	VerbForm=Fin	21	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
21	trouvey	trouver	VERB	_	VerbForm=Part	5	advcl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
22	par	par	ADP	_	_	24	case	_	gold_pos=ADP|prpos=S|uppos=P
23	les	le	DET	_	Definite=Def	24	det	_	gold_pos=DET|prpos=Da|uppos=D
24	recordz	record	NOUN	_	Number=Plur	21	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
25	et	et	CCONJ	_	_	26	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
26	regystres	registre	NOUN	_	Number=Plur	24	conj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
27	de	de	ADP	_	_	29	case	_	gold_pos=ADP|prpos=S|uppos=P
28	la	le	DET	_	Definite=Def	29	det	_	gold_pos=DET|prpos=Da|uppos=D
29	cour	cour	NOUN	_	_	24	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
30	de	de	ADP	_	_	32	case	_	gold_pos=ADP|prpos=S|uppos=P
31	ladite	ledit	DET	_	Definite=Ind	32	det	_	gold_pos=DET|prpos=Di|uppos=D
32	Majesté	majesté	NOUN	_	_	29	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
33	en	en	ADP	_	_	35	case	_	gold_pos=ADP|prpos=S|uppos=P
34	cestedite	cedit	DET	_	Definite=Ind	35	det	_	gold_pos=DET|prpos=Di|uppos=D
35	isle	île	NOUN	_	_	29	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
36	que	que	SCONJ	_	_	46	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
37	le	le	DET	_	Definite=Def	38	det	_	gold_pos=DET|prpos=Da|uppos=D
38	baillyf	bailli	NOUN	_	_	46	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
39	et	et	CCONJ	_	_	40	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
40	jurés	juré	NOUN	_	Number=Plur	38	conj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
41	precedenz	précédent	ADJ	_	_	40	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
42	par	par	ADP	_	_	44	case	_	gold_pos=ADP|prpos=S|uppos=P
43	cy	ci	ADV	_	_	44	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
44	devant	devant	ADV	_	_	46	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
45	ont	avoir	AUX	_	VerbForm=Fin	46	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
46	certiffié	certifier	VERB	_	VerbForm=Part	21	ccomp	_	gold_pos=VERB|prpos=Ge|uppos=VPP
47	voz	votre	DET	_	_	48	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
48	honneurs	honneur	NOUN	_	Number=Plur	46	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
49	de	de	ADP	_	_	52	case	_	gold_pos=ADP|prpos=S|uppos=P
50	tout	tout	DET	_	Definite=Ind	52	det	_	gold_pos=DET|prpos=Di|uppos=Q
51	l'	le	DET	_	Definite=Def	52	det	_	gold_pos=DET|prpos=Da|SpaceAfter=No|uppos=D
52	entyer	entier	NOUN	_	_	48	nmod	_	gold_pos=NOUN|join=left|prpos=Nc|uppos=NCS
53	et	et	CCONJ	_	_	54	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
54	effect	effet	NOUN	_	_	52	conj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
55	de	de	ADP	_	_	57	case	_	gold_pos=ADP|prpos=S|uppos=P
56	la	le	DET	_	Definite=Def	57	det	_	gold_pos=DET|prpos=Da|uppos=D
57	matyere	matière	NOUN	_	_	52	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
58	de	de	ADP	_	_	60	case	_	gold_pos=ADP|prpos=S|uppos=P
59	ledit	ledit	DET	_	Definite=Ind	60	det	_	gold_pos=DET|prpos=Di|uppos=D
60	prisonniers	prisonnier	NOUN	_	Number=Plur	57	nmod	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCPL
61	,	,	PUNCT	_	_	46	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
62	qui	qui	PRON	_	PronType=Ind	65	nsubj	_	gold_pos=PRON|prpos=Pi|uppos=WPRO
63	est	être	AUX	_	VerbForm=Fin	65	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
64	la	le	DET	_	Definite=Def	65	det	_	gold_pos=DET|prpos=Da|uppos=D
65	cause	cause	NOUN	_	_	46	parataxis	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
66	pourquoy	pourquoi	ADV	_	_	72	advmod	_	gold_pos=ADV|prpos=Rg|uppos=WH
67	n'	ne	ADV	_	Polarity=Neg	72	advmod	_	gold_pos=ADV|prpos=Rp|SpaceAfter=No|uppos=NEG
68	a	avoir	AUX	_	VerbForm=Fin	72	aux	_	gold_pos=AUX|join=left|prpos=Vuc|uppos=AJ
69	esté	être	AUX	_	VerbForm=Part	72	aux:pass	_	gold_pos=AUX|prpos=Ge|uppos=EPP
70	plus	plus	ADV	_	_	72	advmod	_	gold_pos=ADV|prpos=Rg|uppos=QR
71	oultre	outre	ADV	_	_	72	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
72	procedé	procéder	VERB	_	VerbForm=Part	65	acl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
73	a	à	ADP	_	_	75	case	_	gold_pos=ADP|prpos=S|uppos=P|wordform=à
74	ledit	ledit	DET	_	Definite=Ind	75	det	_	gold_pos=DET|prpos=Di|uppos=D
75	faict	fait	NOUN	_	_	72	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
76	,	,	PUNCT	_	_	72	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
77	consideré	considérer	VERB	_	ExtPos=SCONJ|VerbForm=Part	89	mark	_	gold_pos=VERB|prpos=Ge|uppos=VPP
78	que	que	SCONJ	_	_	77	fixed	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
79	nostre	notre	DET	_	_	80	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
80	gouverneur	gouverneur	NOUN	_	_	89	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
81	et	et	CCONJ	_	_	82	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
82	cappitaine	capitaine	NOUN	_	Number=Plur	80	conj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCPL
83	,	,	PUNCT	_	_	80	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
84	baillyf	bailli	NOUN	_	_	80	conj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
85	et	et	CCONJ	_	_	86	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
86	jurés	juré	NOUN	_	Number=Plur	80	conj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
87	n'	ne	ADV	_	Polarity=Neg	89	advmod	_	gold_pos=ADV|prpos=Rp|SpaceAfter=No|uppos=NEG
88	ont	avoir	AUX	_	VerbForm=Fin	89	aux	_	gold_pos=AUX|join=left|prpos=Vuc|uppos=AJ
89	eu	avoir	VERB	_	VerbForm=Part	72	advcl	_	gold_pos=VERB|prpos=Ge|uppos=APP
90	congnoissance	connaissance	NOUN	_	_	89	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
91	ny	ni	CCONJ	_	_	92	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
92	response	réponse	NOUN	_	_	90	conj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
93	de	de	ADP	_	_	95	case	_	gold_pos=ADP|prpos=S|uppos=P
94	le	le	DET	_	Definite=Def	95	det	_	gold_pos=DET|prpos=Da|uppos=D
95	voulloir	vouloir	NOUN	_	_	90	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
96	de	de	ADP	_	_	98	case	_	gold_pos=ADP|prpos=S|uppos=P
97	vos	votre	DET	_	_	98	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
98	honneurs	honneur	NOUN	_	Number=Plur	95	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
99	suivant	suivant	ADP	_	_	101	case	_	gold_pos=ADP|prpos=S|uppos=P
100	l'	le	DET	_	Definite=Def	101	det	_	gold_pos=DET|prpos=Da|SpaceAfter=No|uppos=D
101	effect	effect	NOUN	_	_	89	obl	_	gold_pos=NOUN|join=left|prpos=Nc|uppos=NCS
102	de	de	ADP	_	_	104	case	_	gold_pos=ADP|prpos=S|uppos=P
103	le	le	DET	_	Definite=Def	104	det	_	gold_pos=DET|prpos=Da|uppos=D
104	procés	procès	NOUN	_	_	101	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
105	a	à	ADP	_	_	106	case	_	gold_pos=ADP|prpos=S|uppos=P
106	vous	vous	PRON	_	PronType=Prs	107	obl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
107	envoyé	envoyer	VERB	_	VerbForm=Part	104	acl	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
108	.	.	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


