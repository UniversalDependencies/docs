---
layout: base
title:  'Statistics of advcl:tcl in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advcl:tcl`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-advcl.html">advcl</a></tt>.
There are also 1 other language-specific subtypes of `advcl`: <tt><a href="mdf_jr-dep-advcl-cau.html">advcl:cau</a></tt>.

12 nodes (0%) are attached to their parents as `advcl:tcl`.

8 instances of `advcl:tcl` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.41666666666667.

The following 2 pairs of parts of speech are connected with `advcl:tcl`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (11; 92% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 advcl:tcl	color:blue
1	―	―	PUNCT	PUNCT	_	4	punct	_	_
2	Кемоньшка	кемонь	NUM	Num	Case=Cmp|Number=Plur,Sing	3	nummod	_	_
3	кизоня	киза	NOUN	N	Case=Nom|Definite=Ind|Derivation=Dimin|Number=Sing	4	nsubj	_	_
4	ётай	ётамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	6	advcl:tcl	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	4	punct	_	_
6	касат	касомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|Valency=1	0	root	_	SpaceAfter=No
7	,	,	PUNCT	CLB	_	10	punct	_	_
8	козонга	козонга	ADV	Adv	PronType=Ind	10	advmod:lto	_	_
9	аф	аф	AUX	Aux	Polarity=Neg	10	aux:neg	_	_
10	туят	тумс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|Valency=1	6	conj	_	SpaceAfter=No
11	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advcl:tcl	color:blue
1	А	а	CCONJ	CC	_	3	cc	_	_
2	къда	кда	SCONJ	CS	Style=Ped	3	mark	_	ModernForm=кда
3	токади	токадемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	6	advcl:tcl	_	GTtags=IV,Ind,Prs,ScSg3
4	ёфси	ёфси	ADV	Adv	AdvType=Deg	6	advmod:deg	_	GTtags=Deg
5	сядонга	сяда	ADV	Adv	Clitic=AddNgA	6	advmod:deg	_	GTtags=Clt/NgA
6	кальдяв	кальдяв	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
7	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


