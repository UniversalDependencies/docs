---
layout: base
title:  'Statistics of advmod in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `advmod`

This relation is universal.

33373 nodes (8%) are attached to their parents as `advmod`.

25355 instances of `advmod` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.98226110927996.

The following 20 pairs of parts of speech are connected with `advmod`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (16885; 51% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (6213; 19% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (5391; 16% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (2334; 7% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (878; 3% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (730; 2% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (629; 2% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (266; 1% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (19; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-SYM.html">SYM</a></tt> (8; 0% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-AUX.html">AUX</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod	color:blue
1	Mind	mina	PRON	P	Case=Par|Number=Sing|Person=1|PronType=Prs	6	obj	6:obj	_
2	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
3	Vermeeri	Vermeer	PROPN	S	Case=Gen|Number=Sing	4	nmod	4:nmod	NE=B-Per
4	looming	looming	NOUN	S	Case=Nom|Number=Sing	6	nsubj	6:nsubj	_
5	alati	alati	ADV	D	_	6	advmod	6:advmod	_
6	fastsineerinud	fastsineerima	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	Z	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod	color:blue
1	Kahjuks	kahjuks	ADV	D	_	2	advmod	2:advmod	_
2	teatakse	teadma	VERB	V	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
3	ajaloos	aja_lugu	NOUN	S	Case=Ine|Number=Sing	2	obl	2:obl	_
4	oopereid	ooper	NOUN	S	Case=Par|Number=Plur	2	obj	2:obj	_
5	peamiselt	peamiselt	ADV	D	_	6	advmod	6:advmod	_
6	heliloojate	heli_looja	NOUN	S	Case=Gen|Number=Plur	2	obl	2:obl	_
7	järgi	järgi	ADP	K	AdpType=Post	6	case	6:case	SpaceAfter=No
8	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 advmod	color:blue
1	Nagu	nagu	SCONJ	J	_	2	mark	2:mark	_
2	Fellini	Fellini	PROPN	S	Case=Nom|Number=Sing	9	advcl	9:advcl	NE=B-Per|SpaceAfter=No
3	,	,	PUNCT	Z	_	9	punct	9:punct	_
4	olete	olema	AUX	V	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
5	te	sina	PRON	P	Case=Nom|Number=Plur|Person=2|PronType=Prs	9	nsubj:cop	9:nsubj	_
6	oma	oma	PRON	P	Case=Gen|Number=Sing|Poss=Yes|PronType=Prs	7	nmod	7:nmod	_
7	filmides	film	NOUN	S	Case=Ine|Number=Plur	9	obl	9:obl	_
8	tohutult	tohutult	ADV	D	_	9	advmod	9:advmod	_
9	erootiline	erootiline	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	Z	_	9	punct	9:punct	_

~~~


