---
layout: base
title:  'Statistics of ccomp in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `ccomp`

This relation is universal.

2280 nodes (1%) are attached to their parents as `ccomp`.

2233 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.49298245614035.

The following 19 pairs of parts of speech are connected with `ccomp`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (1577; 69% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (267; 12% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (242; 11% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (77; 3% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (49; 2% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (22; 1% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (16; 1% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-AUX.html">AUX</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 ccomp	color:blue
1	Kuidas	kuidas	ADV	D	_	3	mark	_	_
2	puu	puu	NOUN	S	Case=Nom|Number=Sing	3	nsubj	_	_
3	süttis	süttima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	ccomp	_	_
4	pole	olema	AUX	V	Mood=Ind|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
5	teada	teadma	VERB	V	VerbForm=Inf	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	“	“	PUNCT	Z	_	2	punct	_	_
2	Küsin	küsima	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	5	punct	_	_
4	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	5	nsubj:cop	_	_
5	viga	viga	NOUN	S	Case=Par|Number=Sing	2	ccomp	_	SpaceAfter=No
6	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 ccomp	color:blue
1	Päevapalk	päeva-palk	NOUN	S	Case=Nom|Number=Sing	2	nsubj	_	_
2	kerkis	kerkima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
3	kahekordseks	kahe-kordne	ADJ	A	Case=Tra|Degree=Pos|Number=Sing	2	ccomp	_	SpaceAfter=No
4	.	.	PUNCT	Z	_	2	punct	_	_

~~~


