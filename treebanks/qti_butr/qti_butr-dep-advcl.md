---
layout: base
title:  'Statistics of advcl in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `advcl`

This relation is universal.

8 nodes (2%) are attached to their parents as `advcl`.

7 instances of `advcl` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.25.

The following 3 pairs of parts of speech are connected with `advcl`: <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-VERB.html">VERB</a></tt> (6; 75% instances), <tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qti_butr-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-PRON.html">PRON</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advcl	color:blue
1	Derse	ders	NOUN	_	Case=Dat|Number=Sing|Person=3	2	obl	_	Lang=tr
2	çıkmadan	çık	VERB	_	Case=Abl|Polarity=Pos|VerbForm=Conv	5	advcl	_	Lang=tr
3	bir	bir	DET	_	_	4	det	_	Lang=tr
4	KK'ya	KK	PROPN	_	Case=Dat|Number=Sing|Person=3	5	obl	_	Lang=tr
5	drop-bylayacağım	drop-by	VERB	_	Aspect=Perf|Number=Sing|Person=1|Polarity=Pos|Tense=Fut	0	root	_	Lang=tr|CSID=MIXED|CSPoint=drop-by§layacağım|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	görüşürüz	görüş	VERB	_	Aspect=Imp|Number=Plur|Person=1|Polarity=Pos|Tense=Pres	5	parataxis	_	Lang=tr|SpaceAfter=No
8	!	!	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 advcl	color:blue
1	Çok	çok	ADV	_	_	2	advmod	_	Lang=tr
2	düşünmezsen	düşün	VERB	_	Aspect=Hab|Mood=Cnd|Number=Sing|Person=2|Polarity=Neg|Tense=Pres	7	advcl	_	Lang=tr
3	üstüne	üst	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	2	obl	_	Lang=tr
4	bu	bu	PRON	_	Case=Nom|Number=Sing|Person=3	7	nsubj	_	Lang=tr
5	gayet	gayet	ADV	_	_	7	advmod	_	Lang=tr
6	perfectly	perfectly	ADV	_	_	7	advmod	_	Lang=en
7	fine	fine	ADJ	_	_	0	root	_	Lang=en|SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 advcl	color:blue
1	Bunun	bu	PRON	_	Case=Gen|Number=Sing|Person=3	5	advcl	_	Lang=tr
2	için	için	ADP	_	_	1	case	_	Lang=tr
3	bir	bir	DET	_	_	4	det	_	Lang=tr
4	toplantı	toplantı	NOUN	_	Case=Nom|Number=Sing|Person=3	5	compound	_	Lang=tr
5	alabiliriz	al	VERB	_	Aspect=Imp|Mood=Pot|Number=Plur|Person=1|Polarity=Pos|Tense=Pres	0	root	_	Lang=tr|LoanTrans=en:get_a_meeting|SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


