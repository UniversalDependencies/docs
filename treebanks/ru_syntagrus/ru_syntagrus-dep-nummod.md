---
layout: base
title:  'Statistics of nummod in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `nummod`

This relation is universal.
There are 2 language-specific subtypes of `nummod`: <tt><a href="ru_syntagrus-dep-nummod-entity.html">nummod:entity</a></tt>, <tt><a href="ru_syntagrus-dep-nummod-gov.html">nummod:gov</a></tt>.

12209 nodes (1%) are attached to their parents as `nummod`.

9332 instances of `nummod` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.64378736997297.

The following 18 pairs of parts of speech are connected with `nummod`: <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (9377; 77% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (1040; 9% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (981; 8% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (535; 4% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (127; 1% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (40; 0% instances), <tt><a href="ru_syntagrus-dep-_.html">_</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (34; 0% instances), <tt><a href="ru_syntagrus-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (25; 0% instances), <tt><a href="ru_syntagrus-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (20; 0% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="ru_syntagrus-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Всего	всего	ADV	_	Degree=Pos	3	advmod	3:advmod	_
2	-	-	PUNCT	_	_	1	punct	1:punct	_
3	440	440	NUM	_	_	4	nummod	4:nummod	_
4	человек	человек	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	4:punct	_
6	из	из	ADP	_	_	7	case	7:case	_
7	них	они	PRON	_	Case=Gen|Number=Plur|Person=3	11	advmod	11:advmod	_
8	-	-	PUNCT	_	_	7	punct	7:punct	_
9	160	160	NUM	_	_	11	nummod	11:nummod	_
10	иностранных	иностранный	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	11	amod	11:amod	_
11	восходителей	восходитель	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	4	conj	4:conj	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Длина	длина	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	_
2	острова	остров	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	1:nmod	_
3	составляла	составлять	VERB	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	14	14	NUM	_	_	3	nummod	3:nummod	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	4:punct	_
6	а	а	CCONJ	_	_	3	orphan	8.1:cc	_
7	ширина	ширина	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	orphan	8.1:nsubj	_
8	-	-	PUNCT	_	_	7	punct	7:punct	_
8.1	_	_	_	_	_	_	_	3:conj	_
9	5	5	NUM	_	_	10	nummod	10:nummod	_
10	километров	километр	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	3	orphan	8.1:nmod	SpaceAfter=No
11	"	"	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No
12	.	.	PUNCT	_	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nummod	color:blue
1	23	23	NUM	_	_	6	nummod	6:nummod	_
2	января	январь	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	1:nmod	_
3	2002	2002	NUM	_	_	4	nummod	4:nummod	_
4	года	год	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	2:nmod	_
5	не	не	PART	_	_	6	advmod	6:advmod	_
6	стало	стать	VERB	_	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	Пьера	пьер	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
8	Бурдье	бурдье	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	7	flat:name	7:flat:name	SpaceAfter=No
9	…	…	PUNCT	_	_	8	punct	8:punct	_

~~~


