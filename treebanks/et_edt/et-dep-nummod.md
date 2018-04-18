---
layout: base
title:  'Statistics of nummod in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `nummod`

This relation is universal.

1229 nodes (1%) are attached to their parents as `nummod`.

780 instances of `nummod` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.74776240846216.

The following 11 pairs of parts of speech are connected with `nummod`: <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-NUM.html">NUM</a></tt> (862; 70% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-NUM.html">NUM</a></tt> (164; 13% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-NUM.html">NUM</a></tt> (110; 9% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-NUM.html">NUM</a></tt> (51; 4% instances), <tt><a href="et-pos-NUM.html">NUM</a></tt>-<tt><a href="et-pos-NUM.html">NUM</a></tt> (25; 2% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="et-pos-SYM.html">SYM</a></tt>-<tt><a href="et-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="et-pos-X.html">X</a></tt>-<tt><a href="et-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	"	"	PUNCT	Z	_	4	punct	_	SpaceAfter=No
2	Nii	nii	ADV	D	_	4	mark	_	_
3	et	et	SCONJ	J	_	4	mark	_	_
4	mul	mina	PRON	P	Case=Ade|Number=Sing|Person=1|PronType=Prs	0	root	_	_
5	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
6	ainult	ainult	ADV	D	_	8	advmod	_	_
7	üks	üks	NUM	N	Case=Nom|Number=Sing|NumForm=Letter|NumType=Card	8	nummod	_	_
8	küsimus	küsimus	NOUN	S	Case=Nom|Number=Sing	4	nsubj:cop	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	4	punct	_	SpaceAfter=No
10	"	"	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nummod	color:blue
1	Kala	Kala	PROPN	S	Case=Nom|Number=Sing	4	nsubj	_	_
2	pidi	pidama	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	_
3	valvest	valve	NOUN	S	Case=Ela|Number=Sing	4	obl	_	_
4	tulema	tulema	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	0	root	_	_
5	pool	pool	NUM	N	Case=Nom|Number=Sing|NumForm=Letter|NumType=Card	6	nummod	_	_
6	kuus	kuus	NUM	N	Case=Nom|Number=Sing|NumForm=Letter|NumType=Card	4	nummod	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 nummod	color:blue
1	1.	1.	ADJ	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Ord	0	root	_	_
2	Janis	Janis	PROPN	S	Case=Nom|Number=Sing	1	nsubj	_	_
3	Preiss	Preiss	PROPN	S	Case=Nom|Number=Sing	2	flat	_	_
4	(	(	PUNCT	Z	_	5	punct	_	SpaceAfter=No
5	LAT-23	LAT-23	NUM	N	Case=Nom|Number=Sing|NumType=Card	2	nummod	_	SpaceAfter=No
6	)	)	PUNCT	Z	_	5	punct	_	_

~~~


