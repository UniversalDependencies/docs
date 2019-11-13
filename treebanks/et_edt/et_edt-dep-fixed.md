---
layout: base
title:  'Statistics of fixed in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `fixed`

This relation is universal.

381 nodes (0%) are attached to their parents as `fixed`.

381 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02362204724409.

The following 17 pairs of parts of speech are connected with `fixed`: <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (266; 70% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (54; 14% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (23; 6% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (7; 2% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (4; 1% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Nii	nii	ADV	D	_	4	advmod	_	_
2	et	et	SCONJ	J	_	1	fixed	_	_
3	tema	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
4	kasutas	kasutama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	Mozartit	Mozart	PROPN	S	Case=Par|Number=Sing	4	obj	_	_
6	oma	oma	PRON	P	Case=Gen|Number=Sing|Poss=Yes|PronType=Prs	7	nmod	_	_
7	unistuste	unistus	NOUN	S	Case=Gen|Number=Plur	8	nmod	_	_
8	teokstegemisel	teoks_tegemine	NOUN	S	Case=Ade|Number=Sing	4	obl	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Rahvast	rahvas	NOUN	S	Case=Par|Number=Sing	2	nsubj	_	_
2	jooksis	jooksma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	igalt	iga	PRON	P	Case=Abl|Number=Sing|PronType=Tot	2	obl	_	_
4	poolt	poolt	ADV	D	_	3	fixed	_	_
5	kokku	kokku	ADV	D	_	2	compound:prt	_	SpaceAfter=No
6	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Eriti	eriti	ADV	D	_	4	advmod	_	_
2	kui	kui	ADV	D	_	1	fixed	_	_
3	juhe	juhe	NOUN	S	Case=Nom|Number=Sing	4	nsubj:cop	_	_
4	koos	koos	ADV	D	_	0	root	_	SpaceAfter=No
5	"	"	PUNCT	Z	_	4	punct	_	_

~~~


