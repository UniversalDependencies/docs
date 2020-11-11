---
layout: base
title:  'Statistics of nmod:gobj in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `nmod:gobj`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-nmod.html">nmod</a></tt>.
There are also 5 other language-specific subtypes of `nmod`: <tt><a href="myv_jr-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="myv_jr-dep-nmod-gsubj.html">nmod:gsubj</a></tt>, <tt><a href="myv_jr-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="myv_jr-dep-nmod-part.html">nmod:part</a></tt>, <tt><a href="myv_jr-dep-nmod-poss.html">nmod:poss</a></tt>.

9 nodes (0%) are attached to their parents as `nmod:gobj`.

9 instances of `nmod:gobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66666666666667.

The following 2 pairs of parts of speech are connected with `nmod:gobj`: <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (6; 67% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (3; 33% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod:gobj	color:blue
1	Превеельгак	превей	ADJ	A	Clitic=Add|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Prt2,Sg3,Clt/Gak
2	веленть	веле	NOUN	N	Case=Gen|Definite=Def|Number=Sing	4	nmod:gobj	_	GTtags=Sg,Gen,Def
3	тезэнь	тезэнь	ADV	Adv	Case=Ill|PronType=Dem	4	obl:lmod	_	GTtags=Dem,Ill
4	путыцязо	путыця	NOUN	N	Case=Nom|Derivation=NomAg|Number=Sing|Number[psor]=Sing|Person[psor]=3|Valency=2	1	nsubj:cop	_	GTtags=TV,NomAg,Sg,Nom,PxSg3|SpaceAfter=No
5	!	!	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:gobj	color:blue
1	Мейле	мейле	ADV	Adv	AdvType=Tim	4	advmod:tmod	_	GTtags=Sem/Time_dur
2	левксэнь	левкс	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	3	nmod:gobj	_	GTtags=SP,Gen,Indef
3	нарвамо	нарвамс	VERB	V	Case=Loc|Valency=2|VerbForm=Inf	4	xcomp	_	GTtags=TV,Inf,Loc
4	озыть	озамс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScPl3|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


