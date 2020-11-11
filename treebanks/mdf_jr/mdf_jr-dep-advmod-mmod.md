---
layout: base
title:  'Statistics of advmod:mmod in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advmod:mmod`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="mdf_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="mdf_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

9 nodes (1%) are attached to their parents as `advmod:mmod`.

5 instances of `advmod:mmod` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.11111111111111.

The following 4 pairs of parts of speech are connected with `advmod:mmod`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (6; 67% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-PART.html">PART</a></tt> (1; 11% instances), <tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PART.html">PART</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 advmod:mmod	color:blue
1	Уборкать	уборка	NOUN	N	Case=Gen|Definite=Def|Number=Sing	5	obl:tmod	_	GTtags=Sg,Gen,Def
2	пингста	пингста	ADP	Adp	Case=Ela	1	case	_	GTtags=Ela
3	сембе	сембе	DET	Det	Case=Nom|Definite=Ind|Number=Sing	4	det	_	GTtags=Qnt,Sg,Nom,Indef
4	ломаттне	ломань	NOUN	N	Case=Nom|Definite=Def|Number=Plur	5	nsubj	_	GTtags=Pl,Nom,Def
5	работасть	работамс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScPl3
6	пяк	пяк	ADV	Adv	AdvType=Deg	7	advmod:deg	_	GTtags=Deg
7	вишкста	вишкста	ADV	Adv	_	5	advmod:mmod	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advmod:mmod	color:blue
1	Тя	тя	DET	Det	Case=Nom|Number=Sing|PronType=Dem	5	expl	_	GTtags=Dem,Sg,Nom
2	Млай	Млай	PROPN	N	Case=Nom|Definite=Def|NameType=Giv|Number=Sing	5	nsubj:cop	_	GTtags=Prop,Sg,Nom,Def
3	въдь	вдь	PART	Pcle	Style=Ped	5	advmod:mmod	_	ModernForm=вдь
4	пинекс	пине	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	5	nmod	_	GTtags=SP,Tra,Indef
5	кяжи	кяжи	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 advmod:mmod	color:blue
1	―	―	PUNCT	PUNCT	_	3	punct	_	_
2	Цёранянди	цёраня	NOUN	N	Case=Dat|Definite=Ind|Number=Plur,Sing	3	xcomp	_	Gloss[eng]=boy
3	шачелеть	шачемс	VERB	V	Mood=Cnj|Number[subj]=Sing|Person[subj]=2|Valency=1	0	root	_	Gloss[eng]=be-born|SpaceAfter=No
4	,	,	PUNCT	CLB	_	7	punct	_	_
5	сяда	сяда	ADV	Adv	_	7	advmod:deg	_	Gloss[eng]=more
6	кице	ки	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	7	nsubj	_	Gloss[eng]=road
7	удалаль	удаламс	VERB	V	Mood=Cnj|Number[subj]=Sing|Person[subj]=3|Valency=1	3	conj	_	Gloss[eng]=succeed|SpaceAfter=No
8	,	,	PUNCT	CLB	_	9	punct	_	_
9	лётчикокска	лётчик	NOUN	N	Case=Tra|Clitic=AddGA|Definite=Ind|Number=Plur,Sing	13	xcomp	_	Gloss[eng]=pilot|SpaceAfter=No
10	,	,	PUNCT	CLB	_	11	punct	_	_
11	пади	пади	ADV	Adv	_	13	advmod:mmod	_	Gloss[eng]=might|SpaceAfter=No
12	,	,	PUNCT	CLB	_	11	punct	_	_
13	улелеть	улемс	AUX	V	Mood=Cnj|Number[subj]=Sing|Person[subj]=2|Valency=1	3	conj	_	Gloss[eng]=be|SpaceAfter=No
14	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


