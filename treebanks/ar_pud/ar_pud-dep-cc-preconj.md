---
layout: base
title:  'Statistics of cc:preconj in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="ar_pud-dep-cc.html">cc</a></tt>.

2 nodes (0%) are attached to their parents as `cc:preconj`.

2 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (1; 50% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-PART.html">PART</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 20 cc:preconj	color:blue
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


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cc:preconj	color:blue
1	و	و	PART	RP	_	3	compound:prt	_	SpaceAfter=No
2	قد	قَد	PART	RP	_	3	compound:prt	_	LId=قَدْ_1
3	ظهرت	ظَهَر	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	LId=ظَهَر-َ_1
4	نبوءةٌ	نُبُوءَة	NOUN	NN	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	3	nsubj	_	LId=نُبُوءَة_1
5	تقول	قَال	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	4	acl:relcl	_	LId=قال-ُ_1
6	أن	أَنَّ	SCONJ	IN	_	10	mark	_	LId=أَنَّ_1|SpaceAfter=No
7	ه	هُوَ	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	nsubj	_	_
8	إما	أَمّا	PART	RP	_	10	cc:preconj	_	LId=أَمّا_1
9	س	سَ	PART	RP	_	10	compound:prt	_	SpaceAfter=No
10	يموت	مات	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Fut|Voice=Act	5	ccomp	_	LId=مات-ُ_1
11	ب	بِ	ADP	IN	_	12	case	_	SpaceAfter=No
12	الشيخوخة	شَيخُوخَة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	10	obl	_	LId=شَيْخُوخَة_1
13	بعد	بَعدَ	ADP	IN	_	14	case	_	LId=بَعْد_1
14	حياةٍ	حَياة	NOUN	NN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	10	obl	_	LId=حَياة_1
15	هادئة	هادِئ	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	14	amod	_	LId=هادِئ_2|SpaceAfter=No
16	,	,	PUNCT	,	_	19	punct	_	LId=,_0
17	أو	أَو	CCONJ	CC	_	19	cc	_	LId=أَوْ_1
18	س	سَ	PART	RP	_	19	compound:prt	_	SpaceAfter=No
19	يموت	مات	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Fut|Voice=Act	10	conj	_	LId=مات-ُ_1
20	يافعاً	يافِع	NOUN	VBN	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	19	acl	_	LId=يافِع_1
21	في	فِي	ADP	IN	_	22	case	_	LId=فِي_1
22	أرض	أَرض	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	19	obl	_	LId=أَرْض_1
23	المعركة	مَعرَكَة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	22	nmod	_	LId=مَعْرَكَة_1
24	و	وَ	CCONJ	CC	_	26	cc	_	SpaceAfter=No
25	س	سَ	PART	RP	_	26	compound:prt	_	SpaceAfter=No
26	يكتسب	ٱِكتَسَب	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Fut|Voice=Act	19	conj	_	LId=ٱِكْتَسَب_1
27	الخلود	خُلُود	NOUN	NN	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	26	obj	_	LId=خُلُود_1
28	من	مِن	ADP	IN	_	30	case	_	LId=مِن_1
29	خلال	خِلَالَ	ADP	IN	_	28	fixed	_	LId=خِلال_1
30	الشعر	شَعر	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	26	obl	_	LId=شِعْر_1|SpaceAfter=No
31	.	.	PUNCT	.	_	3	punct	_	LId=._0

~~~


