---
layout: base
title:  'Statistics of nummod:gov in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-nummod.html">nummod</a></tt>.

189 nodes (1%) are attached to their parents as `nummod:gov`.

171 instances of `nummod:gov` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5026455026455.

The following 6 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (180; 95% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod:gov	color:blue
1	а	а	CCONJ	_	_	6	cc	_	_
2	в	въ	ADP	_	_	4	case	_	_
3	тои	тотъ	DET	_	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	грамотки	грамотка	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	6	obl	_	_
5	было	быти	AUX	_	Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes	6	aux	_	_
6	послано	послати	VERB	_	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
7	два	два	NUM	_	Case=Nom|Gender=Masc	8	nummod:gov	_	_
8	списка	списокъ	NOUN	_	Case=Nom|Gender=Masc|Number=Adnum	6	nsubj:pass	_	_
9	с	съ	ADP	_	_	10	case	_	_
10	челобитнои	челобитная	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
11	и	и	CCONJ	_	_	13	cc	_	_
12	з	съ	ADP	_	_	13	case	_	_
13	ѕаписи	запись	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	10	conj	_	_

~~~


~~~ conllu
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 33 34 nummod:gov	color:blue
1	А	а	CCONJ	_	_	2	cc	_	_
2	привито	привити	VERB	_	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	г.	государь	NOUN	_	Abbr=Yes	2	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	к	къ	ADP	_	_	8	case	_	_
7	тем	тотъ	DET	_	Case=Dat|Gender=Masc|Number=Plur|PronType=Dem	8	det	_	_
8	пенькам	пенекъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	2	obl	_	_
9	московским	московский	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	8	amod	_	_
10	150	150	NUM	_	Case=Nom|NumForm=Digit	11	nummod:gov	_	_
11	черенков	черенокъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	2	nsubj:pass	_	SpaceAfter=No
12	;	;	PUNCT	_	_	17	punct	_	_
13	да	да	CCONJ	_	_	17	cc	_	_
14	к	къ	ADP	_	_	16	case	_	_
15	старым	старый	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	16	amod	_	_
16	пенькам	пенекъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	17	obl	_	_
17	привито	привити	VERB	_	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	conj	_	_
18	в	въ	ADP	_	_	19	case	_	_
19	Павловском	Павловское	PROPN	_	Case=Loc|Gender=Neut|Number=Sing	17	obl	_	_
20	и	и	CCONJ	_	_	22	cc	_	_
21	на	на	ADP	_	_	22	case	_	_
22	Силине	Силино	PROPN	_	Case=Loc|Gender=Neut|Number=Sing	19	conj	_	_
23	100	100	NUM	_	Case=Nom|NumForm=Digit	25	compound	_	_
24	же	же	PART	_	_	23	advmod	_	_
25	50	50	NUM	_	Case=Nom|NumForm=Digit	26	nummod:gov	_	_
26	черенков	черенокъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	17	nsubj:pass	_	SpaceAfter=No
27	;	;	PUNCT	_	_	33	punct	_	_
28	и	и	CCONJ	_	_	33	cc	_	_
29	всево	всего	ADV	_	Degree=Pos	33	advmod	_	SpaceAfter=No
30	,	,	PUNCT	_	_	31	punct	_	_
31	г.	государь	NOUN	_	Abbr=Yes	29	parataxis	_	SpaceAfter=No
32	,	,	PUNCT	_	_	31	punct	_	_
33	привито	привити	VERB	_	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	conj	_	_
34	300	300	NUM	_	Case=Nom|NumForm=Digit	33	nummod:gov	_	_
35	черенков	черенокъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	33	nsubj:pass	_	SpaceAfter=No
36	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 37 36 nummod:gov	color:blue
1	Да	да	CCONJ	_	_	7	cc	_	_
2	ис	изъ	ADP	_	_	3	case	_	_
3	Переславля	Переславль	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	г.	государь	NOUN	_	Abbr=Yes	3	parataxis	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	прислано	прислати	VERB	_	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
8	вишен	вишня	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	7	nsubj:pass	_	_
9	и	и	CCONJ	_	_	10	cc	_	_
10	посажено	посадити	VERB	_	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	7	conj	_	_
11	288	288	NUM	_	Case=Nom|NumForm=Digit	12	nummod:gov	_	_
12	дерев	дерево	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	10	nsubj:pass	_	SpaceAfter=No
13	;	;	PUNCT	_	_	15	punct	_	_
14	а	а	CCONJ	_	_	15	cc	_	_
15	сажены	садити	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	7	conj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	г.	государь	NOUN	_	Abbr=Yes	15	parataxis	_	SpaceAfter=No
18	,	,	PUNCT	_	_	17	punct	_	_
19	те	тотъ	DET	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	20	det	_	_
20	вишны	вишня	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	15	nsubj:pass	_	_
21	не	не	PART	_	Polarity=Neg	22	advmod	_	_
22	многие	многий	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	20	amod	_	_
23	рознимаючи	разнимати	VERB	_	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	15	advcl	_	SpaceAfter=No
24	,	,	PUNCT	_	_	30	punct	_	_
25	а	а	CCONJ	_	_	30	cc	_	_
26	то	то	PART	_	_	30	expl	_	SpaceAfter=No
27	,	,	PUNCT	_	_	28	punct	_	_
28	г.	государь	NOUN	_	Abbr=Yes	26	parataxis	_	SpaceAfter=No
29	,	,	PUNCT	_	_	28	punct	_	_
30	сажены	садити	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	15	conj	_	_
31	кустами	кустъ	NOUN	_	Case=Ins|Gender=Masc|Number=Plur	30	iobj	_	_
32	для	для	ADP	_	_	33	case	_	_
33	того	то	PRON	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	30	obl	_	SpaceAfter=No
34	,	,	PUNCT	_	_	37	punct	_	_
35	что	что	SCONJ	_	_	37	mark	_	_
36	много	много	NUM	_	Case=Nom	37	nummod:gov	_	_
37	сухих	сухой	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	33	acl	_	SpaceAfter=No
38	,	,	PUNCT	_	_	41	punct	_	_
39	рознимать	разнимати	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	41	csubj	_	_
40	было	быти	AUX	_	Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	41	aux	_	_
41	нельзя	нельзя	VERB	_	Polarity=Neg	37	conj	_	SpaceAfter=No
42	.	.	PUNCT	_	_	7	punct	_	_

~~~


