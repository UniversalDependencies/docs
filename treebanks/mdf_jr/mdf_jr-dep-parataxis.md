---
layout: base
title:  'Statistics of parataxis in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `parataxis`

This relation is universal.

15 nodes (1%) are attached to their parents as `parataxis`.

12 instances of `parataxis` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.93333333333333.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (10; 67% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 parataxis	color:blue
1	Кода	кода	ADV	_	_	2	advmod:mmod	_	_
2	арьсят	арьсемс	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|Valency=2	0	root	_	GTtags=TV,Ind,Prs,ScSg2|SpaceAfter=No
3	,	,	PUNCT	CLB	_	6	punct	_	_
4	мзярда	мзярда	ADV	_	_	6	advmod:tmod	_	_
5	тон	тон	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	GTtags=Pers,Sg2,Nom
6	сават	савомс	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|Valency=1	2	parataxis	_	GTtags=IV,Ind,Prs,ScSg2|SpaceAfter=No
7	?	?	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 parataxis	color:blue
1	Велень	веле	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	2	nmod	_	GTtags=SP,Gen,Indef
2	стирьхне	стирь	NOUN	N	Case=Nom|Definite=Def|Number=Plur	8	nsubj:cop	_	GTtags=Pl,Nom,Def|SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	_	_
4	тонцьке	тонць	PRON	Pron	Case=Nom|Clitic=AddGA|Number=Sing|Person=2|PronType=Prs|Reflex=Yes	5	nsubj	_	GTtags=Refl,Sg2,Nom,Clt/Add
5	содасак	содамс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Tense=Pres	8	parataxis	_	GTtags=Ind,Prs,ScSg2,OcSg3|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	5	punct	_	_
7	кодама	кодама	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	8	advmod:deg	_	GTtags=Interr,Sg,Nom,Indef
8	мазыхть	мазы	ADJ	A	Case=Nom|Definite=Ind|Number=Plur	0	root	_	GTtags=Pl,Nom,Indef
9	и	и	CCONJ	CC	_	11	cc	_	_
10	тевонь	тев	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	11	obj	_	GTtags=SP,Gen,Indef
11	кельгихть	кельгомс	VERB	V	Case=Nom|Definite=Ind|Derivation=NomAg|Number=Plur	8	conj	_	GTtags=NomAg,Pl,Nom,Indef|SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 parataxis	color:blue
1	–	–	PUNCT	PUNCT	_	2	punct	_	_
2	Мон	мон	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	0	root	_	GTtags=Pers,Sg1,Nom
3	директорсь	директор	NOUN	N	Case=Nom|Definite=Def|Number=Sing	2	nsubj:cop	_	GTtags=Sg,Nom,Def|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	–	–	PUNCT	PUNCT	_	6	punct	_	_
6	пшкядсь	пшкядемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	2	parataxis	_	GTtags=IV,Ind,Prt1,ScSg3
7	сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	GTtags=Pers,Sg3,Nom
8	пцтай	пцтай	ADV	Adv	_	9	advmod:deg	_	_
9	весяласта	весяласта	ADV	Adv	AdvType=Man	6	advmod:mmod	_	GTtags=Manner|SpaceAfter=No
10	,	,	PUNCT	CLB	_	13	punct	_	_
11	и	и	CCONJ	CC	_	13	cc	_	_
12	сельмованфоц	сельмованф	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	13	nsubj	_	GTtags=Sg,Nom,PxSg3
13	курькстсь	курькстомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	2	conj	_	GTtags=IV,Ind,Prt1,ScSg3
14	Колянь	Коля	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	15	nmod	_	GTtags=Prop,SP,Gen,Indef
15	ронгонц	ронга	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	13	obl:lmp	_	GTtags=Sg,Gen,PxSg3
16	кувалмова	кувалма	NOUN	N	Case=Prl|Definite=Ind|Number=Plur,Sing	15	case	_	GTtags=SP,Prl,Indef|SpaceAfter=No
17	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


