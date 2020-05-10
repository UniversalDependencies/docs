---
layout: base
title:  'Statistics of obl in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `obl`

This relation is universal.
There are 3 language-specific subtypes of `obl`: <tt><a href="mdf_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="mdf_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="mdf_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

46 nodes (4%) are attached to their parents as `obl`.

24 instances of `obl` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.71739130434783.

The following 6 pairs of parts of speech are connected with `obl`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (30; 65% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (6; 13% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (5; 11% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (2; 4% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl	color:blue
1	Лётчикне	лётчик	NOUN	N	Case=Nom|Definite=Def|Number=Plur	6	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	улема	улема	PART	Pcle	_	6	advmod:mmod	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	_
5	кядьса	кядь	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	6	obl	_	_
6	токсесазь	токсемс	VERB	V	Mood=Ind|Number[obj]=Plur|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Pres|Valency=2	0	root	_	_
7	коволнятнень	ковол	NOUN	N	Case=Gen|Definite=Def|Derivation=Dimin|Number=Plur	6	obj	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 obl	color:blue
1	Ну	ну	INTJ	Interj	_	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	6	punct	_	_
3	кли	кли	ADV	Adv	_	4	advmod	_	_
4	онцтон	он	NOUN	N	Case=Ela|Number=Plur,Sing|Number[psor]=Sing|Person[psor]=1	6	obl	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	4	punct	_	_
6	пара	пара	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	SpaceAfter=No
7	:	:	PUNCT	CLB	_	11	punct	_	_
8	гулянять	гуляня	NOUN	N	Case=Gen|Definite=Def|Number=Sing	9	nmod	_	_
9	пацяняц	паця	NOUN	N	Case=Nom|Derivation=Dimin|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	obj	_	_
10	апак	апак	AUX	Aux	Polarity=Neg	11	aux:neg	_	_
11	синтть	синдемс	VERB	V	Connegative=Yes|Valency=2	6	csubj	_	SpaceAfter=No
12	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl	color:blue
1	―	―	PUNCT	PUNCT	_	3	punct	_	_
2	Терешкова	Терешкова	PROPN	N	Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	3	nsubj	_	_
3	панчсь	панжемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=2	0	root	_	_
4	теень	мон	PRON	Pron	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	3	obl	_	_
5	ки	ки	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


