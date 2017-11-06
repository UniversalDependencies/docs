---
layout: base
title:  'Statistics of fixed in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `fixed`

This relation is universal.

220 nodes (0%) are attached to their parents as `fixed`.

220 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.43636363636364.

The following 11 pairs of parts of speech are connected with `fixed`: <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt> (109; 50% instances), <tt><a href="la_ittb-pos-ADP.html">ADP</a></tt>-<tt><a href="la_ittb-pos-ADP.html">ADP</a></tt> (44; 20% instances), <tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt> (22; 10% instances), <tt><a href="la_ittb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt> (18; 8% instances), <tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (17; 8% instances), <tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt> (3; 1% instances), <tt><a href="la_ittb-pos-ADP.html">ADP</a></tt>-<tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_ittb-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_ittb-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 fixed	color:blue
1	scilicet	scilicet	ADV	O4|stRL	_	6	mark	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	6	punct	_	_
3	quod	quod	SCONJ	O4|stRL	_	1	fixed	_	_
4	omne	omnis	DET	C1|grn1|casA|gen3|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Ind	5	det	_	_
5	motum	moveo	VERB	K2|modM|tem4|grp1|casA|gen3|stAV	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	6	csubj:pass	_	_
6	movetur	moveo	VERB	K3|modJ|tem1|gen6|vgr1|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
7	ab	a	ADP	S4|vgr2|stRL	AdpType=Prep	8	case	_	_
8	alio	alius	PRON	F1|grn1|casF|gen3|stPV	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing|PronType=Ind	6	obj	_	SpaceAfter=No
9	;	;	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 fixed	color:blue
1	hoc	hic	PRON	F1|grn1|casA|gen3|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Dem	11	nsubj	_	_
2	autem	autem	CCONJ	O4|stRL	_	11	cc	_	_
3	quod	qui	PRON	F1|grn1|casA|gen3|stRL	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	4	nsubj	_	_
4	est	sum	VERB	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	_	_
5	per	per	ADP	S4|stRL	AdpType=Prep	7	case	_	_
6	per	per	ADP	S4|stRL	AdpType=Prep	5	fixed	_	_
7	se	sui	PRON	F1|grn1|casD|gen3|stPV	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|PronType=Prs|Reflex=Yes	8	obl	_	_
8	necesse-esse	sum	VERB	N3|grn8|modH|tem1|comZ|stAV	Tense=Pres|VerbForm=Inf|Voice=Act	4	ccomp	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	4	punct	_	_
10	est	sum	AUX	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
11	deus	deus	PROPN	F1|grn1|casA|gen1|stNP	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 fixed	color:blue
1	constat	consto	VERB	J3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	autem	autem	CCONJ	O4|stRL	_	1	cc	_	_
3	quod	quod	SCONJ	O4|stRL	_	7	mark	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	7	punct	_	_
5	si	si	SCONJ	O4|stRL	_	7	mark	_	_
6	omnia	omnis	DET	C1|grn1|casJ|gen3|stPV	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|PronType=Ind	8	det	_	_
7	deficerent	deficio	VERB	L3|modB|tem2|gen9|stAV	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	1	advcl	_	_
8	particularia	particularis	ADJ	C1|grn1|casJ|gen3|stAN	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	7	nsubj	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	7	punct	_	_
10	quod	quod	SCONJ	O4|stRL	_	3	fixed	_	_
11	universalia	universalis	ADJ	C1|grn1|casJ|gen3|vgr1|stAN	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	15	nsubj	_	_
12	eorum	is	PRON	F1|grn1|casK|gen3|stPV	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur|PronType=Dem,Prs	11	nmod	_	_
13	remanere	remaneo	VERB	K3|modH|tem1|stAV	Tense=Pres|VerbForm=Inf|Voice=Act	15	xcomp	_	_
14	non	non	ADV	O4|stRL	_	15	advmod	_	_
15	possent	possum	VERB	N3|modB|tem2|gen9|stAV	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|VerbType=Mod|Voice=Act	7	csubj	_	SpaceAfter=No
16	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


