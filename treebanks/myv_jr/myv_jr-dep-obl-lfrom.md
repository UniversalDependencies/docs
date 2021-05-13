---
layout: base
title:  'Statistics of obl:lfrom in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `obl:lfrom`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-obl.html">obl</a></tt>.
There are also 7 other language-specific subtypes of `obl`: <tt><a href="myv_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="myv_jr-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="myv_jr-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="myv_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="myv_jr-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="myv_jr-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="myv_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

28 nodes (0%) are attached to their parents as `obl:lfrom`.

16 instances of `obl:lfrom` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.03571428571429.

The following 2 pairs of parts of speech are connected with `obl:lfrom`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (27; 96% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:lfrom	color:blue
1	Окойники	окойники	ADV	Adv	AdvType=Tim	3	advmod:tmod	_	GTtags=Sem/Time|SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	велявтсть	велявтомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl3
4	лей	лей	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	5	nmod	_	GTtags=Sem/Inanim_Cnt,Sg,Nom,Indef
5	лангсто	ланго	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	3	obl:lfrom	_	GTtags=Relator,Relat,SP,Ela,Indef
6	шлямо	шлямс	VERB	V	Case=Loc|Valency=1|VerbForm=Inf	7	xcomp:ds	_	GTtags=IV,Inf,Loc
7	панезтне	панемс	VERB	V	Case=Nom|Definite=Def|Derivation=Ozj|Number=Plur|VerbForm=Conv	3	nsubj	_	GTtags=Der/Озь,Ger,Pl,Nom,Def|SpaceAfter=No
8	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:lfrom	color:blue
1	Сонзэ	сон	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	GTtags=Pers,Sg3,Gen
2	валдонтень	валдо	NOUN	N	Case=Dat|Definite=Def|Number=Sing	3	obl:lto	_	GTtags=Sg,Dat,Def
3	ливтясть	ливтямс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScPl3
4	та-косто	та-косто	ADV	Adv	Case=Ela|Definite=Ind	3	obl:lfrom	_	GTtags=Indef,Ela
5	кавто	кавто	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	7	nummod	_	GTtags=Card,Sg,Nom,Indef
6	сёрмав	сёрмав	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	7	amod	_	GTtags=Sg,Nom,Indef
7	нимилявнеть	нимилявнеть	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	3	nsubj	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
8	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


