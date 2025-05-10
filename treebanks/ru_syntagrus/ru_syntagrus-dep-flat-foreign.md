---
layout: base
title:  'Statistics of flat:foreign in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ru_syntagrus-dep-flat-name.html">flat:name</a></tt>.

2428 nodes (0%) are attached to their parents as `flat:foreign`.

2428 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.10831960461285.

The following 21 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (1574; 65% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (387; 16% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (158; 7% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (136; 6% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (42; 2% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (39; 2% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (34; 1% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (12; 0% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (11; 0% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt> (11; 0% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (4; 0% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:foreign	color:blue
1	И	и	CCONJ	_	_	6	cc	6:cc	_
2	все	весь	DET	_	Case=Nom|Number=Plur|PronType=Tot	3	det	3:det	_
3	они	они	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	6:nsubj	_
4	в	в	ADP	_	_	5	case	5:case	_
5	названии	название	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	6	obl	6:obl:в:loc	_
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	Big	Big	X	_	Foreign=Yes	0	root	0:root	_
2	Wall	Wall	X	_	Foreign=Yes	1	flat:foreign	1:flat:foreign	SpaceAfter=No
3	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat:foreign	color:blue
1	Заменим	заменить	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	их	они	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	1	obj	1:obj	_
3	на	на	ADP	_	_	6	case	6:case	_
4	"	"	PUNCT	_	_	6	punct	6:punct	SpaceAfter=No
5	фондовых	фондовый	ADJ	_	Animacy=Anim|Case=Acc|Degree=Pos|Number=Plur	6	amod	6:amod	_
6	брокеров	брокер	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	1	obl	1:obl:на:acc	SpaceAfter=No
7	"	"	PUNCT	_	_	6	punct	6:punct	_
8	и	и	CCONJ	_	_	9	cc	9:cc	_
9	получим	получить	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	1	conj	0:root|1:conj	_
10	NASDAQ	NASDAQ	X	_	Foreign=Yes	9	flat:foreign	9:flat:foreign	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


