---
layout: base
title:  'Statistics of flat in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `flat`

This relation is universal.

698 nodes (1%) are attached to their parents as `flat`.

698 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.30659025787966.

The following 3 pairs of parts of speech are connected with `flat`: <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (582; 83% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (110; 16% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (6; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	John	John	PROPN	NNP	Number=Sing	0	root	_	_
2	FitzGibbon	Fitzgibbon	PROPN	NNP	Number=Sing	1	flat	_	SpaceAfter=No
3	,	,	PUNCT	,	_	5	punct	_	_
4	2nd	2nd	ADJ	JJ	Degree=Pos|NumType=Ord	5	amod	_	_
5	Earl	Earl	PROPN	NNP	Number=Sing	1	appos	_	_
6	of	of	ADP	IN	_	7	case	_	_
7	Clare	Clare	PROPN	NNP	Number=Sing	5	nmod	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	File	File	NOUN	NN	Number=Sing	2	compound	_	_
2	photo	photo	NOUN	NN	Number=Sing	0	root	_	_
3	of	of	ADP	IN	_	4	case	_	_
4	interviewee	interviewee	NOUN	NN	Number=Sing	2	nmod	_	_
5	David	David	PROPN	NNP	Number=Sing	4	flat	_	_
6	Titley	Titley	PROPN	NNP	Number=Sing	4	flat	_	SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 flat	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	letters	letter	NOUN	NNS	Number=Plur	3	nsubj	_	_
3	hint	hint	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	that	that	SCONJ	IN	_	9	mark	_	_
5	Mlle.	Mlle.	X	FW	_	9	nsubj	_	_
6	du	du	PROPN	NNP	Number=Sing	5	flat	_	_
7	Motel	Motel	PROPN	NNP	Number=Sing	5	flat	_	_
8	had	have	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	9	aux	_	_
9	confided	confide	VERB	VBN	Tense=Past|VerbForm=Part	3	ccomp	_	_
10	some	some	PRON	DT	_	9	obj	_	_
11	of	of	ADP	IN	_	13	case	_	_
12	her	her	PRON	PRP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	13	nmod:poss	_	_
13	troubles	trouble	NOUN	NNS	Number=Plur	10	nmod	_	_
14	to	to	ADP	TO	_	15	case	_	_
15	Galois	Galois	PROPN	NNP	Number=Sing	9	obl	_	SpaceAfter=No
16	,	,	PUNCT	,	_	21	punct	_	_
17	and	and	CCONJ	CC	_	21	cc	_	_
18	this	this	PRON	DT	Number=Sing|PronType=Dem	21	nsubj	_	_
19	might	might	AUX	MD	VerbForm=Fin	21	aux	_	_
20	have	have	AUX	VB	VerbForm=Inf	21	aux	_	_
21	prompted	prompt	VERB	VBN	Tense=Past|VerbForm=Part	3	conj	_	_
22	him	him	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	21	obj	_	_
23	to	to	PART	TO	_	24	mark	_	_
24	provoke	provoke	VERB	VB	VerbForm=Inf	21	xcomp	_	_
25	the	the	DET	DT	Definite=Def|PronType=Art	26	det	_	_
26	duel	duel	NOUN	NN	Number=Sing	24	obj	_	_
27	himself	himself	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	24	obl:npmod	_	_
28	on	on	ADP	IN	_	30	case	_	_
29	her	her	PRON	PRP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	30	nmod:poss	_	_
30	behalf	behalf	NOUN	NN	Number=Sing	24	obl	_	SpaceAfter=No
31	.	.	PUNCT	.	_	3	punct	_	_

~~~


