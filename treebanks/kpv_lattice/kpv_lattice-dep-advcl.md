---
layout: base
title:  'Statistics of advcl in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advcl`

This relation is universal.

63 nodes (3%) are attached to their parents as `advcl`.

32 instances of `advcl` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.26984126984127.

The following 9 pairs of parts of speech are connected with `advcl`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (48; 76% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (5; 8% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (4; 6% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 advcl	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 advcl	color:blue
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


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 advcl	color:blue
1	Тайӧ	тайӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	3	det	_	_
2	Петрсянь	Петр	NOUN	N	Case=Egr|Number=Sing	3	obl	_	_
3	письмӧ	письмӧ	NOUN	N	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	8	punct	_	_
5	да	да	CCONJ	CC	_	8	mark	_	_
6	сійӧс	сійӧ	PRON	Pron	Case=Acc|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
7	тӧрыт	тӧрыт	ADV	Adv	_	8	advmod:tmod	_	_
8	вайисны	вайны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	3	advcl	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


