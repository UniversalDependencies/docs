---
layout: base
title:  'Statistics of mark in UD_Turkish-Tourism'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Tourism: Relations: `mark`

This relation is universal.

241 nodes (0%) are attached to their parents as `mark`.

234 instances of `mark` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08298755186722.

The following 9 pairs of parts of speech are connected with `mark`: <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-ADP.html">ADP</a></tt> (193; 80% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt> (18; 7% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt> (11; 5% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-SCONJ.html">SCONJ</a></tt> (9; 4% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt> (4; 2% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-SCONJ.html">SCONJ</a></tt> (3; 1% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mark	color:blue
1	Yemekleri	yemek	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Plur|Person[psor]=3	3	nsubj	_	_
2	kötü	kötü	ADJ	_	_	3	advmod	_	_
3	olduğu	ol	VERB	_	Aspect=Perf|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
4	için	için	ADP	_	_	3	mark	_	_
5	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mark	color:blue
1	Oda	oda	NOUN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	servisi	servis	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	nsubj	_	_
3	şahane	şahane	ADJ	_	_	6	parataxis	_	_
4	ama	ama	CCONJ	_	_	3	mark	_	_
5	dekoru	dekor	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	_
6	beğenmedim	beğen	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mark	color:blue
1	Ben	ben	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	yaptırmadım	yap	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Past|VerbForm=Fin|Voice=Cau	6	parataxis	_	_
3	ama	ama	CCONJ	_	_	2	mark	_	_
4	4	4	NUM	_	NumType=Card	5	nummod	_	_
5	puan	puan	NOUN	_	Case=Nom|Number=Sing	6	compound	_	_
6	veriyorum	ver	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


