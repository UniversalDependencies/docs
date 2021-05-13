---
layout: base
title:  'Statistics of reparandum in UD_Turkish-Kenet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Kenet: Relations: `reparandum`

This relation is universal.

4 nodes (0%) are attached to their parents as `reparandum`.

2 instances of `reparandum` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 2 pairs of parts of speech are connected with `reparandum`: <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (3; 75% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 reparandum	color:blue
1	İki	iki	NUM	_	NumType=Card	2	nummod	_	_
2	cam	cam	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nmod	_	_
3	silici	sil	ADJ	_	_	4	amod	_	_
4	demir	demir	NOUN	_	Case=Nom|Number=Sing|Person=3	12	nsubj	_	_
5	şimdi	şimdi	ADV	_	_	12	advmod	_	_
6	bir	bir	ADV	_	_	8	amod	_	_
7	metronom	metronom	NOUN	_	Case=Nom|Number=Sing|Person=3	8	nmod	_	_
8	temposuyla	tempo	NOUN	_	Case=Ins|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	12	obl	_	_
9	sağa	sağ	NOUN	_	Case=Dat|Number=Sing|Person=3	11	obl	_	_
10	sola	sol	NOUN	_	Case=Dat|Number=Sing|Person=3	9	reparandum	_	_
11	gitmeye	git	NOUN	_	Case=Dat|Number=Sing|Person=3	12	ccomp	_	_
12	başladılar	başla	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
13	.	.	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 7 reparandum	color:blue
1	Bütün	bütün	ADJ	_	_	2	nmod	_	_
2	günlerimiz	günle	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	7	obl	_	_
3	için	için	ADP	_	_	2	case	_	_
4	kendimize	kendi	PRON	_	Reflex=Yes	7	obl	_	_
5	bir	bir	DET	_	Definite=Ind	6	det	_	_
6	yol	yol	NOUN	_	Case=Nom|Number=Sing|Person=3	7	obj	_	_
7	çizer	çizer	NOUN	_	Case=Nom|Number=Sing|Person=3	15	reparandum	_	_
8	,	,	PUNCT	_	_	15	punct	_	_
9	sonra	sonra	ADV	_	_	15	advmod	_	_
10	her	her	DET	_	Definite=Def	11	det	_	_
11	gün	gün	NOUN	_	Case=Nom|Number=Sing|Person=3	15	obl	_	_
12	bunun	bu	PRON	_	PronType=Dem	13	nmod	_	_
13	aksine	aksine	ADV	_	_	15	obj	_	_
14	hareket	hareket	NOUN	_	Case=Nom|Number=Sing|Person=3	15	compound	_	_
15	ederiz	et	VERB	_	Aspect=Hab|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
16	.	.	PUNCT	_	_	15	punct	_	_

~~~


