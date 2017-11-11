---
layout: base
title:  'Statistics of det in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `det`

This relation is universal.

21856 nodes (2%) are attached to their parents as `det`.

20598 instances of `det` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46641654465593.

The following 15 pairs of parts of speech are connected with `det`: <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (19284; 88% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (887; 4% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (584; 3% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (537; 2% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (293; 1% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (126; 1% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (107; 0% instances), <tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (11; 0% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (7; 0% instances), <tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="ru_syntagrus-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="ru_syntagrus-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-dep-_.html">_</a></tt>-<tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt> (2; 0% instances).


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
8	счесть	считать	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	7	csubj	7:csubj	_
9	убедительными	убедительный	ADJ	_	Case=Ins|Degree=Pos|Number=Plur	8	obl	8:obl	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 det	color:blue
1	А	а	CCONJ	_	_	2	cc	2:cc	_
2	отложенные	откладывать	VERB	_	Aspect=Perf|Case=Nom|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
3	-	-	PUNCT	_	_	2	punct	2:punct	_
4	наши	наш	DET	_	Case=Nom|Number=Plur	2	det	2:det	SpaceAfter=No
5	"	"	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	4:punct	_

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
9	или	или	CCONJ	_	_	10	cc	10:cc	_
10	algorismi	algorismi	X	_	Foreign=Yes	8	flat:foreign	8:flat:foreign	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	10:punct	_

~~~


