---
layout: base
title:  'Statistics of nmod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `nmod`

This relation is universal.
There are 4 language-specific subtypes of `nmod`: <tt><a href="myv_jr-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="myv_jr-dep-nmod-gsubj.html">nmod:gsubj</a></tt>, <tt><a href="myv_jr-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="myv_jr-dep-nmod-poss.html">nmod:poss</a></tt>.

943 nodes (5%) are attached to their parents as `nmod`.

902 instances of `nmod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30752916224814.

The following 22 pairs of parts of speech are connected with `nmod`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (664; 70% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (96; 10% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (59; 6% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (23; 2% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (19; 2% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (15; 2% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (14; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (14; 1% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (13; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="myv_jr-pos-ADP.html">ADP</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-NUM.html">NUM</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
1	Сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg3,Nom
2	весемеде	весемеде	ADV	Pcle	Degree=Sup	3	advmod:deg	_	GTtags=Degree=Sup
3	икелев	икелев	ADV	Adv	AdvType=Tim	4	advmod:tmod	_	GTtags=Spat
4	эцель	эцемс	VERB	V	Aspect=Hab|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt2,ScSg3
5	туремстэ	туремс	VERB	V	Case=Ela|VerbForm=Conv	4	advcl	_	GTtags=IV,Ger,Ela
6	Колчаконь	Колчак	PROPN	N	Case=Gen|Definite=Ind|NameType=Sur|Number=Plur,Sing	7	nmod	_	GTtags=Prop,Sem/Sur,SP,Gen,Indef
7	бандитнэнь	бандит	NOUN	N	Case=Gen|Definite=Def|Number=Plur	4	obl	_	GTtags=Pl,Gen,Def
8	каршо	каршо	ADP	Adp	AdvType=Loc	7	case	_	GTtags=Spat|SpaceAfter=No
9	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod	color:blue
1	―	―	PUNCT	PUNCT	_	3	punct	_	_
2	Чиемстэ	чиемс	VERB	V	Case=Ela|VerbForm=Conv	3	advcl	_	GTtags=IV,Ger,Ela
3	эшксевсть	эшксевемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt1,ScPl3
4	вейкест-вейкест	вейкест-вейкест	PRON	Pron	Number[psor]=Plur|Person[psor]=3|PronType=Rcp	5	nmod	_	GTtags=Recip,PxPl3
5	лангс	ланго	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	3	obl	_	GTtags=Relator,Spat,Ill|SpaceAfter=No
6	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


