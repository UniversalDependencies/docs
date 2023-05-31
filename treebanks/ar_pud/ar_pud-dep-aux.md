---
layout: base
title:  'Statistics of aux in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `aux`

This relation is universal.

91 nodes (0%) are attached to their parents as `aux`.

91 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.82417582417582.

The following 2 pairs of parts of speech are connected with `aux`: <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-AUX.html">AUX</a></tt> (90; 99% instances), <tt><a href="ar_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_pud-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 aux	color:blue
1	س	سَ	PART	RP	_	2	compound:prt	_	SpaceAfter=No
2	أدخل	أَدخَل	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Fut|Voice=Act	0	root	_	LId=دَخَل-ُ_1
3	السجن	سِجن	NOUN	NN	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	2	obj	_	LId=سِجْن_1
4	في	فِي	ADP	IN	_	6	case	_	LId=فِي_1
5	كل	كُلّ	DET	PDT	Case=Gen	6	det	_	LId=كُلّ_1
6	الأحوال	حَال	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	2	obl	_	LId=حال_1|SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	_	LId=,_0
8	آمل	أَمَل	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	2	parataxis	_	LId=أَمَل-َ_1
9	أن	أَن	ADP	IN	_	12	mark	_	LId=أَنْ_1
10	الأمر	أَمر	NOUN	NN	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	12	nsubj	_	LId=أَمْر_1
11	كان	كَان	AUX	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	12	aux	_	LId=كان-ُ_1
12	يستحق	اِستَحَقّ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	8	ccomp	_	LId=ٱِسْتَحَقّ_1|SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 aux	color:blue
1	كانت	كَان	AUX	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Act	10	aux	_	LId=كان-ُ_1
2	المنطقة	مِنطَقَة	NOUN	NN	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	10	nsubj	_	LId=مِنْطَقَة_1
3	التي	الَّذِي	PRON	REL	Case=Nom|Gender=Fem|Number=Sing	4	obj	_	LId=الَّذِي_1
4	حكم	حَكَم	NOUN	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	2	acl:relcl	_	LId=حَكَم_2|SpaceAfter=No
5	ها	هُوَ	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3	4	dep	_	_
6	بوغد	وَغد	PROPN	NNP	Gender=Masc|Number=Sing	4	nsubj	_	LId=وَغْد_1
7	خان	خان	PROPN	NNP	Gender=Masc|Number=Sing	6	flat	_	LId=خان_1
8	هي	هُوَ	PRON	PRP	Gender=Fem|Number=Sing|Person=3	2	dep	_	LId=هِيَ_1
9	تقريباً	تَقرِيب	ADV	RB	_	10	advmod	_	LId=تَقْرِيب_1
10	ما	ما	PRON	WP	Case=Nom	0	root	_	LId=ما_1
11	كان	كَان	AUX	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	12	aux	_	LId=كان-ُ_1
12	يدعى	دَعَا	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	10	acl:relcl	_	LId=دَعا-ُ_1
13	سابقاً	سابِق	ADV	RB	_	12	advmod	_	LId=سابِق_1
14	ب	بِ	ADP	IN	_	15	case	_	SpaceAfter=No
15	منغوليا	مُنغُولِيا	PROPN	NNP	Gender=Fem|Number=Sing	12	obl	_	LId=مُنْغُولِيا_1
16	الخارجية	خَارِجِيّ	ADJ	JJ	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	15	amod	_	LId=خارِجِيّ_1|Proper=True
17	خلال	خِلَالَ	ADP	IN	_	18	case	_	LId=خِلال_1
18	حكم	حُكم	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	12	obl	_	LId=حُكْم_1
19	سلالة	سُلَالَة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	18	nmod	_	LId=سُلالَة_1
20	تشينغ	تشينغ	PROPN	NNP	Gender=Masc|Number=Sing	19	nmod	_	LId=تشينغ_0|SpaceAfter=No
21	.	.	PUNCT	.	_	10	punct	_	LId=._0

~~~


