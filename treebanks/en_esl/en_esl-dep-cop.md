---
layout: base
title:  'Statistics of cop in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `cop`

This relation is universal.

2835 nodes (3%) are attached to their parents as `cop`.

2767 instances of `cop` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.00634920634921.

The following 12 pairs of parts of speech are connected with `cop`: <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (1621; 57% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (916; 32% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (88; 3% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (79; 3% instances), <tt><a href="en_esl-pos-NUM.html">NUM</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (51; 2% instances), <tt><a href="en_esl-pos-PRON.html">PRON</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (37; 1% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (30; 1% instances), <tt><a href="en_esl-pos-DET.html">DET</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="en_esl-pos-SYM.html">SYM</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="en_esl-pos-X.html">X</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="en_esl-pos-ADP.html">ADP</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-PART.html">PART</a></tt>-<tt><a href="en_esl-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	_	_	DET	PRP$	Number=Sing|Poss=Yes|PronType=Prs	2	nmod:poss	_	_
2	_	_	NOUN	NNS	Number=Plur	5	nsubj	_	_
3	_	_	AUX	VBD	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	5	cop	_	_
4	_	_	PART	RB	Polarity=Neg	5	advmod	_	_
5	_	_	ADJ	JJ	Degree=Pos	0	root	_	_
6	_	_	ADV	RB	Degree=Pos|Typo=Yes	5	advmod	_	CorrectForm=enough
7	_	_	PART	TO	_	8	mark	_	_
8	_	_	VERB	VB	VerbForm=Inf	6	xcomp	_	_
9	_	_	DET	PRP$	Number=Sing|Poss=Yes|PronType=Prs	10	nmod:poss	_	_
10	_	_	NOUN	NN	Number=Sing	8	obj	_	_
11	_	_	ADP	IN	_	13	case	_	_
12	_	_	NOUN	NN	Number=Sing	13	compound	_	_
13	_	_	NOUN	NN	Number=Sing	10	nmod	_	_
14	_	_	PUNCT	,	_	5	punct	_	_
15	_	_	CCONJ	CC	_	20	cc	_	_
16	_	_	DET	DT	PronType=Art	18	det	_	_
17	_	_	NOUN	NN	Number=Sing	18	compound	_	_
18	_	_	NOUN	NN	Number=Sing	20	nsubj	_	_
19	_	_	AUX	VBD	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	20	cop	_	_
20	_	_	ADJ	JJ	Degree=Pos	5	conj	_	_
21	_	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 cop	color:blue
1	_	_	VERB	VBG	VerbForm=Ger	7	advcl	_	_
2	_	_	PRON	PRP	Number=Sing|Person=3|PronType=Prs	1	obj	_	_
3	_	_	ADP	IN	_	4	case	_	_
4	_	_	NOUN	NN	Number=Sing	1	obl	_	_
5	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
6	_	_	AUX	MD	Mood=Ind|VerbForm=Fin	7	aux	_	_
7	_	_	VERB	VB	VerbForm=Inf	0	root	_	_
8	_	_	PART	TO	_	9	mark	_	_
9	_	_	VERB	VB	VerbForm=Inf	7	xcomp	_	_
10	_	_	SCONJ	IN	_	16	mark	_	_
11	_	_	DET	DT	PronType=Art	12	det	_	_
12	_	_	NOUN	NN	Number=Sing	16	nsubj	_	_
13	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	_	_
14	_	_	DET	DT	PronType=Art	16	det	_	_
15	_	_	ADJ	JJ	Degree=Pos	16	amod	_	_
16	_	_	NOUN	NN	Number=Sing	9	ccomp	_	_
17	_	_	ADP	IN	_	19	case	_	_
18	_	_	DET	DT	PronType=Art	19	det	_	_
19	_	_	NOUN	NNS	Number=Plur	16	obl	_	_
20	_	_	PUNCT	,	_	19	punct	_	_
21	_	_	NOUN	NNS	Number=Plur	19	conj	_	_
22	_	_	PUNCT	,	_	19	punct	_	_
23	_	_	NOUN	NNS	Number=Plur	19	conj	_	_
24	_	_	CCONJ	CC	_	26	cc	_	_
25	_	_	ADV	RB	Degree=Pos	26	advmod	_	_
26	_	_	ADV	RB	Degree=Pos	19	advmod	_	_
27	_	_	CCONJ	CC	_	28	cc	_	_
28	_	_	ADV	RB	Degree=Pos	19	advmod	_	_
29	_	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 15 cop	color:blue
1	_	_	ADV	RB	Degree=Pos	17	advmod	_	_
2	_	_	ADP	IN	_	3	case	_	_
3	_	_	DET	DT	PronType=Tot	1	obl	_	_
4	_	_	PUNCT	,	_	17	punct	_	_
5	_	_	DET	DT	PronType=Art	6	det	_	_
6	_	_	NOUN	NN	Number=Sing	17	nsubj	_	_
7	_	_	ADP	IN	_	8	case	_	_
8	_	_	NOUN	NN	Number=Sing	6	nmod	_	_
9	_	_	DET	WDT	PronType=Rel	13	obl	_	_
10	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	13	nsubj:pass	_	_
11	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	13	aux	_	_
12	_	_	AUX	VBN	Tense=Past|VerbForm=Part	13	aux:pass	_	_
13	_	_	VERB	VBN	Tense=Past|VerbForm=Part	8	acl:relcl	_	_
14	_	_	ADP	IN	_	9	case	_	_
15	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	_
16	_	_	PROPN	NNP	_	17	compound	_	_
17	_	_	PROPN	NNP	_	0	root	_	_
18	_	_	PUNCT	.	_	17	punct	_	_

~~~


