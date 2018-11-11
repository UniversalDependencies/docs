---
layout: base
title:  'Statistics of compound in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `compound`

This relation is universal.
There are 3 language-specific subtypes of `compound`: <tt><a href="myv_jr-dep-compound-coll.html">compound:coll</a></tt>, <tt><a href="myv_jr-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="myv_jr-dep-compound-svc.html">compound:svc</a></tt>.

69 nodes (0%) are attached to their parents as `compound`.

46 instances of `compound` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21739130434783.

The following 13 pairs of parts of speech are connected with `compound`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (41; 59% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (6; 9% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (6; 9% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (3; 4% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-INTJ.html">INTJ</a></tt> (2; 3% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-ADP.html">ADP</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-NUM.html">NUM</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-PART.html">PART</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 compound	color:blue
1	―	―	PUNCT	PUNCT	_	4	punct	_	_
2	Ох	ох	INTJ	Interj	_	4	discourse	_	GTtags=|SpaceAfter=No
3	,	,	PUNCT	CLB	_	2	punct	_	_
4	авинем	авине	NOUN	N	Case=Nom|Derivation=Dimin|Number=Sing|Number[psor]=Sing|Person[psor]=1	0	root	_	GTtags=Der/НЕ,Der/Dimin,N,Sg,Nom,PxSg1
5	-	-	PUNCT	Cmp/Hyph	_	6	punct	_	_
6	корминем	корма	NOUN	N	Case=Nom|Derivation=Dimin|Number=Sing|Number[psor]=Sing|Person[psor]=1	4	compound	_	GTtags=Der/НЕ,Der/Dimin,N,Sg,Nom,PxSg1
7	!	!	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	—	—	PUNCT	PUNCT	_	3	punct	_	_
2	Кадык	кадомс	AUX	AUX	Mood=Imp|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Valency=2	3	aux	_	GTtags=TV,Imprt,ScSg2,OcSg3
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


