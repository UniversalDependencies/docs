---
layout: base
title:  'Statistics of compound in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="ar_pud-dep-compound-prt.html">compound:prt</a></tt>.

7 nodes (0%) are attached to their parents as `compound`.

6 instances of `compound` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.57142857142857.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (5; 71% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 compound	color:blue
1	ازدهرت	ٱِزدَهَر	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	LId=ٱِزْدَهَر_1
2	هذه	ه`ذا	PRON	PDEM	Case=Nom|Gender=Fem|Number=Sing	3	det	_	LId=هٰذا_1
3	المدينة	مَدِينَة	NOUN	NN	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	1	nsubj	_	LId=مَدِينَة_1|SpaceAfter=No
4	-	-	PUNCT	-	_	5	punct	_	LId=-_0|SpaceAfter=No
5	الدولة	دَولَة	NOUN	NN	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	compound	_	LId=دَوْلَة_1
6	في	فِي	ADP	IN	_	7	case	_	LId=فِي_1
7	ذات	ذَات	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	obl	_	LId=ذات_1
8	فترة	فَترَة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	7	nmod	_	LId=فَتْرَة_1
9	مملكة	مَملَكَة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	nmod	_	LId=مَمْلَكَة_1
10	سوكوتاي	سوكوتاي	PROPN	NNP	Gender=Fem|Number=Sing	9	nmod	_	LId=سوكوتاي_0|SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 30 compound	color:blue
1	ضم	ضَمّ	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	LId=ضَمّ-ُ_1
2	عدة	عِدَّة	DET	PDT	Case=Acc	3	det	_	LId=عِدَّة_1
3	أغانٍ	أُغنِيَة	NOUN	NN	Case=Gen|Definite=Ind|Gender=Fem|Number=Plur	1	obj	_	LId=أُغْنِيَة_1
4	تم	تَمّ	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	3	acl:relcl	_	LId=تَمّ-ِ_1
5	تأليف	تَألِيف	NOUN	NN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	LId=تَأْلِيف_1|SpaceAfter=No
6	ها	هُوَ	PRON	PRP	Case=Gen|Gender=Fem|Number=Sing|Person=3	5	nmod	_	_
7	ب	بِ	ADP	IN	_	8	case	_	SpaceAfter=No
8	الاشتراك	اِشتِرَاك	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	nmod	_	LId=ٱِشْتِراك_1
9	مع	مَعَ	ADP	IN	_	10	case	_	LId=مَع_1
10	جيم	جِيم	PROPN	NNP	Gender=Masc|Number=Sing	8	nmod	_	LId=جِيم_2
11	شقيق	شَقِيق	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	10	appos	_	LId=شَقِيق_1
12	رافيرتي	رافيرتي	PROPN	NNP	Gender=Masc|Number=Sing	11	nmod	_	LId=رافيرتي_0|SpaceAfter=No
13	,	,	PUNCT	,	_	15	punct	_	LId=,_0
14	الذي	الَّذِي	PRON	REL	Case=Gen|Gender=Masc|Number=Sing	15	nsubj	_	LId=الَّذِي_1
15	يعمل	عَمِل	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	10	acl:relcl	_	LId=عَمِل-َ_1
16	أيضاً	أَيضًا	ADV	RB	_	15	advmod	_	LId=أَيْضاً_1
17	ك	كَ	ADP	IN	_	18	case	_	SpaceAfter=No
18	مغنٍ	مُغَنِّي	NOUN	NN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	15	obl	_	LId=مُغَنِّي_1
19	و	وَ	CCONJ	CC	_	20	cc	_	SpaceAfter=No
20	مؤلف	مُؤَلِّف	NOUN	NN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	18	conj	_	LId=مُؤَلِّف_1
21	أغانٍ	أُغنِيَة	NOUN	NN	Case=Gen|Definite=Ind|Gender=Fem|Number=Plur	20	nmod	_	LId=أُغْنِيَة_1|SpaceAfter=No
22	,	,	PUNCT	,	_	25	punct	_	LId=,_0
23	و	و	PART	RP	_	25	compound:prt	_	SpaceAfter=No
24	الذي	الَّذِي	PRON	REL	Case=Gen|Gender=Masc|Number=Sing	25	nsubj	_	LId=الَّذِي_1
25	وقع	وَقَّع	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	10	advcl	_	LId=وَقَّع_1
26	مع	مَعَ	ADP	IN	_	27	case	_	LId=مَع_1
27	شركة	شَرِكَة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	25	obl	_	LId=شَرِكَة_1
28	"	"	PUNCT	``	_	29	punct	_	LId="_0|SpaceAfter=No
29	ديكا	دِيك	PROPN	NNP	Number=Sing	27	nmod	_	LId=دِيك_2
30	ريكوردز	ريكوردز	NOUN	NN	Definite=Ind|Number=Plur	29	compound	_	LId=ريكوردز_0|SpaceAfter=No
31	"	"	PUNCT	''	_	29	punct	_	LId="_0
32	في	فِي	ADP	IN	_	33	case	_	LId=فِي_1
33	السبعينيات	سَبعِينِيّ	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	25	obl	_	LId=سَبْعِينِيّ_1|SpaceAfter=No
34	.	.	PUNCT	.	_	1	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 compound	color:blue
1	خارج	خَارِجَ	ADP	IN	_	2	case	_	LId=خارِج_1
2	اليابان	يابان	PROPN	NNP	Case=Gen|Gender=Fem|Number=Sing	11	obl	_	LId=يابان_1|SpaceAfter=No
3	,	,	PUNCT	,	_	5	punct	_	LId=,_0
4	و	وَ	CCONJ	CC	_	5	cc	_	SpaceAfter=No
5	بدءاً	بَدء	NOUN	VBG	Case=Acc|Definite=Ind|Gender=Masc	2	conj	_	LId=بَدْء_1
6	من	مِن	ADP	IN	_	7	case	_	LId=مِن_1
7	الإمبراطور	إِمبِراطُور	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	obl	_	LId=إِمْبِراطُور_1
8	شووا	شَوَى	PROPN	NNP	Gender=Masc|Number=Sing	7	appos	_	LId=شَوَى-ِ_1|SpaceAfter=No
9	,	,	PUNCT	,	_	2	punct	_	LId=,_0
10	بات	بَات	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	11	compound	_	Gloss=has-become|LId=بات-ِ_1
11	يشار	أَشَار	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	Gloss=referred|LId=أَشار_1
12	إلى	إِلَى	ADP	IN	_	13	case	_	Gloss=to|LId=إِلَى_1
13	الأباطرة	أَباطِرَة	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	11	obl	_	Gloss=emperors|LId=أَباطِرَة_1
14	عادةً	عادَة	ADV	RB	_	11	advmod	_	LId=عادَة_1
15	ب	بِ	ADP	IN	_	16	case	_	SpaceAfter=No
16	أسمائ	ٱِسم	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	11	obl	_	LId=ٱِسْم_1|SpaceAfter=No
17	هم	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Plur|Person=3	16	nmod	_	_
18	الأولى	أَوَّل	ADJ	JJ	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	16	amod	_	LId=أَوَّل_2|SpaceAfter=No
19	,	,	PUNCT	,	_	22	punct	_	LId=,_0
20	سواء	سَواء	PART	RP	_	22	cc:preconj	_	LId=سَواء_1
21	خلال	خِلَالَ	ADP	IN	_	22	case	_	LId=خِلال_1
22	حيات	حَياة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	11	obl	_	LId=حَياة_1|SpaceAfter=No
23	هم	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Plur|Person=3	22	nmod	_	_
24	أو	أَو	CCONJ	CC	_	26	cc	_	LId=أَوْ_1
25	بعد	بَعدَ	ADP	IN	_	26	case	_	LId=بَعْد_1
26	وفات	وَفاة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	22	conj	_	LId=وَفاة_1|SpaceAfter=No
27	هم	هُوَ	PRON	PRP	Case=Gen|Gender=Masc|Number=Plur|Person=3	26	nmod	_	SpaceAfter=No
28	.	.	PUNCT	.	_	11	punct	_	LId=._0

~~~


