---
layout: base
title:  'Statistics of fixed in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `fixed`

This relation is universal.

117 nodes (0%) are attached to their parents as `fixed`.

117 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07692307692308.

The following 13 pairs of parts of speech are connected with `fixed`: <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (43; 37% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (42; 36% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (7; 6% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (6; 5% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (4; 3% instances), <tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (4; 3% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 1% instances).


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
1	Nii	nii	ADV	D	_	10	advmod	_	_
2	et	et	SCONJ	J	_	1	fixed	_	_
3	eurot	euro	NOUN	S	Case=Par|Number=Sing	10	obj	_	_
4	teie	sina	PRON	P	Case=Gen|Number=Plur|Person=2|PronType=Prs	5	nmod	_	_
5	ametiaja	ameti_aeg	NOUN	S	Case=Gen|Number=Sing	10	obl	_	_
6	jooksul	jooksul	ADP	K	AdpType=Post	5	case	_	_
7	Eestis	Eesti	PROPN	S	Case=Ine|Number=Sing	10	obl	_	_
8	käibele	käibele	ADV	D	_	10	compound:prt	_	_
9	ei	ei	AUX	V	Polarity=Neg	10	aux	_	_
10	võeta	võtma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
11	?	?	PUNCT	Z	_	10	punct	_	_

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


