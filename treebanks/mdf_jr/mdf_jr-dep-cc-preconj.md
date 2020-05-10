---
layout: base
title:  'Statistics of cc:preconj in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-cc.html">cc</a></tt>.

2 nodes (0%) are attached to their parents as `cc:preconj`.

2 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 50% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-CCONJ.html">CCONJ</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	Кати	кати	ADV	Adv	_	3	cc:preconj	_	_
2	стака	стака	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	3	amod	_	GTtags=Sg,Nom,Indef
3	мяльхне	мяль	NOUN	N	Case=Nom|Definite=Def|Number=Plur	8	nsubj	_	GTtags=Pl,Nom,Def|SpaceAfter=No
4	,	,	PUNCT	CLB	_	7	punct	_	_
5	кати	кати	ADV	Adv	_	7	cc	_	_
6	вишкста	вишкста	ADV	Adv	_	7	advmod	_	_
7	ардомась	ардомс	VERB	V	Case=Nom|Definite=Def|Number=Sing|Valency=1|VerbForm=Vnoun	3	conj	_	GTtags=IV,Der/NomAct,Sg,Nom,Def
8	сизефтезе	сизефтемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3,OcSg3
9	Малининонь	Малинин	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	8	obj	_	GTtags=Prop,Sem/Sur-Mal,SP,Gen,Indef|SpaceAfter=No
10	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	Сясы	сясы	SCONJ	CS	_	5	mark	_	_
2	синь	сон	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	_
3	сембе	сембе	ADV	Adv	_	2	advmod	_	_
4	и	и	CCONJ	CC	_	5	cc:preconj	_	_
5	лётчикт	лётчик	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	0	root	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	и	и	CCONJ	CC	_	8	cc	_	_
8	космонавтт	космонавт	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	5	conj	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


