---
layout: base
title:  'Statistics of advmod:mmod in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `advmod:mmod`

This relation is a language-specific subtype of <tt><a href="kpv_ikdp-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="kpv_ikdp-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="kpv_ikdp-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="kpv_ikdp-dep-advmod-tmod.html">advmod:tmod</a></tt>.

10 nodes (1%) are attached to their parents as `advmod:mmod`.

9 instances of `advmod:mmod` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.8.

The following 4 pairs of parts of speech are connected with `advmod:mmod`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (4; 40% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (3; 30% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (2; 20% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 advmod:mmod	color:blue
1	Кочегариті	кочегаритны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	4	punct	_	_
3	ӧкмыс	ӧкмыс	NUM	Num	Case=Nom|Number=Sing|NumType=Card	4	nummod	_	_
4	во	во	NOUN	N	Case=Nom|Number=Sing	1	obl	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	навернэ	навернӧ	ADV	Adv	_	8	advmod:mmod	_	Lang=Mixed|SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	кочегариті	кочегаритны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	1	conj	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 advmod:mmod	color:blue
1	Вот	вот	PART	Pcle	_	9	advmod	_	Lang=Rus
2	у	у	ADP	Pr	_	3	case	_	Lang=Rus
3	меня	я	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	9	nmod	_	Lang=Rus
4	сэтэн	сэтӧн	ADV	Adv	_	9	advmod:lmod	_	_
5	выйым	эм	AUX	V	Number=Sing	9	cop	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	9	punct	_	_
7	гашке	гашкӧ	PART	Pcle	_	9	advmod:mmod	_	SpaceAfter=No
8	,	,	PUNCT	CLB	_	9	punct	_	_
9	братан	братан	NOUN	N	Case=Nom|Number=Sing	0	root	_	Lang=Rus|SpaceAfter=No
10	,	,	PUNCT	CLB	_	11	punct	_	_
11	сестренница	сестренница	NOUN	N	Case=Nom|Number=Sing	9	conj	_	Lang=Rus|SpaceAfter=No
12	,	,	PUNCT	CLB	_	17	punct	_	_
13	а	а	CCONJ	CC	_	17	cc	_	Lang=Mixed
14	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	17	nsubj	_	_
15	никодэс	некод	PRON	Pron	Case=Acc|Number=Sing|Polarity=Neg	17	obj	_	_
16	ог	оз	AUX	V	Mood=Ind|Person=1|Polarity=Neg|Tense=Pres	17	aux:neg	_	_
17	тӧд	тӧдны	VERB	V	Connegative=Yes	9	acl	_	SpaceAfter=No
18	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advmod:mmod	color:blue
1	Сыысь	сійӧ	PRON	Pron	Case=Ela|Number=Sing|Person=3|PronType=Prs	6	obl	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	гашке	гашкӧ	PART	Pcle	_	6	advmod:mmod	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	оз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres	6	aux:neg	_	_
6	бросайтчы	бросайтчыны	VERB	V	Connegative=Yes	0	root	_	Lang=Mixed
7	в	в	ADP	Pr	_	8	case	_	Lang=Rus
8	глаза	глаз	NOUN	N	Case=Nom|Number=Plur	6	obl	_	Lang=Rus|SpaceAfter=No
9	,	,	PUNCT	CLB	_	10	punct	_	_
10	потому	потому	SCONJ	CS	_	13	mark	_	Lang=Rus
11	что	что	SCONJ	CS	_	10	fixed	_	Lang=Rus
12	уна	уна	ADV	Adv	_	13	advmod	_	_
13	йӧз	йӧз	NOUN	N	Case=Nom|Number=Sing	6	advcl	_	SpaceAfter=No
14	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


