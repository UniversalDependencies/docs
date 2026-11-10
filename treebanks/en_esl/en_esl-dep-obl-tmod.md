---
layout: base
title:  'Statistics of obl:tmod in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="en_esl-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_esl-dep-obl-npmod.html">obl:npmod</a></tt>.

284 nodes (0%) are attached to their parents as `obl:tmod`.

166 instances of `obl:tmod` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.97887323943662.

The following 13 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (217; 76% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (17; 6% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (12; 4% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (11; 4% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (8; 3% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-NUM.html">NUM</a></tt> (6; 2% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="en_esl-pos-ADP.html">ADP</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-AUX.html">AUX</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-DET.html">DET</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 obl:tmod	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	_	_	DET	DT	PronType=Ind	4	det	_	_
4	_	_	NOUN	NNS	Number=Plur|Typo=Yes	2	obj	_	CorrectForm=photographs
5	_	_	CCONJ	CC	_	8	cc	_	_
6	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
7	_	_	AUX	MD	Mood=Ind|VerbForm=Fin	8	aux	_	_
8	_	_	VERB	VB	VerbForm=Inf	2	conj	_	_
9	_	_	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	8	obj	_	_
10	_	_	ADP	IN	_	11	case	_	_
11	_	_	PRON	PRP	Person=2|PronType=Prs	8	obl	_	_
12	_	_	ADV	WRB	_	14	mark	_	_
13	_	_	PRON	PRP	Person=2|PronType=Prs	14	nsubj	_	_
14	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	8	advcl	_	_
15	_	_	ADJ	JJ	Degree=Pos	16	amod	_	_
16	_	_	NOUN	NN	Number=Sing	14	obl:tmod	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 obl:tmod	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	_	_	SCONJ	IN	_	14	mark	_	_
4	_	_	ADV	RB	Degree=Pos	5	advmod	_	_
5	_	_	ADJ	JJR	Degree=Cmp	7	amod	_	_
6	_	_	ADJ	JJ	Degree=Pos	7	amod	_	_
7	_	_	NOUN	NNS	Number=Plur	14	nsubj	_	_
8	_	_	ADP	IN	_	9	case	_	_
9	_	_	NOUN	NNS	Number=Plur	7	nmod	_	_
10	_	_	CCONJ	CC	_	11	cc	_	_
11	_	_	NOUN	NNS	Number=Plur	9	conj	_	_
12	_	_	AUX	MD	Mood=Ind|VerbForm=Fin	14	aux	_	_
13	_	_	AUX	VB	VerbForm=Inf	14	cop	_	_
14	_	_	ADJ	JJ	Degree=Pos	2	ccomp	_	_
15	_	_	ADJ	JJ	Degree=Pos	16	amod	_	_
16	_	_	NOUN	NN	Number=Sing	14	obl:tmod	_	_
17	_	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:tmod	color:blue
1	_	_	NOUN	NN	Number=Sing	0	root	_	_
2	_	_	DET	DT	PronType=Dem	3	det	_	_
3	_	_	NOUN	NN	Number=Sing	1	obl:tmod	_	_
4	_	_	DET	DT	PronType=Ind	5	det	_	_
5	_	_	NOUN	NNS	Number=Plur	12	nsubj	_	_
6	_	_	PUNCT	,	_	5	punct	_	_
7	_	_	DET	WDT	PronType=Rel	10	obj	_	_
8	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
9	_	_	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	10	aux	_	_
10	_	_	VERB	VBN	Tense=Past|VerbForm=Part	5	acl:relcl	_	_
11	_	_	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	12	cop	_	_
12	_	_	ADJ	JJ	Degree=Pos	1	parataxis	_	_
13	_	_	CCONJ	CC	_	15	cc	_	_
14	_	_	PRON	EX	PronType=Dem	15	expl	_	_
15	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	12	conj	_	_
16	_	_	DET	DT	PronType=Ind	17	det	_	_
17	_	_	NOUN	NN	Number=Sing	15	nsubj	_	_
18	_	_	ADP	IN	_	19	case	_	_
19	_	_	NOUN	NN	Number=Sing	17	nmod	_	_
20	_	_	ADP	IN	_	22	case	_	_
21	_	_	DET	DT	PronType=Ind	22	det	_	_
22	_	_	NOUN	NN	Number=Sing	15	obl	_	_

~~~


