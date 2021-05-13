---
layout: base
title:  'Statistics of case in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `case`

This relation is universal.

16 nodes (2%) are attached to their parents as `case`.

16 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `case`: <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-ADP.html">ADP</a></tt> (8; 50% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-ADP.html">ADP</a></tt> (5; 31% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="koi_uh-pos-PROPN.html">PROPN</a></tt>-<tt><a href="koi_uh-pos-ADP.html">ADP</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	Менам	ме	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod	_	GTtags=Pers,Sg1,Gen
2	айӧ	ай	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	nsubj	_	GTtags=Sg,Nom,PxSg1
3	буржык	бур	ADJ	_	Degree=Cmp	0	root	_	GTtags=Der/жык,Comp
4	тэнат	тэ	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	5	nmod	_	GTtags=Pers,Sg2,Gen
5	ай	ай	NOUN	_	Case=Nom|Number=Sing	3	advcl	_	GTtags=Sg,Nom
6	сьӧрті	сьӧрті	ADP	_	_	5	case	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Мый	мый	PRON	_	Case=Nom|Number=Sing|PronType=Int	4	obl	_	GTtags=Interr,Sg,Nom
2	вылӧ	вылӧ	ADP	_	AdpType=Post|AdvType=Loc|Case=Ill|Number=Sing	1	case	_	GTtags=Po,Spat,Sg,Ill
3	тэ	тэ	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg2,Nom
4	видзӧтан	видзӧтны	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg2|SpaceAfter=No
5	?	?	PUNCT	CLB	_	4	punct	_	_

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


