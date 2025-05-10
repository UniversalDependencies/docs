---
layout: base
title:  'Statistics of nummod:gov in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-nummod.html">nummod</a></tt>.
There are also 1 other language-specific subtypes of `nummod`: <tt><a href="ru_syntagrus-dep-nummod-entity.html">nummod:entity</a></tt>.

3619 nodes (0%) are attached to their parents as `nummod:gov`.

3464 instances of `nummod:gov` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3360044211108.

The following 14 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (3348; 93% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (154; 4% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (38; 1% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (30; 1% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (12; 0% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (11; 0% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (10; 0% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nummod:gov	color:blue
1	Оба	оба	NUM	_	Case=Nom|Gender=Masc|NumForm=Word|NumType=Card	3	nummod:gov	3:nummod:gov	_
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
2	теперь	теперь	ADV	_	Degree=Pos|PronType=Dem	5	advmod	5:advmod	pos="ADVPRO"|_
3	уже	уже	ADV	_	Degree=Pos	5	advmod	5:advmod	_
4	счет	счет	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	_
5	идет	идти	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	на	на	ADP	_	_	8	case	8:case	_
7	тысячи	тысяча	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	8	nummod:gov	8:nummod:gov	_
8	долларов	доллар	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	5	obl	5:obl:на:acc	SpaceAfter=No
9	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nummod:gov	color:blue
1	Сколько	сколько	NUM	_	Case=Nom|NumForm=Word|NumType=Card	4	nummod:gov	4:nummod:gov	_
2	среди	среди	ADP	_	_	3	case	3:case	_
3	них	они	PRON	_	Case=Gen|Number=Plur|Person=3|PronType=Prs	4	orphan	3.1:obl:среди:gen	_
4	интернет-зависимых	интернет-зависимый	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	0	root	0:root	SpaceAfter=No
5	?	?	PUNCT	_	_	4	punct	4:punct	_

~~~


