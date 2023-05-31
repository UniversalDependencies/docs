---
layout: base
title:  'Statistics of parataxis in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `parataxis`

This relation is universal.

24 nodes (0%) are attached to their parents as `parataxis`.

24 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.3333333333333.

The following 8 pairs of parts of speech are connected with `parataxis`: <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (15; 63% instances), <tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="ar_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 parataxis	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 parataxis	color:blue
1	الأمر	أَمر	NOUN	NN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	LId=أَمْر_1
2	واضح	وَاضِح	ADJ	JJ	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	LId=واضِح_1|SpaceAfter=No
3	:	:	PUNCT	:	_	4	punct	_	LId=:_0
4	يمكن	أَمكَن	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	2	parataxis	_	LId=أَمْكَن_1
5	ل	لِ	ADP	IN	_	6	case	_	SpaceAfter=No
6	لرجال	رَجُل	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	4	obl	_	LId=رَجُل_1
7	تحمل	تَحَمُّل	NOUN	NN	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	4	nsubj	_	LId=حَمَل-ِ_1
8	مسؤوليات	مَسؤُولِيَّة	NOUN	NN	Case=Gen|Definite=Ind|Gender=Fem|Number=Plur	7	nmod	_	LId=مَسْؤُولِيَّة_1
9	أكبر	أَكبَر	ADJ	JJR	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	8	amod	_	LId=أَكْبَر_2
10	في	فِي	ADP	IN	_	11	case	_	LId=فِي_1
11	مجال	مَجَال	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	8	nmod	_	LId=مَجال_1
12	منع	مَنع	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	11	nmod	_	LId=مَنْع_1
13	الحمل	حَمَل	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	12	nmod	_	LId=حَمْل_1|SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis	color:blue
1	قد	قَد	PART	RP	_	2	compound:prt	_	LId=قَدْ_1
2	يثير	أَثَار	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	LId=أَثار_1
3	الأمر	أَمر	NOUN	NN	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	LId=أَمْر_1
4	الاستغراب	ٱِستِغراب	NOUN	NN	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	2	obj	_	LId=ٱِسْتِغْراب_1|SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	LId=,_0
6	حتى	حَتَّى	ADP	IN	_	7	mark	_	LId=حَتَّى_1
7	غيوم	غَيمَة	NOUN	NN	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	2	parataxis	_	LId=غَيْمَة_1
8	الأمطار	مَطَر	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	7	nmod	_	LId=مَطَر_1
9	الحمضية	حَمضِيّ	ADJ	JJ	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	amod	_	LId=حَمْضِيّ_1
10	ل	لِ	ADP	IN	_	11	case	_	SpaceAfter=No
11	ها	هُوَ	PRON	PRP	Case=Gen|Gender=Fem|Number=Sing|Person=3	7	obj	_	_
12	فوائد	فَائِدَة	NOUN	NN	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	11	nsubj	_	LId=فائِدَة_1|SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	LId=._0

~~~


