---
layout: base
title:  'Statistics of compound in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `compound`

This relation is universal.
There are 3 language-specific subtypes of `compound`: <tt><a href="myv_jr-dep-compound-nn.html">compound:nn</a></tt>, <tt><a href="myv_jr-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="myv_jr-dep-compound-redup.html">compound:redup</a></tt>.

207 nodes (1%) are attached to their parents as `compound`.

171 instances of `compound` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13526570048309.

The following 15 pairs of parts of speech are connected with `compound`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (171; 83% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (9; 4% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (8; 4% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-NUM.html">NUM</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Велень	веле	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	2	nmod:poss	_	GTtags=Sem/Plc,SP,Gen,Indef
2	росась	роса	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def
3	эзь	а	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	4	aux:neg	_	_
4	костявт	костявомс	VERB	V	Connegative=Yes|Mood=Ind	0	root	_	GTtags=IV,Ind,ConNeg
5	валске	валске	NOUN	N	AdvType=Tim|Case=Nom|Definite=Ind|Number=Sing	6	compound	_	GTtags=Temp,Sg,Nom,Indef
6	мартонь	марто	NOUN	N	Case=Gen|Definite=Ind|NounType=Relat|Number=Plur,Sing	7	nmod	_	GTtags=Der/MWN,N,SP,Gen,Indef
7	чипайсэнть	чипай	NOUN	N	Case=Ine|Definite=Def|Number=Sing	4	obl:lmod	_	GTtags=Sg,Ine,Def|SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Кона	кона	DET	Det	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	3	obl	_	GTtags=Interr,Sg,Nom,Indef
2	пелев	пелев	ADV	Adv	AdvType=Loc	1	case	_	GTtags=Spat
3	ноцковтомс	ноцковтомс	VERB	V	VerbForm=Inf	0	root	_	GTtags=TV,Inf
4	ветямо	ветямс	VERB	V	Case=Nom|Definite=Ind|Number=Sing|VerbForm=Vnoun	5	compound	_	GTtags=TV,NomAct,Sg,Nom,Indef
5	пиксэнть	пикс	NOUN	N	Case=Gen|Definite=Def|Number=Sing	3	obj	_	GTtags=Sg,Gen,Def|SpaceAfter=No
6	?	?	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 compound	color:blue
1	Ваньськавт	Ваньськавтомс	VERB	V	Mood=Imp|Number[subj]=Sing|Person[subj]=2|Style=Arch	0	root	_	GTtags=IV,Imprt,ScSg2|ModernForm=Ванськавтт
2	эйсэнзэ	эйсэ	ADP	Adp	Case=Ine|Number[psor]=Sing|Person[psor]=3	1	obj	_	GTtags=Ine,PxSg3|SpaceAfter=No
3	,	,	PUNCT	CLB	_	5	punct	_	_
4	мон	мон	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	GTtags=Pers,Sg1,Nom
5	молян	молемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres	1	conj	_	GTtags=IV,Ind,Prs,ScSg1
6	ведь	ведь	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	7	obj	_	GTtags=Sg,Nom,Indef
7	кандан	кандомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres	5	compound	_	GTtags=TV,Ind,Prs,ScSg1|SpaceAfter=No
8	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


