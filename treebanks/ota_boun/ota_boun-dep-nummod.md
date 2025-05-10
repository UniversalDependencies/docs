---
layout: base
title:  'Statistics of nummod in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `nummod`

This relation is universal.

57 nodes (1%) are attached to their parents as `nummod`.

57 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31578947368421.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NUM.html">NUM</a></tt> (52; 91% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-NUM.html">NUM</a></tt> (4; 7% instances), <tt><a href="ota_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_boun-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Biçare	biçare	ADJ	_	Case=Nom|Number=Sing|Person=3	2	amod	_	بيچاره
2	adamın	adam	NOUN	_	Case=Gen|Number=Sing|Person=3	4	nmod:poss	_	اًدمك
3	iki	iki	NUM	ANum	NumType=Card	4	nummod	_	ايكى
4	eli	el	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	nsubj	_	الى
5	yok	yok	NOUN	Exist	Number=Sing|Person=3|Polarity=Neg	8	advcl	_	يوق
6	ki	ki	SCONJ	_	_	5	mark	_	كه
7	ekmeği	ekmek	NOUN	_	Case=Acc|Number=Sing|Person=3	8	obj	_	اكمكى
8	doğrayabilsin	doğra	VERB	_	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Voice=Pass	0	root	_	طواغرايه بيلسون
9	!	!	PUNCT	Excl	_	8	punct	_	!

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Ziyadda	ziyad	NOUN	_	Case=Loc|Number=Sing|Person=3	2	obl	_	ضياده‌|TokenRange=862:869
2	başlayıp	başla	VERB	Conv	Polarity=Pos|VerbForm=Conv	4	advcl	_	باشلايوب|TokenRange=870:878
3	ziyada	ziyada	NOUN	_	Case=Loc|Number=Sing|Person=3	4	obl	_	ضياده‌|TokenRange=879:885
4	biten	bit	VERB	Ptcp	Polarity=Pos|Tense=Pres|VerbForm=Part	12	acl	_	بيتن|TokenRange=886:891
5	12	12	NUM	ANum	NumType=Card	6	nummod	_	اون ايكى|TokenRange=892:894
6	saatlik	saatlik	ADJ	_	_	12	amod	_	ساعتلك|TokenRange=895:902
7	kısa	kısa	ADJ	Adj	_	12	amod	_	قيصه‌|TokenRange=903:907
8	hafif	hafif	ADJ	Adj	_	12	amod	_	حفيف|TokenRange=908:913
9	yaşanması	yaşa	VERB	Vnoun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|VerbForm=Vnoun|Voice=Pass	10	csubj	_	ياشانمه‌سى|TokenRange=914:923
10	kolay	kolay	ADJ	Adj	_	12	acl	_	قولاى|TokenRange=924:929
11	bir	bir	DET	Indef	_	12	det	_	بر|TokenRange=930:933
12	günümüz	gün	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	13	nsubj	_	كونمز|TokenRange=934:941
13	var	var	NOUN	Exist	Case=Nom|Number=Sing|Person=3|Polarity=Pos	0	root	_	_
14	dı	y	AUX	Zero	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Tense=Past	13	cop	_	_
15	.	.	PUNCT	Stop	_	13	punct	_	.|SpacesAfter=\r\n|TokenRange=947:948

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nummod	color:blue
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


