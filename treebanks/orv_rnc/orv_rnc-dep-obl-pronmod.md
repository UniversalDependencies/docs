---
layout: base
title:  'Statistics of obl:pronmod in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `obl:pronmod`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="orv_rnc-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="orv_rnc-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="orv_rnc-dep-obl-float.html">obl:float</a></tt>, <tt><a href="orv_rnc-dep-obl-tmod.html">obl:tmod</a></tt>.

18 nodes (0%) are attached to their parents as `obl:pronmod`.

15 instances of `obl:pronmod` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.55555555555556.

The following 8 pairs of parts of speech are connected with `obl:pronmod`: <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (3; 17% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (3; 17% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (3; 17% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (3; 17% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (2; 11% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (2; 11% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-SCONJ.html">SCONJ</a></tt> (1; 6% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 obl:pronmod	color:blue
1	И	и	CCONJ	_	_	12	cc	_	_
2	Иванъ	Иванъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	12	nsubj	_	_
3	Шавкуновъ	Шавкуновъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	2	flat:name	_	_
4	увѣдавъ	увѣдати	VERB	_	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	12	advcl	_	_
5	то	тотъ	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	8	det	_	_
6	ево	онъ	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	det	_	_
7	Пашкино	пашкинъ	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	8	amod	_	_
8	челобитье	челобитие	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	4	obj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	4	punct	_	_
10	съ	съ	ADP	_	_	11	case	_	_
11	Кунгура	Кунгуръ	PROPN	_	Case=Gen|Gender=Masc|NameType=Geo|Number=Sing	12	obl	_	_
12	бѣжалъ	бѣжати	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	_
13	невѣдомо	невѣдомо	ADJ	_	Degree=Pos	14	obl:pronmod	_	upos="PRAEDIC"
14	куды	куды	ADV	_	Degree=Pos|PronType=Rel	12	advmod	_	upos="ADVPRO"|SpaceAfter=No
15	.	.	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 21 obl:pronmod	color:blue
1	и	и	CCONJ	_	_	2	cc	_	norm="и"
2	гѡвѡритъ	говорити	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	norm="гѡвѡритъ"|Decl=X|End=ъти
3	такъ	такъ	ADV	ADVPRO	Degree=Pos|PronType=Dem	2	advmod	_	upos="ADVPRO"|norm="такъ"
4	чтобы	чтобы	SCONJ	_	Mood=Cnd	6	mark	_	norm="чтобы"
5	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	norm="ты"|Decl=X|End=ы
6	изволил	изволити	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	2	ccomp	_	norm="изволил"|Decl=X|End=л
7	и	и	CCONJ	_	_	8	cc	_	norm="и"
8	вотчину	вотчина	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	11	obj	_	norm="вотчину"|Decl=1a|End=у
9	у	у	ADP	_	_	10	case	_	norm="у"|check=@
10	неи	она	PRON	_	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	obl	_	norm="неи"|Decl=X|End=ие|check=@
11	взять	взяти	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	6	xcomp	_	norm="взять"|Decl=X|End=ьт
12	и	и	CCONJ	_	_	13	cc	_	norm="и"
13	въсѣ	весь	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	8	conj	_	norm="въсѣ"|Decl=X|End=ѣ
14	чтѡ	что	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	16	nsubj	_	norm="чтѡ"|Decl=X|End=ѡ
15	ни	ни	PART	_	Polarity=Neg	17	advmod	_	norm="ни"
16	есь	быти	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	acl:relcl	_	norm="есь"|Decl=X|End=ьс
17	лише	лише	SCONJ	_	_	23	mark	_	norm="лише"
18	бы	бы	AUX	_	Analyt=Yes|Mood=Cnd	23	aux	_	norm="бы"|Decl=X|End=0
19	куда	куда	ADV	ADVPRO	Degree=Pos|PronType=Rel	23	advmod	_	upos="ADVPRO"|norm="куда"
20	ни	ни	PART	_	Polarity=Neg	19	obl:pronmod	_	norm="ни"
21	есь	быти	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	19	obl:pronmod	_	norm="есь"|Decl=X|End=ьс
22	ее	она	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	23	obj	_	norm="ее"|Decl=X|End=ее
23	устрѡить	устроити	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	6	advcl	_	norm="устрѡить"|Decl=X|End=ьти
24	постъричь	постричи	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	23	parataxis	_	norm="постъричь"|Decl=X|End=ьч
25	или	или	CCONJ	_	_	27	cc	_	norm="или"
26	куда	куда	ADV	ADVPRO	Degree=Pos|PronType=Rel	27	csubj	_	upos="ADVPRO"|norm="куда"
27	мочьнѡ	мочно	ADJ	PRED	Degree=Pos	24	conj	_	upos="PRAEDIC"|norm="мочьнѡ"|Decl=X|End=ѡ

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 obl:pronmod	color:blue
1	И	и	CCONJ	_	_	11	cc	_	wf="И"
2	сытник	сытникъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	wf="сытник"
3	Неупокой	Неупокой	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	2	appos	_	wf="Неупокой"
4	Сабуров	Сабуровъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	3	flat:name	_	wf="Сабуров"|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	wf=","
6	приведчи	привезти	VERB	_	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	11	advcl	_	wf="приведчи"
7	хлеб	хлѣбъ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	6	obj	_	wf="хлеб"
8	в	въ	ADP	_	_	9	case	_	wf="в"
9	Переславль	Переславль	PROPN	_	Case=Acc|Gender=Masc|NameType=Geo|Number=Sing	6	obl	_	wf="Переславль"|SpaceAfter=No
10	,	,	PUNCT	_	_	6	punct	_	wf=","
11	всыпол	всыпати	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="всыпол"
12	в	въ	ADP	_	_	13	case	_	wf="в"
13	житницы	житница	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	11	obl	_	wf="житницы"
14	тебе	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	15	iobj	_	wf="тебе"
15	неведомо	невѣдомо	ADJ	_	Degree=Pos	16	obl:pronmod	_	upos="PRAEDIC"|wf="неведомо"
16	сколко	сколько	NUM	_	Case=Acc|NumForm=Word|NumType=Card	17	nummod:gov	_	wf="сколко"
17	чети	четь	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	11	obj	_	wf="чети"|SpaceAfter=No
18	,	,	PUNCT	_	_	24	punct	_	wf=","
19	а	а	CCONJ	_	_	24	cc	_	wf="а"
20	тебе	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	24	iobj	_	wf="тебе"
21	тово	тотъ	DET	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	22	det	_	wf="тово"
22	хлеба	хлѣбъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	24	obj	_	wf="хлеба"
23	не	не	PART	_	Polarity=Neg	24	advmod	_	wf="не"
24	дал	дати	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	11	conj	_	wf="дал"|SpaceAfter=No
25	,	,	PUNCT	_	_	32	punct	_	wf=","
26	а	а	CCONJ	_	_	32	cc	_	wf="а"
27	отоманом	атоманъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	30	iobj	_	wf="отоманом"
28	и	и	CCONJ	_	_	29	cc	_	wf="и"
29	козаком	казакъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	27	conj	_	wf="козаком"
30	давать	давати	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	32	xcomp	_	wf="давать"
31	не	не	PART	_	Polarity=Neg	32	advmod	_	wf="не"
32	смеешь	смѣти	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	11	conj	_	wf="смеешь"|SpaceAfter=No
33	.	.	PUNCT	_	_	11	punct	_	wf="."

~~~


