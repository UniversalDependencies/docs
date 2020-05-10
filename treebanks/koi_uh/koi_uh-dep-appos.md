---
layout: base
title:  'Statistics of appos in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `appos`

This relation is universal.

4 nodes (1%) are attached to their parents as `appos`.

4 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.25.

The following 3 pairs of parts of speech are connected with `appos`: <tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="koi_uh-pos-ADV.html">ADV</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 appos	color:blue
1	Сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	быдмис	быдмыны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3
3	Парижын	Париж	PROPN	_	Case=Ine|NameType=Geo|Number=Sing	2	obl:lmod	_	GTtags=Prop,Sg,Ine|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	Франция	Франция	PROPN	_	Case=Nom|NameType=Geo|Number=Sing	6	nmod	_	GTtags=Prop,Sg,Nom
6	юркарын	юркар	NOUN	_	Case=Ine|Number=Sing	3	appos	_	GTtags=Sg,Ine|SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 appos	color:blue
1	Только	только	ADV	_	_	3	advmod	_	_
2	ылын	ылын	ADV	_	AdvType=Loc|Case=Ine	3	advmod:lmod	_	GTtags=Spat,Ine
3	веськытлань	веськыт	ADJ	_	Case=Apr|Number=Sing	9	obl:lmod	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	самӧй	самӧй	ADV	_	_	6	advmod	_	_
6	горизонт	горизонт	NOUN	_	Case=Nom|Number=Sing	3	appos	_	GTtags=Sg,Nom
7	вылын	вылын	ADP	_	AdpType=Post|AdvType=Loc|Case=Ine|Number=Sing	6	case	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	6	punct	_	_
9	лэбтіcиcӧ	лэбтіcьны	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Pl3
10	кык	кык	NUM	_	Case=Nom|Number=Sing|NumType=Card	13	nummod	_	GTtags=Card,Sg,Nom
11	ыджыт	ыджыт	ADJ	_	Case=Nom|Number=Sing	13	amod	_	GTtags=Sg,Nom
12	коричневӧй	коричневӧй	ADJ	_	Case=Nom|Number=Sing	13	amod	_	GTtags=Sg,Nom
13	кымӧp	кымӧp	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	SpaceAfter=No
14	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 appos	color:blue
1	Мӧйму	мӧйму	ADV	Adv	_	9	advmod:tmod	_	GTtags=N,Sg,Nom|SpaceAfter=No
2	,	,	PUNCT	CLB	_	5	punct	_	GTtags=CLB
3	эта	эта	DET	Det	_	5	det	_	GTtags=Det
4	жӧ	жӧ	PART	Pcle	_	3	advmod	_	GTtags=Pcle
5	кадӧ	кад	NOUN	N	Animacy=Inan|Case=Ill|Number=Sing	1	appos	_	GTtags=N,Sem/Inanim,Sg,Ill|SpaceAfter=No
6	,	,	PUNCT	CLB	_	5	punct	_	GTtags=CLB
7	неделяся	неделяся	NOUN	A	_	8	nmod	_	GTtags=A
8	дыржык	дыр	ADV	Adv	Degree=Cmp|Derivation=Zhyk	9	advmod:tmod	_	GTtags=Adv,Der/жык,Comp
9	ветлӧті	ветлӧтны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|Valency=1	0	root	_	GTtags=V,IV,Ind,Prt1,Sg1
10	эна	эна	PRON	Pron	Case=Nom|Number=Plur|PronType=Dem	11	det	_	GTtags=Pcle
11	местаэзӧт	места	NOUN	N	Case=Prl|Number=Plur	9	obl:lmod	_	GTtags=N,Pl,Prl|SpaceAfter=No
12	,	,	PUNCT	CLB	_	13	punct	_	GTtags=CLB
13	узьлі	узьлыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|Valency=1	9	conj	_	GTtags=V,IV,Ind,Prt1,Sg1|SpaceAfter=No
14	,	,	PUNCT	CLB	_	15	punct	_	GTtags=CLB
15	кытӧн	кытӧн	PRON	Pron	Case=Ine|PronType=Int	13	obl:lmod	_	GTtags=Pron,Spat,Ine,Interr
16	шедас	шедны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|Valency=1	15	fixed	_	GTtags=V,IV,Ind,Fut,Sg3|SpaceAfter=No
17	:	:	PUNCT	CLB	_	15	punct	_	GTtags=CLB
18	кӧз	кӧз	NOUN	N	Case=Nom|Number=Sing	19	nmod	_	GTtags=N,Sg,Nom
19	увтын	увт	NOUN	N	Case=Ine|Number=Sing	15	conj	_	GTtags=Sg,Ine|SpaceAfter=No
20	,	,	PUNCT	CLB	_	22	punct	_	GTtags=CLB
21	ю	ю	NOUN	N	Case=Ine|Number=Sing	22	nmod	_	GTtags=N,Sg,Ine
22	дорын	дор	NOUN	_	_	15	conj	_	SpaceAfter=No
23	,	,	PUNCT	CLB	_	25	punct	_	GTtags=CLB
24	киссьӧм	киссьӧм	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	25	advcl	_	GTtags=N,Sem/Inanim,Sg,Nom
25	сарайын	сарай	NOUN	N	Case=Ine|Number=Sing	15	conj	_	GTtags=N,Sg,Ine|SpaceAfter=No
26	,	,	PUNCT	CLB	_	29	punct	_	GTtags=CLB
27	быд	быд	PRON	Pron	PronType=Tot	28	det	_	GTtags=Pron,Qnt
28	лун	лун	NOUN	N	Case=Nom|Number=Sing	29	obl:tmod	_	GTtags=N,Sg,Nom
29	кошши	кошшыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|Valency=2	9	conj	_	GTtags=V,TV,Ind,Prt1,Sg1
30	тшаккез	тшак	NOUN	N	Case=Nom|Number=Plur	29	obj	_	GTtags=N,Pl,Nom
31	да	да	CCONJ	CC	_	32	cc	_	GTtags=CC
32	ягӧд	ягӧд	NOUN	N	Animacy=Inan|Case=Nom|Number=Sing	30	conj	_	GTtags=N,Sem/Inanim,Sg,Nom|SpaceAfter=No
33	,	,	PUNCT	CLB	_	34	punct	_	GTtags=CLB
34	чериалі	чериавны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	9	conj	_	GTtags=V,Ind,Prt1,Sg1|SpaceAfter=No
35	.	.	PUNCT	CLB	_	9	punct	_	GTtags=CLB

~~~


