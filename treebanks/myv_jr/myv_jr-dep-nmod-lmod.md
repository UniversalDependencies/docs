---
layout: base
title:  'Statistics of nmod:lmod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `nmod:lmod`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="myv_jr-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="myv_jr-dep-nmod-gsubj.html">nmod:gsubj</a></tt>, <tt><a href="myv_jr-dep-nmod-poss.html">nmod:poss</a></tt>.

6 nodes (0%) are attached to their parents as `nmod:lmod`.

6 instances of `nmod:lmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 2 pairs of parts of speech are connected with `nmod:lmod`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (5; 83% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:lmod	color:blue
1	Столь	столь	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	2	nmod	_	GTtags=Sg,Nom,Indef
2	лангсо	лангсо	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	3	nmod:lmod	_	GTtags=SP,Ine,Indef
3	лампась	лампа	NOUN	N	Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	GTtags=Sg,Nom,Def
4	апак	а	AUX	Pcle	PartForm=NegConvPrc|Polarity=Neg|VerbForm=Conv,Part	5	aux:neg	_	GTtags=Neg
5	кончтне	кончтнемс	VERB	V	Connegative=Yes	6	advcl	_	GTtags=TV,ConNeg
6	ваны	ваномс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	0	root	_	GTtags=TV,Ind,Prs,ScSg3
7	конёвом	конёв	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	8	nmod	_	GTtags=Sg,Gen,PxSg1
8	лангс	лангс	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	6	obl	_	GTtags=SP,Ill,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 nmod:lmod	color:blue
1	—	—	PUNCT	PUNCT	_	5	punct	_	_
2	Тунда	тунда	ADV	Adv	AdvType=Tim	5	advmod:tmod	_	GTtags=Temp
3	Донскоень	Донской	PROPN	N	Animacy=Hum|Case=Gen|Definite=Ind|NameType=Sur|Number=Plur,Sing	4	nmod:poss	_	GTtags=Prop,Sur_Mal,SP,Gen,Indef
4	бандазо	банда	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	GTtags=Sg,Nom,PxSg3
5	лоткакшнось	лоткамс	VERB	V	Derivation=OkshnOms|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=IV,Der/ОкшнОмс,V,IV,Ind,Prt1,ScSg3
6	минек	мон	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	9	nmod:lmod	_	GTtags=Pers,Pl1,Gen
7	вакснэ	вакссо	ADP	Adp	Case=Ine	6	case	_	GTtags=Pl,Nom,Def
8	Бессоновка	Бессоновка	PROPN	N	Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	9	compound	_	GTtags=Prop,Sg,Nom,Indef
9	велес	веле	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	5	obl	_	GTtags=Sem/Plc,SP,Ill,Indef|SpaceAfter=No
10	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


