---
layout: base
title:  'Statistics of aux:opt in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `aux:opt`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-aux.html">aux</a></tt>.
There are also 1 other language-specific subtypes of `aux`: <tt><a href="mdf_jr-dep-aux-neg.html">aux:neg</a></tt>.

1 nodes (0%) are attached to their parents as `aux:opt`.

1 instances of `aux:opt` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 1 pairs of parts of speech are connected with `aux:opt`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 11 aux:opt	color:blue
1	Коля	Коля	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	nsubj	_	GTtags=Prop,Sg,Nom,Indef
2	сонцьке	сонць	PRON	Pron	Case=Nom|Clitic=AddGA|Number=Sing|Person=3|PronType=Refl	1	det	_	GTtags=Refl,Sg3,Nom,Foc
3	шарьхкодезе	шарьхкодемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3,OcSg3
4	и	и	CCONJ	CC	_	5	cc	_	_
5	макссь	максомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=2	3	conj	_	GTtags=TV,Ind,Prt1,ScSg3
6	вал	вал	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	5	obj	_	GTtags=Sg,Nom,Indef
7	аф	аф	AUX	Pcle	Polarity=Neg	8	aux:neg	_	GTtags=Neg
8	анцемс	анцемс	VERB	V	Valency=2|VerbForm=Inf	6	advcl	_	GTtags=TV,Inf
9	мезевок	мезевок	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	8	obj	_	GTtags=Indef,Sg,Nom|SpaceAfter=No
10	,	,	PUNCT	CLB	_	15	punct	_	_
11	катк	катк	AUX	Pcle	_	15	aux:opt	_	_
12	щавац	щава	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	15	nsubj	_	GTtags=Sg,Nom,PxSg3
13	сонць	сонць	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Refl	12	det	_	GTtags=Refl,Sg3,Nom
14	лучи	лучи	ADV	Adv	_	15	advmod	_	_
15	максы	максомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=2	3	conj	_	GTtags=TV,Ind,Prs,ScSg3|SpaceAfter=No
16	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


