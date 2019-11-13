---
layout: base
title:  'Statistics of appos in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `appos`

This relation is universal.

2 nodes (0%) are attached to their parents as `appos`.

2 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `appos`: <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 appos	color:blue
1	Тоса	тоса	ADV	Adv	_	2	advmod	_	_
2	ванан	ваномс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=2	0	root	_	SpaceAfter=No
3	:	:	PUNCT	CLB	_	6	punct	_	_
4	фкя	фкя	NUM	Num	NumType=Card	5	nummod	_	_
5	гулянясь	гуляня	NOUN	N	Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	_
6	сутямсь	сутямомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	2	ccomp	_	_
7	и	и	CCONJ	CC	_	8	cc	_	_
8	ащи	ащемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	6	conj	_	_
9	фкя	фкя	NUM	Num	NumType=Card	10	nummod	_	_
10	вастса	васта	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	8	obl	_	SpaceAfter=No
11	,	,	PUNCT	CLB	_	18	punct	_	_
12	а	а	CCONJ	CC	_	18	cc	_	_
13	сонь	сон	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	17	nmod	_	SpaceAfter=No
14	,	,	PUNCT	CLB	_	15	punct	_	_
15	беднаять	бедная	NOUN	N	Case=Gen|Definite=Def|Number=Sing	13	appos	_	SpaceAfter=No
16	,	,	PUNCT	CLB	_	15	punct	_	_
17	пацяняц	пацяня	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	18	nsubj	_	_
18	синдевсь	синдевомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	6	conj	_	SpaceAfter=No
19	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	Сон	сон	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	кассь	касомс	VERB	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
3	Парижса	Парижса	PROPN	_	Case=Nom|Definite=Ind|Number=Sing	2	obl	_	GTtags=Prop,Sg,Nom,Indef|SpaceAfter=No
4	.	.	PUNCT	CLB	_	2	punct	_	_
5	Парижсь	Парижсь	PROPN	_	Case=Nom|Definite=Def|Number=Sing	10	nsubj	_	GTtags=Prop,Sg,Nom,Def
6	–	–	PUNCT	_	_	7	punct	_	_
7	тя	тя	PRON	_	Case=Nom|Number=Sing|PronType=Dem	5	appos	_	GTtags=Dem,Sg,Nom
8	Франциять	Франция	PROPN	_	Case=Gen|Definite=Def|Number=Sing	10	nmod	_	GTtags=Prop,Sem/Plc,Sg,Gen,Def
9	ине	ине	ADJ	_	Case=Nom|Definite=Ind|Number=Sing	10	amod	_	GTtags=Sg,Nom,Indef
10	ошец	ош	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	parataxis	_	GTtags=Sg,Nom,PxSg3|SpaceAfter=No
11	.	.	PUNCT	CLB	_	10	punct	_	_

~~~


