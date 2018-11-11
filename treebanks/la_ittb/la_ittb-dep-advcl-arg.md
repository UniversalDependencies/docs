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

The following 3 pairs of parts of speech are connected with `advcl:arg`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (140; 91% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (10; 6% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (4; 3% instances).


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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 advcl:arg	color:blue
1	quanto	quanto	ADV	O4	_	5	advmod:emph	_	_
2	spiritualia	spiritualis	ADJ	C1|grn1|casJ|gen3|vgr1	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	5	nsubj	_	_
3	sunt	sum	AUX	N3|modA|tem1|gen9	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	temporalibus	temporalis	ADJ	C1|grn1|casO|gen3	Case=Abl|Degree=Pos|Gender=Neut|Number=Plur	5	obl	_	_
5	potiora	potior	ADJ	C1|grn2|casJ|gen3	Case=Nom|Degree=Cmp|Gender=Neut|Number=Plur	0	root	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	9	punct	_	_
7	et	et	CCONJ	O4	_	9	cc	_	_
8	magis	magis	ADV	O4	_	9	advmod	_	_
9	necessaria	necessarius	NOUN	B1|grn1|casJ|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	5	conj	_	_
10	ad	ad	ADP	S4	AdpType=Prep	13	mark	_	_
11	finem	finis	NOUN	C1|grn1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	13	obj	_	_
12	beatitudinis	beatitudo	NOUN	C1|grn1|casB|gen2	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	11	nmod	_	_
13	consequendum	consequor	VERB	L2|modN|grp1|casD	Case=Acc|Degree=Pos|Number=Sing|VerbForm=Ger|Voice=Pass	9	advcl:arg	_	SpaceAfter=No
14	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


