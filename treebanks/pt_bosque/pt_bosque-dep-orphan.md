---
layout: base
title:  'Statistics of orphan in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `orphan`

This relation is universal.

15 nodes (0%) are attached to their parents as `orphan`.

15 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.4.

The following 9 pairs of parts of speech are connected with `orphan`: <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (5; 33% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-SYM.html">SYM</a></tt> (2; 13% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (1; 7% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt> (1; 7% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (1; 7% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (1; 7% instances), <tt><a href="pt_bosque-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_bosque-pos-SYM.html">SYM</a></tt> (1; 7% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-ADP.html">ADP</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 orphan	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
2	maior	grande	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	_
3	aumento	aumento	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
4	aconteceu	acontecer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	em	em	ADP	_	_	6	case	_	_
6	direito	direito	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	_
7	(	(	PUNCT	_	_	9	punct	_	SpaceAfter=No
8	mais	mais	ADV	_	_	9	case	_	_
9	366	366	NUM	_	NumType=Card	3	nmod	_	_
10	candidatos	candidato	NOUN	_	Gender=Masc|Number=Plur	6	appos	_	SpaceAfter=No
11	)	)	PUNCT	_	_	9	punct	_	_
12	e	e	CCONJ	_	_	15	cc	_	_
13	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
14	maior	grande	ADJ	_	Gender=Fem|Number=Sing	15	amod	_	_
15	queda	queda	NOUN	_	Gender=Fem|Number=Sing	4	conj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	15	punct	_	_
17	em	em	ADP	_	_	18	case	_	_
18	engenharia	engenharia	NOUN	_	Gender=Fem|Number=Sing	15	orphan	_	_
19	(	(	PUNCT	_	_	21	punct	_	SpaceAfter=No
20	menos	menos	ADV	_	_	21	case	_	_
21	980	980	NUM	_	NumType=Card	18	appos	_	SpaceAfter=No
22	)	)	PUNCT	_	_	21	punct	_	SpaceAfter=No
23	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 18 orphan	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	lucro	lucro	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
3	cresceu	crescer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	24	24	NUM	_	NumType=Card	5	nummod	_	SpaceAfter=No
5	%	%	SYM	_	_	3	obj	_	_
6	para	para	ADP	_	_	7	case	_	_
7	US$	US$	SYM	_	_	3	obl	_	_
8	51	51	NUM	_	NumType=Card	7	nummod	_	MWE=51_milhões
9	milhões	milhão	NUM	_	NumType=Card	8	flat	_	_
10	e	e	CCONJ	_	_	3	cc	_	_
11	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	12	det	_	_
12	vendas	venda	NOUN	_	Gender=Fem|Number=Plur	2	conj	_	SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	_
14	18	18	NUM	_	NumType=Card	15	nummod	_	SpaceAfter=No
15	%	%	SYM	_	_	12	orphan	_	SpaceAfter=No
16	,	,	PUNCT	_	_	15	punct	_	_
17	para	para	ADP	_	_	18	case	_	_
18	US$	US$	SYM	_	_	12	orphan	_	_
19	776	776	NUM	_	NumType=Card	18	nummod	_	MWE=776_milhões
20	milhões	milhão	NUM	_	NumType=Card	19	flat	_	SpaceAfter=No
21	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 22 orphan	color:blue
1	Dados	dado	NOUN	_	Gender=Masc|Number=Plur	17	nsubj	_	_
2	de	de	ADP	_	_	4	case	_	_
3	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	IBGE	IBGE	PROPN	_	Gender=Masc|Number=Sing	1	nmod	_	_
5	(	(	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	Instituto	Instituto	PROPN	_	Gender=Masc|Number=Sing	4	appos	_	MWE=Instituto_Brasileiro|MWEPOS=PROPN
7	Brasileiro	Brasileiro	PROPN	_	Number=Sing	6	flat:name	_	_
8	de	de	ADP	_	_	9	case	_	_
9	Geografia	Geografia	PROPN	_	Number=Sing	6	nmod	_	MWE=Geografia_e_Estatística|MWEPOS=PROPN
10	e	e	CCONJ	_	Number=Sing	9	flat:name	_	_
11	Estatística	Estatística	PROPN	_	Number=Sing	9	flat:name	_	SpaceAfter=No
12	)	)	PUNCT	_	_	6	punct	_	SpaceAfter=No
13	,	,	PUNCT	_	_	15	punct	_	_
14	de	de	ADP	_	_	15	case	_	_
15	1989	1989	NUM	_	NumType=Card	4	nmod	_	SpaceAfter=No
16	,	,	PUNCT	_	_	15	punct	_	_
17	mostram	mostrar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
18	que	que	SCONJ	_	_	22	mark	_	_
19	30,6	30,6	NUM	_	NumType=Card	22	nummod	_	MWE=30,6_milhões
20	milhões	milhão	NUM	_	NumType=Card	19	flat	_	_
21	de	de	ADP	_	_	22	case	_	_
22	brasileiros	brasileiro	NOUN	_	Gender=Masc|Number=Plur	17	orphan	_	SpaceAfter=No
23	.	.	PUNCT	_	_	17	punct	_	_

~~~


