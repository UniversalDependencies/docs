---
layout: base
title:  'Statistics of nmod:gsubj in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `nmod:gsubj`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-nmod.html">nmod</a></tt>.
There are also 5 other language-specific subtypes of `nmod`: <tt><a href="myv_jr-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="myv_jr-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="myv_jr-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="myv_jr-dep-nmod-part.html">nmod:part</a></tt>, <tt><a href="myv_jr-dep-nmod-poss.html">nmod:poss</a></tt>.

12 nodes (0%) are attached to their parents as `nmod:gsubj`.

12 instances of `nmod:gsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83333333333333.

The following 4 pairs of parts of speech are connected with `nmod:gsubj`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (7; 58% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (3; 25% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:gsubj	color:blue
1	А	а	AUX	Pcle	Polarity=Neg	2	aux:neg	_	GTtags=Neg
2	покш	покш	ADJ	A	_	3	amod	_	_
3	шкань	шка	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	4	nmod:gsubj	_	GTtags=SP,Gen,Indef
4	ютазь	ютамс	VERB	V	Derivation=Ozj|Valency=2|VerbForm=Conv	6	advcl	_	GTtags=TV,Der/Озь,Ger
5	чись	чи	NOUN	N	Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	GTtags=Sg,Nom,Def
6	чопавтсь	чопавтемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3
7	роштятнень	роштя	NOUN	N	Case=Gen|Definite=Def|Number=Plur	8	nmod:part	_	GTtags=Pl,Gen,Def
8	потмос	потмо	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	6	obl:lmod	_	GTtags=Sem/Plc,SP,Ill,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:gsubj	color:blue
1	Стяко	стяко	ADV	Adv	_	3	advmod	_	_
2	а	а	AUX	Pcle	Polarity=Neg	3	aux:neg	_	GTtags=Neg
3	ёми	ёмамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScSg3
4	Дуняшинэнь	Дуняшин	PROPN	N	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Masc|NameType=Sur|Number=Plur,Sing	5	nmod:gsubj	_	GTtags=Prop,Sur_Mal,SP,Gen,Indef
5	сёрмадомазо	сёрмадомс	VERB	V	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|Valency=2|VerbForm=Vnoun	3	nsubj	_	GTtags=TV,NomAct,N,Sg,Nom,PxSg3|SpaceAfter=No
6	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 nmod:gsubj	color:blue
1	―	―	PUNCT	PUNCT	_	3	punct	_	_
2	Звездов	звездов	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	nsubj	_	GTtags=Sg,Nom,Indef
3	ёвтнесь	ёвтнемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3|SpaceAfter=No
4	,	,	PUNCT	CLB	_	7	punct	_	_
5	кода	кода	ADV	Adv	AdvType=Man|PronType=Int	7	advmod	_	GTtags=Interr,Manner
6	поптнэ	поп	NOUN	N	Case=Nom|Definite=Def|Number=Plur	7	nsubj	_	GTtags=Pl,Nom,Def
7	анокстасть	анокстамс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=2	3	xcomp	_	GTtags=TV,Ind,Prt1,ScPl3
8	велеванть	веле	NOUN	N	Case=Prl|Definite=Def|Number=Sing	7	obl	_	GTtags=Sem/Plc,Sg,Prl,Def
9	ютавтомо	ютавтомс	VERB	V	Case=Loc|Valency=2|VerbForm=Inf	7	xcomp	_	GTtags=TV,Inf,Loc
10	велень	веле	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	11	nmod:poss	_	GTtags=Sem/Plc,SP,Gen,Indef
11	озкст	озкс	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	9	obj	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
12	,	,	PUNCT	CLB	_	16	punct	_	_
13	якстеретнень	якстере	ADJ	A	Case=Gen|Definite=Def|Number=Plur	16	nmod:gsubj	_	GTtags=Pl,Gen,Def
14	седе	седе	ADV	Adv	Degree=Cmp	15	advmod:deg	_	GTtags=Comp
15	курок	курок	ADV	Adv	AdvType=Tim	16	advmod:tmod	_	GTtags=Temp
16	маштовомаст	маштовома	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Plur|Person[psor]=3	11	conj	_	GTtags=Sg,Gen,PxPl3
17	кис	кис	ADP	Adp	_	16	case	_	_
18	ды	ды	CCONJ	CC	_	22	cc	_	_
19	Колчаконь	Колчак	PROPN	N	Case=Gen|Definite=Ind|NameType=Sur|Number=Plur,Sing	20	nmod:poss	_	GTtags=Prop,Sem/Sur,SP,Gen,Indef
20	армиянть	армия	NOUN	N	Case=Gen|Definite=Def|Number=Sing	22	nmod:poss	_	GTtags=Sg,Gen,Def
21	шумбра	шумбра	ADJ	A	_	22	compound	_	_
22	чинзэ	чи	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	conj	_	GTtags=Sg,Gen,PxSg3
23	кис	кис	ADP	Adp	_	22	case	_	GTtags=|SpaceAfter=No
24	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


