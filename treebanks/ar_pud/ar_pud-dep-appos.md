---
layout: base
title:  'Statistics of appos in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `appos`

This relation is universal.

187 nodes (1%) are attached to their parents as `appos`.

187 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.89839572192513.

The following 13 pairs of parts of speech are connected with `appos`: <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt> (101; 54% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (33; 18% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (21; 11% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt> (16; 9% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-PRON.html">PRON</a></tt> (5; 3% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ar_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ar_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos	color:blue
1	قال	قَال	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	LId=قال-ُ_1
2	السيد	سَيِّد	NOUN	NN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	nsubj	_	LId=سَيِّد_1
3	بانفالكار	انفالكار	PROPN	NNP	Gender=Masc|Number=Sing	2	appos	_	LId=انفالكار_0
4	أن	أَنَّ	SCONJ	IN	_	6	mark	_	LId=أَنَّ_1|SpaceAfter=No
5	ه	هُوَ	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
6	شعر	شَعَر	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	1	ccomp	_	LId=شَعَر-ُ_1
7	ذات	ذَات	NOUN	NN	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	6	obl	_	LId=ذات_1
8	مرة	مَرَّة	NOUN	NN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	LId=مَرَّة_1
9	أن	أَنَّ	SCONJ	IN	_	12	mark	_	LId=أَنَّ_1
10	علي	عَلَى	ADP	IN	_	11	case	_	LId=عَلَى_1|SpaceAfter=No
11	هم	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Plur|Person=3	12	nmod	_	_
12	ترك	تَرك	NOUN	NN	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	6	xcomp	_	LId=تَرْك_1
13	المبنى	مَبنَى	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	12	nmod	_	LId=مَبْنَى_1|SpaceAfter=No
14	.	.	PUNCT	.	_	1	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 appos	color:blue
1	أمام	أَمَامَ	ADP	IN	_	0	root	_	LId=أَمام_1|SpaceAfter=No
2	هم	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Plur|Person=3	1	obj	_	_
3	عائقٌ	عائِق	NOUN	NN	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	1	nsubj	_	LId=عائِق_1
4	واحدٌ	واحِد	ADJ	JJ	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	3	amod	_	LId=واحِد_1
5	ل	لِ	ADP	IN	_	6	case	_	SpaceAfter=No
6	لخلاص	خَلاص	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	3	nmod	_	LId=خَلاص_1|SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	_	LId=,_0
8	التغلب	تَغَلُّب	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	3	appos	_	LId=تَغَلُّب_1
9	إلى	إِلَى	ADP	IN	_	10	case	_	LId=إِلَى_1
10	إنجلترا	إِنجِلتِرا	PROPN	NNP	Gender=Fem|Number=Sing	8	nmod	_	LId=إِنْجِلْتِرا_1|SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 appos	color:blue
1	كان	كَان	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	LId=كان-ُ_1
2	آخر	آخَر	PRON	PDEM	Case=Nom|Gender=Masc|Number=Sing	3	det	_	LId=آخَر_1
3	كتب	كِتَاب	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	1	nsubj	_	LId=كَتَب-ُ_1|SpaceAfter=No
4	ها	هُوَ	PRON	PRP	Case=Gen|Gender=Fem|Number=Sing|Person=3	3	nmod	_	_
5	غير	غَير	PART	RP	Polarity=Neg	6	advmod	_	LId=غَيْر_1
6	الروائية	رِوَائِيّ	ADJ	JJ	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	3	amod	_	LId=رِوائِيّ_1
7	عن	عَن	ADP	IN	_	8	case	_	LId=عَن_1
8	مارغريت	مارغريت	PROPN	NNP	Gender=Fem|Number=Sing	3	nmod	_	LId=مارغريت_0
9	دوغلاس	دُوغلاس	PROPN	NNP	Gender=Masc|Number=Sing	8	flat	_	LId=دُوغْلاس_1|SpaceAfter=No
10	,	,	PUNCT	,	_	11	punct	_	LId=,_0
11	كونتيسة	كونتيسه	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	appos	_	LId=كونتيسه_0
12	لينوكس	لينوكس	PROPN	NNP	Gender=Fem|Number=Sing	11	nmod	_	LId=لينوكس_0|SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	_	LId=._0

~~~


