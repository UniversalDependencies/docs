---
layout: base
title:  'Statistics of nummod in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `nummod`

This relation is universal.

3286 nodes (2%) are attached to their parents as `nummod`.

2377 instances of `nummod` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18928788800974.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (3170; 96% instances), <tt><a href="fi_tdt-pos-SYM.html">SYM</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (56; 2% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (26; 1% instances), <tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (25; 1% instances), <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Yhdeksänkin	yhdeksän	NUM	Num	Case=Nom|Clitic=Kin|Number=Sing|NumType=Card	2	nummod	2:nummod	_
2	pinniä	pinni	NOUN	N	Case=Par|Number=Sing	4	nsubj:cop	4:nsubj:cop	_
3	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
4	paljon	paljon	ADV	Adv	_	0	root	0:root	SpaceAfter=No
5	.	.	PUNCT	Punct	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Äänestysaktiivisuus	äänestys#aktiivisuus	NOUN	N	Case=Nom|Derivation=Vs|Number=Sing	3	nsubj:cop	3:nsubj:cop	_
2	oli	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
3	alhainen	alhainen	ADJ	A	Case=Nom|Degree=Pos|Derivation=Inen|Number=Sing	0	root	0:root	_
4	(	(	PUNCT	Punct	_	6	punct	6:punct	SpaceAfter=No
5	40,3	40,3	NUM	Num	NumType=Card	6	nummod	6:nummod	_
6	%	%	SYM	Punct	_	3	appos	3:appos	SpaceAfter=No
7	)	)	PUNCT	Punct	_	6	punct	6:punct	SpaceAfter=No
8	.	.	PUNCT	Punct	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Mies	mies	NOUN	N	Case=Nom|Number=Sing	3	nsubj:cop	3:nsubj:cop	_
2	oli	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
3	vanha	vanha	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Punct	_	7	punct	7:punct	_
5	varmaan	varmaan	ADV	Adv	_	7	advmod	7:advmod	_
6	60-70	60-70	NUM	Num	NumType=Card	7	nummod	7:nummod	_
7	vuotias	vuotias	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	appos	3:appos	SpaceAfter=No
8	.	.	PUNCT	Punct	_	3	punct	3:punct	_

~~~


