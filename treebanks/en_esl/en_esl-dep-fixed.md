---
layout: base
title:  'Statistics of fixed in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `fixed`

This relation is universal.

345 nodes (0%) are attached to their parents as `fixed`.

345 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.04927536231884.

The following 13 pairs of parts of speech are connected with `fixed`: <tt><a href="en_esl-pos-ADP.html">ADP</a></tt>-<tt><a href="en_esl-pos-ADP.html">ADP</a></tt> (90; 26% instances), <tt><a href="en_esl-pos-ADP.html">ADP</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (60; 17% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-ADP.html">ADP</a></tt> (60; 17% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-ADP.html">ADP</a></tt> (31; 9% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-ADV.html">ADV</a></tt> (31; 9% instances), <tt><a href="en_esl-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_esl-pos-SCONJ.html">SCONJ</a></tt> (25; 7% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADP.html">ADP</a></tt> (25; 7% instances), <tt><a href="en_esl-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_esl-pos-ADP.html">ADP</a></tt> (15; 4% instances), <tt><a href="en_esl-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="en_esl-pos-ADP.html">ADP</a></tt>-<tt><a href="en_esl-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-PART.html">PART</a></tt>-<tt><a href="en_esl-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-PART.html">PART</a></tt>-<tt><a href="en_esl-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 fixed	color:blue
1	_	_	ADP	IN	_	3	case	_	_
2	_	_	DET	DT	PronType=Art	3	det	_	_
3	_	_	NOUN	NN	Number=Sing	5	obl	_	_
4	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
5	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
6	_	_	PART	TO	_	7	mark	_	_
7	_	_	VERB	VB	VerbForm=Inf	5	xcomp	_	_
8	_	_	DET	DT	PronType=Art	9	det	_	_
9	_	_	NOUN	NN	Number=Sing	7	obj	_	_
10	_	_	PUNCT	,	_	5	punct	_	_
11	_	_	CCONJ	CC	_	14	cc	_	_
12	_	_	PRON	PRP	Number=Sing|Person=3|PronType=Prs	14	nsubj	_	_
13	_	_	AUX	VBD	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	14	cop	_	_
14	_	_	ADJ	JJ	Degree=Pos	5	conj	_	_
15	_	_	ADP	IN	ExtPos=ADP	17	case	_	_
16	_	_	ADP	IN	_	15	fixed	_	_
17	_	_	NOUN	NNS	Number=Plur	14	obl	_	_
18	_	_	ADP	IN	_	20	case	_	_
19	_	_	DET	DT	PronType=Art	20	det	_	_
20	_	_	NOUN	NN	Number=Sing	17	nmod	_	_
21	_	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	_	_	ADP	IN	ExtPos=ADV	16	advmod	_	_
2	_	_	NOUN	NN	Number=Sing	1	fixed	_	_
3	_	_	PUNCT	,	_	16	punct	_	_
4	_	_	SCONJ	IN	_	6	mark	_	_
5	_	_	PRON	NN	Number=Sing|PronType=Tot	6	nsubj	_	_
6	_	_	VERB	VBZ	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	16	advcl	_	_
7	_	_	ADJ	JJ	Degree=Pos	8	amod	_	_
8	_	_	NOUN	NN	Number=Sing	6	obj	_	_
9	_	_	CCONJ	CC	_	10	cc	_	_
10	_	_	NOUN	NN	Number=Sing	8	conj	_	_
11	_	_	PUNCT	,	_	16	punct	_	_
12	_	_	DET	DT	PronType=Art	13	det	_	_
13	_	_	NOUN	NNS	Number=Plur	16	nsubj	_	_
14	_	_	AUX	MD	Mood=Ind|VerbForm=Fin	16	aux	_	_
15	_	_	AUX	VB	VerbForm=Inf	16	cop	_	_
16	_	_	ADJ	JJR	Degree=Cmp	0	root	_	_
17	_	_	PUNCT	.	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 fixed	color:blue
1	_	_	ADP	IN	_	3	case	_	_
2	_	_	DET	DT	PronType=Art	3	det	_	_
3	_	_	NOUN	NN	Number=Sing|Typo=Yes	7	obl	_	CorrectForm=accommodation
4	_	_	PUNCT	,	_	7	punct	_	_
5	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
6	_	_	AUX	MD	Mood=Ind|VerbForm=Fin	7	aux	_	_
7	_	_	VERB	VB	VerbForm=Inf	0	root	_	_
8	_	_	NOUN	NNS	Number=Plur	7	obj	_	_
9	_	_	SCONJ	IN	_	11	mark	_	_
10	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
11	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	7	advcl	_	_
12	_	_	DET	DT	PronType=Art	13	det	_	_
13	_	_	NOUN	NN	Number=Sing	11	obj	_	_
14	_	_	ADP	IN	_	15	case	_	_
15	_	_	NOUN	NN	Number=Sing	13	nmod	_	_
16	_	_	ADV	RB	Degree=Pos|ExtPos=CCONJ	20	cc	_	_
17	_	_	ADV	RB	Degree=Pos	16	fixed	_	_
18	_	_	ADP	IN	_	16	fixed	_	_
19	_	_	NOUN	NN	Number=Sing	20	compound	_	_
20	_	_	NOUN	NNS	Number=Plur	13	conj	_	_
21	_	_	PUNCT	.	_	7	punct	_	_

~~~


