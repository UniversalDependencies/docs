---
layout: base
title:  'Statistics of iobj in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `iobj`

This relation is universal.

9 nodes (0%) are attached to their parents as `iobj`.

6 instances of `iobj` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55555555555556.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (7; 78% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (2; 22% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 iobj	color:blue
1	Mais	_	ADV	RBR	_	2	advmod	_	_
2	tarde	_	ADV	RB	_	5	advmod	_	SpaceAfter=No
3	,	_	PUNCT	,	_	2	punct	_	_
4	eu	_	PRON	PRP	Case=Nom|Number=Sing|Person=1	5	nsubj	_	_
5	perguntei	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	SpaceAfter=No
6	-	_	PUNCT	-	_	7	punct	_	SpaceAfter=No
7	lhe	_	PRON	PRP	Case=Dat|Number=Sing|Person=3	5	iobj	_	_
8	se	_	ADP	IN	_	10	mark	_	_
9	ela	_	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	10	nsubj	_	_
10	entendeu	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	5	ccomp	_	_
11	por	_	ADP	IN	_	13	mark	_	_
12	que	_	ADV	WRB	_	11	fixed	_	_
13	é	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	10	ccomp	_	_
14	que	_	ADP	IN	_	18	mark	_	_
15	as	_	DET	DT	Gender=Fem|Number=Plur	16	det	_	_
16	pessoas	_	NOUN	NN	Gender=Fem|Number=Plur	18	nsubj	_	_
17	poderiam	_	VERB	VBC	Aspect=Imp|Mood=Cnd|Number=Plur|Person=3	18	aux	_	_
18	votar	_	VERB	VB	_	13	ccomp	_	_
19	em	_	ADP	IN	_	20	case	_	_
20	Trump	_	PROPN	NNP	Gender=Masc|Number=Sing	18	obl	_	SpaceAfter=No
21	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 21 iobj	color:blue
1	Corrado	_	PROPN	NNP	Gender=Masc|Number=Sing	3	nsubj	_	_
2	Passera	_	PROPN	NNP	Gender=Masc|Number=Sing	1	flat:name	_	_
3	retira	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	a	_	DET	DT	Gender=Fem|Number=Sing	5	det	_	_
5	proposta	_	NOUN	NN	Gender=Fem|Number=Sing	3	obj	_	_
6	para	_	ADP	IN	_	7	case	_	_
7	membros	_	NOUN	NN	Gender=Masc|Number=Plur	3	obl	_	_
8	de	de	ADP	INDT	_	10	case	_	_
9	o	o	DET	_	Gender=Masc|Number=Sing	10	det	_	_
10	Parlamento	_	NOUN	NN	Gender=Masc|Number=Sing	7	nmod	_	Proper=True
11	devido	_	VERB	VBN	Aspect=Perf|Gender=Masc|Number=Sing	14	case	_	_
12	a	_	ADP	IN	_	11	fixed	_	_
13	"	_	PUNCT	``	_	14	punct	_	SpaceAfter=No
14	atitude	_	NOUN	NN	Gender=Fem|Number=Sing	3	obl	_	_
15	de	_	ADP	IN	_	17	case	_	_
16	total	_	ADJ	JJ	Gender=Masc|Number=Sing	17	amod	_	_
17	fechamento	_	NOUN	NN	Gender=Masc|Number=Sing	14	nmod	_	_
18	que	_	PRON	WP	_	23	obj	_	_
19	os	_	DET	DT	Gender=Masc|Number=Plur	20	det	_	_
20	bancos	_	NOUN	NN	Gender=Masc|Number=Plur	23	nsubj	_	_
21	em	em	ADP	PRP	_	23	iobj	_	_
22	os	o	DET	_	Case=Dat|Number=Plur|Person=1	21	det	_	_
23	demonstraram	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past	14	acl:relcl	_	SpaceAfter=No
24	"	_	PUNCT	''	_	14	punct	_	SpaceAfter=No
25	.	_	PUNCT	.	_	3	punct	_	_

~~~


