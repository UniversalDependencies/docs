---
layout: base
title:  'Statistics of xcomp in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Relations: `xcomp`

This relation is universal.

690 nodes (0%) are attached to their parents as `xcomp`.

689 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41449275362319.

The following 23 pairs of parts of speech are connected with `xcomp`: <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (284; 41% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (112; 16% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (56; 8% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (47; 7% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (42; 6% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (36; 5% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (35; 5% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (24; 3% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (12; 2% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (9; 1% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 xcomp	color:blue
1	Reklam	reklam	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nsubj	_	_
2	ve	ve	CCONJ	_	_	3	cc	_	_
3	tanıtımın	tanıtım	NOUN	_	Case=Gen|Number=Sing|Person=3	1	conj	_	_
4	işe	iş	NOUN	_	Case=Dat|Number=Sing|Person=3	6	compound	_	_
5	yarayıp	yara	ADV	_	_	6	compound	_	_
6	yaramadığını	yara	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	ccomp	_	_
7	görmek	gör	NOUN	_	Case=Nom|Number=Sing|Person=3	8	xcomp	_	_
8	üzereyiz	üzere	VERB	_	Mood=Gen|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp	color:blue
1	Bilmek	bil	NOUN	_	Case=Nom|Number=Sing|Person=3	2	xcomp	_	_
2	isteyeceğinizi	iste	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=2	3	ccomp	_	_
3	düşündük	düşün	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 xcomp	color:blue
1	Kurulun	kurul	NOUN	_	Case=Gen|Number=Sing|Person=3	8	nsubj	_	_
2	cevap	cevap	NOUN	_	Case=Nom|Number=Sing|Person=3	3	compound	_	_
3	vermek	ver	NOUN	_	Case=Nom|Number=Sing|Person=3	8	xcomp	_	_
4	için	için	ADP	_	_	3	case	_	_
5	10	10	NUM	_	NumType=Card	7	nummod	_	_
6	iş	iş	NOUN	_	Case=Nom|Number=Sing|Person=3	7	nmod	_	_
7	günü	gün	NOUN	_	Case=Acc|Number=Sing|Person=3	8	obl	_	_
8	var	var	ADJ	_	_	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


