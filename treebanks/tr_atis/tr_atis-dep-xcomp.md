---
layout: base
title:  'Statistics of xcomp in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `xcomp`

This relation is universal.

451 nodes (1%) are attached to their parents as `xcomp`.

451 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22838137472284.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (431; 96% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (9; 2% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (8; 2% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	Denver'den	denver	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	San	san	PROPN	_	Case=Nom|Number=Sing	8	obl	_	_
3	Francisco'ya	francisco	PROPN	_	Case=Dat|Number=Sing	2	flat	_	_
4	en	en	ADV	_	Degree=Sup	5	advmod	_	_
5	az	az	ADJ	_	_	6	amod	_	_
6	bir	bir	NUM	_	NumType=Card	7	nummod	_	_
7	durakla	durak	NOUN	_	Case=Ins|Number=Sing|Person=3	8	obl	_	_
8	uçmak	uç	NOUN	_	Case=Nom|Number=Sing|Person=3	9	xcomp	_	_
9	istiyorum	iste	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 xcomp	color:blue
1	Baltimore'den	baltimore	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Boston'a	boston	PROPN	_	Case=Dat|Number=Sing	3	obl	_	_
3	gitmek	git	NOUN	_	Case=Nom|Number=Sing|Person=3	7	xcomp	_	_
4	için	için	ADP	_	_	3	mark	_	_
5	günün	gün	NOUN	_	Case=Gen|Number=Sing|Person=3	7	nmod	_	_
6	son	son	ADJ	_	_	7	amod	_	_
7	uçuşu	uç	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	nsubj	_	_
8	nedir	ne	VERB	_	Mood=Gen|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 xcomp	color:blue
1	Salı	salı	NOUN	_	Case=Nom|Number=Sing|Person=3	2	nmod	_	_
2	günü	gün	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	nmod	_	_
3	Dallas'a	dallas	PROPN	_	Case=Dat|Number=Sing	4	obl	_	_
4	gitmek	git	NOUN	_	Case=Nom|Number=Sing|Person=3	7	xcomp	_	_
5	üzere	üzere	ADP	_	_	4	fixed	_	_
6	Baltimore'den	baltimore	PROPN	_	Case=Abl|Number=Sing	7	obl	_	_
7	kalkan	kalk	ADJ	_	_	8	acl	_	_
8	uçuş	uç	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nmod	_	_
9	hakkında	hakkında	ADV	_	_	10	advmod	_	_
10	bilgi	bilgi	NOUN	_	Case=Nom|Number=Sing|Person=3	11	obj	_	_
11	almak	al	NOUN	_	Case=Nom|Number=Sing|Person=3	12	xcomp	_	_
12	istiyorum	iste	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


