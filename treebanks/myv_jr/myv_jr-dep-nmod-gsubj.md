---
layout: base
title:  'Statistics of nmod:gsubj in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `nmod:gsubj`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="myv_jr-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="myv_jr-dep-nmod-gobj.html">nmod:gobj</a></tt>.

9 nodes (0%) are attached to their parents as `nmod:gsubj`.

9 instances of `nmod:gsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.88888888888889.

The following 3 pairs of parts of speech are connected with `nmod:gsubj`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (5; 56% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (3; 33% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:gsubj	color:blue
1	А	а	PART	Pcle	Polarity=Neg	2	aux:neg	_	GTtags=Neg
2	покш	покш	ADJ	A	_	3	amod	_	_
3	шкань	шка	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	4	nmod:gsubj	_	GTtags=SP,Gen,Indef
4	ютазь	ютамс	VERB	V	Derivation=Ozj|Valency=2|VerbForm=Conv	6	advcl	_	GTtags=TV,Der/Озь,Ger
5	чись	чи	NOUN	N	Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	GTtags=Sg,Nom,Def
6	чопавтсь	чопавтемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3
7	роштятнень	роштя	NOUN	N	Case=Gen|Definite=Def|Number=Plur	6	obl	_	GTtags=Pl,Gen,Def
8	потмос	потмо	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	7	case	_	GTtags=Sem/Plc,SP,Ill,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:gsubj	color:blue
1	Стяко	стяко	ADV	Adv	_	3	advmod	_	_
2	а	а	PART	Pcle	Polarity=Neg	3	aux:neg	_	GTtags=Neg
3	ёми	ёмамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScSg3
4	Дуняшинэнь	Дуняшин	PROPN	N	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Masc|NameType=Sur|Number=Plur,Sing	5	nmod:gsubj	_	GTtags=Prop,Sur_Mal,SP,Gen,Indef
5	сёрмадомазо	сёрмадомс	VERB	V	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|Valency=2|VerbForm=Vnoun	3	nsubj	_	GTtags=TV,NomAct,N,Sg,Nom,PxSg3|SpaceAfter=No
6	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 15 nmod:gsubj	color:blue
1	Сонсь	сонсь	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	3	nsubj	_	GTtags=Refl,Sg3,Nom
2	яла	яла	ADV	Adv	AdvType=Tim	3	advmod	_	GTtags=Sem/Time
3	соракалесь	соракалемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
4	апак	апак	PART	Pcle	Polarity=Neg	5	aux:neg	_	GTtags=Neg
5	учо	учомс	VERB	V	Connegative=Yes|Valency=2	6	advcl	_	GTtags=TV,ConNeg
6	тамашанть	тамаша	NOUN	N	Case=Gen|Definite=Def|Number=Sing	3	obl	_	GTtags=Sg,Gen,Def
7	эйстэ	эйстэ	ADP	Adp	Case=Ela	6	case	_	GTtags=Ela
8	прясто	пря	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	3	advmod	_	GTtags=Sem/Plc,SP,Ela,Indef
9	пильгс	пильге	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	8	fixed	_	GTtags=SP,Ill,Indef|SpaceAfter=No
10	,	,	PUNCT	CLB	_	11	punct	_	_
11	учось	учомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=2	3	conj	_	GTtags=TV,Ind,Prt1,ScSg3
12	—	—	PUNCT	PUNCT	_	13	punct	_	_
13	витьксты	витькстамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	11	ccomp	_	GTtags=IV,Ind,Prs,ScSg3
14	кияк	кияк	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	13	nsubj	_	GTtags=Indef,Sg,Nom
15	сонзэ	сон	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	18	nmod:gsubj	_	GTtags=Pers,Sg3,Gen
16	омбоцеде	омбоцеде	ADV	Adv	AdvType=Tim|Case=Abl|NumType=Ord	18	advmod	_	GTtags=Ord,Sem/Time,Abl
17	мирденень	мирде	NOUN	N	Case=Dat|Definite=Ind|Number=Plur,Sing	18	obl	_	GTtags=Sem/Kin_Mal,SP,Dat,Indef
18	лисемадонть	лисемс	VERB	V	Case=Abl|Definite=Def|Number=Sing|Valency=1|VerbForm=Vnoun	13	obl	_	GTtags=IV,NomAct,Sg,Abl,Def
19	Елеськанень	Елеська	PROPN	N	Case=Dat|Definite=Ind|Number=Plur,Sing	13	obl	_	GTtags=Sem/Plc,SP,Dat,Indef
20	—	—	PUNCT	PUNCT	_	21	punct	_	_
21	ушодови	ушодовомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	13	conj	_	GTtags=IV,Ind,Prs,ScSg3
22	сёвнома	сёвномс	VERB	V	Case=Nom|Definite=Ind|Number=Sing|Valency=2|VerbForm=Vnoun	21	nsubj	_	GTtags=TV,NomAct,Sg,Nom,Indef
23	ды	ды	CCONJ	CC	_	24	cc	_	_
24	тюрезевемаяк	тюрезевемс	VERB	V	Case=Nom|Clitic=Gak|Definite=Ind|Number=Sing|Valency=1|VerbForm=Vnoun	22	conj	_	GTtags=IV,NomAct,Sg,Nom,Indef,Clitic=Gak|SpaceAfter=No
25	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


