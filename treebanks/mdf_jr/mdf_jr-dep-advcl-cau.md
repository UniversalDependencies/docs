---
layout: base
title:  'Statistics of advcl:cau in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advcl:cau`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-advcl.html">advcl</a></tt>.
There are also 1 other language-specific subtypes of `advcl`: <tt><a href="mdf_jr-dep-advcl-tcl.html">advcl:tcl</a></tt>.

3 nodes (0%) are attached to their parents as `advcl:cau`.

2 instances of `advcl:cau` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `advcl:cau`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advcl:cau	color:blue
1	Аф	аф	INTJ	Interj	Polarity=Neg	4	discourse	_	GTtags=Neg|SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	4	aux:neg	_	GTtags=Aux,Neg
4	эрявихть	эрявомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,ScPl3
5	Луканди	Лука	NOUN	N	Case=Dat|Definite=Ind|Number=Plur,Sing	4	obl	_	GTtags=Prop,SP,Dat,Indef
6	войнаса	война	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	7	obl:lmod	_	GTtags=SP,Ine,Indef
7	сяськоманкса	сяськомс	VERB	V	Case=Cau|Definite=Ind|Number=Plur,Sing|VerbForm=Vnoun	8	advcl:cau	_	GTtags=NomAct,SP,Cau,Indef
8	шнакшнематне	шнакшнемс	VERB	V	Case=Nom|Definite=Def|Number=Plur|VerbForm=Vnoun	4	nsubj	_	GTtags=NomAct,Pl,Nom,Def|SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advcl:cau	color:blue
1	Пашать	Паша	NOUN	N	Case=Gen|Definite=Def|Number=Sing	2	nmod:poss	_	GTtags=Prop,Sg,Gen,Def
2	шамац	шама	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	nsubj:cop	_	GTtags=Sg,Nom,PxSg3
3	акшель	акша	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Sg,Nom,Indef,Clt/Cop,Prt2,ScSg3
4	эводемать	эводемс	VERB	V	Case=Gen|Definite=Def|Number=Sing|VerbForm=Vnoun	3	advcl:cau	_	GTtags=NomAct,Sg,Gen,Def
5	эзда	эзда	ADP	Adp	Case=Abl	4	case	_	GTtags=Abl|SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


