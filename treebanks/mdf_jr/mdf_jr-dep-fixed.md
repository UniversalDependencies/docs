---
layout: base
title:  'Statistics of fixed in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `fixed`

This relation is universal.

10 nodes (0%) are attached to their parents as `fixed`.

10 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 9 pairs of parts of speech are connected with `fixed`: <tt><a href="mdf_jr-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (2; 20% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-CCONJ.html">CCONJ</a></tt> (1; 10% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="mdf_jr-pos-DET.html">DET</a></tt> (1; 10% instances), <tt><a href="mdf_jr-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="mdf_jr-pos-CCONJ.html">CCONJ</a></tt> (1; 10% instances), <tt><a href="mdf_jr-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="mdf_jr-pos-SCONJ.html">SCONJ</a></tt> (1; 10% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	Шумбрат	шумбра	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|Number[subj]=Sing|Person[subj]=2|Tense=Pres	5	discourse	_	CGdephead=#1-&gt;0|CGdeprel=@PRED|GTtags=Sg,Nom,Indef,Clt/Cop,Prs,ScSg2|SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	CGdephead=#2-&gt;1|CGdeprel=@CLB|GTtags=CLB
3	атяй	атя	NOUN	N	_	5	vocative	_	CGdephead=#3-&gt;3|CGdeprel=@ADDR|GTtags=Voc|SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	CGdephead=#4-&gt;3|CGdeprel=@CLB|GTtags=CLB
5	ськамот	ськамот	PRON	Pron	Number[psor]=Sing|Person[psor]=2	0	root	_	CGdephead=#5-&gt;0|CGdeprel=@X|GTtags=Exclusive,PerifMod,PxSg2
6	што	што	SCONJ	CS	_	5	parataxis	_	CGdephead=#6-&gt;6|CGdeprel=@SC|GTtags=
7	ли	ли	AUX	_	_	6	fixed	_	CGdephead=#7-&gt;7|CGdeprel=@&lt;QST|GTtags=Use/SpellNoSugg,Pcle,Qst|SpaceAfter=No
8	?	?	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	Мондейне	мон	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Long	4	obl	_	GTtags=Pers,Sg1,Dat,Long
2	сон	сон	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg3,Nom
3	ашезь	аш	AUX	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	4	aux	_	GTtags=Aux,Neg,Ind,Prt1,ScSg3
4	сатов	сатовомс	VERB	_	Connegative=Yes	0	root	_	GTtags=IV,ConNeg|SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	сяс	сяс	ADV	_	_	8	mark	_	_
7	мес	мес	ADV	_	_	6	fixed	_	_
8	ласьксь	ласькомс	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	4	advcl	_	GTtags=Ind,Prt1,ScSg3
9	пяк	пяк	ADV	_	AdvType=Deg	10	advmod:deg	_	GTtags=AdA
10	вишкста	вишкста	ADV	Adv	AdvType=Man	8	advmod:mmod	_	SpaceAfter=No
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
8	кулят	кулемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|VerbForm=Fin	3	conj	_	GTtags=Ind,Prs,ScSg2
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
20	аф	аф	AUX	_	Polarity=Neg|VerbType=Aux	21	aux	_	GTtags=Aux,Neg
21	мярьгондяряй	мярьгомс	VERB	V	Derivation=Cond|Mood=Ind|Number[subj]=Sing|Person[subj]=3	25	advcl	_	GTtags=Cond,ScSg3
22	тяфта	тяфта	ADV	Adv	_	21	advmod	_	SpaceAfter=No
23	,	,	PUNCT	_	_	21	punct	_	_
24	ломаттне	ломань	NOUN	N	Case=Nom|Definite=Def|Number=Plur	25	nsubj	_	GTtags=Pl,Nom,Def
25	илядыхть	илядомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|VerbForm=Fin	3	conj	_	GTtags=Ind,Prs,ScPl3
26	вачедоня	вачедоня	ADV	Adv	_	25	advcl	_	SpaceAfter=No
27	.	.	PUNCT	_	_	3	punct	_	_

~~~


