---
layout: base
title:  'Statistics of obl:agent in UD_Portuguese-Alienista'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Alienista: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="pt_alienista-dep-obl.html">obl</a></tt>.

19 nodes (0%) are attached to their parents as `obl:agent`.

19 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.84210526315789.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (13; 68% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt> (3; 16% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-PROPN.html">PROPN</a></tt> (3; 16% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 obl:agent	color:blue
1	Em	em	ADP	_	_	2	case	_	_
2	isto	isto	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	3	obl	_	_
3	entrou	entrar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	em	em	ADP	_	_	6	case	_	_
5	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	vila	vila	NOUN	_	Gender=Fem|Number=Sing	3	obl	_	_
7	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	força	força	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
9	mandada	mandar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	8	acl	_	_
10	por	por	ADP	_	_	12	case	_	_
11	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	vice-rei	vice-rei	NOUN	_	Gender=Masc|Number=Sing	9	obl:agent	_	_
13	e	e	CCONJ	_	_	14	cc	_	_
14	restabeleceu	restabelecer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	conj	_	_
15	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	ordem	ordem	NOUN	_	Gender=Fem|Number=Sing	14	obj	_	SpaceAfter=No
17	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 39 41 obl:agent	color:blue
1	Um	um	NUM	_	Gender=Masc|NumType=Card	28	nsubj	_	_
2	de	de	ADP	_	_	4	case	_	_
3	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	4	det	_	_
4	oradores	orador	NOUN	_	Gender=Masc|Number=Plur	1	nmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	por	por	ADP	_	_	7	case	_	_
7	exemplo	exemplo	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	Martim	Martim	PROPN	_	_	1	appos	_	_
10	Brito	Brito	PROPN	_	_	9	flat:name	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	rapaz	rapaz	NOUN	_	Gender=Masc|Number=Sing	1	appos	_	_
13	de	de	ADP	_	_	17	case	_	_
14	vinte	vinte	NUM	_	NumType=Card	17	nummod	_	_
15	e	e	CCONJ	_	_	16	cc	_	_
16	cinco	cinco	NUM	_	NumType=Card	14	flat	_	_
17	anos	ano	NOUN	_	Gender=Masc|Number=Plur	12	nmod	_	SpaceAfter=No
18	,	,	PUNCT	_	_	19	punct	_	_
19	pintalegrete	pintalegrete	NOUN	_	Gender=Masc|Number=Sing	1	appos	_	_
20	acabado	acabado	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	19	amod	_	SpaceAfter=No
21	,	,	PUNCT	_	_	22	punct	_	_
22	curtido	curtido	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	20	conj	_	_
23	de	de	ADP	_	_	24	case	_	_
24	namoros	namoro	NOUN	_	Gender=Masc|Number=Plur	22	obl	_	_
25	e	e	CCONJ	_	_	26	cc	_	_
26	aventuras	aventura	NOUN	_	Gender=Fem|Number=Plur	24	conj	_	SpaceAfter=No
27	,	,	PUNCT	_	_	22	punct	_	_
28	declamou	declamar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
29	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	30	det	_	_
30	discurso	discurso	NOUN	_	Gender=Masc|Number=Sing	28	obj	_	_
31	em	em	ADP	_	_	32	case	_	_
32	que	que	PRON	_	PronType=Rel	39	obl	_	_
33	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	34	det	_	_
34	nascimento	nascimento	NOUN	_	Gender=Masc|Number=Sing	39	nsubj:pass	_	_
35	de	de	ADP	_	_	36	case	_	_
36	D.	D.	PROPN	_	_	34	nmod	_	_
37	Evarista	Evarista	PROPN	_	_	36	flat:name	_	_
38	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	39	aux:pass	_	_
39	explicado	explicar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	30	acl:relcl	_	_
40	por	por	ADP	_	_	41	case	_	_
41	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	39	obl:agent	_	_
42	mais	mais	ADV	_	_	43	advmod	_	_
43	singular	singular	ADJ	_	Number=Sing	41	amod	_	_
44	de	de	ADP	_	_	46	case	_	_
45	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	46	det	_	_
46	reptos	repto	NOUN	_	Gender=Masc|Number=Plur	41	nmod	_	SpaceAfter=No
47	.	.	PUNCT	_	_	28	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	Esta	este	DET	_	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	frase	frase	NOUN	_	Gender=Fem|Number=Sing	4	nsubj:pass	_	_
3	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	proposta	propor	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
5	por	por	ADP	_	_	6	case	_	_
6	Sebastião	Sebastião	PROPN	_	_	4	obl:agent	_	_
7	Freitas	Freitas	PROPN	_	_	6	flat:name	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	vereador	vereador	NOUN	_	Gender=Masc|Number=Sing	6	appos	_	_
11	dissidente	dissidente	ADJ	_	Number=Sing	10	amod	_	_
12	cuja	cujo	DET	_	Gender=Fem|Number=Sing|PronType=Rel	13	det	_	_
13	defesa	defesa	NOUN	_	Gender=Fem|Number=Sing	18	nsubj	_	_
14	de	de	ADP	_	_	16	case	_	_
15	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	16	det	_	_
16	Canjicas	Canjicas	PROPN	_	_	13	nmod	_	_
17	tanto	tanto	ADV	_	_	18	advmod	_	_
18	escandalizara	escandalizar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	10	acl:relcl	_	_
19	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	20	det	_	_
20	colegas	colega	NOUN	_	Gender=Masc|Number=Plur	18	obj	_	SpaceAfter=No
21	.	.	PUNCT	_	_	4	punct	_	_

~~~


