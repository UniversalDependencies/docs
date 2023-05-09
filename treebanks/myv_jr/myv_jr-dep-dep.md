---
layout: base
title:  'Statistics of dep in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `dep`

This relation is universal.

3 nodes (0%) are attached to their parents as `dep`.

2 instances of `dep` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.33333333333333.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 33% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 33% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dep	color:blue
1	Нама	нама	ADV	Pcle	_	4	dep	_	CGdephead=#1-&gt;0|CGdeprel=@X|GTtags=|SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	CGdephead=#2-&gt;1|CGdeprel=@CLB|GTtags=CLB
3	а	а	AUX	V	Polarity=Neg|VerbType=Aux	4	aux:neg	_	CGdephead=#3-&gt;3|CGdeprel=@-FAUXV&gt;|GTtags=Aux,Neg
4	удыть	удомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres	0	root	_	CGdephead=#4-&gt;0|CGdeprel=@FMV|GTtags=IV,Ind,Prs,ScPl3
5	ошонь	ош	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	6	nmod	_	CGdephead=#5-&gt;6|CGdeprel=@&gt;N|GTtags=SP,Gen,Indef
6	пирявтонть	пирявт	NOUN	N	Case=Gen|Definite=Def|Number=Sing	7	nmod	_	CGdephead=#6-&gt;7|CGdeprel=@&gt;N|GTtags=Sg,Gen,Def
7	прясо	пря	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	8	acl	_	CGdephead=#7-&gt;4|CGdeprel=@&lt;ADVL|GTtags=SP,Ine,Indef,Der/MWN,N,Pl,Nom,Def,Clt/Add
8	тнеяк	ось	PRON	_	Case=Nom|Clitic=Add|Definite=Def|Number=Plur	4	nsubj	_	_
9	...	...	PUNCT	CLB	_	4	punct	_	CGdephead=#8-&gt;4|CGdeprel=@CLB|GTtags=CLB

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 dep	color:blue
1	Пиже	пиже	ADJ	A	_	2	amod	_	_
2	чекеренть	чекерь	NOUN	N	Case=Gen|Definite=Def|Number=Sing	4	obl	_	GTtags=Sg,Gen,Def
3	алдо	алдо	ADP	Adp	AdvType=Loc|Case=Abl	2	case	_	GTtags=Relator,Spat,Abl
4	содавсь	содавомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
5	ансяк	ансяк	ADV	Adv	_	4	advmod	_	GTtags=Exclusive
6	(	(	PUNCT	PUNCT	_	7	punct	_	GTtags=LEFT|SpaceAfter=No
7	сеяк	се	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Dem	4	dep	_	GTtags=Dem,Sg,Nom,Indef
8	аламнеде	аламнеде	ADV	Adv	_	7	advmod	_	GTtags=|SpaceAfter=No
9	)	)	PUNCT	PUNCT	_	7	punct	_	GTtags=RIGHT
10	Христозонть	Христоз	PROPN	PROPN	Case=Gen|Definite=Def|NameType=Oth|Number=Sing	11	nmod	_	GTtags=Sem/Ant_Mal,Sg,Gen,Def
11	судозо	судо	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	GTtags=Sg,Nom,PxSg3|SpaceAfter=No
12	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep	color:blue
1	Эсест	сонсь	PRON	Pron	Case=Gen|Number=Plur|Person=3|PronType=Prs|Reflex=Yes|Variant=Short	2	det	_	CGdephead=#1-&gt;2|CGdeprel=@&gt;N|GTtags=Refl,Pl3,Gen,Short
2	кудов	кудо	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	4	obl:lmod	_	CGdephead=#2-&gt;4|CGdeprel=@ADVL&gt;|GTtags=SP,Lat,Indef
3	Валдаж	Валдаж	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	4	dep	_	CGdephead=#3-&gt;0|CGdeprel=@X|GTtags=?
4	пачкодсь	пачкодемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	CGdephead=#4-&gt;0|CGdeprel=@FMV|GTtags=IV,Ind,Prt1,ScSg3|SpaceAfter=No
5	...	...	PUNCT	CLB	_	4	punct	_	CGdephead=#5-&gt;4|CGdeprel=@CLB|GTtags=CLB

~~~


