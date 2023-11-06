---
layout: base
title:  'Statistics of obl:agent in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="orv_ruthenian-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="orv_ruthenian-dep-obl-tmod.html">obl:tmod</a></tt>.

12 nodes (0%) are attached to their parents as `obl:agent`.

10 instances of `obl:agent` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.58333333333333.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (10; 83% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (2; 17% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:agent	color:blue
1	И	и	CCONJ	СС	_	2	cc	_	wf="И"
2	прыказали	приказати	VERB	VBC	Analyt=Yes|Aspect=Perf|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="прыказали"
3	есмо	быти	AUX	VBC	Analyt=Yes|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	aux	_	wf="есмо"
4	тыми	той	DET	DT	Case=Ins|Gender=Masc|Number=Plur|PronType=Dem	5	det	_	wf="тыми"
5	люд(ь)ми	чоловекъ	NOUN	NNA	Case=Ins|Gender=Masc|Number=Plur	6	obl:agent	_	wf="людьми"
6	ѡпекатисе	опекатися	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Mid	2	xcomp	_	wf="ѡпекатисе"
7	и	и	CCONJ	СС	_	11	cc	_	wf="и"
8	ѡт	отъ	ADP	IN	_	9	case	_	wf="ѡт"
9	крывдъ	кривда	NOUN	NNI	Case=Gen|Gender=Fem|Number=Plur	11	obl	_	wf="крывдъ"
10	их	они	PRON	PRP	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	11	obj	_	wf="их"
11	боронить	боронити	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	2	conj	_	wf="боронить"
12	боярыну	бояринъ	NOUN	NNA	Case=Dat|Gender=Masc|Number=Sing	11	iobj	_	wf="боярыну"
13	полоцъкомꙋ	полоцкий	ADJ	JJL	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	14	amod	_	wf="полоцъкомꙋ"
14	Глебꙋ	Глебъ	PROPN	NPA	Case=Dat|Gender=Masc|NameType=Giv|Number=Sing	12	appos	_	wf="Глебꙋ"
15	Ѡстафъевичу	Остафъевичъ	PROPN	NPA	Case=Dat|Gender=Masc|NameType=Pat|Number=Sing	14	flat:name	_	wf="Ѡстафъевичу"
16	и	и	CCONJ	СС	_	17	cc	_	wf="и"
17	дворанинꙋ	дворянинъ	NOUN	NNA	Case=Dat|Gender=Masc|Number=Sing	14	conj	_	wf="дворанинꙋ"
18	нашому	нашъ	DET	PRP$	Case=Dat|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	17	det	_	wf="нашому"|SpaceAfter=No
19	,	,	PUNCT	-COMMA-	_	20	punct	_	_
20	воитꙋ	войтъ	NOUN	NNA	Case=Dat|Gender=Masc|Number=Sing	11	conj	_	wf="воитꙋ"
21	места	место	NOUN	NNI	Case=Gen|Gender=Neut|Number=Sing	20	nmod	_	wf="места"
22	Полоцкого	полоцкий	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	21	amod	_	wf="Полоцкого"
23	Рад(и)вону	Родивонъ	PROPN	NPA	Case=Gen|Gender=Masc|NameType=Giv|Number=Sing	21	nmod	_	wf="Радивону"|SpaceAfter=No
24	,	,	PUNCT	-COMMA-	_	26	punct	_	_
25	и	и	CCONJ	СС	_	26	cc	_	wf="и"
26	бурмистром	бурмистръ	NOUN	NNA	Case=Dat|Gender=Masc|Number=Plur	23	conj	_	wf="бурмистром"|SpaceAfter=No
27	,	,	PUNCT	-COMMA-	_	29	punct	_	_
28	и	и	CCONJ	СС	_	29	cc	_	wf="и"
29	радцомъ	радецъ	NOUN	NNA	Case=Dat|Gender=Masc|Number=Plur	23	conj	_	wf="радцомъ"|SpaceAfter=No
30	,	,	PUNCT	-COMMA-	_	33	punct	_	_
31	и	и	CCONJ	СС	_	33	cc	_	wf="и"
32	всимъ	весь	DET	DT	Case=Ins|Gender=Masc|Number=Sing|PronType=Tot	33	det	_	wf="всимъ"
33	мещаном	мещанинъ	NOUN	NNA	Case=Ins|Gender=Masc|Number=Sing	23	conj	_	wf="мещаном"|SpaceAfter=No
34	.	.	PUNCT	-PERIOD-	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 30 obl:agent	color:blue
1	Послали	послати	VERB	VBC	Analyt=Yes|Aspect=Perf|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="Послали"
2	есми	быти	AUX	VBC	Analyt=Yes|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	_	wf="есми"
3	да	да	CCONJ	СС	_	5	cc	_	wf="да"
4	вашее	вашъ	DET	PRP$	Case=Gen|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	5	det	_	wf="вашее"
5	м(и)л(о)сти	милость	NOUN	NNI	Case=Gen|Gender=Fem|Number=Sing	1	obj	_	wf="милости"
6	ѡт	отъ	ADP	IN	_	7	case	_	wf="ѡт"
7	бояръ	бояринъ	NOUN	NNA	Case=Gen|Gender=Masc|Number=Plur	1	obl	_	wf="бояръ"
8	брата	братъ	NOUN	NNA	Case=Acc|Gender=Masc|Number=Sing	7	nmod	_	wf="брата"
9	своего	свой	DET	PRP$	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	8	det	_	wf="своего"
10	пана	панъ	NOUN	NNA	Case=Acc|Gender=Masc|Number=Sing	8	appos	_	wf="пана"
11	Сенька	Сенко	PROPN	NPA	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Giv|Number=Sing	10	appos	_	wf="Сенька"
12	Радьковича	Радьковичъ	PROPN	NPA	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Pat|Number=Sing	11	flat:name	_	wf="Радьковича"|SpaceAfter=No
13	,	,	PUNCT	-COMMA-	_	16	punct	_	_
14	а	а	CCONJ	СС	_	16	cc	_	wf="а"
15	ѡт	отъ	ADP	IN	_	16	case	_	wf="ѡт"
16	мещанъ	мещанинъ	NOUN	NNA	Case=Gen|Gender=Masc|Number=Plur	1	conj	_	wf="мещанъ"
17	братью	братья	NOUN	NNI	Case=Acc|Gender=Fem|Number=Sing	16	appos	_	wf="братью"
18	нашю	нашъ	DET	PRP$	Case=Acc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	17	det	_	wf="нашю"
19	Евлашька	Евлашко	PROPN	NPA	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Giv|Number=Sing	17	appos	_	wf="Евлашька"
20	Федоровичь	Федоровичъ	PROPN	NPA	Case=Nom|Gender=Masc|NameType=Pat|Number=Sing	19	flat:name	_	wf="Федоровичь"
21	Кожьчиць	Кожчицъ	PROPN	NPA	Case=Nom|Gender=Masc|NameType=Prs|Number=Sing	19	flat:name	_	wf="Кожьчиць"
22	и	и	CCONJ	СС	_	23	cc	_	wf="и"
23	Зенова	Зеновъ	PROPN	NPA	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Giv|Number=Sing	19	conj	_	wf="Зенова"
24	Бꙋцька	Буцко	PROPN	NPA	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Sur|Number=Sing	23	flat:name	_	wf="Бꙋцька"
25	с	съ	ADP	IN	_	27	case	_	wf="с"
26	нашими	нашъ	DET	PRP$	Case=Ins|Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	27	det	_	wf="нашими"
27	речьми	речъ	NOUN	NNI	Case=Ins|Gender=Fem|Number=Plur	17	nmod	_	wf="речьми"|SpaceAfter=No
28	,	,	PUNCT	-COMMA-	_	27	punct	_	_
29	прикозаными	приказати	VERB	VBNL	Aspect=Perf|Case=Ins|Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	27	acl	_	wf="прикозаными"
30	ими	они	PRON	PRP	Case=Ins|Gender=Masc|Number=Plur|Person=3|PronType=Prs	29	obl:agent	_	wf="ими"
31	ѡт	отъ	ADP	IN	_	32	case	_	wf="ѡт"
32	нас	мы	PRON	PRP	Case=Gen|Number=Plur|Person=1|PronType=Prs	29	obl	_	wf="нас"|SpaceAfter=No
33	.	.	PUNCT	-PERIOD-	_	1	punct	_	_

~~~


