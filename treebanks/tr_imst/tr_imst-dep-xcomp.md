---
layout: base
title:  'Statistics of xcomp in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `xcomp`

This relation is universal.

39 nodes (0%) are attached to their parents as `xcomp`.

39 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15384615384615.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (27; 69% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (4; 10% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (3; 8% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp	color:blue
1	Çıkmak	çık	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	2	xcomp	_	_
2	istemez	iste	VERB	Verb	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	0	root	_	SpaceAfter=No
3	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 xcomp	color:blue
1	Doğrusu	doğru	ADJ	NAdj	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	advmod	_	_
2	size	siz	PRON	Pers	Case=Dat|Number=Plur|Person=2|PronType=Prs	3	obj	_	_
3	yardım	yardım	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	xcomp	_	_
4	edebilmek	et	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Pot|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	3	compound:lvc	_	_
5	isterdim	iste	VERB	Verb	Aspect=Hab|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past	7	ccomp	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	5	punct	_	_
7	dedi	de	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	_
8	Jul	jul	NOUN	Noun	Case=Nom|Number=Sing|Person=3	7	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	Hadi	hadi	INTJ	Interj	_	3	discourse	_	_
2	abi	abi	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	discourse	_	_
3	kapa	kapa	VERB	Verb	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres	0	root	_	_
4	gözünü	göz	NOUN	Noun	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	3	punct	_	_
6	aç	aç	VERB	Verb	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres	7	obj	_	_
7	demeden	de	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Neg|Tense=Pres|VerbForm=Conv	8	nmod	_	_
8	açmak	aç	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	9	xcomp	_	_
9	yok	yok	ADJ	Adj	_	3	conj	_	_
10	ha	ha	INTJ	Interj	_	3	discourse	_	SpaceAfter=No
11	!	!	PUNCT	Punc	_	10	punct	_	SpaceAfter=No
12	..	..	PUNCT	Punc	_	10	punct	_	_

~~~


