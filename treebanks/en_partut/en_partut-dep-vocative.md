---
layout: base
title:  'Statistics of vocative in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `vocative`

This relation is universal.

63 nodes (0%) are attached to their parents as `vocative`.

58 instances of `vocative` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.57142857142857.

The following 6 pairs of parts of speech are connected with `vocative`: <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (43; 68% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (7; 11% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (6; 10% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (4; 6% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 4 vocative	color:blue
1	But	but	CCONJ	CC	_	12	cc	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	12	punct	_	_
3	Madam	madam	NOUN	S	Number=Sing	4	nmod:desc	_	_
4	President	president	NOUN	S	Number=Sing	12	vocative	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	4	punct	_	_
6	my	my	DET	AP	Number=Sing|Poss=Yes|PronType=Prs	8	nmod:poss	_	_
7	personal	personal	ADJ	A	Degree=Pos	8	amod	_	_
8	request	request	NOUN	S	Number=Sing	12	nsubj:pass	_	_
9	has	have	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
10	not	not	PART	PART	Polarity=Neg	12	advmod	_	_
11	been	be	AUX	VA	Tense=Past|VerbForm=Part	12	aux:pass	_	_
12	met	meet	VERB	V	Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 vocative	color:blue
1	Madam	madam	NOUN	S	Number=Sing	2	nmod:desc	_	_
2	President	president	NOUN	S	Number=Sing	6	vocative	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	on	on	ADP	E	_	6	case	_	_
5	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	6	det	_	_
6	point	point	NOUN	S	Number=Sing	0	root	_	_
7	of	of	ADP	E	_	8	case	_	_
8	order	order	NOUN	S	Number=Sing	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 vocative	color:blue
1	Mr	mister	NOUN	S	Number=Sing	2	nmod:desc	_	_
2	Berenguer	Berenguer	PROPN	SP	_	7	vocative	_	_
3	Fuster	Fuster	PROPN	SP	_	2	flat	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	2	punct	_	_
5	we	we	PRON	PE	Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
6	shall	shall	AUX	VM	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	check	check	VERB	V	VerbForm=Inf	0	root	_	_
8	all	all	PRON	PE	Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	this	this	PRON	PD	Number=Sing|PronType=Dem	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	7	punct	_	_

~~~


