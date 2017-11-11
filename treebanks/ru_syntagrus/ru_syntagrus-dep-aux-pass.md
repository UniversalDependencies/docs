---
layout: base
title:  'Statistics of aux:pass in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-aux.html">aux</a></tt>.

2714 nodes (0%) are attached to their parents as `aux:pass`.

2643 instances of `aux:pass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17207074428887.

The following 7 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (2686; 99% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (20; 1% instances), <tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ru_syntagrus-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	"	"	PUNCT	_	_	2	punct	2:punct	SpaceAfter=No
2	Алгоризм	алгоризм	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	_
3	был	быть	AUX	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux	_
4	придуман	придумывать	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	в	в	ADP	_	_	6	case	6:case	_
6	Греции	греция	PROPN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	4	obl	4:obl	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 aux:pass	color:blue
1	Впрочем	впрочем	ADV	_	Degree=Pos	11	parataxis	11:parataxis	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	1:punct	_
3	как	как	SCONJ	_	_	4	mark	4:mark	_
4	пришел	приходить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	advcl	6:advcl	_
5	-	-	PUNCT	_	_	4	punct	4:punct	_
6	так	так	ADV	_	Degree=Pos	11	advmod	11:advmod	_
7	чуть	чуть	ADV	_	Degree=Pos	8	advmod	8:advmod	_
8	было	было	PART	_	_	11	aux:pass	11:aux:pass	_
9	и	и	PART	_	_	11	discourse	11:discourse	_
10	не	не	PART	_	_	11	advmod	11:advmod	_
11	ушел	уходить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 aux:pass	color:blue
1	В	в	ADP	_	_	2	case	2:case	_
2	столкновениях	столкновение	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Plur	6	obl	6:obl	_
3	в	в	ADP	_	_	4	case	4:case	_
4	Горхии	горхия	PROPN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	2	nmod	2:nmod	_
5	были	быть	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	6	aux:pass	6:aux:pass	_
6	убиты	убивать	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	_
7	пятеро	пятеро	NUM	_	Case=Nom	8	nummod:gov	8:nummod:gov	_
8	повстанцев	повстанец	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	6	nsubj	6:nsubj	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	8:punct	_
10	в	в	ADP	_	_	11	case	11:case	_
11	Калкоте	калкота	PROPN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	13	orphan	13:orphan	_
11.1	_	_	_	_	_	_	_	6:conj	_
12	еще	еще	ADV	_	Degree=Pos	13	advmod	13:advmod	_
13	четверо	четверо	NUM	_	Case=Nom	6	conj	11.1:nsubj	SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	13:punct	_
15	один	один	NUM	_	Case=Nom|Gender=Masc	17	nsubj	17:nsubj	_
16	был	быть	AUX	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	17	aux:pass	17:aux:pass	_
17	убит	убивать	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	6	conj	6:conj	_
18	в	в	ADP	_	_	19	case	19:case	_
19	Ламджунге	ламджунг	PROPN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	17	obl	17:obl	SpaceAfter=No
20	.	.	PUNCT	_	_	19	punct	19:punct	_

~~~


