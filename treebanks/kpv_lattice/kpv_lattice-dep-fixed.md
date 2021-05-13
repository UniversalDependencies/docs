---
layout: base
title:  'Statistics of fixed in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `fixed`

This relation is universal.

2 nodes (0%) are attached to their parents as `fixed`.

2 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `fixed`: <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-SCONJ.html">SCONJ</a></tt> (1; 50% instances), <tt><a href="kpv_lattice-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="kpv_lattice-pos-CCONJ.html">CCONJ</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Ӧдва	ӧдва	ADV	Adv	_	4	advmod	_	_
2	кӧ	кӧ	SCONJ	CS	_	1	fixed	_	_
3	и	и	ADV	Adv	_	4	advmod:foc	_	_
4	ӧзъяс	ӧзйыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut	0	root	_	GTtags=IV,Ind,Fut,Sg3|SpaceAfter=No
5	,	,	PUNCT	CLB	_	10	punct	_	_
6	—	—	PUNCT	PUNCT	_	10	punct	_	_
7	ас	ас	PRON	Pron	PronType=Prs|Reflex=Yes	9	obl	_	GTtags=Det,Refl,Abs
8	кежас	кежӧ	ADP	Adp	AdpType=Post|Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	case	_	GTtags=Po,Sg,Ill,PxSg3
9	гораа	гораа	ADV	Adv	_	10	advmod:mmod	_	_
10	сёрнитіс	сёрнитны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	parataxis	_	GTtags=IV,Ind,Prt1,Sg3
11	Демит	Демит	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	10	nsubj	_	GTtags=Prop,Sem/Mal,Sg,Nom|SpaceAfter=No
12	,	,	PUNCT	CLB	_	15	punct	_	_
13	надзӧникӧн	надзӧникӧн	ADV	Adv	Case=Ins	15	advmod	_	GTtags=Ins
14	пондіс	пондыны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	15	aux:aspect	_	GTtags=IV,Ind,Prt1,Sg3
15	бӧрйыны	бӧрйыны	VERB	V	VerbForm=Inf	10	conj	_	GTtags=TV,Inf
16	васӧдмӧм	васӧдмыны	VERB	V	Tense=Past|VerbForm=Part	17	acl	_	GTtags=IV,Der,Der/ӧм,PastPtc
17	шомъяс	шом	NOUN	N	Case=Nom|Number=Plur	15	obl	_	GTtags=Pl,Nom
18	пиысь	пиысь	ADP	Adp	AdpType=Post|Case=Ela|Number=Sing	17	case	_	GTtags=Po,Sg,Ela
19	косджыкъяссӧ	кос	ADJ	A	Case=Acc|Degree=Cmp|Number=Plur|Number[psor]=Sing|Person[psor]=3	15	obj	_	GTtags=Comp,Pl,Acc,PxSg3
20	и	и	CCONJ	CC	_	23	cc	_	_
21	мӧд	мӧд	DET	Det	_	22	det	_	_
22	пӧв	пӧв	NOUN	N	_	23	obl:tmod	_	_
23	лэдзис	лэдзны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	10	conj	_	GTtags=TV,Ind,Prt1,Sg3
24	би	би	NOUN	N	Case=Nom|Number=Sing	23	obj	_	GTtags=Sg,Nom
25	самӧварӧ	самӧвар	NOUN	N	Case=Ill|Number=Sing	23	obl:lmod	_	GTtags=Sg,Ill|SpaceAfter=No
26	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Ho	но·и	CCONJ	CC	_	7	cc	_	_
2	и	_	CCONJ	CC	_	1	fixed	_	_
3	сэтчаняс	сэтчаняс	ADV	Adv	_	7	advmod:lmod	_	GTtags=EgrIne,Px3Sg
4	бой	бой	NOUN	N	Case=Nom|Number=Sing	7	nsubj	_	GTtags=Sg,Nom
5	жӧ	жӧ	ADV	Adv	_	4	advmod:eval	_	GTtags=Parenthetic
6	нин	нин	ADV	Adv	AdvType=Tim	7	advmod:tmod	_	GTtags=Sem/Time
7	муніс	мунны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,Sg3|SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	12	punct	_	_
9	«	«	PUNCT	PUNCT	_	10	punct	_	GTtags=LEFT|SpaceAfter=No
10	ура	ура	INTJ	Interj	_	12	nmod:appos	_	SpaceAfter=No
11	»	»	PUNCT	PUNCT	_	10	punct	_	GTtags=RIGHT
12	сорӧн	сор	NOUN	N	Case=Ins|Number=Sing	7	obl	_	GTtags=Sg,Ins|SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


