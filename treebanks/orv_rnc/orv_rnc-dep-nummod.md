---
layout: base
title:  'Statistics of nummod in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="orv_rnc-dep-nummod-gov.html">nummod:gov</a></tt>.

219 nodes (0%) are attached to their parents as `nummod`.

200 instances of `nummod` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14611872146119.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (206; 94% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (6; 3% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nummod	color:blue
1	Котел	котелъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	wf="Котел"|_
2	бол(ь)шои	большой	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	1	amod	_	wf="большои"|_
3	с	съ	ADP	_	_	4	case	_	wf="с"|_
4	ушми	ухо	NOUN	_	Case=Ins|Gender=Neut|Number=Plur	1	nmod	_	wf="ушми"|SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	wf=","|_
6	уши	ухо	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	8	nsubj	_	wf="уши"|_
7	оба	оба	NUM	_	Case=Nom|Gender=Neut|NumForm=Word|NumType=Sets	6	nummod	_	wf="оба"|_
8	медные	мѣдный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	1	conj	_	wf="медные"|SpaceAfter=No
9	,	,	PUNCT	_	_	14	punct	_	wf=","|_
10	весу	вѣсъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	14	nsubj	_	wf="весу"|_
11	в	въ	ADP	_	_	12	case	_	wf="в"|_
12	нем	онъ	PRON	_	Case=Loc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	obl	_	wf="нем"|_
13	37	37	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	14	nummod:gov	_	wf="37"|_
14	гривенок	гривенка	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	1	conj	_	wf="гривенок"|SpaceAfter=No
15	.	.	PUNCT	_	_	1	punct	_	wf="."|SpaceAfter=No

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 nummod	color:blue
1	И	и	CCONJ	_	_	5	cc	_	wf="И"|_
2	в	въ	ADP	_	_	4	case	_	wf="в"|_
3	тои	тотъ	DET	_	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	wf="тои"|_
4	меди	мѣдь	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	5	obl	_	wf="меди"|_
5	зделал	сдѣлати	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="зделал"|_
6	два	два	NUM	_	Case=Acc|Gender=Neut|NumForm=Word|NumType=Card	7	nummod:gov	_	wf="два"|_
7	ведра	ведро	NOUN	_	Case=Acc|Gender=Neut|Number=Count	5	obj	_	wf="ведра"|SpaceAfter=No
8	,	,	PUNCT	_	_	15	punct	_	wf=","|_
9	весу	вѣсъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	15	nsubj	_	wf="весу"|_
10	в	въ	ADP	_	_	11	case	_	wf="в"|_
11	них	они	PRON	_	Case=Loc|Gender=Fem|Number=Plur|Person=3|PronType=Prs	15	obl	_	wf="них"|_
12	в	въ	ADP	_	_	15	case	_	wf="в"|_
13	обеих	оба	NUM	_	Case=Loc|Gender=Fem|NumForm=Word|NumType=Sets	11	nummod	_	wf="обеих"|_
14	19	19	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	15	nummod:gov	_	wf="19"|_
15	фунтов	фунтъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	5	conj	_	wf="фунтов"|_
16	3	3	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	17	nummod:gov	_	wf="3"|_
17	чети	четь	NOUN	_	Case=Nom|Gender=Fem|Number=Count	15	nmod	_	wf="чети"|SpaceAfter=No
18	.	.	PUNCT	_	_	5	punct	_	wf="."|SpaceAfter=No

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 nummod	color:blue
1	А	а	CCONJ	_	_	9	cc	_	_
2	дворяномъ	дворянинъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	9	iobj	_	_
3	твоимъ	твой	DET	_	Case=Dat|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	2	det	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	како	како	ADV	_	Degree=Pos	6	advmod	_	_
6	пошло	поити	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	9	advcl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	погонъ	погонъ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	9	obj	_	_
9	имати	имати	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	0	root	_	SpaceAfter=No
10	:	:	PUNCT	_	_	15	punct	_	_
11	от	отъ	ADP	_	_	12	case	_	_
12	князя	князь	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	15	orphan	_	_
13	по	по	ADP	_	_	15	case	_	_
14	5	5	NUM	_	Case=Acc|NumForm=Digit	15	nummod:gov	_	_
15	кунъ	куна	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	8	parataxis	_	SpaceAfter=No
16	,	,	PUNCT	_	_	22	punct	_	_
17	а	а	CCONJ	_	_	22	cc	_	_
18	от	отъ	ADP	_	_	19	case	_	_
19	тиуна	тиунъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	22	orphan	_	_
20	по	по	ADP	_	_	22	case	_	_
21	двѣ	два	NUM	_	Case=Acc|Gender=Fem	22	nummod	_	_
22	дългѣи	долгий	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Count	15	conj	_	SpaceAfter=No
23	.	.	PUNCT	_	_	9	punct	_	_

~~~


