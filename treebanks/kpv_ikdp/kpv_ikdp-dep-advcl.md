---
layout: base
title:  'Statistics of advcl in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `advcl`

This relation is universal.

21 nodes (2%) are attached to their parents as `advcl`.

13 instances of `advcl` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.23809523809524.

The following 7 pairs of parts of speech are connected with `advcl`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (11; 52% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (3; 14% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (2; 10% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (2; 10% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advcl	color:blue
1	Рӧдитчи	рӧдитчыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	Lang=Mixed
2	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	1	nsubj	_	_
3	вӧрзялыгдырйи	вӧрзявны	VERB	V	Derivation=Igdyrji|VerbForm=Conv	1	advcl	_	SpaceAfter=No
4	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 advcl	color:blue
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


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 advcl	color:blue
1	Вто-	Вто-	ADJ	A	Case=Nom|Number=Sing	3	reparandum	_	Note=Check|SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	вторая	вторая	NUM	Num	Case=Nom|Number=Sing	4	nummod	_	Lang=Rus
4	бригада	бригада	NOUN	N	Case=Nom|Number=Sing	0	root	_	Lang=Rus
5	оленеводческая	оленеводческая	ADJ	A	Case=Nom|Number=Sing	4	amod	_	Lang=Rus|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	висьтооны	висьтооны	VERB	V	VerbForm=Inf	11	advcl	_	_
8	ке	ке	SCONJ	CS	_	7	mark	_	SpaceAfter=No
9	,	,	PUNCT	CLB	_	10	punct	_	_
10	мӧдэд	мӧд	NUM	Num	Case=Prl|NumType=Ord	11	nummod	_	_
11	бригада	бригада	NOUN	N	Case=Nom|Number=Sing	4	conj	_	Lang=Mixed|SpaceAfter=No
12	,	,	PUNCT	CLB	_	13	punct	_	_
13	да	да	PART	Pcle	_	11	advmod	_	Lang=Mixed|SpaceAfter=No
14	?	?	PUNCT	CLB	_	4	punct	_	_

~~~


