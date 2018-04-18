---
layout: base
title:  'Statistics of aux in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `aux`

This relation is universal.

9930 nodes (3%) are attached to their parents as `aux`.

9413 instances of `aux` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25166163141994.

The following 10 pairs of parts of speech are connected with `aux`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (8849; 89% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (428; 4% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (426; 4% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (106; 1% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (72; 1% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (25; 0% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (18; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
1	Ilma	ilma	ADP	K	AdpType=Prep	3	case	_	_
2	selle	see	DET	P	Case=Gen|Number=Sing|PronType=Dem	3	det	_	_
3	kaitsekihita	kaitse_kiht	NOUN	S	Case=Abe|Number=Sing	7	obl	_	_
4	oleks	olema	AUX	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
5	puutüved	puu_tüvi	NOUN	S	Case=Nom|Number=Plur	7	nsubj	_	_
6	kivisöeks	kivi_süsi	NOUN	S	Case=Tra|Number=Sing	7	xcomp	_	_
7	muutunud	muutuma	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	Külaelanike	küla_elanik	NOUN	S	Case=Gen|Number=Plur	2	nmod	_	_
2	jutu	jutt	NOUN	S	Case=Gen|Number=Sing	5	obl	_	_
3	järgi	järgi	ADP	K	AdpType=Post	2	case	_	_
4	võisid	võima	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	_	_
5	majas	maja	NOUN	S	Case=Ine|Number=Sing	0	root	_	_
6	olla	olema	AUX	V	VerbForm=Inf	5	cop	_	_
7	inimesed	inimene	NOUN	S	Case=Nom|Number=Plur	5	nsubj:cop	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Tööga	töö	NOUN	S	Case=Com|Number=Sing	4	obl	_	_
2	ei	ei	AUX	V	Polarity=Neg	4	aux	_	_
3	ole	olema	AUX	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	võimalik	võimalik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
5	rikkaks	rikas	ADJ	A	Case=Tra|Degree=Pos|Number=Sing	6	amod	_	_
6	saada	saama	VERB	V	VerbForm=Inf	4	csubj:cop	_	SpaceAfter=No
7	;	;	PUNCT	Z	_	9	punct	_	_
8	rikkaks	rikas	ADJ	A	Case=Tra|Degree=Pos|Number=Sing	9	xcomp	_	_
9	saab	saama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	parataxis	_	_
10	müümisega	müümine	NOUN	S	Case=Com|Number=Sing	9	obl	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	4	punct	_	_

~~~


