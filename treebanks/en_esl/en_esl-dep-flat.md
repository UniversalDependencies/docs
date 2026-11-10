---
layout: base
title:  'Statistics of flat in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `flat`

This relation is universal.

171 nodes (0%) are attached to their parents as `flat`.

171 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02923976608187.

The following 3 pairs of parts of speech are connected with `flat`: <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (167; 98% instances), <tt><a href="en_esl-pos-X.html">X</a></tt>-<tt><a href="en_esl-pos-X.html">X</a></tt> (3; 2% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	_	_	VERB	VB	VerbForm=Inf	0	root	_	_
2	_	_	PRON	PRP	Person=2|PronType=Prs	1	obj	_	_
3	_	_	PROPN	NNP	_	4	compound	_	_
4	_	_	PROPN	NNP	_	1	vocative	_	_
5	_	_	PROPN	NNP	_	4	flat	_	_
6	_	_	PUNCT	,	_	1	punct	_	_
7	_	_	CCONJ	CC	_	9	cc	_	_
8	_	_	INTJ	UH	_	9	discourse	_	_
9	_	_	VERB	VB	VerbForm=Inf	1	conj	_	_
10	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	9	obj	_	_
11	_	_	ADV	RB	Degree=Pos	9	advmod	_	_
12	_	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat	color:blue
1	_	_	CCONJ	CC	_	10	cc	_	_
2	_	_	PUNCT	,	_	10	punct	_	_
3	_	_	ADV	RB	Degree=Pos	10	advmod	_	_
4	_	_	PUNCT	,	_	10	punct	_	_
5	_	_	DET	DT	PronType=Art	6	det	_	_
6	_	_	NOUN	NN	Number=Sing	8	nmod:poss	_	_
7	_	_	PART	POS	_	6	case	_	_
8	_	_	NOUN	NN	Number=Sing	10	nsubj	_	_
9	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	_	_	X	FW	_	0	root	_	_
11	_	_	X	FW	Foreign=Yes	10	flat	_	_
12	_	_	X	FW	Foreign=Yes	10	flat	_	_
13	_	_	X	FW	Foreign=Yes	10	flat	_	_
14	_	_	CCONJ	CC	_	19	cc	_	_
15	_	_	PRON	DT	PronType=Dem	19	nsubj	_	_
16	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	cop	_	_
17	_	_	DET	DT	PronType=Art	19	det	_	_
18	_	_	ADJ	JJS	Degree=Sup	19	amod	_	_
19	_	_	NOUN	NN	Number=Sing	10	conj	_	_
20	_	_	PART	TO	_	21	mark	_	_
21	_	_	VERB	VB	VerbForm=Inf	19	acl	_	_
22	_	_	ADP	IN	_	21	obl	_	_
23	_	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 flat	color:blue
1	_	_	ADV	RB	Degree=Pos	2	advmod	_	_
2	_	_	ADV	RB	Degree=Pos	8	advmod	_	_
3	_	_	PUNCT	,	_	8	punct	_	_
4	_	_	DET	DT	PronType=Art	5	det	_	_
5	_	_	NOUN	NN	Number=Sing	8	obl:tmod	_	_
6	_	_	ADJ	JJR	Degree=Cmp	5	amod	_	_
7	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
8	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
9	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	8	iobj	_	_
10	_	_	DET	DT	PronType=Art	11	det	_	_
11	_	_	NOUN	NN	Number=Sing	8	obj	_	_
12	_	_	ADP	IN	_	14	case	_	_
13	_	_	DET	DT	PronType=Art	14	det	_	_
14	_	_	NOUN	NN	Number=Sing	11	acl	_	_
15	_	_	NOUN	NN	Foreign=Yes|Number=Sing	14	flat	_	_
16	_	_	PUNCT	,	_	11	punct	_	_
17	_	_	VERB	VBG	VerbForm=Ger	11	acl:relcl	_	_
18	_	_	NOUN	NN	Number=Sing	17	obj	_	_
19	_	_	ADP	IN	_	22	case	_	_
20	_	_	NUM	CD	_	22	nummod	_	_
21	_	_	ADJ	JJ	Degree=Pos	22	amod	_	_
22	_	_	NOUN	NNS	Number=Plur	18	nmod	_	_
23	_	_	PRON	DT	PronType=Dem	25	nsubj	_	_
24	_	_	ADV	RB	Degree=Pos	25	advmod	_	_
25	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	22	acl:relcl	_	_
26	_	_	PROPN	NNP	_	25	obj	_	_
27	_	_	ADP	IN	_	29	case	_	_
28	_	_	DET	DT	PronType=Dem	29	det	_	_
29	_	_	NOUN	NN	Number=Sing	25	obl	_	_
30	_	_	PUNCT	.	_	8	punct	_	_

~~~


