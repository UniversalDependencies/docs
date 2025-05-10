---
layout: base
title:  'Statistics of expl in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `expl`

This relation is universal.

1008 nodes (0%) are attached to their parents as `expl`.

986 instances of `expl` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.21825396825397.

The following 14 pairs of parts of speech are connected with `expl`: <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (700; 69% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (94; 9% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (63; 6% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (47; 5% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (30; 3% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (25; 2% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (20; 2% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (14; 1% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl	color:blue
1	Но	но	CCONJ	_	_	5	cc	5:cc	_
2	главное	главное	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubj	5:nsubj	_
3	-	-	PUNCT	_	_	2	punct	2:punct	_
4	это	это	PART	_	_	5	expl	5:expl	_
5	эффективность	эффективность	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_
6	государства	государство	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	5	nmod	5:nmod:gen	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 expl	color:blue
1	Но	но	CCONJ	_	_	6	cc	6:cc	_
2	это	это	PART	_	_	6	expl	6:expl	_
3	мы	мы	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	6:nsubj	_
4	опять	опять	ADV	_	Degree=Pos	6	advmod	6:advmod	_
5	сильно	сильно	ADV	_	Degree=Pos	6	advmod	6:advmod	_
6	забегаем	забегать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 expl	color:blue
1	"	"	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
2	Вот	вот	PART	_	_	7	advmod	7:advmod	_
3	это	это	PART	_	_	7	expl	7:expl	_
4	вы	вы	PRON	_	Case=Nom|Number=Plur|Person=2|PronType=Prs	7	nsubj	7:nsubj	_
5	все	весь	DET	_	Case=Nom|Number=Plur|PronType=Tot	4	det	4:det	_
6	у	у	ADP	_	_	7	case	7:case	_
7	меня	я	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	0	root	0:root	_
8	тут	тут	ADV	_	Degree=Pos|PronType=Dem	7	advmod	7:advmod	pos="ADVPRO"|SpaceAfter=No
9	!	!	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
10	"	"	PUNCT	_	_	7	punct	7:punct	_

~~~


