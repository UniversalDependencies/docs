---
layout: base
title:  'Statistics of case in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `case`

This relation is universal.

22 nodes (2%) are attached to their parents as `case`.

22 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `case`: <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-ADP.html">ADP</a></tt> (13; 59% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-ADP.html">ADP</a></tt> (6; 27% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt>-<tt><a href="koi_uh-pos-ADP.html">ADP</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 case	color:blue
1	Ми	ме	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	GTtags=Pron,Pers,Pl1,Nom
2	вуджим	вуджны	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Past	0	root	_	GTtags=V,TV,Ind,Prt1,Pl1
3	Гырка	Гырка	NOUN	N	Case=Nom|Number=Sing	4	nmod	_	GTtags=N,Prop,Sg,Nom
4	логсӧ	лог	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	obj	_	GTtags=N,Sg,Acc,PxSg3|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	GTtags=CLB
6	сибӧтчим	сибӧтчыны	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Past	2	conj	_	GTtags=V,IV,Ind,Prt1,Pl1
7	дорись	дор	NOUN	N	Case=Ela|NounType=Relat|Number=Sing	8	nmod:lmod	_	GTtags=V,IV,Der/ісь,ActPrsPtc,Sg,Nom
8	керкуокыс	керку	NOUN	N	Animacy=Inan|Case=Nom|Degree=Dim|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obl:lmod	_	GTtags=N,Sem/Inanim,Der/Ок,Der/Dimin,N,Sg,Nom,PxSg3
9	дынӧ	дынӧ	ADP	Adp	AdpType=Post|AdvType=Loc|Case=Ill|Number=Sing	8	case	_	GTtags=Adp,Po,Spat,Sg,Ill|SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Сы	сія	PRON	_	Number=Sing|Person=3|PronType=Prs	3	obl:tmod	_	GTtags=Pers,Sg3
2	бӧрсянь	бӧрсянь	ADP	_	AdpType=Post|AdvType=Loc|Case=Egr|Number=Sing	1	case	_	GTtags=Po,Spat,Sg,Egr
3	вуджӧны	вуджны	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Pl3
4	порогсӧ	порог	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	obj	_	GTtags=Sg,Acc,PxSg3
5	эшӧ	эшӧ	ADV	_	_	3	advmod:tmod	_	_
6	кыка	кыка	NUM	_	Number=Sing	3	obl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	Талун	талун	ADV	Adv	_	10	advmod	_	GTtags=Adv|SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	GTtags=CLB
3	кӧр	кӧр	ADV	Adv	_	4	advmod	_	GTtags=Adv
4	пантасим	пантасьны	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Past	1	advcl:tcl	_	GTtags=V,IV,Ind,Prt1,Pl1
5	ю	ю	NOUN	N	Case=Nom|Number=Sing	4	obl	_	GTtags=N,Sg,Nom
6	дорас	дор	NOUN	N	Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	case	_	GTtags=N,Sg,Ine,PxSg3|SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	GTtags=CLB
8	сія	сія	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	GTtags=Pron,Pers,Sg3,Nom
9	медперво	медперво	ADV	Adv	_	10	advmod	_	GTtags=Adv
10	кыскис	кыскыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=V,Ind,Prt1,Sg3
11	бадь	бадь	NOUN	N	Animacy=Inan|Case=Nom|Number=Sing	12	nmod	_	GTtags=N,Sem/Inanim,Sg,Nom
12	кусттэз	куст	NOUN	N	Case=Nom|Number=Plur	13	nmod	_	GTtags=N,Pl,Nom
13	коласісь	колас	NOUN	N	Case=Ela|Number=Sing	10	obl	_	GTtags=N,Sg,Ela
14	ыджыт	ыджыт	ADJ	A	_	15	amod	_	GTtags=A
15	лагун	лагун	NOUN	N	Case=Nom|Number=Sing	10	obj	_	GTtags=N,Sg,Nom
16	и	и	CCONJ	CC	_	17	cc	_	GTtags=CC
17	нюжӧтіс	нюжӧтны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	10	conj	_	GTtags=V,IV,Ind,Prt1,Sg3
18	меным	ме	PRON	Pron	Case=Dat|Number=Sing|Person=1|PronType=Prs	17	obl	_	GTtags=Pron,Pers,Sg1,Dat|SpaceAfter=No
19	.	.	PUNCT	CLB	_	10	punct	_	GTtags=CLB

~~~


