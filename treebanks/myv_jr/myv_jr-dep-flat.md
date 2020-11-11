---
layout: base
title:  'Statistics of flat in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="myv_jr-dep-flat-name.html">flat:name</a></tt>.

16 nodes (0%) are attached to their parents as `flat`.

16 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 4 pairs of parts of speech are connected with `flat`: <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (6; 38% instances), <tt><a href="myv_jr-pos-X.html">X</a></tt>-<tt><a href="myv_jr-pos-X.html">X</a></tt> (6; 38% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (3; 19% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Нал	нал	PROPN	N	Case=Nom|Definite=Ind|Number=Sing	3	nmod	_	GTtags=Sg,Nom,Indef
2	веле	веле	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	1	flat	_	GTtags=Sem/Plc,Sg,Nom,Indef
3	пестэнть	пе	NOUN	N	Case=Ela|Definite=Def|Number=Sing	7	obl	_	GTtags=Sem/Plc,Sg,Ela,Def
4	кол	кол	ADJ	A	_	5	amod	_	_
5	вармась	варма	NOUN	N	Case=Nom|Definite=Def|Number=Sing	7	nsubj	_	GTtags=Sg,Nom,Def
6	тензэ	сон	PRON	Pron	Case=Dat|Number=Sing|Person=3|PronType=Prs|Variant=Short	8	obl:agent	_	GTtags=Pers,Sg3,Dat,Short
7	кармась	кармамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
8	марявомо	марявомс	VERB	V	Case=Loc|Valency=1|VerbForm=Inf	7	xcomp	_	GTtags=IV,Inf,Loc
9	седе	седе	ADV	Adv	Degree=Cmp	10	advmod:deg	_	GTtags=Comp
10	сэтьмекс	сэтьме	ADJ	A	Case=Tra|Definite=Ind|Number=Plur,Sing	8	xcomp	_	GTtags=Der/MWN,N,SP,Tra,Indef|SpaceAfter=No
11	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 15 flat	color:blue
1	Сень	се	PRON	Pron	Case=Gen|Definite=Ind	2	det	_	GTtags=Gen,Indef
2	лангсо	ланго	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	3	nmod:lmod	_	GTtags=Relator,Po,Ine
3	сёрмадовксонтькак	сёрмадовкс	NOUN	N	Case=Gen|Clitic=Add|Definite=Def|Number=Sing	4	obj	_	GTtags=Sg,Gen,Def,Clitic=Gak
4	ловнызь	ловномс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl3,OcSg3|SpaceAfter=No
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
9	арась	арась	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Pres	4	conj	_	GTtags=Neg,Cop,Ind,Prs,ScSg3|SpaceAfter=No
10	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


