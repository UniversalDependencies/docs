---
layout: base
title:  'Statistics of nsubj:outer in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="orv_ruthenian-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="orv_ruthenian-dep-nsubj-pass.html">nsubj:pass</a></tt>.

4 nodes (0%) are attached to their parents as `nsubj:outer`.

4 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.25.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (3; 75% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:outer	color:blue
1	А	а	CCONJ	СС	_	7	cc	_	wf="А"
2	и	и	CCONJ	СС	_	1	fixed	_	wf="и"
3	вашеи	вашъ	DET	PRP$	Case=Dat|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	4	det	_	wf="вашеи"
4	м(и)л(о)сти	милость	NOUN	NNI	Case=Dat|Gender=Fem|Number=Sing	7	iobj	_	wf="милости"
5	то	то	PRON	DT	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	nsubj:outer	_	wf="то"
6	есть	быти	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	wf="есть"
7	надобно	надобный	ADJ	JJH	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	wf="надобно"|SpaceAfter=No
8	,	,	PUNCT	-COMMA-	_	14	punct	_	_
9	ижбы	ижбы	SCONJ	IN	Mood=Cnd	14	mark	_	wf="ижбы"
10	был	быти	AUX	VBC	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	14	cop	_	wf="был"
11	с(вѧ)щ(ен)н(и)къ	священникъ	NOUN	NNA	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	wf="свѧщенникъ"
12	ѡт	отъ	ADP	IN	_	14	case	_	wf="ѡт"
13	нашее	нашъ	DET	PRP$	Case=Gen|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	14	det	_	wf="нашее"
14	вѣры	вера	NOUN	NNI	Case=Gen|Gender=Fem|Number=Sing	7	csubj	_	wf="вѣры"|SpaceAfter=No
15	,	,	PUNCT	-COMMA-	_	19	punct	_	_
16	а	а	CCONJ	СС	_	19	cc	_	wf="а"
17	в	въ	ADP	IN	_	19	case	_	wf="в"
18	нашее	нашъ	DET	PRP$	Case=Loc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	19	det	_	wf="нашее"
19	ц(е)ркви	церковь	NOUN	NNI	Case=Loc|Gender=Fem|Number=Sing	14	conj	_	wf="церкви"
20	рꙋское	русский	ADJ	JJL	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	19	amod	_	wf="рꙋское"|SpaceAfter=No
21	.	.	PUNCT	-PERIOD-	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 42	bgColor:blue
# visual-style 42	fgColor:white
# visual-style 42 40 nsubj:outer	color:blue
1	Ино	ино	CCONJ	СС	_	7	cc	_	wf="Ино"
2	намъ	мы	PRON	PRP	Case=Dat|Number=Plur|Person=1|PronType=Prs	7	iobj	_	wf="намъ"
3	и	и	CCONJ	СС	_	4	cc	_	wf="и"
4	паномъ	панъ	NOUN	NNA	Case=Dat|Gender=Masc|Number=Plur	2	conj	_	wf="паномъ"
5	радѣ	рада	NOUN	NNI	Case=Dat|Gender=Fem|Number=Sing	4	appos	_	wf="радѣ"
6	нашои	нашъ	DET	PRP$	Case=Dat|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	5	det	_	wf="нашои"
7	виделося	видетися	VERB	VBC	Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Mid	0	root	_	wf="виделося"|SpaceAfter=No
8	,	,	PUNCT	-COMMA-	_	35	punct	_	_
9	естьли	если	SCONJ	IN	_	15	mark	_	wf="естьли"
10	тые	той	DET	DT	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	11	det	_	wf="тые"
11	слуги	слуга	NOUN	NNA	Case=Nom|Gender=Masc|Number=Plur	15	nsubj	_	wf="слуги"
12	пꙋтъные	путный	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	11	amod	_	wf="пꙋтъные"
13	тыми	той	DET	DT	Case=Ins|Gender=Masc|Number=Plur|PronType=Dem	14	det	_	wf="тыми"
14	разы	разъ	NOUN	NNI	Case=Ins|Gender=Masc|Number=Plur	15	obl:tmod	_	wf="разы"
15	сѣдѧть	сидети	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	35	advcl	_	wf="сѣдѧть"
16	домы	домъ	NOUN	NNI	Case=Ins|Gender=Masc|Number=Plur	15	obj	_	wf="домы"
17	своими	свой	DET	PRP$	Case=Ins|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	16	det	_	wf="своими"
18	на	на	ADP	IN	_	21	case	_	wf="на"
19	тои	той	DET	DT	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	21	det	_	wf="тои"
20	ж	жъ	PART	RP	_	19	advmod	_	wf="ж"
21	земли	земля	NOUN	NNI	Case=Loc|Gender=Fem|Number=Sing	15	obl	_	wf="земли"
22	за	за	ADP	IN	_	23	case	_	wf="за"
23	Ловеикомъ	Ловейко	PROPN	NPA	Case=Loc|Gender=Masc|NameType=Giv|Number=Sing	15	obl	_	wf="Ловеикомъ"|SpaceAfter=No
24	,	,	PUNCT	-COMMA-	_	28	punct	_	_
25	которꙋю	который	DET	WDT	Case=Acc|Gender=Fem|Number=Sing|PronType=Rel	28	obj	_	wf="которꙋю"
26	жъ	жъ	PART	RP	_	28	advmod	_	wf="жъ"
27	емꙋ	онъ	PRON	PRP	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	28	iobj	_	wf="емꙋ"
28	продали	продати	VERB	VBC	Aspect=Perf|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	21	acl:relcl	_	wf="продали"|SpaceAfter=No
29	,	,	PUNCT	-COMMA-	_	15	punct	_	_
30	ино	ино	CCONJ	СС	_	35	cc	_	wf="ино"
31	и	и	PART	RP	_	32	advmod	_	wf="и"
32	н(ы)не	ныне	ADV	RB	Degree=Pos	35	advmod	_	wf="ныне"
33	Петрашкꙋ	Петрашко	PROPN	NPA	Case=Dat|Gender=Masc|NameType=Giv|Number=Sing	35	iobj	_	wf="Петрашкꙋ"
34	не	не	PART	NEG	Polarity=Neg	35	advmod	_	wf="не"
35	надобѣ	надобе	VERB	PRED	_	7	parataxis	_	wf="надобѣ"
36	в	въ	ADP	IN	_	37	case	_	wf="в"
37	нихъ	они	PRON	PRP	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	38	obl	_	wf="нихъ"
38	въступатисѧ	вступатися	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Mid	35	csubj	_	wf="въступатисѧ"|SpaceAfter=No
39	,	,	PUNCT	-COMMA-	_	42	punct	_	_
40	то	то	PRON	DT	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	42	nsubj:outer	_	wf="то"
41	неслушная	неслушный	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	42	amod	_	wf="неслушная"
42	речъ	речъ	NOUN	NNI	Case=Nom|Gender=Fem|Number=Sing	35	conj	_	wf="речъ"|SpaceAfter=No
43	,	,	PUNCT	-COMMA-	_	47	punct	_	_
44	абы	абы	SCONJ	IN	Mood=Cnd	47	mark	_	wf="абы"
45	слуги	слуга	NOUN	NNA	Case=Nom|Gender=Masc|Number=Plur	47	nsubj	_	wf="слуги"
46	пꙋтъные	путный	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	45	amod	_	wf="пꙋтъные"
47	мяли	мети	VERB	VBC	Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	42	csubj	_	wf="мяли"
48	кому	хто	PRON	WP	Case=Dat|Gender=Masc|Number=Sing|PronType=Rel	51	iobj	_	wf="кому"
49	в	въ	ADP	IN	_	50	case	_	wf="в"
50	неволю	неволя	NOUN	NNI	Case=Acc|Gender=Fem|Number=Sing	51	obl	_	wf="неволю"
51	даны	дати	VERB	VBNH	Analyt=Yes|Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	47	xcomp	_	wf="даны"
52	быти	быти	AUX	VB	Analyt=Yes|VerbForm=Inf|Voice=Act	51	aux:pass	_	wf="быти"|SpaceAfter=No
53	.	.	PUNCT	-PERIOD-	_	7	punct	_	_

~~~


