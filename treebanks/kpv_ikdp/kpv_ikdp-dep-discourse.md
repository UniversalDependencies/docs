---
layout: base
title:  'Statistics of discourse in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `discourse`

This relation is universal.

6 nodes (0%) are attached to their parents as `discourse`.

3 instances of `discourse` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 6 pairs of parts of speech are connected with `discourse`: <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-INTJ.html">INTJ</a></tt> (1; 17% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 17% instances), <tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 17% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-INTJ.html">INTJ</a></tt> (1; 17% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 17% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 discourse	color:blue
1	Телевидение	телевидение	NOUN	N	Case=Nom|Number=Sing	9	obl	_	Lang=Rus|SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	ой	ой	INTJ	Interj	_	5	discourse	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	телевышка	телевышка	NOUN	N	Case=Nom|Number=Sing	1	conj	_	Lang=Rus|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	телестанция	телестанция	NOUN	N	Case=Nom|Number=Sing	1	conj	_	Lang=Rus
8	вылын	вылын	ADP	Po	Case=Ine|Number=Sing	7	case	_	_
9	рӧбиті	рӧбитны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	Lang=Mixed
10	кык	кык	NUM	Num	Case=Nom|Number=Sing|NumType=Card	11	nummod	_	_
11	во	во	NOUN	N	Case=Nom|Number=Sing	9	obl	_	SpaceAfter=No
12	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 discourse	color:blue
1	Ребята	ребята	NOUN	N	Case=Nom|Number=Plur	2	nsubj	_	Lang=Rus
2	ыдзыдэсь	ыджыд	ADJ	A	Case=Nom|Number=Plur	0	root	_	SpaceAfter=No
3	,	_	PUNCT	CLB	_	2	punct	_	_
4	ребята	ребята	NOUN	N	Case=Nom|Number=Plur	9	nsubj	_	Lang=Rus|SpaceAfter=No
5	-	-	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
6	то	то	PART	Pcle	_	4	discourse	_	Lang=Rus
7	у	у	ADP	Pr	_	8	case	_	Lang=Rus
8	меня	я	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	9	obl	_	Lang=Rus
9	большие	большой	ADJ	A	Case=Nom|Number=Plur	2	appos	_	Lang=Rus|SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 discourse	color:blue
1	А	а	CCONJ	CC	_	4	cc	_	_
2	ае	ай	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	4	nsubj	_	_
3	тоже	тожӧ	PART	Pcle	_	4	advmod	_	_
4	рӧбитіс	рӧбитны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
5	столярын	столяр	NOUN	N	Case=Ine|Number=Sing	4	obl	_	Lang=Rus
6	ли	ли	PART	Pcle	_	5	advmod	_	Lang=Mixed
7	слесарьын	слесарь	NOUN	N	Case=Ine|Number=Sing	5	appos	_	Lang=Rus
8	ли	ли	PART	Pcle	_	7	advmod	_	Lang=Mixed|SpaceAfter=No
9	,	,	PUNCT	CLB	_	8	punct	_	_
10	но	но	CCONJ	CC	_	15	cc	_	Lang=Mixed|SpaceAfter=No
11	,	,	PUNCT	CLB	_	10	punct	_	_
12	чё	чё	PART	Pcle	_	15	obj	_	Lang=Rus|SpaceAfter=No|Note=Check
13	-	-	PUNCT	PUNCT	_	12	punct	_	SpaceAfter=No
14	то	то	PART	Pcle	_	12	discourse	_	Lang=Rus
15	делал	делать	VERB	V	Mood=Ind|Number=Sing|Tense=Past	4	conj	_	Lang=Rus|SpaceAfter=No
16	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


