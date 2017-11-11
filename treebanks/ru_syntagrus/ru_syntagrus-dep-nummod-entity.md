---
layout: base
title:  'Statistics of nummod:entity in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `nummod:entity`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-nummod.html">nummod</a></tt>.
There are also 1 other language-specific subtypes of `nummod`: <tt><a href="ru_syntagrus-dep-nummod-gov.html">nummod:gov</a></tt>.

63 nodes (0%) are attached to their parents as `nummod:entity`.

63 instances of `nummod:entity` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.41269841269841.

The following 5 pairs of parts of speech are connected with `nummod:entity`: <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt> (33; 52% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (18; 29% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt> (8; 13% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (3; 5% instances), <tt><a href="ru_syntagrus-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nummod:entity	color:blue
1	С	с	ADP	_	_	3	case	3:case	_
2	такими	такой	DET	_	Case=Ins|Number=Plur	3	det	3:det	_
3	мыслями	мысль	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	5	obl	5:obl	_
4	Люда	люда	PROPN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	5	nsubj	5:nsubj	_
5	вошла	входить	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	в	в	ADP	_	_	7	case	7:case	_
7	комнату	комната	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	5	obl	5:obl	_
8	№	№	SYM	_	_	7	nummod:entity	7:nummod:entity	_
9	387	387	NUM	_	_	8	nummod	8:nummod	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod:entity	color:blue
1	Выдаем	выдавать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	команду	команда	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	1	obj	1:obj	_
3	номер	номер	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nummod:entity	2:nummod:entity	_
4	девять	девять	NUM	_	Case=Nom	3	nummod:gov	3:nummod:gov	SpaceAfter=No
5	"	"	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 nummod:entity	color:blue
1	(	(	PUNCT	_	_	2	punct	2:punct	SpaceAfter=No
2	См.	смотреть	VERB	_	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	"	"	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No
4	Наука	наука	PROPN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	obl	2:obl	_
5	и	и	CCONJ	_	_	6	cc	6:cc	_
6	жизнь	жизнь	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	conj	4:conj	SpaceAfter=No
7	"	"	PUNCT	_	_	6	punct	6:punct	_
8	№№	№№	SYM	_	_	4	nummod:entity	4:nummod	_
9	9	9	NUM	_	_	8	nummod	8:nummod	SpaceAfter=No
10	,	,	PUNCT	_	_	9	punct	9:punct	_
11	12	12	NUM	_	_	9	conj	9:conj	SpaceAfter=No
12	,	,	PUNCT	_	_	11	punct	11:punct	_
13	2004	2004	NUM	_	_	14	nummod	14:nummod	_
14	г	год	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	conj	8:conj	SpaceAfter=No
15	.	.	PUNCT	_	_	14	punct	14:punct	SpaceAfter=No
16	;	;	PUNCT	_	_	14	punct	14:punct	_
17	и	и	CCONJ	_	_	18	cc	18:cc	_
18	№№	№№	SYM	_	_	8	conj	8:conj	_
19	1	1	NUM	_	_	18	nummod	18:nummod	SpaceAfter=No
20	,	,	PUNCT	_	_	19	punct	19:punct	_
21	2	2	NUM	_	_	19	conj	19:conj	SpaceAfter=No
22	,	,	PUNCT	_	_	21	punct	21:punct	_
23	3	3	NUM	_	_	19	conj	19:conj	SpaceAfter=No
24	,	,	PUNCT	_	_	23	punct	23:punct	_
25	4	4	NUM	_	_	19	conj	19:conj	SpaceAfter=No
26	,	,	PUNCT	_	_	25	punct	25:punct	_
27	5	5	NUM	_	_	19	conj	19:conj	SpaceAfter=No
28	,	,	PUNCT	_	_	27	punct	27:punct	_
29	9	9	NUM	_	_	19	conj	19:conj	SpaceAfter=No
30	,	,	PUNCT	_	_	29	punct	29:punct	_
31	2005	2005	NUM	_	_	32	nummod	32:nummod	_
32	г	год	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	conj	8:conj	SpaceAfter=No
33	.	.	PUNCT	_	_	32	punct	32:punct	SpaceAfter=No
34	)	)	PUNCT	_	_	32	punct	32:punct	_

~~~


