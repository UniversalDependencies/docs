---
layout: base
title:  'Statistics of aux in UD_Russian'
udver: '2'
---

## Treebank Statistics: UD_Russian: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="ru-dep-aux-pass.html">aux:pass</a></tt>.

63 nodes (0%) are attached to their parents as `aux`.

39 instances of `aux` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19047619047619.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-AUX.html">AUX</a></tt> (46; 73% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-AUX.html">AUX</a></tt> (15; 24% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-AUX.html">AUX</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux	color:blue
1	За	ЗА	ADP	IN	_	3	case	_	_
2	эту	ЭТОТ	DET	DT	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	3	det	_	_
3	роль	РОЛЬ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	7	obl	_	_
4	Финч	ФИНЧ	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj:pass	_	_
5	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	7	aux	_	_
6	посмертно	ПОСМЕРТНО	ADV	RB	_	7	advmod	_	_
7	награждён	НАГРАДИТЬ	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
8	``	``	PUNCT	``	_	9	punct	_	SpaceAfter=No
9	Оскаром	ОСКАР	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	7	iobj	_	_
10	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	9	punct	_	SpaceAfter=No
11	,	,	PUNCT	,	_	13	punct	_	_
12	который	КОТОРЫЙ	PRON	AWP	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	13	obj	_	_
13	получила	ПОЛУЧИТЬ	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	9	acl:relcl	_	_
14	его	ЕГО	DET	PRP$	Person=3	15	det	_	_
15	вдова	ВДОВА	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	13	nsubj	_	_
16	Элета	ЭЛЕТА	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	15	appos	_	SpaceAfter=No
17	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux	color:blue
1	Она	ОНА	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	2	nsubj	_	_
2	должна	ДОЛЖЕН	ADJ	JJH	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing|Variant=Short	0	root	_	_
3	была	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	2	aux	_	_
4	спать	СПАТЬ	VERB	VB	Aspect=Imp|VerbForm=Inf	2	xcomp	_	_
5	в	В	ADP	IN	_	6	case	_	_
6	крио	КРИО	ADV	AFX	_	4	obl	_	_
7	-	-	PUNCT	-	_	6	goeswith	_	_
8	камере	КАМЕРА	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	6	goeswith	_	_
9	до	ДО	ADP	IN	_	11	case	_	_
10	тех	ТОТ	DET	DT	Animacy=Inan|Case=Gen|Number=Plur	11	det	_	_
11	пор	ПОРА	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	4	obl	_	SpaceAfter=No
12	,	,	PUNCT	,	_	15	punct	_	_
13	пока	ПОКА	SCONJ	IN	_	15	mark	_	_
14	не	НЕ	PART	NEG	Polarity=Neg	15	advmod	_	_
15	начнутся	НАЧАТЬСЯ	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Mid	2	advcl	_	_
16	тесты	ТЕСТ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	15	nsubj	_	SpaceAfter=No
17	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 aux	color:blue
1	Выбор	ВЫБОР	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
2	данного	ДАННЫЙ	ADJ	JJL	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	3	amod	_	_
3	имени	ИМЯ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	1	nmod	_	_
4	Дональдом	ДОНАЛЬД	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	1	obl:agent	_	_
5	не	НЕ	PART	NEG	Polarity=Neg	8	advmod	_	_
6	в	В	ADP	IN	_	8	case	_	_
7	последнюю	ПОСЛЕДНИЙ	ADJ	JJL	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	8	amod	_	_
8	очередь	ОЧЕРЕДЬ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	9	obl	_	_
9	объясняется	ОБЪЯСНЯТЬСЯ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
10	тем	ТО	PRON	DT	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	9	iobj	_	SpaceAfter=No
11	,	,	PUNCT	,	_	18	punct	_	_
12	что	ЧТО	SCONJ	IN	_	18	mark	_	_
13	его	ЕГО	DET	PRP$	Person=3	15	det	_	_
14	бывшая	БЫВШИЙ	ADJ	JJL	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	15	amod	_	_
15	жена	ЖЕНА	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	18	nsubj	_	_
16	Ивана	ИВАНА	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	15	appos	_	_
17	была	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	18	aux	_	_
18	родом	РОД	NOUN	RB	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	9	ccomp	_	_
19	из	ИЗ	ADP	IN	_	20	case	_	_
20	Чехии	ЧЕХИЯ	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	18	nmod	_	_
21	и	И	CCONJ	CC	_	23	cc	_	_
22	плохо	ПЛОХО	ADV	RB	_	23	advmod	_	_
23	говорила	ГОВОРИТЬ	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	18	conj	_	_
24	по	ПО	ADP	AFX	_	23	advmod	_	_
25	-	-	PUNCT	-	_	24	goeswith	_	_
26	английски	АНГЛИЙСКИ	ADV	RB	_	24	goeswith	_	SpaceAfter=No
27	.	.	PUNCT	.	_	9	punct	_	_

~~~


