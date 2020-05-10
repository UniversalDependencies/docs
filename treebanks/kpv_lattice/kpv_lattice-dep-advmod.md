---
layout: base
title:  'Statistics of advmod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advmod`

This relation is universal.
There are 4 language-specific subtypes of `advmod`: <tt><a href="kpv_lattice-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-tmod.html">advmod:tmod</a></tt>.

129 nodes (5%) are attached to their parents as `advmod`.

98 instances of `advmod` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.72093023255814.

The following 12 pairs of parts of speech are connected with `advmod`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (74; 57% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (20; 16% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (11; 9% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (9; 7% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (4; 3% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	Тэ	тэ	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	_
2	кыдзи	кыдзи	ADV	Adv	PronType=Int	3	advmod	_	_
3	мӧвпалан	мӧвпавны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres	0	root	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	кор	кор	ADV	Adv	_	6	advmod:tmod	_	_
6	верман	вермыны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres	3	advcl	_	_
7	волыны	волыны	VERB	V	VerbForm=Inf	6	xcomp	_	SpaceAfter=No
8	?	?	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	Сідз	сідз	ADV	Adv	_	3	advmod	_	_
2	жӧ	жӧ	PART	Pcle	_	3	advmod	_	_
3	колӧ	ковны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	сетны	сетны	VERB	V	VerbForm=Inf	3	xcomp	_	_
5	ыджыд	ыджыд	ADJ	A	Case=Nom|Number=Sing	6	amod	_	_
6	тӧдчанлун	тӧдчанлун	NOUN	N	Case=Nom|Number=Sing	4	obj	_	_
7	вошӧмъяскӧд	вошӧм	NOUN	N	Case=Com|Number=Plur	8	obl	_	_
8	тышкасьӧм	тышкасьны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	4	obl	_	_
9	вылӧ	вылын	ADP	Po	Case=Ill|Number=Sing	8	case	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod	color:blue
1	Вундігӧн	вундыны	VERB	V	Derivation=Ig|VerbForm=Conv	6	advcl	_	_
2	да	да	CCONJ	Pcle	_	3	cc	_	_
3	тэчыгӧн	тэны	VERB	V	Derivation=Ig|VerbForm=Conv	1	conj	_	_
4	му	му	NOUN	N	Case=Nom|Number=Sing	6	obl:lmod	_	_
5	вылӧ	вылын	ADP	Po	Case=Ill|Number=Sing	4	case	_	_
6	усьӧ	усьны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
7	уна	уна	ADV	Adv	_	8	advmod	_	_
8	шеп	шеп	NOUN	N	Case=Nom|Number=Sing	6	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


