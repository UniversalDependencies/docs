---
layout: base
title:  'Statistics of advmod:cmp in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `advmod:cmp`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-advmod.html">advmod</a></tt>.
There are also 7 other language-specific subtypes of `advmod`: <tt><a href="myv_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="myv_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="myv_jr-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="myv_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="myv_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="myv_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="myv_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

33 nodes (0%) are attached to their parents as `advmod:cmp`.

33 instances of `advmod:cmp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `advmod:cmp`: <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (21; 64% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (10; 30% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:cmp	color:blue
1	—	—	PUNCT	PUNCT	_	4	punct	_	_
2	Микол	Микол	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	4	vocative	_	GTtags=Prop,Ant_Mal,Sg,Nom,Indef|SpaceAfter=No
3	,	,	PUNCT	CLB	_	2	punct	_	_
4	стяк	стямс	VERB	V	Mood=Imp|Number[subj]=Sing|Person[subj]=2|Valency=1	0	root	_	GTtags=IV,Imprt,ScSg2
5	седе	седе	ADV	Adv	Degree=Cmp	6	advmod:cmp	_	GTtags=Comp
6	курок	курок	ADV	Adv	AdvType=Tim	4	advmod:tmod	_	GTtags=Temp|SpaceAfter=No
7	!	!	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:cmp	color:blue
1	Конась	кона	DET	Det	Case=Nom|Definite=Def|Number=Sing|PronType=Int	3	nsubj	_	GTtags=Interr,Sg,Nom,Def
2	седе	седе	ADV	Adv	Degree=Cmp	3	advmod:cmp	_	GTtags=Comp
3	мазый	мазый	ADJ	A	Number[subj]=Sing|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Prs,ScSg3
4	эсь	эсь	DET	Det	Reflex=Yes	5	det	_	GTtags=Refl,Adn
5	ютковаст	ютко	NOUN	N	Case=Prl|NounType=Relat|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3	3	obl:lmod	_	GTtags=Sem/Plc,SP,Prl,PxPl3|SpaceAfter=No
6	?	?	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 advmod:cmp	color:blue
1	Чинь-чоп	Чинь-чоп	ADV	Adv	AdvType=Tim	3	advmod:tmod	_	GTtags=Temp
2	кармавлинь	кармамс	AUX	V	Mood=Sub|Number[subj]=Sing|Person[subj]=1|Valency=1	3	aux:aspect	_	GTtags=IV,Conj,ScSg1
3	шешкеме	шешкемс	VERB	V	Case=Loc|Valency=2|VerbForm=Inf	0	root	_	GTtags=TV,Inf,Loc
4	моданть	мода	NOUN	N	Case=Gen|Definite=Def|Number=Sing	3	obj	_	GTtags=Sg,Gen,Def|SpaceAfter=No
5	,	,	PUNCT	CLB	_	9	punct	_	_
6	ансяк	ансяк	ADV	Adv	_	9	advmod	_	GTtags=Exclusive
7	седе	седе	ADV	Pcle	Degree=Cmp	8	advmod:cmp	_	GTtags=Adv,Comp
8	куроксто	куроксто	ADV	Adv	AdvType=Tim	9	advmod:tmod	_	GTtags=Temp
9	лисевель	лисемс	VERB	V	Mood=Sub|Number[subj]=Sing|Person[subj]=3|Valency=1	3	conj	_	GTtags=IV,Conj,ScSg3|SpaceAfter=No
10	,	,	PUNCT	CLB	_	13	punct	_	_
11	седе	седе	PART	Pcle	Degree=Cmp	12	advmod:cmp	_	GTtags=Adv,Comp
12	курок	курок	ADV	Adv	AdvType=Tim	13	advmod:tmod	_	GTtags=Temp
13	касоволь	касомс	VERB	V	Mood=Sub|Number[subj]=Sing|Person[subj]=3|Valency=1	3	conj	_	GTtags=IV,Conj,ScSg3|SpaceAfter=No
14	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


