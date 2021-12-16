---
layout: base
title:  'Statistics of nummod in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `nummod`

This relation is universal.
There are 2 language-specific subtypes of `nummod`: <tt><a href="ru_syntagrus-dep-nummod-entity.html">nummod:entity</a></tt>, <tt><a href="ru_syntagrus-dep-nummod-gov.html">nummod:gov</a></tt>.

13439 nodes (1%) are attached to their parents as `nummod`.

10469 instances of `nummod` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.63851477044423.

The following 13 pairs of parts of speech are connected with `nummod`: <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (9651; 72% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (1080; 8% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (1029; 8% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (951; 7% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (467; 3% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (109; 1% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (73; 1% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (37; 0% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (25; 0% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (11; 0% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Всего	всего	ADV	_	Degree=Pos	3	advmod	3:advmod	_
2	-	-	PUNCT	_	_	1	punct	1:punct	_
3	440	440	NUM	_	NumType=Card	4	nummod	4:nummod	_
4	человек	человек	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	_	_	11	punct	11:punct	_
6	из	из	ADP	_	_	7	case	7:case	_
7	них	они	PRON	_	Case=Gen|Number=Plur|Person=3|PronType=Prs	11	nmod	11:nmod:из:gen	_
8	-	-	PUNCT	_	_	7	punct	7:punct	_
9	160	160	NUM	_	NumType=Card	11	nummod	11:nummod	_
10	иностранных	иностранный	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	11	amod	11:amod	_
11	восходителей	восходитель	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	4	conj	0:root|4:conj	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	-	-	PUNCT	_	_	4	punct	4:punct	_
2	Кратер	кратер	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	_
3	на	на	ADP	_	_	4	case	4:case	_
4	Луне	Луна	PROPN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	0	root	0:root	_
5	(	(	PUNCT	_	_	8	punct	8:punct	SpaceAfter=No
6	-	-	PUNCT	_	_	8	punct	8:punct	SpaceAfter=No
7	63	63	NUM	_	NumType=Card	8	nummod	8:nummod	SpaceAfter=No
8	°	°	SYM	_	_	4	parataxis	4:parataxis	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	11:punct	_
10	+10	+10	NUM	_	NumType=Card	11	nummod	11:nummod	SpaceAfter=No
11	°	°	SYM	_	_	8	conj	4:parataxis|8:conj	SpaceAfter=No
12	)	)	PUNCT	_	_	8	punct	8:punct	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nummod	color:blue
1	23	23	NUM	_	NumType=Card	6	nummod	6:nummod	_
2	января	январь	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	flat	1:flat	_
3	2002	2002	NUM	_	NumType=Card	4	nummod	4:nummod	_
4	года	год	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	1:nmod:gen	_
5	не	не	PART	_	_	6	advmod	6:advmod	_
6	стало	стать	VERB	_	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	Пьера	Пьер	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
8	Бурдье	Бурдье	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	7	flat:name	7:flat:name	SpaceAfter=No
9	…	…	PUNCT	_	_	6	punct	6:punct	_

~~~


