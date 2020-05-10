---
layout: base
title:  'Statistics of advmod:lmod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="kpv_lattice-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="kpv_lattice-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-tmod.html">advmod:tmod</a></tt>.

25 nodes (1%) are attached to their parents as `advmod:lmod`.

21 instances of `advmod:lmod` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.4.

The following 3 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (21; 84% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (2; 8% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advmod:lmod	color:blue
1	Кыліс	кывны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
2	зэв	зэв	ADV	Adv	_	3	advmod:deg	_	_
3	ылысянь	ылысянь	ADV	Adv	Case=Egr	1	advmod:lmod	_	_
4	муркӧдчӧм	муркӧдчыны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	5	acl	_	_
5	шы	шы	NOUN	N	Case=Nom|Number=Sing	1	nsubj	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advmod:lmod	color:blue
1	Пукавны	пукавны	VERB	V	VerbForm=Inf	5	csubj	_	_
2	вадорын	вадор	NOUN	N	Case=Ine|Number=Sing	1	obl:lmod	_	_
3	водзӧ	водз	ADV	Adv	Case=Ill	5	advmod:lmod	_	_
4	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	_
5	весьшӧрӧ	весьшӧрӧ	ADV	Adv	Case=Ill	0	root	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 advmod:lmod	color:blue
1	Неприятель	неприятель	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	_
2	страшнӧй	страшнӧй	ADJ	A	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	7	punct	_	_
4	бура	бура	ADV	Adv	_	7	advmod	_	_
5	кӧ	кӧ	SCONJ	CS	_	7	mark	_	_
6	он	оз	AUX	V	Mood=Ind|Person=2|Polarity=Neg|Tense=Pres	7	aux:neg	_	_
7	тӧд	тӧдны	VERB	V	Connegative=Yes	2	advcl	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	10	punct	_	_
9	кӧні	кӧні	ADV	Adv	Case=Ine|Number=Sing|PronType=Int	10	advmod:lmod	_	_
10	сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	acl:relcl	_	_
11	и	и	CCONJ	CC	_	12	cc	_	_
12	мый	мый	PRON	Pron	Case=Nom|PronType=Int	14	obj	_	_
13	сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	_
14	вӧчӧ	вӧчны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	advcl	_	SpaceAfter=No
15	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


