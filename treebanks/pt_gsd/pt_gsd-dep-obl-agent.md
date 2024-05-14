---
layout: base
title:  'Statistics of obl:agent in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="pt_gsd-dep-obl.html">obl</a></tt>.

194 nodes (0%) are attached to their parents as `obl:agent`.

194 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.1340206185567.

The following 4 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (121; 62% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (66; 34% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt> (5; 3% instances), <tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obl:agent	color:blue
1	E	_	CCONJ	CONJ	_	4	cc	_	_
2	ele	_	PRON	PRON	_	4	nsubj	_	_
3	acabou	acabar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	tendo	ter	VERB	_	VerbForm=Ger	3	xcomp	_	_
5	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	seu	_	DET	DET	_	7	det:poss	_	_
7	pedido	pedido	NOUN	NOUN	_	4	obj	_	_
8	atendido	atender	VERB	VERB	_	4	acl	_	_
9	por	por	ADP	ADP	_	11	case	_	_
10	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	comandante	comandante	NOUN	NOUN	_	8	obl:agent	_	SpaceAfter=No
12	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	Os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	gols	gol	NOUN	_	Gender=Masc|Number=Plur	4	nsubj:pass	_	_
3	foram	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	4	aux:pass	_	_
4	marcados	marcar	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
5	por	por	ADP	_	_	6	case	_	_
6	Nady	Nady	PROPN	_	Gender=Masc|Number=Sing	4	obl:agent	_	_
7	-	-	PUNCT	_	_	8	punct	_	_
8	Gedo	Gedo	PROPN	_	Gender=Masc|Number=Sing	6	conj	_	_
9	e	e	CCONJ	_	_	10	cc	_	_
10	Soliman	Soliman	PROPN	_	Gender=Masc|Number=Sing	6	conj	_	SpaceAfter=No
11	,	,	PUNCT	_	_	14	punct	_	_
12	por	por	ADP	_	_	14	case	_	_
13	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	14	det	_	_
14	campeões	campeão	NOUN	_	Gender=Masc|Number=Plur	4	obl	_	SpaceAfter=No
15	;	;	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 27 obl:agent	color:blue
1	Em	em	ADP	_	_	4	case	_	_
2	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	último	último	ADJ	_	Gender=Masc|Number=Sing|NumType=Ord	4	amod	_	_
4	mês	mês	NOUN	_	Gender=Masc|Number=Sing	12	obl	_	_
5	de	de	ADP	_	_	7	case	_	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	ano	ano	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	4	punct	_	_
9	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	destaque	destaque	NOUN	_	Gender=Masc|Number=Sing	12	nsubj	_	_
11	também	também	ADV	_	_	12	advmod	_	_
12	ficou	ficar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
13	para	para	ADP	_	_	15	case	_	_
14	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	15	det	_	_
15	fundos	fundo	NOUN	_	Gender=Masc|Number=Plur	12	obj	_	_
16	de	de	ADP	_	_	17	case	_	_
17	previdência	previdência	NOUN	_	Gender=Fem|Number=Sing	15	nmod	_	_
18	(	(	PUNCT	_	_	19	punct	_	SpaceAfter=No
19	R	R	PROPN	_	Gender=Masc|Number=Sing	15	appos	_	_
20	$	$	SYM	_	_	19	appos	_	_
21	6,032	6,032	NUM	_	NumType=Card	19	nummod	_	_
22	bilhões	bilhão	NUM	_	NumType=Card	21	flat	_	SpaceAfter=No
23	)	)	PUNCT	_	_	19	punct	_	SpaceAfter=No
24	,	,	PUNCT	_	_	25	punct	_	_
25	seguidos	seguir	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	15	acl	_	_
26	por	por	ADP	_	_	27	case	_	_
27	os	o	PRON	_	Gender=Masc|Number=Plur|PronType=Dem	25	obl:agent	_	_
28	de	de	ADP	_	_	29	case	_	_
29	ações	ação	NOUN	_	Gender=Fem|Number=Plur	27	nmod	_	_
30	(	(	PUNCT	_	_	31	punct	_	SpaceAfter=No
31	R	R	PROPN	_	_	27	appos	_	_
32	$	$	SYM	_	_	31	appos	_	_
33	1,143	1,143	NUM	_	NumType=Card	32	nummod	_	_
34	bilhões	bilhão	NUM	_	NumType=Card	33	flat	_	SpaceAfter=No
35	)	)	PUNCT	_	_	31	punct	_	SpaceAfter=No
36	.	.	PUNCT	_	_	12	punct	_	SpaceAfter=No

~~~


