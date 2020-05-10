---
layout: base
title:  'Statistics of xcomp:ds in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `xcomp:ds`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-xcomp.html">xcomp</a></tt>.

16 nodes (0%) are attached to their parents as `xcomp:ds`.

15 instances of `xcomp:ds` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.3125.

The following 2 pairs of parts of speech are connected with `xcomp:ds`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (14; 88% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (2; 13% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 xcomp:ds	color:blue
1	Сынь	сынь	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Pl3,Nom
2	тонавтсть	тонавтомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl3
3	эйсэнь	эйсэ	ADP	Adp	Case=Ine|Number[psor]=Sing|Person[psor]=1	2	obj	_	GTtags=Ine,PxSg1
4	мазычинть	мазычинть	NOUN	N	Case=Gen|Definite=Def|Number=Sing	5	obj	_	GTtags=Sg,Gen,Def
5	редямо	редямс	VERB	V	Case=Loc|Valency=2|VerbForm=Inf	2	xcomp:ds	_	GTtags=TV,Inf,Loc|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	марямо	марямс	VERB	V	Case=Loc|Valency=2|VerbForm=Inf	5	conj	_	GTtags=TV,Inf,Loc
8	ды	ды	CCONJ	CC	_	9	cc	_	_
9	тееме	теемс	VERB	V	Case=Loc|Valency=2|VerbForm=Inf	5	conj	_	GTtags=TV,Inf,Loc|SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 xcomp:ds	color:blue
1	Окойники	окойники	ADV	Adv	AdvType=Tim	3	advmod:tmod	_	GTtags=Sem/Time|SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	велявтсть	велявтомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl3
4	лей	лей	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	obl	_	GTtags=Sem/Inanim_Cnt,Sg,Nom,Indef
5	лангсто	ланго	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	4	case	_	GTtags=Relat,SP,Ela,Indef
6	шлямо	шлямо	NOUN	N	Case=Loc|Valency=1|VerbForm=Inf	7	xcomp:ds	_	GTtags=IV,Inf,Loc
7	панезтне	панемс	VERB	V	Case=Nom|Definite=Def|Derivation=Ozj|Number=Plur|VerbForm=Conv	3	nsubj	_	GTtags=Der/Озь,Ger,Pl,Nom,Def|SpaceAfter=No
8	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


