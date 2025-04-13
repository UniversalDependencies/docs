---
layout: base
title:  'Statistics of obl:tmod in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="orv_ruthenian-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="orv_ruthenian-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="orv_ruthenian-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="orv_ruthenian-dep-obl-float.html">obl:float</a></tt>.

141 nodes (0%) are attached to their parents as `obl:tmod`.

77 instances of `obl:tmod` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.22695035460993.

The following 7 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (126; 89% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="orv_ruthenian-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 obl:tmod	color:blue
1	А	а	CCONJ	_	_	2	cc	_	wf="А"|before=<p>
2	писан	писати	VERB	_	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	wf="п(и)са<i>н</i>"
3	у	въ	ADP	_	_	4	case	_	wf="у"
4	Вилни	Вильня	PROPN	_	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	2	obl	_	wf="Ви<i>л</i>ни"|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	wf=","
6	ноября	ноябрь	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	wf="ноя<i>б</i>(ря)"
7	2	2	ADJ	ORD	NumForm=Digit|NumType=Ord	8	amod	_	wf="2"
8	ден	день	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	2	obl:tmod	_	wf="де<i>н</i>"|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	wf=","
10	индикт	индиктъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	8	nmod	_	wf="инди<i>к</i>(т)"
11	13	13	ADJ	ORD	NumForm=Digit|NumType=Ord	10	amod	_	wf="13"|SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	wf="."

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 28 obl:tmod	color:blue
1	І	и	CCONJ	_	_	2	cc	_	wf="И"
2	роз(ъ)гнѣвал(ъ)сѧ	розгнѣватися	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Mid	0	root	_	wf="розъгнѣвалъся"
3	попꙋдливостью	попудливость	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	2	obl	_	wf="попудливостью"
4	великою	великий	ADJ	_	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	wf="великою"
5	гд̃ь	господь	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	wf="гд̃ь"
6	на	на	ADP	_	_	7	case	_	wf="на"
7	іи̃лѧ	Израиль	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Geo|Number=Sing	2	obl	_	wf="ии̃ля"|SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	wf=","
9	и	и	CCONJ	_	_	10	cc	_	wf="и"
10	выдалъ	выдати	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	2	conj	_	wf="выдалъ"
11	ихъ	они	PRON	_	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	10	obj	_	wf="ихъ"
12	в	въ	ADP	_	_	13	case	_	wf="в"
13	роуки	рука	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	10	obl	_	wf="руки"
14	хусарсаⱚемꙋ	Хусарсаѳемъ	PROPN	_	Case=Dat|Gender=Masc|NameType=Giv|Number=Sing	10	iobj	_	wf="хусарсафему"
15	кролеви	кроль	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	14	appos	_	wf="кролеви"
16	сирскомꙋ	сирский	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	15	amod	_	wf="сирскому"|SpaceAfter=No
17	,	,	PUNCT	_	_	22	punct	_	wf=","
18	и	и	CCONJ	_	_	22	cc	_	wf="и"
19	были	быти	AUX	_	Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	22	cop	_	wf="были"
20	оу	у	ADP	_	_	22	case	_	wf="у"
21	великой	великий	ADJ	_	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	22	amod	_	wf="великой"
22	неволи	неволя	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	10	conj	_	wf="неволи"
23	за	за	ADP	_	_	25	case	_	wf="за"
24	тꙋю	тый	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	25	det	_	wf="тую"
25	згодꙋ	згода	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	22	obl	_	wf="згоду"
26	пре(з)	презъ	ADP	_	_	28	case	_	wf="през"
27	немало	немало	NUM	_	Case=Acc|NumForm=Word|NumType=Card	28	nummod:gov	_	wf="немало"
28	лѣтъ	лѣто	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	22	obl:tmod	_	wf="лѣтъ"|SpaceAfter=No
29	.	.	PUNCT	_	_	2	punct	_	wf="."

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 5 obl:tmod	color:blue
1	А	а	CCONJ	СС	_	11	cc	_	wf="А"
2	самъ	самъ	DET	DT	Case=Nom|Gender=Masc|Number=Sing|PronType=Emp	11	nsubj	_	wf="самъ"
3	есми	быти	AUX	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	wf="есми"
4	сими	сей	DET	DT	Case=Ins|Gender=Masc|Number=Plur|PronType=Dem	5	det	_	wf="сими"
5	часы	часъ	NOUN	NNI	Case=Ins|Gender=Masc|Number=Plur	11	obl:tmod	_	wf="часы"|SpaceAfter=No
6	,	,	PUNCT	-COMMA-	_	8	punct	_	_
7	ещо	еще	ADV	RB	Degree=Pos	8	advmod	_	wf="ещо"
8	дал	дати	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	11	parataxis	_	wf="дал"
9	Б(ог)ъ	богъ	NOUN	NNA	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	wf="Богъ"|SpaceAfter=No
10	,	,	PUNCT	-COMMA-	_	8	punct	_	_
11	живъ	живый	ADJ	JJH	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	0	root	_	wf="живъ"
12	до	до	ADP	IN	_	14	case	_	wf="до"
13	Б(о)жьи	божий	ADJ	JJH	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	14	amod	_	wf="Божьи"
14	воли	воля	NOUN	NNI	Case=Gen|Gender=Fem|Number=Sing	11	obl	_	wf="воли"|SpaceAfter=No
15	.	.	PUNCT	-PERIOD-	_	11	punct	_	_

~~~


