---
layout: base
title:  'Statistics of dep in UD_Turkish-Tourism'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Tourism: Relations: `dep`

This relation is universal.

65 nodes (0%) are attached to their parents as `dep`.

38 instances of `dep` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.30769230769231.

The following 14 pairs of parts of speech are connected with `dep`: <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (19; 29% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (11; 17% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-DET.html">DET</a></tt> (10; 15% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-DET.html">DET</a></tt> (9; 14% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (4; 6% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="tr_tourism-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_tourism-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="tr_tourism-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dep	color:blue
1	Konumu	konum	NOUN	_	Case=Acc|Number=Sing	2	nsubj	_	_
2	güzeldi	güzel	ADJ	_	Aspect=Perf|Number=Sing|Person=3	0	root	_	_
3	personelleri	personel	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	2	dep	_	_
4	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 dep	color:blue
1	Bundan	bu	PRON	_	Case=Abl|Number=Sing|Person=3|PronType=Dem	2	nmod	_	_
2	iyisi	iyi	ADJ	_	_	3	nsubj	_	_
3	olamaz	ol	VERB	_	Evident=Fh|Mood=GenPot|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	parataxis	_	_
4	odaydı	oda	NOUN	_	Aspect=Perf|Number=Sing|Person=3	7	dep	_	_
5	mükemmel	mükemmel	ADJ	_	_	7	amod	_	_
6	bir	bir	DET	_	Definite=Ind|PronType=Art	7	det	_	_
7	odaydı	oda	NOUN	_	Aspect=Perf|Number=Sing|Person=3	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 dep	color:blue
1	Ailecek	ailecek	ADV	_	_	6	obl	_	_
2	çok	çok	ADV	_	_	3	advmod	_	_
3	güzel	güzel	ADJ	_	_	5	amod	_	_
4	bir	bir	DET	_	Definite=Ind|PronType=Art	5	dep	_	_
5	tatil	tatil	NOUN	_	Case=Nom|Number=Sing	6	obj	_	_
6	geçirdik	geçir	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


