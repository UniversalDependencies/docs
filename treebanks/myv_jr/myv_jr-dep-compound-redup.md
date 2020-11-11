---
layout: base
title:  'Statistics of compound:redup in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-compound.html">compound</a></tt>.
There are also 3 other language-specific subtypes of `compound`: <tt><a href="myv_jr-dep-compound-coll.html">compound:coll</a></tt>, <tt><a href="myv_jr-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="myv_jr-dep-compound-svc.html">compound:svc</a></tt>.

2 nodes (0%) are attached to their parents as `compound:redup`.

2 instances of `compound:redup` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound:redup`: <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 50% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:redup	color:blue
1	Сэтьместэ	сэтьместэ	ADV	Adv	Case=Ela	6	advmod	_	GTtags=Ela
2	сэтьместэ	сэтьместэ	ADV	Adv	_	1	compound:redup	_	_
3	чи	чи	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	5	compound	_	GTtags=Sg,Nom,Indef
4	лисема	лисема	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	5	compound	_	GTtags=Sg,Nom,Indef
5	ёнксось	ёнкс	NOUN	N	Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	GTtags=Sem/Plc,Sg,Nom,Def
6	кирвайсь	кирваземс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3|SpaceAfter=No
7	,	,	PUNCT	CLB	_	9	punct	_	_
8	ды	ды	CCONJ	CC	_	9	cc	_	_
9	тулкадизе	тулкадемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past|Valency=2	6	conj	_	GTtags=TV,Ind,Prt1,ScSg3,OcSg3
10	чопуданть	чопуда	NOUN	N	Case=Gen|Definite=Def|Number=Sing	9	obj	_	GTtags=Sg,Gen,Def
11	тайганть	тайга	NOUN	N	Case=Gen|Definite=Def|Number=Sing	12	nmod:part	_	GTtags=Sg,Gen,Def
12	вельксстэ	велькс	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	9	obl:lmod	_	GTtags=SP,Ela,Indef|SpaceAfter=No
13	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 compound:redup	color:blue
1	―	―	PUNCT	PUNCT	_	2	punct	_	_
2	Ура	ура	INTJ	Interj	_	0	root	_	GTtags=|SpaceAfter=No
3	!	!	PUNCT	CLB	_	2	punct	_	_
4	―	―	PUNCT	PUNCT	_	7	punct	_	_
5	таго	таго	ADV	Adv	AdvType=Tim	7	advmod:tmod	_	GTtags=Temp
6	весе	весе	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Tot	7	nsubj	_	GTtags=Tot,Sg,Nom,Indef
7	скокаесть	скокаемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	2	parataxis	_	GTtags=IV,Ind,Prt1,ScPl3
8	кенкшенть	кенкш	NOUN	N	Case=Gen|Definite=Def|Number=Sing	7	obl	_	GTtags=Sg,Gen,Def
9	икеле	икеле	ADP	Adp	AdvType=Loc|Case=Loc	8	case	_	GTtags=Relator,Spat,Loc|SpaceAfter=No
10	,	,	PUNCT	CLB	_	11	punct	_	_
11	кутморясть	кутморямс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=2	7	conj	_	GTtags=TV,Ind,Prt1,ScPl3|SpaceAfter=No
12	,	,	PUNCT	CLB	_	15	punct	_	_
13	вейкест	вейке	PRON	Pron	Case=Gen|Number=Sing|Number[psor]=Plur|Person[psor]=3|PronType=Rcp	15	obj	_	GTtags=Recip,Sg,Gen,PxPl3
14	вейкест	вейке	PRON	Pron	Case=Gen|Number=Sing|Number[psor]=Plur|Person[psor]=3|PronType=Rcp	13	compound:redup	_	GTtags=Recip,Sg,Gen,PxPl3
15	палсесть	палсемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=2	7	conj	_	GTtags=TV,Ind,Prt1,ScPl3|SpaceAfter=No
16	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


