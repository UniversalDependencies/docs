---
layout: base
title:  'Statistics of nummod in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `nummod`

This relation is universal.

6 nodes (1%) are attached to their parents as `nummod`.

6 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `nummod`: <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-NUM.html">NUM</a></tt> (4; 67% instances), <tt><a href="tr_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_tuecl-pos-NUM.html">NUM</a></tt> (2; 33% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Deniz	Deniz	PROPN	_	Case=Nom|Number=Sing	7	nsubj	_	_
2	arkadaşının	arkadaş	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	nsubj	_	_
3	yaptığı	yap	VERB	_	Aspect=Perf|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Past|VerbForm=Part	4	acl	_	_
4	yemekten	yemek	NOUN	_	Case=Abl|Number=Sing	7	obl	_	_
5	iki	iki	NUM	_	NumType=Card	6	nummod	_	_
6	tabak	tabak	NOUN	_	Case=Nom|Number=Sing	7	obj	_	_
7	yedi	ye	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Sude	Sude	PROPN	_	Case=Nom|Number=Sing	6	nsubj	_	_
2	üç	üç	NUM	_	NumType=Card	3	nummod	_	_
3	saat	saat	ADV	_	Case=Nom	6	advmod	_	_
4	tir	i	AUX	_	Mood=Gen|Number=Sing|Person=3	3	cop	_	_
5	ofiste	ofis	NOUN	_	Case=Loc|Number=Sing	6	obl	_	_
6	yok	yok	ADJ	_	Polarity=Neg	0	root	_	_
7	muş	i	AUX	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	_
8	,	,	PUNCT	_	_	6	punct	_	_
9	Ayşe	Ayşe	PROPN	_	Case=Nom|Number=Sing	11	nsubj	_	_
10	de	de	ADV	_	_	9	advmod:emph	_	_
11	evde	ev	NOUN	_	Case=Loc|Number=Sing	6	parataxis	_	_
12	değil	değil	AUX	_	Case=Nom|Number=Sing|Polarity=Neg	11	aux	_	_
13	miş	i	AUX	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	11	cop	_	_
14	.	.	PUNCT	_	_	11	punct	_	_

~~~


