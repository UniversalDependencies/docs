---
layout: base
title:  'Statistics of advmod:deg in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advmod:deg`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="kpv_lattice-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-tmod.html">advmod:tmod</a></tt>.

25 nodes (1%) are attached to their parents as `advmod:deg`.

25 instances of `advmod:deg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12.

The following 7 pairs of parts of speech are connected with `advmod:deg`: <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (8; 32% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (8; 32% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (5; 20% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (1; 4% instances), <tt><a href="kpv_lattice-pos-DET.html">DET</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="kpv_lattice-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:deg	color:blue
1	Кӧть	кӧть	SCONJ	CS	_	5	mark	_	_
2	луныс	лун	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
3	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	_
4	зэв	зэв	ADV	Adv	_	5	advmod:deg	_	_
5	мича	мича	ADJ	A	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:deg	color:blue
1	Кыліс	кывны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
2	зэв	зэв	ADV	Adv	_	3	advmod:deg	_	_
3	ылысянь	ылысянь	ADV	Adv	Case=Egr	1	advmod:lmod	_	_
4	муркӧдчӧм	муркӧдчыны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	5	acl	_	_
5	шы	шы	NOUN	N	Case=Nom|Number=Sing	1	nsubj	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advmod:deg	color:blue
1	Найӧ	найӧ	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	_
2	дзик	дзик	ADV	Adv	_	4	advmod:deg	_	_
3	оз	оз	AUX	V	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres	4	aux:neg	_	_
4	тӧдны	тӧдны	VERB	V	Connegative=Yes	0	root	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	коді	коді	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	8	nsubj	_	_
7	тайӧс	тайӧ	PRON	Pron	Case=Acc|Number=Sing|PronType=Dem	8	obj	_	_
8	гижис	гижны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


