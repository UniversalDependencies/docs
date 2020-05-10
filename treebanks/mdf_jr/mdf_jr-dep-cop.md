---
layout: base
title:  'Statistics of cop in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `cop`

This relation is universal.
There are 1 language-specific subtypes of `cop`: <tt><a href="mdf_jr-dep-cop-own.html">cop:own</a></tt>.

7 nodes (1%) are attached to their parents as `cop`.

7 instances of `cop` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.85714285714286.

The following 3 pairs of parts of speech are connected with `cop`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (4; 57% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (2; 29% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Касондярян	касомс	VERB	V	Mood=Cnd|Number[subj]=Sing|Person[subj]=1|Valency=1	4	advcl	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	улян	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	4	cop	_	_
4	лётчикокс	лётчик	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	Кукшенец	кукшень	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nsubj:cop	_	GTtags=Sg,Nom,PxSg3
2	ульсь	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	4	cop	_	GTtags=IV,Ind,Prt1,ScSg3
3	крайкс	край	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	4	obl:lmod	_	GTtags=SP,Tra,Indef
4	пяшксе	пяшксе	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	_
5	иможда	имож	NOUN	N	Case=Abl|Definite=Ind|Number=Plur,Sing	4	obl	_	GTtags=SP,Abl,Indef|SpaceAfter=No
6	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	Валдашкодомс	валдашкодомс	VERB	V	Valency=1|VerbForm=Inf	5	advcl:tmod	_	GTtags=IV,Inf
2	колмоцьке	колма	NUM	Num	Case=Nom|Number=Sing|NumType=Coll	3	nummod	_	GTtags=Coll,Sg,Nom
3	танкатне	танка	NOUN	N	Case=Nom|Definite=Def|Number=Plur	5	nsubj	_	GTtags=Pl,Nom,Def
4	ульсть	улемс	AUX	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Prt1|Valency=1	5	cop	_	GTtags=IV,Ind,Prt1,ScPl3
5	путфт	путомс	VERB	V	Case=Nom|Definite=Ind|Derivation=F|Number=Plur|Valency=2|VerbForm=Part	0	root	_	GTtags=TV,Der/f,PrfPrc,Pl,Nom,Indef
6	вастоваст	васта	NOUN	N	Case=Prl|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3	5	obl:lmod	_	GTtags=SP,Prl,PxPl3
7	и	и	CCONJ	CC	_	8	cc	_	_
8	маскировандафт	маскировандамс	VERB	V	Case=Nom|Definite=Ind|Derivation=F|Number=Plur|Valency=1|VerbForm=Part	5	conj	_	GTtags=IV,Der/f,PrfPrc,Pl,Nom,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


