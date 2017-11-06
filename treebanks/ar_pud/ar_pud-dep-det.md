---
layout: base
title:  'Statistics of det in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="ar_pud-dep-det-predet.html">det:predet</a></tt>.

5 nodes (0%) are attached to their parents as `det`.

5 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `det`: <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-DET.html">DET</a></tt> (3; 60% instances), <tt><a href="ar_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_pud-pos-DET.html">DET</a></tt> (1; 20% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	وفقاً	wifoq_1	NOUN	VBG	Case=Acc|Definite=Ind|Gender=Masc	7	advcl	_	_
2	ل	l	ADP	IN	_	3	case	_	SpaceAfter=No
3	جريدة	jariydap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	obl	_	_
4	لو	lawo_1	DET	DT	_	5	det	_	Proper=True
5	فيغارو	fiygAruw_1	PROPN	NNP	Animacy=Nhum|Number=Sing	3	nmod:gmod	_	SpaceAfter=No
6	,	,_0	PUNCT	,	_	1	punct	_	_
7	يمكن	>amokan_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
8	ل	l	ADP	IN	_	10	case	_	SpaceAfter=No
9	هذه	h`*A_1	PRON	PDEM	Case=Gen|Gender=Fem|Number=Sing	10	det:predet	_	_
10	الخطة	xuT~ap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Sing	7	obl	_	_
11	الحكومية	Hukuwmiy~_1	ADJ	JJ	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	10	amod	_	_
12	أن	>ano_1	ADP	IN	_	13	mark	_	_
13	توفر	waf~ar_1	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	7	csubj	_	_
14	42	42_0	NUM	CD	_	16	nummod	_	_
15	مليون	miloyuwn_1	NUM	CD	Case=Acc|Gender=Masc|Number=Plur	14	nummod	_	_
16	يورو	yuwruw_1	NOUN	NN	Animacy=Nhum|Definite=Ind|Gender=Masc|Number=Sing	13	obj	_	SpaceAfter=No
17	,	,_0	PUNCT	,	_	19	punct	_	_
18	س	s	PART	RP	_	19	compound:prt	_	SpaceAfter=No
19	تذهب	*ahab-a_1	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Fut|Voice=Act	13	advcl	_	_
20	15,5	15,5_0	NUM	CD	_	21	nummod	_	_
21	مليون	miloyuwn_1	NUM	CD	Case=Acc|Number=Plur	19	nsubj	_	_
22	من	min_1	ADP	IN	_	23	case	_	SpaceAfter=No
23	ها	hA	PRON	PRP	Case=Gen|Gender=Fem|Number=Sing|Person=3	21	nmod	_	_
24	ل	l	ADP	IN	_	25	case	_	SpaceAfter=No
25	تحقيق	taHoqiyq_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	19	obl	_	_
26	الأمن	>amon_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	25	nmod	_	SpaceAfter=No
27	.	._0	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	تنطبق	._0	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
2	نسبة	{inoTabaq_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Def|Gender=Fem|Number=Sing	1	nsubj	_	_
3	ال	nisobap_1	DET	DT	_	4	det	_	SpaceAfter=No
4	3	Al3_0	NUM	CD	_	2	nmod:gmod	_	SpaceAfter=No
5	%	%_0	SYM	SYM	_	4	dep	_	_
6	أيضاً	>ayoDAF_1	ADV	RB	_	1	advmod	_	_
7	على	EalaY_1	ADP	IN	_	8	case	_	_
8	حاملي	HAmil_1	NOUN	NN	Animacy=Hum|Case=Gen|Definite=Def|Gender=Masc|Number=Plur	1	obl	_	_
9	بطاقات	biTAqap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Plur	8	nmod	_	_
10	"	"_0	PUNCT	``	_	11	punct	_	SpaceAfter=No
11	نكتار	nktAr_0	PROPN	NNP	Animacy=Nhum|Gender=Masc|Number=Sing	9	nmod:gmod	_	SpaceAfter=No
12	"	"_0	PUNCT	''	_	11	punct	_	_
13	الذين	Al~a*iy_1	PRON	REL	Case=Gen|Gender=Masc|Number=Plur	14	nsubj	_	_
14	يتطلعون	taTal~aE_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	8	acl:relcl	_	_
15	ل	l	ADP	IN	_	16	case	_	SpaceAfter=No
16	اقتراض	{iqotirAD_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	14	obl	_	_
17	مبالغ	mabolag_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Masc|Number=Plur	16	nmod	_	_
18	ما	mA_1	PART	RP	_	21	compound:prt	_	_
19	بين	bayona_1	ADP	IN	_	21	case	_	_
20	15001	15001_0	NUM	CD	_	21	nummod	_	_
21	جنيه	junayoh_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	16	nmod	_	_
22	إسترليني	<isotaroliyniy~_1	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	21	amod	_	_
23	و	wa_1	CCONJ	CC	_	25	cc	_	SpaceAfter=No
24	19999	19999_0	NUM	CD	_	25	nummod	_	_
25	جنيه	junayoh_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	21	conj	_	_
26	إسترليني	<isotaroliyniy~_1	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	25	amod	_	_
27	خلال	xilAl_1	ADP	IN	_	28	case	_	_
28	فترة	fatorap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	16	nmod	_	_
29	تتراوح	tarAwaH_1	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	28	acl:relcl	_	_
30	ما	mA_1	PART	RP	_	32	compound:prt	_	_
31	بين	bayona_1	ADP	IN	_	32	case	_	_
32	سنتين	sanap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Fem|Number=Dual	29	obl	_	_
33	و	w	CCONJ	CC	_	35	cc	_	SpaceAfter=No
34	ثلاث	valAv_1	NUM	CD	Case=Gen|Gender=Masc|Number=Plur	35	nummod	_	_
35	سنوات	sanap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Fem|Number=Plur	32	conj	_	SpaceAfter=No
36	.	._0	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	صرحت	Sar~aH_1	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
2	المعارضة	muEAraDap_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Def|Gender=Fem|Number=Sing	1	nsubj	_	_
3	ل	l	ADP	IN	_	5	case	_	SpaceAfter=No
4	إل	<il_1	PROPN	NNP	_	5	det	_	_
5	موندو	mwndw_0	PROPN	NNP	Animacy=Nhum|Number=Sing	2	nmod	_	_
6	قائلةً	qA}il_1	ADJ	VBN	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	2	ccomp	_	SpaceAfter=No
7	:	:_0	PUNCT	:	_	10	punct	_	_
8	"	"_0	PUNCT	``	_	10	punct	_	SpaceAfter=No
9	س	s	PART	RP	_	10	compound:prt	_	SpaceAfter=No
10	يكون	kAn-u_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Fut|Voice=Act	6	ccomp	_	_
11	هناك	hunAka_1	ADV	RB	_	10	advmod	_	_
12	احتجاجات	{iHotijAj_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	10	nsubj	_	_
13	و	w	CCONJ	CC	_	15	cc	_	SpaceAfter=No
14	غير	gayor_1	PART	RP	Polarity=Neg	15	advmod	_	SpaceAfter=No
15	ها	hA	PRON	PRP	Case=Gen|Gender=Fem|Number=Sing|Person=3	12	conj	_	_
16	من	min_1	ADP	IN	_	17	case	_	_
17	الأمر	>amor_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	15	nmod	_	SpaceAfter=No
18	,	,_0	PUNCT	,	_	20	punct	_	_
19	لقد	qado_1	PART	RP	_	20	compound:prt	_	_
20	خطط	xaT~aT_1	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Pass	10	parataxis	_	_
21	ل	l	ADP	IN	_	23	case	_	SpaceAfter=No
22	كل	kul~_1	DET	PDT	Case=Gen	23	det:predet	_	_
23	شيءٍ	$ayo'_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	20	obl	_	_
24	ب	b	ADP	IN	_	25	case	_	SpaceAfter=No
25	الفعل	fiEol_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	20	obl	_	SpaceAfter=No
26	"	"_0	PUNCT	''	_	10	punct	_	SpaceAfter=No
27	.	._0	PUNCT	.	_	1	punct	_	_

~~~


