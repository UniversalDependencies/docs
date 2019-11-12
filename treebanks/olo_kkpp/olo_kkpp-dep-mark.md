---
layout: base
title:  'Statistics of mark in UD_Livvi-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Livvi-KKPP: Relations: `mark`

This relation is universal.

19 nodes (1%) are attached to their parents as `mark`.

19 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 4 pairs of parts of speech are connected with `mark`: <tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="olo_kkpp-pos-SCONJ.html">SCONJ</a></tt> (11; 58% instances), <tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="olo_kkpp-pos-SCONJ.html">SCONJ</a></tt> (5; 26% instances), <tt><a href="olo_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="olo_kkpp-pos-SCONJ.html">SCONJ</a></tt> (2; 11% instances), <tt><a href="olo_kkpp-pos-PRON.html">PRON</a></tt>-<tt><a href="olo_kkpp-pos-SCONJ.html">SCONJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
1	Smietin	Smiettie	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	ku	ku	SCONJ	SCONJ	_	4	mark	_	_
4	vihmuu	vihmuo	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	SpaceAfter=No
5	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 mark	color:blue
1	Sit	sit	ADV	ADV	_	5	advmod	_	_
2	taaste	taaste	ADV	X	_	5	advmod	_	_
3	tämä	tämä	PRON	PRON	Case=Nom|Number=Sing|PronType=Dem	4	det	_	_
4	briha	briha	NOUN	NOUN	Case=Nom|Number=Sing	5	nsubj	_	_
5	kuuloitti	kuuloittua	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	:	:	PUNCT	PUNCT	_	12	punct	_	_
7	"	"	PUNCT	PUNCT	_	12	punct	_	SpaceAfter=No
8	Konzu	Konzu	SCONJ	SCONJ	_	12	mark	_	_
9	minun	minä	PRON	PRON	Case=Gen|Number=Sing|Person=1|PronType=Prs	10	nmod:poss	_	_
10	taatto	taatto	NOUN	X	Case=Nom|Number=Sing	12	nsubj:cop	_	_
11	oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	cop	_	_
12	bohattu	bohattu	NOUN	NOUN	Case=Nom|Number=Sing	5	parataxis	_	SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	16	punct	_	_
14	sit	sit	ADV	ADV	_	16	advmod	_	_
15	saaril	saari	NOUN	X	Case=All|Number=Sing	16	obl	_	_
16	andoi	andua	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	conj	_	_
17	kolme	kolme	NUM	NUM	Case=Nom|Number=Sing|NumType=Card	19	nummod	_	_
18	puččii	pučči	X	X	Case=Par|Number=Plur	19	nmod	_	_
19	d’engaa	d’engaa	X	X	Case=Par|Number=Plur	16	obj	_	SpaceAfter=No
20	.	.	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 mark	color:blue
1	Häi	häi	PRON	PRON	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	saneloo	sanella	VERB	X	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	:	:	PUNCT	PUNCT	_	9	punct	_	_
4	"	"	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No
5	Konzu	Konzu	SCONJ	SCONJ	_	9	mark	_	_
6	minun	minä	PRON	PRON	Case=Gen|Number=Sing|Person=1|PronType=Prs	7	nmod:poss	_	_
7	taatto	taatto	NOUN	X	Case=Nom|Number=Sing	9	nsubj:cop	_	_
8	oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	_
9	bohattu	bohattu	ADJ	ADJ	Case=Nom|Number=Sing	2	parataxis	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	15	punct	_	_
11	kolme	kolme	NUM	NUM	Case=Nom|Number=Sing|NumType=Card	12	nummod	_	_
12	virstaa	virsta	NOUN	X	Case=Par|Number=Sing	15	obj	_	_
13	oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	14	cop	_	_
14	kodi	kodi	NOUN	NOUN	Case=Nom|Number=Sing	15	nsubj:cop	_	_
15	piduhuttu	piduhus	NOUN	NOUN	Case=Par|Number=Sing	9	parataxis	_	SpaceAfter=No
16	,	,	PUNCT	PUNCT	_	19	punct	_	_
17	a	a	CCONJ	CCONJ	_	18	cc	_	_
18	virstaa	virsta	NOUN	X	Case=Par|Number=Sing	19	orphan	_	_
19	levevytty	levevys	NOUN	X	Case=Par|Number=Sing	15	conj	_	SpaceAfter=No
20	;	;	PUNCT	PUNCT	_	22	punct	_	_
21	kezäkse	kezä	NOUN	NOUN	Case=Tra|Number=Sing	22	obl	_	_
22	kraassi	kraassie	VERB	X	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	15	parataxis	_	_
23	koin	kodi	NOUN	NOUN	Case=Gen|Number=Sing	22	obj	_	_
24	mustal	mustu	ADJ	ADJ	Case=Ade|Number=Sing	25	amod	_	_
25	kraaskal	kraaska	NOUN	X	Case=Ade|Number=Sing	22	obl	_	SpaceAfter=No
26	,	,	PUNCT	PUNCT	_	24	punct	_	_
27	a	a	CCONJ	CCONJ	_	28	cc	_	_
28	talvekse	talvi	NOUN	NOUN	Case=Tra|Number=Sing	29	orphan	_	_
29	valgiel	valgei	ADJ	ADJ	Case=Ade|Number=Sing	24	conj	_	SpaceAfter=No
30	.	.	PUNCT	PUNCT	_	22	punct	_	SpaceAfter=No

~~~


