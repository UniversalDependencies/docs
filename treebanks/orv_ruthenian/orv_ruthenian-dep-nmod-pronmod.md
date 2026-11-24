---
layout: base
title:  'Statistics of nmod:pronmod in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `nmod:pronmod`

This relation is a language-specific subtype of <tt><a href="orv_ruthenian-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="orv_ruthenian-dep-nmod-float.html">nmod:float</a></tt>.

5 nodes (0%) are attached to their parents as `nmod:pronmod`.

3 instances of `nmod:pronmod` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `nmod:pronmod`: <tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (2; 40% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (2; 40% instances), <tt><a href="orv_ruthenian-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 nmod:pronmod	color:blue
1	А	а	CCONJ	СС	_	2	cc	_	wf="А"
2	держати	держати	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	0	root	_	wf="держати"
3	емꙋ	онъ	PRON	PRP	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	iobj	_	wf="емꙋ"
4	тыи	той	DET	DT	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	5	det	_	wf="тыи"
5	корчмы	корчма	NOUN	NNI	Case=Acc|Gender=Fem|Number=Plur	2	obj	_	wf="корчмы"
6	в	въ	ADP	IN	_	8	case	_	wf="в"
7	тот	тотъ	DET	DT	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	wf="тот"
8	год	годъ	NOUN	NNI	Case=Acc|Gender=Masc|Number=Sing	2	obl	_	wf="год"
9	свои	свой	DET	PRP$	Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	8	det	_	wf="свои"
10	в	въ	ADP	IN	_	13	case	_	wf="в"
11	кол(ь)ко	колько	NUM	CD	Case=Acc|NumForm=Word|NumType=Card	13	nummod	_	wf="колько"
12	похочеть	похотети	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	11	nmod:pronmod	_	wf="похочеть"
13	домех	домъ	NOUN	NNI	Case=Loc|Gender=Masc|Number=Plur	2	obl	_	wf="домех"|SpaceAfter=No
14	,	,	PUNCT	-COMMA-	_	24	punct	_	_
15	а	а	CCONJ	СС	_	24	cc	_	wf="а"
16	иныи	иный	DET	DT	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	17	det	_	wf="иныи"
17	нихъто	нихто	PRON	NEG	Case=Nom|Gender=Masc|Number=Sing|PronType=Neg	24	nsubj	_	wf="нихъто"
18	в	въ	ADP	IN	_	19	case	_	wf="в"
19	месте	место	NOUN	NNI	Case=Loc|Gender=Neut|Number=Sing	24	obl	_	wf="месте"
20	Полоцкомъ	полоцкий	ADJ	JJL	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	19	amod	_	wf="Полоцкомъ"
21	тых	той	DET	DT	Case=Gen|Gender=Fem|Number=Plur|PronType=Dem	22	det	_	wf="тых"
22	корчомъ	корчма	NOUN	NNI	Case=Gen|Gender=Fem|Number=Plur	25	obj	_	wf="корчомъ"
23	не	не	PART	NEG	Polarity=Neg	24	advmod	_	wf="не"
24	мають	мети	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	wf="мають"
25	держати	держати	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	24	xcomp	_	wf="держати"|SpaceAfter=No
26	,	,	PUNCT	-COMMA-	_	29	punct	_	_
27	нижли	нижели	SCONJ	IN	_	29	mark	_	wf="нижли"
28	тыи	той	DET	DT	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	29	nsubj	_	wf="тыи"
29	мают(ь)	мети	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	24	conj	_	wf="мають"
30	в	въ	ADP	IN	_	31	case	_	wf="в"
31	домех	домъ	NOUN	NNI	Case=Loc|Gender=Masc|Number=Plur	33	obl	_	wf="домех"
32	своихъ	свой	DET	PRP$	Case=Loc|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	31	det	_	wf="своихъ"
33	держати	держати	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	29	xcomp	_	wf="держати"|SpaceAfter=No
34	,	,	PUNCT	-COMMA-	_	37	punct	_	_
35	комꙋ	хто	PRON	WP	Case=Dat|Gender=Masc|Number=Sing|PronType=Rel	37	iobj	_	wf="комꙋ"
36	будем	быти	AUX	VBC	Analyt=Yes|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	37	aux	_	wf="будем"
37	призволили	призволити	VERB	VBC	Analyt=Yes|Aspect=Perf|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	28	acl:relcl	_	wf="призволили"
38	их	они	PRON	PRP	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	39	obj	_	wf="их"
39	мети	мети	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	37	xcomp	_	wf="мети"
40	и	и	CCONJ	СС	_	46	cc	_	wf="и"
41	листы	листъ	NOUN	NNI	Case=Acc|Gender=Masc|Number=Plur	46	obj	_	wf="листы"
42	наши	нашъ	DET	PRP$	Case=Acc|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	41	det	_	wf="наши"
43	на	на	ADP	IN	_	44	case	_	wf="на"
44	то	то	PRON	DT	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	46	obl	_	wf="то"
45	имъ	они	PRON	PRP	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	46	iobj	_	wf="имъ"
46	подавали	подавати	VERB	VBC	Aspect=Imp|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	37	conj	_	wf="подавали"|SpaceAfter=No
47	.	.	PUNCT	-PERIOD-	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 68	bgColor:blue
# visual-style 68	fgColor:white
# visual-style 69	bgColor:blue
# visual-style 69	fgColor:white
# visual-style 69 68 nmod:pronmod	color:blue
1	Што	што	SCONJ	WP	_	16	mark	_	wf="Што"
2	кгды	ґды	SCONJ	IN	_	16	mark	_	wf="гды"
3	по(с)лѣ	послѣ	ADP	IN	_	5	case	_	wf="послѣ"
4	того	тый	DET	DT	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	wf="того"
5	часу	часъ	NOUN	NNI	Case=Gen|Gender=Masc|Number=Sing	16	obl	_	wf="часу"|SpaceAfter=No
6	,	,	PUNCT	-COMMA-	_	16	punct	_	wf=","
7	кгди	ґды	SCONJ	IN	_	16	mark	_	wf="гди"
8	ѧ	я	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	16	nsubj	_	wf="я"
9	з	зъ	ADP	IN	_	10	case	_	wf="з"
10	Иванихою	Иваниха	PROPN	NPA	Case=Ins|Gender=Fem|NameType=Prs|Number=Sing	16	obl	_	wf="Иванихою"
11	до	до	ADP	IN	_	10	case	_	wf="до"
12	Диниса	Динисъ	PROPN	NPA	Case=Gen|Gender=Masc|NameType=Geo|Number=Sing	10	nmod	_	wf="Диниса"
13	в	въ	ADP	IN	_	15	case	_	wf="в"
14	Шию	Шия	PROPN	NPI	Case=Acc|Gender=Fem|NameType=Geo|Number=Sing	15	nmod	_	wf="Шию"
15	пла(т)я	платє	NOUN	NNI	Case=Gen|Gender=Neut|Number=Sing	16	obl	_	wf="платя"
16	пошъла	пойти	VERB	VBC	Gender=Fem|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="пошъла"
17	{68}	_	X	CD	_	18	dep	_	wf="{68}"
18	купова(т)	куповати	VERB	VB	VerbForm=Inf|Voice=Act	16	xcomp	_	wf="куповат"|SpaceAfter=No
19	,	,	PUNCT	-COMMA-	_	36	punct	_	wf=","
20	а	а	CCONJ	СС	_	36	cc	_	wf="а"
21	до	до	ADP	IN	_	22	case	_	wf="до"
22	Коновалъки	Коновалка	PROPN	NPA	Case=Gen|Gender=Fem|NameType=Prs|Number=Sing	36	obl	_	wf="Коновалъки"
23	в	въ	ADP	IN	_	24	case	_	wf="в"
24	домъ	домъ	NOUN	NNI	Case=Acc|Gender=Masc|Number=Sing	36	obl	_	wf="домъ"
25	для	для	ADP	IN	_	26	case	_	wf="для"
26	ѡпыту	опытъ	NOUN	NNI	Case=Gen|Gender=Masc|Number=Sing	36	obl	_	wf="ѡпыту"
27	того	то	PRON	DT	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	26	det	_	wf="того"|SpaceAfter=No
28	,	,	PUNCT	-COMMA-	_	34	punct	_	wf=","
29	понева(ж)	поневажъ	ADV	IN	Degree=Pos	34	advmod	_	wf="поневаж"
30	ѡ	о	ADP	IN	_	32	case	_	wf="о"
31	(т)омъ	тый	DET	DT	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	32	det	_	wf="томъ"
32	пла(т)ю	платє	NOUN	NNI	Case=Loc|Gender=Neut|Number=Sing	34	obl	_	wf="платю"
33	ѡна	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	34	nsubj	_	wf="она"
34	знаєтъ	знати	VERB	VBC	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	36	advcl	_	wf="знаєтъ"|SpaceAfter=No
35	,	,	PUNCT	-COMMA-	_	34	punct	_	wf=","
36	вступили	вступити	VERB	VBC	Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	16	conj	_	wf="вступили"
37	и	и	CCONJ	СС	_	48	cc	_	wf="и"|SpaceAfter=No
38	,	,	PUNCT	-COMMA-	_	39	punct	_	wf=","
39	сидячи	сидѣти	VERB	VBG	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	36	advcl	_	wf="сидячи"
40	в	въ	ADP	IN	_	41	case	_	wf="в"
41	хатѣ	хата	NOUN	NNI	Case=Loc|Gender=Fem|Number=Sing	39	obl	_	wf="хатѣ"|SpaceAfter=No
42	,	,	PUNCT	-COMMA-	_	48	punct	_	wf=","
43	а	а	CCONJ	СС	_	48	cc	_	wf="а"
44	потомъ	потомъ	ADV	RB	Degree=Pos|PronType=Dem	48	advmod	_	pos="ADVPRO"|wf="потомъ"
45	пе(р)сте(н)	перстенъ	NOUN	NNI	Case=Nom|Gender=Masc|Number=Sing	48	nsubj	_	wf="перстен"
46	по(д)	подъ	ADP	IN	_	47	case	_	wf="под"
47	лавою	лава	NOUN	NNI	Case=Ins|Gender=Fem|Number=Sing	48	obl	_	wf="лавою"
48	ѡбачилисмо	обачити	VERB	VBC	Number=Plur|Person=1|Tense=Past|VerbForm=PartRes|Voice=Act	36	conj	_	wf="ѡбачилисмо"|SpaceAfter=No
49	,	,	PUNCT	-COMMA-	_	53	punct	_	wf=","
50	которого	который	DET	WDT	Case=Gen|Gender=Masc|Number=Sing|PronType=Rel	53	obj	_	wf="которого"
51	кгды	ґды	SCONJ	IN	_	53	mark	_	wf="гды"
52	Коновалъка	Коновалка	PROPN	NPA	Case=Nom|Gender=Fem|NameType=Prs|Number=Sing	53	nsubj	_	wf="Коновалъка"
53	по(д)няла	подняти	VERB	VBC	Gender=Fem|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	48	advcl	_	wf="подняла"|SpaceAfter=No
54	,	,	PUNCT	-COMMA-	_	53	punct	_	wf=","
55	рекъла	рещи	VERB	VBC	Gender=Fem|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	36	conj	_	wf="рекъла"
56	ижь	иже	SCONJ	IN	_	58	mark	_	wf="ижь"|SpaceAfter=No
57	,	,	PUNCT	-COMMA-	_	58	punct	_	wf=","
58	мовитъ	мовити	VERB	VBC	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	55	advcl	_	wf="мовитъ"|SpaceAfter=No
59	,	,	PUNCT	-COMMA-	_	64	punct	_	wf=","
60	«	«	PUNCT	-QUOT-	_	64	punct	_	wf="«"|SpaceAfter=No
61	то	то	PRON	DT	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	64	nsubj	_	wf="то"
62	не	не	PART	NEG	Polarity=Neg	64	advmod	_	wf="не"
63	мо(и)	мой	DET	PRP$	Case=Nom|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	64	det	_	wf="мои"
64	пе(р)сте(н)	перстенъ	NOUN	NNA	Case=Nom|Gender=Masc|Number=Sing	55	parataxis	_	wf="перстен"|SpaceAfter=No
65	,	,	PUNCT	-COMMA-	_	71	punct	_	wf=","
66	//	//	PUNCT	-COMMA-	_	71	punct	_	wf="//"
67	не	не	PART	NEG	Polarity=Neg	68	advmod	_	wf="не"
68	вѣда(т)	вѣдати	VERB	VBC	Mood=Ind|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	69	nmod:pronmod	_	wf="вѣдат"
69	хто	хто	PRON	WP	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	71	nsubj	_	wf="хто"
70	єго	онъ	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	71	obj	_	wf="его"
71	вкинулъ	вкинути	VERB	VBC	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	64	conj	_	wf="вкинулъ"|SpaceAfter=No
72	<,>	<,>	PUNCT	-QUOT-	_	64	punct	_	wf="<,>"|SpaceAfter=No
73	»	»	PUNCT	-QUOT-	_	64	punct	_	wf="»"|SpaceAfter=No
74	.	.	PUNCT	-PERIOD-	_	16	punct	_	wf="."

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 nmod:pronmod	color:blue
1	Котораѧ	который	DET	DT	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	2	det	_	wf="Котораѧ"
2	Проциха	Проциха	PROPN	NPA	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing	3	nsubj	_	wf="Проциха"
3	при(з)нала	признати	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="признала"|SpaceAfter=No
4	<.>	<.>	PUNCT	-PERIOD-	_	12	punct	_	wf="<.>"|SpaceAfter=No
5	,	,	PUNCT	-COMMA-	_	12	punct	_	wf=","
6	ижъ	иже	SCONJ	IN	_	12	mark	_	wf="ижъ"
7	тутъ	тутъ	ADV	ADVPRO	Degree=Pos|PronType=Dem	10	advmod	_	pos="ADVPRO"|wf="тутъ"
8	тіє	тый	DET	DT	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	9	det	_	wf="тіє"
9	козаки	казакъ	NOUN	NNI	Case=Nom|Gender=Masc|Number=Plur	12	nsubj	_	wf="козаки"
10	бывъши	быти	VERB	VBC	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	12	advcl	_	wf="бывъши"
11	и	и	CCONJ	CC	_	12	cc	_	wf="и"
12	именовали	именовати	VERB	VBC	Aspect=Imp|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	3	ccomp	_	wf="именовали"|SpaceAfter=No
13	,	,	PUNCT	-COMMA-	_	26	punct	_	wf=","
14	же	же	SCONJ	IN	_	26	mark	_	wf="же"
15	«	«	PUNCT	-QUOT-	_	26	punct	_	wf="«"|SpaceAfter=No
16	Лаврѣнъ	Лаврѣнъ	PROPN	NPA	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	26	nsubj	_	wf="Лаврѣнъ"|SpaceAfter=No
17	,	,	PUNCT	-COMMA-	_	18	punct	_	wf=","
18	товаришъ	товаришъ	NOUN	NNI	Case=Nom|Gender=Masc|Number=Sing	16	appos	_	wf="товаришъ"
19	нашъ	нашъ	DET	PRP$	Case=Nom|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	18	det	_	wf="нашъ"|SpaceAfter=No
20	,	,	PUNCT	-COMMA-	_	18	punct	_	wf=","
21	нє	не	PART	NEG	Polarity=Neg	22	advmod	_	wf="нє"
22	вєда(т)	вѣдати	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	23	nmod:pronmod	_	wf="вєдат"
23	где	ґде	ADV	ADVPRO	Degree=Pos|PronType=Rel	26	advmod	_	pos="ADVPRO"|wf="где"
24	сакви	сакви	NOUN	NNI	Case=Acc|Gender=Fem|Number=Plur	26	obj	_	wf="сакви"
25	свои	свой	DET	PRP$	Case=Acc|Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	24	det	_	wf="свои"
26	страти(л)	стратити	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	12	ccomp	_	wf="стратил"|SpaceAfter=No
27	,	,	PUNCT	-COMMA-	_	33	punct	_	wf=","
28	а	а	CCONJ	CC	_	33	cc	_	wf="а"
29	тутъ	тутъ	ADV	ADVPRO	Degree=Pos|PronType=Dem	33	advmod	_	pos="ADVPRO"|wf="тутъ"
30	нєви(н)нє	невинне	ADV	RB	Degree=Pos	33	advmod	_	wf="нєвиннє"
31	Хому	Хома	PROPN	NPA	Case=Dat|Gender=Masc|NameType=Giv|Number=Sing	33	iobj	_	wf="Хому"
32	ѡного	оный	DET	DT	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	33	obj	_	wf="ѡного"
33	ту(р)буєть	турбовати	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	26	conj	_	wf="турбуєть"|SpaceAfter=No
34	<.>	<.>	PUNCT	-PERIOD-	_	26	punct	_	wf="<.>"|SpaceAfter=No
35	»	»	PUNCT	-QUOT-	_	26	punct	_	wf="»"

~~~


