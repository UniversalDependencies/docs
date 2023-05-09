---
layout: base
title:  'Statistics of csubj in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `csubj`

This relation is universal.

256 nodes (0%) are attached to their parents as `csubj`.

251 instances of `csubj` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.91015625.

The following 8 pairs of parts of speech are connected with `csubj`: <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (230; 90% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (15; 6% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj	color:blue
1	Como	como	ADV	_	_	3	advmod	_	_
2	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	possível	possível	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
4	visualizar	visualizar	VERB	_	VerbForm=Inf	3	csubj	_	_
5	em	em	ADP	_	_	7	case	_	_
6	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	Figura	figura	NOUN	_	Gender=Fem|Number=Sing	4	obl	_	_
8	19	19	NUM	_	NumType=Card	7	nummod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 17 csubj	color:blue
1	Em	em	ADP	_	_	3	case	_	_
2	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	perfil	perfil	NOUN	_	Gender=Masc|Number=Sing	11	obl	_	_
4	de	de	ADP	_	_	5	case	_	_
5	TPD	TPD	PROPN	_	Gender=Masc|Number=Sing	3	nmod	_	_
6	de	de	ADP	_	_	8	case	_	_
7	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Figura	figura	NOUN	_	Gender=Fem|Number=Sing	3	nmod	_	_
9	18	18	NUM	_	NumType=Card	8	nummod	_	_
10	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux:pass	_	_
11	verificado	verificar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
12	que	que	SCONJ	_	_	17	mark	_	_
13	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	amostra	amostra	NOUN	_	Gender=Fem|Number=Sing	17	nsubj	_	_
15	KCBV-740	KCBV-740	PROPN	_	Gender=Fem|Number=Sing	14	nmod	_	_
16	não	não	ADV	_	Polarity=Neg	17	advmod	_	_
17	apresentou	apresentar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	csubj	_	_
18	dessorção	dessorção	NOUN	_	Gender=Fem|Number=Sing	17	obj	_	_
19	de	de	ADP	_	_	20	case	_	_
20	NH3	NH3	PROPN	_	Gender=Masc|Number=Sing	18	nmod	_	SpaceAfter=No
21	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 33 csubj	color:blue
1	Ainda	ainda	ADV	_	_	2	advmod	_	_
2	corroborando	corroborar	VERB	_	VerbForm=Ger	8	advcl	_	_
3	esta	este	DET	_	Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	hipótese	hipótese	NOUN	_	Gender=Fem|Number=Sing	2	obj	_	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	_
6	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	bastante	bastante	ADV	_	_	8	advmod	_	_
8	plausível	plausível	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
9	de	de	ADP	_	_	11	case	_	_
10	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	ponto	ponto	NOUN	_	Gender=Masc|Number=Sing	8	obl	_	_
12	de	de	ADP	_	_	13	case	_	_
13	vista	vista	NOUN	_	Gender=Fem|Number=Sing	11	nmod	_	_
14	geológico	geológico	ADJ	_	Gender=Masc|Number=Sing	11	amod	_	SpaceAfter=No
15	,	,	PUNCT	_	_	8	punct	_	_
16	que	que	SCONJ	_	_	33	mark	_	_
17	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	18	det	_	_
18	rochas	rocha	NOUN	_	Gender=Fem|Number=Plur	33	nsubj	_	_
19	geradas	gerar	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part	18	acl	_	_
20	em	em	ADP	_	_	22	case	_	_
21	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	22	det	_	_
22	pulsos	pulso	NOUN	_	Gender=Masc|Number=Plur	19	obl	_	_
23	magmáticos	magmático	ADJ	_	Gender=Masc|Number=Plur	22	amod	_	_
24	que	que	PRON	_	Gender=Masc|Number=Plur|PronType=Rel	25	nsubj	_	_
25	afetaram	afetar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	22	acl:relcl	_	_
26	esta	este	DET	_	Gender=Fem|Number=Sing|PronType=Dem	27	det	_	_
27	porção	porção	NOUN	_	Gender=Fem|Number=Sing	25	obj	_	_
28	de	de	ADP	_	_	30	case	_	_
29	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	30	det	_	_
30	crosta	crosta	NOUN	_	Gender=Fem|Number=Sing	27	nmod	_	SpaceAfter=No
31	,	,	PUNCT	_	_	33	punct	_	_
32	estejam	estar	AUX	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	33	cop	_	_
33	repletas	repleto	ADJ	_	Gender=Fem|Number=Plur	8	csubj	_	_
34	de	de	ADP	_	_	35	case	_	_
35	componentes	componente	NOUN	_	Gender=Masc|Number=Plur	33	obl	_	_
36	remanescentes	remanescente	ADJ	_	Gender=Masc|Number=Plur	35	amod	_	_
37	de	de	ADP	_	_	38	case	_	_
38	magnetizações	magnetização	NOUN	_	Gender=Fem|Number=Plur	36	obl	_	_
39	registrando	registrar	VERB	_	VerbForm=Ger	33	advcl	_	_
40	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	41	det	_	_
41	oscilações	oscilação	NOUN	_	Gender=Fem|Number=Plur	39	obj	_	_
42	de	de	ADP	_	_	44	case	_	_
43	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	44	det	_	_
44	campo	campo	NOUN	_	Gender=Masc|Number=Sing	41	nmod	_	_
45	geomagnético	geomagnético	ADJ	_	Gender=Masc|Number=Sing	44	amod	_	_
46	em	em	ADP	_	_	48	case	_	_
47	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	48	det	_	_
48	época	época	NOUN	_	Gender=Fem|Number=Sing	39	obl	_	_
49	de	de	ADP	_	_	51	case	_	_
50	sua	seu	DET	_	Gender=Fem|Number=Sing|PronType=Prs	51	det	_	_
51	cristalização	cristalização	NOUN	_	Gender=Fem|Number=Sing	48	nmod	_	SpaceAfter=No
52	.	.	PUNCT	_	_	8	punct	_	_

~~~


