---
layout: base
title:  'Statistics of advmod in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `advmod`

This relation is universal.
There are 4 language-specific subtypes of `advmod`: <tt><a href="kpv_ikdp-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="kpv_ikdp-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="kpv_ikdp-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="kpv_ikdp-dep-advmod-tmod.html">advmod:tmod</a></tt>.

90 nodes (6%) are attached to their parents as `advmod`.

67 instances of `advmod` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.07777777777778.

The following 16 pairs of parts of speech are connected with `advmod`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (27; 30% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (18; 20% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (15; 17% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (6; 7% instances), <tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (5; 6% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (4; 4% instances), <tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (3; 3% instances), <tt><a href="kpv_ikdp-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-SCONJ.html">SCONJ</a></tt> (2; 2% instances), <tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_ikdp-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="kpv_ikdp-pos-DET.html">DET</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod	color:blue
1	Нӧшта	нӧшта	ADV	Adv	_	3	advmod	_	_
2	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	эштӧді	эштӧдны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	_
4	педучилище	педучилище	NOUN	N	Case=Nom|Number=Sing	3	obj	_	Lang=Mixed|SpaceAfter=No
5	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
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


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 advmod	color:blue
1	Сы	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	obl	_	_
2	бӧрын	бӧр	ADP	Po	Case=Ine|Number=Sing	1	case	_	_
3	устроитчи	устроитчыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	Lang=Mixed
4	рӧбитны	рӧбитны	VERB	V	VerbForm=Inf	3	xcomp	_	Lang=Mixed|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	локті	локны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	3	parataxis	_	_
7	ас	ас	ADJ	A	Case=Nom|Number=Sing|PronType=Prs	8	nmod	_	_
8	сиктэ	сикт	NOUN	N	Case=Ill|Number=Sing	6	obl	_	_
9	да	да	PART	Pcle	_	8	advmod	_	Lang=Mixed|SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


