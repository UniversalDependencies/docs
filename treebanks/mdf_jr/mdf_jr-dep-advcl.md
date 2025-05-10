---
layout: base
title:  'Statistics of advcl in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advcl`

This relation is universal.

97 nodes (2%) are attached to their parents as `advcl`.

66 instances of `advcl` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.39175257731959.

The following 8 pairs of parts of speech are connected with `advcl`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (69; 71% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (16; 16% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advcl	color:blue
1	Лётчикне	лётчик	NOUN	N	Case=Nom|Definite=Def|Number=Plur	6	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	улема	улема	VERB	V	Mood=Nec|Number[subj]=Sing|Person[subj]=3	6	advcl	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	_
5	кядьса	кядь	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	6	obl	_	_
6	токсесазь	токсемс	VERB	V	Mood=Ind|Number[obj]=Plur|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Pres	0	root	_	_
7	коволнятнень	ковол	NOUN	N	Case=Gen|Definite=Def|Degree=Dim|Number=Plur	6	obj	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advcl	color:blue
1	Касондярян	касомс	VERB	V	Derivation=Cond|Mood=Ind|Number[subj]=Sing|Person[subj]=1	4	advcl	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	улян	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres	4	cop	_	_
4	лётчикокс	лётчик	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 advcl	color:blue
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


