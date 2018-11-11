---
layout: base
title:  'Statistics of fixed in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `fixed`

This relation is universal.

811 nodes (0%) are attached to their parents as `fixed`.

811 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.47102342786683.

The following 13 pairs of parts of speech are connected with `fixed`: <tt><a href="la_ittb-pos-ADP.html">ADP</a></tt>-<tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt> (514; 63% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt> (103; 13% instances), <tt><a href="la_ittb-pos-ADP.html">ADP</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (76; 9% instances), <tt><a href="la_ittb-pos-ADP.html">ADP</a></tt>-<tt><a href="la_ittb-pos-ADP.html">ADP</a></tt> (56; 7% instances), <tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt> (28; 3% instances), <tt><a href="la_ittb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt> (20; 2% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="la_ittb-pos-ADP.html">ADP</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_ittb-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_ittb-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 fixed	color:blue
1	quia	quia	SCONJ	O4	_	3	mark	_	_
2	nihil	nihil	PRON	G1|casA|gen3|vgr1	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	3	nsubj	_	_
3	agit	ago	VERB	L3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	nisi	nisi	SCONJ	O4	_	7	mark	_	_
5	secundum	secundum	ADP	S4	AdpType=Prep	7	mark	_	_
6	quod	quod	SCONJ	O4	_	5	fixed	_	_
7	est	sum	VERB	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	_
8	in	in	ADP	S4	AdpType=Prep	9	case	_	_
9	actu	actus	NOUN	D1|grn1|casF|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	quae	qui	PRON	F1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|PronType=Rel	3	nsubj	_	_
2	quidem	quidem	ADV	O4	_	3	advmod	_	_
3	potest	possum	VERB	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Act	0	root	_	_
4	esse	sum	AUX	N3|modH|tem1	Tense=Pres|VerbForm=Inf|Voice=Act	5	cop	_	_
5	vera	verus	ADJ	A1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	xcomp	_	_
6	etiam	etiam	ADV	O4|vgr1	_	10	mark	_	_
7	si	si	SCONJ	O4	_	6	fixed	_	_
8	antecedens	antecedo	VERB	L2|modD|tem1|grp1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	10	csubj	_	_
9	sit	sum	AUX	N3|modB|tem1|gen6	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
10	impossibile	impossibilis	ADJ	C1|grn1|casA|gen3|vgr1	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	3	advcl	_	SpaceAfter=No
11	:	:	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	sic	sic	ADV	O4	_	8	advmod	_	_
2	enim	enim	ADV	O4	_	8	advmod	_	_
3	et	et	CCONJ	O4	_	4	advmod:emph	_	_
4	oppositae	oppono	VERB	L2|modM|tem4|grp1|casJ|gen2	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	5	acl	_	_
5	differentiae	differentia	NOUN	A1|grn1|casJ|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	8	nsubj:pass	_	_
6	ab	ab	ADP	S4|vgr2	AdpType=Prep	8	advmod	_	_
7	invicem	invicem	ADV	O4|vgr1	_	6	fixed	_	_
8	distinguuntur	distinguo	VERB	L3|modJ|tem1|gen9|vgr1	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
9	:	:	PUNCT	Punc	_	8	punct	_	_

~~~


