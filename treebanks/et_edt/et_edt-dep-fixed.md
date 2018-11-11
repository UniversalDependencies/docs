---
layout: base
title:  'Statistics of fixed in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `fixed`

This relation is universal.

138 nodes (0%) are attached to their parents as `fixed`.

138 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.06521739130435.

The following 14 pairs of parts of speech are connected with `fixed`: <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (51; 37% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (51; 37% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (7; 5% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (4; 3% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (4; 3% instances), <tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (4; 3% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 fixed	color:blue
1	Samal	sama	PRON	P	Case=Ade|Number=Sing|PronType=Dem	5	obl	_	_
2	ajal	aeg	NOUN	S	Case=Ade|Number=Sing	1	fixed	_	_
3	kui	kui	SCONJ	J	_	1	fixed	_	_
4	Skandinaavias	Skandinaavia	PROPN	S	Case=Ine|Number=Sing	5	obl	_	_
5	saab	saama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	väga	väga	ADV	D	_	7	advmod	_	_
7	hästi	hästi	ADV	D	_	5	advmod	_	_
8	-	-	PUNCT	Z	_	5	punct	_	_
9	Soomest	Soome	PROPN	S	Case=Ela|Number=Sing	12	obl	_	_
10	Inglismaani	Inglis_maa	PROPN	S	Case=Ter|Number=Sing	12	obl	_	_
11	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	_
12	võimul	võim	NOUN	S	Case=Ade|Number=Sing	5	parataxis	_	_
13	sotsiaaldemokraadid	sotsiaal_demo_kraat	NOUN	S	Case=Nom|Number=Plur	12	nsubj:cop	_	SpaceAfter=No
14	.	.	PUNCT	Z	_	5	punct	_	_
15	"	"	PUNCT	Z	_	5	punct	_	_

~~~


