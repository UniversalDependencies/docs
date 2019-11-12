---
layout: base
title:  'Statistics of compound in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `compound`

This relation is universal.
There are 3 language-specific subtypes of `compound`: <tt><a href="myv_jr-dep-compound-coll.html">compound:coll</a></tt>, <tt><a href="myv_jr-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="myv_jr-dep-compound-svc.html">compound:svc</a></tt>.

191 nodes (1%) are attached to their parents as `compound`.

169 instances of `compound` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10471204188482.

The following 17 pairs of parts of speech are connected with `compound`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (153; 80% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (6; 3% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (6; 3% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-ADP.html">ADP</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-NUM.html">NUM</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 compound	color:blue
1	Турванзо	турва	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	2	nsubj	_	GTtags=Pl,Nom,PxSg3
2	равжо-сэн	равжо-сэнь	ADJ	A	_	0	root	_	_
3	ть	оль	AUX	Cop	Number[subj]=Plur|Person[subj]=3|Tense=Pres	2	cop	_	GTtags=Prs,ScPl3
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	чамазо	чама	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	nsubj	_	GTtags=Sg,Nom,PxSg3|SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	прок	прок	CCONJ	CC	_	8	mark	_	_
8	лияназ	лияназ	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	9	compound	_	GTtags=Sg,Nom,Indef
9	коцт	коцт	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	11	advcl	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
10	,	,	PUNCT	CLB	_	8	punct	_	_
11	ашо	ашо	ADJ	A	_	2	conj	_	_
12	_	оль	AUX	Cop	Number[subj]=Sing|Person[subj]=3|Tense=Pres	11	cop	_	GTtags=Prs,ScSg3
13	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	—	—	PUNCT	PUNCT	_	3	punct	_	_
2	Кадык	кадык	AUX	AUX	Mood=Imp	3	aux:opt	_	GTtags=TV,Imprt,ScSg2,OcSg3
3	ютавтсызь	ютавтомс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Pres|Valency=2	0	root	_	GTtags=TV,Ind,Prs,ScPl3,OcSg3
4	балягатне	баляга	NOUN	N	Case=Nom|Definite=Def|Number=Plur	3	nsubj	_	GTtags=Pl,Nom,Def
5	пеетькшнема	пеедькшнемс	VERB	V	Case=Nom|Definite=Ind|Number=Sing|Valency=1|VerbForm=Vnoun	6	compound	_	GTtags=IV,Stem/е,NomAct,Sg,Nom,Indef
6	шкаст	шка	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Plur|Person[psor]=3	3	obj	_	GTtags=Sg,Gen,PxPl3|SpaceAfter=No
7	.	.	PUNCT	CLB	_	3	punct	_	_

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
4	анокстась	анокстамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3
5	обеднянь	обедня	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	6	obj	_	GTtags=SP,Gen,Indef
6	служамо	служамс	VERB	V	Case=Loc|Valency=1|VerbForm=Inf	4	xcomp	_	GTtags=IV,Inf,Loc|SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


