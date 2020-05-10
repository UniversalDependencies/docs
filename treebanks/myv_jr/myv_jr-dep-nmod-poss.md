---
layout: base
title:  'Statistics of nmod:poss in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-nmod.html">nmod</a></tt>.
There are also 5 other language-specific subtypes of `nmod`: <tt><a href="myv_jr-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="myv_jr-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="myv_jr-dep-nmod-gsubj.html">nmod:gsubj</a></tt>, <tt><a href="myv_jr-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="myv_jr-dep-nmod-part.html">nmod:part</a></tt>.

20 nodes (0%) are attached to their parents as `nmod:poss`.

20 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2.

The following 4 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (9; 45% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (7; 35% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (3; 15% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Велень	веле	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	2	nmod:poss	_	GTtags=Sem/Plc,SP,Gen,Indef
2	росась	роса	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def
3	эзь	эзь	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	4	aux:neg	_	_
4	костявт	костявомс	VERB	V	Connegative=Yes|Mood=Ind|Valency=1	0	root	_	GTtags=IV,Ind,ConNeg
5	валске	валске	NOUN	N	AdvType=Tim|Case=Nom|Definite=Ind|Number=Sing	7	amod	_	GTtags=Temp,Sg,Nom,Indef
6	мартонь	марто	ADP	Adp	Case=Gen|Definite=Ind|Number=Plur,Sing	5	fixed	_	GTtags=Der/MWN,N,SP,Gen,Indef
7	чипайсэнть	чипай	NOUN	N	Case=Ine|Definite=Def|Number=Sing	4	obl	_	GTtags=Sg,Ine,Def|SpaceAfter=No
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
6	калавтсть	калавтомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl3|SpaceAfter=No
7	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Сонзэ	сон	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	GTtags=Pers,Sg3,Gen
2	валдонтень	валдо	NOUN	N	Case=Dat|Definite=Def|Number=Sing	3	obl:lmod	_	GTtags=Sg,Dat,Def
3	ливтясть	ливтямс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScPl3
4	та-косто	та-косто	ADV	Adv	Case=Ela|Definite=Ind	3	obl:lmod	_	GTtags=Indef,Ela
5	кавто	кавто	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	7	nummod	_	GTtags=Card,Sg,Nom,Indef
6	сёрмав	сёрмав	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	7	amod	_	GTtags=Sg,Nom,Indef
7	нимилявнеть	нимилявнеть	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	3	nsubj	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
8	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


