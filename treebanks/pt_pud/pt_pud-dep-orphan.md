---
layout: base
title:  'Statistics of orphan in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `orphan`

This relation is universal.

4 nodes (0%) are attached to their parents as `orphan`.

3 instances of `orphan` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.25.

The following 4 pairs of parts of speech are connected with `orphan`: <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt> (1; 25% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (1; 25% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 orphan	color:blue
1	A	_	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	parte	_	NOUN	NN	Gender=Fem|Number=Sing	8	nsubj:pass	_	_
3	norte	_	ADJ	JJ	Gender=Fem|Number=Sing	2	amod	_	_
4	de	de	ADP	INDT	_	6	case	_	_
5	o	o	DET	_	Gender=Masc|Number=Sing	6	det	_	_
6	Cáucaso	_	PROPN	NNP	Gender=Masc|Number=Sing	2	nmod	_	_
7	é	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	aux:pass	_	_
8	conhecida	_	VERB	VBN	Aspect=Perf|Gender=Fem|Number=Sing	0	root	_	_
9	como	_	ADP	IN	_	10	case	_	_
10	Ciscaucásia	_	PROPN	NNP	Gender=Fem|Number=Sing	8	obl	_	_
11	e	_	CCONJ	CC	_	15	cc	_	_
12	a	_	DET	DT	Gender=Fem|Number=Sing	13	det	_	_
13	parte	_	NOUN	NN	Gender=Fem|Number=Sing	15	orphan	_	orig_deprel=nsubj:pass
14	sul	_	ADJ	JJ	Gender=Fem|Number=Sing	13	amod	_	_
15	como	_	ADP	IN	_	8	conj	_	orig_deprel=obl|ToDo=ex-adp-child
16	Transcaucásia	_	PROPN	NNP	Gender=Fem|Number=Sing	15	obj	_	SpaceAfter=No|ToDo=pobj
17	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 17 orphan	color:blue
1	Em	_	ADP	IN	_	2	case	_	_
2	1912	_	NUM	CD	Gender=Masc	4	obl	_	_
3	foi	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	4	aux:pass	_	_
4	fundada	_	VERB	VBN	Aspect=Perf|Gender=Fem|Number=Sing	0	root	_	_
5	a	_	DET	DT	Gender=Fem|Number=Sing	7	det	_	_
6	primeira	_	ADJ	JJ	Gender=Fem|Number=Sing	7	amod	_	_
7	companhia	_	NOUN	NN	Gender=Fem|Number=Sing	4	nsubj:pass	_	_
8	cinematográfica	_	ADJ	JJ	Gender=Fem|Number=Sing	7	amod	_	_
9	(	_	PUNCT	(	_	10	punct	_	SpaceAfter=No
10	Athina	_	PROPN	NNP	Gender=Fem|Number=Sing	7	appos	_	_
11	Film	_	PROPN	NNP	Foreign=Yes|Gender=Fem|Number=Sing	10	flat	_	SpaceAfter=No
12	)	_	PUNCT	)	_	10	punct	_	_
13	e	_	CCONJ	CC	_	14	cc	_	_
14	em	_	ADP	IN	_	4	conj	_	orig_deprel=obl|ToDo=ex-adp-child
15	1916	_	NUM	CD	Gender=Masc	14	obj	_	ToDo=pobj
16	a	_	DET	DT	Gender=Fem|Number=Sing	17	det	_	_
17	Asty	_	PROPN	NNP	Gender=Fem|Number=Sing	14	orphan	_	orig_deprel=nsubj:pass
18	Film	_	PROPN	NNP	Foreign=Yes|Gender=Fem|Number=Sing	17	flat	_	SpaceAfter=No
19	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 orphan	color:blue
1	Ele	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
2	também	_	ADV	RB	_	3	advmod	_	_
3	construiu	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	e	_	CCONJ	CC	_	5	cc	_	_
5	renovou	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	3	conj	_	_
6	cinco	_	NUM	CD	_	7	nummod	_	_
7	mercados	_	NOUN	NN	Gender=Masc|Number=Plur	3	obj	_	_
8	tradicionais	_	ADJ	JJ	Gender=Masc|Number=Plur	7	amod	_	_
9	em	_	ADP	IN	_	10	case	_	_
10	2013	_	NUM	CD	Gender=Masc	3	obl	_	_
11	e	_	CCONJ	CC	_	13	cc	_	_
12	quatro	_	NUM	CD	_	13	nummod	_	_
13	mercados	_	NOUN	NN	Gender=Masc|Number=Plur	3	conj	_	orig_deprel=obj
14	tradicionais	_	ADJ	JJ	Gender=Masc|Number=Plur	13	amod	_	_
15	em	_	ADP	IN	_	13	orphan	_	orig_deprel=obl|ToDo=ex-adp-child
16	2014	_	NUM	CD	Gender=Masc	15	obj	_	SpaceAfter=No|ToDo=pobj
17	.	_	PUNCT	.	_	3	punct	_	_

~~~


