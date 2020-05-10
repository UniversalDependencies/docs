---
layout: base
title:  'Statistics of parataxis in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `parataxis`

This relation is universal.

4 nodes (0%) are attached to their parents as `parataxis`.

4 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 3 pairs of parts of speech are connected with `parataxis`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 25% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 parataxis	color:blue
1	Кода	кода	ADV	_	_	2	advmod	_	_
2	арьсят	арьсемс	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|Valency=2	0	root	_	GTtags=TV,Ind,Prs,ScSg2|SpaceAfter=No
3	,	,	PUNCT	CLB	_	6	punct	_	_
4	мзярда	мзярда	ADV	_	_	6	advmod:tmod	_	_
5	тон	тон	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	GTtags=Pers,Sg2,Nom
6	сават	савомс	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|Valency=1	2	parataxis	_	GTtags=IV,Ind,Prs,ScSg2|SpaceAfter=No
7	?	?	PUNCT	CLB	_	2	punct	_	_

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
6	пшкядсь	пшкядемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	2	parataxis	_	GTtags=IV,Ind,Prt1,ScSg3
7	сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	GTtags=Pers,Sg3,Nom
8	пцтай	пцтай	ADV	Adv	_	9	advmod:deg	_	_
9	весяласта	весяласта	ADV	Adv	AdvType=Man	6	advmod	_	GTtags=Manner|SpaceAfter=No
10	,	,	PUNCT	CLB	_	13	punct	_	_
11	и	и	CCONJ	CC	_	13	cc	_	_
12	сельмованфоц	сельмованф	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	13	nsubj	_	GTtags=Sg,Nom,PxSg3
13	курькстсь	курькстомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	2	conj	_	GTtags=IV,Ind,Prt1,ScSg3
14	Колянь	Коля	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	15	nmod	_	GTtags=Prop,SP,Gen,Indef
15	ронгонц	ронга	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	13	obl:lmod	_	GTtags=Sg,Gen,PxSg3
16	кувалмова	кувалма	NOUN	N	Case=Prl|Definite=Ind|Number=Plur,Sing	15	case	_	GTtags=SP,Prl,Indef|SpaceAfter=No
17	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 parataxis	color:blue
1	Сон	сон	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	кассь	касомс	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
3	Парижса	Париж	PROPN	_	Case=Ine|Definite=Ind|NameType=Geo|Number=Plur,Sing	2	obl:lmod	_	GTtags=Prop,Sg,Nom,Indef|SpaceAfter=No
4	.	.	PUNCT	CLB	_	2	punct	_	_
5	Парижсь	Париж	PROPN	_	Case=Nom|Definite=Def|NameType=Geo|Number=Sing	10	nsubj	_	GTtags=Prop,Sg,Nom,Def
6	–	–	PUNCT	_	_	7	punct	_	_
7	тя	тя	PRON	_	Case=Nom|Number=Sing|PronType=Dem	5	appos	_	GTtags=Dem,Sg,Nom
8	Франциять	Франция	PROPN	_	Case=Gen|Definite=Def|NameType=Geo|Number=Sing	10	nmod	_	GTtags=Prop,Sem/Plc,Sg,Gen,Def
9	ине	ине	ADJ	_	Case=Nom|Definite=Ind|Number=Sing	10	amod	_	GTtags=Sg,Nom,Indef
10	ошец	ош	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	parataxis	_	GTtags=Sg,Nom,PxSg3|SpaceAfter=No
11	.	.	PUNCT	CLB	_	10	punct	_	_

~~~


