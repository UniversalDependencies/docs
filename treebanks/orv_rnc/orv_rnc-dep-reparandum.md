---
layout: base
title:  'Statistics of reparandum in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `reparandum`

This relation is universal.

5 nodes (0%) are attached to their parents as `reparandum`.

5 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 10.2.

The following 3 pairs of parts of speech are connected with `reparandum`: <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (3; 60% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (1; 20% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 reparandum	color:blue
1	Попа	попъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	4	reparandum	_	wf="Попа"
2	ж	же	PART	_	_	1	advmod	_	wf="ж"
3	огородные	огородный	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	10	nsubj	_	wf="огородные"
4	попа	попъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	wf="попа"
5	Максима	Максимъ	PROPN	_	Case=Gen|Gender=Masc|NameType=Giv|Number=Sing	4	appos	_	wf="Максима"
6	и	и	CCONJ	_	_	7	cc	_	wf="и"
7	просвирницына	просвирницынъ	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	4	conj	_	wf="просвирницына"
8	по	по	ADP	_	_	10	case	_	wf="по"
9	14	14	NUM	_	Case=Dat|NumForm=Digit|NumType=Card	10	nummod:gov	_	wf="14"
10	саженей	сажень	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	0	root	_	wf="саженей"|SpaceAfter=No
11	,	,	PUNCT	_	_	14	punct	_	wf=","
12	уличные	уличный	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	14	nsubj	_	wf="уличные"
13	12	12	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	14	nummod:gov	_	wf="12"
14	саженей	сажень	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	10	conj	_	wf="саженей"|SpaceAfter=No
15	.	.	PUNCT	_	_	10	punct	_	wf="."

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 38 2 reparandum	color:blue
1	И	и	CCONJ	_	_	42	cc	_	_
2	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	38	reparandum	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	господине	господинъ	NOUN	_	Case=Voc|Gender=Masc|Number=Sing	2	vocative	_	_
5	князь	князь	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	appos	_	_
6	Андрей	Андрѣй	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	5	appos	_	SpaceAfter=No
7	,	,	PUNCT	_	_	4	punct	_	_
8	видя	видѣти	VERB	_	Tense=Pres|VerbForm=Conv|Voice=Act	42	advcl	_	_
9	челоѣколюбие	человѣколюбие	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	8	obj	_	_
10	и	и	CCONJ	_	_	11	cc	_	_
11	милосердие	милосердие	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	9	conj	_	_
12	Господа	господь	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	_
13	нашего	нашъ	DET	_	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	12	det	_	_
14	Исуса	Исусъ	PROPN	_	Case=Gen|Gender=Masc|NameType=Giv|Number=Sing	12	appos	_	_
15	Христа	Христосъ	PROPN	_	Case=Gen|Gender=Masc|NameType=Prs|Number=Sing	14	flat:name	_	SpaceAfter=No
16	,	,	PUNCT	_	_	22	punct	_	_
17	что	что	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	22	nsubj	_	_
18	гнѣвъ	гнѣвъ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	22	obj	_	_
19	Свой	свой	DET	_	Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	18	det	_	_
20	от	отъ	ADP	_	_	21	case	_	_
21	нас	мы	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	22	obl	_	_
22	отвелъ	отвести	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	12	acl:relcl	_	SpaceAfter=No
23	,	,	PUNCT	_	_	27	punct	_	_
24	а	а	CCONJ	_	_	27	cc	_	_
25	милость	милость	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	27	obj	_	_
26	Свою	свой	DET	_	Case=Acc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	25	det	_	_
27	явил	явити	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	22	conj	_	_
28	народу	народъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	27	iobj	_	_
29	християнскому	христианский	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	28	amod	_	SpaceAfter=No
30	,	,	PUNCT	_	_	31	punct	_	_
31	молитвами	молитва	NOUN	_	Case=Ins|Gender=Fem|Number=Plur	27	iobj	_	_
32	Пречистыя	пречистый	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	33	amod	_	_
33	госпожа	госпожа	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	31	nmod	_	_
34	Матере	мать	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	33	appos	_	_
35	Своея	свой	DET	_	Case=Gen|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	34	det	_	SpaceAfter=No
36	,	,	PUNCT	_	_	8	punct	_	_
37	и	и	CCONJ	_	_	42	cc	_	_
38	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	42	nsubj	_	SpaceAfter=No
39	,	,	PUNCT	_	_	40	punct	_	_
40	господине	господинъ	NOUN	_	Case=Voc|Gender=Masc|Number=Sing	38	vocative	_	SpaceAfter=No
41	,	,	PUNCT	_	_	40	punct	_	_
42	смотри	смотрити	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
43	того	то	PRON	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	42	obj	_	SpaceAfter=No
44	:	:	PUNCT	_	_	59	punct	_	_
45	властель	властель	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	51	xcomp	_	_
46	еси	быти	AUX	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	51	aux:pass	_	_
47	во	въ	ADP	_	_	48	case	_	_
48	отчине	отчина	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	51	obl	_	_
49	отъ	отъ	ADP	_	_	50	case	_	_
50	Бога	богъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	51	obl:agent	_	_
51	поставленъ	поставити	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	59	obl:depict	_	SpaceAfter=No
52	,	,	PUNCT	_	_	51	punct	_	_
53	-	-	PUNCT	_	_	59	punct	_	_
54	люди	человѣкъ	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	59	obj	_	SpaceAfter=No
55	,	,	PUNCT	_	_	56	punct	_	_
56	господине	господинъ	NOUN	_	Case=Voc|Gender=Masc|Number=Sing	59	vocative	_	SpaceAfter=No
57	,	,	PUNCT	_	_	56	punct	_	_
58	свои	свой	DET	_	Case=Acc|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	54	det	_	_
59	смиряй	смиряти	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	43	acl	_	_
60	отъ	отъ	ADP	_	_	62	case	_	_
61	лихово	лихой	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	62	amod	_	_
62	обычая	обычай	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	59	obl	_	SpaceAfter=No
63	.	.	PUNCT	_	_	42	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 reparandum	color:blue
1	У	у	ADP	_	_	2	case	_	wf="У"|_
2	Рот(ь)ки	Ротька	PROPN	_	Case=Gen|Gender=Masc|NameType=Giv|Number=Sing	8	obl	_	wf="Ротьки"|_
3	Соболева	Соболевъ	PROPN	_	Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	2	flat:name	_	wf="Соболева"|_
4	взято	взяти	VERB	_	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	8	reparandum	_	wf="взято"|_
5	с	съ	ADP	_	_	6	case	_	wf="с"|_
6	полуосмухи	полуосмуха	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	8	obl	_	wf="полуосмухи"|_
7	полот(ь)	полоть	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	8	nsubj:pass	_	wf="полоть"|_
8	взят	взяти	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	wf="взят"|SpaceAfter=No
9	,	,	PUNCT	_	_	13	punct	_	wf=","|_
10	а	а	CCONJ	_	_	13	cc	_	wf="а"|_
11	весу	вѣсъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	13	nsubj	_	wf="весу"|_
12	20	20	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	13	nummod:gov	_	wf="20"|_
13	гривенок	гривенка	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	8	nmod	_	wf="гривенок"|SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	wf=","|_
15	да	да	CCONJ	_	_	16	cc	_	wf="да"|_
16	осос	ососъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	conj	_	wf="осос"|SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	_	wf=","|_
18	весу	вѣсъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	16	parataxis	_	wf="весу"|_
19	в	въ	ADP	_	_	20	case	_	wf="в"|_
20	нем	онъ	PRON	_	Case=Loc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	18	orphan	_	wf="нем"|SpaceAfter=No
21	.	.	PUNCT	_	_	8	punct	_	wf="."|_

~~~


