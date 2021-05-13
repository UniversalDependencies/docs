---
layout: base
title:  'Statistics of clf in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Relations: `clf`

This relation is universal.

35 nodes (0%) are attached to their parents as `clf`.

35 instances of `clf` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 8 pairs of parts of speech are connected with `clf`: <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (19; 54% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (6; 17% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (3; 9% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (3; 9% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 clf	color:blue
1	Ortega	ortega	PROPN	_	Case=Nom|Number=Sing	8	nsubj	_	_
2	19	19	NUM	_	NumType=Card	3	nummod	_	_
3	aylık	aylık	NOUN	_	Case=Nom|Number=Sing|Person=3	4	amod	_	_
4	ateşkesi	ateşkes	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	obj	_	_
5	sona	son	NOUN	_	Case=Dat|Number=Sing|Person=3	6	clf	_	_
6	erdirme	er	NOUN	_	Case=Nom|Number=Sing|Person=3	7	nmod	_	_
7	tehdidi	tehdit	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	ccomp	_	_
8	savurdu	savur	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 clf	color:blue
1	Ayrıca	ayrıca	ADV	_	_	11	mark	_	_
2	yaralanan	yarala	ADJ	_	_	3	acl	_	_
3	24	24	NUM	_	NumType=Card	4	nummod	_	_
4	yolcunun	yolcu	NOUN	_	Case=Gen|Number=Sing|Person=3	5	nmod	_	_
5	her	her	DET	_	Definite=Def	6	det	_	_
6	biri	bir	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	11	obl	_	_
7	için	için	ADP	_	_	6	case	_	_
8	20	20	NUM	_	NumType=Card	9	nummod	_	_
9	yıl	yıl	NOUN	_	Case=Nom|Number=Sing|Person=3	11	obj	_	_
10	ceza	ceza	NOUN	_	Case=Nom|Number=Sing|Person=3	11	clf	_	_
11	aldı	al	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 clf	color:blue
1	Tahmin	tahmin	NOUN	_	Case=Nom|Number=Sing|Person=3	2	clf	_	_
2	edilen	et	ADJ	_	_	3	acl	_	_
3	hacim	hacim	NOUN	_	Case=Nom|Number=Sing|Person=3	10	nsubj	_	_
4	,	,	PUNCT	_	_	10	punct	_	_
5	orta	orta	ADJ	_	_	6	amod	_	_
6	dereceli	derece	ADJ	_	_	10	amod	_	_
7	bir	bir	DET	_	Definite=Ind	10	det	_	_
8	3.5	3.5	NUM	_	NumType=Card	9	nummod	_	_
9	milyon	milyon	NUM	_	NumType=Card	10	nummod	_	_
10	onstur	ons	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


