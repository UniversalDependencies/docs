---
layout: base
title:  'Statistics of nummod in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `nummod`

This relation is universal.

1778 nodes (1%) are attached to their parents as `nummod`.

1585 instances of `nummod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24184476940382.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> (1548; 87% instances), <tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> (114; 6% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> (44; 2% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> (20; 1% instances), <tt><a href="fi_ftb-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="fi_ftb-pos-DET.html">DET</a></tt>-<tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> (9; 1% instances), <tt><a href="fi_ftb-pos-PART.html">PART</a></tt>-<tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> (9; 1% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> (9; 1% instances), <tt><a href="fi_ftb-pos-SYM.html">SYM</a></tt>-<tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> (8; 0% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> (6; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	ei	ei	AUX	V,Neg,Act,Sg3	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	2	aux	_	_
2	ole	olla	VERB	V,Act,Ind,Pres,ConNeg	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	ennää	enää	PART	Pcle	Style=Coll	2	advmod	_	_
4	kymmenhiv	kymmenen	NUM	Num,Card,Pl,Ill	Case=Ill|Number=Plur|NumType=Card|Style=Coll	5	nummod	_	_
5	vuossin	vuosi	NOUN	N,Pl,Ill	Case=Ill|Number=Plur|Style=Coll	2	nmod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Velkaa	velka	NOUN	N,Sg,Par	Case=Par|Number=Sing	3	nsubj	_	_
2	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	kertynyt	kertyä	VERB	V,Act,PcpNut,Sg,Nom	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	satoja	sata	NUM	Num,Card,Pl,Par	Case=Par|Number=Plur|NumType=Card	5	nummod	_	_
5	tuhansia	tuhat	NUM	Num,Card,Pl,Par	Case=Par|Number=Plur|NumType=Card	6	nummod	_	_
6	markkoja	markka	NOUN	N,Pl,Par	Case=Par|Number=Plur	3	nmod	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Kaivos	kaivos	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	2	nsubj	_	_
2	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	maan	maa	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	5	nmod	_	_
4	kymmenen	kymmenen	NUM	Num,Card,Sg,Gen	Case=Gen|Number=Sing|NumType=Card	5	nummod	_	_
5	suurimman	suuri	ADJ	A,Sup,Sg,Gen	Case=Gen|Degree=Sup|Number=Sing	2	nmod	_	_
6	joukossa	joukossa	ADP	Adp	_	5	case	_	_
7	.	.	PUNCT	Pun	_	5	punct	_	Was18=punct:6:case

~~~


