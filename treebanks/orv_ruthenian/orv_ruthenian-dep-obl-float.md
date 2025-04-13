---
layout: base
title:  'Statistics of obl:float in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `obl:float`

This relation is a language-specific subtype of <tt><a href="orv_ruthenian-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="orv_ruthenian-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="orv_ruthenian-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="orv_ruthenian-dep-obl-tmod.html">obl:tmod</a></tt>.

13 nodes (0%) are attached to their parents as `obl:float`.

12 instances of `obl:float` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.38461538461539.

The following 2 pairs of parts of speech are connected with `obl:float`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt> (12; 92% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt> (1; 8% instances).


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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 obl:float	color:blue
1	Ку	ку	ADP	_	_	2	case	_	wf="Ку"|before="<p>"
2	тому	то	PRON	_	Case=Dat|Gender=Neut|Number=Sing|PronType=Dem	11	obl	_	wf="тому"
3	жъ	жъ	PART	_	_	2	advmod	_	wf="жъ"
4	Ше(в)цовъ	шевцовъ	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	5	amod	_	wf="Шевцовъ"
5	челя(д)никъ	челядникъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	wf="челядникъ"
6	са(м)	самъ	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Emp	8	obl:float	_	wf="сам"
7	ѡ(т)	отъ	ADP	_	_	8	case	_	wf="от"
8	себє	себе	PRON	_	Case=Gen|PronType=Prs|Reflex=Yes	11	obl	_	wf="себе"
9	тіє	тий	DET	_	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	10	det	_	wf="тіе"
10	слова	слово	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	11	obj	_	wf="слова"
11	вирази(л)	виразити	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="виразил"|SpaceAfter=No
12	<.>	.	PUNCT	_	_	20	punct	_	wf="."|SpaceAfter=No
13	,	,	PUNCT	_	_	20	punct	_	wf=","
14	ижь	ижъ	SCONJ	_	_	20	mark	_	wf="ижь"
15	є(д)ного	едный	NUM	_	Case=Gen|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	16	nummod	_	wf="едного"
16	часу	часъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	20	obl:tmod	_	wf="часу"
17	коне(й)	конь	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	20	obj	_	wf="коней"
18	кго(с)подара	господарь	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	wf="кгосподара"
19	своєго	свой	DET	_	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	18	det	_	wf="своего"
20	шукале(м)	шукати	VERB	_	Aspect=Imp|Gender=Masc|Number=Sing|Person=1|Tense=Past|VerbForm=PartRes|Voice=Act	10	acl	_	wf="шукалем"|SpaceAfter=No
21	.	.	PUNCT	_	_	11	punct	_	wf="."

~~~


