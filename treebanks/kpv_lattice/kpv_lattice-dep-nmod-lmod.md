---
layout: base
title:  'Statistics of nmod:lmod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `nmod:lmod`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-nmod.html">nmod</a></tt>.
There are also 4 other language-specific subtypes of `nmod`: <tt><a href="kpv_lattice-dep-nmod-appos.html">nmod:appos</a></tt>, <tt><a href="kpv_lattice-dep-nmod-obj.html">nmod:obj</a></tt>, <tt><a href="kpv_lattice-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="kpv_lattice-dep-nmod-subj.html">nmod:subj</a></tt>.

30 nodes (0%) are attached to their parents as `nmod:lmod`.

30 instances of `nmod:lmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2.

The following 4 pairs of parts of speech are connected with `nmod:lmod`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (27; 90% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:lmod	color:blue
1	Медбӧрын	медбӧрын	ADV	Adv	Case=Ine|Degree=Sup	2	advmod:tmod	_	_
2	кыр	кыр	NOUN	N	Case=Nom|Number=Sing	4	obl	_	_
3	йылын	йылын	ADP	Po	Case=Ine|Number=Sing	2	case	_	_
4	тыдовтчисны	тыдовтчыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	_
5	сиктса	сикт	NOUN	N	Case=Loc|Number=Sing	6	nmod:lmod	_	_
6	керкаяс	керка	NOUN	N	Case=Nom|Number=Plur	4	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nmod:lmod	color:blue
1	Прохор	Прохор	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	12	nsubj	_	GTtags=Prop,Sem/Mal,Sg,Nom
2	Иванович	Иванович	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	1	flat:name	_	GTtags=Prop,Sem/Sur,Sg,Nom
3	Асныров	Асныров	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	1	flat:name	_	GTtags=Prop,Sem/Sur-Mal,Sg,Nom
4	уна	уна	DET	Det	_	5	det	_	_
5	во	во	NOUN	N	Case=Nom|Number=Sing	8	obl:tmod	_	GTtags=Sg,Nom
6	нин	нин	ADV	Adv	AdvType=Tim	5	advmod:tmod	_	GTtags=Sem/Time
7	кӧнъясынкӧ	кӧнъясынкӧ	ADV	Adv	Definite=Ind|Derivation=Ko	8	advmod:lmod	_	GTtags=Indef,Der/кӧ
8	ветлӧм	ветлыны	VERB	V	Case=Nom|Number=Sing|VerbForm=Vnoun	12	advcl	_	GTtags=IV,Der,Der/ӧм,Der/NomAct,N,Sg,Nom
9	бӧрын	бӧрын	ADP	Adp	AdpType=Post|Case=Ine|Number=Sing	8	case	_	GTtags=Po,Sg,Ine
10	регыдӧн	регыдӧн	ADV	Adv	Case=Ins	12	advmod:mmod	_	GTtags=Ins
11	на	на	ADV	Adv	AdvType=Tim	12	advmod:tmod	_	GTtags=Sem/Time
12	воӧм	воны	VERB	V	Case=Nom|Number=Sing|VerbForm=Vnoun	0	root	_	GTtags=IV,Der,Der/ӧм,Der/NomAct,N,Sg,Nom|SpaceAfter=No
13	,	,	PUNCT	CLB	_	15	punct	_	_
14	карса	кар	NOUN	N	Case=Loc|Number=Sing	15	nmod:lmod	_	GTtags=Sg,Der,Der/LocMod,A,Sg,Nom
15	паськӧма	паськӧма	ADJ	A	Case=Nom|Number=Sing	12	appos	_	GTtags=Sg,Nom|SpaceAfter=No
16	,	,	PUNCT	CLB	_	19	punct	_	_
17	...	...	PUNCT	CLB	_	19	punct	_	SpaceAfter=No
18	паськыда	паськыда	ADV	Adv	_	19	advmod	_	_
19	нязгис	нязгыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	12	conj	_	GTtags=IV,Ind,Prt1,Sg3,Cmp/Serial,Cmp
20	-	-	PUNCT	PUNCT	_	21	punct	_	_
21	ворсіс	ворсны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	19	conj	_	GTtags=IV,Ind,Prt1,Sg3
22	.	.	PUNCT	CLB	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:lmod	color:blue
1	Пожъясян	пожъясьны	VERB	V	Derivation=An	2	acl	_	GTtags=Refl,Der,Der/Ан,PrsPtc
2	местасӧ	места	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obj	_	GTtags=Sg,Acc,PxSg3
3	Пунегов	Пунегов	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	5	nmod	_	GTtags=Prop,Sem/Sur-Mal,Sg,Nom
4	Епимъяслӧн	Епим	NOUN	N	Animacy=Hum|Case=Gen|Number=Plur	3	flat:name	_	GTtags=Prop,Sem/Mal,Pl,Gen
5	керкасянь	керка	NOUN	N	Case=Egr|Number=Sing	6	nmod:lmod	_	GTtags=Sg,Egr
6	матӧ	матӧ	ADV	Adv	Case=Ill	7	advmod:lmod	_	GTtags=Ill
7	лӧсьӧдӧма	лӧсьӧдны	VERB	V	_	0	root	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


