---
layout: base
title:  'Statistics of advmod:tmod in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="kpv_ikdp-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="kpv_ikdp-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="kpv_ikdp-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="kpv_ikdp-dep-advmod-mmod.html">advmod:mmod</a></tt>.

31 nodes (2%) are attached to their parents as `advmod:tmod`.

26 instances of `advmod:tmod` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.45161290322581.

The following 4 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (24; 77% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (5; 16% instances), <tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:tmod	color:blue
1	И	и	CCONJ	CC	_	2	cc	_	Lang=Mixed
2	этія	этія	PRON	Pron	_	6	discourse	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	_
4	миян	ми	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
5	ӧттӧрйи	ӧттӧрйи	ADV	Adv	_	6	advmod:tmod	_	_
6	вӧрзялісныс	вӧрзявны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	_
7	Из	из	PROPN	N	Case=Nom|Number=Sing	6	obl	_	_
8	сае	сайын	ADP	Po	Case=Ill|Number=Sing	7	case	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 advmod:tmod	color:blue
1	Ваыс	ва	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	csubj	_	_
2	зэй	зэй	ADV	Adv	_	3	advmod:deg	_	_
3	ыджыд	ыджыд	ADJ	A	Case=Nom|Number=Sing	1	amod	_	_
4	кор	кор	ADV	Adv	_	1	advmod:tmod	_	_
5	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	1	cop	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	дак	дак	SCONJ	CS	_	9	mark	_	Lang=Mixed
8	берегсэ	берег	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obj	_	_
9	жугедэді	жыгӧдны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
10	,	,	PUNCT	CLB	_	9	punct	_	_
11	сідз	сідз	ADV	Adv	_	13	mark	_	_
12	и	и	PART	Pcle	_	13	advmod	_	Lang=Mixed
13	смыло	смыть	VERB	V	Mood=Ind|Number=Sing|Tense=Past	9	conj	_	Lang=Rus
14	всю	весь	DET	Det	Case=Acc|Number=Sing	15	det	_	Lang=Rus
15	деревню	деревня	NOUN	N	Case=Acc|Number=Sing	13	obj	_	Lang=Rus|SpaceAfter=No
16	.	.	PUNCT	CLB	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 23 advmod:tmod	color:blue
1	Ну	ну	PART	Pcle	_	3	cc	_	Lang=Mixed|SpaceAfter=No|Note=CheckAll
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	палялі	палявны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	_
4	ас	ас	ADJ	A	Case=Nom|Number=Sing|PronType=Prs	5	amod	_	_
5	местэам	местӧ	NOUN	N	Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	obl	_	Lang=Mixed|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	а	а	CCONJ	CC	_	9	cc	_	Lang=Mixed
8	мӧд	мӧд	PRON	Pron	PronType=Dem	9	det	_	_
9	луннас	лун	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	acl	_	_
10	ми	ми	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	15	nsubj	_	_
11	уже	уже	ADV	Adv	_	15	advmod:tmod	_	Lang=Mixed|SpaceAfter=No
12	,	,	PUNCT	CLB	_	11	punct	_	_
13	абу	абу	AUX	Pcle	Polarity=Neg	15	aux:neg	_	_
14	мӧд	мӧд	PRON	Pron	PronType=Dem	15	det	_	_
15	луннас-а	луннас	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	22	csubj	_	SpaceAfter=No
16	,	,	PUNCT	CLB	_	15	punct	_	_
17	сы	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	18	det	_	_
18	луннас	луннас	NOUN	N	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	15	conj	_	_
19	же	жӧ	PART	Pcle	_	18	advmod	_	Lang=Mixed
20	вот	вот	PART	Pcle	_	22	advmod	_	Lang=Mixed|SpaceAfter=No
21	,	,	PUNCT	CLB	_	20	punct	_	_
22	тытэн	тытэн	ADV	Adv	_	3	advcl	_	_
23	нин	нин	ADV	Adv	_	22	advmod:tmod	_	_
24	вӧлі	вӧвны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	22	cop	_	SpaceAfter=No
25	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


