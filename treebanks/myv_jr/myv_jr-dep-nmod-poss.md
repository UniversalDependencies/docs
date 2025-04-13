---
layout: base
title:  'Statistics of nmod:poss in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="myv_jr-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="myv_jr-dep-nmod-gsubj.html">nmod:gsubj</a></tt>, <tt><a href="myv_jr-dep-nmod-lmod.html">nmod:lmod</a></tt>.

101 nodes (0%) are attached to their parents as `nmod:poss`.

100 instances of `nmod:poss` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34653465346535.

The following 7 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (49; 49% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (29; 29% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (18; 18% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod:poss	color:blue
1	Кечай	Кечай	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	2	nsubj	_	GTtags=Ant_Mal,Sg,Nom,Indef
2	муизе	муемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past	0	root	_	GTtags=TV,Ind,Prt1,ScSg3,OcSg3
3	сельмсэнзэ	сельме	NOUN	N	Case=Ine|Number=Plur,Sing|Number[psor]=Sing|Person[psor]=3	2	obl:inst	_	GTtags=Sem/Body_part,SP,Ine,PxSg3
4	вере	вере	ADV	Adv	AdvType=Loc|Case=Loc	5	advmod:lmod	_	GTtags=Spat,Adv,Loc
5	кужосто	кужо	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	2	obl:lmod	_	GTtags=Sem/Inanim_Cnt,SP,Ela,Indef
6	эсест	эсь	PRON	Pron	Case=Gen|Number=Plur|Person=3|PronType=Prs|Reflex=Yes|Variant=Short	7	nmod:poss	_	GTtags=Refl,Pl3,Gen,Variant=Short
7	куронть	куро	NOUN	N	Case=Gen|Definite=Def|Number=Sing	2	obj	_	GTtags=Sem/Inanim_Cnt,Sg,Gen,Def|SpaceAfter=No
8	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Велень	веле	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	2	nmod:poss	_	GTtags=Sem/Plc,SP,Gen,Indef
2	росась	роса	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def
3	эзь	а	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	4	aux	_	_
4	костявт	костявомс	VERB	V	Connegative=Yes|Mood=Ind	0	root	_	GTtags=IV,Ind,ConNeg
5	валске	валске	NOUN	N	AdvType=Tim|Case=Nom|Definite=Ind|Number=Sing	6	compound	_	GTtags=Temp,Sg,Nom,Indef
6	мартонь	марто	NOUN	N	Case=Gen|Definite=Ind|NounType=Relat|Number=Plur,Sing	7	nmod	_	GTtags=Der/MWN,N,SP,Gen,Indef
7	чипайсэнть	чипай	NOUN	N	Case=Ine|Definite=Def|Number=Sing	4	obl:lmod	_	GTtags=Sg,Ine,Def|SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	―	―	PUNCT	PUNCT	_	6	punct	_	_
2	Колчаконь	Колчак	PROPN	N	Case=Gen|Definite=Ind|NameType=Sur|Number=Plur,Sing	3	nmod:poss	_	GTtags=Prop,Sem/Sur,SP,Gen,Indef
3	армиясто	армия	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	6	obl	_	GTtags=SP,Ela,Indef
4	кавто	кавто	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	5	nummod	_	GTtags=Card,Sg,Nom,Indef
5	полкт	полк	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	6	nsubj	_	GTtags=Sem/Plc,Pl,Nom,Indef
6	калавтсть	калавтомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past	0	root	_	GTtags=TV,Ind,Prt1,ScPl3|SpaceAfter=No
7	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


