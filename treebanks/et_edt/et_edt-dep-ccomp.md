---
layout: base
title:  'Statistics of ccomp in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `ccomp`

This relation is universal.

2741 nodes (1%) are attached to their parents as `ccomp`.

2686 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.56913535206129.

The following 20 pairs of parts of speech are connected with `ccomp`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (1903; 69% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (327; 12% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (289; 11% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (87; 3% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (56; 2% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (25; 1% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (19; 1% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (9; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-AUX.html">AUX</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 ccomp	color:blue
1	Uskuge	uskuma	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	või	või	CCONJ	J	_	3	cc	3:cc	_
3	mitte	mitte	ADV	D	Polarity=Neg	1	conj	1:conj	SpaceAfter=No
4	,	,	PUNCT	Z	_	6	punct	6:punct	_
5	maalide	maal	NOUN	S	Case=Gen|Number=Plur	6	nmod	6:nmod	_
6	autoriks	autor	NOUN	S	Case=Tra|Number=Sing	1	ccomp	1:ccomp	_
7	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
8	päris	päris	ADV	D	_	9	advmod	9:advmod	_
9	noor	noor	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	10	amod	10:amod	_
10	mees	mees	NOUN	S	Case=Nom|Number=Sing	6	nsubj:cop	6:nsubj	SpaceAfter=No
11	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 ccomp	color:blue
1	Arvame	arvama	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	Z	_	9	punct	9:punct	_
3	et	et	SCONJ	J	_	9	mark	9:mark	_
4	turuosa	turu_osa	NOUN	S	Case=Gen|Number=Sing	5	nmod	5:nmod	_
5	tõstmine	tõstmine	NOUN	S	Case=Nom|Number=Sing	9	nsubj:cop	9:nsubj	_
6	orgaanilisel	orgaaniline	ADJ	A	Case=Ade|Degree=Pos|Number=Sing	7	amod	7:amod	_
7	teel	tee	NOUN	S	Case=Ade|Number=Sing	9	obl	9:obl	_
8	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
9	õigem	õigem	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	1	ccomp	1:ccomp	SpaceAfter=No
10	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


