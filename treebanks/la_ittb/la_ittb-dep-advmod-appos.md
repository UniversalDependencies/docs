---
layout: base
title:  'Statistics of advmod:appos in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advmod:appos`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="la_ittb-dep-advmod-cc.html">advmod:cc</a></tt>, <tt><a href="la_ittb-dep-advmod-emph.html">advmod:emph</a></tt>.

14 nodes (0%) are attached to their parents as `advmod:appos`.

12 instances of `advmod:appos` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.57142857142857.

The following 4 pairs of parts of speech are connected with `advmod:appos`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (10; 71% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (2; 14% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-PUNCT.html">PUNCT</a></tt> (1; 7% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PUNCT.html">PUNCT</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 advmod:appos	color:blue
1	in	in	ADP	S4	AdpType=Prep	2	case	_	_
2	secunda	secundus	ADJ	A1|grn1|casF|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	3	obl	_	_
3	determinat	determino	VERB	J3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	concomitantia	concomitor	VERB	J2|modM|tem1|grp1|casM|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Pass	3	ccomp	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	9	punct	_	_
6	quibus	qui	PRON	F1|grn1|casO|gen3	Case=Abl|Degree=Pos|Gender=Neut|Number=Plur|PronType=Rel	9	obl	_	_
7	hoc	hic	PRON	F1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Dem	8	det	_	_
8	sacramentum	sacramentum	NOUN	B1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	9	nsubj:pass	_	_
9	integratur	integro	VERB	J3|modJ|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	acl:relcl	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	12	punct	_	_
11	scilicet	scilicet	PART	O4	_	12	advmod:cc	_	_
12	formam	forma	NOUN	A1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	4	advmod:appos	_	_
13	et	et	CCONJ	O4	_	14	cc	_	_
14	institutionem	institutio	NOUN	C1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	12	conj	_	SpaceAfter=No
15	,	,	PUNCT	Punc	_	16	punct	_	_
16	ibi	ibi	ADV	O4	_	3	advmod	_	SpaceAfter=No
17	:	:	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 advmod:appos	color:blue
1	secundo	secundo	ADV	B1|grn1|casG	Degree=Pos	3	advmod	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	1	punct	_	_
3	indicitur	indico	VERB	N3|modJ|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	homini	homo	NOUN	C1|grn1|casC|gen1	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	3	obj	_	_
5	ne	ne	SCONJ	O4	_	10	mark	_	_
6	irreverenter	irreverenter	ADV	C1|grn1|casG|vgr1	Degree=Pos	10	advmod	_	_
7	divinum	divinus	ADJ	B1|grn1|casD|gen3|vgr1	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	8	amod	_	_
8	nomen	nomen	NOUN	C1|grn1|casD|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	10	obj	_	_
9	ore	os	NOUN	C1|grn1|casF|gen3	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing	10	obl	_	oris
10	pronuntiet	pronuntio	VERB	J3|modB|tem1|gen6|vgr2	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj:pass	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	13	punct	_	_
12	ad	ad	ADP	S4	AdpType=Prep	13	case	_	_
13	confirmationem	confirmatio	NOUN	C1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	6	advmod:appos	_	_
14	scilicet	scilicet	PART	O4	_	13	advmod:cc	_	_
15	alicuius	aliquis	PRON	F1|grn1|casB|gen3|vgr2	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing|PronType=Ind	13	nmod	_	_
16	falsi	falsus	ADJ	B1|grn1|casB|gen3	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	15	amod	_	SpaceAfter=No
17	:	:	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 advmod:appos	color:blue
1	et	et	CCONJ	O4	_	4	cc	_	_
2	ideo	ideo	ADV	O4	_	4	advmod	_	_
3	scientia	scientia	NOUN	A1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	4	nsubj:pass	_	_
4	acquiritur	acquiro	VERB	L3|modJ|tem1|gen6|vgr1	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
5	dupliciter	dupliciter	ADV	C1|grn1|casG	Degree=Pos	4	advmod	_	SpaceAfter=No
6	:	:	PUNCT	Punc	_	10	punct	_	_
7	et	et	CCONJ	O4	_	10	cc	_	_
8	sine	sine	ADP	S4	AdpType=Prep	9	case	_	_
9	doctrina	doctrina	NOUN	A1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	10	nmod:appos	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	5	advmod:appos	_	_
11	per	per	ADP	S4	AdpType=Prep	12	case	_	_
12	inventionem	inventio	NOUN	C1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	10	nmod:appos	_	SpaceAfter=No
13	;	;	PUNCT	Punc	_	16	punct	_	_
14	et	et	CCONJ	O4	_	16	cc	_	_
15	per	per	ADP	S4	AdpType=Prep	16	case	_	_
16	doctrinam	doctrina	NOUN	A1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	10	conj	_	SpaceAfter=No
17	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


