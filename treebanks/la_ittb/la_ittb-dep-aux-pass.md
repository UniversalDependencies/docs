---
layout: base
title:  'Statistics of aux:pass in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-aux.html">aux</a></tt>.

1940 nodes (1%) are attached to their parents as `aux:pass`.

1469 instances of `aux:pass` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.24845360824742.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (1939; 100% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 aux:pass	color:blue
1	tum	tum	CCONJ	O4	_	2	cc	_	_
2	etiam	etiam	PART	O4|vgr1	_	0	root	_	_
3	propter	propter	ADP	S4	AdpType=Prep	4	case	_	_
4	multa	multus	NOUN	B1|grn1|casM|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	2	conj	_	_
5	quae	qui	PRON	F1|grn1|casJ|gen3|vgr1	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|PronType=Rel	6	nsubj:pass	_	_
6	praeexiguntur	praeexigo	VERB	L3|modJ|tem1|gen9	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	acl:relcl	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	9	punct	_	_
8	ut	ut	SCONJ	O4|vgr1	_	9	mark	_	_
9	dictum	dico	VERB	N2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	2	conj	_	_
10	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux:pass	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	in	in	ADP	S4	AdpType=Prep	2	case	_	_
2	qua	qui	PRON	F1|grn1|casF|gen2|varA	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing|PronType=Rel	5	obl	_	_
3	forma	forma	NOUN	A1|grn1|casF|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	9	obl	_	_
4	injuste	injuste	ADV	B1|grn1|casG|vgr1	Degree=Pos	5	aux:pass	_	_
5	judicatus	iudico	VERB	J2|modM|tem4|grp1|casA|gen1|vgr2	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	3	acl:relcl	_	_
6	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux:pass	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	5	punct	_	_
8	juste	juste	ADV	B1|grn1|casG|vgr2	Degree=Pos	9	advmod	_	_
9	judicabit	iudico	VERB	J3|modA|tem3|gen6|vgr2	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	12	punct	_	_
11	ut	ut	SCONJ	O4|vgr1	_	12	mark	_	_
12	possit	possum	VERB	N3|modB|tem1|gen6	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Act	9	advcl	_	_
13	ab	ab	ADP	S4|vgr2	AdpType=Prep	14	case	_	_
14	impiis	impius	ADJ	B1|grn1|casO|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Plur	15	obl:arg	_	_
15	videri	video	VERB	K3|modQ|tem1	Tense=Pres|VerbForm=Inf|Voice=Pass	12	xcomp	_	SpaceAfter=No
16	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


