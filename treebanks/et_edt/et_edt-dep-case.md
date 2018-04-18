---
layout: base
title:  'Statistics of case in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `case`

This relation is universal.

7869 nodes (2%) are attached to their parents as `case`.

6194 instances of `case` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.37527004701995.

The following 12 pairs of parts of speech are connected with `case`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (6364; 81% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (816; 10% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (437; 6% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (158; 2% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (75; 1% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (6; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 case	color:blue
1	Üle	üle	ADP	K	AdpType=Prep	2	case	_	_
2	poole	pool	NUM	N	Case=Gen|Number=Sing|NumForm=Letter|NumType=Card	4	nummod	_	_
3	neist	tema	PRON	P	Case=Ela|Number=Plur|Person=3|PronType=Prs	2	nmod	_	_
4	lasti	laskma	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
5	maha	maha	ADV	D	_	4	compound:prt	_	_
6	pärast	pärast	ADP	K	AdpType=Prep	9	case	_	_
7	Berliini	Berliin	PROPN	S	Case=Gen|Number=Sing	8	nmod	_	_
8	müüri	müür	NOUN	S	Case=Gen|Number=Sing	9	nmod	_	_
9	püstitamist	püstitamine	NOUN	S	Case=Par|Number=Sing	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	Eesti	Eesti	PROPN	S	Case=Gen|Number=Sing	2	nmod	_	_
2	riigi	riik	NOUN	S	Case=Gen|Number=Sing	4	nmod	_	_
3	üks	üks	DET	P	Case=Nom|Number=Sing|PronType=Ind	4	det	_	_
4	tippametnikke	tipp_ametnik	NOUN	S	Case=Par|Number=Plur	8	nsubj	_	_
5	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	aux	_	_
6	ühes	ühes	ADP	K	AdpType=Prep	7	case	_	_
7	nendega	tema	PRON	P	Case=Com|Number=Plur|Person=3|PronType=Prs	8	obl	_	_
8	läinud	minema	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
9	...	...	PUNCT	Z	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Tännava	Tännava	PROPN	S	Case=Gen|Number=Sing	3	obl	_	_
2	peale	peale	ADP	K	AdpType=Post	1	case	_	_
3	puistasime	puistama	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	saepuru	sae_puru	NOUN	S	Case=Par|Number=Sing	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	9	punct	_	_
6	et	et	SCONJ	J	_	9	mark	_	_
7	oless	oless	NOUN	S	Case=Nom|Number=Sing	9	obj	_	_
8	puhas	puhas	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	9	amod	_	_
9	astu	astuma	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	3	punct	_	_
11	”	”	PUNCT	Z	_	3	punct	_	_

~~~


