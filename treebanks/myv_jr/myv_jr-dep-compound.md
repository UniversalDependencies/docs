---
layout: base
title:  'Statistics of compound in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `compound`

This relation is universal.
There are 3 language-specific subtypes of `compound`: <tt><a href="myv_jr-dep-compound-coll.html">compound:coll</a></tt>, <tt><a href="myv_jr-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="myv_jr-dep-compound-svc.html">compound:svc</a></tt>.

202 nodes (1%) are attached to their parents as `compound`.

170 instances of `compound` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.0990099009901.

The following 17 pairs of parts of speech are connected with `compound`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (163; 81% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (6; 3% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (6; 3% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-ADP.html">ADP</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-NUM.html">NUM</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	Турванзо	турва	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	2	nsubj	_	GTtags=Pl,Nom,PxSg3
2	равжо-сэнть	равжо-сэнь	ADJ	A	Number[subj]=Plur|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Prs,ScPl3|SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	_
4	чамазо	чама	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	nsubj	_	GTtags=Sg,Nom,PxSg3|SpaceAfter=No
5	,	,	PUNCT	CLB	_	7	punct	_	_
6	прок	прок	CCONJ	CC	_	7	mark	_	_
7	лияназ	лияназ	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	8	compound	_	GTtags=Sg,Nom,Indef
8	коцт	коцт	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	10	advcl	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
9	,	,	PUNCT	CLB	_	7	punct	_	_
10	ашо	ашо	ADJ	A	Number[subj]=Sing|Person[subj]=3|Tense=Pres	2	conj	_	GTtags=Prs,ScSg3|SpaceAfter=No
11	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Кона	кона	DET	Det	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	3	obl	_	GTtags=Interr,Sg,Nom,Indef
2	пелев	пелев	ADV	Adv	AdvType=Loc	1	case	_	GTtags=Spat
3	ноцковтомс	ноцковтомс	VERB	V	Valency=2|VerbForm=Inf	0	root	_	GTtags=TV,Inf
4	ветямо	ветямс	VERB	V	Case=Nom|Definite=Ind|Number=Sing|Valency=2|VerbForm=Vnoun	5	compound	_	GTtags=TV,NomAct,Sg,Nom,Indef
5	пиксэнть	пикс	NOUN	N	Case=Gen|Definite=Def|Number=Sing	3	obj	_	GTtags=Sg,Gen,Def|SpaceAfter=No
6	?	?	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Алтарьсэнть	алтарь	NOUN	N	Case=Ine|Definite=Def|Number=Sing	4	obl	_	GTtags=Sg,Ine,Def
2	Федоров	Фёдоров	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Masc|NameType=Sur|Number=Sing	4	nsubj	_	GTtags=Prop,Sur_Mal,Sg,Nom,Indef
3	попось	поп	NOUN	N	Case=Nom|Definite=Def|Number=Sing	2	compound	_	GTtags=Sg,Nom,Def
4	анокстась	анокстамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3
5	обеднянь	обедня	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	6	obj	_	GTtags=SP,Gen,Indef
6	служамо	служамс	VERB	V	Case=Loc|Valency=1|VerbForm=Inf	4	xcomp	_	GTtags=IV,Inf,Loc|SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


