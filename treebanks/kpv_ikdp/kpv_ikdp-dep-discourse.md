---
layout: base
title:  'Statistics of discourse in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `discourse`

This relation is universal.

8 nodes (1%) are attached to their parents as `discourse`.

4 instances of `discourse` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 8 pairs of parts of speech are connected with `discourse`: <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-INTJ.html">INTJ</a></tt> (1; 13% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-INTJ.html">INTJ</a></tt> (1; 13% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 13% instances), <tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 13% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-INTJ.html">INTJ</a></tt> (1; 13% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 13% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 discourse	color:blue
1	Ас	ас	ADJ	A	Case=Nom|Number=Sing|PronType=Prs	6	reparandum	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	мыйке	мыйке	INTJ	Interj	Case=Nom|Number=Sing	1	discourse	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	ас	ас	ADJ	A	Case=Nom|Number=Sing|PronType=Prs	6	amod	_	_
6	муас	му	NOUN	N	Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obl	_	_
7	рӧдиттьыны	рӧдиттьыны	VERB	V	VerbForm=Inf	8	xcomp	_	Lang=Mixed
8	мӧдэма	мӧдны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
9	,	,	PUNCT	CLB	_	10	punct	_	_
10	абу	абу	AUX	Pcle	Polarity=Neg	11	aux:neg	_	_
11	мӧдэма	мӧдны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	conj	_	SpaceAfter=No
12	,	,	PUNCT	CLB	_	13	punct	_	_
13	оз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	16	reparandum	_	SpaceAfter=No
14	,	,	PUNCT	CLB	_	15	punct	_	_
15	абу	абу	AUX	Pcle	Polarity=Neg	16	aux:neg	_	_
16	мӧдэма	мӧдны	VERB	V	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	conj	_	_
17	тытэн	тытэн	ADV	Adv	_	16	obl	_	SpaceAfter=No
18	,	,	PUNCT	CLB	_	19	punct	_	_
19	Из	из	PROPN	N	Case=Nom|Number=Sing	21	obl	_	_
20	сайын	сайын	ADP	Po	Case=Ine|Number=Sing	19	case	_	_
21	рӧдиттьынысэ	рӧдиттьыны	VERB	V	VerbForm=Inf	16	ccomp	_	Lang=Mixed|SpaceAfter=No
22	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


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
7	телестанция	телестанция	NOUN	N	Case=Nom|Number=Sing	5	conj	_	Lang=Rus
8	вылын	вылын	ADP	Po	Case=Ine|Number=Sing	7	case	_	_
9	рӧбиті	рӧбитны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	Lang=Mixed
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


