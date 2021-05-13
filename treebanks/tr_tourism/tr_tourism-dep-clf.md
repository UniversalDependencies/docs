---
layout: base
title:  'Statistics of clf in UD_Turkish-Tourism'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Tourism: Relations: `clf`

This relation is universal.

6 nodes (0%) are attached to their parents as `clf`.

6 instances of `clf` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `clf`: <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt> (4; 67% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt> (1; 17% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 clf	color:blue
1	ÇOK	çok	ADV	_	_	3	advmod	_	_
2	MEMNUN	memnun	ADJ	_	_	3	clf	_	_
3	KALDIM	kal	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	7	parataxis	_	_
4	MÜSAİT	müsait	ADJ	_	_	7	parataxis	_	_
5	DEĞİLİM	değil	AUX	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	4	aux	_	_
6	ANKETE	anket	NOUN	_	Case=Dat|Number=Sing|Person=3	7	obl	_	_
7	KATILAMAYACAĞIM	katıl	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Fut|VerbForm=Fin	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 clf	color:blue
1	ODALARDAN	oda	NOUN	_	Case=Abl|Number=Plur|Person=3	2	list	_	_
2	YEMEKLERDEN	yemek	NOUN	_	Case=Abl|Number=Plur|Person=3	6	obj	_	_
3	VE	ve	CCONJ	_	_	4	cc	_	_
4	HİZMETTEN	hizmet	NOUN	_	Case=Abl|Number=Sing|Person=3	2	conj	_	_
5	MEMNUN	memnun	ADJ	_	_	6	clf	_	_
6	KALMADIĞIM	kal	ADJ	_	_	9	parataxis	_	_
7	İÇİN	için	ADP	_	_	6	mark	_	_
8	TAVSİYE	tavsiye	NOUN	_	Case=Nom|Number=Sing|Person=3	9	compound	_	_
9	ETMEM	et	VERB	_	Aspect=Hab|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 clf	color:blue
1	HER	her	DET	_	Definite=Def	2	det	_	_
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


