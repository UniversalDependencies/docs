---
layout: base
title:  'Statistics of vocative in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `vocative`

This relation is universal.

143 nodes (0%) are attached to their parents as `vocative`.

75 instances of `vocative` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.41258741258741.

The following 13 pairs of parts of speech are connected with `vocative`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (58; 41% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (42; 29% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (8; 6% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (7; 5% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (7; 5% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (5; 3% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 vocative	color:blue
1	"	"	PUNCT	Z	_	4	punct	4:punct	SpaceAfter=No
2	Keegi	keegi	PRON	P	Case=Nom|Number=Sing|PronType=Ind	4	nsubj	4:nsubj|6:nsubj	_
3	ei	ei	AUX	V	Polarity=Neg	4	aux	4:aux	_
4	taha	tahtma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	teiega	sina	PRON	P	Case=Com|Number=Plur|Person=2|PronType=Prs	6	obl	6:obl	_
6	seksida	seksima	VERB	V	VerbForm=Inf	4	xcomp	4:xcomp	SpaceAfter=No
7	,	,	PUNCT	Z	_	9	punct	9:punct	_
8	kuradi	kuradi	ADJ	A	Degree=Pos	9	amod	9:amod	_
9	pederastid	pederast	NOUN	S	Case=Nom|Number=Plur	4	vocative	4:vocative	SpaceAfter=No
10	!	!	PUNCT	Z	_	4	punct	4:punct	SpaceAfter=No
11	"	"	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 vocative	color:blue
1	Juudas	Juudas	PROPN	S	Case=Nom|Number=Sing	2	nsubj	2:nsubj	NE=B-Per
2	ajas	ajama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	end	ise	PRON	P	Case=Par|Number=Sing|PronType=Prs|Reflex=Yes	2	obj	2:obj	_
4	oiates	oigama	VERB	V	VerbForm=Conv	2	advcl	2:advcl	_
5	üles	üles	ADV	D	_	2	compound:prt	2:compound	SpaceAfter=No
6	:	:	PUNCT	Z	_	8	punct	8:punct	_
7	"	"	PUNCT	Z	_	8	punct	8:punct	SpaceAfter=No
8	Kristin	Kristin	PROPN	S	Case=Nom|Number=Sing	2	vocative	2:vocative	NE=B-Per|SpaceAfter=No
9	?	?	PUNCT	Z	_	8	punct	8:punct	SpaceAfter=No
10	"	"	PUNCT	Z	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 vocative	color:blue
1	Jututubades	jutu_tuba	NOUN	S	Case=Ine|Number=Plur	2	nmod	2:nmod	_
2	käijad	käija	NOUN	S	Case=Nom|Number=Plur	4	vocative	4:vocative	SpaceAfter=No
3	,	,	PUNCT	Z	_	2	punct	2:punct	_
4	ettevaatust	ette_vaatus	NOUN	S	Case=Par|Number=Sing	0	root	0:root	SpaceAfter=No
5	!	!	PUNCT	Z	_	4	punct	4:punct	_

~~~


