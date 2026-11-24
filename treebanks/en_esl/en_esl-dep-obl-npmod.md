---
layout: base
title:  'Statistics of obl:npmod in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `obl:npmod`

This relation is a language-specific subtype of <tt><a href="en_esl-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_esl-dep-obl-tmod.html">obl:tmod</a></tt>.

161 nodes (0%) are attached to their parents as `obl:npmod`.

109 instances of `obl:npmod` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.49689440993789.

The following 10 pairs of parts of speech are connected with `obl:npmod`: <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (65; 40% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (58; 36% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (22; 14% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (6; 4% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:npmod	color:blue
1	_	_	DET	DT	PronType=Ind	2	det	_	_
2	_	_	NOUN	NNS	Number=Plur	3	obl:npmod	_	_
3	_	_	ADV	RB	Degree=Pos	6	advmod	_	_
4	_	_	DET	PRP$	Number=Sing|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	_	_	NOUN	NN	Number=Sing	6	nsubj	_	_
6	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	_	_	DET	DT	PronType=Art	9	det	_	_
8	_	_	ADJ	JJ	Degree=Pos	9	amod	_	_
9	_	_	NOUN	NN	Number=Sing	6	obj	_	_
10	_	_	ADP	IN	_	11	case	_	_
11	_	_	NOUN	NN	Number=Sing	9	nmod	_	_
12	_	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 3 obl:npmod	color:blue
1	_	_	CCONJ	CC	_	13	cc	_	_
2	_	_	NUM	CD	_	3	nummod	_	_
3	_	_	NOUN	NN	Number=Sing	13	obl:npmod	_	_
4	_	_	SCONJ	IN	_	7	mark	_	_
5	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
6	_	_	AUX	VBD	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	7	aux	_	_
7	_	_	VERB	VBG	VerbForm=Ger	13	advcl	_	_
8	_	_	ADV	RB	Degree=Pos	7	advmod	_	_
9	_	_	ADP	IN	_	11	case	_	_
10	_	_	DET	DT	PronType=Tot	11	det	_	_
11	_	_	NOUN	NN	Number=Sing	7	obl	_	_
12	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	_
13	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
14	_	_	PROPN	NNP	_	13	obj	_	_
15	_	_	ADP	IN	_	17	case	_	_
16	_	_	DET	DT	PronType=Art	17	det	_	_
17	_	_	NOUN	NN	Number=Sing	13	obl	_	_
18	_	_	ADP	IN	_	21	case	_	_
19	_	_	DET	PRP$	Number=Plur|Poss=Yes|PronType=Prs	21	nmod:poss	_	_
20	_	_	NOUN	NN	Number=Sing	21	compound	_	_
21	_	_	NOUN	NN	Number=Sing	17	nmod	_	_
22	_	_	VERB	VBG	VerbForm=Ger	13	advcl	_	_
23	_	_	ADP	IN	_	25	case	_	_
24	_	_	DET	PRP$	Number=Sing|Poss=Yes|PronType=Prs	25	nmod:poss	_	_
25	_	_	NOUN	NN	Number=Sing	22	obj	_	_
26	_	_	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obl:npmod	color:blue
1	_	_	DET	DT	PronType=Art	3	det	_	_
2	_	_	ADJ	JJ	Degree=Pos	3	amod	_	_
3	_	_	NOUN	NN	Number=Sing	8	nsubj	_	_
4	_	_	AUX	VBD	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	8	cop	_	_
5	_	_	ADV	RB	Degree=Pos	8	advmod	_	_
6	_	_	NUM	CD	_	7	nummod	_	_
7	_	_	NOUN	NN	Number=Sing	8	obl:npmod	_	_
8	_	_	ADJ	JJ	Degree=Pos	0	root	_	_
9	_	_	CCONJ	CC	_	17	cc	_	_
10	_	_	ADP	IN	_	12	case	_	_
11	_	_	DET	DT	PronType=Dem	12	det	_	_
12	_	_	NOUN	NN	Number=Sing	17	obl	_	_
13	_	_	PUNCT	,	_	17	punct	_	_
14	_	_	PRON	PRP	Number=Sing|Person=3|PronType=Prs	17	expl	_	_
15	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	_
16	_	_	ADV	RB	Degree=Pos	17	advmod	_	_
17	_	_	ADJ	JJ	Degree=Pos	8	conj	_	_
18	_	_	PART	TO	_	19	mark	_	_
19	_	_	VERB	VB	VerbForm=Inf	17	csubj	_	_
20	_	_	DET	PRP$	Poss=Yes|PronType=Prs	21	nmod:poss	_	_
21	_	_	NOUN	NN	Number=Sing	19	obj	_	_
22	_	_	VERB	VBN	Tense=Past|VerbForm=Part	19	xcomp	_	_
23	_	_	VERB	VBG	VerbForm=Ger	19	xcomp	_	_
24	_	_	DET	DT	PronType=Art	26	det	_	_
25	_	_	ADJ	JJ	Degree=Pos	26	amod	_	_
26	_	_	NOUN	NN	Number=Sing	23	obj	_	_
27	_	_	PUNCT	.	_	8	punct	_	_

~~~


