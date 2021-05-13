---
layout: base
title:  'Statistics of clf in UD_Turkish-Kenet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Kenet: Relations: `clf`

This relation is universal.

24 nodes (0%) are attached to their parents as `clf`.

24 instances of `clf` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 11 pairs of parts of speech are connected with `clf`: <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (7; 29% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (5; 21% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt> (2; 8% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 clf	color:blue
1	Gericiliği	gericilik	NOUN	_	Case=Acc|Number=Sing|Person=3	8	obj	_	_
2	,	,	PUNCT	_	_	3	punct	_	_
3	insanlara	insan	NOUN	_	Case=Dat|Number=Plur|Person=3	5	obl	_	_
4	kara	kara	NOUN	_	Case=Nom|Number=Sing|Person=3	5	clf	_	_
5	sürme	sür	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nmod	_	_
6	suçlamalarını	suçla	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	1	conj	_	_
7	kabul	kabul	NOUN	_	Case=Nom|Number=Sing|Person=3	8	compound	_	_
8	etmedi	et	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 clf	color:blue
1	İsli	isli	ADJ	_	_	2	advmod	_	_
2	tavan	tavan	NOUN	_	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
3	bel	bel	NOUN	_	Case=Nom|Number=Sing|Person=3	4	clf	_	_
4	vermiş	ver	VERB	_	Aspect=Perf|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	8	parataxis	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	duvarları	duvar	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	8	nsubj	_	_
7	içeri	içeri	NOUN	_	Case=Nom|Number=Sing|Person=3	8	obl	_	_
8	kamburlaşmıştı	kamburlaş	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 clf	color:blue
1	O	o	DET	_	Definite=Def	2	det	_	_
2	gün	gün	NOUN	_	Case=Nom|Number=Sing|Person=3	15	obl	_	_
3	Atatürk'te	atatürk	PROPN	_	Case=Loc|Number=Sing	15	obl	_	_
4	adaleti	adalet	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	obj	_	_
5	temsil	temsil	NOUN	_	Case=Nom|Number=Sing|Person=3	6	clf	_	_
6	eden	et	ADJ	_	_	8	advcl	_	_
7	alegorik	alegorik	ADJ	_	_	8	amod	_	_
8	heykellerin	heykel	NOUN	_	Case=Gen|Number=Plur|Person=3	12	nmod	_	_
9	sert	sert	ADJ	_	_	12	amod	_	_
10	ve	ve	CCONJ	_	_	11	cc	_	_
11	gamlı	gamlı	ADJ	_	_	9	conj	_	_
12	durgunluğundan	durgunluk	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	15	obl	_	_
13	bir	bir	DET	_	Definite=Ind	14	det	_	_
14	şey	şey	NOUN	_	Case=Nom|Number=Sing|Person=3	15	nsubj	_	_
15	vardı	var	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
16	.	.	PUNCT	_	_	15	punct	_	_

~~~


