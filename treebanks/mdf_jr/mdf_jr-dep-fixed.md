---
layout: base
title:  'Statistics of fixed in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `fixed`

This relation is universal.

6 nodes (0%) are attached to their parents as `fixed`.

6 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 6 pairs of parts of speech are connected with `fixed`: <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 17% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-CCONJ.html">CCONJ</a></tt> (1; 17% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="mdf_jr-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="mdf_jr-pos-SCONJ.html">SCONJ</a></tt> (1; 17% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 17% instances), <tt><a href="mdf_jr-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	Мондейне	мон	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Long	4	obl	_	GTtags=Pers,Sg1,Dat,Long
2	сон	сон	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg3,Nom
3	ашезь	аш	AUX	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	4	aux:neg	_	GTtags=Aux,Neg,Ind,Prt1,ScSg3
4	сатов	сатовомс	VERB	_	Connegative=Yes|Valency=1	0	root	_	GTtags=IV,ConNeg|SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	сяс	сяс	ADV	_	_	8	mark	_	_
7	мес	мес	ADV	_	_	6	fixed	_	_
8	ласьксь	ласькомс	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	4	advcl	_	GTtags=Ind,Prt1,ScSg3
9	пяк	пяк	ADV	_	AdvType=Deg	10	advmod:deg	_	GTtags=AdA
10	вишкста	вишкста	ADV	_	_	8	advmod:mmod	_	SpaceAfter=No
11	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	А	а	CCONJ	CC	_	3	cc	_	_
2	завтракамста	завтракамс	VERB	V	Case=Ela|VerbForm=Conv	3	advcl:tcl	_	GTtags=Ger,Ela
3	кой	кой	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	_
5	обедамста-ужнамста	обедамс-ужнамс	VERB	V	Case=Ela|VerbForm=Conv	8	advcl:tcl	_	GTtags=Ger,Ela
6	аньцек	аньцек	ADV	Adv	_	8	advmod	_	_
7	и	и	CCONJ	CC	_	6	fixed	_	_
8	кулят	кулемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres	3	conj	_	GTtags=Ind,Prs,ScSg2
9	сяка	сяка	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing	10	det	_	GTtags=Sg,Nom,Indef
10	валонц	вал	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	GTtags=Sg,Gen,PxSg3|SpaceAfter=No
11	:	:	PUNCT	_	_	13	punct	_	_
12	"	"	PUNCT	PUNCT	_	13	punct	_	SpaceAfter=No
13	Ярхцада	ярхцамс	VERB	V	Mood=Imp|Number[subj]=Plur|Person[subj]=2	10	appos	_	GTtags=Imprt,ScPl2|SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	_
15	ярхцада	ярхцамс	VERB	V	Mood=Imp|Number[subj]=Plur|Person[subj]=2	13	conj	_	GTtags=Imprt,ScPl2
16	...	...	PUNCT	_	_	15	punct	_	_
17	"	"	PUNCT	PUNCT	_	15	punct	_	SpaceAfter=No
18	,	,	PUNCT	_	_	21	punct	_	_
19	бта	бта	ADV	Adv	_	21	mark	_	_
20	аф	аф	AUX	_	Polarity=Neg|VerbType=Aux	21	aux:neg	_	GTtags=Aux,Neg
21	мярьгондяряй	мярьгомс	VERB	V	Mood=Cnd|Number[subj]=Sing|Person[subj]=3	25	advcl	_	GTtags=Cond,ScSg3
22	тяфта	тяфта	ADV	Adv	_	21	advmod	_	SpaceAfter=No
23	,	,	PUNCT	_	_	21	punct	_	_
24	ломаттне	ломань	NOUN	N	Case=Nom|Definite=Def|Number=Plur	25	nsubj	_	GTtags=Pl,Nom,Def
25	илядыхть	илядомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres	3	conj	_	GTtags=Ind,Prs,ScPl3
26	вачедоня	вачедоня	ADV	Adv	_	25	advcl	_	SpaceAfter=No
27	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Фёдор	Фёдор	PROPN	N	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	5	nsubj	_	GTtags=Prop,Sem/Mal,Sg,Nom,Indef
2	Михайлович	Михайлович	PROPN	N	Case=Nom|Definite=Ind|NameType=Pat|Number=Sing	1	flat:name	_	GTtags=Prop,Sem/Patr-Mal,Sg,Nom,Indef
3	туркс	туркс	ADV	Adv	_	5	advmod	_	_
4	сельмот	сельме	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	3	fixed	_	GTtags=Pl,Nom,Indef
5	варжакстсь	варжакстомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3
6	цёранц	цёра	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obl:lto	_	GTtags=Sg,Gen,PxSg3
7	лангс	ланга	ADP	Adp	Case=Ill|NounType=Relat	6	case	_	GTtags=Relator,SP,Ill,Indef|SpaceAfter=No
8	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


