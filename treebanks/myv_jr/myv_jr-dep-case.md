---
layout: base
title:  'Statistics of case in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `case`

This relation is universal.

319 nodes (2%) are attached to their parents as `case`.

314 instances of `case` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07210031347962.

The following 12 pairs of parts of speech are connected with `case`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (230; 72% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (31; 10% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (22; 7% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (18; 6% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (7; 2% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="myv_jr-pos-NUM.html">NUM</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-DET.html">DET</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-DET.html">DET</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 case	color:blue
1	―	―	PUNCT	PUNCT	_	2	punct	_	_
2	Совсинек	совсемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=1|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScPl1
3	Звездов	Звездов	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Masc|NameType=Sur|Number=Sing	2	obl	_	GTtags=Sur_Mal,Prop,Sg,Nom,Indef
4	ялгат	ялга	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=2	3	nmod	_	GTtags=Sg,Gen,PxSg2
5	туртов	туртов	ADP	Adp	Case=Dat	4	case	_	GTtags=Dat|SpaceAfter=No
6	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case	color:blue
1	Мельганзо	мельга	PRON	Pron	AdvType=Loc|Number[psor]=Sing|Person[psor]=3	2	obl	_	GTtags=Spat,PxSg3
2	мольсть	молемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScPl3
3	вейке-вейке	вейке-вейке	PRON	Pron	PronType=Rcp	2	obl	_	GTtags=Recip
4	мельга	мельга	ADP	Adp	AdvType=Loc	3	case	_	GTtags=Spat
5	кадовикс	кадовикс	ADJ	A	_	6	amod	_	_
6	партизантнэ	партизан	NOUN	N	Case=Nom|Definite=Def|Number=Plur	2	nsubj	_	GTtags=Pl,Nom,Def|SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 case	color:blue
1	Ястребов	Ястребов	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Masc|NameType=Sur|Number=Sing	3	nsubj	_	GTtags=Prop,Sur_Mal,Sg,Nom,Indef
2	ёртозь	ёртомс	VERB	V	Derivation=Ozj|Valency=2|VerbForm=Conv	3	advcl	_	GTtags=TV,Der/Озь,Ger
3	ёртовсь	ёртовомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	чиезь	чиемс	VERB	V	Derivation=Ozj|Valency=1|VerbForm=Conv	6	advcl	_	GTtags=IV,Der/Озь,Ger
6	совась	совамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	3	conj	_	GTtags=IV,Ind,Prt1,ScSg3
7	кудонтень	кудо	NOUN	N	Case=Dat|Definite=Def|Number=Sing	6	obl	_	GTtags=Sem/Plc,Sg,Dat,Def
8	Любань	Люба	PROPN	N	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Fem|NameType=Giv|Number=Plur,Sing	6	obl	_	GTtags=Prop,Ant_Fem,SP,Gen,Indef
9	ваксс	ваксс	ADP	Adp	AdvType=Loc|Case=Ill	8	case	_	GTtags=Relator,Spat,Ill|SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


