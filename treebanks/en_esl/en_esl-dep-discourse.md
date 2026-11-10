---
layout: base
title:  'Statistics of discourse in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `discourse`

This relation is universal.

87 nodes (0%) are attached to their parents as `discourse`.

74 instances of `discourse` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.91954022988506.

The following 14 pairs of parts of speech are connected with `discourse`: <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-INTJ.html">INTJ</a></tt> (54; 62% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-INTJ.html">INTJ</a></tt> (6; 7% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-INTJ.html">INTJ</a></tt> (5; 6% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADP.html">ADP</a></tt> (4; 5% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-INTJ.html">INTJ</a></tt> (2; 2% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_esl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_esl-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="en_esl-pos-NUM.html">NUM</a></tt>-<tt><a href="en_esl-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_esl-pos-PRON.html">PRON</a></tt>-<tt><a href="en_esl-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 discourse	color:blue
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
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 14 discourse	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	_	_	PRON	PRP	Person=2|PronType=Prs	2	obj	_	_
4	_	_	SCONJ	IN	_	7	mark	_	_
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	_	_	PRON	PRP	Number=Sing|Person=3|PronType=Prs	7	expl	_	_
7	_	_	ADJ	JJ	Degree=Pos	2	ccomp	_	_
8	_	_	PART	TO	_	9	mark	_	_
9	_	_	VERB	VB	VerbForm=Inf	7	csubj	_	_
10	_	_	DET	PRP$	Number=Sing|Poss=Yes|PronType=Prs	11	nmod:poss	_	_
11	_	_	NOUN	NN	Number=Sing	9	obj	_	_
12	_	_	ADP	RP	_	9	compound:prt	_	_
13	_	_	PUNCT	,	_	7	punct	_	_
14	_	_	INTJ	UH	_	7	discourse	_	_
15	_	_	PUNCT	,	_	2	punct	_	_
16	_	_	SCONJ	IN	_	18	mark	_	_
17	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	18	nsubj	_	_
18	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	2	advcl	_	_
19	_	_	PART	TO	_	20	mark	_	_
20	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	18	xcomp	_	_
21	_	_	DET	DT	PronType=Dem	22	det	_	_
22	_	_	NOUN	NN	Number=Sing	20	obj	_	_
23	_	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 discourse	color:blue
1	_	_	INTJ	UH	_	7	discourse	_	_
2	_	_	PUNCT	,	_	7	punct	_	_
3	_	_	PRON	PRP	Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
4	_	_	AUX	VBD	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	7	cop	_	_
5	_	_	DET	DT	PronType=Art	7	det	_	_
6	_	_	ADJ	JJ	Degree=Pos	7	amod	_	_
7	_	_	NOUN	NN	Number=Sing	0	root	_	_
8	_	_	PUNCT	.	_	7	punct	_	_

~~~


