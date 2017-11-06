---
layout: base
title:  'Statistics of flat in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="pt_pud-dep-flat-name.html">flat:name</a></tt>.

170 nodes (1%) are attached to their parents as `flat`.

170 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.81764705882353.

The following 3 pairs of parts of speech are connected with `flat`: <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt> (164; 96% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	O	_	DET	DT	Gender=Masc|Number=Sing	2	det	_	_
2	site	_	NOUN	NN	Gender=Masc|Number=Sing	8	nsubj	_	_
3	de	de	ADP	INDT	_	5	case	_	_
4	a	o	DET	_	Gender=Fem|Number=Sing	5	det	_	_
5	Yas	_	PROPN	NNP	Gender=Fem|Number=Sing	2	nmod	_	_
6	Marina	_	PROPN	NNP	Foreign=Yes|Gender=Fem|Number=Sing	5	flat	_	_
7	Circuit	_	PROPN	NNP	Foreign=Yes|Gender=Fem|Number=Sing	5	flat	_	_
8	tem	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
9	timings	_	NOUN	NN	Gender=Masc|Number=Plur	8	obj	_	_
10	exatos	_	ADJ	JJ	Gender=Masc|Number=Plur	9	amod	_	SpaceAfter=No
11	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 23 flat	color:blue
1	Esta	_	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	elaboração	_	NOUN	NN	Gender=Fem|Number=Sing	5	nsubj	_	_
3	foi	_	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	_
4	o	_	DET	DT	Gender=Masc|Number=Sing	5	det	_	_
5	ato	_	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
6	fundador	_	ADJ	JJ	Gender=Masc|Number=Sing	5	amod	_	_
7	de	de	ADP	INDT	_	9	case	_	_
8	a	o	DET	_	Gender=Fem|Number=Sing	9	det	_	_
9	lei	_	NOUN	NN	Gender=Fem|Number=Sing	5	nmod	_	ToDo=nmod
10	Romana	_	ADJ	JJ	Gender=Fem|Number=Sing	9	amod	_	SpaceAfter=No
11	,	_	PUNCT	,	_	14	punct	_	_
12	de	de	ADP	INDT	_	14	case	_	_
13	as	o	DET	_	Gender=Fem|Number=Plur	14	det	_	_
14	instituições	_	NOUN	NN	Gender=Fem|Number=Plur	9	conj	_	_
15	de	de	ADP	INDT	_	17	case	_	_
16	a	o	DET	_	Gender=Fem|Number=Sing	17	det	_	_
17	República	_	NOUN	NN	Gender=Fem|Number=Sing	14	nmod	_	Proper=True
18	Romana	_	ADJ	JJ	Gender=Fem|Number=Sing	17	amod	_	Proper=True
19	e	_	CCONJ	CC	_	22	cc	_	ToDo=ex-adp-child
20	de	de	ADP	INDT	_	22	case	_	_
21	o	o	DET	_	Gender=Masc|Number=Sing	22	det	_	_
22	mos	_	NOUN	NN	Gender=Masc|Number=Sing	9	conj	_	_
23	maiorum	_	NOUN	NN	Foreign=Yes|Gender=Masc|Number=Sing	22	flat	_	SpaceAfter=No
24	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	Baixo	_	ADJ	JJ	Gender=Masc|Number=Sing	2	amod	_	_
2	rendimento	_	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj:pass	_	_
3	per	_	ADP	IN	_	2	advmod	_	_
4	capita	_	NOUN	NN	Foreign=Yes|Gender=Fem|Number=Sing	3	flat	_	_
5	foi	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	aux:pass	_	_
6	proposto	_	VERB	VBN	Aspect=Perf|Gender=Masc|Number=Sing	0	root	_	_
7	como	_	ADP	IN	_	8	case	_	_
8	causa	_	NOUN	NN	Gender=Fem|Number=Sing	6	obl	_	_
9	de	_	ADP	IN	_	10	case	_	_
10	reclamação	_	NOUN	NN	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
11	,	_	PUNCT	,	_	12	punct	_	_
12	levando	_	VERB	VBG	Aspect=Imp	6	acl	_	_
13	a	a	ADP	INDT	_	15	case	_	_
14	a	o	DET	_	Gender=Fem|Number=Sing	15	det	_	_
15	rebelião	_	NOUN	NN	Gender=Fem|Number=Sing	12	obl	_	_
16	armada	_	ADJ	JJ	Gender=Fem|Number=Sing	15	amod	_	SpaceAfter=No
17	.	_	PUNCT	.	_	6	punct	_	_

~~~


