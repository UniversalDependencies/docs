---
layout: base
title:  'Statistics of nummod in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `nummod`

This relation is universal.

1072 nodes (1%) are attached to their parents as `nummod`.

545 instances of `nummod` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41138059701493.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (867; 81% instances), <tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (99; 9% instances), <tt><a href="sk_snk-pos-NUM.html">NUM</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (65; 6% instances), <tt><a href="sk_snk-pos-X.html">X</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (20; 2% instances), <tt><a href="sk_snk-pos-PRON.html">PRON</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (6; 1% instances), <tt><a href="sk_snk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="sk_snk-pos-DET.html">DET</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="sk_snk-pos-SYM.html">SYM</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nummod	color:blue
1	Obdobie	obdobie	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	_
2	od	od	ADP	Eu2	AdpType=Prep|Case=Gen	5	case	5:case	_
3	6	6	NUM	0	NumForm=Digit	5	nummod	5:nummod	SpaceAfter=No
4	.	.	PUNCT	Z	_	3	punct	3:punct	_
5	storočia	storočie	NOUN	SSns2	Case=Gen|Gender=Neut|Number=Sing	1	nmod	1:nmod:od:gen	_
6	do	do	ADP	Eu2	AdpType=Prep|Case=Gen	9	case	9:case	_
7	7	7	NUM	0	NumForm=Digit	9	nummod	9:nummod	SpaceAfter=No
8	.	.	PUNCT	Z	_	7	punct	7:punct	_
9	storočia	storočie	NOUN	SSns2	Case=Gen|Gender=Neut|Number=Sing	1	nmod	1:nmod:do:gen	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	Nástup	nástup	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	_
2	Mahmúda	mahmúd	PROPN	SSms2:r	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	1	nmod	1:nmod:gen	_
3	II	ii	NUM	0	NumForm=Digit	2	nummod	2:nummod	SpaceAfter=No
4	.	.	PUNCT	Z	_	3	punct	3:punct	_
5	na	na	ADP	Eu4	AdpType=Prep|Case=Acc	6	case	6:case	_
6	trón	trón	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	nmod	1:nmod:na:acc	_
7	a	a	CCONJ	O	_	9	cc	9:cc	_
8	prvé	prvý	ADJ	NAip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|NumType=Ord	9	amod	9:amod	_
9	pokusy	pokus	NOUN	SSip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	1	conj	0:root|1:conj	_
10	o	o	ADP	Eu4	AdpType=Prep|Case=Acc	11	case	11:case	_
11	reformu	reforma	NOUN	SSfs4	Case=Acc|Gender=Fem|Number=Sing	9	nmod	9:nmod:o:acc	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nummod	color:blue
1	BARAN	baran	NOUN	SSms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	_
2	21	21	NUM	0	NumForm=Digit	4	nummod	4:nummod	SpaceAfter=No
3	.	.	PUNCT	ZIP	_	2	punct	2:punct	_
4	3	3	NUM	0	NumForm=Digit	1	dep	1:dep	SpaceAfter=No
5	.	.	PUNCT	ZIP	_	4	punct	4:punct	_
6	-	-	PUNCT	ZIP	_	9	punct	9:punct	_
7	20	20	NUM	0	NumForm=Digit	9	nummod	9:nummod	SpaceAfter=No
8	.	.	PUNCT	ZIP	_	7	punct	7:punct	_
9	4	4	NUM	0	NumForm=Digit	4	conj	1:dep|4:conj	SpaceAfter=No
10	.	.	PUNCT	ZIP	_	1	punct	1:punct	_

~~~


