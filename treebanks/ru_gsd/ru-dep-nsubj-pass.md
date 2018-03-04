---
layout: base
title:  'Statistics of nsubj:pass in UD_Russian'
udver: '2'
---

## Treebank Statistics: UD_Russian: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ru-dep-nsubj.html">nsubj</a></tt>.

673 nodes (1%) are attached to their parents as `nsubj:pass`.

462 instances of `nsubj:pass` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.01040118870728.

The following 11 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (535; 79% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (64; 10% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-PRON.html">PRON</a></tt> (42; 6% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (11; 2% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru-pos-AUX.html">AUX</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Текст	ТЕКСТ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	написан	НАПИСАТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
4	по	ПО	ADP	AFX	_	3	advmod	_	_
5	-	-	PUNCT	-	_	4	goeswith	_	_
6	латыни	ЛАТЫНИ	ADV	AFX	_	4	goeswith	_	SpaceAfter=No
7	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Дун	ДУН	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	захвачен	ЗАХВАТИТЬ	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
4	якобитами	ЯКОБИТ	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	3	obl:agent	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	которые	КОТОРЫЙ	PRON	AWP	Animacy=Anim|Case=Nom|Number=Plur	7	nsubj	_	_
7	устроили	УСТРОИТЬ	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	4	acl:relcl	_	_
8	в	В	ADP	IN	_	9	case	_	_
9	замке	ЗАМОК	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	obl	_	_
10	тюрьму	ТЮРЬМА	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nsubj:pass	color:blue
1	На	НА	ADP	IN	_	3	case	_	_
2	следующий	СЛЕДУЮЩИЙ	ADJ	JJL	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	amod	_	_
3	день	ДЕНЬ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	obl	_	_
4	после	ПОСЛЕ	ADP	IN	_	5	case	_	_
5	возвращения	ВОЗВРАЩЕНИЕ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	8	obl	_	_
6	он	ОН	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	nsubj:pass	_	_
7	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	8	aux:pass	_	_
8	арестован	АРЕСТОВАТЬ	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


