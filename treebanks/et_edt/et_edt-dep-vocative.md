---
layout: base
title:  'Statistics of vocative in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `vocative`

This relation is universal.

151 nodes (0%) are attached to their parents as `vocative`.

81 instances of `vocative` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.49006622516556.

The following 13 pairs of parts of speech are connected with `vocative`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (61; 40% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (41; 27% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (10; 7% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (9; 6% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (7; 5% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (5; 3% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (4; 3% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 vocative	color:blue
1	Tänan	tänama	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Verb=tänama
2	intervjuu	intervjuu	NOUN	S	Case=Gen|Number=Sing	1	obl	1:obl	Arg=tänama_Arg_2
3	eest	eest	ADP	K	AdpType=Post	2	case	2:case	SpaceAfter=No
4	,	,	PUNCT	Z	_	5	punct	5:punct	_
5	härra	härra	NOUN	S	Case=Nom|Number=Sing	1	vocative	1:vocative	_
6	Greenaway	Greenaway	PROPN	S	Case=Nom|Number=Sing	5	appos	5:appos	NE=B-Per|SpaceAfter=No
7	!	!	PUNCT	Z	_	1	punct	1:punct	_

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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 vocative	color:blue
1	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	3:nsubj	Arg=kartma_Arg_0
2	ei	ei	AUX	V	Polarity=Neg	3	aux	3:aux	_
3	karda	kartma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Verb=kartma
4	sind	sina	PRON	P	Case=Par|Number=Sing|Person=2|PronType=Prs	3	obj	3:obj	Arg=kartma_Arg_1|SpaceAfter=No
5	,	,	PUNCT	Z	_	6	punct	6:punct	_
6	aprill	aprill	NOUN	S	Case=Nom|Number=Sing	4	vocative	4:vocative	SpaceAfter=No
7	.	.	PUNCT	Z	_	3	punct	3:punct	_
8	”	”	PUNCT	Z	_	3	punct	3:punct	_

~~~


