---
layout: base
title:  'Statistics of advmod:tmod in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="mdf_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="mdf_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>.

28 nodes (2%) are attached to their parents as `advmod:tmod`.

21 instances of `advmod:tmod` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.96428571428571.

The following 3 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (25; 89% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (2; 7% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 advmod:tmod	color:blue
1	А	а	CCONJ	CC	_	2	cc	_	_
2	касан	касомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	0	root	_	_
3	пяк	пяк	ADV	Adv	AdvType=Deg	4	advmod:deg	_	_
4	савор	савор	ADV	Adv	_	2	advmod	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	9	punct	_	_
6	нинге	нинге	ADV	Adv	AdvType=Tim	9	advmod:tmod	_	_
7	школавга	школа	NOUN	N	Case=Lat|Clitic=AddGA|Definite=Ind|Number=Plur,Sing	9	obl:lmod	_	_
8	аф	аф	AUX	Aux	Polarity=Neg	9	aux:neg	_	_
9	якан	якамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	2	conj	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod:tmod	color:blue
1	Мъзяра	мзяра	ADV	Adv	PronType=Int|Style=Ped	3	advmod:tmod	_	GTtags=Interr|ModernForm=Мзяра
2	ранендаф	ранендамс	VERB	V	Derivation=F|Valency=1|VerbForm=Part	3	advcl	_	GTtags=IV,PrfPrc
3	солдатонди	солдат	NOUN	N	Case=Dat|Definite=Ind|Number=Plur,Sing	5	obl	_	GTtags=SP,Dat,Indef
4	Людась	Люда	NOUN	N	Case=Nom|Definite=Def|Number=Sing	5	nsubj	_	GTtags=Prop,Sem/Fem,Sg,Nom,Def
5	лездсь	лездомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
6	стямс	стямс	VERB	V	Valency=1|VerbForm=Inf	5	xcomp	_	GTtags=IV,Inf
7	пильге	пильге	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	6	obl:lmod	_	GTtags=Sg,Nom,Indef
8	лангс	ланга	ADP	Adp	Case=Ill	7	case	_	GTtags=Ill|SpaceAfter=No
9	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 advmod:tmod	color:blue
1	Эрь	эрь	DET	Det	Case=Nom|Definite=Ind|Number=Sing	2	det	_	_
2	шиня	ши	NOUN	N	Case=Temp|Definite=Ind|Number=Sing	3	obl:tmod	_	_
3	стяшендан	стяшендомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	0	root	_	_
4	табуреткать	табуретка	NOUN	N	Case=Gen|Definite=Def|Number=Sing	3	obl:lmod	_	_
5	лангс	ланга	ADP	Adp	Case=Ill	3	case	_	_
6	и	и	CCONJ	CC	_	8	cc	_	_
7	кяднень	кядь	NOUN	N	Case=Gen|Number=Plur|Number[psor]=Sing|Person[psor]=1	8	obj	_	_
8	венепнесайне	венепнемс	VERB	V	Mood=Ind|Number[obj]=Plur|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Pres|Valency=2	3	conj	_	_
9	поталакти	поталак	NOUN	N	Case=Dat|Definite=Def|Number=Sing	8	obl:lmod	_	SpaceAfter=No
10	,	,	PUNCT	CLB	_	14	punct	_	_
11	а	а	CCONJ	CC	_	14	cc	_	_
12	поталаксь	поталак	NOUN	N	Case=Nom|Definite=Def|Number=Sing	14	nsubj	_	_
13	нинге	нинге	ADV	Adv	AdvType=Tim	14	advmod:tmod	_	_
14	вяре	вяре	ADV	Adv	_	3	conj	_	SpaceAfter=No
15	,	,	PUNCT	CLB	_	16	punct	_	_
16	вяре	вяре	ADV	Adv	_	14	conj	_	SpaceAfter=No
17	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


