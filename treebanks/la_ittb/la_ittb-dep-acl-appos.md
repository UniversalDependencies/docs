---
layout: base
title:  'Statistics of acl:appos in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `acl:appos`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="la_ittb-dep-acl-relcl.html">acl:relcl</a></tt>.

20 nodes (0%) are attached to their parents as `acl:appos`.

20 instances of `acl:appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.9.

The following 7 pairs of parts of speech are connected with `acl:appos`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (9; 45% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (3; 15% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (2; 10% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (2; 10% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (2; 10% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:appos	color:blue
1	hunc	hic	NOUN	F1|grn1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
2	autem	autem	CCONJ	O4	_	4	cc	_	_
3	adhuc	adhuc	ADV	O4	_	1	advcl	_	_
4	alia	alius	NOUN	F1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	conj	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	7	punct	_	_
6	quod	quod	SCONJ	O4	_	7	mark	_	_
7	uult	uolo	VERB	N3|modA|tem1|gen6|vgr1	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Act	4	acl:appos	_	_
8	quaerere	quaero	VERB	L3|modH|tem1|vgr1	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	7	xcomp	_	_
9	aquam	aqua	NOUN	A1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	8	obj	_	SpaceAfter=No
10	;	;	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 acl:appos	color:blue
1	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	3	nsubj:pass	_	_
2	autem	autem	CCONJ	O4	_	16	cc	_	_
3	dictum	dico	VERB	N2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	16	csubj	_	_
4	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	10	punct	_	_
6	in	in	ADP	S4	AdpType=Prep	7	case	_	_
7	potestate	potestas	NOUN	C1|grn1|casF|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	10	obl	_	_
8	liberi	liber	ADJ	B1|grn1|casB|gen3	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	9	amod	_	_
9	arbitrii	arbitrium	NOUN	B1|grn1|casB|gen3	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	7	nmod	_	_
10	esse	sum	VERB	N3|modH|tem1	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	3	acl:appos	_	_
11	ne	ne	SCONJ	O4	_	14	mark	_	_
12	impedimentum	impedimentum	NOUN	B1|grn1|casD|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	14	obj	_	_
13	gratiae	gratia	NOUN	A1|grn1|casC|gen2|vgr1	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing	14	obl:arg	_	_
14	praestet	praesto	VERB	J3|modB|tem1|gen6	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	csubj	_	SpaceAfter=No
15	,	,	PUNCT	Punc	_	3	punct	_	_
16	competit	competo	VERB	L3|modA|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
17	his	hic	PRON	F1|grn1|casL|gen1|vgr1	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|PronType=Dem	16	obl:arg	_	_
18	in	in	ADP	S4	AdpType=Prep	19	case	_	_
19	quibus	qui	PRON	F1|grn1|casO|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Plur|PronType=Rel	22	obl	_	_
20	naturalis	naturalis	ADJ	C1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	21	amod	_	_
21	potentia	potentia	NOUN	A1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	22	nsubj	_	_
22	integra	integer	ADJ	A1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	17	acl:relcl	_	_
23	fuerit	sum	AUX	N3|modB|tem4|gen6	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	22	cop	_	SpaceAfter=No
24	.	.	PUNCT	Punc	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 20 acl:appos	color:blue
1	in	in	ADP	S4	AdpType=Prep	2	case	_	_
2	libro	liber	NOUN	B1|grn1|casF|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	6	obl	_	volumen
3	etiam	etiam	ADV	O4|vgr1	_	6	advmod:emph	_	_
4	de	de	ADP	S4	AdpType=Prep	5	case	_	_
5	causis	causa	NOUN	A1|grn1|casO|gen2|vgr1	Case=Abl|Degree=Pos|Gender=Fem|Number=Plur	2	nmod	_	_
6	dicitur	dico	VERB	N3|modJ|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
7	quod	quod	SCONJ	O4	_	10	mark	_	_
8	nec	nec	ADV	O4	_	9	advmod:emph	_	_
9	intelligentia	intellegentia	NOUN	A1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	10	nsubj	_	_
10	dat	do	VERB	J3|modA|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	csubj:pass	_	_
11	esse	esse	NOUN	G1|casD|gen3	Case=Acc|Gender=Neut|Number=Sing	10	obj	_	_
12	nisi	nisi	SCONJ	O4	_	15	mark	_	_
13	inquantum	in+quantum	SCONJ	O4|grn8|comZ	_	15	mark	_	_
14	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	15	cop	_	_
15	diuina	diuinus	ADJ	A1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	10	advcl	_	SpaceAfter=No
16	,	,	PUNCT	Punc	_	17	punct	_	_
17	idest	idest	ADV	O4	_	20	advmod:cc	_	SpaceAfter=No
18	,	,	PUNCT	Punc	_	17	punct	_	_
19	inquantum	in+quantum	SCONJ	O4|grn8|comZ	_	20	mark	_	_
20	agit	ago	VERB	L3|modA|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	15	acl:appos	_	_
21	in	in	ADP	S4	AdpType=Prep	22	case	_	_
22	uirtute	uirtus	NOUN	C1|grn1|casF|gen2|vgr1	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	20	obl	_	_
23	diuina	diuinus	ADJ	A1|grn1|casF|gen2|vgr1	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	22	amod	_	SpaceAfter=No
24	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


