

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This relation is universal.

5 nodes (0%) are attached to their parents as `discourse`.

4 instances of `discourse` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.6.

The following 4 pairs of parts of speech are connected with `discourse`: [gl-pos/NOUN]()-[gl-pos/ADV]() (2; 40% instances), [gl-pos/ADV]()-[gl-pos/INTJ]() (1; 20% instances), [gl-pos/NOUN]()-[gl-pos/INTJ]() (1; 20% instances), [gl-pos/VERB]()-[gl-pos/INTJ]() (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	de_feito	de_feito	ADV	La0	_	6	discourse	_	_
2	,	,	PUNCT	Q,	_	1	punct	_	_
3	de	de	ADP	P	AdpType=Prep	6	case	_	_
4	os	o	DET	Ddmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
5	cinco	cinco	NUM	Ncdmp	Gender=Masc|Number=Plur|NumType=Card	6	nummod	_	_
6	concelleiros	concelleiro	NOUN	Scmp	Gender=Masc|Number=Plur	0	root	_	_
7	que	que	PRON	Tnmp	Gender=Masc|Number=Plur|PronType=Rel	8	nsubj	_	_
8	somos	ser	VERB	Vpi10p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	6	acl	_	_
9	,	,	PUNCT	Q,	_	8	punct	_	_
10	tres	tres	NUM	Ncnmp	Gender=Masc|Number=Plur|NumType=Card	11	nsubj	_	_
11	temos	ter	VERB	Vpi10p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	8	conj	_	_
12	esa	ese	DET	Edfs	Gender=Fem|Number=Sing|PronType=Dem	13	det	_	_
13	tendencia	tendencia	NOUN	Scfs	Gender=Fem|Number=Sing	11	dobj	_	_
14	.	.	PUNCT	Q.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 discourse	color:blue
1	así	así	ADV	Wn	_	2	advmod	_	_
2	arranca	arrancar	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	Sancho_Panza	Sancho_Panza	PROPN	Spm0	Gender=Masc	2	nsubj	_	_
4	cando	cando	ADV	Wr	PronType=Rel	5	mark	_	_
5	toma	tomar	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	advcl	_	_
6	posesión	posesión	NOUN	Scfs	Gender=Fem|Number=Sing	5	dobj	_	_
7	de	de	ADP	P	AdpType=Prep	10	case	_	_
8	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
9	súa	seu	DET	Md3sfs	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes	10	det	_	_
10	Insua_Barataria	Insua_Barataria	PROPN	Spfs	Gender=Fem|Number=Sing	6	nmod	_	_
11	,	,	PUNCT	Q,	_	2	punct	_	_
12	"	"	PUNCT	Q"	_	14	punct	_	_
13	¡	¡	PUNCT	Q¡	_	14	punct	_	_
14	ouh	ouh	INTJ	Y	_	17	discourse	_	_
15	,	,	PUNCT	Q,	_	14	punct	_	_
16	perpetuo	perpetuo	ADJ	A0ms	Gender=Masc|Number=Sing	17	amod	_	_
17	descubridor	descubridor	NOUN	Scms	Gender=Masc|Number=Sing	2	parataxis	_	_
18	de	de	ADP	P	AdpType=Prep	20	case	_	_
19	as	o	DET	Ddfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	20	det	_	_
20	antípodas	antípoda	NOUN	Scfp	Gender=Fem|Number=Plur	17	nmod	_	_
21	,	,	PUNCT	Q,	_	22	punct	_	_
22	facho	facho	NOUN	Scms	Gender=Masc|Number=Sing	17	conj	_	_
23	de	de	ADP	P	AdpType=Prep	25	case	_	_
24	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	mundo	mundo	NOUN	Scms	Gender=Masc|Number=Sing	22	nmod	_	_
26	,	,	PUNCT	Q,	_	22	punct	_	_
27	ollo	ollo	NOUN	Scms	Gender=Masc|Number=Sing	17	conj	_	_
28	de	de	ADP	P	AdpType=Prep	30	case	_	_
29	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	30	det	_	_
30	ceo	ceo	NOUN	Scms	Gender=Masc|Number=Sing	27	nmod	_	_
31	,	,	PUNCT	Q,	_	27	punct	_	_
32	abaneo	abaneo	NOUN	Scms	Gender=Masc|Number=Sing	17	conj	_	_
33	dóce	dóce	ADJ	A0ms	Gender=Masc|Number=Sing	32	amod	_	_
34	de	de	ADP	P	AdpType=Prep	36	case	_	_
35	as	o	DET	Ddfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	36	det	_	_
36	cantimploras	cantimplora	NOUN	Scfp	Gender=Fem|Number=Plur	32	nmod	_	_
37	,	,	PUNCT	Q,	_	32	punct	_	_
38	Timbrio	Timbrio	PROPN	Spm0	Gender=Masc	17	conj	_	_
39	aqui	aqui	ADV	Wn	_	38	advmod	_	_
40	,	,	PUNCT	Q,	_	38	punct	_	_
41	Febo	Febo	PROPN	Spm0	Gender=Masc	17	conj	_	_
42	alá	alá	ADV	Wn	_	41	advmod	_	_
43	,	,	PUNCT	Q,	_	41	punct	_	_
44	tirador	tirador	NOUN	Scms	Gender=Masc|Number=Sing	17	conj	_	_
45	acó	acó	ADV	Wn	_	44	advmod	_	_
46	,	,	PUNCT	Q,	_	44	punct	_	_
47	menciñeiro	menciñeiro	NOUN	Scms	Gender=Masc|Number=Sing	17	conj	_	_
48	acolá	acolá	ADV	Wn	_	47	advmod	_	_
49	,	,	PUNCT	Q,	_	47	punct	_	_
50	pai	pai	NOUN	Scms	Gender=Masc|Number=Sing	17	conj	_	_
51	de	de	ADP	P	AdpType=Prep	53	case	_	_
52	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	53	det	_	_
53	poesía	poesía	NOUN	Scfs	Gender=Fem|Number=Sing	50	nmod	_	_
54	,	,	PUNCT	Q,	_	50	punct	_	_
55	inventor	inventor	NOUN	Scms	Gender=Masc|Number=Sing	17	conj	_	_
56	de	de	ADP	P	AdpType=Prep	58	case	_	_
57	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	58	det	_	_
58	música	música	NOUN	Scfs	Gender=Fem|Number=Sing	55	nmod	_	_
59	,	,	PUNCT	Q,	_	55	punct	_	_
60	ti	ti	PRON	Rtn2ms	Case=Nom|Gender=Masc|Number=Sing|Person=2	17	conj	_	_
61	que	que	PRON	Tnms	Gender=Masc|Number=Sing|PronType=Rel	63	nsubj	_	_
62	decote	decote	ADV	Wn	_	63	advmod	_	_
63	alboreas	alborear	VERB	Vpi20s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	60	acl	_	_
64	e	e	CONJ	Cc	_	63	cc	_	_
65	,	,	PUNCT	Q,	_	68	punct	_	_
66	aínda_que	aínda_que	SCONJ	Lcs	_	68	mark	_	_
67	o	o	PRON	Raa3ms	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Clit	68	dobj	_	_
68	semella	semellar	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	72	advcl	_	_
69	,	,	PUNCT	Q,	_	68	punct	_	_
70	endexamais	endexamais	ADV	Wn	_	72	advmod	_	_
71	te	te	PRON	Raa2ms	Case=Acc|Gender=Masc|Number=Sing|Person=2|PronType=Clit	72	nsubj	_	_
72	escureces	escurecer	VERB	Vpi20s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	63	conj	_	_
73	!	!	PUNCT	Q!	_	68	punct	_	_
74	"	"	PUNCT	Q"	_	63	punct	_	_
75	.	.	PUNCT	Q.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 discourse	color:blue
1	e	e	CONJ	Cc	_	8	mark	_	_
2	un	un	DET	Dims	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	paisano	paisano	NOUN	Scms	Gender=Masc|Number=Sing	8	nsubj	_	_
4	,	,	PUNCT	Q,	_	8	punct	_	_
5	desde	desde	ADP	P	AdpType=Prep	7	case	_	_
6	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	mostrador	mostrador	NOUN	Scms	Gender=Masc|Number=Sing	8	nmod	_	_
8	di	dicir	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	:	:	PUNCT	Q:	_	8	punct	_	_
10	"	"	PUNCT	Q"	_	12	punct	_	_
11	pois	pois	ADV	Wn	_	12	advmod	_	_
12	si	si	ADV	Wn	_	8	parataxis	_	_
13	,	,	PUNCT	Q,	_	12	punct	_	_
14	ho	ho	INTJ	Y	_	12	discourse	_	_
15	...	...	PUNCT	Q...	_	12	punct	_	_
16	"	"	PUNCT	Q"	_	12	punct	_	_
17	e	e	CONJ	Cc	_	8	cc	_	_
18	outra	outro	DET	Idfs	Gender=Fem|Number=Sing|PronType=Ind	19	det	_	_
19	pausa	pausa	NOUN	Scfs	Gender=Fem|Number=Sing	8	conj	_	_
20	longa	longo	ADJ	A0fs	Gender=Fem|Number=Sing	19	amod	_	_
21	.	.	PUNCT	Q.	_	8	punct	_	_

~~~


