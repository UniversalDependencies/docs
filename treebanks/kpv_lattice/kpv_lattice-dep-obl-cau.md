---
layout: base
title:  'Statistics of obl:cau in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `obl:cau`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-obl.html">obl</a></tt>.
There are also 7 other language-specific subtypes of `obl`: <tt><a href="kpv_lattice-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="kpv_lattice-dep-obl-lfrom.html">obl:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="kpv_lattice-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="kpv_lattice-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="kpv_lattice-dep-obl-mcl.html">obl:mcl</a></tt>, <tt><a href="kpv_lattice-dep-obl-tmod.html">obl:tmod</a></tt>.

3 nodes (0%) are attached to their parents as `obl:cau`.

2 instances of `obl:cau` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.33333333333333.

The following 2 pairs of parts of speech are connected with `obl:cau`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 obl:cau	color:blue
1	Кӧдзыдъяс	кӧдзыд	NOUN	N	Case=Nom|Number=Plur	7	obl:cau	_	GTtags=Pl,Nom
2	вӧсна	вӧсна	ADP	Adp	AdpType=Post	1	case	_	GTtags=Po
3	вежон	вежон	NOUN	N	Case=Nom|Number=Sing	7	obl:tmod	_	GTtags=Sg,Nom
4	чӧж	чӧж	NOUN	N	Case=Nom|Number=Sing	3	case	_	GTtags=Sg,Nom
5	нин	нин	ADV	Adv	AdvType=Tim	7	advmod:tmod	_	GTtags=Temp
6	эз	оз	AUX	V	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Past	7	aux:neg	_	GTtags=Neg,Ind,Prt1,Pl3
7	велӧдны	велӧдны	VERB	V	Connegative=Yes|Number=Plur|Person=3	0	root	_	GTtags=TV,ConNeg,Pl3
8	школаясын	школа	NOUN	N	Case=Ine|Number=Plur	7	obl:lmod	_	GTtags=Pl,Ine|SpaceAfter=No
9	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 7 obl:cau	color:blue
1	Ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
2	эг	оз	AUX	V	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Past	5	aux:neg	_	_
3	вермы	вермыны	AUX	V	Connegative=Yes	5	aux:pot	_	_
4	сійӧс	сійӧ	PRON	Pron	Case=Acc|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
5	вӧтӧдны	вӧтӧдны	VERB	V	VerbForm=Inf	0	root	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	13	punct	_	_
7	сы	сійӧ	PRON	Pron	Number=Sing|Person=3|PronType=Prs	13	obl:cau	_	_
8	вӧсна	вӧсна	ADP	Po	_	7	case	_	_
9	мый	мый	SCONJ	CS	_	13	mark	_	_
10	сійӧ	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
11	зэв	зэв	ADV	Adv	_	12	advmod:deg	_	_
12	тэрыба	тэрыб	ADV	Adv	_	13	advmod:mmod	_	_
13	котӧртіс	котӧртыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	advcl	_	SpaceAfter=No
14	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


