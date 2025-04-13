---
layout: base
title:  'Statistics of nsubj:pass in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="orv_ruthenian-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="orv_ruthenian-dep-nsubj-outer.html">nsubj:outer</a></tt>.

187 nodes (0%) are attached to their parents as `nsubj:pass`.

159 instances of `nsubj:pass` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.0855614973262.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (106; 57% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (48; 26% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt> (25; 13% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nsubj:pass	color:blue
1	Какъ	какъ	ADV	WRB	Degree=Pos	4	advmod	_	wf="Какъ"
2	ис	изъ	ADP	IN	_	3	case	_	wf="ис"
3	Риги	Рига	PROPN	NPI	Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	4	obl	_	wf="Риги"
4	шли	ити	VERB	VBC	Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="шли"
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
2	записано	записати	VERB	_	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	wf="зап[и]сано"
3	на	на	ADP	_	_	4	case	_	wf="на"
4	привили	привилей	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	2	obl	_	wf="приви<i>л</i>и"|SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	wf="."

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 10 nsubj:pass	color:blue
1	Допущаем	допущати	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	wf="Допущаем"
2	теж	тежъ	ADV	RB	Degree=Pos	1	advmod	_	wf="теж"
3	мети	мети	VERB	VB	VerbForm=Inf|Voice=Act	1	xcomp	_	wf="мети"
4	в	въ	ADP	IN	_	6	case	_	wf="в"
5	том	той	DET	DT	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	6	det	_	wf="том"
6	месте	место	NOUN	NNI	Case=Loc|Gender=Neut|Number=Sing	1	obl	_	wf="месте"
7	нашомъ	нашъ	DET	PRP$	Case=Loc|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs	6	det	_	wf="нашомъ"
8	важницꙋ	важница	NOUN	NNI	Case=Acc|Gender=Fem|Number=Sing	1	obj	_	wf="важницꙋ"|SpaceAfter=No
9	,	,	PUNCT	-COMMA-	_	10	punct	_	_
10	которая	который	DET	WDT	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	17	nsubj:pass	_	wf="которая"
11	ж	жъ	PART	RP	_	10	advmod	_	wf="ж"
12	будеть	быти	AUX	VBC	Analyt=Yes|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	17	aux:pass	_	wf="будеть"
13	ко	къ	ADP	IN	_	14	case	_	wf="ко"
14	вжитку	ужитокъ	NOUN	NNI	Case=Dat|Gender=Masc|Number=Sing	17	obl	_	wf="вжитку"
15	нашого	нашъ	DET	PRP$	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	16	det	_	wf="нашого"
16	скарбу	скарбъ	NOUN	NNI	Case=Gen|Gender=Masc|Number=Sing	14	nmod	_	wf="скарбу"
17	привернена	привернути	VERB	VBNH	Analyt=Yes|Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	8	acl:relcl	_	wf="привернена"|SpaceAfter=No
18	.	.	PUNCT	-PERIOD-	_	1	punct	_	_

~~~


