---
layout: base
title:  'Statistics of nmod:part in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `nmod:part`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-nmod.html">nmod</a></tt>.
There are also 5 other language-specific subtypes of `nmod`: <tt><a href="myv_jr-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="myv_jr-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="myv_jr-dep-nmod-gsubj.html">nmod:gsubj</a></tt>, <tt><a href="myv_jr-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="myv_jr-dep-nmod-poss.html">nmod:poss</a></tt>.

148 nodes (1%) are attached to their parents as `nmod:part`.

148 instances of `nmod:part` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.02027027027027.

The following 3 pairs of parts of speech are connected with `nmod:part`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (143; 97% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (4; 3% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:part	color:blue
1	Тарадтнэ	тарад	NOUN	N	Case=Nom|Definite=Def|Number=Plur	5	nsubj	_	GTtags=Pl,Nom,Def
2	апак	апак	AUX	Pcle	Polarity=Neg	3	aux:neg	_	GTtags=Neg
3	жаля	жалямс	VERB	V	Connegative=Yes|Valency=2	5	advcl	_	GTtags=TV,ConNeg|SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	_
5	риштьнесть	риштнемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScPl3
6	Любань	Люба	PROPN	N	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Fem|NameType=Giv|Number=Plur,Sing	5	obj	_	GTtags=Ant_Fem,Prop,SP,Gen,Indef
7	чама	чама	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	8	nmod:part	_	GTtags=Sg,Nom,Indef
8	ланга	ланго	NOUN	N	Case=Prl|Definite=Ind|Number=Plur,Sing	5	obl	_	GTtags=Relator,Prl|SpaceAfter=No
9	,	,	PUNCT	CLB	_	10	punct	_	_
10	сельме	сельме	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	11	nmod:part	_	GTtags=Sg,Nom,Indef
11	ланга	ланго	NOUN	N	Case=Prl|Definite=Ind|Number=Plur,Sing	5	obl:lmod	_	GTtags=Relator,Prl|SpaceAfter=No
12	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:part	color:blue
1	Ястребов	Ястребов	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Masc|NameType=Sur|Number=Sing	2	nsubj	_	GTtags=Sur_Mal,Prop,Sg,Nom,Indef
2	нуваргадсь	нуваргадомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
3	вельксэнзэ	велькс	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing|Number[psor]=Sing|Person[psor]=3	2	obl	_	GTtags=Relator,Ine,PxSg3|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	кедензэ	кедь	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obj	_	GTtags=Sg,Gen,PxSg3
6	путызе	путомс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past|Valency=2	2	conj	_	GTtags=TV,Ind,Prt1,ScSg3,OcSg3
7	Любань	Люба	PROPN	N	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Fem|NameType=Giv|Number=Plur,Sing	8	nmod:part	_	GTtags=Prop,Ant_Fem,SP,Gen,Indef
8	коняс	коня	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	6	obl:lmod	_	GTtags=SP,Ill,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:part	color:blue
1	―	―	PUNCT	PUNCT	_	4	punct	_	_
2	Партизантнэ	партизан	NOUN	N	Case=Nom|Definite=Def|Number=Plur	4	nsubj	_	GTtags=Pl,Nom,Def
3	пряст	пря	NOUN	N	Case=Gen|Number=Plur|Number[psor]=Plur|Person[psor]=3	4	obj	_	GTtags=Sem/Plc,Pl,Gen,PxPl3
4	велявтызь	велявтомс	VERB	V	Mood=Ind|Number[obj]=Plur|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl3,OcPl3
5	сыцятнень	самс	VERB	V	Case=Gen|Definite=Def|Number=Plur|Tense=Pres|Valency=1|VerbForm=Part	6	nmod:part	_	GTtags=IV,Act,Prs,VerbForm=Part,A,Pl,Gen,Def
6	ёнов	ён	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	4	obl:lmod	_	GTtags=Relator,Spat,Lat|SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


