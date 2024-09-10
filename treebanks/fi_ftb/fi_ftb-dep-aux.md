---
layout: base
title:  'Statistics of aux in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `aux`

This relation is universal.

6841 nodes (4%) are attached to their parents as `aux`.

6786 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76421575793013.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-AUX.html">AUX</a></tt> (6235; 91% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-AUX.html">AUX</a></tt> (300; 4% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-AUX.html">AUX</a></tt> (255; 4% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-AUX.html">AUX</a></tt> (29; 0% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-AUX.html">AUX</a></tt> (9; 0% instances), <tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ftb-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="fi_ftb-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ftb-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="fi_ftb-pos-X.html">X</a></tt>-<tt><a href="fi_ftb-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux	color:blue
1	ei	ei	AUX	V,Neg,Act,Sg3	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	_	_
2	voi	voida	AUX	V,Act,Ind,Pres,ConNeg	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	ajatellakhaa	ajatella	VERB	V,Act,InfA,Lat,Kaan	Case=Lat|Clitic=Kaan|InfForm=1|Style=Coll|VerbForm=Inf|Voice=Act	0	root	_	_
4	varhmaan	varmaan	PART	Pcle	Style=Coll	3	advmod	_	_
5	että	että	SCONJ	Pcle,CS	_	9	mark	_	_
6	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	9	nsubj:cop	_	_
7	ikinä	ikinä	ADV	Adv	_	9	advmod	_	_
8	olis	olla	AUX	V,Act,Cond,Sg3	Mood=Cnd|Number=Sing|Person=3|Style=Coll|VerbForm=Fin|Voice=Act	9	cop	_	_
9	vakinaisia	vakinainen	ADJ	A,Pl,Par	Case=Par|Number=Plur	3	ccomp	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 aux	color:blue
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


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	Siinä	se	PRON	Pron,Dem,Sg,Ine	Case=Ine|Number=Sing|PronType=Dem	3	nmod	_	_
2	ei	ei	AUX	V,Neg,Act,Sg3	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	_	_
3	ollut	olla	VERB	V,Act,Ind,Past,Sg,ConNeg	Connegative=Yes|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	yhtään	yhtään	ADV	Adv	_	5	advmod	_	_
5	aggressiivisuutta	aggressiivisuus	NOUN	N,Sg,Par	Case=Par|Number=Sing	3	nsubj	_	_
6	,	,	PUNCT	Pun	_	5	punct	_	_
7	eikä	ei	AUX	V,Neg,Act,Sg3,Ka	Clitic=Ka|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	8	aux	_	_
8	taklauksia	taklaus	NOUN	N,Pl,Par	Case=Par|Number=Plur	5	conj	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


