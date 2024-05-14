---
layout: base
title:  'Statistics of cc:preconj in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-cc.html">cc</a></tt>.

5 nodes (0%) are attached to their parents as `cc:preconj`.

5 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.6.

The following 3 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-CCONJ.html">CCONJ</a></tt> (3; 60% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 20% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	Сясы	сяс	SCONJ	CS	Clitic=I	5	mark	_	_
2	синь	сон	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	_
3	сембе	сембе	ADV	Adv	_	2	advmod	_	_
4	и	и	CCONJ	CC	_	5	cc:preconj	_	_
5	лётчикт	лётчик	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	0	root	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	и	и	CCONJ	CC	_	8	cc	_	_
8	космонавтт	космонавт	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	5	conj	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	Кати	кати	ADV	Adv	_	3	cc:preconj	_	_
2	стака	стака	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	3	amod	_	GTtags=Sg,Nom,Indef
3	мяльхне	мяль	NOUN	N	Case=Nom|Definite=Def|Number=Plur	8	nsubj	_	GTtags=Pl,Nom,Def|SpaceAfter=No
4	,	,	PUNCT	CLB	_	7	punct	_	_
5	кати	кати	ADV	Adv	_	7	cc	_	_
6	вишкста	вишкста	ADV	Adv	_	7	advmod:mmod	_	_
7	ардомась	ардомс	VERB	V	Case=Nom|Definite=Def|Number=Sing|VerbForm=Vnoun	3	conj	_	GTtags=IV,Der/NomAct,Sg,Nom,Def
8	сизефтезе	сизефтемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past	0	root	_	GTtags=TV,Ind,Prt1,ScSg3,OcSg3
9	Малининонь	Малинин	NOUN	N	Case=Gen|Definite=Ind|NameType=Sur|Number=Plur,Sing	8	obj	_	GTtags=Prop,Sem/Sur-Mal,SP,Gen,Indef|SpaceAfter=No
10	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc:preconj	color:blue
1	Ня	ня	DET	Det	Number=Plur|PronType=Dem	3	det	_	CGdephead=#1-&gt;0|CGdeprel=@X|GTtags=Dem,Pl
2	колма	колма	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	3	nummod	_	CGdephead=#2-&gt;3|CGdeprel=@&gt;N|GTtags=Card,Sg,Nom,Indef
3	стирнятне	стирня	NOUN	N	Case=Nom|Definite=Def|Number=Plur	4	nsubj	_	CGdephead=#3-&gt;4|CGdeprel=@SUBJ&gt;|GTtags=Pl,Nom,Def
4	кельгсазь	кельгомс	VERB	V	Mood=Ind|Number[obj]=Plur|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Pres	0	root	_	CGdephead=#4-&gt;0|CGdeprel=@FMV|GTtags=TV,Ind,Prs,ScPl3,OcPl3
5	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	7	cc:preconj	_	CGdephead=#5-&gt;5|CGdeprel=@-F&lt;AUXV|GTtags=Aux,Neg
6	аньцек	аньцек	ADV	Adv	_	5	fixed	_	CGdephead=#6-&gt;5|CGdeprel=@&lt;ADVL|GTtags=
7	покодемаснон	покодемс	VERB	V	Case=Gen|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3|VerbForm=Vnoun	4	obj	_	CGdephead=#7-&gt;5|CGdeprel=@IMV|GTtags=IV,NomAct,SP,Gen,PxPl3|SpaceAfter=No
8	,	,	PUNCT	CLB	_	11	punct	_	CGdephead=#8-&gt;9|CGdeprel=@CLB|GTtags=CLB
9	но	но	CCONJ	CC	_	11	cc	_	CGdephead=#9-&gt;9|CGdeprel=@CC|GTtags=
10	и	и	CCONJ	CC	_	9	fixed	_	CGdephead=#10-&gt;10|CGdeprel=@CC|GTtags=
11	морамаснон	морамс	VERB	V	Case=Gen|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3|VerbForm=Vnoun	7	conj	_	CGdephead=#11-&gt;7|CGdeprel=@IMV|GTtags=IV,NomAct,SP,Gen,PxPl3|SpaceAfter=No
12	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


