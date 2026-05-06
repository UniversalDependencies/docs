---
layout: base
title:  'Statistics of obl:tmod in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="tr_boun-dep-obl.html">obl</a></tt>.

280 nodes (0%) are attached to their parents as `obl:tmod`.

272 instances of `obl:tmod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.09642857142857.

The following 8 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (243; 87% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (14; 5% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (13; 5% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl:tmod	color:blue
1	Ertesi	ertesi	NOUN	_	Case=Nom|Number=Sing|Person=3	2	nmod:poss	_	_
2	günü	gün	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	obl:tmod	_	_
3	gene	gen	ADV	_	_	5	advmod	_	_
4	gelip	gel	VERB	Conv	Polarity=Pos|VerbForm=Conv	5	advcl	_	_
5	dövdüler	döv	VERB	_	Aspect=Perf|Evident=Fh|Number=Plur|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
6	...	...	PUNCT	TDots	_	5	punct	_	SpacesAfter=\r\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 obl:tmod	color:blue
1	Neyse	neyse	ADV	_	_	0	root	_	SpaceAfter=No
2	...	...	PUNCT	TDots	_	1	punct	_	_
3	Kapıya	kapı	NOUN	_	Case=Dat|Number=Sing|Person=3	4	obj	_	_
4	ulaştım	ulaş	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=1|Polarity=Pos|Tense=Past	1	conj	_	_
5	da	da	SCONJ	_	_	4	mark	_	_
6	bu	bu	DET	Demons	PronType=Dem	7	det	_	_
7	sefer	sefer	NOUN	_	Case=Nom|Number=Sing|Person=3	10	obl:tmod	_	_
8	kilidi	kilit	NOUN	_	Case=Acc|Number=Sing|Person=3	9	obj	_	_
9	açmam	aç	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos	10	csubj	_	_
10	zor	zor	ADJ	Adj	_	4	conj	_	_
11	oldu	ol	AUX	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	10	cop	_	SpaceAfter=No
12	.	.	PUNCT	Stop	_	4	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:tmod	color:blue
1	1766'da	1766	NUM	NNum	Case=Loc|Number=Sing|NumType=Card|Person=3	2	obl:tmod	_	_
2	görülmektedir	gör	VERB	_	Aspect=Prog|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|Voice=Pass	0	root	_	SpaceAfter=No
3	.	.	PUNCT	Stop	_	2	punct	_	SpacesAfter=\n

~~~


