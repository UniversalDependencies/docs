---
layout: base
title:  'Statistics of det in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `det`

This relation is universal.

32 nodes (1%) are attached to their parents as `det`.

30 instances of `det` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.125.

The following 2 pairs of parts of speech are connected with `det`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-DET.html">DET</a></tt> (20; 63% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (12; 38% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Монць	монць	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	4	nsubj	_	_
2	эрь	эрь	DET	Det	Case=Nom|Definite=Ind|Number=Sing	3	det	_	_
3	шиня	ши	NOUN	N	Case=Tem|Definite=Ind|Number=Sing	4	obl:freq	_	_
4	мастярлан	мастярламс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	0	root	_	_
5	самолётт	самолёт	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	4	obj	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	и	и	CCONJ	CC	_	8	cc	_	_
8	лийфнесайне	лийфнемс	VERB	V	Mood=Ind|Number[obj]=Plur|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Pres|Valency=2	4	conj	_	_
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
2	стирнятне	стирь	NOUN	N	Case=Nom|Definite=Def|Derivation=Dimin|Number=Plur	3	nsubj:cop	_	GTtags=Pl,Nom,Def
3	малат	мала	ADJ	A	Case=Nom|Definite=Ind|Number=Plur	0	root	_	GTtags=Pl,Nom,Indef
4	Веряскинонди	Веряскин	PROPN	N	Case=Dat|Definite=Ind|NameType=Sur|Number=Plur,Sing	3	nmod	_	GTtags=Prop,SP,Dat,Indef|SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	сяс	сяс	ADV	Adv	_	8	mark	_	_
7	самозост	самс	VERB	V	Case=Ill|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3|Valency=1|VerbForm=Vnoun	8	advcl	_	GTtags=IV,Der/NomAct,SP,Ill,PxPl3
8	кенярдсь	кенярдемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	3	advcl	_	GTtags=IV,Ind,Prt1,ScSg3|SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


