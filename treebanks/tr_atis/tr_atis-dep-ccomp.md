---
layout: base
title:  'Statistics of ccomp in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `ccomp`

This relation is universal.

108 nodes (0%) are attached to their parents as `ccomp`.

100 instances of `ccomp` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.56481481481481.

The following 14 pairs of parts of speech are connected with `ccomp`: <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (50; 46% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (18; 17% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (9; 8% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (7; 6% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (7; 6% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (5; 5% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-AUX.html">AUX</a></tt> (3; 3% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-CCONJ.html">CCONJ</a></tt> (3; 3% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 ccomp	color:blue
1	bana	ben	PRON	_	PronType=Prs	8	obl	_	_
2	simgelerin	simge	NOUN	_	Case=Gen|Number=Plur|Person=3	7	csubj	_	_
3	hangi	hangi	ADJ	_	_	5	amod	_	_
4	ücret	ücret	NOUN	_	Case=Nom|Number=Sing|Person=3	5	nmod	_	_
5	kodlarını	kod	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	7	obj	_	_
6	temsil	temsil	NOUN	_	Case=Nom|Number=Sing|Person=3	7	compound	_	_
7	ettiğini	et	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	8	ccomp	_	_
8	göster	göster	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 ccomp	color:blue
1	Los	los	PROPN	_	Case=Nom|Number=Sing	5	obl	_	_
2	Angeles'te	angeles	PROPN	_	Case=Loc|Number=Sing	1	flat	_	_
3	hangi	hangi	ADJ	_	_	4	amod	_	_
4	havaalanlarının	havaalan	NOUN	_	Case=Gen|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	5	nmod	_	_
5	olduğunu	ol	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	ccomp	_	_
6	bilmek	bil	NOUN	_	Case=Nom|Number=Sing|Person=3	7	xcomp	_	_
7	istiyorum	iste	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 ccomp	color:blue
1	Philadelphia'dan	philadelphia	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Pittsburgh'a	pittsburgh	PROPN	_	Case=Dat|Number=Sing	6	nmod	_	_
3	öğleden	öğle	NOUN	_	Case=Abl|Number=Sing|Person=3	6	nmod	_	_
4	sonra	sonra	ADP	_	_	3	case	_	_
5	hangi	hangi	ADJ	_	_	6	ccomp	_	_
6	uçuşlar	uç	NOUN	_	Case=Nom|Number=Plur|Person=3	7	nsubj	_	_
7	var	var	ADJ	_	_	0	root	_	_

~~~


