---
layout: base
title:  'Statistics of obl:agent in UD_Russian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Russian-GSD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="ru_gsd-dep-obl.html">obl</a></tt>.

256 nodes (0%) are attached to their parents as `obl:agent`.

234 instances of `obl:agent` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.15234375.

The following 7 pairs of parts of speech are connected with `obl:agent`: <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (168; 66% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (44; 17% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-PRON.html">PRON</a></tt> (21; 8% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (11; 4% instances), <tt><a href="ru_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_gsd-pos-X.html">X</a></tt> (5; 2% instances), <tt><a href="ru_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="ru_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_gsd-pos-PROPN.html">PROPN</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:agent	color:blue
1	Дун	Дун	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	был	быть	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	захвачен	захватить	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
4	якобитами	якобит	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	3	obl:agent	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	которые	который	PRON	AWP	Animacy=Anim|Case=Nom|Number=Plur	7	nsubj	_	_
7	устроили	устроить	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
8	в	в	ADP	IN	_	9	case	_	_
9	замке	замок	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	obl	_	_
10	тюрьму	тюрьма	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:agent	color:blue
1	Наиболее	наиболее	ADV	RBS	Degree=Sup	2	advmod	_	_
2	известный	известный	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
3	русский	русский	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
4	перевод	перевод	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj:pass	_	_
5	был	быть	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	6	aux:pass	_	_
6	сделан	сделать	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
7	Даниилом	Даниил	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	obl:agent	_	_
8	Хармсом	Хармс	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	7	flat:name	_	SpaceAfter=No
9	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:agent	color:blue
1	Им	он	PRON	PRP	Case=Ins|Gender=Masc|Number=Sing|Person=3	3	obl:agent	_	_
2	был	быть	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	создан	создать	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
4	ансамбль	ансамбль	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
5	``	``	PUNCT	``	_	6	punct	_	SpaceAfter=No
6	Бяседа	бяседа	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	appos	_	SpaceAfter=No
7	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	6	punct	_	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	_	_

~~~


