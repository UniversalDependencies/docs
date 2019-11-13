---
layout: base
title:  'Statistics of dep in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `dep`

This relation is universal.

13 nodes (0%) are attached to their parents as `dep`.

7 instances of `dep` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.61538461538462.

The following 6 pairs of parts of speech are connected with `dep`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (5; 38% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (4; 31% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 dep	color:blue
1	Kokkuvõttes	kokku_võte	NOUN	S	Case=Ine|Number=Sing	2	obl	_	_
2	maksis	maksma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	Munamägi	Muna_mägi	PROPN	S	Case=Nom|Number=Sing	2	nsubj	_	_
4	Feerile	Feer	PROPN	S	Case=Gen|Number=Sing	2	obl	_	_
5	suuri	suur	ADJ	A	Case=Par|Degree=Pos|Number=Plur	6	amod	_	_
6	summasid	summa	NOUN	S	Case=Par|Number=Plur	2	obj	_	SpaceAfter=No
7	:	:	PUNCT	Z	_	8	punct	_	_
8	tööraha	töö_raha	NOUN	S	Case=Nom|Number=Sing	6	appos	_	_
9	pluss	pluss	NOUN	S	Case=Nom|Number=Sing	13	obl	_	_
10	Feeri	Feer	PROPN	S	Case=Gen|Number=Sing	12	obl	_	_
11	poolt	poolt	ADP	K	AdpType=Post	10	case	_	_
12	lisatud	lisa=tud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Pass	13	acl	_	_
13	protsendid	protsent	NOUN	S	Case=Nom|Number=Plur	8	dep	_	SpaceAfter=No
14	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 dep	color:blue
1	"	"	PUNCT	Z	_	6	punct	_	SpaceAfter=No
2	Raha	raha	NOUN	S	Case=Gen|Number=Sing	6	obl	_	_
3	taga	taga	ADP	K	AdpType=Post	2	case	_	_
4	asi	asi	NOUN	S	Case=Nom|Number=Sing	6	nsubj	_	_
5	ei	ei	AUX	V	Polarity=Neg	6	aux	_	_
6	seisa	seisma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	dep	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	6	punct	_	SpaceAfter=No
8	"	"	PUNCT	Z	_	6	punct	_	_
9	omandab	omandama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	Paltsi	Palts	PROPN	S	Case=Gen|Number=Sing	11	nmod	_	_
11	jutt	jutt	NOUN	S	Case=Nom|Number=Sing	9	nsubj	_	_
12	laia	lai	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	13	amod	_	_
13	joone	joon	NOUN	S	Case=Gen|Number=Sing	9	obj	_	SpaceAfter=No
14	.	.	PUNCT	Z	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 dep	color:blue
1	Tibud	tibu	NOUN	S	Case=Nom|Number=Plur	3	nsubj:cop	_	_
2	olid	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
3	vangis	vang	NOUN	S	Case=Ine|Number=Sing	0	root	_	_
4	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Rel	5	dep	_	_
5	vangis	vang	NOUN	S	Case=Ine|Number=Sing	3	conj	_	SpaceAfter=No
6	.	.	PUNCT	Z	_	3	punct	_	_

~~~


