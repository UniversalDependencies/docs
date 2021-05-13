---
layout: base
title:  'Statistics of obl:tmod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-obl.html">obl</a></tt>.
There are also 7 other language-specific subtypes of `obl`: <tt><a href="kpv_lattice-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="kpv_lattice-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="kpv_lattice-dep-obl-lfrom.html">obl:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="kpv_lattice-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="kpv_lattice-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="kpv_lattice-dep-obl-mcl.html">obl:mcl</a></tt>.

54 nodes (1%) are attached to their parents as `obl:tmod`.

40 instances of `obl:tmod` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.51851851851852.

The following 6 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (46; 85% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADP.html">ADP</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl:tmod	color:blue
1	Идралін	идравны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past	4	advcl	_	_
2	аскадӧ	аскадӧ	NOUN	N	Case=Ill|Number=Sing	1	obl:tmod	_	_
3	–	–	PUNCT	PUNCT	_	4	punct	_	_
4	выиграйтін	выиграйтны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past	0	root	_	OrigLang=ru|SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	сёрмӧдчин	сёрмӧдчыны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past	8	advcl	_	_
7	–	–	PUNCT	PUNCT	_	8	punct	_	_
8	проиграйтін	проиграйтны	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past	4	conj	_	OrigLang=ru|SpaceAfter=No
9	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obl:tmod	color:blue
1	Пӧрысьлань	пӧрысь	ADJ	A	Case=Apr|Number=Sing	4	obl:tmod	_	GTtags=Sg,Apr
2	кӧть	кӧть	ADV	Adv	_	4	advmod	_	_
3	котравнытӧ	котравны	VERB	V	Clitic=To|Valency=1|VerbForm=Inf	4	xcomp	_	GTtags=IV,Inf,Clt/тӧ
4	ланьт	ланьтны	VERB	V	Mood=Imp|Number=Sing|Person=2|Valency=1	0	root	_	GTtags=IV,Imprt,Sg2|SpaceAfter=No
5	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obl:tmod	color:blue
1	Пӧлатяс	пӧлать	NOUN	N	Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obl:lmod	_	GTtags=Sg,Ine,PxSg3,So/CP|SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	3	punct	_	_
3	пияныс	пи	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	1	appos	_	GTtags=Pl,Nom,PxSg3
4	дорын	дорын	ADP	Adp	AdpType=Post|Case=Ine	3	case	_	GTtags=Po,Ine|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	3	punct	_	_
6	узьліс	узьлыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,Sg3
7	сэсся	сэсся	ADV	Adv	_	6	advmod:tmod	_	_
8	Васька	Васька	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	6	nsubj	_	GTtags=Prop,Sem/Mal,Sg,Nom
9	мыйкӧ	мыйкӧ	PRON	Pron	Case=Nom|Definite=Ind|Derivation=Ko|Number=Sing|PronType=Ind	6	obl:tmod	_	GTtags=Indef,Indef,Sg,Nom,Der/кӧ
10	дыра	дыра	ADP	Adp	AdpType=Post	9	case	_	GTtags=Po|SpaceAfter=No
11	;	;	PUNCT	PUNCT	_	6	punct	_	_

~~~


