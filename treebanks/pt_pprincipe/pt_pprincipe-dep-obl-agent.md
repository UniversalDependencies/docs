---
layout: base
title:  'Statistics of obl:agent in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="pt_pprincipe-dep-obl.html">obl</a></tt>.

9 nodes (0%) are attached to their parents as `obl:agent`.

9 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (8; 89% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 obl:agent	color:blue
1	Pus	pôr	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
2	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	obj	_	_
3	de	de	ADP	_	_	4	case	_	_
4	pé	pé	NOUN	_	Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	como	como	SCONJ	_	_	7	mark	_	_
7	atingido	atingir	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	1	advcl	_	_
8	por	por	ADP	_	_	10	case	_	_
9	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	raio	raio	NOUN	_	Gender=Masc|Number=Sing	7	obl:agent	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 26 obl:agent	color:blue
1	Esse	esse	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	22	dislocated	_	_
2	aí	aí	ADV	_	_	1	advmod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	disse	dizer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	22	parataxis	_	_
5	para	para	ADP	_	_	6	case	_	_
6	si	si	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	4	obl	_	_
7	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	principezinho	principezinho	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	12	punct	_	_
10	a	a	ADP	_	ExtPos=SCONJ	12	mark	_	_
11	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	fixed	_	_
12	prosseguir	prosseguir	VERB	_	VerbForm=Inf	4	advcl	_	_
13	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	viagem	viagem	NOUN	_	Gender=Fem|Number=Sing	12	obj	_	_
15	para	para	ADP	_	_	17	case	_	_
16	mais	mais	ADV	_	_	17	advmod	_	_
17	longe	longe	ADV	_	_	12	advmod	_	SpaceAfter=No
18	,	,	PUNCT	_	_	4	punct	_	_
19	esse	esse	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	22	nsubj:pass	_	_
20	aí	aí	ADV	_	_	19	advmod	_	_
21	seria	ser	AUX	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	22	aux:pass	_	_
22	desprezado	desprezar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
23	por	por	ADP	_	_	26	case	_	_
24	todos	todo	DET	_	Gender=Masc|Number=Plur|PronType=Ind	26	det	_	_
25	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	26	det	_	_
26	outros	outro	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	22	obl:agent	_	SpaceAfter=No
27	,	,	PUNCT	_	_	29	punct	_	_
28	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	29	det	_	_
29	rei	rei	NOUN	_	Gender=Masc|Number=Sing	26	appos	_	SpaceAfter=No
30	,	,	PUNCT	_	_	31	punct	_	_
31	o	o	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	29	conj	_	_
32	vaidoso	vaidoso	ADJ	_	Gender=Masc|Number=Sing	31	amod	_	SpaceAfter=No
33	,	,	PUNCT	_	_	35	punct	_	_
34	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	35	det	_	_
35	beberrão	beberrão	NOUN	_	Gender=Masc|Number=Sing	29	conj	_	SpaceAfter=No
36	,	,	PUNCT	_	_	38	punct	_	_
37	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	38	det	_	_
38	homem	homem	NOUN	_	Gender=Masc|Number=Sing	29	conj	_	_
39	de	de	ADP	_	_	40	case	_	_
40	negócios	negócio	NOUN	_	Gender=Masc|Number=Plur	38	nmod	_	SpaceAfter=No
41	.	.	PUNCT	_	_	22	punct	_	_

~~~


