---
layout: base
title:  'Statistics of appos in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `appos`

This relation is universal.

202 nodes (0%) are attached to their parents as `appos`.

202 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.50990099009901.

The following 20 pairs of parts of speech are connected with `appos`: <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (95; 47% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (40; 20% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (21; 10% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (10; 5% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (8; 4% instances), <tt><a href="en_esl-pos-PRON.html">PRON</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (7; 3% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="en_esl-pos-NUM.html">NUM</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_esl-pos-NUM.html">NUM</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_esl-pos-DET.html">DET</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-SYM.html">SYM</a></tt>-<tt><a href="en_esl-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-X.html">X</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 17 appos	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	_	_	ADV	RB	Degree=Pos	2	advmod	_	_
4	_	_	SCONJ	IN	_	7	mark	_	_
5	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
6	_	_	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	7	aux	_	_
7	_	_	VERB	VBN	Tense=Past|VerbForm=Part	2	advcl	_	_
8	_	_	DET	DT	PronType=Art	9	det	_	_
9	_	_	NOUN	NN	Number=Sing	7	obj	_	_
10	_	_	ADP	IN	_	13	case	_	_
11	_	_	DET	DT	PronType=Art	13	det	_	_
12	_	_	ADJ	JJ	Degree=Pos	13	amod	_	_
13	_	_	NOUN	NN	Number=Sing	9	nmod	_	_
14	_	_	PUNCT	``	_	17	punct	_	_
15	_	_	ADP	IN	_	17	case	_	_
16	_	_	DET	DT	PronType=Art	17	det	_	_
17	_	_	NOUN	NN	Number=Sing	13	appos	_	_
18	_	_	PUNCT	''	_	17	punct	_	_
19	_	_	PUNCT	,	_	2	punct	_	_
20	_	_	CCONJ	CC	_	24	cc	_	_
21	_	_	ADJ	JJ	Degree=Pos	22	amod	_	_
22	_	_	NOUN	NNS	Number=Plur	24	nsubj	_	_
23	_	_	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	24	cop	_	_
24	_	_	ADJ	JJ	Degree=Pos	2	conj	_	_
25	_	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 appos	color:blue
1	_	_	NUM	CD	_	8	nsubj	_	_
2	_	_	ADP	IN	_	4	case	_	_
3	_	_	DET	PRP$	Number=Sing|Poss=Yes|PronType=Prs	4	nmod:poss	_	_
4	_	_	NOUN	NN	Number=Sing	1	nmod	_	_
5	_	_	PUNCT	,	_	4	punct	_	_
6	_	_	PROPN	NNP	_	4	appos	_	_
7	_	_	PUNCT	,	_	8	punct	_	_
8	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
9	_	_	PART	TO	_	10	mark	_	_
10	_	_	VERB	VB	VerbForm=Inf	8	xcomp	_	_
11	_	_	DET	DT	PronType=Art	13	det	_	_
12	_	_	ADJ	JJ	Degree=Pos	13	amod	_	_
13	_	_	NOUN	NN	Number=Sing	10	obj	_	_
14	_	_	DET	WDT	PronType=Rel	15	nsubj	_	_
15	_	_	VERB	VBZ	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	13	acl:relcl	_	_
16	_	_	SYM	$	_	15	obj	_	_
17	_	_	NUM	CD	_	16	nummod	_	_
18	_	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 appos	color:blue
1	_	_	PRON	WP	PronType=Int	6	nsubj	_	_
2	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
3	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	_	_	VERB	VBG	VerbForm=Ger	1	acl:relcl	_	_
5	_	_	PRON	PRP	Person=2|PronType=Prs	4	obj	_	_
6	_	_	VERB	VBZ	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	_	_	PART	TO	_	8	mark	_	_
8	_	_	VERB	VB	VerbForm=Inf	6	ccomp	_	_
9	_	_	DET	DT	PronType=Art	10	det	_	_
10	_	_	NOUN	NN	Number=Sing	8	obj	_	_
11	_	_	ADP	IN	_	13	case	_	_
12	_	_	DET	DT	PronType=Art	13	det	_	_
13	_	_	NOUN	NN	Number=Sing	10	nmod	_	_
14	_	_	ADP	IN	_	15	case	_	_
15	_	_	PROPN	NNP	_	13	nmod	_	_
16	_	_	DET	DT	PronType=Art	17	det	_	_
17	_	_	NOUN	NN	Number=Sing	15	appos	_	_
18	_	_	PUNCT	.	_	6	punct	_	_

~~~


