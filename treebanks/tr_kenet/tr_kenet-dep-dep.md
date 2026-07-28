---
layout: base
title:  'Statistics of dep in UD_Turkish-Kenet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Kenet: Relations: `dep`

This relation is universal.

53 nodes (0%) are attached to their parents as `dep`.

43 instances of `dep` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.20754716981132.

The following 12 pairs of parts of speech are connected with `dep`: <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-DET.html">DET</a></tt> (33; 62% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-DET.html">DET</a></tt> (3; 6% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (3; 6% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (3; 6% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_kenet-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="tr_kenet-pos-X.html">X</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep	color:blue
1	O	o	DET	_	Definite=Def|PronType=Dem	2	dep	_	_
2	günden	gün	NOUN	_	Case=Abl|Number=Sing	8	obl	_	_
3	sonra	sonra	ADP	_	_	2	case	_	_
4	Canan'ın	canan	PROPN	_	Case=Gen|Number=Sing	7	nmod	_	_
5	uzun	uzun	ADJ	_	_	6	amod	_	_
6	müddet	müddet	NOUN	_	Case=Nom|Number=Sing	8	nmod	_	_
7	neşesi	neşe	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nsubj	_	_
8	kaçtı	kaç	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 dep	color:blue
1	Zincirlerin	zincir	NOUN	_	Case=Gen|Number=Plur	2	nmod	_	_
2	ucunda	uç	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obl	_	_
3	da	da	CCONJ	_	_	2	cc	_	_
4	bir	bir	DET	_	Definite=Ind|PronType=Art	5	dep	_	_
5	saçaklı	saçaklı	ADJ	_	_	6	amod	_	_
6	süs	süs	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
7	,	,	PUNCT	_	_	6	punct	_	_
8	iç	iç	NOUN	_	Case=Nom|Number=Sing	9	compound	_	_
9	içe	iç	NOUN	_	Case=Dat|Number=Sing	11	amod	_	_
10	birkaç	birkaç	DET	_	Definite=Ind|PronType=Ind	11	det	_	_
11	halka	halk	NOUN	_	Case=Dat|Number=Sing	6	conj	_	_
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dep	color:blue
1	Bu	bu	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	3	dep	_	_
2	kirli	kirli	ADJ	_	_	3	amod	_	_
3	ilişkiyi	ilişki	NOUN	_	Case=Acc|Number=Sing	9	obj	_	_
4	gözdağlarıyla	gözdağ	NOUN	_	Case=Ins|Number=Plur|Number[psor]=Plur|Person[psor]=3	9	obl	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	gerçeği	gerçek	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obj	_	_
7	söyleme	söyle	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	8	nmod	_	_
8	korkutmacalarıyla	korkutmaca	ADJ	_	Case=Ins|Number=Plur|Number[psor]=Sing|Person[psor]=3	4	conj	_	_
9	sürdürüyordu	sürdür	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


