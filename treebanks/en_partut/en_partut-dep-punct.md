---
layout: base
title:  'Statistics of punct in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `punct`

This relation is universal.

5797 nodes (12%) are attached to their parents as `punct`.

4470 instances of `punct` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.99068483698465.

The following 17 pairs of parts of speech are connected with `punct`: <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-PUNCT.html">PUNCT</a></tt> (2555; 44% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PUNCT.html">PUNCT</a></tt> (1805; 31% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-PUNCT.html">PUNCT</a></tt> (384; 7% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-PUNCT.html">PUNCT</a></tt> (380; 7% instances), <tt><a href="en_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="en_partut-pos-PUNCT.html">PUNCT</a></tt> (326; 6% instances), <tt><a href="en_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="en_partut-pos-PUNCT.html">PUNCT</a></tt> (215; 4% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-PUNCT.html">PUNCT</a></tt> (70; 1% instances), <tt><a href="en_partut-pos-AUX.html">AUX</a></tt>-<tt><a href="en_partut-pos-PUNCT.html">PUNCT</a></tt> (19; 0% instances), <tt><a href="en_partut-pos-X.html">X</a></tt>-<tt><a href="en_partut-pos-PUNCT.html">PUNCT</a></tt> (10; 0% instances), <tt><a href="en_partut-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="en_partut-pos-PUNCT.html">PUNCT</a></tt> (7; 0% instances), <tt><a href="en_partut-pos-DET.html">DET</a></tt>-<tt><a href="en_partut-pos-PUNCT.html">PUNCT</a></tt> (7; 0% instances), <tt><a href="en_partut-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_partut-pos-PUNCT.html">PUNCT</a></tt> (7; 0% instances), <tt><a href="en_partut-pos-ADP.html">ADP</a></tt>-<tt><a href="en_partut-pos-PUNCT.html">PUNCT</a></tt> (6; 0% instances), <tt><a href="en_partut-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_partut-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="en_partut-pos-SYM.html">SYM</a></tt>-<tt><a href="en_partut-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="en_partut-pos-PART.html">PART</a></tt>-<tt><a href="en_partut-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="en_partut-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="en_partut-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 punct	color:blue
1	Mr	mister	NOUN	S	Gender=Masc|Number=Sing	7	vocative	_	_
2	Berenguer	Berenguer	PROPN	SP	_	1	flat	_	_
3	Fuster	Fuster	PROPN	SP	_	1	flat	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	we	we	PRON	PE	Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
6	shall	shall	AUX	VM	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	check	check	VERB	V	VerbForm=Inf	0	root	_	_
8	all	all	PRON	PE	Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	this	this	PRON	PD	Number=Sing|PronType=Dem	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 punct	color:blue
1	1	1	NUM	N	NumType=Card	3	nummod	_	SpaceAfter=No
2	.	.	PUNCT	FF	_	1	punct	_	_
3	Definitions	definition	NOUN	S	Number=Plur	0	root	_	SpaceAfter=No
4	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 punct	color:blue
1	Most	most	ADJ	A	Degree=Sup	5	nsubj	_	_
2	of	of	ADP	E	_	3	case	_	_
3	you	you	PRON	PE	Person=2|PronType=Prs	1	obl	_	_
4	are	be	AUX	V	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	familiar	familiar	ADJ	A	Degree=Pos	0	root	_	_
6	with	with	ADP	E	_	8	case	_	_
7	Portobello	Portobello	PROPN	SP	_	8	nmod	_	_
8	mushrooms	mushroom	NOUN	S	Number=Plur	5	obl	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	5	punct	_	_

~~~


