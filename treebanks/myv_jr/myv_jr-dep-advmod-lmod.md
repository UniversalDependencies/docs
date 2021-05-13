---
layout: base
title:  'Statistics of advmod:lmod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-advmod.html">advmod</a></tt>.
There are also 10 other language-specific subtypes of `advmod`: <tt><a href="myv_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="myv_jr-dep-advmod-comp.html">advmod:comp</a></tt>, <tt><a href="myv_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="myv_jr-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="myv_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="myv_jr-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="myv_jr-dep-advmod-lmp.html">advmod:lmp</a></tt>, <tt><a href="myv_jr-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="myv_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="myv_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

34 nodes (0%) are attached to their parents as `advmod:lmod`.

29 instances of `advmod:lmod` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.20588235294118.

The following 3 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (23; 68% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (8; 24% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (3; 9% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 advmod:lmod	color:blue
1	Виде	виде	ADJ	A	_	0	root	_	_
2	ли	ли	AUX	Pcle	_	1	aux:q	_	_
3	кияк	кияк	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	7	nsubj	_	GTtags=Indef,Sg,Nom
4	косояк	косояк	ADV	Adv	Case=Ine|Definite=Ind	7	advmod:lmod	_	GTtags=Indef,Ine
5	мезтькак	мезеяк	PRON	Pron	Case=Nom|Definite=Ind|Number=Plur|PronType=Ind	7	obj	_	GTtags=Indef,Pl,Nom,Indef
6	а	а	AUX	Pcle	Polarity=Neg	7	aux:neg	_	GTtags=Neg
7	тейни	тейнемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=2	1	conj	_	GTtags=TV,Ind,Prs,ScSg3|SpaceAfter=No
8	?..	?..	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:lmod	color:blue
1	Бути	бути	SCONJ	CS	Mood=Cnd	8	mark	_	GTtags=Cond
2	бу	бу	AUX	Pcle	Case=Nom|Definite=Ind|Number=Sing	8	aux:cnd	_	GTtags=Sg,Nom,Indef
3	а	а	AUX	Pcle	Polarity=Neg	4	aux:neg	_	GTtags=Neg
4	васоло	васоло	ADV	Adv	AdvType=Loc|Case=Loc	5	advmod:lmod	_	GTtags=Spat,Loc
5	таркатне	тарка	NOUN	N	Case=Nom|Definite=Def|Number=Plur	8	nsubj	_	GTtags=Sem/Inanim_Cnt,Pl,Nom,Def
6	—	—	PUNCT	CLB	_	8	punct	_	_
7	тыц	тыц	PART	Pcle	Case=Nom|Definite=Ind|Number=Sing	8	advmod	_	GTtags=Sg,Nom,Indef
8	пештявлизь	пештямс	VERB	V	Mood=Sub|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3	0	root	_	GTtags=Conj,ScPl3,OcSg3
9	весень	весе	PRON	Pron	Case=Gen|Definite=Ind|Number=Plur,Sing|PronType=Tot	8	obj	_	GTtags=Tot,SP,Gen,Indef
10	нетне	неть	PRON	Pron	Case=Nom|Definite=Def|Number=Plur|PronType=Dem	11	det	_	GTtags=Dem,Pl,Nom,Def
11	кедтнеде	кедь	NOUN	N	Case=Abl|Definite=Def|Number=Plur	8	obl	_	GTtags=Sem/Body_part,Pl,Abl,Def|SpaceAfter=No
12	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod:lmod	color:blue
1	Цярдань	Цярдань	PROPN	N	Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	7	obl	_	GTtags=Sem/Settlement,Sg,Nom,Indef
2	оштонть	ош	NOUN	N	Case=Abl|Definite=Def|Number=Sing	1	flat	_	GTtags=Sem/Inanim_Cnt,Sg,Abl,Def
3	башка	башка	ADV	Adv	_	2	case	_	_
4	истямо	истямо	ADV	Adv	Case=Nom|Definite=Ind|Number=Sing|PronType=Dem	5	advmod	_	GTtags=Dem,Sg,Nom,Indef
5	покш	покш	ADJ	A	_	6	amod	_	_
6	найман	найман	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	7	nsubj	_	GTtags=Sem/Inanim_Cnt,Sg,Nom,Indef
7	косояк	косояк	ADV	Adv	Case=Ine|PronType=Ind	8	advmod:lmod	_	GTtags=Indef,Ine
8	арась	арась	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Pres	0	root	_	GTtags=Neg,Cop,Ind,Prs,ScSg3|SpaceAfter=No
9	,	,	PUNCT	CLB	_	12	punct	_	_
10	косто	косто	ADV	Adv	AdvType=Loc|Case=Ela	12	advmod:lfrom	_	GTtags=Spat,Ela
11	бу	бу	AUX	Pcle	Case=Nom|Definite=Ind|Number=Sing	12	aux:cnd	_	GTtags=Sg,Nom,Indef
12	рамавлить	рамамс	VERB	V	Mood=Sub|Number[subj]=Sing|Person[subj]=2|Valency=2	6	acl:relcl	_	GTtags=TV,Conj,ScSg2|SpaceAfter=No
13	,	,	PUNCT	CLB	_	12	punct	_	_
14	мезе	мезе	PRON	Pron	PronType=Int	12	obj	_	GTtags=Interr
15	мелеть	мель	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	14	fixed	_	GTtags=Sg,Nom,PxSg2
16	ды	ды	CCONJ	CC	_	18	cc	_	_
17	тонськак	тонсь	PRON	Pron	Case=Nom|Clitic=Add|Number=Sing|Person=2|PronType=Prs|Reflex=Yes	18	nsubj	_	GTtags=Refl,2Sg,Nom,Clt/Gak
18	миевлик	миемс	VERB	V	Mood=Sub|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Valency=2	8	conj	_	GTtags=TV,Conj,ScSg2,OcSg3
19	ускозенть	ускомс	VERB	V	Case=Gen|Definite=Def|Derivation=Ozj|Number=Sing|VerbForm=Conv	18	obj	_	GTtags=Der/Озь,Ger,Sg,Gen,Def|SpaceAfter=No
20	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


