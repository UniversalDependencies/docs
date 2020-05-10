---
layout: base
title:  'Statistics of nummod in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `nummod`

This relation is universal.

5931 nodes (1%) are attached to their parents as `nummod`.

4913 instances of `nummod` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32608329118193.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (5182; 87% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (438; 7% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (211; 4% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (53; 1% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (32; 1% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (9; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Igaüks	iga_üks	PRON	P	Case=Nom|Number=Sing|PronType=Ind	3	nsubj	3:nsubj	_
2	neist	tema	PRON	P	Case=Ela|Number=Plur|Person=3|PronType=Prs	1	nmod	1:nmod	_
3	kirjutab	kirjutama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	Vermeerile	Vermeer	PROPN	S	Case=All|Number=Sing	3	obl	3:obl	_
5	kuus	kuus	NUM	N	Case=Nom|Number=Sing|NumForm=Letter|NumType=Card	6	nummod	6:nummod	_
6	kirja	kiri	NOUN	S	Case=Par|Number=Sing	3	obj	3:obj	SpaceAfter=No
7	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Professor	professor	NOUN	S	Case=Nom|Number=Sing	2	nsubj	2:nsubj	_
2	ootas	ootama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	hindade	hind	NOUN	S	Case=Gen|Number=Plur	4	nmod	4:nmod	_
4	langust	langus	NOUN	S	Case=Par|Number=Sing	2	obj	2:obj	_
5	vähemalt	vähemalt	ADV	D	_	6	advmod	6:advmod	_
6	20	20	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	7	nummod	7:nummod	SpaceAfter=No
7	%	%	SYM	X	_	4	obl	4:obl	SpaceAfter=No
8	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nummod	color:blue
1	ABC	ABC	PROPN	S	Case=Nom|Number=Sing	0	root	0:root	_
2	"	"	PUNCT	Z	_	3	punct	3:punct	SpaceAfter=No
3	The	The	PROPN	S	Case=Nom|Number=Sing	1	nmod	1:nmod	_
4	Lexicon	Lexicon	PROPN	S	Case=Nom|Number=Sing	3	flat	3:flat	_
5	Of	Of	PROPN	Y	Abbr=Yes	3	flat	3:flat	_
6	Love	Love	PROPN	S	Case=Nom|Number=Sing	3	flat	3:flat	SpaceAfter=No
7	"	"	PUNCT	Z	_	3	punct	3:punct	_
8	(	(	PUNCT	Z	_	9	punct	9:punct	SpaceAfter=No
9	Mercury	Mercury	PROPN	S	Case=Nom|Number=Sing	1	parataxis	1:parataxis	SpaceAfter=No
10	,	,	PUNCT	Z	_	9	punct	9:punct	_
11	1982	1982	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	9	nummod	9:nummod	SpaceAfter=No
12	)	)	PUNCT	Z	_	9	punct	9:punct	_

~~~


