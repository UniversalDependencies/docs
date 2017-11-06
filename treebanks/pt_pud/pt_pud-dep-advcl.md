---
layout: base
title:  'Statistics of advcl in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `advcl`

This relation is universal.

115 nodes (0%) are attached to their parents as `advcl`.

75 instances of `advcl` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.095652173913.

The following 9 pairs of parts of speech are connected with `advcl`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (74; 64% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (18; 16% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (6; 5% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (5; 4% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 17 advcl	color:blue
1	Porém	_	CCONJ	CC	_	5	discourse	_	SpaceAfter=No
2	,	_	PUNCT	,	_	1	punct	_	_
3	eles	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Plur|Person=3	5	nsubj	_	_
4	não	_	ADV	RB	Polarity=Neg	5	advmod	_	_
5	expandiram	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	_
6	até	_	ADV	RB	_	17	mark	_	_
7	que	_	ADP	IN	_	6	fixed	_	_
8	navios	_	NOUN	NN	Gender=Masc|Number=Plur	17	nsubj:pass	_	_
9	grandes	_	ADJ	JJ	Gender=Masc|Number=Plur	8	amod	_	_
10	o	_	DET	DT	Gender=Masc|Number=Sing	11	det	_	_
11	suficiente	_	NOUN	NN	Gender=Masc|Number=Sing	9	advmod	_	_
12	para	_	ADP	IN	_	13	case	_	_
13	cruzar	_	VERB	VB	_	9	xcomp	_	_
14	os	_	DET	DT	Gender=Masc|Number=Plur	15	det	_	_
15	mares	_	NOUN	NN	Gender=Masc|Number=Plur	13	obj	_	_
16	fossem	_	VERB	VBC	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Past	17	aux:pass	_	_
17	contruídos	_	VERB	VBN	Aspect=Perf|Gender=Masc|Number=Plur	5	advcl	_	SpaceAfter=No
18	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 advcl	color:blue
1	Em	_	ADP	IN	_	2	case	_	_
2	teoria	_	NOUN	NN	Gender=Fem|Number=Sing	11	obl	_	SpaceAfter=No
3	,	_	PUNCT	,	_	2	punct	_	_
4	se	_	ADP	IN	_	7	mark	_	_
5	for	_	VERB	VBC	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Fut	7	aux:pass	_	_
6	bem	_	ADV	RB	_	7	advmod	_	_
7	feito	_	VERB	VBN	Aspect=Perf|Gender=Masc|Number=Sing	11	advcl	_	SpaceAfter=No
8	,	_	PUNCT	,	_	7	punct	_	_
9	não	_	ADV	RB	Polarity=Neg	11	advmod	_	_
10	é	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	11	cop	_	_
11	detectável	_	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
12	.	_	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 17 advcl	color:blue
1	Mas	_	CCONJ	CC	_	20	discourse	_	SpaceAfter=No
2	,	_	PUNCT	,	_	17	punct	_	_
3	a	a	ADP	INDT	_	17	mark	_	_
4	a	o	DET	_	Gender=Fem|Number=Sing	3	fixed	_	_
5	medida	_	NOUN	NN	Gender=Fem|Number=Sing	3	fixed	_	_
6	que	_	ADP	IN	_	3	fixed	_	_
7	a	_	DET	DT	Gender=Fem|Number=Sing	8	det	_	_
8	crítica	_	NOUN	NN	Gender=Fem|Number=Sing	17	nsubj	_	_
9	contra	_	ADP	IN	_	10	case	_	_
10	Clinton	_	PROPN	NNP	Gender=Fem|Number=Sing	8	nmod	_	_
11	como	_	ADP	IN	_	12	case	_	_
12	Primeira	_	NOUN	NN	Gender=Fem|Number=Sing	10	nmod	_	_
13	Dama	_	X	GW	_	12	compound	_	_
14	se	_	PRON	SE	Person=3	17	compound:prt	_	_
15	tornou	_	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	17	cop	_	_
16	mais	_	ADV	RBR	_	17	advmod	_	_
17	ácida	_	ADJ	JJ	Gender=Fem|Number=Sing	20	advcl	_	SpaceAfter=No
18	,	_	PUNCT	,	_	17	punct	_	_
19	Karel	_	PROPN	NNP	Gender=Masc|Number=Sing	20	nsubj	_	_
20	demonstrou	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
21	mais	_	ADJ	JJR	Gender=Fem|Number=Sing	22	amod	_	_
22	empatia	_	NOUN	NN	Gender=Fem|Number=Sing	20	obj	_	SpaceAfter=No
23	.	_	PUNCT	.	_	20	punct	_	_

~~~


