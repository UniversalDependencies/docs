---
layout: base
title:  'Statistics of obj in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `obj`

This relation is universal.

110 nodes (5%) are attached to their parents as `obj`.

66 instances of `obj` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.83636363636364.

The following 6 pairs of parts of speech are connected with `obj`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (82; 75% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (20; 18% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	Ныв	ныв	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	_
2	ёртыслы	ёрт	NOUN	N	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	obl	_	_
3	гижис	гижны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	письмӧ	письмӧ	NOUN	N	Case=Nom|Number=Sing	3	obj	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obj	color:blue
1	Найӧ	найӧ	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	_
2	дзик	дзик	ADV	Adv	_	4	advmod	_	_
3	оз	оз	AUX	V	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	aux:neg	_	_
4	тӧдны	тӧдны	VERB	V	Connegative=Yes	0	root	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	коді	коді	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	8	nsubj	_	_
7	тайӧс	тайӧ	PRON	Pron	Case=Acc|Number=Sing|PronType=Dem	8	obj	_	_
8	гижис	гижны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 obj	color:blue
1	Урожай	урожай	NOUN	N	Case=Nom|Number=Sing	2	obj	_	_
2	идралӧм	идравны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	7	parataxis	_	_
3	–	–	PUNCT	PUNCT	_	4	punct	_	_
4	удж	удж	NOUN	N	Case=Nom|Number=Sing	2	appos	_	_
5	сезоннӧй	сезоннӧй	ADJ	A	Case=Nom|Number=Sing	4	amod	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
8	оз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	9	aux:neg	_	_
9	виччысь	виччыны	VERB	V	Connegative=Yes	0	root	_	_
10	некутшӧм	некутшӧм	ADJ	A	Case=Nom|Number=Sing|Polarity=Neg	11	amod	_	_
11	нюжмасьӧм	нюжмасьны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	9	obj	_	SpaceAfter=No
12	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


