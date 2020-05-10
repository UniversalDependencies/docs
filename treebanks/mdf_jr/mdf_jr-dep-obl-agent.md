---
layout: base
title:  'Statistics of obl:agent in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="mdf_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="mdf_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

6 nodes (0%) are attached to their parents as `obl:agent`.

5 instances of `obl:agent` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83333333333333.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (5; 83% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:agent	color:blue
1	Ашень	аш	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Polarity=Neg|Tense=Past	2	aux:neg	_	_
2	кеподев	кеподевомс	VERB	V	Mood=Imp|Number[subj]=Sing|Person[subj]=2|Valency=1	0	root	_	_
3	теест	сон	PRON	Pron	Case=Dat|Number=Plur|Person=3|PronType=Prs|Variant=Short	2	obl:agent	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	эрявсь	эрявомс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	6	aux	_	_
6	лездомс	лездомс	VERB	V	Valency=1|VerbForm=Inf	2	conj	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 obl:agent	color:blue
1	И	и	CCONJ	CC	_	11	cc	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	улема	улема	PART	Pcle	_	11	discourse	_	GTtags=Epist|SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	_
5	тянкса	тянкса	ADV	Adv	_	11	advmod	_	_
6	редакциятнень	редакция	NOUN	N	Case=Gen|Definite=Def|Number=Plur	8	nmod	_	GTtags=Pl,Gen,Def
7	рахсемань	рахсема	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	8	nmod	_	GTtags=SP,Gen,Indef
8	отделснонды	отдел	NOUN	N	Case=Dat|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3	11	obl:agent	_	GTtags=SP,Dat,PxPl3
9	работама	работамс	VERB	V	Case=Loc|VerbForm=Inf	11	xcomp	_	GTtags=Inf,Loc
10	сашендови	сашендовомс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	11	aux	_	GTtags=IV,Ind,Prs,ScSg3
11	сявондемс	сявондемс	VERB	V	Valency=2|VerbForm=Inf	0	root	_	GTtags=TV,Inf
12	ётай-потай	ётай-потай	VERB	V	Tense=Pres|VerbForm=Part	13	advcl	_	GTtags=PrsPrc
13	ломатть	ломань	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	11	obj	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
14	.	.	PUNCT	CLB	_	11	punct	_	_

~~~


