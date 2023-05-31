---
layout: base
title:  'Statistics of ccomp in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `ccomp`

This relation is universal.

9 nodes (1%) are attached to their parents as `ccomp`.

9 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.88888888888889.

The following 2 pairs of parts of speech are connected with `ccomp`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (8; 89% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	Нія	сія	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	GTtags=Pers,Pl3,Nom
2	озӧ	оз	AUX	_	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres	3	aux:neg	_	GTtags=Neg,Ind,Prs,Pl3
3	тӧдӧ	тӧдны	VERB	_	Connegative=Yes|Number=Plur	0	root	_	GTtags=Ind,Prs,ConNegPl|SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	кин	кин	PRON	_	Case=Nom|Number=Sing|PronType=Int	7	nsubj	_	GTtags=Interr,Sg,Nom
6	этӧ	эта	PRON	_	Case=Acc|Number=Sing|PronType=Dem	7	obj	_	GTtags=Dem,Sg,Nom
7	гижис	гижны	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	ccomp	_	GTtags=Ind,Prt1,Sg3|SpaceAfter=No
8	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 17 ccomp	color:blue
1	Но	но	CCONJ	CC	_	10	cc	_	_
2	керкуыс	керку	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	obl:lmod	_	GTtags=Sg,Nom,PxSg3
3	бокын	бокын	ADP	Adp	AdvType=Loc|Case=Ine	2	case	_	GTtags=Spat,Ine|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	туй	туй	NOUN	N	Case=Nom|Number=Sing	6	nmod	_	GTtags=Sg,Nom
6	ладорсяняс	ладор	NOUN	N	Case=Egr|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	appos	_	GTtags=Sg,Egr,PxSg3,So/CP|SpaceAfter=No
7	,	,	PUNCT	CLB	_	6	punct	_	_
8	мыйкӧ	мыйкӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	10	nsubj	_	GTtags=Indef,Sg,Nom
9	сё	сё	ADV	Adv	AdvType=Deg	10	advmod	_	GTtags=Deg
10	вӧрис	вӧрны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3|SpaceAfter=No
11	,	,	PUNCT	CLB	_	14	punct	_	_
12	и	и	CCONJ	CC	_	14	cc	_	_
13	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	14	nsubj	_	GTtags=Pers,Sg1,Nom
14	вежӧрті	вежӧртны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	10	conj	_	GTtags=Ind,Prt1,Sg1|SpaceAfter=No
15	,	,	PUNCT	CLB	_	17	punct	_	_
16	что	что	SCONJ	CS	_	17	mark	_	_
17	сэтӧн	сэтӧн	ADV	Adv	_	14	ccomp	_	_
18	кинкӧ	кинкӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	17	nsubj:cop	_	GTtags=Indef,Sg,Nom
19	ловья	ловья	ADJ	A	_	18	amod	_	SpaceAfter=No
20	...	...	PUNCT	CLB	_	10	punct	_	_

~~~


