---
layout: base
title:  'Statistics of appos in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `appos`

This relation is universal.

267 nodes (0%) are attached to their parents as `appos`.

266 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.17228464419476.

The following 14 pairs of parts of speech are connected with `appos`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (154; 58% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (59; 22% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (13; 5% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (7; 3% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (7; 3% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (7; 3% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 appos	color:blue
1	virtute	virtus	NOUN	C1|grn1|casF|gen2|vgr1	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	5	obl	_	_
2	enim	enim	ADV	O4	_	5	advmod	_	_
3	dei	deus	PROPN	F1|grn1|casB|gen1	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	1	nmod	_	_
4	utrumque	uterque	PRON	F1|grn1|casA|gen3|comH|vgr2	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Ind	6	nsubj	_	_
5	fit	facio	VERB	N3|modJ|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	5	punct	_	_
7	et	et	CCONJ	O4	_	8	mark	_	_
8	corpus	corpus	NOUN	C1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	6	nsubj	_	_
9	et	et	CCONJ	O4	_	7	fixed	_	_
10	anima	anima	NOUN	F1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	appos	_	SpaceAfter=No
11	:	:	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	effudit	effundo	VERB	L3|modA|tem4|gen6	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	illam	ille	PRON	F1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|PronType=Dem	1	obj	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	5	punct	_	_
4	scilicet	scilicet	ADV	O4	_	5	advmod:cc	_	_
5	sapientiam	sapientia	NOUN	A1|grn1|casD|gen2|vgr1	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	2	appos	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	9	punct	_	_
7	super	super	ADP	S4	AdpType=Prep	9	case	_	_
8	omnia	omnis	PRON	C1|grn1|casM|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur|PronType=Ind	9	det	_	_
9	opera	opus	NOUN	B1|grn1|casM|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	1	obl	_	_
10	sua	suus	ADJ	B1|grn1|casM|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur|Poss=Yes	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 appos	color:blue
1	res	res	NOUN	E1|grn1|casJ|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	6	nsubj	_	_
2	omnes	omnis	PRON	C1|grn1|casJ|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|PronType=Ind	1	det	_	_
3	creatae	creo	VERB	J2|modM|tem4|grp1|casJ|gen2|vgr1	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	1	acl	_	_
4	sunt	sum	AUX	N3|modA|tem1|gen9	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
5	quaedam	quidam	PRON	F1|grn1|casJ|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|PronType=Ind	6	det	_	_
6	imagines	imago	NOUN	C1|grn1|casJ|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	0	root	_	_
7	primi	primus	ADJ	B1|grn1|casB|gen3	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|NumType=Ord	8	amod	_	_
8	agentis	agens	NOUN	C1|grn1|casB|gen3	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	6	nmod	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	11	punct	_	_
10	scilicet	scilicet	ADV	O4	_	11	advmod:cc	_	_
11	dei	deus	PROPN	F1|grn1|casB|gen1	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	8	appos	_	SpaceAfter=No
12	:	:	PUNCT	Punc	_	6	punct	_	_

~~~


