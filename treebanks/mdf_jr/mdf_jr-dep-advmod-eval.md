---
layout: base
title:  'Statistics of advmod:eval in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advmod:eval`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-advmod.html">advmod</a></tt>.
There are also 9 other language-specific subtypes of `advmod`: <tt><a href="mdf_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="mdf_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="mdf_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="mdf_jr-dep-advmod-freq.html">advmod:freq</a></tt>, <tt><a href="mdf_jr-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="mdf_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="mdf_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

7 nodes (0%) are attached to their parents as `advmod:eval`.

7 instances of `advmod:eval` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.28571428571429.

The following 4 pairs of parts of speech are connected with `advmod:eval`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (3; 43% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PART.html">PART</a></tt> (2; 29% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-PART.html">PART</a></tt> (1; 14% instances), <tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advmod:eval	color:blue
1	Стаки	стаки	ADV	Adv	_	4	advmod:eval	_	_
2	монь	мон	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	4	obj	_	GTtags=Pers,Sg1,Gen
3	ёрат	ёрамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres	0	root	_	GTtags=Ind,Prs,ScSg2
4	тиемс	тиемс	VERB	V	VerbForm=Inf	3	xcomp	_	GTtags=Inf
5	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	6	aux:neg	_	GTtags=Aux,Neg
6	моли	молемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	7	acl	_	GTtags=Ind,Prs,ScSg3
7	ярмакокс	ярмак	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	4	xcomp	_	GTtags=SP,Tra,Indef|SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advmod:eval	color:blue
1	Лётчикне	лётчик	NOUN	N	Case=Nom|Definite=Def|Number=Plur	6	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	улема	улема	PART	Pcle	_	6	advmod:eval	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	_
5	кядьса	кядь	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	6	obl:inst	_	_
6	токсесазь	токсемс	VERB	V	Mood=Ind|Number[obj]=Plur|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Pres|Valency=2	0	root	_	_
7	коволнятнень	ковол	NOUN	N	Case=Gen|Definite=Def|Derivation=Dimin|Number=Plur	6	obj	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advmod:eval	color:blue
1	Тя	тя	DET	Det	Case=Nom|Number=Sing|PronType=Dem	5	expl	_	GTtags=Dem,Sg,Nom
2	Млай	Млай	PROPN	N	Case=Nom|Definite=Def|NameType=Giv|Number=Sing	5	nsubj:cop	_	GTtags=Prop,Sg,Nom,Def
3	въдь	вдь	PART	Pcle	Style=Ped	5	advmod:eval	_	ModernForm=вдь
4	пинекс	пине	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	5	nmod	_	GTtags=SP,Tra,Indef
5	кяжи	кяжи	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


