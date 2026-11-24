---
layout: base
title:  'Statistics of punct in UD_English-ESL'
udver: '2'
---

## Treebank Statistics: UD_English-ESL: Relations: `punct`

This relation is universal.

9583 nodes (10%) are attached to their parents as `punct`.

7612 instances of `punct` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.47615569237191.

The following 15 pairs of parts of speech are connected with `punct`: <tt><a href="en_esl-pos-VERB.html">VERB</a></tt>-<tt><a href="en_esl-pos-PUNCT.html">PUNCT</a></tt> (6242; 65% instances), <tt><a href="en_esl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_esl-pos-PUNCT.html">PUNCT</a></tt> (1629; 17% instances), <tt><a href="en_esl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_esl-pos-PUNCT.html">PUNCT</a></tt> (1278; 13% instances), <tt><a href="en_esl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_esl-pos-PUNCT.html">PUNCT</a></tt> (197; 2% instances), <tt><a href="en_esl-pos-ADV.html">ADV</a></tt>-<tt><a href="en_esl-pos-PUNCT.html">PUNCT</a></tt> (79; 1% instances), <tt><a href="en_esl-pos-NUM.html">NUM</a></tt>-<tt><a href="en_esl-pos-PUNCT.html">PUNCT</a></tt> (50; 1% instances), <tt><a href="en_esl-pos-PRON.html">PRON</a></tt>-<tt><a href="en_esl-pos-PUNCT.html">PUNCT</a></tt> (42; 0% instances), <tt><a href="en_esl-pos-DET.html">DET</a></tt>-<tt><a href="en_esl-pos-PUNCT.html">PUNCT</a></tt> (12; 0% instances), <tt><a href="en_esl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_esl-pos-PUNCT.html">PUNCT</a></tt> (11; 0% instances), <tt><a href="en_esl-pos-SYM.html">SYM</a></tt>-<tt><a href="en_esl-pos-PUNCT.html">PUNCT</a></tt> (11; 0% instances), <tt><a href="en_esl-pos-AUX.html">AUX</a></tt>-<tt><a href="en_esl-pos-PUNCT.html">PUNCT</a></tt> (10; 0% instances), <tt><a href="en_esl-pos-X.html">X</a></tt>-<tt><a href="en_esl-pos-PUNCT.html">PUNCT</a></tt> (10; 0% instances), <tt><a href="en_esl-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="en_esl-pos-PUNCT.html">PUNCT</a></tt> (6; 0% instances), <tt><a href="en_esl-pos-ADP.html">ADP</a></tt>-<tt><a href="en_esl-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="en_esl-pos-PART.html">PART</a></tt>-<tt><a href="en_esl-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 16 punct	color:blue
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
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 17 punct	color:blue
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
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 14 punct	color:blue
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


