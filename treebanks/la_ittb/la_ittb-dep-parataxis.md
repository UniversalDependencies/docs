---
layout: base
title:  'Statistics of parataxis in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `parataxis`

This relation is universal.

122 nodes (0%) are attached to their parents as `parataxis`.

103 instances of `parataxis` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.68032786885246.

The following 21 pairs of parts of speech are connected with `parataxis`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (46; 38% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (16; 13% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (8; 7% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (8; 7% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (8; 7% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (7; 6% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (6; 5% instances), <tt><a href="la_ittb-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis	color:blue
1	erunt	sum	VERB	N3|modA|tem3|gen9	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	3	punct	_	_
3	inquit	inquam	VERB	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	7	punct	_	_
5	de	de	ADP	S4	AdpType=Prep	6	case	_	_
6	hominibus	homo	NOUN	C1|grn1|casO|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Plur	7	obl:arg	_	_
7	loquens	loquor	VERB	L2|modM|tem1|grp1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Pass	3	advcl	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	3	punct	_	_
9	sicut	sicut	SCONJ	O4|vgr1	_	10	mark	_	_
10	angeli	angelus	NOUN	B1|grn1|casJ|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	advcl	_	_
11	dei	deus	PROPN	F1|grn1|casB|gen1	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	10	nmod	_	_
12	in	in	ADP	S4	AdpType=Prep	13	case	_	_
13	caelo	caelum	NOUN	B1|grn1|casF|gen3|vgr1	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing	10	orphan	_	SpaceAfter=No
14	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 parataxis	color:blue
1	nam	nam	ADV	O4	_	5	advmod	_	_
2	forma	forma	NOUN	A1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	5	nsubj	_	_
3	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	operationis	operatio	NOUN	C1|grn1|casB|gen2|vgr1	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	5	nmod	_	_
5	principium	principium	NOUN	B1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	11	punct	_	_
7	secundum	secundum	ADP	S4	AdpType=Prep	8	case	_	_
8	quam	qui	PRON	F1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|PronType=Rel	11	obl	_	_
9	unaquaeque	unusquisque	PRON	F1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|PronType=Ind	10	det	_	_
10	natura	natura	NOUN	A1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	nsubj	_	_
11	habet	habeo	VERB	K3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	_
12	propriam	proprius	ADJ	A1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	_
13	speciem	species	NOUN	E1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	11	obj	_	SpaceAfter=No
14	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 parataxis	color:blue
1	unde	unde	ADV	O4	_	9	advmod	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	7	punct	_	_
3	cum	cum	SCONJ	S4|vgr1	_	7	mark	_	_
4	anima	anima	NOUN	F1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	nsubj	_	_
5	non	non	ADV	O4	_	7	advmod	_	_
6	sit	sum	AUX	N3|modB|tem1|gen6	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	corpus	corpus	NOUN	C1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	9	advcl	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	7	punct	_	_
9	impossibile	impossibilis	ADJ	C1|grn1|casA|gen3|vgr1	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
10	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
11	ipsam	ipse	PRON	F1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|PronType=Dem,Prs	12	nsubj:pass	_	_
12	moveri	moveo	VERB	K3|modQ|tem1|vgr1	Tense=Pres|VerbForm=Inf|Voice=Pass	9	parataxis	_	_
13	nisi	nisi	SCONJ	O4	_	15	mark	_	_
14	per	per	ADP	S4	AdpType=Prep	15	case	_	_
15	accidens	accidens	NOUN	C1|grn1|casD|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	12	advcl	_	SpaceAfter=No
16	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


