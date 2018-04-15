---
layout: base
title:  'Statistics of csubj in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `csubj`

This relation is universal.

93 nodes (0%) are attached to their parents as `csubj`.

69 instances of `csubj` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.66666666666667.

The following 11 pairs of parts of speech are connected with `csubj`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (42; 45% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (20; 22% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (11; 12% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (5; 5% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="ru_taiga-pos-PART.html">PART</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-DET.html">DET</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj	color:blue
1	И	и	CCONJ	_	_	2	cc	_	_
2	охота	охота	VERB	_	Degree=Pos	0	root	_	_
3	завыть	завыть	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	2	csubj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	вскинув	вскинуть	VERB	_	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	3	advcl	_	_
6	морду	морда	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
7	к	к	ADP	_	_	8	case	_	_
8	луне	луна	NOUN	_	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	5	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj	color:blue
1	Ей	она	PRON	_	Case=Dat|Gender=Fem|Number=Sing|Person=3	2	iobj	_	_
2	важно	важный	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	_
3	чувствовать	чувствовать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	2	csubj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	что	что	SCONJ	_	_	3	mark	_	_
6	она	она	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3	7	nsubj	_	_
7	нравится	нравиться	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	3	ccomp	_	_
8	мужчинам	мужчина	NOUN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	7	iobj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	Ею	она	PRON	_	Case=Ins|Gender=Fem|Number=Sing|Person=3	4	obj	_	_
2	нельзя	нельзя	ADV	_	Degree=Pos	0	root	_	_
3	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	заниматься	заниматься	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Mid	2	csubj	_	SpaceAfter=No
5	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
6	,	,	PUNCT	_	_	10	punct	_	_
7	она	она	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3	1	nsubj	_	_
8	сама	сам	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	acl	_	_
9	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	занимается	заниматься	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	2	parataxis	_	SpaceAfter=No
11	"	"	PUNCT	_	_	10	punct	_	_
12	всеми	весь	DET	_	Case=Ins|Number=Plur	13	det	_	_
13	нами	мы	PRON	_	Case=Ins|Number=Plur|Person=1	10	obj	_	SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


