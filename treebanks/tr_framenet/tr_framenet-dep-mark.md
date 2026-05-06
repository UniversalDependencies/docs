---
layout: base
title:  'Statistics of mark in UD_Turkish-FrameNet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-FrameNet: Relations: `mark`

This relation is universal.

117 nodes (1%) are attached to their parents as `mark`.

117 instances of `mark` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02564102564103.

The following 10 pairs of parts of speech are connected with `mark`: <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-ADP.html">ADP</a></tt> (68; 58% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-SCONJ.html">SCONJ</a></tt> (18; 15% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (11; 9% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-ADP.html">ADP</a></tt> (7; 6% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-SCONJ.html">SCONJ</a></tt> (5; 4% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-SCONJ.html">SCONJ</a></tt> (3; 3% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_framenet-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="tr_framenet-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_framenet-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="tr_framenet-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_framenet-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mark	color:blue
1	Mağdur	mağdur	ADJ	_	_	2	compound	_	_
2	etmek	et	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	6	advcl	_	_
3	için	için	ADP	_	_	2	mark	_	_
4	elinden	el	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	compound	_	_
5	geleni	gelen	ADJ	_	Case=Acc|Number=Sing	6	compound	_	_
6	yapıyorlar	yap	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 mark	color:blue
1	Soğuk	soğuk	ADJ	_	_	2	amod	_	_
2	hava	hava	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	_
3	öyle	öyle	ADV	_	_	5	advmod	_	_
4	bir	bir	ADV	_	_	5	advmod	_	_
5	esti	es	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	10	advcl	_	_
6	ki	ki	SCONJ	_	_	5	mark	_	_
7	tüylerim	tüy	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=1	8	compound	_	_
8	diken	diken	NOUN	_	Case=Nom|Number=Sing	9	compound	_	_
9	diken	diken	NOUN	_	Case=Nom|Number=Sing	10	compound	_	_
10	oldu	ol	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 mark	color:blue
1	Zaten	zaten	ADV	_	_	5	discourse	_	_
2	müdür	müdür	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	_
3	aç	aç	ADJ	_	_	4	amod	_	_
4	herifin	herif	NOUN	_	Case=Gen|Number=Sing	5	nmod	_	_
5	biri	biri	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Ind	10	parataxis	_	_
6	,	,	PUNCT	_	_	5	punct	_	_
7	zil	zil	NOUN	_	Case=Nom|Number=Sing	8	compound	_	_
8	kalmış	kal	VERB	_	Aspect=Perf|Evident=Nfh|Polarity=Pos|Tense=Past|VerbForm=Part	10	advcl	_	_
9	da	da	CCONJ	_	_	8	mark	_	_
10	gelmiş	gel	VERB	_	Aspect=Perf|Evident=Nfh|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
11	buralara	bura	NOUN	_	Case=Dat|Number=Plur	10	obl	_	_
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


