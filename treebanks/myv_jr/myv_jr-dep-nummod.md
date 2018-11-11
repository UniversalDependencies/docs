---
layout: base
title:  'Statistics of nummod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `nummod`

This relation is universal.

124 nodes (1%) are attached to their parents as `nummod`.

124 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14516129032258.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (108; 87% instances), <tt><a href="myv_jr-pos-ADP.html">ADP</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (7; 6% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-DET.html">DET</a></tt> (5; 4% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	―	―	PUNCT	PUNCT	_	6	punct	_	_
2	Колчаконь	Колчак	PROPN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	3	nmod	_	GTtags=Prop,Sem/Sur,SP,Gen,Indef
3	армиясто	армия	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	6	obl	_	GTtags=SP,Ela,Indef
4	кавто	кавто	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	5	nummod	_	GTtags=Card,Sg,Nom,Indef
5	полкт	полк	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	6	nsubj	_	GTtags=Sem/Plc,Pl,Nom,Indef
6	калавтсть	калавтомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl3|SpaceAfter=No
7	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	―	―	PUNCT	PUNCT	_	3	punct	_	_
2	Кавонест	кавонест	NUM	Num	Number[psor]=Plur|NumType=Sets|Person[psor]=3	3	det	_	GTtags=AssocColl,PxPl3
3	кундызь	кундамс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl3,OcSg3
4	Любань	Люба	PROPN	N	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Fem|NameType=Giv|Number=Plur,Sing	3	obj	_	GTtags=Ant_Fem,Prop,SP,Gen,Indef
5	кавто	кавто	NUM	Num	NumType=Card	6	nummod	_	GTtags=Card
6	ёндо	ёндо	ADP	Adp	AdvType=Loc|Case=Abl	3	obl	_	GTtags=Spat,Abl|SpaceAfter=No
7	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Чарькодтяно	чарькодемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=1|Tense=Pres|Valency=2	0	root	_	GTtags=TV,Ind,Prs,ScPl1|Gloss=understand
2	вейкенек-вейкенек	вейкенек-вейкенек	PRON	Pron	Number[psor]=Plur|Person[psor]=1|PronType=Rcp	1	obj	_	GTtags=Recip,PxPl1|Gloss=each-other
3	пель	пель	DET	Det	_	4	nummod	_	GTtags=Qnt|Gloss=half
4	валсто	вал	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	1	obl	_	GTtags=SP,Ela,Indef|Gloss=word|SpaceAfter=No
5	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


