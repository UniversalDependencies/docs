---
layout: base
title:  'Statistics of root in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `root`

This relation is universal.

30972 nodes (7%) are attached to their parents as `root`.

30972 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.5178871238538.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (21321; 69% instances), -<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (4962; 16% instances), -<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (2463; 8% instances), -<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (760; 2% instances), -<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (613; 2% instances), -<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (565; 2% instances), -<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (195; 1% instances), -<tt><a href="et_edt-pos-SYM.html">SYM</a></tt> (35; 0% instances), -<tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt> (31; 0% instances), -<tt><a href="et_edt-pos-X.html">X</a></tt> (23; 0% instances), -<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), -<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (1; 0% instances), -<tt><a href="et_edt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Kust	kust	ADV	D	_	2	mark	2:mark	_
2	tuli	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	mõte	mõte	NOUN	S	Case=Nom|Number=Sing	2	nsubj	2:nsubj	_
4	kirjutada	kirjutama	VERB	V	VerbForm=Inf	3	acl	3:acl	_
5	ooper	ooper	NOUN	S	Case=Nom|Number=Sing	4	obj	4:obj	_
6	"	"	PUNCT	Z	_	7	punct	7:punct	SpaceAfter=No
7	Writing	Writing	PROPN	S	Case=Nom|Number=Sing	5	appos	5:appos	_
8	to	to	X	Y	Abbr=Yes	7	flat	7:flat	_
9	Vermeer	Vermeer	PROPN	S	Case=Nom|Number=Sing	7	flat	7:flat	SpaceAfter=No
10	"	"	PUNCT	Z	_	7	punct	7:punct	SpaceAfter=No
11	?	?	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Huvitav	huvitav	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	amod	2:amod	_
2	küsimus	küsimus	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	_
3	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	2:cop	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	8:punct	_
5	millest	mis	PRON	P	Case=Ela|Number=Sing|PronType=Int,Rel	8	obl	8:obl	_
6	need	see	DET	P	Case=Nom|Number=Plur|PronType=Dem	7	det	7:det	_
7	kirjad	kiri	NOUN	S	Case=Nom|Number=Plur	8	nsubj	8:nsubj	_
8	jutustavad	jutustama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj:cop	2:csubj	SpaceAfter=No
9	?	?	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	On	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
2	väga	väga	ADV	D	_	3	advmod	3:advmod	_
3	haruldane	haruldane	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Z	_	9	punct	9:punct	_
5	kui	kui	SCONJ	J	_	9	mark	9:mark	_
6	helilooja	heli_looja	NOUN	S	Case=Nom|Number=Sing	9	nsubj:cop	9:nsubj	_
7	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
8	ise	ise	PRON	P	Case=Nom|Number=Sing|PronType=Prs|Reflex=Yes	6	nmod	6:nmod	_
9	libretist	libretist	NOUN	S	Case=Nom|Number=Sing	3	nsubj:cop	3:nsubj	_
10	ja	ja	CCONJ	J	_	12	cc	12:cc	_
11	tulemus	tulemus	NOUN	S	Case=Nom|Number=Sing	12	nsubj	12:nsubj	_
12	kannab	kandma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	conj	9:conj	SpaceAfter=No
13	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


