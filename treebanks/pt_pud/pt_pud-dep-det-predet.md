---
layout: base
title:  'Statistics of det:predet in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="pt_pud-dep-det.html">det</a></tt>.

123 nodes (1%) are attached to their parents as `det:predet`.

123 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.14634146341463.

The following 5 pairs of parts of speech are connected with `det:predet`: <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-DET.html">DET</a></tt> (110; 89% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (10; 8% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 det:predet	color:blue
1	É	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
2	o	o	DET	DT	Gender=Masc|Number=Sing	3	det	_	_
3	sonho	sonho	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
4	de	de	ADP	_	_	5	case	_	_
5	ele	ele	PRON	INP	Gender=Masc|Number=Sing|Person=3	3	obj	_	_
6	terminar	_	VERB	VB	_	3	csubj	_	_
7	a	o	DET	PDT	Gender=Fem|Number=Sing	9	det:predet	_	_
8	sua	_	PRON	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	9	det	_	_
9	carreira	_	NOUN	NN	Gender=Fem|Number=Sing	6	obj	_	_
10	aqui	aqui	ADV	RB	_	6	advmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det:predet	color:blue
1	Cada	_	DET	DT	Gender=Masc|Number=Sing	2	det	_	_
2	mapa	mapa	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj	_	_
3	em	em	ADP	INDT	_	5	case	_	_
4	a	o	DET	_	Gender=Fem|Number=Sing	5	det	_	_
5	exposição	exposição	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	_
6	conta	contar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
7	a	o	DET	PDT	Gender=Fem|Number=Sing	10	det:predet	_	_
8	sua	_	PRON	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	10	det:predet	_	_
9	própria	_	DET	DT	Gender=Fem|Number=Sing	10	det	_	_
10	história	história	NOUN	NN	Gender=Fem|Number=Sing	6	obj	_	SpaceAfter=No
11	,	,	PUNCT	,	_	13	punct	_	_
12	nem	_	ADV	RB	Polarity=Neg	13	advmod	_	_
13	todas	todo	NOUN	NN	Gender=Fem|Number=Plur	10	appos	_	_
14	factuais	factual	ADJ	JJ	Gender=Fem|Number=Plur	13	amod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 18 det:predet	color:blue
1	Ele	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	fica	ficar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	de	de	ADP	IN	_	4	case	_	_
4	pé	pé	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	_
5	em	em	ADP	IN	_	9	case	_	_
6	frente	frente	NOUN	NN	Gender=Fem|Number=Sing	5	fixed	_	_
7	a	a	ADP	INDT	_	5	fixed	_	_
8	o	o	DET	_	Gender=Masc|Number=Sing	9	det	_	_
9	público	público	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	_
10	e	e	CCONJ	CC	_	17	cc	_	SpaceAfter=No
11	,	,	PUNCT	,	_	12	punct	_	_
12	basicamente	basicamente	ADV	RB	_	17	advmod	_	SpaceAfter=No
13	,	,	PUNCT	,	_	12	punct	_	_
14	ele	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	17	nsubj	_	_
15	tem	ter	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	17	aux	_	_
16	que	_	ADP	IN	_	15	fixed	_	_
17	dar	_	VERB	VB	_	2	conj	_	_
18	o	o	DET	PDT	Gender=Masc|Number=Sing	20	det:predet	_	_
19	seu	_	PRON	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	20	det	_	_
20	melhor	melhor	ADJ	JJS	Gender=Masc|Number=Sing	17	obj	_	_
21	para	para	ADP	IN	_	22	case	_	_
22	fazer	_	VERB	VB	_	17	xcomp	_	_
23	a	o	DET	DT	Gender=Fem|Number=Sing	24	det	_	_
24	audiencia	_	NOUN	NN	Gender=Fem|Number=Sing	25	nsubj	_	_
25	rir	_	VERB	VB	_	22	xcomp	_	SpaceAfter=No
26	.	.	PUNCT	.	_	2	punct	_	_

~~~


