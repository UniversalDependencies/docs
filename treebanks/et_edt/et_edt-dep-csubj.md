---
layout: base
title:  'Statistics of csubj in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="et_edt-dep-csubj-cop.html">csubj:cop</a></tt>.

1021 nodes (0%) are attached to their parents as `csubj`.

946 instances of `csubj` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.8462291870715.

The following 17 pairs of parts of speech are connected with `csubj`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (909; 89% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (37; 4% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (27; 3% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (19; 2% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	Tuleb	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	omada	omama	VERB	V	VerbForm=Inf	1	csubj	_	_
3	visuaalset	visuaalne	ADJ	A	Case=Par|Degree=Pos|Number=Sing	4	amod	_	_
4	intuitsiooni	intuitsioon	NOUN	S	Case=Par|Number=Sing	2	obj	_	SpaceAfter=No
5	.	.	PUNCT	Z	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 csubj	color:blue
1	Ja	ja	CCONJ	J	_	3	cc	_	_
2	seal	seal	ADV	D	_	3	advmod	_	_
3	selgus	selguma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	9	punct	_	_
5	et	et	SCONJ	J	_	9	mark	_	_
6	paljud	palju	PRON	P	Case=Nom|Number=Plur|PronType=Ind	9	nsubj:cop	_	_
7	kohalolijatest	kohal_olija	NOUN	S	Case=Ela|Number=Plur	6	nmod	_	_
8	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
9	kopiraiterid	kopiraiter	NOUN	S	Case=Nom|Number=Plur	3	csubj	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 csubj	color:blue
1	Mind	mina	PRON	P	Case=Par|Number=Sing|Person=1|PronType=Prs	3	obj	_	_
2	pisut	pisut	ADV	D	_	3	advmod	_	_
3	segab	segama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	9	punct	_	_
5	et	et	SCONJ	J	_	9	mark	_	_
6	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	9	nsubj:cop	_	_
7	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
8	kuidagi	kuidagi	ADV	D	_	9	advmod	_	_
9	illegaalne	illegaalne	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	csubj	_	_
10	Eestis	Eesti	PROPN	S	Case=Ine|Number=Sing	9	obl	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	3	punct	_	_

~~~


