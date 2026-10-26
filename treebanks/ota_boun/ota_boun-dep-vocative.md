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

The following 4 pairs of parts of speech are connected with `vocative`: <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (4; 57% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-INTJ.html">INTJ</a></tt> (1; 14% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 vocative	color:blue
1	-	-	PUNCT	Punc	_	4	punct	_	_
2	Haydi	haydi	INTJ	_	_	4	discourse	_	هايدى
3	,	,	PUNCT	Comma	_	4	punct	_	,
4	defol	defol	VERB	_	Case=Nom|Number=Sing|Person=3	0	root	_	دفع اول
5	oradan	ora	PRON	_	Case=Abl|Number=Sing|Person=3	4	obl	_	او رادن
6	...	...	PUNCT	TDots	_	8	punct	_	...
7	Miskin	miskin	ADJ	Adj	_	8	amod	_	مسكين
8	köpek	köpek	NOUN	_	Case=Nom|Number=Sing|Person=3	4	vocative	_	كوپك
9	!	!	PUNCT	Excl	_	8	punct	_	!
10	...	...	PUNCT	TDots	_	8	punct	_	...

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 vocative	color:blue
1	-	-	PUNCT	Punc	_	8	punct	_	-
2	“	“	PUNCT	Punc	_	8	punct	_	“
3	Efendim	efendi	INTJ	_	_	8	vocative	_	افندم
4	bu	bu	PRON	Demons	Case=Nom|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	بو
5	bizim	biz	PRON	Pers	Case=Gen|Number=Plur|Person=1|PronType=Prs	8	nmod:poss	_	بزم
6	pek	pek	ADV	_	_	7	advmod	_	پك
7	eski	eski	ADJ	Adj	_	8	amod	_	اسكى
8	müşterimizdir	müşteri	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	0	root	_	مشتريمزد
9	.	.	PUNCT	Stop	_	8	punct	_	.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 vocative	color:blue
1	-	-	PUNCT	Punc	_	5	punct	_	-
2	Kuzum	kuzu	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	3	amod	_	قوزوم
3	beyefendi	beyefendi	NOUN	_	Case=Nom|Number=Sing|Person=3	5	vocative	_	بك افندى
4	,	,	PUNCT	Comma	_	5	punct	_	,
5	merhamet	merhamet	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	مرحمت
6	ediniz	et	VERB	_	Mood=Imp|Number=Plur|Person=2|Polarity=Pos	5	compound:lvc	_	ايديكز
7	,	,	PUNCT	Comma	_	10	punct	_	,
8	on	on	NUM	ANum	NumType=Card	9	nummod	_	اون
9	para	para	NOUN	_	Case=Acc|Number=Sing|Person=3	10	obj	_	پارا
10	veriniz	ver	VERB	_	Mood=Imp|Number=Plur|Person=2|Polarity=Pos	5	conj	_	ويريكز
11	,	,	PUNCT	Comma	_	14	punct	_	,
12	iki	iki	NUM	ANum	NumType=Card	13	nummod	_	ایکی
13	gündür	gün	ADV	_	_	14	advmod	_	کوندر
14	açım	aç	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	5	conj	_	آچیم
15	.	.	PUNCT	Stop	_	14	punct	_	.

~~~


