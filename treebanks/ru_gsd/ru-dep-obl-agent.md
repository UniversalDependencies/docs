---
layout: base
title:  'Statistics of obl:agent in UD_Russian'
udver: '2'
---

## Treebank Statistics: UD_Russian: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="ru-dep-obl.html">obl</a></tt>.

243 nodes (0%) are attached to their parents as `obl:agent`.

225 instances of `obl:agent` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.24691358024691.

The following 6 pairs of parts of speech are connected with `obl:agent`: <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (161; 66% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (43; 18% instances), <tt><a href="ru-pos-VERB.html">VERB</a></tt>-<tt><a href="ru-pos-PRON.html">PRON</a></tt> (20; 8% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (12; 5% instances), <tt><a href="ru-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="ru-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru-pos-PROPN.html">PROPN</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:agent	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:agent	color:blue
1	Наиболее	НАИБОЛЕЕ	ADV	RBS	Degree=Sup	2	advmod	_	_
2	известный	ИЗВЕСТНЫЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	amod	_	_
3	русский	РУССКИЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	amod	_	_
4	перевод	ПЕРЕВОД	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj:pass	_	_
5	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	6	aux:pass	_	_
6	сделан	СДЕЛАТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
7	Даниилом	ДАНИИЛ	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	obl:agent	_	_
8	Хармсом	ХАРМС	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	7	flat	_	SpaceAfter=No
9	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:agent	color:blue
1	Им	ОН	PRON	PRP	Case=Ins|Gender=Masc|Number=Sing|Person=3	3	obl:agent	_	_
2	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	создан	СОЗДАТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
4	ансамбль	АНСАМБЛЬ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
5	``	``	PUNCT	``	_	6	punct	_	SpaceAfter=No
6	Бяседа	БЯСЕДА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	appos	_	_
7	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	6	punct	_	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	_	_

~~~


