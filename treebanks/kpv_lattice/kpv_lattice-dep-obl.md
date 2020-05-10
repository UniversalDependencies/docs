---
layout: base
title:  'Statistics of obl in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="kpv_lattice-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="kpv_lattice-dep-obl-tmod.html">obl:tmod</a></tt>.

115 nodes (5%) are attached to their parents as `obl`.

58 instances of `obl` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.32173913043478.

The following 9 pairs of parts of speech are connected with `obl`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (73; 63% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (22; 19% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt> (7; 6% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl	color:blue
1	Ныв	ныв	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	_
2	ёртыслы	ёрт	NOUN	N	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	obl	_	_
3	гижис	гижны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	письмӧ	письмӧ	NOUN	N	Case=Nom|Number=Sing	3	obj	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl	color:blue
1	Меным	ме	PRON	Pron	Case=Dat|Number=Sing|Person=1|PronType=Prs	2	obl	_	_
2	кажитчӧ	кажитчыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	5	punct	_	_
4	мый	мый	SCONJ	CS	_	5	mark	_	_
5	зэрӧ	зэрны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	csubj	_	SpaceAfter=No
6	.	_	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl	color:blue
1	Аскинас	аски	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	obl:tmod	_	_
2	сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	шуис	шуны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	Машалы	Маша	PROPN	N	Case=Dat|Number=Sing	3	obl	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	9	punct	_	_
6	тэ	тэ	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	9	nsubj	_	_
7	пӧ	пӧ	PART	Pcle	_	9	advmod:mmod	_	_
8	этша	этша	ADV	Adv	_	9	advmod	_	_
9	вира	вира	ADJ	A	Case=Nom|Number=Sing	3	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


