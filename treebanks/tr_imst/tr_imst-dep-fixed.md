---
layout: base
title:  'Statistics of fixed in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `fixed`

This relation is universal.

50 nodes (0%) are attached to their parents as `fixed`.

50 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `fixed`: <tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (49; 98% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 fixed	color:blue
1	Bir	bir	DET	ANum	_	3	det	_	_
2	gece	gece	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	nmod:poss	_	_
3	zamanı	zaman	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	obl	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	3	punct	_	_
5	yatakta	yatak	NOUN	Noun	Case=Loc|Number=Sing|Person=3	7	advcl	_	_
6	yken	i	AUX	Zero	Aspect=Perf|Mood=Ind|Tense=Pres|VerbForm=Conv	5	cop	_	_
7	söyledi	söyle	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	_
8	hem	hem	CCONJ	Conj	_	7	advmod:emph	_	_
9	de	de	CCONJ	Conj	_	8	fixed	_	SpaceAfter=No
10	...	...	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Yine	yine	ADV	Adverb	_	4	cc	_	_
2	de	de	CCONJ	Conj	_	1	fixed	_	_
3	iyi	iyi	ADJ	Adj	_	4	amod	_	_
4	çocuklar	çocuk	NOUN	Noun	Case=Nom|Number=Plur|Person=3	0	root	_	_
5	mış	i	AUX	Zero	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	4	cop	_	_
6	,	,	PUNCT	Punc	_	10	punct	_	_
7	seni	sen	PRON	Pers	Case=Acc|Number=Sing|Person=2|PronType=Prs	10	obj	_	_
8	eve	ev	NOUN	Noun	Case=Dat|Number=Sing|Person=3	10	obl	_	_
9	kadar	kadar	ADP	PCDat	_	8	case	_	_
10	getirmiş	getir	VERB	Verb	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	4	conj	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


