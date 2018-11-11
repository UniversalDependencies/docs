---
layout: base
title:  'Statistics of appos in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `appos`

This relation is universal.

409 nodes (0%) are attached to their parents as `appos`.

315 instances of `appos` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.71882640586797.

The following 16 pairs of parts of speech are connected with `appos`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (262; 64% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (68; 17% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (26; 6% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (13; 3% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (7; 2% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (7; 2% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PUNCT.html">PUNCT</a></tt> (3; 1% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 appos	color:blue
1	sed	sed	CCONJ	O4|vgr1	_	7	cc	_	_
2	ipsum	ipse	PRON	F1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Dem,Prs	3	det	_	_
3	esse	esse	NOUN	G1|casA|gen3	Case=Nom|Gender=Neut|Number=Sing	7	nsubj	_	_
4	divinum	divinus	NOUN	B1|grn1|casA|gen3|vgr1	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	3	appos	_	_
5	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
6	sua	suus	ADJ	A1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Poss=Yes	7	amod	_	_
7	substantia	substantia	NOUN	A1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	10	punct	_	_
9	ut	ut	SCONJ	O4|vgr1	_	10	mark	_	_
10	ostensum	ostendo	VERB	L2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	7	advcl	_	_
11	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux:pass	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 appos	color:blue
1	et	et	CCONJ	O4	_	5	cc	_	_
2	sic	sic	ADV	O4	_	5	advmod	_	_
3	nihil	nihil	PRON	G1|casA|gen3|vgr1	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	5	nsubj	_	_
4	inconveniens	inconveniens	NOUN	C1|grn1|casA|gen3|vgr1	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	3	appos	_	_
5	accidit	accido	VERB	L3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	cado
6	ponentibus	pono	VERB	L2|modD|tem1|grp1|casL|gen1	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	5	ccomp	_	_
7	deum	deus	PROPN	F1|grn1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	9	nsubj	_	_
8	non	non	ADV	O4	_	9	advmod	_	_
9	esse	sum	VERB	N3|modH|tem1	Tense=Pres|VerbForm=Inf|Voice=Act	6	ccomp	_	SpaceAfter=No
10	:	:	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 appos	color:blue
1	omnis	omnis	PRON	C1|grn1|casA	Case=Nom|Degree=Pos|Number=Sing|PronType=Ind	3	appos	_	_
2	enim	enim	ADV	O4	_	6	advmod	_	_
3	forma	forma	NOUN	A1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	6	nsubj	_	_
4	et	et	CCONJ	O4	_	5	cc	_	_
5	actus	actus	NOUN	D1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	conj	_	_
6	est	sum	VERB	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	in	in	ADP	S4	AdpType=Prep	8	case	_	_
8	potentia	potentia	NOUN	A1|grn1|casF|gen2|vgr1	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	6	obl	_	_
9	antequam	antequam	SCONJ	O4	_	11	mark	_	_
10	esse	esse	NOUN	G1|casD|gen3	Case=Acc|Gender=Neut|Number=Sing	11	obj	_	_
11	acquirat	acquiro	VERB	L3|modB|tem1|gen6	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


