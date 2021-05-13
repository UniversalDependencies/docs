---
layout: base
title:  'Statistics of csubj in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="myv_jr-dep-csubj-cop.html">csubj:cop</a></tt>.

19 nodes (0%) are attached to their parents as `csubj`.

16 instances of `csubj` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.42105263157895.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (10; 53% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (4; 21% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 5% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	Маряви	марявомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScSg3|Gloss=can-be-heard
2	лоткасть	лоткамс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	1	csubj	_	GTtags=IV,Ind,Prt1,ScPl3|Gloss=stop
3	зняро	зняро	ADV	Adv	PronType=Rel	5	advmod	_	GTtags=Rel|Gloss=small-number-of
4	бутим	бутим	ADV	Adv	_	3	fixed	_	_
5	ломать	ломань	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	2	nsubj	_	GTtags=Pl,Nom,Indef,Err/Orth|Gloss=person
6	Миколонь	Микол	PROPN	N	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Masc|NameType=Giv|Number=Plur,Sing	7	nmod	_	GTtags=Prop,Ant_Mal,SP,Gen,Indef|Gloss=Mikol
7	кудонть	кудо	NOUN	N	Case=Gen|Definite=Def|Number=Sing	2	obl	_	GTtags=Sem/Plc,Sg,Gen,Def|Gloss=house
8	икелев	икеле	ADP	Adp	AdvType=Loc|Case=Lat	7	case	_	GTtags=Relator,Spat,Lat|Gloss=in-front|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Стака	стака	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef
2	ульнесь	ульнемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	1	cop	_	GTtags=IV,Ind,Prt1,ScSg3
3	велявтомс	велявтомс	VERB	V	Valency=1|VerbForm=Inf	1	csubj	_	GTtags=IV,Inf
4	вейке	вейке	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	5	nummod	_	GTtags=Card,Sg,Nom,Indef
5	бока	бока	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	6	nmod	_	GTtags=Relator,Sg,Nom,Indef
6	лангсто	ланго	NOUN	N	Case=Ela|Definite=Ind|NounType=Relat|Number=Plur,Sing	3	obl:lfrom	_	GTtags=Relator,SP,Ela,Indef
7	омбоцес	омбоце	ADJ	A	Case=Ill|Definite=Ind|Number=Plur,Sing|NumType=Ord	5	conj	_	GTtags=Ord,SP,Ill,Indef|SpaceAfter=No
8	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj	color:blue
1	—	—	PUNCT	PUNCT	_	2	punct	_	_
2	Паро	паро	ADJ	A	_	0	root	_	_
3	се	се	DET	Det	Number=Sing|PronType=Dem	4	det	_	GTtags=Dem,Sg
4	шкане	шка	NOUN	N	Case=Tem|Definite=Ind|Number=Plur,Sing	5	obl	_	GTtags=SP,TempCx,Indef
5	вирьсэлить	вирь	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing|Number[subj]=Sing|Person[subj]=2|Tense=Past	2	csubj	_	GTtags=Sem/Plc,SP,Ine,Indef,Prt2,ScSg2
6	—	—	PUNCT	PUNCT	_	7	punct	_	_
7	маштовлидизь	маштомс	VERB	V	Mood=Sub|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=2|Person[subj]=3|Valency=2	5	conj	_	GTtags=TV,Hom2,Conj,ScPl3,OcSg2
8	тонть	тон	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	7	obj	_	GTtags=Pers,Sg2,Err/Orth,Dial,Gen|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


