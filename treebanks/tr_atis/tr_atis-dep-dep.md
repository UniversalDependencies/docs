---
layout: base
title:  'Statistics of dep in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `dep`

This relation is universal.

5 nodes (0%) are attached to their parents as `dep`.

4 instances of `dep` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.8.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-DET.html">DET</a></tt> (3; 60% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (1; 20% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 dep	color:blue
1	11	11	NUM	_	NumType=Card	2	nummod	_	_
2	Kasım	kasım	PROPN	_	Case=Nom|Number=Sing	3	nmod	_	_
3	10'dan	10	NOUN	_	Case=Abl|Number=Sing|Person=3	10	nmod:tmod	_	_
4	önce	önce	ADP	_	_	3	case	_	_
5	Boston	boston	PROPN	_	Case=Nom|Number=Sing	6	nmod	_	_
6	Washington	washington	PROPN	_	Case=Nom|Number=Sing	8	nmod	_	_
7	DC	dc	PROPN	_	Case=Nom|Number=Sing	6	flat	_	_
8	arasındaki	ara	ADJ	_	_	10	amod	_	_
9	tüm	tüm	DET	_	PronType=Art	10	dep	_	_
10	uçuşlar	uç	NOUN	_	Case=Nom|Number=Plur|Person=3	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 1 dep	color:blue
1	Lütfen	lütfen	ADV	_	_	11	dep	_	_
2	bana	ben	PRON	_	PronType=Prs	11	obl	_	_
3	Long	long	PROPN	_	Case=Nom|Number=Sing	6	nmod	_	_
4	Beach	beach	PROPN	_	Case=Nom|Number=Sing	3	flat	_	_
5	California'dan	california	PROPN	_	Case=Abl|Number=Sing	4	flat	_	_
6	Memphis	memphis	PROPN	_	Case=Nom|Number=Sing	8	obl	_	_
7	Tennessee'ye	tennessee	PROPN	_	Case=Dat|Number=Sing	6	flat	_	_
8	olan	ol	ADJ	_	_	10	acl	_	_
9	tüm	tüm	DET	_	PronType=Art	10	det	_	_
10	uçuşları	uç	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	11	obj	_	_
11	göster	göster	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 dep	color:blue
1	Memphis'ten	memphis	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Tacoma'ya	tacoma	PROPN	_	Case=Dat|Number=Sing	3	obl	_	_
3	uçuş	uç	NOUN	_	Case=Nom|Number=Sing|Person=3	4	obj	_	_
4	bul	bul	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
5	akşam	akşam	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nmod	_	_
6	yemeği	yemek	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	dep	_	_

~~~


