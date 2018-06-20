---
layout: base
title:  'Statistics of obj in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `obj`

This relation is universal.

25 nodes (3%) are attached to their parents as `obj`.

16 instances of `obj` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.88.

The following 3 pairs of parts of speech are connected with `obj`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (18; 72% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (6; 24% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obj	color:blue
1	Тундраын	тундра	NOUN	N	Case=Ine|Number=Sing	2	obl	_	Lang=Mixed
2	ветлі	ветлыны	VERB	V	Mood=Ind|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	сизим	сизим	NUM	Num	Case=Nom|Number=Sing|NumType=Card	4	nummod	_	_
4	во	во	NOUN	N	Case=Nom|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	керка	керка	NOUN	N	Case=Nom|Number=Sing	7	obj	_	_
7	кари	карны	VERB	V	Mood=Ind|Person=1|Tense=Past|VerbForm=Fin	2	conj	_	_
8	аслум	аслум	PRON	Pron	Case=Dat|Person=1	9	nmod	_	_
9	вокъяскед	вок	NOUN	N	Case=Com|Number=Plur	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	CLB	_	11	punct	_	_
11	дядьяскед	дядь	NOUN	N	Case=Com|Number=Plur	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obj	color:blue
1	Сэсся	сэсся	ADV	Adv	_	2	advmod	_	_
2	велэдчи	велӧдчыны	VERB	V	Mood=Ind|Person=1|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	2	punct	_	_
4	быдтіс	быдтыны	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	_
5	баб	баб	NOUN	N	Case=Acc|Number=Sing	4	nsubj	_	_
6	миянумес	ми	PRON	Pron	Case=Acc|Person=1|PronType=Prs	4	obj	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 obj	color:blue
1	А	а	CCONJ	CC	_	4	cc	_	_
2	ае	ай	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	4	nsubj	_	_
3	тоже	тоже	PART	Pcle	_	4	discourse	_	_
4	рӧбитіс	рӧбитны	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	столярын	столяр	NOUN	N	Case=Ine|Number=Sing	4	obl	_	Lang=Rus
6	ли	ли	PART	Pcle	_	5	discourse	_	Lang=Mixed
7	слесарьын	слесарь	NOUN	N	Case=Ine|Number=Sing	5	appos	_	Lang=Rus
8	ли	ли	PART	Pcle	_	7	discourse	_	Lang=Mixed|SpaceAfter=No
9	,	,	PUNCT	CLB	_	8	punct	_	_
10	но	но	CCONJ	CC	_	15	cc	_	Lang=Mixed|SpaceAfter=No
11	,	,	PUNCT	CLB	_	10	punct	_	_
12	чё	чё	PART	Pcle	_	15	obj	_	Lang=Rus|SpaceAfter=No|Note=Check
13	-	-	PUNCT	CLB	_	12	goeswith	_	SpaceAfter=No
14	то	чё-то	PART	Pcle	_	12	goeswith	_	Lang=Rus
15	делал	делать	VERB	V	Number=Sing	4	conj	_	Lang=Rus|SpaceAfter=No
16	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


