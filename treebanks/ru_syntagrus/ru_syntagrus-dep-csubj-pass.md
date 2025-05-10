---
layout: base
title:  'Statistics of csubj:pass in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-csubj.html">csubj</a></tt>.

221 nodes (0%) are attached to their parents as `csubj:pass`.

191 instances of `csubj:pass` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.4841628959276.

The following 6 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (211; 95% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj:pass	color:blue
1	Объявили	объявить	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	4:punct	_
3	что	что	SCONJ	_	_	4	mark	4:mark	_
4	решено	решить	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	1	ccomp	1:ccomp	_
5	продлить	продлить	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	4	csubj:pass	4:csubj:pass	_
6	испытания	испытание	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	5	obj	5:obj	_
7	на	на	ADP	_	_	8	case	8:case	_
8	сутки	сутки	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	5	obl	5:obl:на:acc	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 10 csubj:pass	color:blue
1	Я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj|3:nsubj	_
2	решила	решить	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	пережидать	пережидать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	_
4	карантин	карантин	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	3:obj	_
5	на	на	ADP	_	_	6	case	6:case	_
6	даче	дача	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	3	obl	3:obl:на:loc	SpaceAfter=No
7	,	,	PUNCT	_	_	15	punct	15:punct	_
8	поскольку	поскольку	SCONJ	_	_	15	mark	15:mark	_
9	быть	быть	AUX	_	VerbForm=Inf|Voice=Act	10	aux:pass	10:aux:pass	_
10	запертой	запереть	VERB	_	Aspect=Perf|Case=Ins|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	15	csubj:pass	15:csubj:pass	_
11	в	в	ADP	_	_	13	case	13:case	_
12	московской	московский	ADJ	_	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	13	amod	13:amod	_
13	квартире	квартира	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	10	obl	10:obl:в:loc	_
14	еще	еще	PART	_	_	15	advmod	15:advmod	_
15	хуже	плохой	ADJ	_	Degree=Cmp	3	advcl	3:advcl:поскольку	SpaceAfter=No
16	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 csubj:pass	color:blue
1	Считалось	считать	VERB	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
2	загадкой	загадка	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	1	xcomp	1:xcomp	SpaceAfter=No
3	,	,	PUNCT	_	_	8	punct	8:punct	_
4	почему	почему	ADV	_	Degree=Pos|PronType=Rel	8	advmod	8:advmod	pos="ADVPRO"|_
5	мертвое	мертвый	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	6	amod	6:amod	_
6	дерево	дерево	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	8	nsubj	8:nsubj	_
7	-	-	PUNCT	_	_	6	punct	6:punct	_
8	сухое	сухой	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	1	csubj:pass	1:csubj:pass	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


