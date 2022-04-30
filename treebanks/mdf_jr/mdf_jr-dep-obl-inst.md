---
layout: base
title:  'Statistics of obl:inst in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `obl:inst`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-obl.html">obl</a></tt>.
There are also 9 other language-specific subtypes of `obl`: <tt><a href="mdf_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="mdf_jr-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="mdf_jr-dep-obl-comp.html">obl:comp</a></tt>, <tt><a href="mdf_jr-dep-obl-freq.html">obl:freq</a></tt>, <tt><a href="mdf_jr-dep-obl-lfrom.html">obl:lfrom</a></tt>, <tt><a href="mdf_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="mdf_jr-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="mdf_jr-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="mdf_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

15 nodes (0%) are attached to their parents as `obl:inst`.

13 instances of `obl:inst` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4.

The following 3 pairs of parts of speech are connected with `obl:inst`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (13; 87% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:inst	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:inst	color:blue
1	Весть	весть	ADV	Adv	_	5	advmod:freq	_	_
2	самолётса	самолёт	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	3	obl:inst	_	_
3	лиендемась	лиендема	NOUN	N	Case=Nom|Definite=Def|Number=Sing	5	csubj	_	_
4	прясон	пря	NOUN	N	Case=Ine|Number=Plur,Sing|Number[psor]=Sing|Person[psor]=1	5	obl:lmod	_	_
5	шарсь	шаромс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Valency=1	0	root	_	_
6	мадомста	мадомс	VERB	V	Case=Ela|VerbForm=Conv	5	advcl:tcl	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl:inst	color:blue
1	Цёрашабась	цёрашаба	NOUN	N	Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	GTtags=Sg,Nom,Def
2	лезнель	лезнемс	VERB	V	Aspect=Hab|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt2,ScSg3
3	тейнза	сон	PRON	Pron	Case=Dat|Number=Sing|Person=3|PronType=Prs|Variant=Short	2	obl	_	GTtags=Pers,Sg3,Dat,Short
4	мезьса	мезе	PRON	Pron	Case=Ine|Number=Plur,Sing|PronType=Int	5	obl:inst	_	GTtags=Interr,SP,Ine
5	маштсь	маштомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	2	conj	_	GTtags=Ind,Prt1,ScSg3|SpaceAfter=No
6	:	:	PUNCT	PUNCT	_	7	punct	_	_
7	каннель	каннемс	VERB	V	Aspect=Hab|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	2	parataxis	_	GTtags=Ind,Prt2,ScSg3
8	библиотекста	библиотека	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	7	obl:lfrom	_	GTtags=Err/Orth,SP,Ela,Indef
9	книгат	книга	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	7	obj	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	11	punct	_	_
11	нолязень	нолямс	VERB	V	Mood=Ind|Number[obj]=Plur|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past	7	conj	_	GTtags=Ind,Prt1,ScSg3,OcPl3
12	почтовай	почтовай	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	13	amod	_	GTtags=Sg,Nom,Indef
13	ящикс	ящик	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	11	obl:lto	_	GTtags=SP,Ill,Indef
14	сёрманзон	сёрма	NOUN	N	Case=Gen|Number=Plur|Number[psor]=Sing|Person[psor]=3	11	obj	_	GTtags=Pl,Gen,PxSg3|SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


