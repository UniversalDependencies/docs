---
layout: base
title:  'Statistics of acl:relcl in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `acl:relcl`

This relation is a language-specific subtype of .

2 nodes (0%) are attached to their parents as `acl:relcl`.

2 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.5.

The following 2 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl:relcl	color:blue
1	Сяда	сяда	PART	Pcle	Degree=Cmp	2	advmod:deg	_	GTtags=Comp
2	меле	меле	ADV	Adv	_	3	advmod:tmod	_	_
3	лиесь	лиемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
4	председательсь	председатель	NOUN	N	Case=Nom|Definite=Def|Number=Sing	3	nsubj	_	GTtags=Sg,Nom,Def
5	Каргалов	Каргалов	PROPN	N	Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	4	flat:name	_	GTtags=Prop,Sg,Nom,Indef|SpaceAfter=No
6	,	,	PUNCT	CLB	_	10	punct	_	_
7	конань	кона	PRON	Pron	Case=Gen|Definite=Ind|Number=Plur,Sing|PronType=Rel	8	nmod	_	GTtags=Rel,SP,Gen,Indef
8	шамац	шама	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	nsubj	_	GTtags=Sg,Nom,PxSg3
9	палозь	паломс	VERB	V	Derivation=Ozj|Valency=1|VerbForm=Conv	10	advcl	_	GTtags=IV,Der/Ozj,Ger
10	палсь	паломс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	4	acl:relcl	_	GTtags=IV,Ind,Prt1,ScSg3|SpaceAfter=No
11	,	,	PUNCT	CLB	_	15	punct	_	_
12	а	а	CCONJ	CC	_	15	cc	_	_
13	шалхка	шалхка	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	14	nmod:part	_	GTtags=Sg,Nom,Indef
14	пец	пе	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	15	nsubj:cop	_	GTtags=Sg,Nom,PxSg3
15	сенем	сенем	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	10	conj	_	GTtags=Sg,Nom,Indef
16	морозть	морозть	NOUN	N	Case=Gen|Definite=Def|Number=Sing	15	nmod	_	GTtags=Sg,Gen,Def
17	эзда	эзда	ADP	Adp	Case=Abl	16	case	_	GTtags=Abl|SpaceAfter=No
18	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 acl:relcl	color:blue
1	Эста	эста	ADV	Adv	Case=Temp	3	advmod:tmod	_	GTtags=Temp
2	стирьхне	стирь	NOUN	N	Case=Nom|Definite=Def|Number=Plur	3	nsubj	_	GTtags=Pl,Nom,Def
3	сявозь	сявомс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl3,OcSg3
4	Архипонь	Архип	PROPN	N	Case=Gen|Definite=Ind|NameType=Giv|Number=Plur,Sing	3	obj	_	GTtags=Prop,SP,Gen,Indef|SpaceAfter=No
5	,	,	PUNCT	CLB	_	11	punct	_	_
6	кона	кона	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Rel	11	nsubj:cop	_	GTtags=Rel,Sg,Nom,Indef
7	ульсь	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	11	cop	_	GTtags=IV,Ind,Prt1,ScSg3
8	синь	сон	PRON	Pron	Case=Gen|Number=Plur|Person=3|PronType=Prs	11	nmod	_	GTtags=Pers,Pl3,Gen
9	корязост	корязост	ADP	Adp	Number[psor]=Plur|Person[psor]=3	8	case	_	GTtags=PxPl3
10	сяда	сяда	PART	Pcle	Degree=Cmp	11	advmod:deg	_	GTtags=Comp
11	ёмла	ёмла	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	4	acl:relcl	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
12	,	,	PUNCT	CLB	_	11	punct	_	_
13	кядьта-пильгта	кядть-пилькт	NOUN	N	Case=Abl|Definite=Ind|Number=Plur,Sing	3	obl	_	GTtags=SP,Abl,Indef
14	и	и	CCONJ	CC	_	15	cc	_	_
15	нолдазь	нолдамс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Prt1|Valency=2	3	conj	_	GTtags=TV,Ind,Prt1,ScPl3,OcSg3
16	бохаряму	бохарям	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	15	obl:lmod	_	GTtags=SP,Lat,Indef|SpaceAfter=No
17	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


