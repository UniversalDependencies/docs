---
layout: base
title:  'Statistics of advmod:neg in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-advmod.html">advmod</a></tt>.
There are also 4 other language-specific subtypes of `advmod`: <tt><a href="kpv_lattice-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-tmod.html">advmod:tmod</a></tt>.

6 nodes (0%) are attached to their parents as `advmod:neg`.

6 instances of `advmod:neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (2; 33% instances), <tt><a href="kpv_lattice-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (2; 33% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (2; 33% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:neg	color:blue
1	Эз	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	2	aux:neg	_	_
2	позь	позьны	VERB	V	Connegative=Yes	0	root	_	_
3	бӧрйыны	бӧрйыны	VERB	V	VerbForm=Inf	2	xcomp	_	_
4	ни	ни	PART	Pcle	Polarity=Neg	5	advmod:neg	_	_
5	Питер	Питер	NOUN	N	Case=Nom|Number=Sing	3	obj	_	Lang=Mixed
6	Смитӧс	Смит	NOUN	N	Case=Acc|Number=Sing	5	flat:name	_	Lang=Mixed|SpaceAfter=No
7	,	,	PUNCT	CLB	_	9	punct	_	_
8	ни	ни	PART	Pcle	Polarity=Neg	9	advmod:neg	_	_
9	Мери	Мери	NOUN	N	Case=Nom|Number=Sing	5	conj	_	Lang=Mixed
10	Браунӧс	Браун	NOUN	N	Case=Acc|Number=Sing	9	flat:name	_	Lang=Mixed|SpaceAfter=No
11	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:neg	color:blue
1	Енэжын	енэж	NOUN	N	Case=Ine|Number=Sing	6	obl:lmod	_	_
2	ни	ни	PART	Pcle	Polarity=Neg	3	advmod:neg	_	_
3	ӧти	ӧти	NUM	Num	NumType=Card	4	nummod	_	_
4	кымӧртор	кымӧртор	NOUN	N	Case=Nom|Number=Sing	6	nsubj	_	_
5	эз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Past	6	aux:neg	_	_
6	тыдав	тыдавны	VERB	V	Connegative=Yes	0	root	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod:neg	color:blue
1	Ни	ни	PART	Pcle	Polarity=Neg	2	advmod:neg	_	_
2	горзӧмъяс	горзыны	VERB	V	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	5	punct	_	_
4	ни	ни	PART	Pcle	Polarity=Neg	5	advmod:neg	_	_
5	лыйсьӧмъяс	лыйсьыны	VERB	V	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part	2	conj	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


