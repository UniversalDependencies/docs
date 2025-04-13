---
layout: base
title:  'Statistics of goeswith in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `goeswith`

This relation is universal.

271 nodes (0%) are attached to their parents as `goeswith`.

271 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.06273062730627.

The following 5 pairs of parts of speech are connected with `goeswith`: <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (247; 91% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (14; 5% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (7; 3% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	Üks	üks	NUM	N	Case=Nom|Number=Sing|NumForm=Word|NumType=Card	7	nummod	7:nummod	_
2	40	40000	NUM	N	NumForm=Digit|NumType=Card|Typo=Yes	7	nummod	7:nummod	CorrectForm=40000st
3	000st	_	X	_	_	2	goeswith	2:goeswith	_
4	Shveitsi	Šveits	PROPN	S	Case=Add|Number=Sing	5	obl	5:obl	NE=B-Loc
5	pagenud	page=nud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Act	7	acl	7:acl	_
6	Kosovo	Kosovo	PROPN	S	Case=Gen|Number=Sing	7	nmod	7:nmod	NE=B-Gep
7	albaanlasest	albaanlane	NOUN	S	Case=Ela|Number=Sing	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	Z	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	50	50000_naelane	ADJ	A	Case=All|Degree=Pos|Number=Sing|Typo=Yes	5	amod	5:amod	CorrectForm=50000-naelasele
2	000-naelasele	_	X	_	_	1	goeswith	1:goeswith	_
3	Man	Man	PROPN	S	Case=Nom|Number=Sing	5	nmod	5:nmod	NE=B-Muu
4	Bookeri	Booker	PROPN	S	Case=Gen|Number=Sing	3	flat	3:flat	NE=I-Muu
5	auhinnale	au_hind	NOUN	S	Case=All|Number=Sing	6	obl	6:obl	NE=I-Muu
6	kandideerivad	kandideerima	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
7	:	:	PUNCT	Z	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 goeswith	color:blue
1	Nende	see	PRON	P	Case=Gen|Number=Plur|PronType=Dem	2	nmod	2:nmod	_
2	filmid	film	NOUN	S	Case=Nom|Number=Plur	3	nsubj	3:nsubj|8:nsubj	Arg=jooksma_Arg_0
3	jooksevad	jooksma	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Verb=jooksma_3
4	uhketes	uhke	ADJ	A	Case=Ine|Degree=Pos|Number=Plur	6	amod	6:amod	_
5	peatänavate	pea_tänav	NOUN	S	Case=Gen|Number=Plur	6	nmod	6:nmod	_
6	kinodes	kino	NOUN	S	Case=Ine|Number=Plur	3	obl	3:obl	_
7	ja	ja	CCONJ	J	_	8	cc	8:cc	_
8	võistlevad	võistlema	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	0:root|3:conj	Verb=võistlema
9	vaatajate	vaataja	NOUN	S	Case=Gen|Number=Plur	10	nmod	10:nmod	_
10	top	top	NOUN	S	Case=Nom|Number=Sing	8	obl	8:obl	OrigLang=en
11	ten	ten	NOUN	S	Case=Ine|Number=Sing|Typo=Yes	10	flat	10:flat	OrigLang=en|CorrectForm=ten'is
12	'is	_	X	T	_	11	goeswith	11:goeswith	SpaceAfter=No
13	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


