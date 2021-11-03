---
layout: base
title:  'Statistics of dep in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `dep`

This relation is universal.

5 nodes (0%) are attached to their parents as `dep`.

4 instances of `dep` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.4.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (3; 60% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (1; 20% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 dep	color:blue
1	Собственно	собственно	ADV	_	Degree=Pos	8	parataxis	8:parataxis	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	1:punct	_
3	это	это	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	8	nsubj	8:nsubj	_
4	была	быть	AUX	_	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
5	и	и	CCONJ	_	_	6	cc	6:cc	_
6	остается	оставаться	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	8	dep	8:conj	_
7	главная	главный	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	amod	8:amod	_
8	необычность	необычность	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	0:root|6:nsubj	_
9	Одессы	Одесса	PROPN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	8:nmod:gen	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	8:punct	_~

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 dep	color:blue
1	Однако	однако	ADV	_	Degree=Pos	7	advmod	7:advmod	_
2	кое	кое	PART	_	_	4	dep	4:dep	_
3	в	в	ADP	_	_	4	case	4:case	_
4	чем	что	PRON	_	Case=Loc|PronType=Int,Rel	7	obl	7:obl:в:loc	_
5	мы	мы	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	7:nsubj	_
6	серьезно	серьезно	ADV	_	Degree=Pos	7	advmod	7:advmod	_
7	отставали	отставать	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	от	от	ADP	_	_	9	case	9:case	_
9	Запада	Запад	PROPN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	obl	7:obl:от:gen	_
10	-	-	PUNCT	_	_	14	punct	14:punct	_
11	прежде	прежде	ADP	_	_	14	advmod	14:advmod	_
12	всего	все	PRON	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Tot	11	fixed	11:fixed	_
13	в	в	ADP	_	_	14	case	14:case	_
14	области	область	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	7	parataxis	7:parataxis	_
15	микроэлектроники	микроэлектроника	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	14	nmod	14:nmod:gen	_
16	и	и	CCONJ	_	_	18	cc	18:cc	_
17	компьютерных	компьютерный	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	18	amod	18:amod	_
18	технологий	технология	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	15	conj	14:nmod:gen|15:conj	SpaceAfter=No
19	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 7 dep	color:blue
1	А	а	CCONJ	_	_	4	cc	4:cc	_
2	также	также	PART	_	_	1	fixed	1:fixed	_
3	к	к	ADP	_	_	4	case	4:case	_
4	тому	то	PRON	_	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	_	_	21	punct	21:punct	_
6	что	что	SCONJ	_	_	21	mark	21:mark	_
7	страны	страна	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	21	dep	15:obl:в:loc|21:dep	SpaceAfter=No
8	,	,	PUNCT	_	_	15	punct	15:punct	_
9	в	в	ADP	_	_	10	case	10:case	_
10	которых	который	PRON	_	Case=Loc|Number=Plur	15	obl	7:ref	_
11	общественное	общественный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	12	amod	12:amod	_
12	мнение	мнение	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	15	nsubj	15:nsubj	_
13	было	быть	AUX	_	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	15	cop	15:cop	_
14	против	против	ADP	_	_	15	case	15:case	_
15	вхождения	вхождение	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	7	acl:relcl	7:acl:relcl	_
16	в	в	ADP	_	_	17	case	17:case	_
17	НАТО	НАТО	PROPN	_	Abbr=Yes	15	nmod	15:nmod:в	SpaceAfter=No
18	,	,	PUNCT	_	_	15	punct	15:punct	_
19	оно	оно	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3	21	nsubj	21:nsubj	_
20	сильно	сильно	ADV	_	Degree=Pos	21	advmod	21:advmod	_
21	изменилось	измениться	VERB	_	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	4	acl	4:acl:что	SpaceAfter=No
22	.	.	PUNCT	_	_	4	punct	4:punct	_~

~~~


