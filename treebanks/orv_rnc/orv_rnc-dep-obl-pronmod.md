---
layout: base
title:  'Statistics of obl:pronmod in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `obl:pronmod`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="orv_rnc-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="orv_rnc-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="orv_rnc-dep-obl-float.html">obl:float</a></tt>, <tt><a href="orv_rnc-dep-obl-tmod.html">obl:tmod</a></tt>.

9 nodes (0%) are attached to their parents as `obl:pronmod`.

7 instances of `obl:pronmod` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.55555555555556.

The following 5 pairs of parts of speech are connected with `obl:pronmod`: <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (3; 33% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 22% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (2; 22% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 obl:pronmod	color:blue
1	И	и	CCONJ	_	_	12	cc	_	_
2	Иванъ	Иванъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	12	nsubj	_	_
3	Шавкуновъ	Шавкуновъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	2	flat:name	_	_
4	увѣдавъ	увѣдати	VERB	_	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	12	advcl	_	_
5	то	тотъ	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	8	det	_	_
6	ево	онъ	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	det	_	_
7	Пашкино	пашкинъ	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	8	amod	_	_
8	челобитье	челобитие	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	4	obj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	4	punct	_	_
10	съ	съ	ADP	_	_	11	case	_	_
11	Кунгура	Кунгуръ	PROPN	_	Case=Gen|Gender=Masc|NameType=Geo|Number=Sing	12	obl	_	_
12	бѣжалъ	бѣжати	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	_
13	невѣдомо	невѣдомо	ADJ	_	Degree=Pos	14	obl:pronmod	_	upos="PRAEDIC"
14	куды	куды	ADV	_	Degree=Pos|PronType=Rel	12	advmod	_	upos="ADVPRO"|SpaceAfter=No
15	.	.	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 62	bgColor:blue
# visual-style 62	fgColor:white
# visual-style 61	bgColor:blue
# visual-style 61	fgColor:white
# visual-style 61 62 obl:pronmod	color:blue
1	Да	да	CCONJ	_	_	2	cc	_	wf="Да"
2	отпиши	отписати	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	wf="отпиши"
3	про	про	ADP	_	_	4	case	_	wf="про"
4	нее	она	PRON	_	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	obl	_	wf="нее"
5	не	не	PART	_	Polarity=Neg	8	advmod	_	wf="не"
6	въ	въ	ADP	_	_	8	case	_	wf="въ"
7	одно	одинъ	NUM	_	Case=Acc|Gender=Neut|Number=Sing|NumForm=Word|NumType=Card	8	nummod	_	upos="ANUM"|wf="одно"
8	мѣсто	мѣсто	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	2	obl	_	wf="мѣсто"|SpaceAfter=No
9	,	,	PUNCT	_	_	15	punct	_	wf=","
10	для	для	ADP	_	_	15	mark	_	wf="для"
11	того	тотъ	DET	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	10	fixed	_	wf="того"
12	что	что	SCONJ	_	_	10	fixed	_	wf="что"
13	она	она	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	wf="она"
14	мнѣ	я	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	15	iobj	_	wf="мнѣ"
15	нужна	нужный	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	2	advcl	_	wf="нужна"
16	вскорѣ	вскорѣ	ADV	_	Degree=Pos	15	advmod	_	wf="вскорѣ"|SpaceAfter=No
17	,	,	PUNCT	_	_	22	punct	_	wf=","
18	и	и	CCONJ	_	_	22	cc	_	wf="и"
19	для	для	ADP	_	_	20	case	_	wf="для"
20	того	тотъ	DET	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	22	obl	_	wf="того"
21	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	22	nsubj	_	wf="я"
22	чаю	чаяти	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	wf="чаю"|SpaceAfter=No
23	,	,	PUNCT	_	_	25	punct	_	wf=","
24	что	что	SCONJ	_	_	25	mark	_	wf="что"
25	удобно	удобно	ADJ	_	Degree=Pos	22	ccomp	_	upos="PRAEDIC"|wf="удобно"
26	абъ	объ	ADP	_	_	27	case	_	wf="абъ"
27	одной	одинъ	DET	_	Case=Loc|Gender=Fem|Number=Sing|PronType=Ind	28	obl	_	upos="ANUM"|wf="одной"
28	отписать	отписати	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	25	csubj	_	wf="отписать"
29	въ	въ	ADP	_	_	31	case	_	wf="въ"
30	Швецкую	шведский	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	31	amod	_	wf="Швецкую"
31	землю	земля	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	28	obl	_	wf="землю"|SpaceAfter=No
32	,	,	PUNCT	_	_	35	punct	_	wf=","
33	буде	буде	SCONJ	_	_	35	mark	_	wf="буде"
34	тамъ	тамъ	ADV	_	Degree=Pos|PronType=Dem	35	advmod	_	upos="ADVPRO"|wf="тамъ"
35	дѣлаютъ	дѣлати	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	28	advcl	_	wf="дѣлаютъ"|SpaceAfter=No
36	,	,	PUNCT	_	_	40	punct	_	wf=","
37	и	и	CCONJ	_	_	40	cc	_	wf="и"
38	объ	объ	ADP	_	_	39	case	_	wf="объ"
39	томъ	тотъ	DET	_	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	40	obl	_	wf="томъ"
40	поговорить	поговорити	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	28	conj	_	wf="поговорить"
41	Книперу	Книперъ	PROPN	_	Case=Dat|Gender=Masc|NameType=Sur|Number=Sing	40	iobj	_	wf="Книперу"|SpaceAfter=No
42	;	;	PUNCT	_	_	50	punct	_	wf=";"
43	и	и	CCONJ	_	_	50	cc	_	wf="и"
44	буде	буде	SCONJ	_	_	45	mark	_	wf="буде"
45	дѣлаютъ	дѣлати	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	50	advcl	_	wf="дѣлаютъ"|SpaceAfter=No
46	,	,	PUNCT	_	_	45	punct	_	wf=","
47	чтобъ	чтобъ	SCONJ	_	Mood=Cnd	50	mark	_	wf="чтобъ"
48	не	не	PART	_	Polarity=Neg	49	advmod	_	wf="не"
49	мѣшкавъ	мѣшкати	VERB	_	Tense=Past|VerbForm=Conv|Voice=Act	50	advcl	_	wf="мѣшкавъ"
50	здѣлать	сдѣлати	VERB	_	VerbForm=Inf|Voice=Act	28	conj	_	wf="здѣлать"
51	и	и	CCONJ	_	_	54	cc	_	wf="и"
52	ко	къ	ADP	_	_	53	case	_	wf="ко"
53	мнѣ	я	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	54	obl	_	wf="мнѣ"
54	прислать	прислати	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	50	conj	_	wf="прислать"|SpaceAfter=No
55	,	,	PUNCT	_	_	59	punct	_	wf=","
56	а	а	CCONJ	_	_	59	cc	_	wf="а"
57	о	о	ADP	_	_	58	case	_	wf="о"
58	другой	другой	DET	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Tot	59	obl	_	wf="другой"
59	отпиши	отписати	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	25	conj	_	wf="отпиши"|SpaceAfter=No
60	,	,	PUNCT	_	_	61	punct	_	wf=","
61	куды	куды	ADV	_	Degree=Pos|PronType=Rel	59	advmod	_	upos="ADVPRO"|wf="куды"
62	хочешь	хотѣти	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	61	obl:pronmod	_	wf="хочешь"|SpaceAfter=No
63	.	.	PUNCT	_	_	2	punct	_	wf="."

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 obl:pronmod	color:blue
1	И	и	CCONJ	_	_	11	cc	_	wf="И"
2	сытник	сытникъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	wf="сытник"
3	Неупокой	Неупокой	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	2	appos	_	wf="Неупокой"
4	Сабуров	Сабуровъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	3	flat:name	_	wf="Сабуров"|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	wf=","
6	приведчи	привезти	VERB	_	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	11	advcl	_	wf="приведчи"
7	хлеб	хлѣбъ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	6	obj	_	wf="хлеб"
8	в	въ	ADP	_	_	9	case	_	wf="в"
9	Переславль	Переславль	PROPN	_	Case=Acc|Gender=Masc|NameType=Geo|Number=Sing	6	obl	_	wf="Переславль"|SpaceAfter=No
10	,	,	PUNCT	_	_	6	punct	_	wf=","
11	всыпол	всыпати	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="всыпол"
12	в	въ	ADP	_	_	13	case	_	wf="в"
13	житницы	житница	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	11	obl	_	wf="житницы"
14	тебе	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	15	iobj	_	wf="тебе"
15	неведомо	невѣдомо	ADJ	_	Degree=Pos	16	obl:pronmod	_	upos="PRAEDIC"|wf="неведомо"
16	сколко	сколько	NUM	_	Case=Acc|NumForm=Word|NumType=Card	17	nummod:gov	_	wf="сколко"
17	чети	четь	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	11	obj	_	wf="чети"|SpaceAfter=No
18	,	,	PUNCT	_	_	24	punct	_	wf=","
19	а	а	CCONJ	_	_	24	cc	_	wf="а"
20	тебе	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	24	iobj	_	wf="тебе"
21	тово	тотъ	DET	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	22	det	_	wf="тово"
22	хлеба	хлѣбъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	24	obj	_	wf="хлеба"
23	не	не	PART	_	Polarity=Neg	24	advmod	_	wf="не"
24	дал	дати	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	11	conj	_	wf="дал"|SpaceAfter=No
25	,	,	PUNCT	_	_	32	punct	_	wf=","
26	а	а	CCONJ	_	_	32	cc	_	wf="а"
27	отоманом	атоманъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	30	iobj	_	wf="отоманом"
28	и	и	CCONJ	_	_	29	cc	_	wf="и"
29	козаком	казакъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	27	conj	_	wf="козаком"
30	давать	давати	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	32	xcomp	_	wf="давать"
31	не	не	PART	_	Polarity=Neg	32	advmod	_	wf="не"
32	смеешь	смѣти	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	11	conj	_	wf="смеешь"|SpaceAfter=No
33	.	.	PUNCT	_	_	11	punct	_	wf="."

~~~


