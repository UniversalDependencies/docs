---
layout: base
title:  'Statistics of orphan in UD_Portuguese-DANTEStocks'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-DANTEStocks: Relations: `orphan`

This relation is universal.

21 nodes (0%) are attached to their parents as `orphan`.

21 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.33333333333333.

The following 4 pairs of parts of speech are connected with `orphan`: <tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_dantestocks-pos-SYM.html">SYM</a></tt> (18; 86% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt> (1; 5% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 orphan	color:blue
1	Ações	ação	NOUN	_	Gender=Fem|Number=Plur	7	nsubj	_	_
2	de	de	ADP	_	_	4	case	_	_
3	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	VALE	VALE	PROPN	_	_	1	nmod	_	_
5	também	também	ADV	_	_	7	advmod	_	_
6	em	em	ADP	_	_	7	case	_	_
7	alta	alta	NOUN	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_
9	Vale3	Vale3	PROPN	_	_	7	parataxis	_	SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	+	+	SYM	_	_	12	advmod	_	SpaceAfter=No
12	2,10	2,10	NUM	_	NumType=Card	13	nummod	_	SpaceAfter=No
13	%	%	SYM	_	_	9	orphan	_	_
14	e	e	CCONJ	_	_	15	cc	_	_
15	Vale5	Vale5	PROPN	_	_	9	conj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	18	punct	_	_
17	+	+	SYM	_	_	18	advmod	_	SpaceAfter=No
18	1,60	1,60	NUM	_	NumType=Card	15	orphan	_	SpaceAfter=No
19	...	...	PUNCT	_	_	9	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 27 orphan	color:blue
1	@Live_Trade	@Live_Trade	PROPN	_	_	2	vocative	_	_
2	tenho	ter	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	ponto	ponto	NOUN	_	Gender=Masc|Number=Sing	2	obj	_	_
5	a	a	ADP	_	_	6	mark	_	_
6	fazer	fazer	VERB	_	VerbForm=Inf	4	acl	_	_
7	que	que	PRON	_	PronType=Rel	11	nsubj	_	_
8	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
9	sobre	sobre	ADP	_	_	11	case	_	_
10	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	petr4	petr4	PROPN	_	_	4	acl:relcl	_	SpaceAfter=No
12	,	,	PUNCT	_	_	19	punct	_	_
13	de	de	ADP	_	_	14	case	_	_
14	aqui	aqui	ADV	_	_	19	advmod	_	_
15	a	a	ADP	_	_	16	case	_	_
16	pouco	pouco	ADV	_	_	14	advmod	_	_
17	será	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	19	cop	_	_
18	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	hora	hora	NOUN	_	Gender=Fem|Number=Sing	2	parataxis	_	_
20	de	de	ADP	_	_	22	mark	_	_
21	ela	ele	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	22	nsubj	_	_
22	desabar	desabar	VERB	_	VerbForm=Inf	19	acl	_	SpaceAfter=No
23	,	,	PUNCT	_	_	26	punct	_	_
24	e	e	CCONJ	_	_	26	cc	_	_
25	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	mini	mínimo	NOUN	_	Abbr=Yes|Gender=Masc|Number=Sing	22	conj	_	FullForm=mínimo
27	junto	junto	ADV	_	_	26	orphan	_	SpaceAfter=No
28	,	,	PUNCT	_	_	26	punct	_	_
29	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	30	cop	_	_
30	possível	possível	ADJ	_	Number=Sing	2	parataxis	_	_
31	em	em	ADP	_	_	34	case	_	_
32	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	34	det	_	_
33	sua	seu	DET	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	34	det	_	_
34	análise	análise	NOUN	_	Gender=Fem|Number=Sing	30	obl	_	SpaceAfter=No
35	?	?	PUNCT	_	_	30	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 orphan	color:blue
1	Ações	ação	NOUN	_	Gender=Fem|Number=Plur	7	nsubj	_	_
2	de	de	ADP	_	_	4	case	_	_
3	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	VALE	VALE	PROPN	_	_	1	nmod	_	_
5	também	também	ADV	_	_	7	advmod	_	_
6	em	em	ADP	_	_	7	case	_	_
7	alta	alta	NOUN	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_
9	Vale3	Vale3	PROPN	_	_	7	parataxis	_	SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	+	+	SYM	_	_	12	advmod	_	SpaceAfter=No
12	2,10	2,10	NUM	_	NumType=Card	13	nummod	_	SpaceAfter=No
13	%	%	SYM	_	_	9	orphan	_	_
14	e	e	CCONJ	_	_	15	cc	_	_
15	Vale5	Vale5	PROPN	_	_	9	conj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	18	punct	_	_
17	+	+	SYM	_	_	18	advmod	_	SpaceAfter=No
18	1,60	1,60	NUM	_	NumType=Card	15	orphan	_	SpaceAfter=No
19	...	...	PUNCT	_	_	9	punct	_	SpaceAfter=No

~~~


