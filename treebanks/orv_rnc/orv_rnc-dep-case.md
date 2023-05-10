---
layout: base
title:  'Statistics of case in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `case`

This relation is universal.

5585 nodes (11%) are attached to their parents as `case`.

5561 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49579230080573.

The following 16 pairs of parts of speech are connected with `case`: <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-ADP.html">ADP</a></tt> (3707; 66% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-ADP.html">ADP</a></tt> (930; 17% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-ADP.html">ADP</a></tt> (646; 12% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-ADP.html">ADP</a></tt> (161; 3% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-ADP.html">ADP</a></tt> (70; 1% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-ADP.html">ADP</a></tt> (29; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADP.html">ADP</a></tt> (15; 0% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-SCONJ.html">SCONJ</a></tt> (11; 0% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-ADP.html">ADP</a></tt> (7; 0% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-PART.html">PART</a></tt>-<tt><a href="orv_rnc-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-X.html">X</a></tt>-<tt><a href="orv_rnc-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 case	color:blue
1	{л._167}	{л._167}	X	_	_	3	dep	_	wf="{л._167}"|before:<i>|after:</i>|NoIndex=Yes|SpaceAfter=No
2	178-г(о)	178-й	ADJ	ANUM	Case=Gen|Gender=Masc|Number=Sing|NumForm=Combi|NumType=Ord	3	amod	_	wf="178-го"|_
3	году	годъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	0	root	_	wf="году"|_
4	ноября	ноябрь	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	wf="ноября"|_
5	в	въ	ADP	_	_	7	case	_	wf="в"|_
6	11	11	ADJ	ANUM	Case=Acc|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	7	amod	_	wf="11"|_
7	де[нь]	день	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	4	nmod	_	wf="день"|SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	wf="."|SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	И	и	CCONJ	_	_	7	cc	_	wf="И"|_
2	тои	тотъ	DET	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	wf="тои"|_
3	меди	мѣдь	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	7	obl	_	wf="меди"|_
4	у	у	ADP	_	_	5	case	_	wf="у"|_
5	Сидара	Сидоръ	PROPN	_	Case=Gen|Gender=Masc|NameType=Giv|Number=Sing	7	obl	_	wf="Сидара"|_
6	не	не	PART	_	Polarity=Neg	7	advmod	_	wf="не"|_
7	дашло	доити	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="дашло"|_
8	полчетверты	полчетверта	NUM	_	Case=Nom|Gender=Fem|NumForm=Word|NumType=Frac	9	nummod:gov	_	wf="полчетверты"|_
9	гривенки	гривенка	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	7	nsubj	_	wf="гривенки"|SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	wf="."|_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 case	color:blue
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


