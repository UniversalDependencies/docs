---
layout: base
title:  'Statistics of nummod in UD_Slovak'
udver: '2'
---

## Treebank Statistics: UD_Slovak: Relations: `nummod`

This relation is universal.

1072 nodes (1%) are attached to their parents as `nummod`.

553 instances of `nummod` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40671641791045.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="sk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk-pos-NUM.html">NUM</a></tt> (861; 80% instances), <tt><a href="sk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sk-pos-NUM.html">NUM</a></tt> (95; 9% instances), <tt><a href="sk-pos-NUM.html">NUM</a></tt>-<tt><a href="sk-pos-NUM.html">NUM</a></tt> (64; 6% instances), <tt><a href="sk-pos-X.html">X</a></tt>-<tt><a href="sk-pos-NUM.html">NUM</a></tt> (24; 2% instances), <tt><a href="sk-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="sk-pos-NUM.html">NUM</a></tt> (9; 1% instances), <tt><a href="sk-pos-PRON.html">PRON</a></tt>-<tt><a href="sk-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="sk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk-pos-NUM.html">NUM</a></tt> (6; 1% instances), <tt><a href="sk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="sk-pos-DET.html">DET</a></tt>-<tt><a href="sk-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="sk-pos-SYM.html">SYM</a></tt>-<tt><a href="sk-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nummod	color:blue
1	Obdobie	obdobie	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	od	od	ADP	Eu2	AdpType=Prep|Case=Gen	5	case	_	_
3	6	6	NUM	0	NumForm=Digit	5	nummod	_	SpaceAfter=No
4	.	.	PUNCT	Z	_	3	punct	_	_
5	storočia	storočie	NOUN	SSns2	Case=Gen|Gender=Neut|Number=Sing	1	nmod	_	_
6	do	do	ADP	Eu2	AdpType=Prep|Case=Gen	9	case	_	_
7	7	7	NUM	0	NumForm=Digit	9	nummod	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	7	punct	_	_
9	storočia	storočie	NOUN	SSns2	Case=Gen|Gender=Neut|Number=Sing	1	nmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	Nástup	nástup	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	Mahmúda	mahmúd	PROPN	SSms2:r	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	II	ii	NUM	0	NumForm=Digit	2	nummod	_	SpaceAfter=No
4	.	.	PUNCT	Z	_	3	punct	_	_
5	na	na	ADP	Eu4	AdpType=Prep|Case=Acc	6	case	_	_
6	trón	trón	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	nmod	_	_
7	a	a	CCONJ	O	_	9	cc	_	_
8	prvé	prvý	ADJ	NAip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|NumType=Ord	9	amod	_	_
9	pokusy	pokus	NOUN	SSip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	1	conj	_	_
10	o	o	ADP	Eu4	AdpType=Prep|Case=Acc	11	case	_	_
11	reformu	reforma	NOUN	SSfs4	Case=Acc|Gender=Fem|Number=Sing	9	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nummod	color:blue
1	BARAN	baran	NOUN	SSms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
2	21	21	NUM	0	NumForm=Digit	4	nummod	_	SpaceAfter=No
3	.	.	PUNCT	ZIP	_	2	punct	_	_
4	3	3	NUM	0	NumForm=Digit	1	dep	_	SpaceAfter=No
5	.	.	PUNCT	ZIP	_	4	punct	_	_
6	-	-	PUNCT	ZIP	_	9	punct	_	_
7	20	20	NUM	0	NumForm=Digit	9	nummod	_	SpaceAfter=No
8	.	.	PUNCT	ZIP	_	7	punct	_	_
9	4	4	NUM	0	NumForm=Digit	4	conj	_	SpaceAfter=No
10	.	.	PUNCT	ZIP	_	1	punct	_	_

~~~


