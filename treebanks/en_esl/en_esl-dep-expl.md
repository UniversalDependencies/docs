---
layout: base
title:  'Statistics of expl in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `expl`

This relation is universal.

550 nodes (1%) are attached to their parents as `expl`.

530 instances of `expl` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.88909090909091.

The following 7 pairs of parts of speech are connected with `expl`: <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (347; 63% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (140; 25% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (58; 11% instances), <tt><a href="en_esl-pos-PRON.html">PRON</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-AUX.html">AUX</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 expl	color:blue
1	_	_	PRON	EX	PronType=Dem	2	expl	_	_
2	_	_	VERB	VBZ	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	_	_	DET	DT	PronType=Art	5	det	_	_
4	_	_	ADJ	JJ	Degree=Pos	5	amod	_	_
5	_	_	NOUN	NN	Number=Sing	2	nsubj	_	_
6	_	_	PART	TO	_	7	mark	_	_
7	_	_	VERB	VB	VerbForm=Inf	5	acl	_	_
8	_	_	ADV	RB	Degree=Pos	7	advmod	_	_
9	_	_	SCONJ	IN	_	12	mark	_	_
10	_	_	DET	DT	PronType=Art	11	det	_	_
11	_	_	NOUN	NNS	Number=Plur	12	nsubj	_	_
12	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	2	advcl	_	_
13	_	_	PART	RB	Polarity=Neg	12	advmod	_	_
14	_	_	VERB	VB	VerbForm=Inf	12	xcomp	_	_
15	_	_	PRON	NN	Number=Sing|PronType=Ind|Typo=Yes	14	obj	_	CorrectForm=anything
16	_	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 expl	color:blue
1	_	_	CCONJ	CC	_	3	cc	_	_
2	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
3	_	_	NOUN	NN	Number=Sing	0	root	_	_
4	_	_	PRON	DT	PronType=Dem	3	obj	_	_
5	_	_	PUNCT	,	_	3	punct	_	_
6	_	_	SCONJ	IN	_	9	mark	_	_
7	_	_	PRON	PRP	Number=Sing|Person=3|PronType=Prs	9	expl	_	_
8	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	_	_	ADJ	JJR	Degree=Cmp	3	advcl	_	_
10	_	_	PRON	NN	Number=Sing|PronType=Neg	11	obj	_	_
11	_	_	VERB	VBG	VerbForm=Ger	9	csubj	_	_
12	_	_	SCONJ	IN	_	13	mark	_	_
13	_	_	VERB	VBG	VerbForm=Ger	9	advcl	_	_
14	_	_	NOUN	NNS	Number=Plur	13	obj	_	_
15	_	_	ADP	IN	_	16	case	_	_
16	_	_	PRON	NN	Number=Sing|PronType=Ind	13	obl	_	_
17	_	_	PRON	WDT	PronType=Rel	18	nsubj	_	_
18	_	_	VERB	VB	VerbForm=Inf	16	acl:relcl	_	_
19	_	_	PRON	PRP	Case=Acc|Number=Plur|Person=1|PronType=Prs	18	obj	_	_
20	_	_	VERB	VB	VerbForm=Inf	18	xcomp	_	_
21	_	_	PRON	NN	Number=Sing|PronType=Ind	20	obj	_	_
22	_	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 expl	color:blue
1	_	_	ADV	RB	Degree=Pos|Typo=Yes	7	advmod	_	_
2	_	_	X	GW	_	1	goeswith	_	_
3	_	_	PRON	PRP	Number=Sing|Person=3|PronType=Prs	7	expl	_	_
4	_	_	AUX	VBD	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	7	cop	_	_
5	_	_	DET	DT	PronType=Art	7	det	_	_
6	_	_	ADJ	JJ	Degree=Pos	7	amod	_	_
7	_	_	NOUN	NN	Number=Sing	0	root	_	_
8	_	_	PART	TO	_	9	mark	_	_
9	_	_	VERB	VB	VerbForm=Inf	7	csubj	_	_
10	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=3|PronType=Prs	9	obj	_	_
11	_	_	PUNCT	,	_	7	punct	_	_

~~~


