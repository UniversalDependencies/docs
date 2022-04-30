---
layout: base
title:  'Statistics of nummod in UD_Turkish-Kenet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Kenet: Relations: `nummod`

This relation is universal.

1796 nodes (1%) are attached to their parents as `nummod`.

1791 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12639198218263.

The following 15 pairs of parts of speech are connected with `nummod`: <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt> (1241; 69% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt> (233; 13% instances), <tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt> (115; 6% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (51; 3% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt> (50; 3% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt> (40; 2% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (31; 2% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (10; 1% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (10; 1% instances), <tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="tr_kenet-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="tr_kenet-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="tr_kenet-pos-DET.html">DET</a></tt>-<tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Bu	bu	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	arada	ara	NOUN	_	Case=Loc|Number=Sing|Person=3	10	obl	_	_
3	üç	üç	NUM	_	NumType=Card	4	compound	_	_
4	beş	beş	NUM	_	NumType=Card	5	nummod	_	_
5	yazarın	yazar	NOUN	_	Case=Gen|Number=Sing|Person=3	6	nmod	_	_
6	üretimi	üretim	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	10	nsubj	_	_
7	de	de	CCONJ	_	_	6	advmod	_	_
8	araya	ara	NOUN	_	Case=Dat|Number=Sing|Person=3	10	obl	_	_
9	kaynayıp	kayna	ADV	_	_	10	compound	_	_
10	gidiyor	git	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Kimse	kimse	PRON	_	PronType=Ind	9	nsubj	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	dört	dört	NUM	_	NumType=Card	4	nummod	_	_
4	çocuklu	çocuklu	ADJ	_	_	6	amod	_	_
5	bir	bir	DET	_	Definite=Ind|PronType=Art	6	det	_	_
6	aileye	aile	NOUN	_	Case=Dat|Number=Sing|Person=3	8	obl	_	_
7	ev	ev	NOUN	_	Case=Nom|Number=Sing|Person=3	8	obj	_	_
8	vermek	ver	NOUN	_	Case=Nom|Number=Sing|Person=3	9	xcomp	_	_
9	istememiş	iste	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	İki	iki	NUM	_	NumType=Card	2	nummod	_	_
2	üç	üç	NUM	_	NumType=Card	3	nummod	_	_
3	günlük	gün	ADJ	_	_	4	amod	_	_
4	mesaiyle	mesai	NOUN	_	Case=Ins|Number=Sing|Person=3	9	obl	_	_
5	bir	bir	DET	_	Definite=Ind|PronType=Art	6	det	_	_
6	sürü	sürü	NOUN	_	Case=Nom|Number=Sing|Person=3	8	amod	_	_
7	karanlık	karanlık	ADJ	_	_	8	amod	_	_
8	noktayı	nokta	NOUN	_	Case=Acc|Number=Sing|Person=3	9	obj	_	_
9	çözümledin	çözümle	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


