---
layout: base
title:  'Statistics of list in UD_Portuguese-DANTEStocks'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-DANTEStocks: Relations: `list`

This relation is universal.

537 nodes (1%) are attached to their parents as `list`.

537 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.13966480446927.

The following 5 pairs of parts of speech are connected with `list`: <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (506; 94% instances), <tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt> (23; 4% instances), <tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="pt_dantestocks-pos-X.html">X</a></tt>-<tt><a href="pt_dantestocks-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 list	color:blue
1	Rastreamento	rastreamento	NOUN	_	Gender=Masc|Number=Sing	9	parataxis	_	_
2	ações	ação	NOUN	_	Gender=Fem|Number=Plur	1	nmod	_	SpaceAfter=No
3	-	-	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	Gráfico	gráfico	NOUN	_	Gender=Masc|Number=Sing	1	list	_	_
5	diário	diário	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	SpaceAfter=No
6	-	-	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	12h	12h	NOUN	_	Gender=Fem|Number=Plur	1	list	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_
9	Analise	analisar	VERB	_	Mood=Imp|Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
10	se	se	SCONJ	_	_	11	mark	_	_
11	romper	romper	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	9	advcl	_	SpaceAfter=No
12	:	:	PUNCT	_	_	13	punct	_	_
13	BRPR3	BRPR3	PROPN	_	_	11	obj	_	_
14	18,15	18,15	NUM	_	NumType=Card	13	nmod	_	_
15	CIEL3	CIEL3	PROPN	_	_	13	conj	_	_
16	40,23	40,23	NUM	_	NumType=Card	15	nmod	_	_
17	MRFG3	MRFG3	PROPN	_	_	13	conj	_	_
18	4,91	4,91	NUM	_	NumType=Card	17	nmod	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 list	color:blue
1	04/04/14	04/04/14	NUM	_	NumType=Card	6	parataxis	_	_
2	-	-	PUNCT	_	_	3	punct	_	_
3	17:19	17:19	NUM	_	NumType=Card	1	list	_	SpaceAfter=No
4	:	:	PUNCT	_	_	1	punct	_	_
5	Maiores	maior	ADJ	_	Number=Plur	6	amod	_	_
6	Altas	alta	NOUN	_	Gender=Fem|Number=Plur	0	root	_	SpaceAfter=No
7	:	:	PUNCT	_	_	8	punct	_	_
8	PCAR4	PCAR4	PROPN	_	_	6	appos	_	_
9	2,36	2,36	NUM	_	NumType=Card	10	nummod	_	SpaceAfter=No
10	%	%	SYM	_	_	8	nmod	_	_
11	R$	R$	SYM	_	_	8	nmod	_	SpaceAfter=No
12	104,64	104,64	NUM	_	NumType=Card	11	nummod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	14	punct	_	_
14	NATU3	NATU3	PROPN	_	_	8	conj	_	_
15	1,78	1,78	NUM	_	NumType=Card	16	nummod	_	SpaceAfter=No
16	%	%	SYM	_	_	14	nmod	_	_
17	R$	R$	SYM	_	_	14	nmod	_	SpaceAfter=No
18	38,27	38,27	NUM	_	NumType=Card	17	nummod	_	SpaceAfter=No
19	,	,	PUNCT	_	_	20	punct	_	_
20	CSNA3	CSNA3	PROPN	_	_	8	conj	_	_
21	1,63	1,63	NUM	_	NumType=Card	22	nummod	_	SpaceAfter=No
22	%	%	SYM	_	_	20	nmod	_	_
23	R$	R$	SYM	_	_	20	nmod	_	SpaceAfter=No
24	9,96	9,96	NUM	_	NumType=Card	23	nummod	_	SpaceAfter=No
25	,	,	PUNCT	_	_	26	punct	_	_
26	BRML3	BRML3	PROPN	_	_	8	conj	_	_
27	1,63	1,63	NUM	_	NumType=Card	28	nummod	_	SpaceAfter=No
28	%	%	SYM	_	_	26	nmod	_	_
29	R$	R$	SYM	_	_	26	nmod	_	SpaceAfter=No
30	19,37	19,37	NUM	_	NumType=Card	29	nummod	_	SpaceAfter=No
31	.	.	PUNCT	_	_	6	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 list	color:blue
1	Petrobras	Petrobras	PROPN	_	_	2	nsubj	_	_
2	confirma	confirmar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	precificação	precificação	NOUN	_	Gender=Fem|Number=Sing	2	obj	_	_
4	de	de	ADP	_	_	5	case	_	_
5	títulos	título	NOUN	_	Gender=Masc|Number=Plur	3	nmod	_	_
6	de	de	ADP	_	_	9	case	_	_
7	US$	US$	SYM	_	_	9	nmod	_	_
8	8,5	8,5	NUM	_	NumType=Card	9	nummod	_	_
9	bilhões	bilhão	NOUN	_	Gender=Masc|Number=Plur	5	nmod	_	SpaceAfter=No
10	:	:	PUNCT	_	_	11	punct	_	_
11	SÃO	SÃO	PROPN	_	_	21	parataxis	_	_
12	PAULO	PAULO	PROPN	_	_	11	flat:name	_	SpaceAfter=No
13	,	,	PUNCT	_	_	15	punct	_	_
14	10	10	NUM	_	NumType=Card	15	nummod	_	_
15	Mar	mar	NOUN	_	Gender=Masc|Number=Sing	11	list	_	_
16	(	(	PUNCT	_	_	17	punct	_	SpaceAfter=No
17	Reuters	Reuters	PROPN	_	_	11	parataxis	_	SpaceAfter=No
18	)	)	PUNCT	_	_	17	punct	_	_
19	-	-	PUNCT	_	_	21	punct	_	_
20	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	Petrobras	Petrobras	PROPN	_	_	2	parataxis	_	_
22	PETR4	PETR4	PROPN	_	_	21	flat:name	_	SpaceAfter=No
23	...	...	PUNCT	_	_	2	punct	_	_
24	http://t.co/gSdgOFzDCy	http://t.co/gSdgOFzDCy	SYM	_	_	2	parataxis	_	SpaceAfter=No

~~~


