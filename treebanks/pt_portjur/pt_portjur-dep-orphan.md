---
layout: base
title:  'Statistics of orphan in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Relations: `orphan`

This relation is universal.

4 nodes (0%) are attached to their parents as `orphan`.

4 instances of `orphan` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 4 pairs of parts of speech are connected with `orphan`: <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-ADV.html">ADV</a></tt> (1; 25% instances), <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt> (1; 25% instances), <tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 84	bgColor:blue
# visual-style 84	fgColor:white
# visual-style 86	bgColor:blue
# visual-style 86	fgColor:white
# visual-style 86 84 orphan	color:blue
1	E	e	CCONJ	_	_	3	cc	_	_
2	mais	mais	ADV	_	_	3	advmod	_	_
3	importante	importante	ADJ	_	Number=Sing	0	root	_	SpaceAfter=No
4	:	:	PUNCT	_	_	7	punct	_	_
5	não	não	ADV	_	_	7	advmod	_	_
6	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
7	constatada	constatar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	3	parataxis	_	_
8	incapacidade	incapacidade	NOUN	_	Gender=Fem|Number=Sing	7	nsubj:pass	_	_
9	decorrente	decorrente	ADJ	_	Number=Sing	8	amod	_	_
10	de	de	ADP	_	_	12	case	_	_
11	tal	tal	DET	_	Number=Sing|PronType=Dem	12	det	_	_
12	moléstia	moléstia	NOUN	_	Gender=Fem|Number=Sing	9	obl	_	SpaceAfter=No
13	,	,	PUNCT	_	_	27	punct	_	_
14	pois	pois	SCONJ	_	_	27	mark	_	_
15	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	16	det	_	_
16	conclusões	conclusão	NOUN	_	Gender=Fem|Number=Plur	27	nsubj	_	_
17	de	de	ADP	_	_	19	case	_	_
18	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	perito	perito	NOUN	_	Gender=Masc|Number=Sing	16	nmod	_	_
20	em	em	ADP	_	_	21	case	_	_
21	que	que	PRON	_	PronType=Rel	22	obl	_	_
22	sugeriu	sugerir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	16	acl:relcl	_	_
23	alguma	algum	DET	_	Gender=Fem|Number=Sing|PronType=Ind	24	det	_	_
24	incapacidade	incapacidade	NOUN	_	Gender=Fem|Number=Sing	22	obj	_	SpaceAfter=No
25	,	,	PUNCT	_	_	22	punct	_	_
26	estiveram	estar	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	27	cop	_	_
27	baseadas	baseado	ADJ	_	Gender=Fem|Number=Plur|VerbForm=Part	7	advcl	_	_
28	em	em	ADP	_	_	30	case	_	_
29	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	30	det	_	_
30	sintoma	sintoma	NOUN	_	Gender=Masc|Number=Sing	27	obl	_	_
31	alegado	alegar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	30	acl	_	_
32	por	por	ADP	_	_	34	case	_	_
33	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	34	det	_	_
34	parte	parte	NOUN	_	Gender=Fem|Number=Sing	31	obl:agent	_	_
35	autora	autora	ADJ	_	Gender=Fem|Number=Sing	34	amod	_	SpaceAfter=No
36	,	,	PUNCT	_	_	38	punct	_	_
37	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	38	det	_	_
38	fadiga	fadiga	NOUN	_	Gender=Fem|Number=Sing	30	appos	_	SpaceAfter=No
39	,	,	PUNCT	_	_	38	punct	_	_
40	mas	mas	CCONJ	_	_	44	cc	_	_
41	não	não	ADV	_	_	44	advmod	_	_
42	em	em	ADP	_	_	44	case	_	_
43	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	44	det	_	_
44	moléstia	moléstia	NOUN	_	Gender=Fem|Number=Sing	27	conj	_	SpaceAfter=No
45	"	"	PUNCT	_	_	7	punct	_	SpaceAfter=No
46	,	,	PUNCT	_	_	52	punct	_	_
47	bem	bem	ADV	_	ExtPos=CCONJ	52	cc	_	_
48	como	como	CCONJ	_	_	47	fixed	_	_
49	que	que	SCONJ	_	_	52	discourse	_	_
50	não	não	ADV	_	_	52	advmod	_	_
51	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	52	expl	_	_
52	verificou	verificar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	conj	_	_
53	"	"	PUNCT	_	_	55	punct	_	SpaceAfter=No
54	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	55	det	_	_
55	comprovação	comprovação	NOUN	_	Gender=Fem|Number=Sing	52	nsubj	_	_
56	de	de	ADP	_	_	57	case	_	_
57	dano	dano	NOUN	_	Gender=Masc|Number=Sing	55	nmod	_	_
58	moral	moral	ADJ	_	Number=Sing	57	amod	_	_
59	em	em	ADP	_	_	60	case	_	_
60	razão	razão	NOUN	_	Gender=Fem|Number=Sing	57	nmod	_	_
61	de	de	ADP	_	_	64	case	_	_
62	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	64	det	_	_
63	simples	simples	ADJ	_	_	64	amod	_	_
64	fato	fato	NOUN	_	Gender=Masc|Number=Sing	60	nmod	_	_
65	de	de	ADP	_	_	67	mark	_	_
66	ter	ter	AUX	_	VerbForm=Inf	67	aux	_	_
67	contraído	contrair	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	64	acl	_	_
68	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	69	det	_	_
69	doença	doença	NOUN	_	Gender=Fem|Number=Sing	67	obj	_	SpaceAfter=No
70	,	,	PUNCT	_	_	71	punct	_	_
71	independentemente	independentemente	ADV	_	_	55	advmod	_	_
72	de	de	ADP	_	_	74	mark	_	_
73	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	74	expl:impers	_	_
74	perquirir	perquirir	VERB	_	VerbForm=Inf	71	acl	_	_
75	se	se	SCONJ	_	_	79	mark	_	_
76	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	79	cop	_	_
77	ou	ou	CCONJ	_	_	78	cc	_	_
78	não	não	ADV	_	_	76	conj	_	_
79	acidente	acidente	NOUN	_	Gender=Masc|Number=Sing	74	ccomp	_	_
80	em	em	ADP	_	_	81	case	_	_
81	serviço	serviço	NOUN	_	Gender=Masc|Number=Sing	79	nmod	_	SpaceAfter=No
82	"	"	PUNCT	_	_	55	punct	_	SpaceAfter=No
83	,	,	PUNCT	_	_	86	punct	_	_
84	tampouco	tampouco	ADV	_	_	86	orphan	_	_
85	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	86	det	_	_
86	ocorrência	ocorrência	NOUN	_	Gender=Fem|Number=Sing	7	conj	_	_
87	de	de	ADP	_	_	89	case	_	_
88	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	89	det	_	_
89	assédio	assédio	NOUN	_	Gender=Masc|Number=Sing	86	nmod	_	_
90	moral	moral	ADJ	_	Number=Sing	89	amod	_	SpaceAfter=No
91	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 29 orphan	color:blue
1	É	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux:pass	_	_
2	assegurado	assegurar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
3	a	a	ADP	_	_	6	case	_	_
4	todas	todo	DET	_	Gender=Fem|Number=Plur|PronType=Ind	6	det	_	_
5	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	_
6	mulheres	mulher	NOUN	_	Gender=Fem|Number=Plur	2	obl	_	_
7	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	acesso	acesso	NOUN	_	Gender=Masc|Number=Sing	2	nsubj:pass	_	_
9	a	a	ADP	_	_	11	case	_	_
10	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	_	_
11	programas	programa	NOUN	_	Gender=Masc|Number=Plur	8	nmod	_	_
12	e	e	CCONJ	_	_	15	cc	_	_
13	a	a	ADP	_	_	15	case	_	_
14	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	15	det	_	_
15	políticas	política	NOUN	_	Gender=Fem|Number=Plur	11	conj	_	_
16	de	de	ADP	_	_	17	case	_	_
17	saúde	saúde	NOUN	_	Gender=Fem|Number=Sing	15	nmod	_	_
18	de	de	ADP	_	_	20	case	_	_
19	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
20	mulher	mulher	NOUN	_	Gender=Fem|Number=Sing	17	nmod	_	_
21	e	e	CCONJ	_	_	23	cc	_	_
22	de	de	ADP	_	_	23	case	_	_
23	planejamento	planejamento	NOUN	_	Gender=Masc|Number=Sing	17	conj	_	_
24	reprodutivo	reprodutivo	ADJ	_	Gender=Masc|Number=Sing	23	amod	_	_
25	e	e	CCONJ	_	_	29	cc	_	SpaceAfter=No
26	,	,	PUNCT	_	_	29	punct	_	_
27	a	a	ADP	_	_	29	case	_	_
28	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	29	det	_	_
29	gestantes	gestante	NOUN	_	Gender=Fem|Number=Plur	31	orphan	_	SpaceAfter=No
30	,	,	PUNCT	_	_	29	punct	_	_
31	nutrição	nutrição	NOUN	_	Gender=Fem|Number=Sing	2	conj	_	_
32	adequada	adequado	ADJ	_	Gender=Fem|Number=Sing|VerbForm=Part	31	amod	_	SpaceAfter=No
33	,	,	PUNCT	_	_	34	punct	_	_
34	atenção	atenção	NOUN	_	Gender=Fem|Number=Sing	31	conj	_	_
35	humanizada	humanizado	ADJ	_	Gender=Fem|Number=Sing|VerbForm=Part	34	amod	_	_
36	a	a	ADP	_	_	38	case	_	_
37	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	38	det	_	_
38	gravidez	gravidez	NOUN	_	Gender=Fem|Number=Sing	34	nmod	_	SpaceAfter=No
39	,	,	PUNCT	_	_	42	punct	_	_
40	a	a	ADP	_	_	42	case	_	_
41	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	42	det	_	_
42	parto	parto	NOUN	_	Gender=Masc|Number=Sing	38	conj	_	_
43	e	e	CCONJ	_	_	46	cc	_	_
44	a	a	ADP	_	_	46	case	_	_
45	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	46	det	_	_
46	puerpério	puerpério	NOUN	_	Gender=Masc|Number=Sing	38	conj	_	_
47	e	e	CCONJ	_	_	48	cc	_	_
48	atendimento	atendimento	NOUN	_	Gender=Masc|Number=Sing	31	conj	_	_
49	pré-natal	pré-natal	NOUN	_	Gender=Masc|Number=Sing	48	nmod	_	SpaceAfter=No
50	,	,	PUNCT	_	_	51	punct	_	_
51	perinatal	perinatal	ADJ	_	Number=Sing	49	conj	_	_
52	e	e	CCONJ	_	_	53	cc	_	_
53	pós-natal	pós-natal	NOUN	_	Gender=Masc|Number=Sing	49	conj	_	_
54	integral	integral	ADJ	_	Number=Sing	48	amod	_	_
55	em	em	ADP	_	_	57	case	_	_
56	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	57	det	_	_
57	âmbito	âmbito	NOUN	_	Gender=Masc|Number=Sing	48	nmod	_	_
58	de	de	ADP	_	_	60	case	_	_
59	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	60	det	_	_
60	Sistema	Sistema	PROPN	_	_	57	nmod	_	_
61	Único	Único	PROPN	_	_	60	flat:name	_	_
62	de	de	ADP	_	_	63	case	_	_
63	Saúde	Saúde	PROPN	_	_	60	flat:name	_	SpaceAfter=No
64	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 52	bgColor:blue
# visual-style 52	fgColor:white
# visual-style 53	bgColor:blue
# visual-style 53	fgColor:white
# visual-style 53 52 orphan	color:blue
1	A	a	ADP	_	_	3	case	_	_
2	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	luz	luz	NOUN	_	Gender=Fem|Number=Sing	11	obl	_	_
4	de	de	ADP	_	_	6	case	_	_
5	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	princípio	princípio	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
7	de	de	ADP	_	_	9	case	_	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	proporcionalidade	proporcionalidade	NOUN	_	Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
10	,	,	PUNCT	_	_	3	punct	_	_
11	verifica	verificar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
12	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	11	expl:impers	_	_
13	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	impossibilidade	impossibilidade	NOUN	_	Gender=Fem|Number=Sing	11	obj	_	_
15	de	de	ADP	_	_	17	case	_	_
16	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	concessão	concessão	NOUN	_	Gender=Fem|Number=Sing	14	nmod	_	_
18	de	de	ADP	_	_	20	case	_	_
19	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	benefício	benefício	NOUN	_	Gender=Masc|Number=Sing	17	nmod	_	_
21	em	em	ADP	_	_	23	case	_	_
22	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	_	_
23	hipótese	hipótese	NOUN	_	Gender=Fem|Number=Sing	17	nmod	_	_
24	abstrata	abstrato	ADJ	_	Gender=Fem|Number=Sing	23	amod	_	_
25	de	de	ADP	_	_	26	case	_	_
26	concorrência	concorrência	NOUN	_	Gender=Fem|Number=Sing	23	nmod	_	_
27	entre	entre	ADP	_	_	29	case	_	_
28	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	29	det	_	_
29	mães	mãe	NOUN	_	Gender=Fem|Number=Plur	26	nmod	_	_
30	a	a	ADP	_	_	31	case	_	_
31	ambas	ambos	PRON	_	Gender=Fem|Number=Plur|PronType=Ind	17	nmod	_	_
32	simultaneamente	simultaneamente	ADV	_	_	17	advmod	_	_
33	em	em	ADP	_	_	34	case	_	_
34	virtude	virtude	NOUN	_	Gender=Fem|Number=Sing	14	nmod	_	_
35	de	de	ADP	_	_	38	case	_	_
36	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	38	det	_	_
37	única	único	ADJ	_	Gender=Fem|Number=Sing	38	amod	_	_
38	criança	criança	NOUN	_	Gender=Fem|Number=Sing	34	nmod	_	SpaceAfter=No
39	,	,	PUNCT	_	_	40	punct	_	_
40	devendo	dever	VERB	_	VerbForm=Ger	11	advcl	_	_
41	a	a	ADP	_	_	42	case	_	_
42	uma	um	NUM	_	Gender=Fem|NumType=Card	46	obl	_	_
43	de	de	ADP	_	_	44	case	_	_
44	elas	ele	PRON	_	Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Prs	42	nmod	_	_
45	ser	ser	AUX	_	VerbForm=Inf	46	aux:pass	_	_
46	concedida	conceder	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	40	ccomp	_	_
47	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	48	det	_	_
48	licença-maternidade	licença-maternidade	NOUN	_	Gender=Fem|Number=Sing	46	nsubj:pass	_	_
49	e	e	CCONJ	_	_	53	cc	_	_
50	a	a	ADP	_	_	52	case	_	_
51	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	52	det	_	_
52	outra	outro	PRON	_	Gender=Fem|Number=Sing|PronType=Ind	53	orphan	_	_
53	afastamento	afastamento	NOUN	_	Gender=Masc|Number=Sing	46	conj	_	_
54	por	por	ADP	_	_	55	case	_	_
55	período	período	NOUN	_	Gender=Masc|Number=Sing	53	nmod	_	_
56	equivalente	equivalente	ADJ	_	Number=Sing	55	amod	_	_
57	a	a	ADP	_	_	58	case	_	_
58	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	56	obl	_	_
59	de	de	ADP	_	_	61	case	_	_
60	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	61	det	_	_
61	licença-paternidade	licença-paternidade	NOUN	_	Gender=Fem|Number=Sing	58	nmod	_	SpaceAfter=No
62	.	.	PUNCT	_	_	11	punct	_	_

~~~


