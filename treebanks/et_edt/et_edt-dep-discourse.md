---
layout: base
title:  'Statistics of discourse in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `discourse`

This relation is universal.

303 nodes (0%) are attached to their parents as `discourse`.

258 instances of `discourse` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.45544554455446.

The following 16 pairs of parts of speech are connected with `discourse`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt> (155; 51% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt> (41; 14% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt> (21; 7% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt> (19; 6% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt> (18; 6% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt> (16; 5% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt> (12; 4% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (6; 2% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 discourse	color:blue
1	Muidugi	muidugi	ADV	D	_	2	advmod	2:advmod	_
2	olli	ollima	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	hää	hää	INTJ	I	_	2	discourse	2:discourse	_
4	meel	meel	NOUN	S	Case=Nom|Number=Sing	2	nsubj	2:nsubj	SpaceAfter=No
5	,	,	PUNCT	Z	_	11	punct	11:punct	_
6	kel	kes	PRON	P	Case=Ade|Number=Sing|PronType=Int,Rel	11	obl	11:obl	_
7	tuu	too	PRON	P	Case=Nom|Number=Sing|PronType=Dem	11	nsubj:cop	11:nsubj	_
8	ei	ei	AUX	V	Polarity=Neg	11	aux	11:aux	_
9	ole	olema	AUX	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
10	hää	hea	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	11	amod	11:amod	_
11	meel	meel	NOUN	S	Case=Nom|Number=Sing	2	conj	0:root|2:conj	SpaceAfter=No
12	.	.	PUNCT	Z	_	2	punct	2:punct	_
13	”	”	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 discourse	color:blue
1	"	"	PUNCT	Z	_	7	punct	7:punct	SpaceAfter=No
2	No	no	INTJ	I	_	7	discourse	7:discourse	_
3	eks	eks	ADV	D	_	7	advmod	7:advmod	_
4	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj:cop	7:nsubj	_
5	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
6	ikka	ikka	ADV	D	_	7	advmod	7:advmod	_
7	ateist	ateist	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	_
8	...	...	PUNCT	Z	_	7	punct	7:punct	SpaceAfter=No
9	"	"	PUNCT	Z	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 discourse	color:blue
1	"	"	PUNCT	Z	_	3	punct	3:punct	SpaceAfter=No
2	Ja	ja	CCONJ	J	_	3	cc	3:cc	_
3	nüüd	nüüd	ADV	D	_	0	root	0:root	SpaceAfter=No
4	:	:	PUNCT	Z	_	3	punct	3:punct	_
5	hoo	hoo	INTJ	I	_	3	discourse	3:discourse	SpaceAfter=No
6	!	!	PUNCT	Z	_	3	punct	3:punct	SpaceAfter=No
7	"	"	PUNCT	Z	_	3	punct	3:punct	_

~~~


