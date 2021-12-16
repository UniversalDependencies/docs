---
layout: base
title:  'Statistics of parataxis in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `parataxis`

This relation is universal.

115 nodes (0%) are attached to their parents as `parataxis`.

63 instances of `parataxis` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.67826086956522.

The following 12 pairs of parts of speech are connected with `parataxis`: <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (81; 70% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (13; 11% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (9; 8% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 parataxis	color:blue
1	Boston'dan	boston	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Oakland'a	oakland	PROPN	_	Case=Dat|Number=Sing	3	obl	_	_
3	uçmak	uç	NOUN	_	Case=Nom|Number=Sing|Person=3	4	xcomp	_	_
4	istiyorum	iste	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
5	Hangi	hangi	ADJ	_	_	6	amod	_	_
6	havayolları	havayol	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	9	nsubj	_	_
7	Boston'dan	boston	PROPN	_	Case=Abl|Number=Sing	8	nmod	_	_
8	Oakland'a	oakland	PROPN	_	Case=Dat|Number=Sing	9	obl	_	_
9	uçuyor	uç	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	parataxis	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 parataxis	color:blue
1	Nashville'den	nashville	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Tacoma'ya	tacoma	PROPN	_	Case=Dat|Number=Sing	3	obl	_	_
3	uçmam	uç	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	4	ccomp	_	_
4	lazım	lazım	ADJ	_	_	0	root	_	_
5	sabah	sabah	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nmod	_	_
6	ilk	ilk	ADJ	_	_	4	advmod	_	_
7	iş	iş	NOUN	_	Case=Nom|Number=Sing|Person=3	6	compound	_	_
8	neler	ne	VERB	_	Number=Sing|Person=3|Tense=Pres	9	csubj	_	_
9	var	var	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	parataxis	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 parataxis	color:blue
1	Dallas'ta	dallas	PROPN	_	Case=Loc|Number=Sing	4	obl	_	_
2	karayolu	karayol	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	nmod	_	_
3	ulaşımı	ulaşım	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	nsubj	_	_
4	gerekli	gerek	ADJ	_	_	9	parataxis	_	_
5	lütfen	lütfen	ADV	_	_	9	discourse	_	_
6	bana	ben	PRON	_	PronType=Prs	9	obl	_	_
7	mevcut	mevcut	ADJ	_	_	8	amod	_	_
8	olanakları	olanak	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	9	obj	_	_
9	göster	göster	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


