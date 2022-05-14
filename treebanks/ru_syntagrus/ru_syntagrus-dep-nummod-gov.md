---
layout: base
title:  'Statistics of nummod:gov in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-nummod.html">nummod</a></tt>.
There are also 1 other language-specific subtypes of `nummod`: <tt><a href="ru_syntagrus-dep-nummod-entity.html">nummod:entity</a></tt>.

3573 nodes (0%) are attached to their parents as `nummod:gov`.

3415 instances of `nummod:gov` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33725160929191.

The following 15 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (3273; 92% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (154; 4% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (61; 2% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (43; 1% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (13; 0% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (10; 0% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nummod:gov	color:blue
1	Оба	оба	NUM	_	Case=Nom|Gender=Masc|NumType=Card	3	nummod:gov	3:nummod:gov	_
2	эти	этот	DET	_	Case=Nom|Number=Plur|PronType=Dem	3	det	3:det	_
3	пути	путь	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	_
4	имели	иметь	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	свои	свой	DET	_	Case=Acc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	6	det	6:det	_
6	преимущества	преимущество	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	4	obj	4:obj	_
7	и	и	CCONJ	_	_	9	cc	9:cc	_
8	свои	свой	DET	_	Case=Acc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	9	det	9:det	_
9	недостатки	недостаток	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	6	conj	4:obj|6:conj	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod:gov	color:blue
1	И	и	CCONJ	_	_	5	cc	5:cc	_
2	теперь	теперь	ADV	_	Degree=Pos	5	advmod	5:advmod	_
3	уже	уже	ADV	_	Degree=Pos	5	advmod	5:advmod	_
4	счет	счет	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	_
5	идет	идти	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	на	на	ADP	_	_	8	case	8:case	_
7	тысячи	тысяча	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	8	nummod:gov	8:nummod:gov	_
8	долларов	доллар	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	5	obl	5:obl:на:acc	SpaceAfter=No
9	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod:gov	color:blue
1	Пряный	пряный	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	amod	3:amod	_
2	огуречный	огуречный	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	amod	3:amod	_
3	запах	запах	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
4	больше	много	NUM	_	NumType=Card	5	nummod:gov	5:nummod:gov	_
5	всего	все	PRON	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Tot	6	obl	6:obl	_
6	запомнился	запомниться	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	0:root	SpaceAfter=No
7	:	:	PUNCT	_	_	8	punct	6:punct	_
8	руки	рука	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	6	parataxis	6:parataxis	_
9	матери	мать	NOUN	_	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	8	nmod	8:nmod:gen	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	6:punct	_

~~~


