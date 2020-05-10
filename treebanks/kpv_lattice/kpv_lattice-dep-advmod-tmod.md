---
layout: base
title:  'Statistics of advmod:tmod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="kpv_lattice-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-mmod.html">advmod:mmod</a></tt>.

80 nodes (3%) are attached to their parents as `advmod:tmod`.

60 instances of `advmod:tmod` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.9625.

The following 8 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (60; 75% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (7; 9% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (4; 5% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (4; 5% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (2; 3% instances), <tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_lattice-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:tmod	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod:tmod	color:blue
1	Но	но	CCONJ	CC	_	7	cc	_	_
2	весьшӧрӧ	весьшӧрӧ	ADV	Adv	Case=Ill	7	advmod	_	_
3	на	на	ADV	Adv	_	2	advmod:tmod	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	7	punct	_	_
5	вӧлӧмкӧ	вӧлӧмкӧ	PART	Pcle	_	7	advmod:mmod	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	майшассьӧма	майшассьыны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advmod:tmod	color:blue
1	Первойсӧ	первой	ADV	Adv	Clitic=So	4	advmod:tmod	_	_
2	ичӧтик	ичӧтик	ADJ	A	Case=Nom|Derivation=Ik|Number=Sing	3	amod	_	_
3	баляяс	баля	NOUN	N	Case=Nom|Number=Plur	4	nmod	_	_
4	кодьӧсь	кодь	ADJ	A	Case=Nom|Number=Plur	0	root	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


