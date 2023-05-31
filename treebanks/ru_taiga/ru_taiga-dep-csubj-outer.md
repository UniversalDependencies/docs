---
layout: base
title:  'Statistics of csubj:outer in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="ru_taiga-dep-csubj-pass.html">csubj:pass</a></tt>.

2 nodes (0%) are attached to their parents as `csubj:outer`.

2 instances of `csubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.

The following 2 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 csubj:outer	color:blue
1	Наконец	наконец	ADV	_	Degree=Pos	2	advmod	_	_
2	записать	записать	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	8	csubj:outer	_	_
3	ЕР	ЕР	PROPN	_	Abbr=Yes|NameType=Com	8	obj	_	_
4	-	-	PUNCT	_	_	3	punct	_	_
5	это	это	PART	_	_	8	expl	_	_
6	не	не	PART	_	Polarity=Neg	8	advmod	_	_
7	про	про	ADP	_	_	8	case	_	_
8	меня	я	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	0	root	_	SpaceAfter=No
9	,	,	PUNCT	_	_	20	punct	_	_
10	а	а	CCONJ	_	_	20	cc	_	_
11	вот	вот	PART	_	_	12	advmod	_	_
12	слить	слить	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	20	csubj:outer	_	_
13	сюда	сюда	ADV	_	Degree=Pos|PronType=Dem	12	advmod	_	_
14	говно-демо	говно-демо	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	12	obj	_	_
15	с	с	ADP	_	_	16	case	_	_
16	альбома	альбом	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	14	nmod	_	_
17	-	-	PUNCT	_	_	20	punct	_	_
18	это	это	PART	_	_	20	expl	_	_
19	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	20	nsubj	_	_
20	могу	мочь	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	parataxis	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 12 csubj:outer	color:blue
1	Наконец	наконец	ADV	_	Degree=Pos	2	advmod	_	_
2	записать	записать	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	8	csubj:outer	_	_
3	ЕР	ЕР	PROPN	_	Abbr=Yes|NameType=Com	8	obj	_	_
4	-	-	PUNCT	_	_	3	punct	_	_
5	это	это	PART	_	_	8	expl	_	_
6	не	не	PART	_	Polarity=Neg	8	advmod	_	_
7	про	про	ADP	_	_	8	case	_	_
8	меня	я	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	0	root	_	SpaceAfter=No
9	,	,	PUNCT	_	_	20	punct	_	_
10	а	а	CCONJ	_	_	20	cc	_	_
11	вот	вот	PART	_	_	12	advmod	_	_
12	слить	слить	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	20	csubj:outer	_	_
13	сюда	сюда	ADV	_	Degree=Pos|PronType=Dem	12	advmod	_	_
14	говно-демо	говно-демо	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	12	obj	_	_
15	с	с	ADP	_	_	16	case	_	_
16	альбома	альбом	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	14	nmod	_	_
17	-	-	PUNCT	_	_	20	punct	_	_
18	это	это	PART	_	_	20	expl	_	_
19	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	20	nsubj	_	_
20	могу	мочь	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	parataxis	_	_

~~~


