---
layout: base
title:  'Statistics of compound:nn in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `compound:nn`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="myv_jr-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="myv_jr-dep-compound-redup.html">compound:redup</a></tt>.

45 nodes (0%) are attached to their parents as `compound:nn`.

45 instances of `compound:nn` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13333333333333.

The following 2 pairs of parts of speech are connected with `compound:nn`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (41; 91% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (4; 9% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound:nn	color:blue
1	―	―	PUNCT	PUNCT	_	2	punct	_	_
2	Совсинек	совсемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=1|Tense=Past	0	root	_	GTtags=IV,Ind,Prt1,ScPl1
3	Звездов	Звездов	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	4	compound:nn	_	GTtags=Sur_Mal,Prop,Sg,Nom,Indef
4	ялгат	ялга	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=2	2	obl	_	GTtags=Sg,Gen,PxSg2
5	туртов	туртов	ADP	Po	AdpType=Post|Case=Dat	4	case	_	GTtags=Dat|SpaceAfter=No
6	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound:nn	color:blue
1	Эскели	эскелямс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,ScSg3|2q:1.1,2
2	Кечай	Кечай	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	1	nsubj	_	GTtags=Ant_Mal,Sg,Nom,Indef
3	Кокша	Кокша	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	4	compound:nn	_	GTtags=Sg,Nom,Indef
4	пандонть	пандо	NOUN	N	Case=Gen|Definite=Def|Number=Sing	5	nmod	_	GTtags=Sem/Inanim_Cnt,Sg,Gen,Def
5	ёнов	ён	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	1	obl	_	GTtags=Relator,SP,Lat,Indef
6	эрязасто	эрязасто	ADV	Adv	AdvType=Man|Case=Ela	1	advmod	_	GTtags=Manner,Ela|SpaceAfter=No
7	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


