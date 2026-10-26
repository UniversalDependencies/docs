---
layout: base
title:  'Statistics of flat in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `flat`

This relation is universal.

87 nodes (1%) are attached to their parents as `flat`.

87 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20689655172414.

The following 10 pairs of parts of speech are connected with `flat`: <tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt> (50; 57% instances), <tt><a href="ota_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="ota_boun-pos-NUM.html">NUM</a></tt> (14; 16% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (7; 8% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (7; 8% instances), <tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="ota_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_boun-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="ota_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_boun-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ota_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Mediha	Mediha	PROPN	_	Case=Nom|Number=Sing|Person=3	6	orphan	_	مديحه
2	Hüsnü	Hüsnü	PROPN	_	Case=Nom|Number=Sing|Person=3	1	flat	_	حسنى
3	Hanımefendi	Hanimefendi	PROPN	_	Case=Nom|Number=Sing|Person=3	1	flat	_	خانم افندى
4	;	;	PUNCT	Punc	_	6	punct	_	؛
5	erkeklerden	erkek	NOUN	_	Case=Abl|Number=Plur|Person=3	6	obl	_	ارككلردن
6	beş	beş	NUM	ANum	NumType=Card	0	root	_	بش
7	değil	değil	AUX	Overt	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	6	aux	_	دكل
8	,	,	PUNCT	Comma	_	9	punct	_	,
9	on	on	NUM	ANum	NumType=Card	6	conj	_	اون
10	değil	değil	AUX	Neg	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	9	aux	_	دكل
11	...	...	PUNCT	TDots	_	9	punct	_	...

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	1335	1335	NUM	Year	NumType=Card	2	nmod:poss	_	_
2	senesi	sene	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	nmod:poss	_	سنه سى
3	Mayıs'ının	mayıs	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	nmod:poss	_	مايسنك
4	on	on	NUM	ANum	NumType=Card	6	amod	_	_
5	dokuzuncu	dokuzuncu	NUM	ANum	Case=Nom|Number=Sing|Person=3	4	flat	_	_
6	günü	gün	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	obl	_	كونى
7	Samsun'a	Samsun'a	PROPN	Place	Case=Dat|Number=Sing|Person=3	8	obl	_	صامسونه
8	çıktım	çık	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=1|Polarity=Pos|Tense=Past	0	root	_	چيقدم
9	.	.	PUNCT	Stop	_	8	punct	_	.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat	color:blue
1	Bu	bu	DET	Det	_	3	det	_	بو
2	küçük	küçük	ADJ	Adj	_	15	nsubj	_	كوچوك
3	hikâye	hikâye	NOUN	_	Case=Nom|Number=Sing|Person=3	2	flat	_	حكايه
4	-	-	PUNCT	Punc	_	6	punct	_	-
5	belki	belki	ADV	_	_	6	advmod	_	بلكه
6	yanılıyorum	yanıl	VERB	_	Aspect=Imp|Number=Sing|Person=1|Polarity=Pos|Tense=Pres	15	parataxis	_	يانيلييورم
7	fakat	fakat	CCONJ	_	_	6	cc	_	فقط
8	-	-	PUNCT	Punc	_	15	punct	_	-
9	nice	nice	ADJ	Adj	_	10	amod	_	بنجه
10	âsar-ı	âsar	NOUN	_	Case=Nom|Number=Sing|Person=3	14	nmod:poss	_	اَثار
11	cedide-i	cedide	ADJ	_	Case=Nom|Number=Sing|Person=3	10	amod	_	جديدة
12	nisvanın	nisvan	NOUN	_	Case=Gen|Number=Sing|Person=3	10	nmod:poss	_	نسوانك
13	en	en	ADV	_	_	14	advmod	_	اك
14	güzellerinden	güzel	ADJ	_	Case=Abl|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	15	nmod	_	كوزللرندن
15	biridir	biri	PRON	Quant	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	بريدر
16	.	.	PUNCT	Stop	_	15	punct	_	.

~~~


