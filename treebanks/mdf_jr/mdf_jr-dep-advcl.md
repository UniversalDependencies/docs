---
layout: base
title:  'Statistics of advcl in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="mdf_jr-dep-advcl-tmod.html">advcl:tmod</a></tt>.

29 nodes (2%) are attached to their parents as `advcl`.

16 instances of `advcl` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.03448275862069.

The following 5 pairs of parts of speech are connected with `advcl`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (15; 52% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (10; 34% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 advcl	color:blue
1	Тяни	тяни	ADV	Adv	AdvType=Tim	2	advmod:tmod	_	_
2	ёран	ёрамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=2	0	root	_	_
3	тиемда	тиемс	VERB	V	Case=Abl|Valency=2|VerbForm=Inf	2	xcomp	_	_
4	оцю	оцю	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	5	amod	_	_
5	самолёт	самолёт	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	obj	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	10	punct	_	_
7	аньцек	аньцек	ADV	Adv	_	10	advmod	_	_
8	коданга	коданга	ADV	Adv	PronType=Ind	10	advmod	_	_
9	аф	аф	AUX	Aux	Polarity=Neg	10	aux:neg	_	_
10	лисенди	лисендемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	2	advcl	_	SpaceAfter=No
11	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advcl	color:blue
1	Касондярян	касомс	VERB	V	Mood=Cnd|Number[subj]=Sing|Person[subj]=1|Valency=1	4	advcl	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	улян	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	4	cop	_	_
4	лётчикокс	лётчик	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 advcl	color:blue
1	А	а	CCONJ	CC	_	4	cc	_	_
2	мезе	мезе	PRON	Pron	Case=Nom|Number=Sing|PronType=Int	0	root	_	_
3	кда	кда	SCONJ	CS	_	4	mark	_	_
4	рамась	рамамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	2	advcl	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	7	punct	_	_
6	аньцек	аньцек	ADV	Adv	_	7	advmod	_	_
7	налхксемс	налхксемс	VERB	V	Valency=1|VerbForm=Inf	2	advcl	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	7	punct	_	_
9	а	а	CCONJ	CC	_	11	cc	_	_
10	мон	мон	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
11	ёран	ёрамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=2	2	conj	_	_
12	лиендемс	лиендемс	VERB	V	Valency=1|VerbForm=Inf	11	xcomp	_	SpaceAfter=No
13	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


