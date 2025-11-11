---
layout: base
title:  'Statistics of obl:tmod in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="ar_pud-dep-obl.html">obl</a></tt>.

109 nodes (1%) are attached to their parents as `obl:tmod`.

84 instances of `obl:tmod` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.8256880733945.

The following 8 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-ADV.html">ADV</a></tt> (73; 67% instances), <tt><a href="ar_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt> (20; 18% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-ADV.html">ADV</a></tt> (5; 5% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-ADV.html">ADV</a></tt> (4; 4% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="ar_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:tmod	color:blue
1	و	و	CCONJ	RP	_	2	cc	_	SpaceAfter=No
2	يقول	قَال	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=قال-ُ_1
3	التقرير	تَقرِير	NOUN	NN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	LId=تَقْرِير_1|SpaceAfter=No
4	:	:	PUNCT	:	_	6	punct	_	LId=:_0
5	"	"	PUNCT	``	_	6	punct	_	LId="_0|SpaceAfter=No
6	نطبق	طَبَّق	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	LId=طَبَّق_1
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
2	يلعبون	لَعِب	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	LId=لَعِب-َ_1
3	يوم	يَوم	ADV	RB	_	2	obl:tmod	_	LId=يَوْم_1
4	السبت	سَبت	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	3	obl	_	LId=سَبْت_1|SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	_	LId=,_0
6	10	10	NUM	CD	_	3	appos	_	LId=١٠_0
7	حزيران	حَزِيران	PROPN	NNP	Gender=Masc|Number=Sing	6	obl:tmod	_	LId=حَزِيران_1|SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 obl:tmod	color:blue
1	اليوم	يَوم	ADV	RB	_	5	obl:tmod	_	LId=يَوْم_1
2	الثالث	ثَالِث	ADJ	JJ	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	amod	_	LId=ثالِث_1|SpaceAfter=No
3	,	,	PUNCT	,	_	1	punct	_	LId=,_0
4	كنت	كَان	AUX	VBC	Aspect=Perf|Number=Sing|Person=1|Tense=Past|Voice=Act	5	cop	_	LId=كان-ُ_1
5	عائدة	عائِد	ADJ	JJ	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	LId=عائِد_1
6	على	عَلَى	ADP	IN	_	7	case	_	LId=عَلَى_1
7	دراجة	دَرَّاجَة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	5	obl	_	LId=دَرّاجَة_1
8	إي	أَيّ	PROPN	NNP	_	7	nmod	_	LId=أَيّ_1|SpaceAfter=No
9	-	-	PUNCT	-	_	10	punct	_	LId=-_0|SpaceAfter=No
10	ميكرو	ميكرو	PROPN	NNP	_	8	flat	_	LId=ميكرو_0
11	الصغيرة	صَغِير	ADJ	JJ	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	7	amod	_	LId=صَغِير_1|SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	_	LId=._0

~~~


