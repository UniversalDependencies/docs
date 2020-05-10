---
layout: base
title:  'Statistics of csubj in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `csubj`

This relation is universal.

12 nodes (0%) are attached to their parents as `csubj`.

9 instances of `csubj` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.91666666666667.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (6; 50% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (2; 17% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (2; 17% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj	color:blue
1	Меным	ме	PRON	Pron	Case=Dat|Number=Sing|Person=1|PronType=Prs	2	obl	_	_
2	кажитчӧ	кажитчыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	5	punct	_	_
4	мый	мый	SCONJ	CS	_	5	mark	_	_
5	зэрӧ	зэрны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	csubj	_	SpaceAfter=No
6	.	_	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 csubj	color:blue
1	Пукавны	пукавны	VERB	V	VerbForm=Inf	5	csubj	_	_
2	вадорын	вадор	NOUN	N	Case=Ine|Number=Sing	1	obl:lmod	_	_
3	водзӧ	водз	ADV	Adv	Case=Ill	5	advmod:lmod	_	_
4	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	cop	_	_
5	весьшӧрӧ	весьшӧрӧ	ADV	Adv	Case=Ill	0	root	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 csubj	color:blue
1	Тайӧ	тайӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	2	det	_	_
2	кывъясыс	кыв	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	10	csubj	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	5	punct	_	_
4	кодӧс	коді	PRON	Pron	Case=Acc|Number=Sing|PronType=Int	5	obj	_	_
5	висьтавліс	висьтавлыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	acl	_	_
6	Сталин	Сталин	PROPN	N	Case=Nom|Number=Sing	5	nsubj	_	_
7	ёрт	ёрт	NOUN	N	Case=Nom|Number=Sing	6	nmod	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	9	punct	_	_
9	оз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres	10	aux:neg	_	_
10	вермы	вермыны	VERB	V	Connegative=Yes	0	root	_	_
11	лоны	лоны	VERB	V	VerbForm=Inf	10	xcomp	_	_
12	вунӧдӧма	вунӧдны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	11	xcomp	_	_
13	некодӧн	некод	PRON	Pron	Case=Ins|Number=Sing|Polarity=Neg	12	obl	_	_
14	да	да	CCONJ	CC	_	15	cc	_	_
15	должен	должен	ADJ	A	Case=Nom|Number=Sing	10	conj	_	_
16	лоны	лоны	VERB	V	VerbForm=Inf	15	xcomp	_	_
17	пӧртӧма	пӧртны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	16	xcomp	_	_
18	олӧмӧ	олӧм	NOUN	N	Case=Ill|Number=Sing	17	obl	_	SpaceAfter=No
19	.	.	PUNCT	CLB	_	10	punct	_	_

~~~


