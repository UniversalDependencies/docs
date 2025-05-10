---
layout: base
title:  'Statistics of obl:agent in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="orv_ruthenian-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="orv_ruthenian-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="orv_ruthenian-dep-obl-float.html">obl:float</a></tt>, <tt><a href="orv_ruthenian-dep-obl-tmod.html">obl:tmod</a></tt>.

16 nodes (0%) are attached to their parents as `obl:agent`.

14 instances of `obl:agent` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (12; 75% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (3; 19% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 4 obl:agent	color:blue
1	Чере(з)	черезъ	ADP	_	_	4	case	_	wf="Через"
2	ѡдного	одинъ	NUM	ANUM	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	4	nummod	_	wf="одного"
3	наменшого	наменший	ADJ	_	Animacy=Anim|Case=Acc|Degree=Sup|Gender=Masc|Number=Sing	4	amod	_	wf="наменшого"
4	клирика	клирикъ	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	13	obl:agent	_	wf="клирика"|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	wf=","
6	цр̃кви	церковь	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	wf="цр̃кви"
7	ѡстро(з)скоѝ	острожский	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	wf="острозской"|SpaceAfter=No
8	,	,	PUNCT	_	_	6	punct	_	wf=","
9	в	въ	ADP	_	_	12	case	_	wf="в"
10	то(м)	тый	DET	_	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	12	det	_	wf="том"
11	же	же	PART	_	_	10	fixed	_	wf="же"
12	рокꙋ	рокъ	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	13	obl:tmod	_	wf="року"
13	ѡ(т)писаный	отписати	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	wf="отписаный"|SpaceAfter=No
14	.	.	PUNCT	_	_	13	punct	_	wf="."

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 obl:agent	color:blue
1	Право	право	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	wf="Право"
2	такь	такъ	ADV	ADVPRO	Degree=Pos|PronType=Dem	3	advmod	_	wf="такь"
3	нашло	найти	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="нашло"|SpaceAfter=No
4	:	:	PUNCT	_	_	9	punct	_	wf=":"
5	ажь	ажъ	SCONJ	_	_	9	mark	_	wf="ажь"
6	пан	панъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	compound	_	wf="пан"
7	Ивашковы	ивашковъ	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Poss=Yes|Variant=Short	8	amod	_	wf="Ивашковы"
8	листы	листъ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	9	nsubj:pass	_	wf="листы"
9	оуморени	уморити	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	parataxis	_	wf="уморени"
10	на	на	ADP	_	_	11	case	_	wf="на"
11	вѣкы	вѣкъ	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	9	obl	_	wf="вѣкы"|SpaceAfter=No
12	,	,	PUNCT	_	_	15	punct	_	wf=","
13	ажь	ажъ	SCONJ	_	_	15	mark	_	wf="ажь"
14	не	не	PART	_	Polarity=Neg	15	advmod	_	wf="не"
15	имаєть	имати	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	conj	_	wf="имаєть"
16	ими	они	PRON	_	Case=Ins|Gender=Masc|Number=Plur|Person=3|PronType=Prs	17	obl:agent	_	wf="ими"
17	оуспоминатися	вспоминати	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Pass	15	xcomp	_	wf="успоминатися"|SpaceAfter=No
18	,	,	PUNCT	_	_	21	punct	_	wf=","
19	ани	ани	CCONJ	_	_	21	cc	_	wf="ани"
20	єго	онъ	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	21	det	_	wf="єго"
21	ближшии	ближший	ADJ	_	Case=Nom|Degree=Sup|Gender=Masc|Number=Sing	16	conj	_	wf="ближшии"|SpaceAfter=No
22	.	.	PUNCT	_	_	3	punct	_	wf="."

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 30 obl:agent	color:blue
1	Што	што	SCONJ	_	_	18	mark	_	wf="Што"|before="<p>"
2	мы	мы	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	18	nsubj	_	wf="мы"|SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	_	wf=","
4	вишь	вышъ	ADV	_	Degree=Cmp	5	advmod	_	wf="вишь"
5	меновани(и)	меновати	VERB	_	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	6	acl	_	wf="меновании"
6	вря(д)	урядъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	appos	_	wf="вряд"|SpaceAfter=No
7	,	,	PUNCT	_	_	12	punct	_	wf=","
8	с	зъ	ADP	_	_	9	case	_	wf="с"
9	пано(м)	панъ	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	12	obl	_	wf="паном"
10	атамано(м)	атаманъ	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	9	appos	_	wf="атаманом"
11	Я(ц)ко(м)ъ	Яцко	PROPN	_	Case=Ins|Gender=Masc|NameType=Giv|Number=Sing	10	appos	_	wf="Яцкомъ"
12	стосуючисѧ	стосоватися	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Mid	18	advcl	_	wf="стосуючися"|SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	wf=","
14	и	и	CCONJ	_	_	18	cc	_	wf="и"
15	ве(д)лугъ	ведлугъ	ADP	_	_	17	case	_	wf="ведлугъ"
16	тое(й)	тый	DET	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	17	det	_	wf="тоей"
17	справи	справа	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	18	obl	_	wf="справи"
18	наказуємъ	наказовати	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	wf="наказуемъ"
19	нинєшъни(м)	нынѣшний	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Typo=Yes	20	amod	_	wf="нинешъним"
20	декретомъ	декретъ	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	18	iobj	_	wf="декретомъ"
21	наши(м)	нашъ	DET	_	Case=Ins|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	20	det	_	wf="нашим"|SpaceAfter=No
22	,	,	PUNCT	_	_	48	punct	_	wf=","
23	аби	абы	SCONJ	_	Mood=Cnd	48	mark	_	wf="аби"
24	тая	тый	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	25	det	_	wf="тая"
25	ко(п)	копа	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	45	dislocated	_	wf="коп"
26	ше(ст)	шестъ	NUM	_	Case=Nom|NumForm=Word|NumType=Card	25	nummod:gov	_	wf="шест"
27	и	и	CCONJ	_	_	28	cc	_	wf="и"
28	кожухъ	кожухъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	25	conj	_	wf="кожухъ"
29	ѡ(т)	отъ	ADP	_	_	30	case	_	wf="от"
30	Зарѣцько(и)	Зарѣцкая	PROPN	_	Case=Gen|Gender=Fem|NameType=Sur|Number=Sing	31	obl:agent	_	wf="Зарѣцькои"
31	занєсены(и)	занести	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	28	acl	_	wf="занесеныи"|SpaceAfter=No
32	,	,	PUNCT	_	_	33	punct	_	wf=","
33	зупо(л)на	зуполный	ADV	_	Degree=Pos	48	advmod	_	wf="зуполна"
34	такъ	такъ	ADV	ADVPRO	Degree=Pos|PronType=Dem	37	cc	_	wf="такъ"
35	на	на	ADP	_	_	37	case	_	wf="на"
36	ѡного	оный	DET	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	37	det	_	wf="оного"
37	Данила	Данило	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Giv|Number=Sing	48	obl	_	wf="Данила"|SpaceAfter=No
38	,	,	PUNCT	_	_	42	punct	_	wf=","
39	яко	яко	SCONJ	_	_	42	cc	_	wf="яко"
40	и	и	PART	_	_	39	fixed	_	wf="и"
41	на	на	ADP	_	_	42	case	_	wf="на"
42	Ма(р)ка	Марко	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Giv|Number=Sing	37	conj	_	wf="Марка"|SpaceAfter=No
43	,	,	PUNCT	_	_	42	punct	_	wf=","
44	тая	тый	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	45	det	_	wf="тая"
45	шкода	шкода	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	48	nsubj	_	wf="шкода"
46	по	по	ADP	_	_	47	case	_	wf="по"
47	половици	половица	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	48	obl	_	wf="половици"
48	пала	пасти	VERB	_	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	18	ccomp	_	wf="пала"|SpaceAfter=No
49	<.>	.	PUNCT	_	_	18	punct	_	wf="."

~~~


