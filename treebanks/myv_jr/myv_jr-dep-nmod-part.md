---
layout: base
title:  'Statistics of nmod:part in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `nmod:part`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-nmod.html">nmod</a></tt>.
There are also 5 other language-specific subtypes of `nmod`: <tt><a href="myv_jr-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="myv_jr-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="myv_jr-dep-nmod-gsubj.html">nmod:gsubj</a></tt>, <tt><a href="myv_jr-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="myv_jr-dep-nmod-poss.html">nmod:poss</a></tt>.

1 nodes (0%) are attached to their parents as `nmod:part`.

1 instances of `nmod:part` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `nmod:part`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nmod:part	color:blue
1	—	—	PUNCT	PUNCT	_	7	punct	_	_
2	Норовжорчтнэ	норовжорч	NOUN	N	Case=Nom|Definite=Def|Number=Plur	7	nsubj	_	GTtags=Pl,Nom,Def
3	ды	ды	CCONJ	CC	_	4	cc	_	_
4	кочкодыктне	кочкодык	NOUN	N	Case=Nom|Definite=Def|Number=Plur	2	conj	_	GTtags=Pl,Nom,Def
5	курок	курок	ADV	Adv	Case=Temp	7	advmod:tmod	_	GTtags=Temp
6	ципакаст	ципака	NOUN	N	Case=Gen|Number=Plur|Number[psor]=Plur|Person[psor]=3	7	obj	_	GTtags=Pl,Gen,PxPl3
7	стявтсызь	стявтомс	VERB	V	Mood=Ind|Number[obj]=Plur|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Pres|Valency=2	0	root	_	GTtags=TV,Ind,Prs,ScPl3,OcPl3|SpaceAfter=No
8	,	,	PUNCT	CLB	_	10	punct	_	_
9	кода	кода	ADV	Adv	AdvType=Man|PronType=Int	10	advmod	_	GTtags=Interr,Manner
10	мерить	меремс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=2	7	advcl	_	GTtags=TV,Ind,Prs,ScPl3|SpaceAfter=No
11	,	,	PUNCT	CLB	_	10	punct	_	_
12	сёлмо	сёлмо	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	13	nmod:part	_	GTtags=Sg,Nom,Indef
13	лангс	лангс	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	7	obl:lmod	_	GTtags=SP,Ill,Indef|SpaceAfter=No
14	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


