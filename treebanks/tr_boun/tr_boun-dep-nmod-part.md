---
layout: base
title:  'Statistics of nmod:part in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `nmod:part`

This relation is a language-specific subtype of <tt><a href="tr_boun-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="tr_boun-dep-nmod-poss.html">nmod:poss</a></tt>.

125 nodes (0%) are attached to their parents as `nmod:part`.

124 instances of `nmod:part` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.408.

The following 16 pairs of parts of speech are connected with `nmod:part`: <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (50; 40% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (24; 19% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (17; 14% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (8; 6% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-PRON.html">PRON</a></tt> (5; 4% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:part	color:blue
1	Çocuklardan	çocuk	NOUN	_	Case=Abl|Number=Plur|Person=3	2	nmod:part	_	_
2	biri	biri	PRON	Quant	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Comma	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nmod:part	color:blue
1	"	"	PUNCT	Punc	_	2	punct	_	SpaceAfter=No
2	Bizim	Bizim	PRON	Pers	Case=Gen|Number=Plur|Person=1|PronType=Prs	3	nmod:poss	_	_
3	okuldan	okul	NOUN	_	Case=Abl|Number=Sing|Person=3	5	nmod:part	_	_
4	bir	bir	DET	Indef	_	5	det	_	_
5	çocuğun	çocuk	NOUN	_	Case=Gen|Number=Sing|Person=3	6	nmod:poss	_	_
6	babası	baba	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	nsubj	_	_
7	gece	gece	NOUN	_	Case=Nom|Number=Sing|Person=3	9	obl	_	_
8	işten	iş	NOUN	_	Case=Abl|Number=Sing|Person=3	9	obl	_	_
9	dönüyor	dön	VERB	Ptcp	Aspect=Imp|Polarity=Pos|VerbForm=Part	0	root	_	_
10	muş	y	AUX	Zero	Evident=Nfh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	9	cop	_	_
11	.	.	PUNCT	Stop	_	9	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod:part	color:blue
1	Bu	bu	DET	Det	_	2	det	_	_
2	albümler	albüm	NOUN	_	Case=Nom|Number=Plur|Person=3	8	nsubj	_	_
3	Corea'nın	Corea	PROPN	_	Case=Gen|Number=Sing|Person=3	6	nmod:poss	_	_
4	en	en	ADV	_	_	5	advmod	_	_
5	yaratıcı	yaratıcı	ADJ	Adj	_	6	amod	_	_
6	dönemlerinden	dönem	NOUN	_	Case=Abl|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3	7	nmod:part	_	_
7	birini	biri	NUM	NNum	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	obj	_	_
8	belgeledi	belgele	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Stop	_	8	punct	_	SpacesAfter=\n

~~~


