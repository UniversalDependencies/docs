---
layout: base
title:  'Statistics of expl in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `expl`

This relation is universal.

356 nodes (0%) are attached to their parents as `expl`.

335 instances of `expl` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.46910112359551.

The following 12 pairs of parts of speech are connected with `expl`: <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (174; 49% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (51; 14% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (37; 10% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (30; 8% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (20; 6% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (18; 5% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (11; 3% instances), <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (6; 2% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (5; 1% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="ru_syntagrus-pos-SYM.html">SYM</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-X.html">X</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 expl	color:blue
1	Ах	ах	INTJ	_	_	2	discourse	2:discourse	_
2	да	да	PART	_	_	10	parataxis	10:parataxis	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	2:punct	_
4	ведь	ведь	PART	_	_	5	advmod	5:advmod	_
5	Одесса	Одесса	PROPN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	10	nsubj	10:nsubj	_
6	-	-	PUNCT	_	_	10	punct	10:punct	_
7	это	это	PART	_	_	10	expl	10:expl	_
8	не	не	PART	_	Polarity=Neg	9	advmod	9:advmod	_
9	только	только	PART	_	_	10	advmod	10:advmod	_
10	море	море	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	12:punct	_
12	цыганка	цыганка	NOUN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	10	conj	0:root|10:conj	SpaceAfter=No
13	,	,	PUNCT	_	_	14	punct	14:punct	_
14	кукуруза	кукуруза	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	10	conj	0:root|10:conj	SpaceAfter=No
15	.	.	PUNCT	_	_	10	punct	10:punct	_~

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
4	вы	вы	PRON	_	Case=Nom|Number=Plur|Person=2	7	nsubj	7:nsubj	_
5	все	весь	DET	_	Case=Nom|Number=Plur	4	det	4:det	_
6	у	у	ADP	_	_	7	case	7:case	_
7	меня	я	PRON	_	Case=Gen|Number=Sing|Person=1	0	root	0:root	_
8	тут	тут	ADV	_	Degree=Pos	7	advmod	7:advmod	SpaceAfter=No
9	!	!	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
10	"	"	PUNCT	_	_	7	punct	7:punct	_~

~~~


