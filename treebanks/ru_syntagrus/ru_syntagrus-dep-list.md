---
layout: base
title:  'Statistics of list in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `list`

This relation is universal.

74 nodes (0%) are attached to their parents as `list`.

74 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.95945945945946.

The following 14 pairs of parts of speech are connected with `list`: <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (26; 35% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (10; 14% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (8; 11% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (6; 8% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (6; 8% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (5; 7% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt> (4; 5% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 list	color:blue
1	Нет	нет	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	и	и	PART	_	_	3	advmod	3:advmod	_
3	серийных	серийный	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	4	amod	4:amod	_
4	суперкаров	суперкар	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	1	nsubj	1:nsubj|14:nmod:gen	_
5	Marussia	Marussia	X	_	Foreign=Yes	4	flat:foreign	4:flat:foreign	_
6	(	(	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
7	АР	АР	PROPN	_	Animacy=Inan|Case=Nom|Gender=Masc|NameType=Pro|Number=Sing	4	parataxis	4:parataxis	_
8	№	№	SYM	_	_	9	compound	9:compound	_
9	1	1	NUM	_	NumForm=Digit|NumType=Card	7	list	7:list	SpaceAfter=No
10	,	,	PUNCT	_	_	7	punct	7:punct	_
11	2009	2009	ADJ	_	NumForm=Digit|NumType=Ord	7	list	7:list	pos="ANUM"|SpaceAfter=No
12	)	)	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
13	,	,	PUNCT	_	_	20	punct	20:punct	_
14	объем	объем	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	20	nsubj	20:nsubj|22:nsubj	_
15	выпуска	выпуск	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	14	nmod	14:nmod:gen	_
16	которых	который	DET	_	Case=Gen|Number=Plur|PronType=Rel	14	nmod	4:ref	_
17	в	в	ADP	_	_	19	case	19:case	_
18	2010	2010	ADJ	_	NumForm=Digit|NumType=Ord	19	amod	19:amod	pos="ANUM"|_
19	году	год	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	20	obl	20:obl:в:loc	_
20	должен	должен	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	4	acl:relcl	4:acl:relcl	_
21	был	быть	AUX	_	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	20	cop	20:cop	_
22	достичь	достичь	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	20	xcomp	20:xcomp	_
23	1200	1200	NUM	_	NumForm=Digit|NumType=Card	24	nummod	24:nummod	_
24	штук	штука	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	22	obl	22:obl:gen	SpaceAfter=No
25	…	…	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 list	color:blue
1	Наука	наука	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_
2	и	и	CCONJ	_	_	3	cc	3:cc	_
3	жизнь	жизнь	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	conj	0:root|1:conj	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	6:punct	_
5	№	№	SYM	_	_	6	compound	6:compound	_
6	1	1	NUM	_	NumForm=Digit|NumType=Card	1	list	1:list	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	8:punct	_
8	2005	2005	ADJ	_	NumForm=Digit|NumType=Ord	1	list	1:list	pos="ANUM"|SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 list	color:blue
1	Наука	наука	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_
2	и	и	CCONJ	_	_	3	cc	3:cc	_
3	жизнь	жизнь	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	conj	0:root|1:conj	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	6:punct	_
5	№	№	SYM	_	_	6	compound	6:compound	_
6	1	1	NUM	_	NumForm=Digit|NumType=Card	1	list	1:list	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	8:punct	_
8	2005	2005	ADJ	_	NumForm=Digit|NumType=Ord	1	list	1:list	pos="ANUM"|SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


