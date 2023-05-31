---
layout: base
title:  'Statistics of orphan in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `orphan`

This relation is universal.

4 nodes (0%) are attached to their parents as `orphan`.

3 instances of `orphan` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.5.

The following 4 pairs of parts of speech are connected with `orphan`: <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-ADV.html">ADV</a></tt> (1; 25% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-ADP.html">ADP</a></tt> (1; 25% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-ADP.html">ADP</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 orphan	color:blue
1	كما	كَما	PART	RP	_	4	compound:prt	_	LId=كَما_1
2	أن	أَنَّ	PART	RP	_	1	fixed	_	LId=أَنَّ_1|SpaceAfter=No
3	ه	هُوَ	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	nsubj:pass	_	_
4	شيد	شَاد	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	LId=شَيَّد_1
5	و	وَ	CCONJ	CC	_	6	cc	_	SpaceAfter=No
6	جدد	جَدَّد	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	4	conj	_	LId=جَدَّد_1
7	خمسة	خمسة	NUM	CD	Case=Acc|Gender=Fem|Number=Plur	8	nummod	_	LId=خَمْس_1
8	أسواقٍ	سُوق	NOUN	NN	Case=Gen|Definite=Ind|Gender=Masc|Number=Plur	4	obj	_	LId=سُوق_1
9	تقليدية	تَقلِيدِيّ	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	8	amod	_	LId=تَقْلِيدِيّ_1
10	عام	عام	ADV	RB	_	4	obl:tmod	_	LId=عام_1
11	2013	2013	NUM	CD	Case=Gen	10	obl	_	LId=٢٠١٣_0
12	و	وَ	CCONJ	CC	_	8	cc	_	SpaceAfter=No
13	أربعة	أربعة	NUM	CD	Case=Nom|Gender=Fem|Number=Plur	14	nummod	_	LId=أَرْبَع_1
14	أسواقٍ	سُوق	NOUN	NN	Case=Gen|Definite=Ind|Gender=Masc|Number=Plur	4	conj	_	LId=سُوق_1|orig_deprel=obj
15	تقليدية	تَقلِيدِيّ	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	14	amod	_	LId=تَقْلِيدِيّ_1
16	عام	عام	ADV	RB	_	14	orphan	_	LId=عام_1|orig_deprel=nmod:tmod
17	2014	2014	NUM	CD	Case=Gen	16	obl	_	LId=٢٠١٤_0|SpaceAfter=No
18	.	.	PUNCT	.	_	4	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 orphan	color:blue
1	كانوا	كَان	AUX	VBC	Aspect=Perf|Gender=Masc|Number=Plur|Person=3|Tense=Past|Voice=Act	2	aux	_	LId=كان-ُ_1
2	يتناولون	تَناوَل	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	_	Gloss=take|LId=تَناوَل_1
3	المشروبات	مَشرُوب	NOUN	NN	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	2	obj	_	Gloss=beverage|LId=مَشْرُوب_1
4	الكحولية	كُحُولِيّ	ADJ	JJ	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	3	amod	_	Gloss=alcoholic|LId=كُحُولِيّ_1
5	مثل	مِثلَ	ADP	IN	_	6	case	_	Gloss=like|LId=مِثْل_1
6	الجعة	جِعَة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	3	nmod	_	Gloss=beer|LId=جِعَة_1
7	و	وَ	CCONJ	CC	_	8	cc	_	Gloss=and|SpaceAfter=No
8	خمرة	خَمرَة	NOUN	NN	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	6	conj	_	Gloss=wine|LId=خَمْرَة_1
9	العسل	عَسَل	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	8	nmod	_	Gloss=honey|LId=عَسَل_1
10	و	وَ	CCONJ	CC	_	11	cc	_	Gloss=and|SpaceAfter=No
11	البيور	بيور	NOUN	NN	Definite=Def|Gender=Masc|Number=Sing	6	conj	_	Gloss=bjórr|LId=بيور_0
12	(	(	PUNCT	(	_	13	punct	_	LId=(_0|SpaceAfter=No
13	نبيذ	نَبِيذ	NOUN	NN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	11	appos	_	Gloss=wine|LId=نَبِيذ_1
14	فاكهة	فاكِهَة	NOUN	NN	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	13	nmod	_	Gloss=fruit|LId=فاكِهَة_1
15	قوي	قَوِيّ	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	13	amod	_	Gloss=strong|LId=قَوِيّ_1|SpaceAfter=No
16	)	)	PUNCT	)	_	13	punct	_	LId=)_0|SpaceAfter=No
17	,	,	PUNCT	,	_	21	punct	_	LId=,_0
18	أما	أَمَّا	PART	RP	_	19	case	_	Gloss=as-for|LId=أَمّا_1
19	الأثرياء	ثَرِيّ	NOUN	NN	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	21	orphan	_	Gloss=the-wealthy|LId=ثَرِيّ_1
20	ف	ف	PART	RP	_	21	case	_	SpaceAfter=No
21	النبيذ	نَبِيذ	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	conj	_	Gloss=the-wine|LId=نَبِيذ_1
22	المستورد	مُستَورَد	ADJ	JJ	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	21	amod	_	Gloss=imported|LId=مُسْتَوْرِد_1|SpaceAfter=No
23	.	.	PUNCT	.	_	2	punct	_	LId=._0

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 orphan	color:blue
1	يعمل	عَمِل	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	LId=عَمِل-َ_1
2	دوران	دَوَران	PROPN	NNP	Gender=Masc|Number=Sing	1	nsubj	_	LId=دَوَران_1
3	ك	كَ	ADP	IN	_	4	case	_	SpaceAfter=No
4	متحدثٍ	مُتَحَدِّث	NOUN	NN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	1	obl	_	LId=مُتَحَدِّث_1
5	رسمي	رَسمِيّ	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	4	amod	_	LId=رَسْمِيّ_1
6	و	وَ	CCONJ	CC	_	2	cc	_	SpaceAfter=No
7	آنخل	أَنخِيل	PROPN	NNP	Gender=Masc|Number=Sing	1	conj	_	LId=أَنْخِيل_1|orig_deprel=nsubj
8	بيتادو	بيتادو	PROPN	NNP	Gender=Masc|Number=Sing	7	flat	_	LId=بيتادو_0
9	ك	كَ	ADP	IN	_	7	orphan	_	orig_deprel=obl|SpaceAfter=No
10	أمينٍ	أَمِين	NOUN	NN	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	9	obj	_	LId=أَمِين_3
11	ل	لِ	ADP	IN	_	12	case	_	SpaceAfter=No
12	لصندوق	صُندُوق	NOUN	NN	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	10	nmod	_	LId=صُنْدُوق_1|SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	_	LId=._0

~~~


