---
layout: base
title:  'Statistics of flat in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="myv_jr-dep-flat-name.html">flat:name</a></tt>.

11 nodes (0%) are attached to their parents as `flat`.

11 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.09090909090909.

The following 3 pairs of parts of speech are connected with `flat`: <tt><a href="myv_jr-pos-X.html">X</a></tt>-<tt><a href="myv_jr-pos-X.html">X</a></tt> (6; 55% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (4; 36% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 15 flat	color:blue
1	Сень	се	PRON	Pron	Case=Gen|Definite=Ind	2	nmod:poss	_	GTtags=Gen,Indef
2	лангсо	ланго	NOUN	N	Case=Ine|Definite=Ind|NounType=Relat|Number=Plur,Sing	3	nmod:lmod	_	GTtags=Relator,Po,Ine
3	сёрмадовксонтькак	сёрмадовкс	NOUN	N	Case=Gen|Clitic=Add|Definite=Def|Number=Sing	4	obj	_	GTtags=Sg,Gen,Def,Clitic=Gak
4	ловнызь	ловномс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Past	0	root	_	GTtags=TV,Ind,Prt1,ScPl3,OcSg3|SpaceAfter=No
5	:	:	PUNCT	CLB	_	7	punct	_	_
6	«	«	PUNCT	CLB	_	7	punct	_	GTtags=|SpaceAfter=No
7	Ни	ни	X	X	_	4	parataxis	_	_
8	тебе	тебе	X	X	_	7	flat	_	GTtags=|SpaceAfter=No
9	,	,	PUNCT	CLB	_	7	punct	_	_
10	ни	ни	X	X	_	7	flat	_	_
11	мне	мне	X	X	_	7	flat	_	GTtags=|SpaceAfter=No
12	,	,	PUNCT	CLB	_	7	punct	_	_
13	но	но	X	X	_	7	flat	_	_
14	имени	имени	X	X	_	7	flat	_	_
15	твоему	твоему	X	X	_	7	flat	_	GTtags=|SpaceAfter=No
16	»	»	PUNCT	CLB	_	7	punct	_	GTtags=|SpaceAfter=No
17	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	Идем	идем	ADJ	A	_	2	amod	_	_
2	ракшась	ракша	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sem/Anim_Cnt,Sg,Nom,Def
3	Карго	Карго	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef
4	Масторсост	мастор	NOUN	N	Case=Ine|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3	3	flat	_	GTtags=Sem/Inanim_Cnt,SP,Ine,PxPl3
5	—	—	PUNCT	CLB	_	8	punct	_	_
6	кодамояк	кодамояк	ADJ	A	PronType=Ind	7	amod	_	GTtags=Indef
7	пе	пе	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	8	nsubj	_	GTtags=Sem/Inanim_Cnt,Sg,Nom,Indef
8	тензэ	сон	PRON	Pron	Case=Dat|Number=Sing|Person=3|PronType=Prs|Variant=Short	9	obl	_	GTtags=Pers,Sg3,Dat,Short
9	арась	арась	ADJ	A	Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Pres	4	conj	_	GTtags=Neg,Cop,Ind,Prs,ScSg3|SpaceAfter=No
10	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	Неть	не	PRON	Pron	Case=Nom|Definite=Ind|Number=Plur|PronType=Dem	2	det	_	GTtags=Dem,Pl,Nom,Indef
2	куйметненьгак	куйме	NOUN	N	Case=Gen|Clitic=Add|Definite=Def|Number=Plur	11	obj	_	GTtags=Sem/Inanim_Cnt,Pl,Gen,Def,Clt/Gak|SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	_
4	кода	кода	ADV	Adv	AdvType=Man|PronType=Int	6	mark	_	GTtags=Interr,Manner
5	валске	валске	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	7	nmod	_	GTtags=Sem/Inanim_Cnt,Sg,Nom,Indef
6	мартон	мартонь	ADJ	A	Derivation=GenAttr	5	flat	_	GTtags=Der/GenAttr
7	сенть	сесь	PRON	Pron	Case=Gen|Definite=Def|Number=Sing	2	conj	_	GTtags=Sg,Gen,Def
8	,	,	PUNCT	CLB	_	7	punct	_	_
9	истя	истя	ADV	Adv	_	11	advmod	_	_
10	жо	жо	PART	Pcle	_	9	fixed	_	GTtags=Emph
11	чукадинзе	чукадемс	VERB	V	Mood=Ind|Number[obj]=Plur|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past	0	root	_	GTtags=TV,Ind,Prt1,ScSg3,OcPl3
12	кудост	кудо	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Plur|Person[psor]=3	14	obl	_	GTtags=Sg,Gen,PxPl3
13	перька	перька	ADP	Po	AdpType=Post|Case=Prl|Definite=Ind|Number=Sing	12	case	_	GTtags=Po,Prl,Sg,Nom,Indef
14	пирявксонть	пирявкс	NOUN	N	Case=Gen|Definite=Def|Number=Sing	15	nmod	_	GTtags=Sem/Inanim_Cnt,Sg,Gen,Def
15	потсо	потмо	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	16	obl:lmod	_	GTtags=Sem/Inanim_Cnt,SP,Ine,Indef
16	каразь	карамс	VERB	V	Derivation=Ozj|VerbForm=Conv	17	acl	_	GTtags=Der/Озь,Ger
17	латкинентень	латкине	NOUN	N	Case=Dat|Definite=Def|Number=Sing	11	obl	_	GTtags=Sem/Inanim_Cnt,Sg,Dat,Def|SpaceAfter=No
18	.	.	PUNCT	CLB	_	11	punct	_	_

~~~


