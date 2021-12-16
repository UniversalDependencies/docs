---
layout: base
title:  'Statistics of advcl:tcl in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advcl:tcl`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-advcl.html">advcl</a></tt>.
There are also 1 other language-specific subtypes of `advcl`: <tt><a href="mdf_jr-dep-advcl-cau.html">advcl:cau</a></tt>.

14 nodes (0%) are attached to their parents as `advcl:tcl`.

10 instances of `advcl:tcl` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.21428571428571.

The following 3 pairs of parts of speech are connected with `advcl:tcl`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (12; 86% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 7% instances).


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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advcl:tcl	color:blue
1	А	а	CCONJ	CC	_	3	cc	_	_
2	завтракамста	завтракамс	VERB	V	Case=Ela|VerbForm=Conv	3	advcl:tcl	_	GTtags=Ger,Ela
3	кой	кой	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	_
5	обедамста-ужнамста	обедамс-ужнамс	VERB	V	Case=Ela|VerbForm=Conv	8	advcl:tcl	_	GTtags=Ger,Ela
6	аньцек	аньцек	ADV	Adv	_	8	advmod	_	_
7	и	и	CCONJ	CC	_	6	fixed	_	_
8	кулят	кулемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres	3	conj	_	GTtags=Ind,Prs,ScSg2
9	сяка	сяка	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing	10	det	_	GTtags=Sg,Nom,Indef
10	валонц	вал	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	GTtags=Sg,Gen,PxSg3|SpaceAfter=No
11	:	:	PUNCT	_	_	13	punct	_	_
12	"	"	PUNCT	PUNCT	_	13	punct	_	SpaceAfter=No
13	Ярхцада	ярхцамс	VERB	V	Mood=Imp|Number[subj]=Plur|Person[subj]=2	10	appos	_	GTtags=Imprt,ScPl2|SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	_
15	ярхцада	ярхцамс	VERB	V	Mood=Imp|Number[subj]=Plur|Person[subj]=2	13	conj	_	GTtags=Imprt,ScPl2
16	...	...	PUNCT	_	_	15	punct	_	_
17	"	"	PUNCT	PUNCT	_	15	punct	_	SpaceAfter=No
18	,	,	PUNCT	_	_	21	punct	_	_
19	бта	бта	ADV	Adv	_	21	mark	_	_
20	аф	аф	AUX	_	Polarity=Neg|VerbType=Aux	21	aux:neg	_	GTtags=Aux,Neg
21	мярьгондяряй	мярьгомс	VERB	V	Mood=Cnd|Number[subj]=Sing|Person[subj]=3	25	advcl	_	GTtags=Cond,ScSg3
22	тяфта	тяфта	ADV	Adv	_	21	advmod	_	SpaceAfter=No
23	,	,	PUNCT	_	_	21	punct	_	_
24	ломаттне	ломань	NOUN	N	Case=Nom|Definite=Def|Number=Plur	25	nsubj	_	GTtags=Pl,Nom,Def
25	илядыхть	илядомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres	3	conj	_	GTtags=Ind,Prs,ScPl3
26	вачедоня	вачедоня	ADV	Adv	_	25	advcl	_	SpaceAfter=No
27	.	.	PUNCT	_	_	3	punct	_	_

~~~


