---
layout: base
title:  'Statistics of nmod:poss in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="en_esl-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="en_esl-dep-nmod-npmod.html">nmod:npmod</a></tt>.

2100 nodes (2%) are attached to their parents as `nmod:poss`.

2100 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32904761904762.

The following 12 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (1905; 91% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (116; 6% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (33; 2% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-PRON.html">PRON</a></tt> (17; 1% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (15; 1% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-DET.html">DET</a></tt> (7; 0% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-NUM.html">NUM</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 nmod:poss	color:blue
1	_	_	ADP	IN	_	3	case	_	_
2	_	_	DET	DT	PronType=Art	3	det	_	_
3	_	_	NOUN	NN	Number=Sing	6	obl	_	_
4	_	_	PUNCT	,	_	6	punct	_	_
5	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	_	_	ADP	IN	_	8	case	_	_
8	_	_	NOUN	NN	Number=Sing	6	obl	_	_
9	_	_	ADV	RB	Degree=Pos	8	advmod	_	_
10	_	_	PUNCT	-LRB-	_	11	punct	_	_
11	_	_	CCONJ	CC	_	12	cc	_	_
12	_	_	NOUN	NN	Number=Sing|Typo=Yes	8	conj	_	CorrectForm=payment
13	_	_	ADP	IN	_	16	case	_	_
14	_	_	DET	PRP$	Number=Sing|Poss=Yes|PronType=Prs	16	nmod:poss	_	_
15	_	_	ADJ	JJ	Degree=Pos|Typo=Yes	16	amod	_	CorrectForm=horrible
16	_	_	NOUN	NN	Number=Sing	12	nmod	_	_
17	_	_	PUNCT	-RRB-	_	12	punct	_	_
18	_	_	PUNCT	:	_	6	punct	_	_
19	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	21	aux	_	_
20	_	_	PRON	PRP	Person=2|PronType=Prs	21	nsubj	_	_
21	_	_	VERB	VB	VerbForm=Inf	6	parataxis	_	_
22	_	_	PRON	NN	Number=Sing|PronType=Ind	23	nsubj	_	_
23	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	21	ccomp	_	_
24	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	23	iobj	_	_
25	_	_	ADP	RP	_	23	compound:prt	_	_
26	_	_	PRON	NN	Number=Sing|PronType=Ind	23	obj	_	_
27	_	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 nmod:poss	color:blue
1	_	_	CCONJ	CC	_	12	advmod	_	_
2	_	_	ADP	IN	_	5	case	_	_
3	_	_	DET	DT	PronType=Art	5	det	_	_
4	_	_	ADJ	JJ	Degree=Pos	5	amod	_	_
5	_	_	NOUN	NN	Number=Sing	12	obl	_	_
6	_	_	PRON	PRP	Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
7	_	_	AUX	VBD	Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	12	cop	_	_
8	_	_	DET	PRP$	Number=Sing|Poss=Yes|PronType=Prs	10	nmod:poss	_	_
9	_	_	ADJ	JJR	Degree=Cmp	10	amod	_	_
10	_	_	NOUN	NN	Number=Sing	12	nmod:poss	_	_
11	_	_	PART	POS	_	10	case	_	_
12	_	_	NOUN	NN	Number=Sing	0	root	_	_
13	_	_	PUNCT	,	_	12	punct	_	_
14	_	_	PRON	WDT	PronType=Rel	17	obl	_	_
15	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	17	nsubj	_	_
16	_	_	AUX	MD	Mood=Ind|VerbForm=Fin	17	aux	_	_
17	_	_	VERB	VB	VerbForm=Inf	12	acl:relcl	_	_
18	_	_	ADP	IN	_	14	case	_	_
19	_	_	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:poss	color:blue
1	_	_	ADV	RB	Degree=Pos	9	advmod	_	_
2	_	_	DET	PDT	PronType=Tot	4	det:predet	_	_
3	_	_	DET	DT	PronType=Art	4	det	_	_
4	_	_	PROPN	NNP	_	6	nmod:poss	_	_
5	_	_	PART	POS	_	4	case	_	_
6	_	_	NOUN	NN	Number=Sing	9	nsubj	_	_
7	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	9	aux	_	_
8	_	_	PART	RB	Polarity=Neg	9	advmod	_	_
9	_	_	VERB	VB	VerbForm=Inf	0	root	_	_
10	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=3|PronType=Prs	9	obj	_	_
11	_	_	ADP	IN	_	13	case	_	_
12	_	_	DET	PRP$	Number=Plur|Poss=Yes|PronType=Prs	13	nmod:poss	_	_
13	_	_	NOUN	NNS	Number=Plur	9	obl	_	_
14	_	_	SCONJ	IN	_	19	mark	_	_
15	_	_	PROPN	NNP	_	19	nsubj	_	_
16	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	cop	_	_
17	_	_	PART	RB	Polarity=Neg	19	advmod	_	_
18	_	_	ADV	RB	Degree=Pos	19	advmod	_	_
19	_	_	ADJ	JJ	Degree=Pos	9	advcl	_	_
20	_	_	SCONJ	IN	_	21	mark	_	_
21	_	_	VERB	VBG	VerbForm=Ger	19	advcl	_	_
22	_	_	NOUN	NNS	Number=Plur	21	obj	_	_
23	_	_	PUNCT	.	_	9	punct	_	_

~~~


