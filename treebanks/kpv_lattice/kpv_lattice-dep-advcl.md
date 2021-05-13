---
layout: base
title:  'Statistics of advcl in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advcl`

This relation is universal.
There are 3 language-specific subtypes of `advcl`: <tt><a href="kpv_lattice-dep-advcl-eval.html">advcl:eval</a></tt>, <tt><a href="kpv_lattice-dep-advcl-lto.html">advcl:lto</a></tt>, <tt><a href="kpv_lattice-dep-advcl-tcl.html">advcl:tcl</a></tt>.

130 nodes (2%) are attached to their parents as `advcl`.

84 instances of `advcl` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.76923076923077.

The following 12 pairs of parts of speech are connected with `advcl`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (96; 74% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (8; 6% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (4; 3% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 advcl	color:blue
1	Тэ	тэ	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	_
2	кыдзи	кыдзи	ADV	Adv	PronType=Int	3	advmod:mmod	_	_
3	мӧвпалан	мӧвпавны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres	0	root	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	7	punct	_	_
5	кор	кор	ADV	Adv	_	7	advmod:tmod	_	_
6	верман	вермыны	AUX	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres	7	aux:pot	_	_
7	волыны	волыны	VERB	V	VerbForm=Inf	3	advcl	_	SpaceAfter=No
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
4	бура	бура	ADV	Adv	_	7	advmod:mmod	_	_
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
3	письмӧ	письмӧ	NOUN	N	Case=Nom|Number=Sing	0	root	_	OrigLang=ru|SpaceAfter=No
4	,	,	PUNCT	CLB	_	8	punct	_	_
5	да	да	CCONJ	CC	_	8	mark	_	OrigLang=ru
6	сійӧс	сійӧ	PRON	Pron	Case=Acc|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
7	тӧрыт	тӧрыт	ADV	Adv	_	8	advmod:tmod	_	_
8	вайисны	вайны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	3	advcl	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


