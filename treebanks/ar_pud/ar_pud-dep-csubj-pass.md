---
layout: base
title:  'Statistics of csubj:pass in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ar_pud-dep-csubj.html">csubj</a></tt>.

7 nodes (0%) are attached to their parents as `csubj:pass`.

7 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.42857142857143.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-VERB.html">VERB</a></tt> (3; 43% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-ADJ.html">ADJ</a></tt> (2; 29% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (2; 29% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj:pass	color:blue
1	يعتقد	اِعتَقَد	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	LId=ٱِعْتَقَد_1
2	أن	أَنَّ	SCONJ	IN	_	7	mark	_	LId=أَنَّ_1
3	آخر	آخِر	DET	PDT	Case=Acc	4	det	_	LId=آخِر_1
4	دورة	دَورَة	NOUN	NN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	7	nsubj:pass	_	LId=دَوْرَة_1
5	ألعابٍ	لَعب	NOUN	NN	Case=Gen|Definite=Ind|Gender=Fem|Number=Plur	4	nmod	_	LId=لَعْب_1
6	أولمبية	أُولِمبِيّ	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	5	amod	_	LId=أُولِمْبِيّ_1
7	أقيمت	أَقَام	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Pass	1	csubj:pass	_	LId=أَقام_1
8	عام	عام	ADV	RB	_	7	obl:tmod	_	LId=عام_1
9	393	393	NUM	CD	Case=Gen	8	obl	_	LId=٣٩٣_0|SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj:pass	color:blue
1	ثم	ثُمَّ	PART	RP	_	2	compound:prt	_	LId=ثُمَّ_1
2	هناك	هُنَاكَ	ADV	RB	_	0	root	_	LId=هُناكَ_1
3	قصص	قِصَّة	NOUN	NN	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur	2	nsubj	_	LId=قِصَّة_1
4	يزعم	زَعَم	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	3	acl:relcl	_	LId=زَعَم-ُ_1
5	أن	أَنَّ	SCONJ	IN	_	7	mark	_	LId=أَنَّ_1|SpaceAfter=No
6	ها	هُوَ	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3	7	nsubj	_	_
7	حقيقية	حَقِيقِيّ	ADJ	JJ	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	4	csubj:pass	_	LId=حَقِيقِيّ_1
8	تنشر	نَشَر	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	3	acl:relcl	_	LId=نَشَر-ُ_1
9	ب	بِ	ADP	IN	_	10	case	_	SpaceAfter=No
10	رفقة	رِفقَة	NOUN	NN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	8	obl	_	LId=رِفْقَة_1
11	سلسلة	سِلسِلَة	NOUN	NN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	10	nmod	_	LId=سِلْسِلَة_1
12	من	مِن	ADP	IN	_	13	case	_	LId=مِن_1
13	الصور	صُورَة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	11	nmod	_	LId=صُورَة_1
14	ذات	ذات	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	13	amod	_	LId=ذات_1
15	المغزى	مَغزَى	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	14	obl	_	LId=مَغْزَى_1
16	التي	الَّذِي	PRON	REL	Case=Gen|Gender=Fem|Number=Sing	17	nsubj	_	LId=الَّذِي_1
17	تضم	ضَمّ	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	13	acl:relcl	_	LId=ضَمّ-ُ_1
18	نصوصاً	نَصّ	NOUN	NN	Case=Acc|Definite=Ind|Gender=Masc|Number=Plur	17	obj	_	LId=نَصّ_1
19	متحركة	مُتَحَرِّك	ADJ	JJ	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	18	amod	_	LId=مُتَحَرِّك_1
20	تحت	تَحتَ	ADP	IN	_	21	case	_	LId=تَحْتَ_1|SpaceAfter=No
21	ها	هُوَ	PRON	PRP	Case=Gen|Gender=Fem|Number=Sing|Person=3	17	obl	_	SpaceAfter=No
22	.	.	PUNCT	.	_	2	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 csubj:pass	color:blue
1	عندما	عِند	ADP	IN	_	2	mark	_	LId=عِنْد_1
2	يموت	مات	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	9	advcl	_	LId=مات-ُ_1
3	الناس	إِنسَان	NOUN	NN	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	2	nsubj	_	LId=ناس_1
4	جراء	جَرَّاء	ADP	IN	_	5	case	_	LId=جَرّاء_1
5	الشيخوخة	شَيخُوخَة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	2	obl	_	LId=شَيْخُوخَة_1
6	في	فِي	ADP	IN	_	7	case	_	LId=فِي_1
7	الهند	هِند	PROPN	NNP	Case=Gen|Gender=Fem|Number=Sing	2	obl	_	LId=هِنْد_1|SpaceAfter=No
8	,	,	PUNCT	,	_	2	punct	_	LId=,_0
9	يفترض	اِفتَرَض	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	Gloss=supposed|LId=ٱِفْتَرَض_1
10	ذلك	ذ`لِكَ	PRON	PDEM	Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	Gloss=that|LId=ذٰلِكَ_1
11	أن	أَنَّ	SCONJ	IN	_	13	mark	_	Gloss=that|LId=أَنَّ_1
12	يكون	كَان	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	13	cop	_	Gloss=is|LId=كان-ُ_1
13	مدعاةً	مَدعاة	NOUN	NN	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	9	csubj:pass	_	Gloss=pretense|LId=مَدْعاة_1
14	ل	لِ	ADP	IN	_	15	case	_	Gloss=to|SpaceAfter=No
15	لاحتفال	ٱِحتِفال	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	13	nmod	_	Gloss=celebration|LId=ٱِحْتِفال_1|SpaceAfter=No
16	.	.	PUNCT	.	_	9	punct	_	LId=._0

~~~


