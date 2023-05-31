---
layout: base
title:  'Statistics of cc in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `cc`

This relation is universal.

4727 nodes (3%) are attached to their parents as `cc`.

4695 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.00782737465623.

The following 13 pairs of parts of speech are connected with `cc`: <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (2078; 44% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (1507; 32% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (502; 11% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (305; 6% instances), <tt><a href="fi_ftb-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (134; 3% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (116; 2% instances), <tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (47; 1% instances), <tt><a href="fi_ftb-pos-PART.html">PART</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (11; 0% instances), <tt><a href="fi_ftb-pos-ADP.html">ADP</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (10; 0% instances), <tt><a href="fi_ftb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (10; 0% instances), <tt><a href="fi_ftb-pos-X.html">X</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="fi_ftb-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="fi_ftb-pos-X.html">X</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	Riki	riki	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	3	nsubj	_	_
2	alkoi	alkaa	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	kantaa	kantaa	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	2	ccomp	_	_
4	laukkuja	laukku	NOUN	N,Pl,Par	Case=Par|Number=Plur	3	obj	_	_
5	hissiin	hissi	NOUN	N,Sg,Ill	Case=Ill|Number=Sing	3	nmod	_	_
6	ja	ja	CCONJ	Pcle,CC	_	7	cc	_	_
7	mahdutti	mahduttaa	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	_
8	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	7	obj	_	_
9	autoonsa	auto	NOUN	N,Sg,Ill,Px3	Case=Ill|Number=Sing|Person[psor]=3	7	nmod	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cc	color:blue
1	Juoppoja	juoppo	NOUN	N,Pl,Par	Case=Par|Number=Plur	0	root	_	_
2	ja	ja	CCONJ	Pcle,CC	_	4	cc	_	_
3	ajan	aika	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	4	nmod	_	_
4	tuhlareita	tuhlari	NOUN	N,Pl,Par	Case=Par|Number=Plur	1	conj	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 cc	color:blue
1	Duuman	duuma	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	2	nmod	_	_
2	kuohunta	kuohunta	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	nsubj:cop	_	_
3	olisi	olla	AUX	V,Act,Cond,Sg3	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	4	cop	_	_
4	kiusallista	kiusallinen	ADJ	A,Sg,Par	Case=Par|Number=Sing	0	root	_	_
5	,	,	PUNCT	Pun	_	4	punct	_	_
6	mutta	mutta	CCONJ	Pcle,CC	_	9	cc	_	_
7	ei	ei	AUX	V,Neg,Act,Sg3	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	9	aux	_	_
8	vielä	vielä	PART	Pcle	_	9	advmod	_	_
9	vaarallista	vaarallinen	ADJ	A,Sg,Par	Case=Par|Number=Sing	4	conj	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


