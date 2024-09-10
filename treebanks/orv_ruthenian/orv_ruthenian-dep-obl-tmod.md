---
layout: base
title:  'Statistics of obl:tmod in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="orv_ruthenian-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="orv_ruthenian-dep-obl-agent.html">obl:agent</a></tt>.

87 nodes (0%) are attached to their parents as `obl:tmod`.

46 instances of `obl:tmod` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.63218390804598.

The following 4 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (81; 93% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 obl:tmod	color:blue
1	А	а	CCONJ	СС	_	2	cc	_	wf="А"
2	псан	писати	VERB	VBNH	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	wf="псан"
3	оу	у	ADP	IN	_	4	case	_	wf="оу"
4	Вил(ь)ни	Вилня	PROPN	NPI	Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	2	obl	_	wf="Вильни"|SpaceAfter=No
5	,	,	PUNCT	-COMMA-	_	6	punct	_	_
6	марта	мартъ	NOUN	NNI	Case=Gen|Gender=Masc|Number=Sing	2	obl:tmod	_	wf="марта"
7	2	2	ADJ	ORD	Case=Acc|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	6	flat	_	_
8	,	,	PUNCT	-COMMA-	_	9	punct	_	_
9	индик(т)	индиктъ	NOUN	NNI	Case=Nom|Gender=Masc|Number=Sing	6	nmod	_	wf="индикт"
10	6	6	ADJ	ORD	Case=Nom|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	9	amod	_	_
11	.	.	PUNCT	-PERIOD-	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 26 obl:tmod	color:blue
1	Про	про	ADP	IN	_	2	case	_	wf="Про"
2	то	то	PRON	DT	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	18	obl	_	wf="то"
3	ж	жъ	PART	RP	_	2	advmod	_	wf="ж"|SpaceAfter=No
4	,	,	PUNCT	-COMMA-	_	5	punct	_	_
5	доброродныи	доброродный	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	14	amod	_	wf="доброродныи"|SpaceAfter=No
6	,	,	PUNCT	-COMMA-	_	8	punct	_	_
7	и	и	CCONJ	СС	_	8	cc	_	wf="и"
8	почестливыи	почестливый	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	5	conj	_	wf="почестливыи"|SpaceAfter=No
9	,	,	PUNCT	-COMMA-	_	11	punct	_	_
10	и	и	CCONJ	СС	_	11	cc	_	wf="и"
11	ростропныи	ростропный	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	5	conj	_	wf="ростропныи"
12	наши	нашъ	DET	PRP$	Case=Nom|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	14	det	_	wf="наши"
13	милыи	милый	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	14	amod	_	wf="милыи"
14	сусѣди	суседъ	NOUN	NNA	Case=Nom|Gender=Masc|Number=Plur	18	vocative	_	wf="сусѣди"
15	и	и	CCONJ	СС	_	16	cc	_	wf="и"
16	приятели	приятель	NOUN	NNA	Case=Nom|Gender=Masc|Number=Plur	14	conj	_	wf="приятели"|SpaceAfter=No
17	,	,	PUNCT	-COMMA-	_	18	punct	_	_
18	оупоминамы	упоминати	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	wf="оупоминамы"
19	вашеи	вашъ	DET	PRP$	Case=Dat|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	20	det	_	wf="вашеи"
20	м(и)л(о)сти	милость	NOUN	NNI	Case=Dat|Gender=Fem|Number=Sing	18	iobj	_	wf="милости"
21	и	и	CCONJ	СС	_	22	cc	_	wf="и"
22	явлѧемъ	являти	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	18	conj	_	wf="явлѧемъ"|SpaceAfter=No
23	,	,	PUNCT	-COMMA-	_	36	punct	_	_
24	иж	иже	SCONJ	IN	_	36	mark	_	wf="иж"
25	тых	той	DET	DT	Case=Gen|Gender=Masc|Number=Plur|PronType=Dem	26	det	_	wf="тых"
26	часовъ	часъ	NOUN	NNI	Case=Gen|Gender=Masc|Number=Plur	36	obl:tmod	_	wf="часовъ"
27	оспод(а)рь	осподаръ	NOUN	NNA	Case=Nom|Gender=Masc|Number=Sing	36	nsubj	_	wf="осподарь"
28	нашь	нашъ	DET	PRP$	Case=Nom|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	27	det	_	wf="нашь"
29	освѣценыи	освеченый	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	31	amod	_	wf="освѣценыи"
30	великыи	великий	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	31	amod	_	wf="великыи"
31	корол(ь)	король	NOUN	NNA	Case=Nom|Gender=Masc|Number=Sing	27	appos	_	wf="король"
32	его	онъ	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	33	det	_	wf="его"
33	м(и)л(о)сть	милость	NOUN	NNI	Case=Nom|Gender=Fem|Number=Sing	31	appos	_	wf="милость"
34	оу	у	ADP	IN	_	36	case	_	wf="оу"
35	Литовъскои	литовский	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	36	amod	_	wf="Литовъскои"
36	земли	земля	NOUN	NNI	Case=Gen|Gender=Fem|Number=Sing	22	ccomp	_	wf="земли"
37	ес(ть)	быти	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	36	cop	_	wf="есть"|SpaceAfter=No
38	.	.	PUNCT	-PERIOD-	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 5 obl:tmod	color:blue
1	А	а	CCONJ	СС	_	11	cc	_	wf="А"
2	самъ	самъ	DET	DT	Case=Nom|Gender=Masc|Number=Sing|PronType=Emp	11	nsubj	_	wf="самъ"
3	есми	быти	AUX	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	wf="есми"
4	сими	сей	DET	DT	Case=Ins|Gender=Masc|Number=Plur|PronType=Dem	5	det	_	wf="сими"
5	часы	часъ	NOUN	NNI	Case=Ins|Gender=Masc|Number=Plur	11	obl:tmod	_	wf="часы"|SpaceAfter=No
6	,	,	PUNCT	-COMMA-	_	8	punct	_	_
7	ещо	еще	ADV	RB	Degree=Pos	8	advmod	_	wf="ещо"
8	дал	дати	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	11	parataxis	_	wf="дал"
9	Б(ог)ъ	богъ	NOUN	NNA	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	wf="Богъ"|SpaceAfter=No
10	,	,	PUNCT	-COMMA-	_	8	punct	_	_
11	живъ	живый	ADJ	JJH	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	0	root	_	wf="живъ"
12	до	до	ADP	IN	_	14	case	_	wf="до"
13	Б(о)жьи	божий	ADJ	JJH	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	14	amod	_	wf="Божьи"
14	воли	воля	NOUN	NNI	Case=Gen|Gender=Fem|Number=Sing	11	obl	_	wf="воли"|SpaceAfter=No
15	.	.	PUNCT	-PERIOD-	_	11	punct	_	_

~~~


