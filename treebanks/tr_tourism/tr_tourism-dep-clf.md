---
layout: base
title:  'Statistics of clf in UD_Turkish-Tourism'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Tourism: Relations: `clf`

This relation is universal.

4 nodes (0%) are attached to their parents as `clf`.

4 instances of `clf` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `clf`: <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt> (3; 75% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 clf	color:blue
1	GÜZEL	güzel	ADJ	_	_	3	amod	_	_
2	BİR	bir	DET	_	Definite=Ind|PronType=Art	3	det	_	_
3	OTEL	otel	NOUN	_	Case=Nom|Number=Sing|Person=3	5	parataxis	_	_
4	MEMNUN	memnun	ADJ	_	_	5	clf	_	_
5	KALDIM	kal	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 clf	color:blue
1	HER	her	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	TÜRLÜ	türlü	ADJ	_	_	3	amod	_	_
3	İSTEĞİMİZE	istek	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	9	obl	_	_
4	EN	en	ADV	_	Degree=Sup	5	advmod	_	_
5	İYİ	iyi	ADJ	_	_	6	amod	_	_
6	ŞEKİLDE	şekil	NOUN	_	Case=Loc|Number=Sing|Person=3	8	obl	_	_
7	CEVAP	cevap	NOUN	_	Case=Nom|Number=Sing|Person=3	8	clf	_	_
8	VERMEYE	ver	NOUN	_	Case=Dat|Number=Sing|Person=3	9	obj	_	_
9	ÇALIŞTILAR	çalış	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


