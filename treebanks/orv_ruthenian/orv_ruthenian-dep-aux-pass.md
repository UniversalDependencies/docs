---
layout: base
title:  'Statistics of aux:pass in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="orv_ruthenian-dep-aux.html">aux</a></tt>.

194 nodes (0%) are attached to their parents as `aux:pass`.

124 instances of `aux:pass` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.82989690721649.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (191; 98% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (3; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	А	а	CCONJ	СС	_	5	cc	_	wf="А"
2	тыи	той	DET	DT	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	3	det	_	wf="тыи"
3	записы	записъ	NOUN	NNI	Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	wf="записы"
4	не	не	PART	NEG	Polarity=Neg	5	advmod	_	wf="не"
5	мели	мети	VERB	VBC	Aspect=Imp|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="мели"
6	быти	быти	AUX	VB	Analyt=Yes|VerbForm=Inf|Voice=Act	7	aux:pass	_	wf="быти"
7	порушоны	порушити	VERB	VBNH	Analyt=Yes|Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	5	xcomp	_	wf="порушоны"
8	вѣчно	вечно	ADV	RB	Degree=Pos	5	advmod	_	wf="вѣчно"|SpaceAfter=No
9	.	.	PUNCT	-PERIOD-	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 31 aux:pass	color:blue
1	Што	што	SCONJ	WP	_	12	mark	_	wf="Што"
2	мы	мы	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	_	wf="мы"
3	на	на	ADP	IN	_	4	case	_	wf="на"
4	ска(р)гу	скарга	NOUN	NNI	Case=Acc|Gender=Fem|Number=Sing	12	obl	_	wf="скаргу"
5	и	и	CCONJ	СС	_	6	cc	_	wf="и"
6	ѡпове(д)	оповѣдъ	NOUN	NNI	Case=Gen|Gender=Fem|Number=Sing	4	conj	_	wf="ѡповед"
7	ѡно(и)	оный	DET	DT	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	8	det	_	wf="онои"
8	Бєзъшта(н)чихи	Безштанчиха	PROPN	JJL	Case=Gen|Gender=Fem|NameType=Prs|Number=Sing	6	amod	_	wf="Бєзъштанчихи"
9	и	и	CCONJ	СС	_	11	cc	_	wf="и"
10	єи	она	PRON	PRP	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	det	_	wf="еи"
11	до(ч)ки	дочка	NOUN	NNA	Case=Acc|Gender=Fem|Number=Plur	8	conj	_	wf="дочки"
12	казали(с)мо	казати	VERB	VBC	Number=Plur|Person=1|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="казалисмо"
13	прє(д)	предъ	ADP	IN	_	14	case	_	wf="пред"
14	собою	себе	PRON	PRP	Case=Ins|PronType=Prs|Reflex=Yes	12	obl	_	wf="собою"
15	Ивану	Иванъ	PROPN	NPA	Case=Dat|Gender=Masc|NameType=Giv|Number=Sing	12	iobj	_	wf="Ивану"|SpaceAfter=No
16	,	,	PUNCT	-COMMA-	_	17	punct	_	wf=","
17	шафару	шафаръ	NOUN	NNA	Case=Dat|Gender=Masc|Number=Sing	15	appos	_	wf="шафару"|SpaceAfter=No
18	,	,	PUNCT	-COMMA-	_	19	punct	_	wf=","
19	ста(т)	стати	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	12	conj	_	wf="стат"
20	и	и	CCONJ	СС	_	24	cc	_	wf="и"
21	ѡ	о	ADP	IN	_	24	case	_	wf="о"
22	то(и)	тый	DET	DT	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	24	det	_	wf="тои"
23	за(въ)зято(й)	завзятый	ADJ	JJL	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	24	amod	_	wf="завъзятой"
24	рєчи	рѣчъ	NOUN	NNI	Case=Loc|Gender=Fem|Number=Sing	19	obl	_	wf="рєчи"|SpaceAfter=No
25	,	,	PUNCT	-COMMA-	_	32	punct	_	wf=","
26	єсли	єсли	SCONJ	IN	_	32	mark	_	wf="если"
27	бы	бы	AUX	RP	Analyt=Yes|Mood=Cnd	32	aux	_	wf="бы"
28	до	до	ADP	IN	_	30	case	_	wf="до"
29	тоє(и)	тый	DET	DT	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	30	det	_	wf="тоеи"
30	дѣ(въ)ки	дѣвка	NOUN	NNI	Case=Gen|Gender=Fem|Number=Sing	32	obl	_	wf="дѣвъки"
31	былъ	быти	AUX	VBC	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	32	aux:pass	_	wf="былъ"
32	привине(н)	привинный	ADJ	VBNH	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	34	advcl	_	wf="привинен"|SpaceAfter=No
33	,	,	PUNCT	-COMMA-	_	32	punct	_	wf=","
34	питали	пытати	VERB	VBC	Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	12	conj	_	wf="питали"|SpaceAfter=No
35	<;>	<;>	PUNCT	-QUOT-	_	12	punct	_	wf="<;>"|SpaceAfter=No
36	.	.	PUNCT	-PERIOD-	_	12	punct	_	wf="."

~~~


