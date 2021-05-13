---
layout: base
title:  'Statistics of xcomp in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Relations: `xcomp`

This relation is universal.

491 nodes (1%) are attached to their parents as `xcomp`.

491 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25865580448065.

The following 24 pairs of parts of speech are connected with `xcomp`: <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (162; 33% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (52; 11% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (48; 10% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (44; 9% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (38; 8% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (36; 7% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (31; 6% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (23; 5% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (14; 3% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp	color:blue
1	Teorinin	teori	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nsubj	_	_
2	gerçekçi	gerçek	ADJ	_	_	4	xcomp	_	_
3	olup	ol	ADV	_	_	4	compound	_	_
4	olmadığını	ol	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	ccomp	_	_
5	bilmek	bil	NOUN	_	Case=Nom|Number=Sing|Person=3	6	xcomp	_	_
6	imkansızdır	imkan	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 xcomp	color:blue
1	Bunlar	bu	PRON	_	PronType=Dem	7	nsubj	_	_
2	minimum	minimum	ADJ	_	_	3	amod	_	_
3	10000	10000	NUM	_	NumType=Card	4	nummod	_	_
4	$'lık	$'lık	NOUN	_	Case=Nom|Number=Sing|Person=3	5	amod	_	_
5	nominal	nominal	ADJ	_	_	6	amod	_	_
6	değerlerde	değer	NOUN	_	Case=Loc|Number=Plur|Person=3	7	obl	_	_
7	mevcut	mevcut	ADJ	_	_	8	xcomp	_	_
8	olacak	ol	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


