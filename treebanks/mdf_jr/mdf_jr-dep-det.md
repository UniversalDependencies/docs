---
layout: base
title:  'Statistics of det in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `det`

This relation is universal.

60 nodes (1%) are attached to their parents as `det`.

58 instances of `det` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18333333333333.

The following 3 pairs of parts of speech are connected with `det`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-DET.html">DET</a></tt> (33; 55% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (26; 43% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Монць	монць	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	4	nsubj	_	_
2	эрь	эрь	DET	Det	Case=Nom|Definite=Ind|Number=Sing	3	det	_	_
3	шиня	ши	NOUN	N	Case=Tem|Definite=Ind|Number=Sing	4	obl:freq	_	_
4	мастярлан	мастярламс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres	0	root	_	_
5	самолётт	самолёт	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	4	obj	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	и	и	CCONJ	CC	_	8	cc	_	_
8	лийфнесайне	лийфнемс	VERB	V	Mood=Ind|Number[obj]=Plur|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Pres	4	conj	_	_
9	няканень	няка	NOUN	N	Case=Gen|Number=Plur|Number[psor]=Sing|Person[psor]=1	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Ня	ня	PRON	Pron	_	2	det	_	_
2	стирнятне	стирь	NOUN	N	Case=Nom|Definite=Def|Degree=Dim|Number=Plur	3	nsubj:cop	_	GTtags=Pl,Nom,Def
3	малат	мала	ADJ	A	Case=Nom|Definite=Ind|Number=Plur	0	root	_	GTtags=Pl,Nom,Indef
4	Веряскинонди	Веряскин	PROPN	N	Case=Dat|Definite=Ind|NameType=Sur|Number=Plur,Sing	3	nmod	_	GTtags=Prop,SP,Dat,Indef|SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	сяс	сяс	ADV	Adv	_	8	mark	_	_
7	самозост	самс	VERB	V	Case=Ill|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3|VerbForm=Vnoun	8	advcl	_	GTtags=IV,Der/NomAct,SP,Ill,PxPl3
8	кенярдсь	кенярдемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	3	advcl	_	GTtags=IV,Ind,Prt1,ScSg3|SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det	color:blue
1	Аф	аф	AUX	Pcle	Polarity=Neg	3	det	_	GTtags=Neg
2	лама	лама	DET	Det	Case=Nom|Definite=Ind|Number=Sing	1	fixed	_	GTtags=Sg,Nom,Indef
3	минутада	минута	NOUN	N	Case=Abl|Definite=Ind|Number=Plur,Sing	4	obl:cmp	_	GTtags=SP,Abl,Indef
4	меле	меле	ADV	Adv	AdvType=Tim	8	advmod:tmod	_	_
5	шофёрсь	шофёр	NOUN	N	Case=Nom|Definite=Def|Number=Sing	8	nsubj	_	GTtags=Sg,Nom,Def
6	и	и	CCONJ	CC	_	7	cc	_	_
7	санитарсь	санитар	NOUN	N	Case=Nom|Definite=Def|Number=Sing	5	conj	_	GTtags=Sg,Nom,Def
8	састь	самс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt1,ScPl3
9	кафта	кафта	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	10	nummod	_	GTtags=Card,Sg,Nom,Indef
10	солдат	солдат	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	8	obl	_	GTtags=Sg,Nom,Indef
11	мархта	мархта	ADP	Adp	_	10	case	_	SpaceAfter=No
12	,	,	PUNCT	CLB	_	14	punct	_	_
13	синь	сон	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	14	nsubj	_	GTtags=Pers,Pl3,Nom
14	кандсть	кандомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past	8	conj	_	GTtags=TV,Ind,Prt1,ScPl3
15	кафонц	кафонц	NUM	Num	NumType=Sets	16	nummod	_	GTtags=Card,Coll
16	носилкат	носилка	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	14	obj	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
17	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


