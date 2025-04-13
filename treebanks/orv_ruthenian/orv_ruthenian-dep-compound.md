---
layout: base
title:  'Statistics of compound in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `compound`

This relation is universal.

80 nodes (0%) are attached to their parents as `compound`.

79 instances of `compound` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 9 pairs of parts of speech are connected with `compound`: <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt> (32; 40% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (22; 28% instances), <tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_ruthenian-pos-SYM.html">SYM</a></tt> (9; 11% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt> (7; 9% instances), <tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt> (4; 5% instances), <tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	Писанъ	писати	VERB	VBNH	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	wf="Писанъ"
2	мая	май	NOUN	NNI	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	wf="мая"
3	двадцать	двадцать	NUM	CD	Case=Nom|NumForm=Word|NumType=Card	4	compound	_	wf="двадцать"
4	шостыи	шестый	ADJ	ORD	Case=Acc|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	5	amod	_	wf="шостыи"
5	день	день	NOUN	NNI	Case=Acc|Gender=Masc|Number=Sing	1	obl	_	wf="день"|SpaceAfter=No
6	,	,	PUNCT	-COMMA-	_	7	punct	_	_
7	инъдикта	индиктъ	NOUN	NNI	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	wf="инъдикта"
8	ѡсмого	осмый	ADJ	ORD	Case=Gen|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	7	amod	_	wf="ѡсмого"|SpaceAfter=No
9	.	.	PUNCT	-PERIOD-	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	[	[	PUNCT	_	_	3	punct	_	wf="["|before="<p>"|SpaceAfter=No
2	№	№	SYM	_	_	3	compound	_	wf="№"
3	2	2	NUM	_	Case=Nom|Gender=Masc|NumForm=Digit|NumType=Card	0	root	_	wf="2"|SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	wf="."|SpaceAfter=No
5	]	]	PUNCT	_	_	3	punct	_	wf="]"|after="</p>"

~~~


