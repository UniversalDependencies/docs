---
layout: base
title:  'Statistics of mark in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `mark`

This relation is universal.

10075 nodes (2%) are attached to their parents as `mark`.

10026 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.60307692307692.

The following 18 pairs of parts of speech are connected with `mark`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (5573; 55% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (1546; 15% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1232; 12% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (728; 7% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (243; 2% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (186; 2% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (144; 1% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (138; 1% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (130; 1% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (101; 1% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (26; 0% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (15; 0% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 mark	color:blue
1	Ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	_
2	tahaksin	tahtma	VERB	V	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	Z	_	6	punct	6:punct	_
4	et	et	SCONJ	J	_	6	mark	6:mark	_
5	muusika	muusika	NOUN	S	Case=Nom|Number=Sing	6	nsubj	6:nsubj	_
6	teeniks	teenima	VERB	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	2:ccomp	_
7	minu	mina	PRON	P	Case=Gen|Number=Sing|Person=1|PronType=Prs	8	nmod	8:nmod	_
8	ideid	idee	NOUN	S	Case=Par|Number=Plur	6	obj	6:obj	SpaceAfter=No
9	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 mark	color:blue
1	Kuid	kuid	CCONJ	J	_	5	cc	5:cc	_
2	mulle	mina	PRON	P	Case=All|Number=Sing|Person=1|PronType=Prs	5	obl	5:obl	_
3	ongi	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
4	just	just	ADV	D	_	5	advmod	5:advmod	_
5	huvitavad	huvitav	ADJ	A	Case=Nom|Degree=Pos|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	0:root	_
6	üleminekuajajärgud	üle_mineku_aja_järk	NOUN	S	Case=Nom|Number=Plur	5	nsubj:cop	5:nsubj	_
7	nagu	nagu	SCONJ	J	_	8	mark	8:mark	_
8	manerism	manerism	NOUN	S	Case=Nom|Number=Sing	5	advcl	5:advcl	SpaceAfter=No
9	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark	color:blue
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


