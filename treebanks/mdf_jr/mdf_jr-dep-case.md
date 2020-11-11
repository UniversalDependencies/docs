---
layout: base
title:  'Statistics of case in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `case`

This relation is universal.

33 nodes (2%) are attached to their parents as `case`.

33 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.03030303030303.

The following 5 pairs of parts of speech are connected with `case`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (26; 79% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (4; 12% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	Рамаль	рамамс	VERB	V	Mood=Cnj|Number[subj]=Sing|Person[subj]=3|Valency=1	0	root	_	_
2	хуш	хуш	ADV	Adv	_	5	advmod	_	_
3	тядязень	тядя	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	nmod	_	_
4	муськома	муськомс	VERB	V	Case=Nom|Definite=Ind|Number=Sing|Valency=2|VerbForm=Vnoun	5	nmod	_	_
5	очконц	очка	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	1	obj	_	_
6	эшка	эшка	ADP	Adp	AdpType=Post|Case=Comp	5	case	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Мезень	мезе	PRON	Pron	Case=Gen|Number=Plur,Sing|PronType=Int	3	obl	_	GTtags=Interr|SP,Gen
2	лангс	лангс	ADP	Po	Case=Ill	1	case	_	GTtags=Ill
3	ванат	ваномс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScSg2|SpaceAfter=No
4	?	?	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 case	color:blue
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


