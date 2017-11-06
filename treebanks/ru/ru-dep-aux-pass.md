---
layout: base
title:  'Statistics of aux:pass in UD_Russian'
udver: '2'
---

## Treebank Statistics: UD_Russian: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ru-dep-aux.html">aux</a></tt>.

535 nodes (1%) are attached to their parents as `aux:pass`.

519 instances of `aux:pass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.0803738317757.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-AUX.html">AUX</a></tt> (523; 98% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-AUX.html">AUX</a></tt> (10; 2% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Текст	ТЕКСТ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	написан	НАПИСАТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
4	по	ПО	ADP	AFX	_	3	advmod	_	_
5	-	-	PUNCT	-	_	4	goeswith	_	_
6	латыни	ЛАТЫНИ	ADV	AFX	_	4	goeswith	_	SpaceAfter=No
7	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Все	ВЕСЬ	DET	DT	Animacy=Anim|Case=Nom|Number=Plur	2	det	_	_
2	граждане	ГРАЖДАНИН	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubj:pass	_	_
3	были	БЫТЬ	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	обязаны	ОБЯЗАННЫЙ	ADJ	JJH	Animacy=Anim|Case=Nom|Number=Plur|Variant=Short	0	root	_	_
5	работать	РАБОТАТЬ	VERB	VB	Aspect=Imp|VerbForm=Inf	4	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 16 aux:pass	color:blue
1	1	1	ADJ	ORD	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	2	amod	_	_
2	января	ЯНВАРЬ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	obl	_	_
3	1889	1889	ADJ	ORD	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	amod	_	_
4	года	ГОД	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
5	произведен	ПРОИЗВЕСТИ	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
6	в	В	ADP	IN	_	7	case	_	_
7	чин	ЧИН	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obl	_	_
8	вице	ВИЦЕ	ADV	AFX	_	7	nmod	_	_
9	-	-	PUNCT	-	_	8	goeswith	_	_
10	адмирала	АДМИРАЛ	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	8	goeswith	_	SpaceAfter=No
11	,	,	PUNCT	,	_	17	punct	_	_
12	а	А	CCONJ	CC	_	17	cc	_	_
13	в	В	ADP	IN	_	15	case	_	_
14	1891	1891	ADJ	ORD	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	15	amod	_	_
15	году	ГОД	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	17	obl	_	_
16	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	19	aux:pass	_	_
17	назначен	НАЗНАЧИТЬ	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	5	conj	_	_
18	старшим	СТАРШИЙ	ADJ	JJL	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	19	amod	_	_
19	флагманом	ФЛАГМАН	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	17	iobj	_	_
20	Балтийского	БАЛТИЙСКИЙ	ADJ	JJL	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	21	amod	_	_
21	флота	ФЛОТ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	19	nmod	_	SpaceAfter=No
22	.	.	PUNCT	.	_	5	punct	_	_

~~~


