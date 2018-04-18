---
layout: base
title:  'Statistics of nummod in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `nummod`

This relation is universal.

5233 nodes (1%) are attached to their parents as `nummod`.

3964 instances of `nummod` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.52149818459775.

The following 15 pairs of parts of speech are connected with `nummod`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (4228; 81% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (389; 7% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (283; 5% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (122; 2% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (111; 2% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (79; 2% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Nende	see	DET	P	Case=Gen|Number=Plur|PronType=Dem	2	det	_	_
2	puude	puu	NOUN	S	Case=Gen|Number=Plur	3	nmod	_	_
3	eluiga	elu_iga	NOUN	S	Case=Nom|Number=Sing	7	nsubj:cop	_	_
4	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
5	tavaliselt	tavaliselt	ADV	D	_	7	advmod	_	_
6	200-300	200-300	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	7	nummod	_	_
7	aastat	aasta	NOUN	S	Case=Par|Number=Sing	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nummod	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nummod	color:blue
1	Ei	ei	AUX	V	Polarity=Neg	2	aux	_	_
2	tõusnud	tõusma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	sellestki	see	PRON	P	Case=Ela|Number=Sing|PronType=Dem	2	obl	_	_
4	tulu	tulu	NOUN	S	Case=Nom|Number=Sing	2	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	11	punct	_	_
6	et	et	SCONJ	J	_	11	mark	_	_
7	TV	TV	PROPN	Y	Abbr=Yes	11	nsubj	_	_
8	3	3	NUM	N	NumForm=Digit|NumType=Card	7	nummod	_	_
9	saatejuhid	saate_juht	NOUN	S	Case=Nom|Number=Plur	11	obj	_	_
10	välja	välja	ADV	D	_	11	compound:prt	_	_
11	vahetas	vahetama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	acl	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	2	punct	_	_

~~~


