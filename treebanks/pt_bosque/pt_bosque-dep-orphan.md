---
layout: base
title:  'Statistics of orphan in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `orphan`

This relation is universal.

13 nodes (0%) are attached to their parents as `orphan`.

12 instances of `orphan` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.61538461538461.

The following 10 pairs of parts of speech are connected with `orphan`: <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (2; 15% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-SYM.html">SYM</a></tt> (2; 15% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (2; 15% instances), <tt><a href="pt_bosque-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (1; 8% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (1; 8% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (1; 8% instances), <tt><a href="pt_bosque-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_bosque-pos-SYM.html">SYM</a></tt> (1; 8% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-ADP.html">ADP</a></tt> (1; 8% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (1; 8% instances).


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
8	mais	mais	ADP	_	_	9	case	_	_
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
20	menos	menos	ADP	_	_	21	case	_	_
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 orphan	color:blue
1	George	George	PROPN	_	Gender=Masc|Number=Sing	2	nsubj	_	_
2	fazia	fazer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	música	música	NOUN	_	Gender=Fem|Number=Sing	2	obj	_	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	_
6	Ira	Ira	PROPN	_	Gender=Masc|Number=Sing	2	conj	_	_
7	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	letra	letra	NOUN	_	Gender=Fem|Number=Sing	6	orphan	_	SpaceAfter=No
9	,	,	PUNCT	_	_	2	punct	_	_
10	embora	embora	SCONJ	_	_	19	mark	_	SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	_
12	como	como	ADP	_	_	15	case	_	_
13	em	em	ADP	_	_	15	case	_	_
14	toda	todo	DET	_	Gender=Fem|Number=Sing|PronType=Tot	15	det	_	_
15	parceria	parceria	NOUN	_	Gender=Fem|Number=Sing	19	obl	_	SpaceAfter=No
16	,	,	PUNCT	_	_	15	punct	_	_
17	cada	cada	PRON	_	Gender=Unsp|Number=Sing|PronType=Tot	19	nsubj	_	_
18	qual	qual	DET	_	Gender=Unsp|Number=Sing|PronType=Rel	17	fixed	_	_
19	desse	dar	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	advcl	_	_
20	palpites	palpite	NOUN	_	Gender=Masc|Number=Plur	19	obj	_	_
21	em	em	ADP	_	_	23	case	_	_
22	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	_	_
23	especialidade	especialidade	NOUN	_	Gender=Fem|Number=Sing	20	nmod	_	_
24	de	de	ADP	_	_	26	case	_	_
25	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	outro	outro	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	23	nmod	_	SpaceAfter=No
27	.	.	PUNCT	_	_	2	punct	_	_

~~~


