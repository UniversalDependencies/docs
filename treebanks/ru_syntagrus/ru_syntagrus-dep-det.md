---
layout: base
title:  'Statistics of det in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `det`

This relation is universal.

26099 nodes (2%) are attached to their parents as `det`.

24672 instances of `det` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41568642476723.

The following 12 pairs of parts of speech are connected with `det`: <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (23915; 92% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (584; 2% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (562; 2% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (455; 2% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (276; 1% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (133; 1% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (122; 0% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (41; 0% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Разумеется	разумеется	ADV	_	Degree=Pos	7	parataxis	7:parataxis	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	1:punct	_
3	эти	этот	DET	_	Case=Acc|Number=Plur	4	det	4:det	_
4	объяснения	объяснение	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	8	obj	8:obj	_
5	вряд	вряд	ADV	_	Degree=Pos	7	advmod	7:advmod	_
6	ли	ли	PART	_	_	5	fixed	5:fixed	_
7	можно	можно	ADV	_	Degree=Pos	0	root	0:root	_
8	счесть	счесть	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	7	csubj	7:csubj	_
9	убедительными	убедительный	ADJ	_	Case=Ins|Degree=Pos|Number=Plur	8	obl	8:obl	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	И	и	CCONJ	_	_	6	cc	6:cc	_
2	все	весь	DET	_	Case=Nom|Number=Plur	3	det	3:det	_
3	они	они	PRON	_	Case=Nom|Number=Plur|Person=3	6	nsubj	6:nsubj	_
4	в	в	ADP	_	_	5	case	5:case	_
5	названии	название	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	6	obl	6:obl	_
6	имели	иметь	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	слово	слово	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	6	obj	6:obj	_
8	algoritmi	algoritmi	X	_	Foreign=Yes	7	flat:foreign	7:flat:foreign	_
9	или	или	CCONJ	_	_	7	cc	7:cc	_
10	algorismi	algorismi	X	_	Foreign=Yes	7	flat:foreign	7:flat:foreign	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 2 det	color:blue
1	А	а	CCONJ	_	_	16	cc	16:cc	_
2	тем	тот	DET	_	Case=Dat|Number=Plur	16	det	16:det	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	5:punct	_
4	кто	кто	PRON	_	Case=Nom	5	nsubj	5:nsubj	_
5	пришел	прийти	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	acl:relcl	2:acl:relcl	_
6	на	на	ADP	_	_	10	case	10:case	_
7	пять	пять	NUM	_	Case=Acc	10	nummod:gov	10:nummod:gov	_
8	-	-	PUNCT	_	_	9	punct	9:punct	_
9	десять	десять	NUM	_	Case=Acc	7	nummod:gov	7:nummod:gov	_
10	лет	год	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	11	obl	11:obl	_
11	раньше	рано	ADV	_	Degree=Cmp	5	advmod	5:advmod	SpaceAfter=No
12	,	,	PUNCT	_	_	11	punct	11:punct	_
13	-	-	PUNCT	_	_	2	punct	2:punct	_
14	увы	увы	ADV	_	Degree=Pos	16	parataxis	16:parataxis	SpaceAfter=No
15	,	,	PUNCT	_	_	14	punct	14:punct	_
16	нет	нет	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
17	!	!	PUNCT	_	_	16	punct	16:punct	_

~~~


