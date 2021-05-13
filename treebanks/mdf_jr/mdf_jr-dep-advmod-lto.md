---
layout: base
title:  'Statistics of advmod:lto in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advmod:lto`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-advmod.html">advmod</a></tt>.
There are also 9 other language-specific subtypes of `advmod`: <tt><a href="mdf_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="mdf_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="mdf_jr-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="mdf_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="mdf_jr-dep-advmod-freq.html">advmod:freq</a></tt>, <tt><a href="mdf_jr-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="mdf_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

18 nodes (1%) are attached to their parents as `advmod:lto`.

10 instances of `advmod:lto` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `advmod:lto`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (17; 94% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 advmod:lto	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 advmod:lto	color:blue
1	Ладяйне	ладямс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Past|Valency=2	0	root	_	_
2	прокс	прокс	ADV	Adv	_	3	advmod	_	_
3	пеняти	пеня	NOUN	N	Case=Dat|Definite=Def|Number=Sing	1	obl:lto	_	_
4	очконять	очка	NOUN	N	Case=Gen|Definite=Def|Derivation=Dimin|Number=Sing	1	obj	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	7	punct	_	_
6	пильгса	пильге	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	7	obl:inst	_	_
7	орхкадине	орхкадемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Past|Valency=2	1	conj	_	_
8	и	и	CCONJ	CC	_	12	cc	_	_
9	аф	аф	AUX	Aux	Polarity=Neg	10	aux:neg	_	_
10	вяри	вяри	ADV	Adv	_	11	advmod:lto	_	_
11	лиема	лиема	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	12	xcomp	_	_
12	тунь	тумс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Past|Valency=1	1	conj	_	SpaceAfter=No
13	,	,	PUNCT	CLB	_	15	punct	_	_
14	а	а	CCONJ	CC	_	15	cc	_	_
15	алу	алу	ADV	Adv	AdvType=Loc|Case=Lat	12	conj	_	SpaceAfter=No
16	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


