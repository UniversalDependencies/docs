---
layout: base
title:  'Statistics of nummod in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="orv_rnc-dep-nummod-gov.html">nummod:gov</a></tt>.

338 nodes (0%) are attached to their parents as `nummod`.

317 instances of `nummod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1094674556213.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (320; 95% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (8; 2% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-PART.html">PART</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 0% instances).


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
15	.	.	PUNCT	_	_	1	punct	_	wf="."|_

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
18	.	.	PUNCT	_	_	5	punct	_	wf="."|_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	И	и	CCONJ	_	_	5	cc	_	wf="И"|_
2	всего	всего	ADV	_	Degree=Pos|PronType=Tot	5	advmod	_	upos="ADVPRO"|wf="всего"|_
3	в	въ	ADP	_	_	5	case	_	wf="в"|_
4	тех	тотъ	DET	_	Case=Loc|Gender=Masc|Number=Plur|PronType=Dem	5	det	_	wf="тех"|_
5	судах	судъ	NOUN	_	Case=Loc|Gender=Masc|Number=Plur	0	root	_	wf="судах"|_
6	весом	вѣсъ	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	7	nummod	_	wf="весом"|_
7	меди	мѣдь	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	wf="меди"|_
8	пуд	пудъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	10	nummod:gov	_	wf="пуд"|_
9	37	37	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	10	nummod:gov	_	wf="37"|_
10	гривенок	гривенка	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	5	nsubj	_	wf="гривенок"|_
11	без	безъ	ADP	_	_	12	case	_	wf="без"|_
12	чети	четь	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	wf="чети"|SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	_	wf="."|_

~~~


