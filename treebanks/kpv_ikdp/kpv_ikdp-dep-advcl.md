---
layout: base
title:  'Statistics of advcl in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `advcl`

This relation is universal.
There are 2 language-specific subtypes of `advcl`: <tt><a href="kpv_ikdp-dep-advcl-eval.html">advcl:eval</a></tt>, <tt><a href="kpv_ikdp-dep-advcl-tcl.html">advcl:tcl</a></tt>.

27 nodes (1%) are attached to their parents as `advcl`.

15 instances of `advcl` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.66666666666667.

The following 8 pairs of parts of speech are connected with `advcl`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (14; 52% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (4; 15% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (3; 11% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="kpv_ikdp-pos-NUM.html">NUM</a></tt>-<tt><a href="kpv_ikdp-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="kpv_ikdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PART.html">PART</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advcl	color:blue
1	Рӧдитчи	рӧдитчыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	OrigLang=ru
2	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	1	nsubj	_	_
3	вӧрзялыгдырйи	вӧрзявны	VERB	V	Derivation=Igdyrji|VerbForm=Conv	1	advcl	_	SpaceAfter=No
4	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advcl	color:blue
1	Сэсся	сэсся	ADV	Adv	_	2	advcl	_	_
2	кыскаліс	кыскавны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Sg3|SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	4	punct	_	_
4	вердіс	вердны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	GTtags=Ind,Prt1,Sg3|SpaceAfter=No
5	.	.	PUNCT	PUNCT	_	2	punct	_	_

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
6	бросайтчы	бросайтчыны	VERB	V	Connegative=Yes	0	root	_	OrigLang=ru
7	в	в	ADP	Pr	_	8	case	_	Lang=ru
8	глаза	глаз	NOUN	N	Case=Nom|Number=Plur	6	obl	_	Lang=ru|SpaceAfter=No
9	,	,	PUNCT	CLB	_	10	punct	_	_
10	потому	потому	SCONJ	CS	_	13	mark	_	Lang=ru
11	что	что	SCONJ	CS	_	10	fixed	_	Lang=ru
12	уна	уна	ADV	Adv	_	13	advmod	_	_
13	йӧз	йӧз	NOUN	N	Case=Nom|Number=Sing	6	advcl	_	SpaceAfter=No
14	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


