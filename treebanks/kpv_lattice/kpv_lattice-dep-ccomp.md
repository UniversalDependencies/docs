---
layout: base
title:  'Statistics of ccomp in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `ccomp`

This relation is universal.

16 nodes (1%) are attached to their parents as `ccomp`.

16 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.

The following 4 pairs of parts of speech are connected with `ccomp`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (9; 56% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (4; 25% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (2; 13% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
1	—	—	PUNCT	PUNCT	_	2	punct	_	_
2	Он	оз	AUX	V	Mood=Ind|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	aux:neg	_	_
3	ӧд	ӧд	PART	Pcle	_	4	advmod	_	_
4	тӧд	тӧд	NOUN	N	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	мый	мый	SCONJ	CS	_	9	mark	_	_
7	татшӧма	татшӧма	ADV	Adv	_	8	advmod	_	_
8	зэрны-гымавны	зэрны-гымавны	VERB	V	VerbForm=Inf	9	xcomp	_	_
9	кутас	кутны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	ccomp	_	SpaceAfter=No
10	,	,	PUNCT	CLB	_	12	punct	_	_
11	—	—	PUNCT	PUNCT	_	12	punct	_	_
12	нурбыльті	нурбыльтны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	4	parataxis	_	_
13	сӧмын	сӧмын	ADV	Adv	_	12	advmod	_	SpaceAfter=No
14	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 ccomp	color:blue
1	Аскинас	аски	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	obl	_	_
2	сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	шуис	шуны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	Машалы	Маша	PROPN	N	Case=Dat|Number=Sing	3	obl	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	тэ	тэ	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	9	nsubj	_	_
7	пӧ	пӧ	PART	Pcle	_	9	advmod	_	_
8	этша	этша	ADV	Adv	_	9	advmod	_	_
9	вира	вира	ADJ	A	Case=Nom|Number=Sing	3	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


