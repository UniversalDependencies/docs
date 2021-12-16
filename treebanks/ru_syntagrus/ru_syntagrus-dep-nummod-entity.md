---
layout: base
title:  'Statistics of nummod:entity in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `nummod:entity`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-nummod.html">nummod</a></tt>.
There are also 1 other language-specific subtypes of `nummod`: <tt><a href="ru_syntagrus-dep-nummod-gov.html">nummod:gov</a></tt>.

62 nodes (0%) are attached to their parents as `nummod:entity`.

62 instances of `nummod:entity` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.40322580645161.

The following 4 pairs of parts of speech are connected with `nummod:entity`: <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt> (36; 58% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (18; 29% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt> (5; 8% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (3; 5% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nummod:entity	color:blue
1	С	с	ADP	_	_	3	case	3:case	_
2	такими	такой	DET	_	Case=Ins|Number=Plur|PronType=Dem	3	det	3:det	_
3	мыслями	мысль	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	5	obl	5:obl:с:ins	_
4	Люда	Люда	PROPN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	5	nsubj	5:nsubj	_
5	вошла	войти	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	в	в	ADP	_	_	7	case	7:case	_
7	комнату	комната	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	5	obl	5:obl:в:acc	_
8	№	№	SYM	_	_	7	nummod:entity	7:nummod:entity	_
9	387	387	NUM	_	NumType=Card	8	nummod	8:nummod	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	5:punct	_

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
4	девять	девять	NUM	_	Case=Nom|NumType=Card	3	nummod:gov	3:nummod:gov	SpaceAfter=No
5	"	"	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nummod:entity	color:blue
1	Нет	нет	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	и	и	PART	_	_	3	advmod	3:advmod	_
3	серийных	серийный	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	4	amod	4:amod	_
4	суперкаров	суперкар	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	1	nsubj	1:nsubj|14:nmod:gen	_
5	Marussia	Marussia	PROPN	_	Foreign=Yes	4	flat:foreign	4:flat:foreign	_
6	(	(	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
7	АР	АР	PROPN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	parataxis	4:parataxis	_
8	№	№	SYM	_	_	7	nummod:entity	7:nummod:entity	_
9	1	1	NUM	_	NumType=Card	8	nummod	8:nummod	SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	11:punct	_
11	2009	2009	NUM	_	NumType=Card	8	conj	7:nummod:entity|8:conj	SpaceAfter=No
12	)	)	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
13	,	,	PUNCT	_	_	20	punct	20:punct	_
14	объем	объем	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	20	nsubj	20:nsubj|22:nsubj	_
15	выпуска	выпуск	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	14	nmod	14:nmod:gen	_
16	которых	который	PRON	_	Case=Gen|PronType=Int,Rel	14	nmod	4:ref	_
17	в	в	ADP	_	_	19	case	19:case	_
18	2010	2010	NUM	_	NumType=Card	19	nummod	19:nummod	_
19	году	год	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	20	obl	20:obl:в:loc	_
20	должен	должен	ADJ	_	Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	4	acl:relcl	4:acl:relcl	_
21	был	быть	AUX	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	20	cop	20:cop	_
22	достичь	достичь	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	20	xcomp	20:xcomp	_
23	1200	1200	NUM	_	NumType=Card	24	nummod	24:nummod	_
24	штук	штука	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	22	obl	22:obl:gen	SpaceAfter=No
25	…	…	PUNCT	_	_	1	punct	1:punct	_

~~~


