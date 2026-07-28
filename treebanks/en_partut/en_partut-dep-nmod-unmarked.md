---
layout: base
title:  'Statistics of nmod:unmarked in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `nmod:unmarked`

This relation is a language-specific subtype of <tt><a href="en_partut-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_partut-dep-nmod-desc.html">nmod:desc</a></tt>, <tt><a href="en_partut-dep-nmod-poss.html">nmod:poss</a></tt>.

194 nodes (0%) are attached to their parents as `nmod:unmarked`.

173 instances of `nmod:unmarked` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.62886597938144.

The following 13 pairs of parts of speech are connected with `nmod:unmarked`: <tt><a href="en_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (71; 37% instances), <tt><a href="en_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (63; 32% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (20; 10% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (18; 9% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (7; 4% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="en_partut-pos-X.html">X</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:unmarked	color:blue
1	FEB	February	PROPN	SP	_	2	nmod:unmarked	_	_
2	10	10	NUM	N	NumType=Card	0	root	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	2014	2014	NUM	N	NumType=Card	2	nmod:unmarked	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:unmarked	color:blue
1	FEB	February	PROPN	SP	_	2	nmod:unmarked	_	_
2	10	10	NUM	N	NumType=Card	0	root	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	2014	2014	NUM	N	NumType=Card	2	nmod:unmarked	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:unmarked	color:blue
1	As	as	ADP	E	ExtPos=ADP	3	case	_	_
2	of	of	ADP	E	_	1	fixed	_	_
3	April	April	PROPN	SP	_	6	obl	_	_
4	1828	1828	NUM	N	NumType=Card	3	nmod:unmarked	_	_
5	Balzac	Balzac	PROPN	SP	_	6	nsubj	_	_
6	owed	owe	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	50,000	50,000	NUM	N	NumType=Card	8	nummod	_	_
8	francs	franc	NOUN	S	Number=Plur	6	obj	_	_
9	to	to	ADP	E	_	11	case	_	_
10	his	his	DET	AP	Poss=Yes|PronType=Prs	11	nmod:poss	_	_
11	mother	mother	NOUN	S	Number=Sing	6	obl	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	6	punct	_	_

~~~


