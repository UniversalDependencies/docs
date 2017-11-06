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
1	خارج	xArij_1	ADP	IN	_	2	case	_	_
2	اليابان	yAbAn_1	PROPN	NNP	Animacy=Nhum|Case=Gen|Gender=Fem|Number=Sing	11	obl	_	SpaceAfter=No
3	,	,_0	PUNCT	,	_	5	punct	_	_
4	و	w	CCONJ	CC	_	5	cc	_	SpaceAfter=No
5	بدءاً	bado'_1	NOUN	VBG	Case=Acc|Definite=Ind|Gender=Masc	2	conj	_	_
6	من	min_1	ADP	IN	_	7	case	_	_
7	الإمبراطور	<imobirATuwr_1	NOUN	NN	Animacy=Hum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	obl	_	_
8	شووا	$awaY-i_1	PROPN	NNP	Animacy=Hum|Gender=Masc|Number=Sing	7	appos	_	SpaceAfter=No
9	,	,_0	PUNCT	,	_	2	punct	_	_
10	بات	bAt-i_1	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	11	aux	_	_
11	يشار	>a$Ar_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	_
12	إلى	<ilaY_1	ADP	IN	_	13	case	_	_
13	الأباطرة	>abATirap_1	NOUN	NN	Animacy=Hum|Case=Gen|Definite=Def|Gender=Masc|Number=Plur	11	obl	_	_
14	عادةً	EAdap_1	ADV	RB	_	11	advmod	_	_
15	ب	b	ADP	IN	_	16	case	_	SpaceAfter=No
16	أسمائ	{isom_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Plur	11	obl	_	SpaceAfter=No
17	هم	hm	PRON	PRP	Case=Gen|Gender=Masc|Number=Plur|Person=3	16	nmod	_	_
18	الأولى	>aw~al_2	ADJ	JJ	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	16	amod	_	SpaceAfter=No
19	,	,_0	PUNCT	,	_	22	punct	_	_
20	سواء	sawA'_1	PART	RP	_	22	cc:preconj	_	_
21	خلال	xilAl_1	ADP	IN	_	22	case	_	_
22	حيات	HayAp_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Sing	11	obl	_	SpaceAfter=No
23	هم	hm	PRON	PRP	Case=Gen|Gender=Masc|Number=Plur|Person=3	22	nmod	_	_
24	أو	>awo_1	CCONJ	CC	_	26	cc	_	_
25	بعد	baEod_1	ADP	IN	_	26	case	_	_
26	وفات	wafAp_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Sing	22	conj	_	SpaceAfter=No
27	هم	hm	PRON	PRP	Case=Gen|Gender=Masc|Number=Plur|Person=3	26	nmod	_	SpaceAfter=No
28	.	._0	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cc:preconj	color:blue
1	و	w	PART	RP	_	3	compound:prt	_	SpaceAfter=No
2	قد	qado_1	PART	RP	_	3	compound:prt	_	_
3	ظهرت	Zahar-a_1	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
4	نبوءةٌ	nubuw'ap_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	3	nsubj	_	_
5	تقول	qAl-u_1	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	4	acl:relcl	_	_
6	أن	>an~a_1	SCONJ	IN	_	10	mark	_	SpaceAfter=No
7	ه	h	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	nsubj	_	_
8	إما	>am~A_1	PART	RP	_	10	cc:preconj	_	_
9	س	s	PART	RP	_	10	compound:prt	_	SpaceAfter=No
10	يموت	mAt-u_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Fut|Voice=Act	5	ccomp	_	_
11	ب	b	ADP	IN	_	12	case	_	SpaceAfter=No
12	الشيخوخة	$ayoxuwxap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Sing	10	obl	_	_
13	بعد	baEod_1	ADP	IN	_	14	case	_	_
14	حياةٍ	HayAp_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	10	obl	_	_
15	هادئة	hAdi}_2	ADJ	JJ	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	14	amod	_	SpaceAfter=No
16	,	,_0	PUNCT	,	_	19	punct	_	_
17	أو	>awo_1	CCONJ	CC	_	19	cc	_	_
18	س	s	PART	RP	_	19	compound:prt	_	SpaceAfter=No
19	يموت	mAt-u_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Fut|Voice=Act	10	conj	_	_
20	يافعاً	yAfiE_1	NOUN	VBN	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	19	acl	_	_
21	في	fiy_1	ADP	IN	_	22	case	_	_
22	أرض	>aroD_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Sing	19	obl	_	_
23	المعركة	maEorakap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Sing	22	nmod	_	_
24	و	w	CCONJ	CC	_	26	cc	_	SpaceAfter=No
25	س	s	PART	RP	_	26	compound:prt	_	SpaceAfter=No
26	يكتسب	{ikotasab_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Fut|Voice=Act	19	conj	_	_
27	الخلود	xuluwd_1	NOUN	NN	Animacy=Nhum|Case=Acc|Definite=Def|Gender=Masc|Number=Sing	26	obj	_	_
28	من	min_1	ADP	IN	_	30	case	_	_
29	خلال	xilAl_1	ADP	IN	_	28	fixed	_	_
30	الشعر	$iEor_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	26	obl	_	SpaceAfter=No
31	.	._0	PUNCT	.	_	3	punct	_	_

~~~


