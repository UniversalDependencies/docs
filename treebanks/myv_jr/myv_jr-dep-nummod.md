---
layout: base
title:  'Statistics of nummod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `nummod`

This relation is universal.

126 nodes (1%) are attached to their parents as `nummod`.

126 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16666666666667.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (121; 96% instances), <tt><a href="myv_jr-pos-ADP.html">ADP</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	―	―	PUNCT	PUNCT	_	6	punct	_	_
2	Колчаконь	Колчак	PROPN	N	Case=Gen|Definite=Ind|NameType=Sur|Number=Plur,Sing	3	nmod:poss	_	GTtags=Prop,Sem/Sur,SP,Gen,Indef
3	армиясто	армия	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	6	obl	_	GTtags=SP,Ela,Indef
4	кавто	кавто	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	5	nummod	_	GTtags=Card,Sg,Nom,Indef
5	полкт	полк	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	6	nsubj	_	GTtags=Sem/Plc,Pl,Nom,Indef
6	калавтсть	калавтомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl3|SpaceAfter=No
7	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	—	—	PUNCT	PUNCT	_	3	punct	_	_
2	Бандитнэнь	бандит	NOUN	N	Case=Gen|Definite=Def|Number=Plur	3	obj	_	GTtags=Pl,Gen,Def
3	пекстынк	пекстамс	VERB	V	Mood=Imp|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=2|Valency=2	0	root	_	GTtags=TV,Imprt,ScPl2,OcSg3
4	весе	весе	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Tot	3	advcl	_	GTtags=Tot,Sg,Nom,Indef
5	ве	ве	NUM	Num	NumType=Card	6	nummod	_	GTtags=Card,Adn
6	таркас	таркас	ADP	Adp	AdvType=Loc|Case=Ill	3	obl	_	GTtags=Spat,Ill|SpaceAfter=No
7	!	!	PUNCT	CLB	_	3	punct	_	_
8	—	—	PUNCT	PUNCT	_	9	punct	_	_
9	мерсь	меремс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=2	3	parataxis	_	GTtags=TV,Ind,Prt1,ScSg3
10	камандирэсь	командир	NOUN	N	Case=Nom|Definite=Def|Number=Sing	9	nsubj	_	GTtags=Dial,Sg,Nom,Def|SpaceAfter=No
11	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Таркась	тарка	NOUN	N	Case=Nom|Definite=Def|Number=Sing	2	nsubj:cop	_	GTtags=Sem/Inanim_Cnt,Sg,Nom,Def
2	кочказель	кочкамс	VERB	V	Derivation=Ozj|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Conv	0	root	_	GTtags=Der/Озь,Prt2,ScSg3
3	ёнсто	ён	ADV	Adv	Derivation=AdvstO	2	advmod	_	GTtags=Der/A_стО,Adv|SpaceAfter=No
4	:	:	PUNCT	CLB	_	2	punct	_	_
5	ве	ве	NUM	Num	NumType=Card	6	nummod	_	GTtags=Card,Adn
6	пельде	пельде	ADV	Adv	AdvType=Loc	9	obl	_	GTtags=Spat
7	велесь	веле	NOUN	N	Case=Nom|Definite=Def|Number=Sing	9	nsubj	_	GTtags=Sg,Nom,Def
8	а	а	AUX	Pcle	Polarity=Neg	9	aux:neg	_	GTtags=Neg
9	неяви	неявомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	2	conj	_	GTtags=Der/ОвОмс,IV,Ind,Prs,ScSg3
10	киненьгак	кияк	PRON	Pron	Case=Dat|Number=Plur,Sing|PronType=Ind	9	obl:agent	_	GTtags=Indef,SP,Dat
11	семс	семс	ADV	Adv	AdvType=Tim	9	advmod:tmod	_	GTtags=Sem/Time|SpaceAfter=No
12	,	,	PUNCT	CLB	_	15	punct	_	_
13	зярс	зярс	ADV	Adv	AdvType=Tim|Case=Ill	15	mark	_	GTtags=Der/Ill,Adv,Sem/Time
14	а	а	AUX	Pcle	Polarity=Neg	15	aux:neg	_	GTtags=Neg
15	эртеват	эртевемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|Valency=1	11	advcl	_	GTtags=Der/ОвОмс,IV,Ind,Prs,ScSg2
16	эйзэнзэ	эйс	ADP	Adp	Case=Ill|Number[psor]=Sing|Person[psor]=3	15	obl	_	GTtags=Ill,PxSg3|SpaceAfter=No
17	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


