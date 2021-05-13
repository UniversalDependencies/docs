---
layout: base
title:  'Statistics of nummod in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `nummod`

This relation is universal.

268 nodes (2%) are attached to their parents as `nummod`.

267 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23880597014925.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (226; 84% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (19; 7% instances), <tt><a href="tr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (14; 5% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-X.html">X</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Maksimum	Maksimum	ADJ	JJ	Number=Sing	2	amod	_	_
2	miktar	miktar	NOUN	NN	Case=Nom|Number=Sing	6	nsubj	_	_
3	kişi	kişi	NOUN	NN	Number=Sing	4	nmod:poss	_	_
4	başı	baş	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	6	amod	_	_
5	5.000	5.000	NUM	CD	Number=Sing	6	nummod	_	_
6	dolar	do	NOUN	NN	Number=Sing	0	root	_	_
7	dır	i	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	6	cop	_	_
8	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	İki	iki	NUM	CD	Number=Sing|NumType=Ord	2	nummod	_	_
2	minareli	_	ADJ	JJ	Number=Sing	5	amod	_	_
3	küçük	küçük	ADJ	JJ	Number=Sing	5	amod	_	_
4	bir	bir	DET	DT	Definite=Ind|Polarity=Pos	5	det	_	_
5	kasaba	kasaba	NOUN	NN	Number=Sing	8	nsubj	_	_
6	yanımızdan	yanı	NOUN	NN	Case=Abl|Number=Sing	8	obl	_	_
7	geçip	geç	ADV	CRB	_	8	advcl	_	_
8	gidiyor	git	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Tuna	T	PROPN	PROPN	Number=Sing	3	nmod:poss	_	Proper=True
2	Nehri	nehir	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	1	appos	_	Proper=True
3	üzerinde	üzer	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	_
4	taşınan	taşı	ADJ	VJ	Number=Sing|Polarity=Pos	5	acl	_	_
5	malların	mallar	NOUN	NN	Case=Gen|Number=Plur	6	nmod:poss	_	_
6	miktarı	miktar	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	_
7	1987'de	1987	NOUN	NN	Case=Loc|Number=Sing	12	obl	_	_
8	yaklaşık	yaklaşık	ADJ	JJ	Number=Sing	11	amod	_	_
9	100	100	NUM	CD	Number=Sing	10	nummod	_	_
10	milyon	milyon	NUM	CD	Number=Sing	11	nummod	_	_
11	tona	ton	NOUN	NN	Case=Dat|Number=Sing	12	iobj	_	_
12	yükselmiştir	yüksel	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


