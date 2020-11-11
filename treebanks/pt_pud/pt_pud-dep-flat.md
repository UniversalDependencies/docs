---
layout: base
title:  'Statistics of flat in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="pt_pud-dep-flat-name.html">flat:name</a></tt>.

162 nodes (1%) are attached to their parents as `flat`.

162 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.81481481481481.

The following 2 pairs of parts of speech are connected with `flat`: <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt> (158; 98% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (4; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	O	o	DET	DT	Gender=Masc|Number=Sing	2	det	_	_
2	site	site	NOUN	NN	Gender=Masc|Number=Sing	8	nsubj	_	_
3	de	de	ADP	INDT	_	5	case	_	_
4	a	o	DET	_	Gender=Fem|Number=Sing	5	det	_	_
5	Yas	Yas	PROPN	NNP	Gender=Fem|Number=Sing	2	nmod	_	_
6	Marina	Marina	PROPN	NNP	Foreign=Yes|Gender=Fem|Number=Sing	5	flat	_	_
7	Circuit	Circuit	PROPN	NNP	Foreign=Yes|Gender=Fem|Number=Sing	5	flat	_	_
8	tem	ter	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
9	timings	_	NOUN	X	Gender=Masc|Number=Plur	8	obj	_	LoanWord=True
10	exatos	exato	ADJ	X	Gender=Masc|Number=Plur	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 23 flat	color:blue
1	Esta	_	DET	DT	Gender=Fem|Number=Sing	2	det	_	_
2	elaboração	elaboração	NOUN	NN	Gender=Fem|Number=Sing	5	nsubj	_	_
3	foi	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	_
4	o	o	DET	DT	Gender=Masc|Number=Sing	5	det	_	_
5	ato	ato	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
6	fundador	fundador	ADJ	JJ	Gender=Masc|Number=Sing	5	amod	_	_
7	de	de	ADP	INDT	_	9	case	_	_
8	a	o	DET	_	Gender=Fem|Number=Sing	9	det	_	_
9	lei	lei	NOUN	NN	Gender=Fem|Number=Sing	5	nmod	_	ToDo=nmod
10	Romana	romano	ADJ	JJ	Gender=Fem|Number=Sing	9	amod	_	SpaceAfter=No
11	,	,	PUNCT	,	_	14	punct	_	_
12	de	de	ADP	INDT	_	14	case	_	_
13	as	o	DET	_	Gender=Fem|Number=Plur	14	det	_	_
14	instituições	instituição	NOUN	NN	Gender=Fem|Number=Plur	9	conj	_	_
15	de	de	ADP	INDT	_	17	case	_	_
16	a	o	DET	_	Gender=Fem|Number=Sing	17	det	_	_
17	República	_	NOUN	NN	Gender=Fem|Number=Sing	14	nmod	_	Proper=True
18	Romana	romano	ADJ	JJ	Gender=Fem|Number=Sing	17	amod	_	Proper=True
19	e	e	CCONJ	CC	_	22	cc	_	ToDo=ex-adp-child
20	de	de	ADP	INDT	_	22	case	_	_
21	o	o	DET	_	Gender=Masc|Number=Sing	22	det	_	_
22	mos	_	NOUN	X	Gender=Masc|Number=Sing	9	conj	_	LoanWord=True
23	maiorum	_	NOUN	X	Foreign=Yes|Gender=Masc|Number=Sing	22	flat	_	LoanWord=True|SpaceAfter=No
24	.	.	PUNCT	.	_	5	punct	_	_

~~~


