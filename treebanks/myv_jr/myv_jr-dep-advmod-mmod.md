---
layout: base
title:  'Statistics of advmod:mmod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `advmod:mmod`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-advmod.html">advmod</a></tt>.
There are also 10 other language-specific subtypes of `advmod`: <tt><a href="myv_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="myv_jr-dep-advmod-comp.html">advmod:comp</a></tt>, <tt><a href="myv_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="myv_jr-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="myv_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="myv_jr-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="myv_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="myv_jr-dep-advmod-lmp.html">advmod:lmp</a></tt>, <tt><a href="myv_jr-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="myv_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

14 nodes (0%) are attached to their parents as `advmod:mmod`.

10 instances of `advmod:mmod` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.57142857142857.

The following 2 pairs of parts of speech are connected with `advmod:mmod`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (13; 93% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-DET.html">DET</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:mmod	color:blue
1	Партизантнэ	партизан	NOUN	N	Case=Nom|Definite=Def|Number=Plur	3	nsubj	_	GTtags=Pl,Nom,Def
2	пштистэ	пштистэ	ADV	Adv	AdvType=Man|Case=Ela	3	advmod:mmod	_	GTtags=Manner,Ela
3	кулсоность	кунсоломс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl3
4	Маскинэнь	Маскинэнь	PROPN	PROPN	Case=Gen|Definite=Ind|NameType=Sur|Number=Plur,Sing	3	obj	_	GTtags=SP,Gen,Indef|SpaceAfter=No
5	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 advmod:mmod	color:blue
1	Эрямось	эрямо	NOUN	N	Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	GTtags=Sg,Nom,Def
2	мерькась	мерькамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3
3	Живаевень	Живаев	NOUN	N	Animacy=Hum|Case=Gen|Definite=Ind|NameType=Sur|Number=Plur,Sing	2	obj	_	GTtags=Prop,Sem/Mal-Sur,SP,Gen,Indef
4	эрьва	эрьва	DET	Det	Case=Nom|Definite=Ind|Number=Sing	2	advmod:mmod	_	GTtags=Qnt,Sg,Nom,Indef
5	кода	кода	ADV	Adv	AdvType=Man|PronType=Int	4	fixed	_	GTtags=Interr,Manner|SpaceAfter=No
6	:	:	PUNCT	CLB	_	8	punct	_	_
7	мендязьгак	мендямс	VERB	V	Clitic=Add|Derivation=Ozj|VerbForm=Conv	8	advcl	_	GTtags=Der/Ozj,Ger,Clt/Add
8	мендясь	мендямс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	4	conj	_	GTtags=Ind,Prt1,ScSg3|SpaceAfter=No
9	,	,	PUNCT	CLB	_	11	punct	_	_
10	синдезьгак	синдемс	VERB	V	Clitic=Add|Derivation=Ozj|VerbForm=Conv	11	advcl	_	GTtags=Der/Ozj,Ger,Clt/Add
11	синдсь	синдемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	4	conj	_	GTtags=Ind,Prt1,ScSg3|SpaceAfter=No
12	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


