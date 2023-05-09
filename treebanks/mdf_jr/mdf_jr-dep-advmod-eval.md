---
layout: base
title:  'Statistics of advmod:eval in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advmod:eval`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-advmod.html">advmod</a></tt>.
There are also 8 other language-specific subtypes of `advmod`: <tt><a href="mdf_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="mdf_jr-dep-advmod-cmp.html">advmod:cmp</a></tt>, <tt><a href="mdf_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="mdf_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="mdf_jr-dep-advmod-freq.html">advmod:freq</a></tt>, <tt><a href="mdf_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

6 nodes (0%) are attached to their parents as `advmod:eval`.

6 instances of `advmod:eval` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `advmod:eval`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (4; 67% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-PART.html">PART</a></tt> (1; 17% instances), <tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advmod:eval	color:blue
1	И	и	INTJ	Interj	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	3	punct	_	_
3	пади	пади	ADV	Adv	AdvType=Mod	5	advmod:eval	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	няевонь	няевомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Past|VerbForm=Fin	0	root	_	GTtags=Ind,Prt1,ScSg1
6	кеветиешка	кеветие	NUM	Num	Case=Cmp|Definite=Ind|Number=Plur,Sing|NumType=Card	7	nummod	_	GTtags=Card,SP,Cmpr,Indef
7	кизоса	киза	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	8	nmod:tmod	_	GTtags=SP,Ine,Indef
8	цёранякс	цёраня	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	5	xcomp	_	GTtags=SP,Tra,Indef|SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	5	punct	_	_

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


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 advmod:eval	color:blue
1	―	―	PUNCT	PUNCT	_	3	punct	_	_
2	Цёранянди	цёраня	NOUN	N	Case=Dat|Definite=Ind|Number=Plur,Sing	3	xcomp	_	Gloss[eng]=boy
3	шачелеть	шачемс	VERB	V	Mood=Sub|Number[subj]=Sing|Person[subj]=2	0	root	_	Gloss[eng]=be-born|SpaceAfter=No
4	,	,	PUNCT	CLB	_	7	punct	_	_
5	сяда	сяда	ADV	Adv	_	7	advmod:deg	_	Gloss[eng]=more
6	кице	ки	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	7	nsubj	_	Gloss[eng]=road
7	удалаль	удаламс	VERB	V	Mood=Sub|Number[subj]=Sing|Person[subj]=3	3	conj	_	Gloss[eng]=succeed|SpaceAfter=No
8	,	,	PUNCT	CLB	_	9	punct	_	_
9	лётчикокска	лётчик	NOUN	N	Case=Tra|Clitic=AddGA|Definite=Ind|Number=Plur,Sing	13	xcomp	_	Gloss[eng]=pilot|SpaceAfter=No
10	,	,	PUNCT	CLB	_	11	punct	_	_
11	пади	пади	ADV	Adv	AdvType=Mod	13	advmod:eval	_	Gloss[eng]=might|SpaceAfter=No
12	,	,	PUNCT	CLB	_	11	punct	_	_
13	улелеть	улемс	AUX	V	Mood=Sub|Number[subj]=Sing|Person[subj]=2	3	conj	_	Gloss[eng]=be|SpaceAfter=No
14	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


