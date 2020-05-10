---
layout: base
title:  'Statistics of nmod:lmod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `nmod:lmod`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-nmod.html">nmod</a></tt>.
There are also 5 other language-specific subtypes of `nmod`: <tt><a href="myv_jr-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="myv_jr-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="myv_jr-dep-nmod-gsubj.html">nmod:gsubj</a></tt>, <tt><a href="myv_jr-dep-nmod-part.html">nmod:part</a></tt>, <tt><a href="myv_jr-dep-nmod-poss.html">nmod:poss</a></tt>.

1 nodes (0%) are attached to their parents as `nmod:lmod`.

1 instances of `nmod:lmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `nmod:lmod`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:lmod	color:blue
1	Столь	столь	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	2	nmod	_	GTtags=Sg,Nom,Indef
2	лангсо	лангсо	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	3	nmod:lmod	_	GTtags=SP,Ine,Indef
3	лампась	лампа	NOUN	N	Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	GTtags=Sg,Nom,Def
4	апак	апак	AUX	Pcle	Polarity=Neg	5	aux:neg	_	GTtags=Neg
5	кончтне	кончтнемс	VERB	V	Connegative=Yes|Valency=2	6	advcl	_	GTtags=TV,ConNeg
6	ваны	ваномс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=2	0	root	_	GTtags=TV,Ind,Prs,ScSg3
7	конёвом	конёв	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	8	nmod	_	GTtags=Sg,Gen,PxSg1
8	лангс	лангс	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	6	obl	_	GTtags=SP,Ill,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


