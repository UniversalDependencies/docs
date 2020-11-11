---
layout: base
title:  'Statistics of xcomp in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `xcomp`

This relation is universal.

27 nodes (2%) are attached to their parents as `xcomp`.

18 instances of `xcomp` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.14814814814815.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (16; 59% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (7; 26% instances), <tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-DET.html">DET</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 xcomp	color:blue
1	Сяльде	сяльде	ADV	Adv	_	5	advmod:tmod	_	_
2	мялезень	мяль	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	obj	_	_
3	петемс	петемс	VERB	V	Valency=2|VerbForm=Inf	5	xcomp	_	_
4	сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	рамась	рамамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	_
6	самолёткя	самолёт	NOUN	N	Case=Nom|Definite=Ind|Derivation=Dimin|Number=Sing	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	Сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	симсь	симомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3
3	чайда	чай	NOUN	N	Case=Abl|Definite=Ind|Number=Plur,Sing	2	obj	_	GTtags=SP,Abl,Indef
4	—	—	PUNCT	PUNCT	_	6	punct	_	_
5	ведняське	ведь	NOUN	N	Case=Nom|Clitic=AddGA|Definite=Def|Derivation=Dimin|Number=Sing	6	nsubj	_	GTtags=Der/Dimin,N,Sg,Nom,Def,Foc
6	марявсь	марявомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	2	conj	_	GTtags=IV,Ind,Prt1,ScSg3
7	танцти	танцти	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	8	amod	_	GTtags=Sg,Nom,Indef
8	симомбялькс	симомбяль	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	6	xcomp	_	GTtags=SP,Tra,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 xcomp	color:blue
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


