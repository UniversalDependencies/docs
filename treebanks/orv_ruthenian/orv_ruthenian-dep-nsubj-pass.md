---
layout: base
title:  'Statistics of nsubj:pass in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="orv_ruthenian-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="orv_ruthenian-dep-nsubj-outer.html">nsubj:outer</a></tt>.

270 nodes (0%) are attached to their parents as `nsubj:pass`.

236 instances of `nsubj:pass` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.59259259259259.

The following 12 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (135; 50% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (79; 29% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt> (29; 11% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt> (17; 6% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nsubj:pass	color:blue
1	Какъ	какъ	ADV	WRB	Degree=Pos	4	advmod	_	wf="Какъ"
2	ис	изъ	ADP	IN	_	3	case	_	wf="ис"
3	Риги	Рига	PROPN	NPI	Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	4	obl	_	wf="Риги"
4	шли	ити	VERB	VBC	Aspect=Imp|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="шли"
5	к	къ	ADP	IN	_	6	case	_	wf="к"
6	Полоцкꙋ	Полоцкъ	PROPN	NPI	Case=Dat|Gender=Masc|NameType=Geo|Number=Sing	4	obl	_	wf="Полоцкꙋ"|SpaceAfter=No
7	,	,	PUNCT	-COMMA-	_	4	punct	_	_
8	так	такъ	ADV	RB	Degree=Pos	11	advmod	_	wf="так"
9	тот	тотъ	DET	DT	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	10	det	_	wf="тот"
10	стрꙋгъ	стругъ	NOUN	NNI	Case=Nom|Gender=Masc|Number=Sing	11	nsubj:pass	_	wf="стрꙋгъ"
11	стопленъ	стопити	VERB	VBNH	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	4	advcl	_	wf="стопленъ"
12	ꙋ	въ	ADP	IN	_	13	case	_	wf="ꙋ"
13	Болванцех	Болванцы	PROPN	NPI	Case=Loc|Gender=Masc|NameType=Geo|Number=Plur	11	obl	_	wf="Болванцех"|SpaceAfter=No
14	.	.	PUNCT	-PERIOD-	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	То	то	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj:pass	_	wf="То"
2	записано	записати	VERB	_	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	wf="зап[и]сано"
3	на	на	ADP	_	_	4	case	_	wf="на"
4	привили	привилей	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	2	obl	_	wf="приви<i>л</i>и"|SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	wf="."

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 1 nsubj:pass	color:blue
1	Которая	который	DET	WDT	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	15	nsubj:pass	_	wf="Которая"
2	с	съ	ADP	IN	_	3	case	_	wf="с"
3	тє(р)мѣну	термѣнъ	NOUN	NNI	Case=Gen|Gender=Masc|Number=Sing	15	obl	_	wf="тєрмѣну"
4	року	рокъ	NOUN	NNI	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	wf="року"
5	ах҃нѕ	1656	ADJ	ORD	Case=Gen|Gender=Masc|Number=Sing|NumForm=Cyril|NumType=Ord	4	amod	_	pos="ANUM"|wf="ах҃нѕ"
6	[1656]	1656	ADJ	ORD	Case=Gen|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	5	dep	_	pos="ANUM"|wf="[1656]"
7	м҃(с)ца	мѣсяцъ	NOUN	NNI	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	wf="м҃сца"
8	сє(н)тєбра	сентябръ	NOUN	NNI	Case=Gen|Gender=Masc|Number=Sing	7	appos	_	wf="сєнтєбра"
9	д҃і	14	ADJ	ORD	Case=Gen|Gender=Masc|Number=Sing|NumForm=Cyril|NumType=Ord	11	amod	_	pos="ANUM"|wf="д҃і"
10	[14]	14	ADJ	ORD	Case=Gen|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	9	dep	_	pos="ANUM"|wf="[14]"
11	дня	день	NOUN	NNI	Case=Gen|Gender=Masc|Number=Sing	15	obl:tmod	_	wf="дня"
12	в	въ	ADP	IN	_	14	case	_	wf="в"
13	тіє	тый	DET	DT	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	14	det	_	wf="тіе"
14	слова	слово	NOUN	NNI	Case=Acc|Gender=Neut|Number=Plur	15	obl	_	wf="слова"
15	прєписана	преписати	VERB	VBC	Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	wf="прєписана"|SpaceAfter=No
16	<;>	<;>	PUNCT	_	_	15	punct	_	wf="<;>"|SpaceAfter=No
17	.	.	PUNCT	-PERIOD-	_	15	punct	_	wf="."

~~~


