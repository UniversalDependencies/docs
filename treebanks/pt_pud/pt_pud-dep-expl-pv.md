---
layout: base
title:  'Statistics of expl:pv in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `expl:pv`

This relation is a language-specific subtype of .

93 nodes (0%) are attached to their parents as `expl:pv`.

76 instances of `expl:pv` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44086021505376.

The following 4 pairs of parts of speech are connected with `expl:pv`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (81; 87% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (6; 6% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (5; 5% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 expl:pv	color:blue
1	Penso	_	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
2	que	que	SCONJ	IN	_	3	mark	_	_
3	é	ser	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	ccomp	_	_
4	por	por	ADP	IN	_	3	discourse	_	_
5	isso	_	PRON	PDEM	Gender=Masc|Number=Sing	4	fixed	_	_
6	que	que	SCONJ	IN	_	9	mark	_	_
7	eles	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Plur|Person=3	9	nsubj	_	_
8	se	_	PRON	SE	Person=3	9	expl:pv	_	_
9	imergiram	imergir	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past	3	ccomp	_	_
10	em	em	ADP	IN	_	11	case	_	_
11	padrões	padrão	NOUN	NN	Gender=Masc|Number=Plur	9	obl	_	_
12	e	e	CCONJ	CC	_	13	cc	_	_
13	cor	cor	NOUN	NN	Gender=Fem|Number=Sing	11	conj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 expl:pv	color:blue
1	Primeiro	primeiro	ADV	RB	_	5	advmod	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	nós	_	PRON	PRP	Case=Nom|Number=Plur|Person=1	5	nsubj	_	_
4	devemos	dever	AUX	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres	5	aux	_	_
5	educar	_	VERB	VB	_	0	root	_	_
6	as	o	DET	DT	Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
7	pessoas	pessoa	NOUN	NN	Gender=Fem|Number=Plur	5	obj	_	_
8	sobre	_	ADP	IN	_	12	case	_	_
9	como	como	ADV	WRB	_	12	advmod	_	_
10	se	_	PRON	SE	Person=3	12	expl:pv	_	_
11	proteger	_	AUX	VB	_	12	cop	_	_
12	melhor	melhor	ADJ	JJR	Gender=Masc|Number=Sing	5	xcomp	_	SpaceAfter=No
13	,	,	PUNCT	,	_	14	punct	_	_
14	online	online	ADV	RB	_	12	advmod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 20 expl:pv	color:blue
1	Em	_	ADP	IN	_	2	case	_	_
2	2003	_	NUM	CD	Gender=Masc	4	obl	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	dominou	dominar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
5	em	em	ADP	INDT	_	7	case	_	_
6	a	o	DET	_	Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	classificação	classificação	NOUN	NN	Gender=Fem|Number=Sing	4	obl	_	_
8	geral	geral	ADJ	JJ	Gender=Fem|Number=Sing	7	amod	_	_
9	de	de	ADP	IN	_	10	case	_	_
10	pontos	ponto	NOUN	NN	Gender=Masc|Number=Plur	7	nmod	_	_
11	e	e	CCONJ	CC	_	12	cc	_	_
12	liderou	liderar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	conj	_	_
13	as	o	DET	DT	Gender=Fem|Number=Plur|PronType=Art	18	det	_	_
14	últimas	último	ADJ	JJ	Gender=Fem|Number=Plur	18	amod	_	_
15	33	_	NUM	CD	_	18	nummod	_	_
16	de	de	ADP	IN	_	17	case	_	_
17	36	_	NUM	CD	_	15	nmod	_	_
18	corridas	corrida	NOUN	NN	Gender=Fem|Number=Plur	12	obj	_	SpaceAfter=No
19	,	,	PUNCT	,	_	23	punct	_	_
20	se	_	PRON	SE	Person=3	23	expl:pv	_	_
21	tornando	_	AUX	VBG	_	23	cop	_	_
22	o	o	DET	DT	Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	campeão	campeão	NOUN	NN	Gender=Masc|Number=Sing	4	acl	_	_
24	de	de	ADP	INDT	_	26	case	_	_
25	a	o	DET	_	Gender=Fem|Number=Sing|PronType=Art	26	det	_	_
26	NASCAR	NASCAR	PROPN	NNP	Gender=Fem|Number=Sing	23	nmod	_	ToDo=nmod
27	Winston	Winston	PROPN	NNP	Foreign=Yes|Gender=Fem|Number=Sing	26	flat	_	_
28	Cup	Cup	PROPN	NNP	Foreign=Yes|Gender=Fem|Number=Sing	26	flat	_	_
29	2003	_	NUM	CD	Gender=Masc	26	appos	_	Proper=True|SpaceAfter=No
30	,	,	PUNCT	,	_	33	punct	_	_
31	o	o	DET	DT	Gender=Masc|Number=Sing|PronType=Art	33	det	_	_
32	último	último	ADJ	JJ	Gender=Masc|Number=Sing	33	amod	_	_
33	piloto	piloto	NOUN	NN	Gender=Masc|Number=Sing	23	appos	_	_
34	a	_	ADP	IN	_	35	case	_	_
35	ter	_	VERB	VB	_	33	xcomp	_	_
36	esse	_	DET	DT	Gender=Masc|Number=Sing	37	det	_	_
37	título	título	NOUN	NN	Gender=Masc|Number=Sing	35	obj	_	SpaceAfter=No
38	.	.	PUNCT	.	_	4	punct	_	_

~~~


