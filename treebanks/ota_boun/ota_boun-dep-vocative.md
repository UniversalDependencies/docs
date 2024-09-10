---
layout: base
title:  'Statistics of vocative in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `vocative`

This relation is universal.

7 nodes (0%) are attached to their parents as `vocative`.

4 instances of `vocative` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.14285714285714.

The following 3 pairs of parts of speech are connected with `vocative`: <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (4; 57% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (2; 29% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-INTJ.html">INTJ</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 vocative	color:blue
1	—	—	PUNCT	Punc	_	3	punct	_	_
2	Peki	peki	ADV	_	_	3	discourse	_	_
3	gideyim	git	VERB	_	Mood=Opt|Number=Sing|Person=1|Polarity=Pos	0	root	_	_
4	Aliciğim	alicik	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	3	vocative	_	_
5	.	.	PUNCT	Stop	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 vocative	color:blue
1	—	—	PUNCT	Punc	_	4	punct	_	_
2	Haydi	haydi	INTJ	_	_	4	discourse	_	_
3	,	,	PUNCT	Comma	_	4	punct	_	_
4	defol	defol	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
5	oradan	ora	PRON	_	Case=Abl|Number=Sing|Person=3	4	obl	_	_
6	...	...	PUNCT	TDots	_	8	punct	_	_
7	Miskin	miskin	ADJ	Adj	_	8	amod	_	_
8	köpek	köpek	NOUN	_	Case=Nom|Number=Sing|Person=3	4	vocative	_	_
9	!	!	PUNCT	Excl	_	8	punct	_	_
10	...	...	PUNCT	TDots	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 vocative	color:blue
1	—	—	PUNCT	Punc	_	8	punct	_	_
2	“	“	PUNCT	Punc	_	8	punct	_	_
3	Efendim	efendi	INTJ	_	_	8	vocative	_	_
4	bu	bu	PRON	Demons	Case=Nom|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	_
5	bizim	biz	PRON	Pers	Case=Gen|Number=Plur|Person=1|PronType=Prs	8	nmod:poss	_	_
6	pek	pek	ADV	_	_	7	advmod	_	_
7	eski	eski	ADJ	Adj	_	8	amod	_	_
8	müşterimizdir	müşteri	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	0	root	_	_
9	.	.	PUNCT	Stop	_	8	punct	_	_

~~~


