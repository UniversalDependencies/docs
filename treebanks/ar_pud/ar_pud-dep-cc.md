---
layout: base
title:  'Statistics of cc in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="ar_pud-dep-cc-preconj.html">cc:preconj</a></tt>.

652 nodes (3%) are attached to their parents as `cc`.

647 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42484662576687.

The following 8 pairs of parts of speech are connected with `cc`: <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-CCONJ.html">CCONJ</a></tt> (308; 47% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-CCONJ.html">CCONJ</a></tt> (181; 28% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-CCONJ.html">CCONJ</a></tt> (87; 13% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-CCONJ.html">CCONJ</a></tt> (46; 7% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-CCONJ.html">CCONJ</a></tt> (15; 2% instances), <tt><a href="ar_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_pud-pos-CCONJ.html">CCONJ</a></tt> (11; 2% instances), <tt><a href="ar_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_pud-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="ar_pud-pos-PART.html">PART</a></tt>-<tt><a href="ar_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	ثمة	ثَمَّةَ	ADV	RB	_	2	advmod	_	LId=ثَمَّةَ_1
2	أوجه	وَجه	NOUN	NN	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	0	root	_	LId=أَوْجُه_1
3	تشابهٍ	شابَه	NOUN	NN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	LId=شابَه_1
4	هنا	هُنَا	ADV	RB	_	2	advmod	_	LId=هُنا_1
5	بين	بَينَ	ADP	IN	_	6	case	_	LId=بَيْنَ_1
6	الألعاب	لَعب	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	3	nmod	_	LId=لَعْب_1
7	و	وَ	CCONJ	CC	_	8	cc	_	SpaceAfter=No
8	حيات	حَيَّة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	6	conj	_	LId=حَيَّة_1|SpaceAfter=No
9	نا	هُوَ	PRON	PRP	Case=Gen|Number=Plur|Person=1	8	nmod	_	_
10	اليومية	يَومِيّ	ADJ	JJ	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	amod	_	LId=يَوْمِيّ_1|SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	بدأت	بَدَأ	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	LId=بَدَأ-َ_1
2	أولى	أَوَّل	ADJ	JJ	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	1	nsubj	_	LId=أَوَّل_2
3	اليزيديات	يَزِيدِيّ	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	2	obl	_	LId=يَزِيدِيّ_1
4	ب	بِ	ADP	IN	_	5	case	_	SpaceAfter=No
5	البكاء	بُكَاء	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	1	obl	_	LId=بُكاء_1|SpaceAfter=No
6	,	,	PUNCT	,	_	8	punct	_	LId=,_0
7	ثم	ثُمَّ	CCONJ	CC	_	8	cc	_	LId=ثُمَّ_1
8	تبعت	تَبِع	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Act	1	conj	_	LId=تَبِع-َ_1|SpaceAfter=No
9	ها	هُوَ	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3	8	obj	_	_
10	إحدى	أَحَد	DET	PDT	Case=Nom	11	det	_	LId=أَحَد_1
11	صديقات	صَدِيقَة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	8	nsubj	_	LId=صَدِيق_1|SpaceAfter=No
12	ها	هُوَ	PRON	PRP	Case=Gen|Gender=Fem|Number=Sing|Person=3	11	nmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cc	color:blue
1	أجريت	أَجرَى	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	LId=أَجْرَى_1
2	قبالة	قُبَالَةَ	ADP	IN	_	3	case	_	LId=قُبالَة_1
3	السواحل	سَاحِل	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	1	obl	_	LId=ساحِل_1
4	المكسيكية	مَكسِيكِيّ	ADJ	JJ	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	3	amod	_	LId=مَكْسِيكِيّ_1
5	ما	مَا	PART	RP	_	7	compound:prt	_	LId=ما_1
6	بين	بَينَ	ADP	IN	_	7	case	_	LId=بَيْنَ_1
7	شهري	شَهر	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Dual	1	obl	_	LId=شَهْر_1
8	نيسان	نِيسان	PROPN	NNP	Gender=Masc|Number=Sing	7	nmod	_	LId=نِيسان_1
9	و	وَ	CCONJ	CC	_	10	cc	_	SpaceAfter=No
10	حزيران	حَزِيران	PROPN	NNP	Gender=Masc|Number=Sing	8	conj	_	LId=حَزِيران_1|SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	_	LId=._0

~~~


