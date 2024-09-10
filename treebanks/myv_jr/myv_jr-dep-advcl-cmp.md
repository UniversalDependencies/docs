---
layout: base
title:  'Statistics of advcl:cmp in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `advcl:cmp`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="myv_jr-dep-advcl-eval.html">advcl:eval</a></tt>, <tt><a href="myv_jr-dep-advcl-tcl.html">advcl:tcl</a></tt>.

2 nodes (0%) are attached to their parents as `advcl:cmp`.

2 instances of `advcl:cmp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `advcl:cmp`: <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advcl:cmp	color:blue
1	Ярсамодо	ярсамо	VERB	N	Case=Abl|Definite=Ind|Number=Plur,Sing|VerbForm=Vnoun	2	advcl:cmp	_	CGdephead=#1-&gt;1|CGdeprel=@CMP-STD|GTtags=SP,Abl,Indef
2	мейле	мейле	ADV	Adv	_	4	advmod:tmod	_	CGdephead=#2-&gt;4|CGdeprel=@ADVL&gt;|GTtags=
3	Обран	Обран	PROPN	N	Case=Nom|Definite=Ind|Number=Sing	4	nsubj	_	CGdephead=#3-&gt;4|CGdeprel=@SUBJ&gt;|GTtags=Prop,Sg,Nom,Indef
4	сяворсь	сяворемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	CGdephead=#4-&gt;0|CGdeprel=@FMV|GTtags=IV,Ind,Prt1,ScSg3
5	эземс	эзем	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	4	obl	_	CGdephead=#5-&gt;4|CGdeprel=@&lt;ADVL|GTtags=SP,Ill,Indef
6	рунгонзо	рунго	NOUN	N	Case=Gen|Number=Plur|Number[psor]=Sing|Person[psor]=3	7	nmod:gobj	_	CGdephead=#6-&gt;7|CGdeprel=@-FOBJ&gt;|GTtags=Pl,Gen,PxSg3
7	оймавтомо	оймавтомс	VERB	V	Case=Loc|VerbForm=Inf	4	xcomp	_	CGdephead=#7-&gt;4|CGdeprel=@IMV|GTtags=TV,Inf,Loc|SpaceAfter=No
8	...	...	PUNCT	CLB	_	4	punct	_	CGdephead=#8-&gt;4|CGdeprel=@CLB|GTtags=CLB

~~~


