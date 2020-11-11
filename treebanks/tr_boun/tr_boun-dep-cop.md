---
layout: base
title:  'Statistics of cop in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `cop`

This relation is universal.

1067 nodes (1%) are attached to their parents as `cop`.

1067 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14245548266167.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (449; 42% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (312; 29% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (135; 13% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (66; 6% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (60; 6% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (30; 3% instances), <tt><a href="tr_boun-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (9; 1% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="tr_boun-pos-DET.html">DET</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 cop	color:blue
1	Ancak	ancak	CCONJ	Conj	_	9	cc	_	_
2	damar	damar	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	nmod:poss	_	_
3	sertliği	sert	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	obj	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	5	punct	_	_
5	üre	üre	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	conj	_	_
6	ve	ve	CCONJ	Conj	_	7	cc	_	_
7	tansiyonu	tansiyon	NOUN	Noun	Case=Acc|Number=Sing|Person=3	3	conj	_	_
8	olanlar	ol	VERB	Verb	Case=Nom|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Part	9	nsubj	_	_
9	yememeli	ye	NOUN	Noun	Mood=Nec|Number=Sing|Person=3|Polarity=Neg	0	root	_	_
10	dir	i	AUX	Zero	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	9	cop	_	_
11	.	.	PUNCT	Punc	_	9	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cop	color:blue
1	Saddam	Saddam	PROPN	Prop	Case=Nom|Number=Sing|Person=3	10	nsubj	_	_
2	Hüseyin	Hüseyin	PROPN	Prop	Case=Nom|Number=Sing|Person=3	1	flat	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	10	punct	_	_
4	42	42	NUM	ANum	NumType=Card	5	nummod	_	_
5	yaşında	yaş	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	10	advcl	_	_
6	iken	i	AUX	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Part	5	cop	_	_
7	bir	bir	DET	ANum	NumType=Card	8	det	_	_
8	darbeyle	darbe	NOUN	Noun	Case=Ins|Number=Sing|Person=3	10	obl	_	_
9	iktidara	iktidar	NOUN	Noun	Case=Dat|Number=Sing|Person=3	10	obj	_	_
10	el	el	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
11	koydu	koy	VERB	Verb	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	10	compound	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	10	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cop	color:blue
1	Çok	çok	ADV	Adverb	_	2	advmod	_	_
2	şıktı	şık(II)	VERB	Verb	Aspect=Perf|Case=Nom|Evident=Fh|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	6	punct	_	_
4	çok	çok	ADV	Adverb	_	5	advmod	_	_
5	iştah	iştah	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	obj	_	_
6	açıcı	aç	VERB	Verb	Case=Nom|Number=Sing|Person=3|Polarity=Pos	2	conj	_	_
7	ydı	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	_
8	manzara	manzara	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	6	punct	_	SpacesAfter=\n

~~~


