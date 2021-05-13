---
layout: base
title:  'Statistics of advmod:emph in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-advmod.html">advmod</a></tt>.
There are also 11 other language-specific subtypes of `advmod`: <tt><a href="kpv_lattice-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="kpv_lattice-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="kpv_lattice-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="kpv_lattice-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="kpv_lattice-dep-advmod-freq.html">advmod:freq</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lmp.html">advmod:lmp</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="kpv_lattice-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-tmod.html">advmod:tmod</a></tt>.

19 nodes (0%) are attached to their parents as `advmod:emph`.

14 instances of `advmod:emph` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.47368421052632.

The following 6 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (7; 37% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (6; 32% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (3; 16% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="kpv_lattice-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod:emph	color:blue
1	Коркӧ	коркӧ	ADV	Adv	PronType=Ind	4	advmod:tmod	_	_
2	век	век	ADV	Adv	_	4	advmod	_	_
3	нин	нин	ADV	Adv	_	2	advmod:emph	_	_
4	гымалас	гымавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut	0	root	_	_
5	и	и	CCONJ	CC	_	6	cc	_	_
6	зэрас	зэрны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advmod:emph	color:blue
1	Эг	оз	AUX	V	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Past	5	aux:neg	_	_
2	нин	нин	ADV	Adv	_	5	advmod:emph	_	_
3	сэтшӧма	сэтшӧма	ADV	Adv	_	5	advmod:mmod	_	_
4	кут	кутны	AUX	V	Connegative=Yes	5	aux:aspect	_	_
5	тэрмасьны	тэрмасьны	VERB	V	VerbForm=Inf	0	root	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advmod:emph	color:blue
1	Лун	лун	NOUN	N	Case=Nom|Number=Sing	2	nmod	_	_
2	шӧр	шӧр	NOUN	N	Case=Nom|Number=Sing	3	nmod	_	_
3	кадланьыс	кад	NOUN	N	Case=Apr|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obl:tmod	_	_
4	нин	нин	ADV	Adv	_	3	advmod:emph	_	_
5	кыськӧ	кысь	ADV	Adv	Case=Ela	7	obl:lmod	_	_
6	шур-шар	шур-шар	ADV	Adv	_	7	advmod	_	_
7	воис	воны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
8	неыджыд	неыджыд	ADJ	A	Case=Nom|Number=Sing|Polarity=Neg	9	amod	_	_
9	тӧвру	тӧвру	NOUN	N	Case=Nom|Number=Sing	7	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


