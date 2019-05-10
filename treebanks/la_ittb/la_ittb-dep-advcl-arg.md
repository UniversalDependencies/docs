---
layout: base
title:  'Statistics of advcl:arg in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advcl:arg`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advcl.html">advcl</a></tt>.
There are also 1 other language-specific subtypes of `advcl`: <tt><a href="la_ittb-dep-advcl-appos.html">advcl:appos</a></tt>.

154 nodes (0%) are attached to their parents as `advcl:arg`.

114 instances of `advcl:arg` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `advcl:arg`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (140; 91% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (11; 7% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (3; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 advcl:arg	color:blue
1	qui	qui	PRON	F1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|PronType=Rel	3	nsubj	_	_
2	etiam	etiam	ADV	O4|vgr1	_	4	advmod:emph	_	_
3	movet	moveo	VERB	K3|modA|tem1|gen6|vgr1	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	agentem	ago	VERB	L2|modD|tem1|grp1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	3	ccomp	_	_
5	ad	ad	ADP	S4	AdpType=Prep	6	mark	_	_
6	agendum	ago	VERB	L2|modE|grp1|casD	Case=Acc|Degree=Pos|Number=Sing|VerbForm=Ger|Voice=Act	3	advcl:arg	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 advcl:arg	color:blue
1	sensus	sensus	NOUN	D1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	nsubj	_	_
2	igitur	igitur	ADV	O4	_	5	advmod	_	_
3	non	non	ADV	O4	_	5	advmod	_	_
4	erit	sum	AUX	N3|modA|tem3|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	5	cop	_	_
5	necessarius	necessarius	ADJ	B1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
6	ad	ad	ADP	S4	AdpType=Prep	7	mark	_	_
7	intelligendum	intellego	VERB	L2|modE|grp1|casD	Case=Acc|Degree=Pos|Number=Sing|VerbForm=Ger|Voice=Act	5	advcl:arg	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	10	punct	_	_
9	neque	neque	CCONJ	O4	_	10	cc	_	_
10	phantasia	phantasia	NOUN	A1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	5	conj	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 advcl:arg	color:blue
1	ab	ab	ADP	S4|vgr2	AdpType=Prep	5	mark	_	_
2	hoc	hic	PRON	F1|grn1|casF|gen3	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing|PronType=Dem	4	det	_	_
3	autem	autem	CCONJ	O4	_	7	cc	_	_
4	auxilio	auxilium	NOUN	B1|grn1|casF|gen3	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing	5	nsubj	_	_
5	ferendo	fero	VERB	N2|modE|grp1|casF	Case=Abl|Degree=Pos|Number=Sing|VerbForm=Ger|Voice=Act	8	advcl:arg	_	_
6	se	se	PRON	F1|grn1|casM|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|PronType=Prs|Reflex=Yes	7	obj	_	_
7	faciunt	facio	VERB	N3|modA|tem1|gen9	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	impotentes	impotens	NOUN	C1|grn1|casM|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	7	xcomp	_	_
9	qui	qui	PRON	F1|grn1|casJ|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|PronType=Rel	12	nsubj	_	_
10	exteriorem	exterior	ADJ	C1|grn2|casD|gen2	Case=Acc|Degree=Cmp|Gender=Fem|Number=Sing	11	amod	_	_
11	substantiam	substantia	NOUN	A1|grn1|casD|gen2|vgr1	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	12	obj	_	_
12	abiiciunt	abjicio	VERB	L3|modA|tem1|gen9|vgr2	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	csubj	_	SpaceAfter=No
13	,	,	PUNCT	Punc	_	19	punct	_	_
14	per	per	ADP	S4	AdpType=Prep	15	case	_	_
15	quam	qui	PRON	F1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|PronType=Rel	19	obl	_	_
16	plurimum	multus	ADJ	B1|grn3|casA|gen3	Case=Nom|Degree=Abs|Gender=Neut|Number=Sing	18	amod	_	_
17	aliis	alius	PRON	F1|grn1|casL|gen1|vgr1	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|PronType=Ind	19	obj	_	_
18	auxilium	auxilium	NOUN	B1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	19	nsubj:pass	_	_
19	fertur	fero	VERB	N3|modJ|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	11	acl:relcl	_	SpaceAfter=No
20	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


