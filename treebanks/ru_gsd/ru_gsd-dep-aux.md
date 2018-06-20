---
layout: base
title:  'Statistics of aux in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="ru_gsd-dep-aux-pass.html">aux:pass</a></tt>.

69 nodes (0%) are attached to their parents as `aux`.

42 instances of `aux` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23188405797101.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-AUX.html">AUX</a></tt> (43; 62% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-AUX.html">AUX</a></tt> (18; 26% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-PART.html">PART</a></tt> (5; 7% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-AUX.html">AUX</a></tt> (2; 3% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-PART.html">PART</a></tt> (1; 1% instances).


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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 aux	color:blue
1	Тхай	ТХАЙ	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
2	Тонг	ТОНГ	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	flat	_	_
3	отправлял	ОТПРАВЛЯТЬ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
4	его	ОН	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	3	obj	_	_
5	в	В	ADP	IN	_	7	case	_	_
6	карательные	КАРАТЕЛЬНЫЙ	ADJ	JJL	Animacy=Inan|Case=Acc|Number=Plur	7	amod	_	_
7	походы	ПОХОД	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	3	obl	_	SpaceAfter=No
8	;	;	PUNCT	:	_	3	punct	_	_
9	где	ГДЕ	ADV	WRB	_	12	advmod	_	_
10	бы	БЫ	PART	RP	_	12	aux	_	_
11	ни	НИ	PART	NEG	Polarity=Neg	12	advmod	_	_
12	был	БЫТЬ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	15	advcl	_	SpaceAfter=No
13	,	,	PUNCT	,	_	12	punct	_	_
14	везде	ВЕЗДЕ	ADV	RB	_	15	advmod	_	_
15	побеждал	ПОБЕЖДАТЬ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	parataxis	_	_
16	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	3	punct	_	SpaceAfter=No
17	.	.	PUNCT	.	_	3	punct	_	_

~~~


