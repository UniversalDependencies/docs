---
layout: base
title:  'Statistics of appos in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `appos`

This relation is universal.

11 nodes (1%) are attached to their parents as `appos`.

11 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.45454545454545.

The following 7 pairs of parts of speech are connected with `appos`: <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (5; 45% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt> (1; 9% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 9% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 9% instances), <tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 appos	color:blue
1	Ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	рӧдитчи	рӧдитчыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	сорок	сорок	NUM	Num	Case=Nom|NumType=Card	4	nummod	_	Lang=Rus
4	первом	первый	ADJ	A	Case=Ins|Number=Sing	5	amod	_	Lang=Rus
5	году	год	NOUN	N	Case=Dat|Number=Sing	2	obl	_	Lang=Rus|SpaceAfter=No
6	,	,	PUNCT	CLB	_	5	punct	_	_
7	девятого	девятый	ADJ	A	Case=Gen|Number=Sing	8	amod	_	Lang=Rus
8	юля	юль	NOUN	N	Case=Gen|Number=Sing	5	appos	_	Lang=Rus|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 appos	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	Выль	выл	ADJ	A	Case=Nom|Number=Sing	2	nmod	_	_
2	во	во	NOUN	N	Case=Nom|Number=Sing	7	obl	_	_
3	бӧрас	бӧрын	ADP	Po	Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	case	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	_
5	значит	значит	PART	Pcle	_	2	appos	_	Lang=Rus|SpaceAfter=No
6	,	,	PUNCT	CLB	_	5	punct	_	_
7	машкуритчӧны	машкуритчыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


