---
layout: base
title:  'Statistics of orphan in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `orphan`

This relation is universal.

3 nodes (0%) are attached to their parents as `orphan`.

2 instances of `orphan` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.33333333333333.

The following 2 pairs of parts of speech are connected with `orphan`: <tt><a href="tr_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (2; 67% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 orphan	color:blue
1	çarşamba	çarşamba	PROPN	_	Case=Nom|Number=Sing	7	obl	_	_
2	beni	ben	PRON	_	PronType=Prs	7	obj	_	_
3	burada	burada	ADV	_	_	4	advmod	_	_
4	Washington	washington	PROPN	_	Case=Nom|Number=Sing	7	obl	_	_
5	DC'de	dc	PROPN	_	Case=Loc|Number=Sing	4	flat	_	_
6	ziyaret	ziyaret	NOUN	_	Case=Nom|Number=Sing|Person=3	7	compound	_	_
7	etmek	et	NOUN	_	Case=Nom|Number=Sing|Person=3	8	xcomp	_	_
8	isteyen	iste	ADJ	_	_	10	acl	_	_
9	iki	iki	NUM	_	NumType=Card	10	nummod	_	_
10	arkadaşım	arkadaş	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	11	csubj	_	_
11	var	var	ADJ	_	_	0	root	_	_
12	biri	biri	PRON	_	PronType=Ind	11	conj	_	_
13	Denver'de	denver	PROPN	_	Case=Loc|Number=Sing	12	orphan	_	_
14	diğeri	diğer	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	16	nsubj	_	_
15	Miami'de	miami	PROPN	_	Case=Loc|Number=Sing	16	obl	_	_
16	yaşıyor	yaşa	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	parataxis	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 orphan	color:blue
1	Bana	ben	PRON	_	PronType=Prs	6	orphan	_	_
2	Philadelphia'dan	philadelphia	PROPN	_	Case=Abl|Number=Sing	3	nmod	_	_
3	Boston'a	boston	PROPN	_	Case=Dat|Number=Sing	4	obl	_	_
4	olan	ol	ADJ	_	_	5	acl	_	_
5	uçuşları	uç	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	6	obj	_	_
6	gösterin	göster	VERB	_	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


