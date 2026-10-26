---
layout: base
title:  'Statistics of nummod:entity in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `nummod:entity`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-nummod.html">nummod</a></tt>.
There are also 1 other language-specific subtypes of `nummod`: <tt><a href="ru_syntagrus-dep-nummod-gov.html">nummod:gov</a></tt>.

26 nodes (0%) are attached to their parents as `nummod:entity`.

26 instances of `nummod:entity` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26923076923077.

The following 6 pairs of parts of speech are connected with `nummod:entity`: <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (9; 35% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (7; 27% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (5; 19% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt> (3; 12% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nummod:entity	color:blue
1	С	с	ADP	_	_	3	case	3:case	_
2	такими	такой	DET	_	Case=Ins|Number=Plur|PronType=Dem	3	det	3:det	_
3	мыслями	мысль	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	5	obl	5:obl:с:ins	_
4	Люда	Люда	PROPN	_	Animacy=Anim|Case=Nom|Gender=Fem|NameType=Giv|Number=Sing	5	nsubj	5:nsubj	_
5	вошла	войти	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	в	в	ADP	_	_	7	case	7:case	_
7	комнату	комната	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	5	obl	5:obl:в:acc	_
8	№	№	SYM	_	_	7	nummod:entity	7:nummod:entity	_
9	387	387	NUM	_	NumForm=Digit|NumType=Card	8	nummod:entity	8:nummod:entity	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod:entity	color:blue
1	-	-	PUNCT	_	_	2	punct	2:punct	_
2	Астероид	астероид	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	_
3	697	697	NUM	_	NumForm=Digit|NumType=Card	2	nummod:entity	2:nummod	_
4	Галилея	Галилей	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	2	nmod	2:nmod:gen	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nummod:entity	color:blue
1	Автомобиль	автомобиль	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	_
2	Bentley	Bentley	X	_	Foreign=Yes	1	appos	1:appos	_
3	внешне	внешне	ADV	_	Degree=Pos	4	advmod	4:advmod	_
4	напоминает	напоминать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	болид	болид	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	4:obj	_
6	"	"	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
7	Формулы	Формула	PROPN	_	Animacy=Inan|Case=Gen|Gender=Fem|NameType=Com|Number=Sing	5	nmod	5:nmod:gen	SpaceAfter=No
8	-	-	PUNCT	_	_	9	punct	9:punct	SpaceAfter=No
9	1	1	NUM	_	NumForm=Digit|NumType=Card	7	nummod:entity	7:nummod:entity	SpaceAfter=No
10	"	"	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
11	,	,	PUNCT	_	_	16	punct	16:punct	_
12	а	а	CCONJ	_	_	16	cc	16:cc	_
13	машина	машина	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	16	nsubj	16:nsubj	_
14	от	от	ADP	_	_	13	case	13:case	_
15	Pininfarina	Pininfarina	X	_	Foreign=Yes	13	flat:foreign	13:flat:foreign	_
16	напоминает	напоминать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	0:root|4:conj	_
17	дрэгстер	драгстер	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	16	obj	16:obj	SpaceAfter=No
18	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


