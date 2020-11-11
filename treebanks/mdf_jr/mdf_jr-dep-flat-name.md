---
layout: base
title:  'Statistics of flat:name in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-flat.html">flat</a></tt>.

9 nodes (1%) are attached to their parents as `flat:name`.

9 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `flat:name`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (5; 56% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (3; 33% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Монь	мон	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod:poss	_	GTtags=Pers,Sg1,Gen
2	атязе	атя	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	nsubj	_	GTtags=Sg,Nom,PxSg1
3	няендезе	няендемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3,OcSg3
4	Владимир	Владимир	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	obj	_	GTtags=Prop,Sem/Mal,Sg,Nom,Indef
5	Ильич	Ильич	NOUN	N	_	4	flat:name	_	GTtags=Prop,Sem/Patr
6	Ленинонь	Ленин	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	5	flat:name	_	GTtags=Prop,Sem/Sur-Mal,SP,Gen,Indef|SpaceAfter=No
7	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:name	color:blue
1	Слесарсь	слесарь	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def
2	Василь	Василь	PROPN	N	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	1	appos	_	GTtags=Prop,Sg,Nom,Indef
3	Васильевич	Васильевич	PROPN	N	Case=Nom|Definite=Ind|NameType=Pat|Number=Sing	2	flat:name	_	GTtags=Prop,Sem/Patr-Mal,Sg,Nom,Indef
4	тонгондсь	тонгондомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3
5	котёлть	котёл	NOUN	N	Case=Gen|Definite=Def|Number=Sing	4	obl:lmod	_	GTtags=Sg,Gen,Def
6	алу	алу	ADP	Adp	Case=Lat	5	case	_	GTtags=Relator,SP,Lat,Indef
7	досканят	доска	NOUN	N	Case=Nom|Definite=Ind|Derivation=Dimin|Number=Plur	4	obj	_	GTtags=Der/Dimin,N,Pl,Nom,Indef|SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
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


