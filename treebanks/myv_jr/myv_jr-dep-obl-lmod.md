---
layout: base
title:  'Statistics of obl:lmod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="myv_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="myv_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

159 nodes (1%) are attached to their parents as `obl:lmod`.

98 instances of `obl:lmod` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.45283018867925.

The following 7 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (144; 91% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (3; 2% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 obl:lmod	color:blue
1	Тарадтнэ	тарад	NOUN	N	Case=Nom|Definite=Def|Number=Plur	5	nsubj	_	GTtags=Pl,Nom,Def
2	апак	апак	AUX	Pcle	Polarity=Neg	3	aux:neg	_	GTtags=Neg
3	жаля	жалямс	VERB	V	Connegative=Yes|Valency=2	5	advcl	_	GTtags=TV,ConNeg|SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	_
5	риштьнесть	риштнемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScPl3
6	Любань	Люба	PROPN	N	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Fem|NameType=Giv|Number=Plur,Sing	5	obj	_	GTtags=Ant_Fem,Prop,SP,Gen,Indef
7	чама	чама	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	8	nmod:part	_	GTtags=Sg,Nom,Indef
8	ланга	ланго	NOUN	N	Case=Prl|Definite=Ind|Number=Plur,Sing	5	obl	_	GTtags=Relator,Prl|SpaceAfter=No
9	,	,	PUNCT	CLB	_	10	punct	_	_
10	сельме	сельме	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	11	nmod:part	_	GTtags=Sg,Nom,Indef
11	ланга	ланго	NOUN	N	Case=Prl|Definite=Ind|Number=Plur,Sing	5	obl:lmod	_	GTtags=Relator,Prl|SpaceAfter=No
12	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:lmod	color:blue
1	Веленть	веле	NOUN	N	Case=Gen|Definite=Def|Number=Sing	2	nmod:part	_	GTtags=Sem/Plc,Sg,Gen,Def
2	пелев	пель	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	4	obl:lmod	_	GTtags=Relator,Spat,Lat
3	ласте	ласте	ADV	Adv	_	4	advcl	_	_
4	ардыцят	ардыця	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	5	nsubj	_	GTtags=Pl,Nom,Indef
5	неявить	неявомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScPl3|SpaceAfter=No
6	:	:	PUNCT	CLB	_	5	punct	_	_
7	та	та	ADV	Adv	_	8	advmod	_	_
8	якстереть	якстере	ADJ	A	Number[subj]=Plur|Person[subj]=3|Tense=Pres	5	conj	_	GTtags=Prs,ScPl3|SpaceAfter=No
9	,	,	PUNCT	CLB	_	11	punct	_	_
10	та	та	ADV	Adv	_	11	advmod	_	_
11	бандит	бандит	NOUN	N	Case=Nom|Definite=Ind|Number=Plur|Number[subj]=Sing|Person[subj]=3|Tense=Pres	8	conj	_	GTtags=Pl,Nom,Indef,Prs,ScSg3|SpaceAfter=No
12	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 obl:lmod	color:blue
1	Якшамосо	якшамо	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	2	obl	_	GTtags=SP,Ine,Indef
2	наряжазь	наряжамс	VERB	V	Derivation=Ozj|VerbForm=Conv	4	advcl	_	GTtags=Der/Ozj,Ger
3	вальматнень	вальма	NOUN	N	Case=Gen|Definite=Def|Number=Plur	4	nmod	_	GTtags=Pl,Gen,Def
4	томбале	томбале	ADP	Adp	Case=Loc	9	obl:lmod	_	GTtags=Relator,Loc
5	февралень	февраль	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	7	nmod	_	GTtags=SP,Gen,Indef
6	кумболдыця	кумболдомс	VERB	V	Tense=Pres|VerbForm=Part	7	advcl	_	GTtags=Act,PrsPrc
7	валскесь	валске	NOUN	N	Case=Nom|Definite=Def|Number=Sing	9	nsubj	_	GTtags=Sg,Nom,Def
8	цяторсо	цятор	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	9	obl	_	GTtags=SP,Ine,Indef
9	пакштордсь	пакштордомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3|SpaceAfter=No
10	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


