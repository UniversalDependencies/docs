---
layout: base
title:  'Statistics of obl:float in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `obl:float`

This relation is a language-specific subtype of <tt><a href="orv_ruthenian-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="orv_ruthenian-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="orv_ruthenian-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="orv_ruthenian-dep-obl-pronmod.html">obl:pronmod</a></tt>, <tt><a href="orv_ruthenian-dep-obl-tmod.html">obl:tmod</a></tt>.

20 nodes (0%) are attached to their parents as `obl:float`.

19 instances of `obl:float` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.5.

The following 3 pairs of parts of speech are connected with `obl:float`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt> (17; 85% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt> (2; 10% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 6 obl:float	color:blue
1	До	до	ADP	_	_	2	case	_	wf="До"|before="<p>"
2	чого	што	PRON	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	15	obl	_	wf="чого"
3	кгди	кгды	SCONJ	_	_	15	mark	_	wf="кгди"
4	(с)мо	быти	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	15	aux	_	wf="смо"
5	и	и	PART	_	_	6	advmod	_	wf="и"
6	сами	самъ	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Emp	15	obl:float	_	wf="сами"
7	ѡного	оный	DET	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	wf="оного"
8	злочи(н)ци	злочинца	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	15	obj	_	wf="злочинци"
9	по	по	ADP	_	_	11	case	_	wf="по"
10	ки(л)ку	килко	NUM	_	Case=Dat|NumForm=Word|NumType=Card	11	nummod:gov	_	wf="килку"
11	разовъ	разъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	15	obl:tmod	_	wf="разовъ"
12	доброво(л)нє	доброволне	ADV	_	Degree=Pos	15	advmod	_	wf="доброволне"
13	ѡ	о	ADP	_	_	14	case	_	wf="о"
14	томъ	то	PRON	_	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	15	obl	_	wf="томъ"
15	питали	пытати	VERB	_	Aspect=Imp|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="питали"|SpaceAfter=No
16	.	.	PUNCT	_	_	15	punct	_	wf="."

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 22 obl:float	color:blue
1	А	а	CCONJ	СС	_	8	cc	_	wf="А"
2	на	на	ADP	IN	_	4	case	_	wf="на"
3	инъшии	инший	DET	DT	Case=Acc|Gender=Masc|Number=Plur|PronType=Tot	4	det	_	wf="инъшии"
4	годы	годъ	NOUN	NNI	Case=Acc|Gender=Masc|Number=Plur	8	obl	_	wf="годы"
5	по	по	ADP	IN	_	6	case	_	wf="по"
6	тому	то	PRON	DT	Case=Dat|Gender=Neut|Number=Sing|PronType=Dem	8	obl	_	wf="тому"
7	ж	жъ	PART	RP	_	8	advmod	_	wf="ж"
8	маеть	мети	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	wf="маеть"
9	намъ	мы	PRON	PRP	Case=Dat|Number=Plur|Person=1|PronType=Prs	8	iobj	_	wf="намъ"
10	тотъ	тотъ	DET	DT	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	11	det	_	wf="тотъ"
11	платъ	платъ	NOUN	NNI	Case=Acc|Gender=Masc|Number=Sing	15	obj	_	wf="платъ"
12	с	съ	ADP	IN	_	14	case	_	wf="с"
13	тыхъ	той	DET	DT	Case=Gen|Gender=Fem|Number=Plur|PronType=Dem	14	det	_	wf="тыхъ"
14	корчомъ	корчма	NOUN	NNI	Case=Gen|Gender=Fem|Number=Plur	15	obl	_	wf="корчомъ"
15	давати	давати	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	8	xcomp	_	wf="давати"|SpaceAfter=No
16	,	,	PUNCT	-COMMA-	_	20	punct	_	_
17	ажъ	аже	SCONJ	IN	_	20	mark	_	wf="ажъ"
18	до	до	ADP	IN	_	20	case	_	wf="до"
19	пѧти	пять	NUM	CD	Case=Gen|NumForm=Word|NumType=Card	20	nummod	_	wf="пѧти"
20	годов	годъ	NOUN	NNI	Case=Gen|Gender=Masc|Number=Plur	15	obl	_	wf="годов"|SpaceAfter=No
21	,	,	PUNCT	-COMMA-	_	24	punct	_	_
22	все	весь	DET	DT	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	24	obl:float	_	wf="все"
23	готовыми	готовый	ADJ	JJL	Case=Ins|Degree=Pos|Gender=Masc|Number=Plur	24	amod	_	wf="готовыми"
24	грошми	грошъ	NOUN	NNI	Case=Ins|Gender=Masc|Number=Plur	19	nmod	_	wf="грошми"|SpaceAfter=No
25	.	.	PUNCT	-PERIOD-	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 48	bgColor:blue
# visual-style 48	fgColor:white
# visual-style 48 46 obl:float	color:blue
1	Тєди	теды	ADV	RB	Degree=Pos|PronType=Dem	11	advmod	_	pos="ADVPRO"|wf="Тєди"
2	мы	мы	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	11	nsubj	_	wf="мы"|SpaceAfter=No
3	,	,	PUNCT	-COMMA-	_	4	punct	_	wf=","
4	вря(д)	урядъ	NOUN	NNA	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	wf="вряд"|SpaceAfter=No
5	,	,	PUNCT	-COMMA-	_	4	punct	_	wf=","
6	в	въ	ADP	IN	_	7	case	_	wf="в"
7	справу	справа	NOUN	NNI	Case=Acc|Gender=Fem|Number=Sing	9	obl	_	wf="справу"
8	тую	тый	DET	DT	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	7	det	_	wf="тую"
9	вглядѣвъши	углядѣти	VERB	VBG	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	11	advcl	_	wf="вглядѣвъши"|SpaceAfter=No
10	,	,	PUNCT	-COMMA-	_	9	punct	_	wf=","
11	наказує(м)	наказовати	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	wf="наказуєм"
12	дєкретомъ	декретъ	NOUN	NNI	Case=Ins|Gender=Masc|Number=Sing	11	iobj	_	wf="дєкретомъ"
13	наши(м)	нашъ	DET	PRP$	Case=Ins|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	12	det	_	wf="нашим"|SpaceAfter=No
14	,	,	PUNCT	-COMMA-	_	48	punct	_	wf=","
15	жебы	жебы	SCONJ	IN	Mood=Cnd	48	mark	_	wf="жебы"
16	то(т)	тотъ	DET	DT	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	17	det	_	wf="тот"
17	Васко	Васко	PROPN	NPA	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	48	nsubj:pass	_	wf="Васко"
18	с	съ	ADP	IN	_	20	case	_	wf="с"
19	тимъ	тый	DET	DT	Case=Ins|Gender=Masc|Number=Sing|PronType=Dem	20	det	_	wf="тимъ"
20	хлопъцє(м)	хлопецъ	NOUN	NNA	Case=Ins|Gender=Masc|Number=Sing	17	nmod	_	wf="хлопъцєм"|SpaceAfter=No
21	,	,	PUNCT	-COMMA-	_	24	punct	_	wf=","
22	яко	яко	SCONJ	IN	_	24	case	_	wf="яко"
23	с	съ	ADP	IN	_	24	case	_	wf="с"
24	тимъ	то	PRON	DT	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	20	nmod	_	wf="тимъ"|SpaceAfter=No
25	,	,	PUNCT	-COMMA-	_	27	punct	_	wf=","
26	што	што	PRON	WP	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	27	obj	_	wf="што"
27	кра(л)	красти	VERB	VBC	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	24	acl:relcl	_	wf="крал"|SpaceAfter=No
28	,	,	PUNCT	-COMMA-	_	31	punct	_	wf=","
29	а	а	CCONJ	СС	_	31	cc	_	wf="а"
30	ѡ(н)	онъ	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	31	nsubj	_	wf="ѡн"
31	ѡ(т)быра(л)	отбирати	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	27	conj	_	wf="ѡтбырал"
32	и	и	CCONJ	СС	_	35	cc	_	wf="и"
33	на	на	ADP	IN	_	34	case	_	wf="на"
34	то	то	PRON	DT	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	35	obl	_	wf="то"
35	приводи(л)	приводити	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	31	conj	_	wf="приводил"|SpaceAfter=No
36	,	,	PUNCT	-COMMA-	_	27	punct	_	wf=","
37	вє(д)лугъ	ведлугъ	ADP	IN	_	38	case	_	wf="вєдлугъ"
38	ро(з)делу	роздѣлъ	NOUN	NNI	Case=Gen|Gender=Masc|Number=Sing	48	obl	_	wf="розделу"
39	ді҃	14	ADJ	ORD	Case=Gen|Gender=Masc|Number=Sing|NumForm=Cyril|NumType=Ord	38	amod	_	pos="ANUM"|wf="ді҃"
40	[14]	14	ADJ	ORD	Case=Gen|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Card	39	dep	_	pos="ANUM"|wf="[14]"
41	а	а	CCONJ	СС	_	42	cc	_	wf="а"
42	а(р)тикуло(в)	артикулъ	NOUN	NNI	Case=Gen|Gender=Masc|Number=Plur	38	conj	_	wf="артикулов"
43	ро(з)нихъ	розный	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	42	amod	_	wf="рознихъ"
44	бы(л)ли	быти	AUX	VBC	Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	48	aux:pass	_	wf="былли"
45	[!]	[!]	PUNCT	-DASH-	_	46	punct	_	wf="[!]"
46	ѡба	оба	NUM	CD	Case=Nom|Gender=Masc|NumForm=Word|NumType=Sets	48	obl:float	_	wf="ѡба"
47	го(р)лом	горло	NOUN	NNI	Case=Ins|Gender=Neut|Number=Sing	48	obl	_	wf="горлом"
48	карани	карати	VERB	NNI	Case=Nom|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	11	ccomp	_	wf="карани"|SpaceAfter=No
49	.	.	PUNCT	-PERIOD-	_	11	punct	_	wf="."

~~~


