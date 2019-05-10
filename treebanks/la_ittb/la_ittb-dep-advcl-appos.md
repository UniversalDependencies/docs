---
layout: base
title:  'Statistics of advcl:appos in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advcl:appos`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advcl.html">advcl</a></tt>.
There are also 1 other language-specific subtypes of `advcl`: <tt><a href="la_ittb-dep-advcl-arg.html">advcl:arg</a></tt>.

24 nodes (0%) are attached to their parents as `advcl:appos`.

24 instances of `advcl:appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.375.

The following 5 pairs of parts of speech are connected with `advcl:appos`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (13; 54% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (6; 25% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (3; 13% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 25 advcl:appos	color:blue
1	ad	ad	ADP	S4	AdpType=Prep	2	case	_	_
2	tertium	tertius	NOUN	B1|grn1|casD|gen3|vgr1	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	3	orphan	_	_
3	dicendum	dico	VERB	N2|modO|grp1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Gdv|Voice=Pass	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	7	punct	_	_
5	quod	quod	SCONJ	O4	_	7	mark	_	_
6	idem	idem	PRON	F1|grn1|casA|gen3|vgr1	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Dem,Prs	7	nsubj:pass	_	_
7	videtur	video	VERB	K3|modJ|tem1|gen6|vgr1	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	advcl	_	_
8	esse	sum	VERB	N3|modH|tem1	Tense=Pres|VerbForm=Inf|Voice=Act	7	xcomp	_	_
9	de	de	ADP	S4	AdpType=Prep	10	case	_	_
10	sono	sonus	NOUN	B1|grn1|casF|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	8	obl	_	_
11	illo	ille	PRON	F1|grn1|casF|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing|PronType=Dem	10	det	_	_
12	et	et	CCONJ	O4	_	14	cc	_	_
13	de	de	ADP	S4	AdpType=Prep	14	case	_	_
14	formis	forma	NOUN	A1|grn1|casO|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Plur	10	conj	_	_
15	sacramentorum	sacramentum	NOUN	B1|grn1|casK|gen3	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur	14	nmod	_	SpaceAfter=No
16	;	;	PUNCT	Punc	_	25	punct	_	_
17	scilicet	scilicet	ADV	O4	_	25	orphan	_	_
18	quod	quod	SCONJ	O4	_	25	mark	_	_
19	in	in	ADP	S4	AdpType=Prep	21	case	_	_
20	ultimo	ultimus	ADJ	B1|grn3|casF|gen3	Case=Abl|Degree=Abs|Gender=Neut|Number=Sing	21	amod	_	_
21	instanti	instans	NOUN	C1|grn1|casF|gen3|vgr1	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing	25	obl	_	_
22	prolationis	prolatio	NOUN	C1|grn1|casB|gen2	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	21	nmod	_	_
23	effectum	effectus	NOUN	D1|grn1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	25	obj	_	_
24	suum	suus	ADJ	B1|grn1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Poss=Yes	23	amod	_	_
25	habebunt	habeo	VERB	K3|modA|tem3|gen9	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	7	advcl:appos	_	SpaceAfter=No
26	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 15 advcl:appos	color:blue
1	quaedam	quidam	PRON	F1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|PronType=Ind	3	det	_	_
2	vero	vero	ADV	B1|grn1|casG|vgr1	Degree=Pos	4	advmod	_	_
3	humiditas	humiditas	NOUN	C1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	4	nsubj	_	_
4	est	sum	VERB	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	in	in	ADP	S4	AdpType=Prep	6	case	_	_
6	via	via	NOUN	A1|grn1|casF|gen2|vgr1	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	4	obl	_	_
7	transeundi	transeo	VERB	N2|modE|grp1|casB	Case=Gen|Degree=Pos|Number=Sing|VerbForm=Ger|Voice=Act	6	acl	_	_
8	de	de	ADP	S4	AdpType=Prep	9	case	_	_
9	forma	forma	NOUN	A1|grn1|casF|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	7	obl:arg	_	_
10	in	in	ADP	S4	AdpType=Prep	11	case	_	_
11	formam	forma	NOUN	A1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	7	obl:arg	_	SpaceAfter=No
12	,	,	PUNCT	Punc	_	15	punct	_	_
13	scilicet	scilicet	ADV	O4	_	15	orphan	_	_
14	de	de	ADP	S4	AdpType=Prep	15	case	_	_
15	forma	forma	NOUN	A1|grn1|casF|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	7	advcl:appos	_	_
16	humoris	umor	NOUN	C1|grn1|casB|gen1	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	15	nmod	_	_
17	in	in	ADP	S4	AdpType=Prep	18	case	_	_
18	formam	forma	NOUN	A1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	15	orphan	_	_
19	membri	membrum	NOUN	B1|grn1|casB|gen3	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	18	nmod	_	SpaceAfter=No
20	;	;	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 advcl:appos	color:blue
1	et	et	CCONJ	O4	_	2	cc	_	_
2	huiusmodi	hujusmodi	ADV	O4|vgr2	_	0	root	_	_
3	quidem	quidem	ADV	O4	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	9	punct	_	_
5	scilicet	scilicet	ADV	O4	_	9	advmod:cc	_	_
6	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	9	nsubj	_	_
7	in	in	ADP	S4	AdpType=Prep	8	case	_	_
8	anima	anima	NOUN	F1|grn1|casF|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	9	obl	_	_
9	est	sum	VERB	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	advcl:appos	_	_
10	sicut	sicut	ADV	O4|vgr1	_	11	advmod	_	_
11	materia	materia	NOUN	A1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	6	nmod:advmod	_	SpaceAfter=No
12	,	,	PUNCT	Punc	_	9	punct	_	_
13	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
14	intellectus	intellectus	NOUN	D1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	nsubj	_	_
15	(	(	PUNCT	Punc	_	16	punct	_	SpaceAfter=No
16	possibilis	possibilis	ADJ	C1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	14	amod	_	SpaceAfter=No
17	)	)	PUNCT	Punc	_	16	punct	_	_
18	in	in	ADP	S4	AdpType=Prep	19	case	_	_
19	quo	qui	PRON	F1|grn1|casF|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing|PronType=Rel	20	obl	_	_
20	fiunt	facio	VERB	N3|modJ|tem1|gen9	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	14	acl:relcl	_	_
21	omnia	omnis	PRON	C1|grn1|casJ|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|PronType=Ind	20	nsubj:pass	_	_
22	intelligibilia	intelligibilis	ADJ	C1|grn1|casJ|gen3|vgr1	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	21	amod	_	SpaceAfter=No
23	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


