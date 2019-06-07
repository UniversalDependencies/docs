---
layout: base
title:  'Statistics of nummod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `nummod`

This relation is universal.

120 nodes (1%) are attached to their parents as `nummod`.

120 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (110; 92% instances), <tt><a href="myv_jr-pos-ADP.html">ADP</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (7; 6% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	―	―	PUNCT	PUNCT	_	6	punct	_	_
2	Колчаконь	Колчак	PROPN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	3	nmod	_	GTtags=Prop,Sem/Sur,SP,Gen,Indef
3	армиясто	армия	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	6	obl	_	GTtags=SP,Ela,Indef
4	кавто	кавто	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	5	nummod	_	GTtags=Card,Sg,Nom,Indef
5	полкт	полк	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	6	nsubj	_	GTtags=Sem/Plc,Pl,Nom,Indef
6	калавтсть	калавтомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl3|SpaceAfter=No
7	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	―	―	PUNCT	PUNCT	_	3	punct	_	_
2	Кавонест	кавонест	ADV	Num	Number[psor]=Plur|NumType=Sets|Person[psor]=3	3	advcl	_	GTtags=AssocColl,PxPl3
3	кундызь	кундамс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl3,OcSg3
4	Любань	Люба	PROPN	N	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Fem|NameType=Giv|Number=Plur,Sing	3	obj	_	GTtags=Ant_Fem,Prop,SP,Gen,Indef
5	кавто	кавто	NUM	Num	NumType=Card	6	nummod	_	GTtags=Card
6	ёндо	ёндо	ADP	Adp	AdvType=Loc|Case=Abl	3	obl	_	GTtags=Spat,Abl|SpaceAfter=No
7	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Таркась	тарка	NOUN	N	Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	GTtags=Sem/Inanim_Cnt,Sg,Nom,Def
2	кочказ	кочкамс	VERB	V	Derivation=Ozj|VerbForm=Conv	0	root	_	GTtags=Der/Озь
3	ель	оль	AUX	Cop	Number[subj]=Sing|Person[subj]=3|Tense=Prt2	2	cop	_	GTtags=Prt2,ScSg3
4	ёнсто	ён	ADV	Adv	Derivation=AdvstO	2	advmod	_	GTtags=Der/A_стО,Adv|SpaceAfter=No
5	:	:	PUNCT	CLB	_	2	punct	_	_
6	ве	ве	NUM	Num	NumType=Card	7	nummod	_	GTtags=Card,Adn
7	пельде	пельде	ADV	Adv	AdvType=Loc	10	obl	_	GTtags=Spat
8	велесь	веле	NOUN	N	Case=Nom|Definite=Def|Number=Sing	10	nsubj	_	GTtags=Sg,Nom,Def
9	а	а	AUX	Pcle	Polarity=Neg	10	aux:neg	_	GTtags=Neg
10	неяви	неявомс	VERB	V	Derivation=OvtOms|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	2	conj	_	GTtags=Der/ОвОмс,IV,Ind,Prs,ScSg3
11	киненьгак	кияк	PRON	Pron	Case=Dat|Number=Plur,Sing|PronType=Ind	10	obl	_	GTtags=Indef,SP,Dat
12	семс	семс	ADV	Adv	AdvType=Tim	10	advmod	_	GTtags=Sem/Time|SpaceAfter=No
13	,	,	PUNCT	CLB	_	16	punct	_	_
14	зярс	зярс	ADV	Adv	AdvType=Tim|Derivation=Ill	16	mark	_	GTtags=Der/Ill,Adv,Sem/Time
15	а	а	AUX	Pcle	Polarity=Neg	16	aux:neg	_	GTtags=Neg
16	эртеват	эртевемс	VERB	V	Derivation=OvtOms|Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|Valency=1	12	advcl	_	GTtags=Der/ОвОмс,IV,Ind,Prs,ScSg2
17	эйзэнзэ	эйс	ADP	Adp	Case=Ill|Number[psor]=Sing|Person[psor]=3	16	obl	_	GTtags=Ill,PxSg3|SpaceAfter=No
18	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


