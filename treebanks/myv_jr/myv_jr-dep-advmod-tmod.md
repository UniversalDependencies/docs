---
layout: base
title:  'Statistics of advmod:tmod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-advmod.html">advmod</a></tt>.

6 nodes (0%) are attached to their parents as `advmod:tmod`.

4 instances of `advmod:tmod` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.16666666666667.

The following 3 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (4; 67% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 17% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod:tmod	color:blue
1	Лишмесь	лишме	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Indef
2	ве	ве	NUM	Num	NumType=Card	3	nummod	_	GTtags=Card,Adn
3	ёндо	ёндо	ADP	Adp	AdvType=Loc|Case=Abl	4	obl	_	GTtags=Spat,Abl
4	содызе	содамс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3,OcSg3
5	азоронзо	азор	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obj	_	GTtags=Sg,Gen,PxSg3|SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	кодак	кодак	ADV	Adv	_	8	advmod:tmod	_	GTtags=TV,Imprt,ScSg2
8	неизе	неемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Prt1|Valency=2	4	conj	_	GTtags=TV,Ind,Prt1,ScSg3,OcSg3
9	—	—	PUNCT	PUNCT	_	10	punct	_	_
10	цяхазевсь	цяхазевемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	8	conj	_	GTtags=IV,Ind,Prt1,ScSg3|SpaceAfter=No
11	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 advmod:tmod	color:blue
1	―	―	PUNCT	PUNCT	_	3	punct	_	_
2	Пек	пек	ADV	Adv	AdvType=Deg	3	advmod	_	GTtags=Degree
3	стака	стака	ADJ	A	_	0	root	_	_
4	ульнесь	ульнемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	3	cop	_	GTtags=IV,Ind,Prt1,ScSg3
5	печтемс	печтемс	VERB	V	Case=Ill|Valency=2|VerbForm=Conv	3	obl	_	GTtags=TV,Ger,Ill
6	чопода	чопода	ADJ	A	_	7	amod	_	_
7	весь	ве	NOUN	N	Case=Nom|Definite=Def|Number=Sing	3	nsubj	_	GTtags=Sg,Nom,Def|SpaceAfter=No
8	,	,	PUNCT	CLB	_	9	punct	_	_
9	ней	ней	ADV	Adv	AdvType=Tim	3	advmod:tmod	_	GTtags=Temp|SpaceAfter=No
10	,	,	PUNCT	CLB	_	11	punct	_	_
11	ялгат	ялга	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	3	vocative	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
12	!..	^excl..	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 advmod:tmod	color:blue
1	Марить	марямс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg2|SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	чей	чей	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	1	discourse	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	_
5	кизна	кизна	ADV	Adv	AdvType=Tim	7	advmod:tmod	_	GTtags=Temp
6	Рютина	Рютин	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Fem|NameType=Sur|Number=Sing	1	ccomp	_	GTtags=Prop,Sur_Fem,Sg,Nom,Indef
7	велесэ	веле	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	6	nmod	_	GTtags=Sem/Plc,SP,Ine,Indef
8	мезе	мезе	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	7	nsubj	_	GTtags=Interr,Sg,Nom,Indef
9	ульнесь	ульнемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	7	cop	_	GTtags=IV,Ind,Prt1,ScSg3|SpaceAfter=No
10	?	?	PUNCT	CLB	_	1	punct	_	_

~~~


