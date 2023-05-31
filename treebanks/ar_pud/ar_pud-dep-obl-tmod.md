---
layout: base
title:  'Statistics of obl:tmod in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="ar_pud-dep-obl.html">obl</a></tt>.

143 nodes (1%) are attached to their parents as `obl:tmod`.

118 instances of `obl:tmod` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.53146853146853.

The following 12 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-ADV.html">ADV</a></tt> (73; 51% instances), <tt><a href="ar_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt> (20; 14% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-ADV.html">ADV</a></tt> (17; 12% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (16; 11% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-ADV.html">ADV</a></tt> (5; 3% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ar_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:tmod	color:blue
1	و	و	PART	RP	_	2	compound:prt	_	SpaceAfter=No
2	يقول	قَال	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	LId=قال-ُ_1
3	التقرير	تَقرِير	NOUN	NN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	LId=تَقْرِير_1|SpaceAfter=No
4	:	:	PUNCT	:	_	6	punct	_	LId=:_0
5	"	"	PUNCT	``	_	6	punct	_	LId="_0|SpaceAfter=No
6	نطبق	طَبَّق	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	2	ccomp	_	LId=طَبَّق_1
7	اليوم	يَوم	ADV	RB	_	6	obl:tmod	_	LId=يَوْم_1
8	عقوبات	عُقُوبَة	NOUN	NN	Case=Acc|Definite=Ind|Gender=Fem|Number=Plur	6	obj	_	LId=عُقُوبَة_1
9	ب	بِ	ADP	IN	_	10	case	_	SpaceAfter=No
10	استخدام	اِستِخدَام	NOUN	NN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	6	obl	_	LId=ٱِسْتِخْدام_1
11	ضوءٍ	ضَوء	NOUN	NN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	10	nmod	_	LId=ضَوْء_1
12	قوي	قَوِيّ	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	11	amod	_	LId=قَوِيّ_1|SpaceAfter=No
13	"	"	PUNCT	''	_	6	punct	_	LId="_0|SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:tmod	color:blue
1	س	سَ	PART	RP	_	2	compound:prt	_	SpaceAfter=No
2	يلعبون	لَعِب	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=3|Tense=Fut|Voice=Act	0	root	_	LId=لَعِب-َ_1
3	يوم	يَوم	ADV	RB	_	2	obl:tmod	_	LId=يَوْم_1
4	السبت	سَبت	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	3	obl	_	LId=سَبْت_1|SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	_	LId=,_0
6	10	10	NUM	CD	_	3	appos	_	LId=١٠_0
7	حزيران	حَزِيران	PROPN	NNP	Gender=Masc|Number=Sing	6	obl:tmod	_	LId=حَزِيران_1|SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 obl:tmod	color:blue
1	تم	تَمّ	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	LId=تَمّ-ِ_1
2	إعلان	إِعلان	NOUN	NN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	nsubj	_	LId=إِعْلان_1|SpaceAfter=No
3	ها	هُوَ	PRON	PRP	Case=Gen|Gender=Fem|Number=Sing|Person=3	2	nmod	_	_
4	ك	كَ	ADP	IN	_	5	case	_	SpaceAfter=No
5	محمية	مَحمِيَّة	NOUN	NN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	2	nmod	_	LId=مَحْمِيّ_1
6	برية	بَرِّيّ	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	5	amod	_	LId=بَرِّيّ_1
7	عام	عام	ADV	RB	_	2	obl:tmod	_	LId=عام_1
8	1975	1975	NUM	CD	Case=Gen	7	obl	_	LId=١٩٧٥_0|SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	LId=._0

~~~


