---
layout: base
title:  'Statistics of cop in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `cop`

This relation is universal.

2326 nodes (2%) are attached to their parents as `cop`.

1706 instances of `cop` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.16509028374892.

The following 8 pairs of parts of speech are connected with `cop`: <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-AUX.html">AUX</a></tt> (944; 41% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-AUX.html">AUX</a></tt> (817; 35% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-AUX.html">AUX</a></tt> (293; 13% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-AUX.html">AUX</a></tt> (175; 8% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-AUX.html">AUX</a></tt> (51; 2% instances), <tt><a href="et-pos-NUM.html">NUM</a></tt>-<tt><a href="et-pos-AUX.html">AUX</a></tt> (30; 1% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-AUX.html">AUX</a></tt> (15; 1% instances), <tt><a href="et-pos-SYM.html">SYM</a></tt>-<tt><a href="et-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Nüüd	nüüd	ADV	D	_	3	advmod	_	_
2	olen	olema	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	kiirem	kiirem	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 cop	color:blue
1	Hullud	hull	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	2	amod	_	_
2	ideed	idee	NOUN	S	Case=Nom|Number=Plur	6	nsubj:cop	_	_
3	olid	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
4	selle	see	PRON	P	Case=Gen|Number=Sing|PronType=Dem	5	det	_	_
5	rahva	rahvas	NOUN	S	Case=Gen|Number=Sing	6	nmod	_	_
6	stiihia	stiihia	NOUN	S	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop	color:blue
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


