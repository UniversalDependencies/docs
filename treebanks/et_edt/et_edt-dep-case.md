---
layout: base
title:  'Statistics of case in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `case`

This relation is universal.

9224 nodes (2%) are attached to their parents as `case`.

7276 instances of `case` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.37966175195143.

The following 14 pairs of parts of speech are connected with `case`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (7463; 81% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (970; 11% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (503; 5% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (167; 2% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (87; 1% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (14; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (9; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 case	color:blue
1	Kahjuks	kahjuks	ADV	D	_	2	advmod	_	_
2	teatakse	teadma	VERB	V	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	ajaloos	aja_lugu	NOUN	S	Case=Ine|Number=Sing	2	obl	_	_
4	oopereid	ooper	NOUN	S	Case=Par|Number=Plur	2	obj	_	_
5	peamiselt	peamiselt	ADV	D	_	6	advmod	_	_
6	heliloojate	heli_looja	NOUN	S	Case=Gen|Number=Plur	2	obl	_	_
7	järgi	järgi	ADP	K	AdpType=Post	6	case	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Tegelikult	tegelikult	ADV	D	_	2	advmod	_	_
2	esimesed	esimene	ADJ	N	Case=Nom|Number=Plur|NumForm=Letter|NumType=Ord	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	7	punct	_	_
4	tänu	tänu	ADP	K	AdpType=Prep	5	case	_	_
5	kellele	kes	PRON	P	Case=All|Number=Plur|PronType=Int,Rel	7	obl	_	_
6	etnofutu	etnofutu	NOUN	S	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	7	nsubj	_	_
7	sündis	sündima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	acl:relcl	_	SpaceAfter=No
8	,	,	PUNCT	Z	_	7	punct	_	_
9	olid	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	cop	_	_
10	setod	seto	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	2	nsubj:cop	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
1	Nagu	nagu	SCONJ	J	_	2	mark	_	_
2	Wagneri	Wagner	PROPN	S	Case=Gen|Number=Sing	0	root	_	_
3	puhul	puhul	ADP	K	AdpType=Post	2	case	_	SpaceAfter=No
4	.	.	PUNCT	Z	_	2	punct	_	_

~~~


