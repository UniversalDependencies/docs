---
layout: base
title:  'Statistics of orphan in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `orphan`

This relation is universal.

5 nodes (0%) are attached to their parents as `orphan`.

5 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.2.

The following 5 pairs of parts of speech are connected with `orphan`: <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-ADV.html">ADV</a></tt> (1; 20% instances), <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-ADP.html">ADP</a></tt> (1; 20% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-ADP.html">ADP</a></tt> (1; 20% instances), <tt><a href="ar_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 orphan	color:blue
1	كما	kamA_1	PART	RP	_	4	compound:prt	_	_
2	أن	>an~a_1	PART	RP	_	1	fixed	_	SpaceAfter=No
3	ه	h	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	nsubj:pass	_	_
4	شيد	$ay~ad_1	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
5	و	w	CCONJ	CC	_	6	cc	_	SpaceAfter=No
6	جدد	jad~ad_1	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	4	conj	_	_
7	خمسة	xamos_1	NUM	CD	Case=Acc|Gender=Fem|Number=Plur	8	nummod	_	_
8	أسواقٍ	suwq_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Masc|Number=Plur	4	obj	_	_
9	تقليدية	taqoliydiy~_1	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	8	amod	_	_
10	عام	EAm_1	ADV	RB	_	4	obl:tmod	_	_
11	2013	2013_0	NUM	CD	Case=Gen	10	obl	_	_
12	و	w	CCONJ	CC	_	8	cc	_	SpaceAfter=No
13	أربعة	>arobaE_1	NUM	CD	Case=Nom|Gender=Fem|Number=Plur	14	nummod	_	_
14	أسواقٍ	suwq_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Masc|Number=Plur	4	conj	_	orig_deprel=obj
15	تقليدية	taqoliydiy~_1	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	14	amod	_	_
16	عام	EAm_1	ADV	RB	_	14	orphan	_	orig_deprel=nmod:tmod
17	2014	2014_0	NUM	CD	Case=Gen	16	obl	_	SpaceAfter=No
18	.	._0	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 21 orphan	color:blue
1	كانوا	kAn-u_1	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Plur|Person=3|Tense=Past|Voice=Act	2	aux	_	_
2	يتناولون	tanAwal_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	_	_
3	المشروبات	ma$oruwb_1	NOUN	NN	Animacy=Nhum|Case=Acc|Definite=Def|Gender=Masc|Number=Plur	2	obj	_	_
4	الكحولية	kuHuwliy~_1	ADJ	JJ	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	3	amod	_	_
5	مثل	mivol_1	ADP	IN	_	6	case	_	_
6	الجعة	jiEap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Sing	3	nmod	_	_
7	و	w	CCONJ	CC	_	8	cc	_	SpaceAfter=No
8	خمرة	xamorap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Sing	6	conj	_	_
9	العسل	Easal_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	8	nmod	_	_
10	و	w	CCONJ	CC	_	11	cc	_	SpaceAfter=No
11	البيور	bywr_0	NOUN	NN	Animacy=Nhum|Definite=Def|Gender=Masc|Number=Sing	6	conj	_	_
12	(	(_0	PUNCT	(	_	13	punct	_	SpaceAfter=No
13	نبيذ	nabiy*_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	11	appos	_	_
14	فاكهة	fAkihap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	13	nmod	_	_
15	قوي	qawiy~_1	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	13	amod	_	SpaceAfter=No
16	)	)_0	PUNCT	)	_	13	punct	_	SpaceAfter=No
17	,	,_0	PUNCT	,	_	11	punct	_	_
18	أما	>am~A_1	PART	RP	_	19	compound:prt	_	_
19	الأثرياء	variy~_1	NOUN	NN	Animacy=Hum|Case=Nom|Definite=Def|Gender=Masc|Number=Plur	2	orphan	_	_
20	ف	f	PART	RP	_	21	compound:prt	_	SpaceAfter=No
21	النبيذ	nabiy*_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	3	orphan	_	_
22	المستورد	musotaworid_1	ADJ	JJ	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	21	amod	_	SpaceAfter=No
23	.	._0	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 orphan	color:blue
1	يعمل	Eamil-a_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
2	دوران	dawarAn_1	PROPN	NNP	Animacy=Hum|Gender=Masc|Number=Sing	1	nsubj	_	_
3	ك	k	ADP	IN	_	4	case	_	SpaceAfter=No
4	متحدثٍ	mutaHad~iv_1	NOUN	NN	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	1	obl	_	_
5	رسمي	rasomiy~_1	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	4	amod	_	_
6	و	w	CCONJ	CC	_	2	cc	_	SpaceAfter=No
7	آنخل	>anoxiyl_1	PROPN	NNP	Animacy=Hum|Gender=Masc|Number=Sing	1	conj	_	orig_deprel=nsubj
8	بيتادو	bytAdw_0	PROPN	NNP	Animacy=Hum|Gender=Masc|Number=Sing	7	flat	_	_
9	ك	k	ADP	IN	_	7	orphan	_	orig_deprel=obl|SpaceAfter=No
10	أمينٍ	>amiyn_3	NOUN	NN	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	9	obj	_	_
11	ل	l	ADP	IN	_	12	case	_	SpaceAfter=No
12	لصندوق	Sunoduwq_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No
13	.	._0	PUNCT	.	_	1	punct	_	_

~~~


