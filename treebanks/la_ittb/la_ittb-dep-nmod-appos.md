---
layout: base
title:  'Statistics of nmod:appos in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `nmod:appos`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="la_ittb-dep-nmod-advmod.html">nmod:advmod</a></tt>.

14 nodes (0%) are attached to their parents as `nmod:appos`.

13 instances of `nmod:appos` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.42857142857143.

The following 5 pairs of parts of speech are connected with `nmod:appos`: <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (5; 36% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (3; 21% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (3; 21% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (2; 14% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-ADP.html">ADP</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod:appos	color:blue
1	tu	tu	PRON	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|Number=Sing|PronType=Prs	3	nsubj	_	_
2	es	sum	AUX	N3|modA|tem1|gen5	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	christus	christus	ADJ	B1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	5	punct	_	_
5	filius	filius	NOUN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|Number=Sing	3	nmod:appos	_	_
6	dei	deus	PROPN	F1|grn1|casB|gen1	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
7	uiui	uiuus	ADJ	B1|grn1|casB|gen1|vgr1	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	3	punct	_	_

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
11	prouidet	prouideo	VERB	K3|modA|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
12	propriis	proprius	ADJ	B1|grn1|casL|gen3	Case=Dat|Degree=Pos|Gender=Neut|Number=Plur	11	obl:arg	_	SpaceAfter=No
13	,	,	PUNCT	Punc	_	16	punct	_	_
14	idest	idest	ADV	O4	_	15	advmod:cc	_	_
15	omnibus	omnis	DET	C1|grn1|casL|gen3	Case=Dat|Degree=Pos|Gender=Neut|Number=Plur|PronType=Ind	16	det	_	_
16	spiritualibus	spiritualis	ADJ	C1|grn1|casL|gen3|vgr1	Case=Dat|Degree=Pos|Gender=Neut|Number=Plur	12	nmod:appos	_	_
17	et	et	CCONJ	O4	_	18	cc	_	_
18	intellectualibus	intellectualis	ADJ	C1|grn1|casL|gen3	Case=Dat|Degree=Pos|Gender=Neut|Number=Plur	16	conj	_	SpaceAfter=No
19	;	;	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 nmod:appos	color:blue
1	unus	unus	NUM	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|Number=Sing|NumType=Card	0	root	_	_
2	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	mediator	mediator	NOUN	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	_
4	dei	deus	PROPN	F1|grn1|casB|gen1	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
5	et	et	CCONJ	O4	_	6	cc	_	_
6	hominum	homo	NOUN	C1|grn1|casK|gen1	Case=Gen|Gender=Masc|Number=Plur	4	conj	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	8	punct	_	_
8	homo	homo	NOUN	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|Number=Sing	1	nmod:appos	_	_
9	christus	christus	ADJ	B1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
10	iesus	iesus	PROPN	F1|grn1|casA|gen1|vgr1	Case=Nom|Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


