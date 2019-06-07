---
layout: base
title:  'Statistics of nmod:appos in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `nmod:appos`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="la_ittb-dep-nmod-advmod.html">nmod:advmod</a></tt>.

54 nodes (0%) are attached to their parents as `nmod:appos`.

52 instances of `nmod:appos` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.40740740740741.

The following 6 pairs of parts of speech are connected with `nmod:appos`: <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (21; 39% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (18; 33% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (9; 17% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="la_ittb-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (2; 4% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod:appos	color:blue
1	haec	hic	PRON	F1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|PronType=Dem	0	root	_	_
2	autem	autem	CCONJ	O4	_	1	cc	_	_
3	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
4	ratio	ratio	NOUN	C1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	nsubj	_	_
5	communis	communis	ADJ	C1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	7	punct	_	_
7	generis	genus	NOUN	C1|grn1|casB|gen3	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	5	nmod:appos	_	_
8	scilicet	scilicet	ADV	O4	_	7	advmod:cc	_	_
9	et	et	CCONJ	O4	_	10	cc	_	_
10	substantiae	substantia	NOUN	A1|grn1|casB|gen2|vgr1	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	7	conj	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 nmod:appos	color:blue
1	sed	sed	CCONJ	O4|vgr1	_	4	cc	_	_
2	duo	duo	NUM	F1|grn1|casJ|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|NumType=Card	4	nsubj	_	_
3	eorum	is	PRON	F1|grn1|casK|gen3	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur|PronType=Dem,Prs	2	nmod	_	_
4	retinebunt	retineo	VERB	K3|modA|tem3|gen9	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
5	propriam	proprius	ADJ	A1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
6	formam	forma	NOUN	A1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	4	obj	_	_
7	substantialem	substantialis	ADJ	C1|grn1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	10	punct	_	_
9	scilicet	scilicet	ADV	O4	_	10	advmod:cc	_	_
10	aer	aer	NOUN	C1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	nmod:appos	_	_
11	et	et	CCONJ	O4	_	12	cc	_	_
12	terra	terra	NOUN	A1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	10	conj	_	SpaceAfter=No
13	;	;	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 nmod:appos	color:blue
1	quarum	qui	PRON	F1|grn1|casK|gen2	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|PronType=Rel	2	nmod	_	_
2	prima	primus	ADJ	A1|grn1|casA|gen2	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	5	nsubj	_	_
3	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	summi	summus	ADJ	B1|grn1|casB|gen1	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
5	dei	deus	PROPN	F1|grn1|casB|gen1	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	11	punct	_	_
7	qui	qui	PRON	F1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|PronType=Rel	11	nsubj	_	_
8	primo	primo	ADV	B1|grn1|casG	Degree=Pos	11	advmod	_	_
9	et	et	CCONJ	O4	_	10	cc	_	_
10	principaliter	principaliter	ADV	C1|grn1|casG	Degree=Pos	8	conj	_	_
11	providet	provideo	VERB	K3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
12	propriis	proprius	ADJ	B1|grn1|casL|gen3	Case=Dat|Degree=Pos|Gender=Neut|Number=Plur	11	obj	_	SpaceAfter=No
13	,	,	PUNCT	Punc	_	16	punct	_	_
14	idest	idest	ADV	O4	_	15	advmod:cc	_	_
15	omnibus	omnis	PRON	C1|grn1|casL|gen3	Case=Dat|Degree=Pos|Gender=Neut|Number=Plur|PronType=Ind	16	det	_	_
16	spiritualibus	spiritualis	ADJ	C1|grn1|casL|gen3|vgr1	Case=Dat|Degree=Pos|Gender=Neut|Number=Plur	12	nmod:appos	_	_
17	et	et	CCONJ	O4	_	18	cc	_	_
18	intellectualibus	intellectualis	ADJ	C1|grn1|casL|gen3	Case=Dat|Degree=Pos|Gender=Neut|Number=Plur	16	conj	_	SpaceAfter=No
19	;	;	PUNCT	Punc	_	5	punct	_	_

~~~


