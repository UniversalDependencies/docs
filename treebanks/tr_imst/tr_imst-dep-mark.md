---
layout: base
title:  'Statistics of mark in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `mark`

This relation is universal.

76 nodes (0%) are attached to their parents as `mark`.

73 instances of `mark` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.28947368421053.

The following 7 pairs of parts of speech are connected with `mark`: <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (35; 46% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (16; 21% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (11; 14% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (6; 8% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (5; 7% instances), <tt><a href="tr_imst-pos-DET.html">DET</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (2; 3% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mark	color:blue
1	Siz	siz	PRON	Pers	Case=Nom|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	_
2	iyi	iyi	ADJ	Adj	_	3	amod	_	_
3	ettiniz	et	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Past	5	nmod	_	_
4	de	de	CCONJ	Conj	_	3	mark	_	_
5	erken	erken	ADV	Adverb	_	6	advmod	_	_
6	geldiniz	gel	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mark	color:blue
1	Bir	bir	DET	ANum	Definite=Ind|PronType=Art	2	det	_	_
2	tane	tane	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	obj	_	_
3	de	de	CCONJ	Conj	_	2	mark	_	_
4	ona	o	PRON	Pers	Case=Dat|Number=Sing|Person=3|PronType=Prs	5	obl	_	_
5	uzattı	uza	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|Voice=Cau	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mark	color:blue
1	Belli	belli	ADJ	Adj	_	8	amod	_	_
2	ki	ki	CCONJ	Conj	_	1	mark	_	_
3	kız	kız	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	8	nsubj	_	_
4	dört	dört	NUM	NNum	Case=Nom|Number=Sing|NumType=Card|Person=3	8	obj	_	_
5	gününü	gün	NOUN	Noun	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	compound	_	_
6	doğru	doğru	ADJ	Adj	_	8	amod	_	_
7	dürüst	dürüst	ADJ	Adj	_	6	compound:redup	_	_
8	geçirmişti	geçir	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pqp	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


