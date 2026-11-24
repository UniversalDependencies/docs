---
layout: base
title:  'Statistics of det in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="en_esl-dep-det-predet.html">det:predet</a></tt>.

7367 nodes (8%) are attached to their parents as `det`.

7334 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38753902538347.

The following 11 pairs of parts of speech are connected with `det`: <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (6984; 95% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (163; 2% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (86; 1% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (48; 1% instances), <tt><a href="en_esl-pos-PRON.html">PRON</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (40; 1% instances), <tt><a href="en_esl-pos-NUM.html">NUM</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (22; 0% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (18; 0% instances), <tt><a href="en_esl-pos-SYM.html">SYM</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="en_esl-pos-DET.html">DET</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	_	_	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
4	_	_	DET	PRP$	Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	_	_	NOUN	NN	Number=Sing	3	obj	_	_
6	_	_	ADP	IN	_	11	case	_	_
7	_	_	PUNCT	``	_	9	punct	_	_
8	_	_	DET	DT	PronType=Art	9	det	_	_
9	_	_	PROPN	NNP	_	11	compound	_	_
10	_	_	PUNCT	''	_	9	punct	_	_
11	_	_	NOUN	NN	Number=Sing	3	obl	_	_
12	_	_	ADP	IN	_	14	case	_	_
13	_	_	NOUN	NN	Number=Sing	14	compound	_	_
14	_	_	PROPN	NNP	_	3	obl	_	_
15	_	_	PUNCT	,	_	3	punct	_	_
16	_	_	CCONJ	CC	_	18	cc	_	_
17	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	18	nsubj	_	_
18	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	3	conj	_	_
19	_	_	ADP	IN	_	21	case	_	_
20	_	_	DET	DT	PronType=Art	21	det	_	_
21	_	_	NOUN	NN	Number=Sing	18	obl	_	_
22	_	_	ADP	IN	_	24	case	_	_
23	_	_	ADJ	JJ	Degree=Pos	24	amod	_	_
24	_	_	PROPN	NNP	_	18	obl	_	_
25	_	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	_	_	NOUN	NN	Number=Sing	0	root	_	_
2	_	_	PUNCT	:	_	1	punct	_	_
3	_	_	PRON	PRP	Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
4	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	_	_	DET	DT	PronType=Art	6	det	_	_
6	_	_	ADJ	JJ	Degree=Pos	1	parataxis	_	_
7	_	_	ADP	IN	_	9	case	_	_
8	_	_	DET	DT	PronType=Dem	9	det	_	_
9	_	_	NOUN	NN	Number=Sing|Typo=Yes	6	obl	_	CorrectForm=epoch
10	_	_	ADP	IN	_	12	case	_	_
11	_	_	ADJ	JJ	Degree=Pos	12	amod	_	_
12	_	_	NOUN	NN	Number=Sing	6	obl	_	_
13	_	_	ADP	IN	_	15	case	_	_
14	_	_	DET	DT	PronType=Art	15	det	_	_
15	_	_	NOUN	NN	Number=Sing	12	nmod	_	_
16	_	_	CCONJ	CC	_	18	cc	_	_
17	_	_	ADJ	JJ	Degree=Pos	18	amod	_	_
18	_	_	NOUN	NN	Number=Sing	12	conj	_	_
19	_	_	ADP	IN	_	20	case	_	_
20	_	_	NOUN	NN	Number=Sing	18	nmod	_	_
21	_	_	ADP	IN	_	24	case	_	_
22	_	_	DET	DT	PronType=Art	24	det	_	_
23	_	_	NOUN	NN	Number=Sing	24	compound	_	_
24	_	_	NOUN	NN	Number=Sing	20	nmod	_	_
25	_	_	PUNCT	.	_	1	punct	_	_

~~~


