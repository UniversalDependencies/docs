---
layout: base
title:  'Statistics of cc:preconj in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="et_edt-dep-cc.html">cc</a></tt>.

411 nodes (0%) are attached to their parents as `cc:preconj`.

399 instances of `cc:preconj` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58637469586375.

The following 13 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (223; 54% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (68; 17% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (45; 11% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (39; 9% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (15; 4% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (11; 3% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	Nii	nii	ADV	D	_	2	cc:preconj	_	_
2	kandidaadi-	kandidaat	NOUN	S	Case=Gen|Hyph=Yes|Number=Sing	6	obj	_	_
3	kui	kui	CCONJ	J	_	5	cc	_	_
4	ka	ka	ADV	D	_	5	advmod	_	_
5	doktoritöö	doktori_töö	NOUN	S	Case=Gen|Number=Sing	2	conj	_	_
6	tegin	tegema	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	nendest	see	DET	P	Case=Ela|Number=Plur|PronType=Dem	8	det	_	_
8	valdkondadest	valdkond	NOUN	S	Case=Ela|Number=Plur	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cc:preconj	color:blue
1	Ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	arvaksin	arvama	VERB	V	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	praegu	praegu	ADV	D	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	10	punct	_	_
5	et	et	SCONJ	J	_	10	mark	_	_
6	nad	tema	PRON	P	Case=Nom|Number=Plur|Person=3|PronType=Prs	10	nsubj:cop	_	_
7	võivad	võima	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	_
8	olla	olema	AUX	V	VerbForm=Inf	10	cop	_	_
9	nii	nii	ADV	D	_	10	cc:preconj	_	_
10	head	hea	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	2	ccomp	_	_
11	kui	kui	ADV	D	_	12	cc	_	_
12	halvad	halb	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	10	conj	_	SpaceAfter=No
13	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 cc:preconj	color:blue
1	Nii	nii	ADV	D	_	7	cc:preconj	_	_
2	et	et	SCONJ	J	_	7	mark	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	7	punct	_	_
4	Timo	Timo	PROPN	S	Case=Nom|Number=Sing	7	vocative	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	7	punct	_	_
6	sa	sina	PRON	P	Case=Nom|Number=Sing|Person=2|PronType=Prs	7	nsubj	_	_
7	võtsid	võtma	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	asja	asi	NOUN	S	Case=Par|Number=Sing	7	obj	_	_
9	rahulikult	rahulikult	ADV	D	_	7	advmod	_	SpaceAfter=No
10	?	?	PUNCT	Z	_	7	punct	_	_

~~~


