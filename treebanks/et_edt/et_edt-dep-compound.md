---
layout: base
title:  'Statistics of compound in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="et_edt-dep-compound-prt.html">compound:prt</a></tt>.

594 nodes (0%) are attached to their parents as `compound`.

568 instances of `compound` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06902356902357.

The following 8 pairs of parts of speech are connected with `compound`: <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (528; 89% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (38; 6% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (14; 2% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	1986	1986	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	3	obl	_	_
2	"	"	PUNCT	Z	_	3	punct	_	SpaceAfter=No
3	Z	Z	X	Y	Abbr=Yes	0	root	_	_
4	ja	ja	CCONJ	J	_	6	cc	_	_
5	kaks	kaks	NUM	N	Case=Nom|Number=Sing|NumForm=Letter|NumType=Card	6	compound	_	_
6	nulli	null	NUM	N	Case=Nom|Number=Sing|NumForm=Letter|NumType=Card	3	conj	_	SpaceAfter=No
7	"	"	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Sinapiini	sinapiin	NOUN	S	Case=Par|Number=Sing	6	nsubj:cop	_	_
2	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
3	rapsiseemnetes	rapsi_seeme	NOUN	S	Case=Ine|Number=Plur	6	obl	_	_
4	umbes	umbes	ADV	D	_	5	advmod	_	_
5	1,5	1,5	NUM	N	NumForm=Digit|NumType=Card	6	compound	_	_
6	%	%	SYM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	0	root	_	_
7	(	(	PUNCT	Z	_	8	punct	_	SpaceAfter=No
8	Tulisalo	Tulisalo	PROPN	S	Case=Nom|Number=Sing	6	parataxis	_	SpaceAfter=No
9	,	,	PUNCT	Z	_	8	punct	_	_
10	1984	1984	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	8	parataxis	_	SpaceAfter=No
11	)	)	PUNCT	Z	_	8	punct	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Uurijad	uurija	NOUN	S	Case=Nom|Number=Plur	2	nsubj	_	_
2	sõitsid	sõitma	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	minema	minema	VERB	V	Case=All|VerbForm=Sup|Voice=Act	2	compound	_	SpaceAfter=No
4	.	.	PUNCT	Z	_	2	punct	_	_

~~~


