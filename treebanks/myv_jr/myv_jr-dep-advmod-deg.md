---
layout: base
title:  'Statistics of advmod:deg in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `advmod:deg`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="myv_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="myv_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="myv_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

114 nodes (1%) are attached to their parents as `advmod:deg`.

114 instances of `advmod:deg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04385964912281.

The following 9 pairs of parts of speech are connected with `advmod:deg`: <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (56; 49% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (34; 30% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (10; 9% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (5; 4% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (3; 3% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-DET.html">DET</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:deg	color:blue
1	―	―	PUNCT	PUNCT	_	4	punct	_	_
2	Седе	седе	ADV	Adv	Degree=Cmp	3	advmod:deg	_	GTtags=Comp
3	васов	васов	ADV	Adv	AdvType=Loc|Case=Lat	4	obl	_	GTtags=Spat,Lat
4	молемс	молемс	VERB	V	Valency=1|VerbForm=Inf	6	advcl	_	GTtags=IV,Inf
5	вием	вий	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj	_	GTtags=Sg,Nom,PxSg1
6	арась	арась	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Pres	0	root	_	GTtags=Neg,Cop,Ind,Prs,ScSg3|SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	ох	ох	INTJ	Interj	_	10	discourse	_	GTtags=|SpaceAfter=No
9	,	,	PUNCT	CLB	_	8	punct	_	_
10	пран	прамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	6	conj	_	GTtags=IV,Ind,Prs,ScSg1|SpaceAfter=No
11	!	!	PUNCT	CLB	_	10	punct	_	_
12	―	―	PUNCT	PUNCT	_	14	punct	_	_
13	таго	таго	ADV	Adv	AdvType=Tim	14	advmod:tmod	_	GTtags=Temp
14	сергедевсь	серьгедевемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	6	parataxis	_	GTtags=IV,Ind,Prt1,ScSg3|SpaceAfter=No
15	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:deg	color:blue
1	―	―	PUNCT	PUNCT	_	3	punct	_	_
2	Пек	пек	ADV	Adv	AdvType=Deg	3	advmod:deg	_	GTtags=Degree
3	стака	стака	ADJ	A	_	0	root	_	_
4	ульнесь	ульнемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	3	cop	_	GTtags=IV,Ind,Prt1,ScSg3
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advmod:deg	color:blue
1	Шкаськак	Шка	NOUN	N	Case=Nom|Clitic=Add|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def,Clt/Гак
2	седе	седе	ADV	Adv	Degree=Cmp	4	advmod:deg	_	GTtags=Comp
3	илязо	иля	AUX	V	Mood=Opt|Number[subj]=Sing|Person[subj]=3|Polarity=Neg	4	aux:neg	_	GTtags=Neg,Opt,ScSg3
4	маряво	марявомс	VERB	V	Connegative=Yes|Derivation=OvtOms|Valency=1	0	root	_	GTtags=Der/ОвОмс,IV,ConNeg|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	эстетькак	тонсь	PRON	Pron	Case=Dat|Clitic=Add|Number=Sing|Person=2|PronType=Prs|Reflex=Yes|Variant=Short	4	conj	_	GTtags=Refl,Sg2,Dat,Short,Clt/Gak
7	мельспаро	мельспаро	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	6	nsubj	_	GTtags=Sem/Inanim_Cnt,Sg,Nom,Indef|SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


