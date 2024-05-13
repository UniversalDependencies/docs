---
layout: base
title:  'Statistics of nummod:entity in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `nummod:entity`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-nummod.html">nummod</a></tt>.
There are also 1 other language-specific subtypes of `nummod`: <tt><a href="ru_syntagrus-dep-nummod-gov.html">nummod:gov</a></tt>.

368 nodes (0%) are attached to their parents as `nummod:entity`.

368 instances of `nummod:entity` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.38315217391304.

The following 7 pairs of parts of speech are connected with `nummod:entity`: <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (199; 54% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (66; 18% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (42; 11% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt> (36; 10% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (18; 5% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt> (5; 1% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod:entity	color:blue
1	-	-	PUNCT	_	_	2	punct	2:punct	_
2	Астероид	астероид	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	_
3	697	697	NUM	_	NumType=Card	2	nummod:entity	2:nummod	_
4	Галилея	Галилей	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	2	nmod	2:nmod:gen	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nummod:entity	color:blue
1	С	с	ADP	_	_	3	case	3:case	_
2	такими	такой	DET	_	Case=Ins|Number=Plur|PronType=Dem	3	det	3:det	_
3	мыслями	мысль	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	5	obl	5:obl:с:ins	_
4	Люда	Люда	PROPN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	5	nsubj	5:nsubj	_
5	вошла	войти	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	в	в	ADP	_	_	7	case	7:case	_
7	комнату	комната	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	5	obl	5:obl:в:acc	_
8	№	№	SYM	_	_	7	nummod:entity	7:nummod:entity	_
9	387	387	NUM	_	NumType=Card	8	nummod:entity	8:nummod:entity	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod:entity	color:blue
1	Terminator	Terminator	PROPN	_	Foreign=Yes	0	root	0:root	_
2	3	3	NUM	_	NumType=Card	1	nummod:entity	1:nummod:entity	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	4:punct	_
4	кстати	кстати	ADV	_	Degree=Pos	1	parataxis	1:parataxis	SpaceAfter=No
5	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


