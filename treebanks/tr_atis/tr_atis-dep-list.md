---
layout: base
title:  'Statistics of list in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `list`

This relation is universal.

27 nodes (0%) are attached to their parents as `list`.

25 instances of `list` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.55555555555556.

The following 5 pairs of parts of speech are connected with `list`: <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (15; 56% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (5; 19% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (5; 19% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 list	color:blue
1	11	11	NUM	_	NumType=Card	2	nummod	_	_
2	Kasım	kasım	PROPN	_	Case=Nom|Number=Sing	6	nmod	_	_
3	1991	1991	NUM	_	NumType=Card	2	list	_	_
4	Pazartesi	pazartesi	PROPN	_	Case=Nom|Number=Sing	2	list	_	_
5	Denver'den	denver	PROPN	_	Case=Abl|Number=Sing	6	nmod	_	_
6	Washington	washington	PROPN	_	Case=Nom|Number=Sing	0	root	_	_
7	DC'ye	dc	PROPN	_	Case=Dat|Number=Sing	6	flat	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 list	color:blue
1	Washington'dan	washington	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	San	san	PROPN	_	Case=Nom|Number=Sing	4	obl	_	_
3	Francisco'ya	francisco	PROPN	_	Case=Dat|Number=Sing	2	flat	_	_
4	uçmam	uç	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	5	ccomp	_	_
5	gerekiyor	gerek	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	16	parataxis	_	_
6	ama	ama	CCONJ	_	_	10	cc	_	_
7	Dallas'ta	dallas	PROPN	_	Case=Loc|Number=Sing	9	obl	_	_
8	mola	mola	NOUN	_	Case=Nom|Number=Sing|Person=3	9	compound	_	_
9	vermek	ver	NOUN	_	Case=Nom|Number=Sing|Person=3	10	xcomp	_	_
10	istiyorum	iste	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	conj	_	_
11	bana	ben	PRON	_	PronType=Prs	16	obl	_	_
12	böyle	böyle	ADJ	_	_	13	amod	_	_
13	uçuşların	uç	NOUN	_	Case=Gen|Number=Plur|Person=3	14	nmod	_	_
14	programını	program	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	16	obj	_	_
15	saatlerini	saat	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	14	list	_	_
16	söyleyebilir	söyle	VERB	_	Aspect=Hab|Mood=GenPot|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
17	misin	mi	AUX	_	PronType=Int	16	aux	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 list	color:blue
1	22	22	NUM	_	NumType=Card	2	nummod	_	_
2	Mayıs	mayıs	PROPN	_	Case=Nom|Number=Sing	4	nmod	_	_
3	Cumartesi	cumartesi	NOUN	_	Case=Nom|Number=Sing|Person=3	2	list	_	_
4	günü	gün	NOUN	_	Case=Acc|Number=Sing|Person=3	8	nmod	_	_
5	Las	Las	PROPN	_	Case=Nom|Number=Sing	7	nmod	_	_
6	Vegas'tan	vegas	PROPN	_	Case=Abl|Number=Sing	5	flat	_	_
7	Burbank'a	burbank	PROPN	_	Case=Dat|Number=Sing	8	nmod	_	_
8	uçuşlar	uç	NOUN	_	Case=Nom|Number=Plur|Person=3	9	nsubj	_	_
9	nelerdir	n	VERB	_	Mood=Gen|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


