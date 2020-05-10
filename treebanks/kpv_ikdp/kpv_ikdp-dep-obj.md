---
layout: base
title:  'Statistics of obj in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `obj`

This relation is universal.

43 nodes (3%) are attached to their parents as `obj`.

26 instances of `obj` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.67441860465116.

The following 3 pairs of parts of speech are connected with `obj`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (34; 79% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (8; 19% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	Ми	ми	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	вӧдитам	вӧдитны	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres	0	root	_	_
3	картапель	картапель	NOUN	N	Case=Nom|Number=Sing	2	obj	_	Lang=Mixed|SpaceAfter=No
4	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obj	color:blue
1	Сэсся	сэсся	ADV	Adv	_	2	advmod	_	_
2	велэдчи	велӧдчыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	_
4	быдтіс	быдтыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	_
5	баб	баб	NOUN	N	Case=Nom|Number=Sing	4	nsubj	_	Lang=Mixed
6	миянумес	ми	PRON	Pron	Case=Acc|Number=Plur|Person=1|PronType=Prs	4	obj	_	SpaceAfter=No
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


