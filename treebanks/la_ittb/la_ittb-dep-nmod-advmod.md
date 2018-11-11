---
layout: base
title:  'Statistics of nmod:advmod in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `nmod:advmod`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="la_ittb-dep-nmod-appos.html">nmod:appos</a></tt>.

277 nodes (0%) are attached to their parents as `nmod:advmod`.

269 instances of `nmod:advmod` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.14440433212996.

The following 13 pairs of parts of speech are connected with `nmod:advmod`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (134; 48% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (55; 20% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (39; 14% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (14; 5% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (8; 3% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (7; 3% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (7; 3% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod:advmod	color:blue
1	non	non	ADV	O4	_	3	advmod	_	_
2	enim	enim	ADV	O4	_	3	advmod	_	_
3	participant	participo	VERB	J3|modA|tem1|gen9	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	genus	genus	NOUN	C1|grn1|casD|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	3	obj	_	_
5	quasi	quasi	ADV	O4	_	6	advmod	_	_
6	partem	pars	NOUN	C1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	4	nmod:advmod	_	_
7	suae	suus	ADJ	A1|grn1|casB|gen2|vgr1	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Poss=Yes	8	amod	_	_
8	essentiae	essentia	NOUN	A1|grn1|casB|gen2|vgr1	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
9	:	:	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 nmod:advmod	color:blue
1	in	in	ADP	S4	AdpType=Prep	2	case	_	_
2	illud	ille	PRON	F1|grn1|casD|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|PronType=Dem	4	obl:arg	_	_
3	enim	enim	ADV	O4	_	4	advmod	_	_
4	tendit	tendo	VERB	L3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	intentio	intentio	NOUN	C1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	4	nsubj	_	_
6	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	7	nsubj:pass	_	_
7	apprehenditur	apprehendo	VERB	L3|modJ|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	acl:relcl	_	_
8	ut	ut	SCONJ	O4|vgr1	_	9	advmod	_	_
9	finis	finis	NOUN	C1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	nmod:advmod	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 nmod:advmod	color:blue
1	quaedam	quidam	PRON	F1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|PronType=Ind	4	nsubj	_	_
2	vero	vero	ADV	B1|grn1|casG|vgr1	Degree=Pos	4	advmod	_	_
3	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	operatio	operatio	NOUN	C1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
5	rei	res	NOUN	E1|grn1|casB|gen2	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	nmod	_	_
6	ut	ut	SCONJ	O4|vgr1	_	9	advmod	_	_
7	ab	ab	ADP	S4|vgr2	AdpType=Prep	8	case	_	_
8	alio	alius	PRON	F1|grn1|casF|gen3	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing|PronType=Ind	9	obl:arg	_	_
9	motae	moveo	VERB	K2|modM|tem4|grp1|casB|gen2	Aspect=Perf|Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	nmod:advmod	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	12	punct	_	_
11	sicut	sicut	SCONJ	O4|vgr1	_	12	mark	_	_
12	calefieri	calefacio	VERB	N3|modQ|tem1	Tense=Pres|VerbForm=Inf|Voice=Pass	4	acl	_	_
13	et	et	CCONJ	O4	_	14	cc	_	_
14	secari	seco	VERB	J3|modQ|tem1	Tense=Pres|VerbForm=Inf|Voice=Pass	12	conj	_	SpaceAfter=No
15	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


