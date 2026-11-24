---
layout: base
title:  'Statistics of csubj in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `csubj`

This relation is universal.

44 nodes (0%) are attached to their parents as `csubj`.

44 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27272727272727.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (21; 48% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (10; 23% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (8; 18% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 csubj	color:blue
1	fenn-i	fenn	NOUN	_	Case=Nom|Number=Sing|Person=3	7	nsubj	_	_
2	meẕkūrda	meẕkūr	ADJ	Adj	Case=Loc	1	nmod:poss	_	_
3	daḫı	daḫı	PART	Emph	_	1	advmod:emph	_	_
4	ḥaẓẓ-ı	ḥaẓẓ	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nmod:poss	_	_
5	ʿaẓīm	ʿaẓīm	ADJ	Adj	_	4	nmod:poss	_	_
6	ṣāḥibleri	ṣāḥib	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	7	obj	_	_
7	olduġı	ol	VERB	Ptcp	Aspect=Perf|Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	9	csubj	_	_
8	maʿlūmum	maʿlūm	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	9	obj	_	_
9	oldı	ol	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 csubj	color:blue
1	niteki	niteki	ADV	_	_	10	advmod	_	_
2	berü	berü	ADJ	Adj	_	3	amod	_	_
3	cānibde	cānib	NOUN	_	Case=Loc|Number=Sing|Person=3	5	amod	_	_
4	ki	ki	ADP	Rel	_	3	case	_	_
5	nāmverān	nāmver	ADJ	NAdj	Case=Nom|Number=Plur|Person=3	9	nsubj	_	_
6	altı	altı	NUM	ANum	NumType=Card	8	nummod	_	_
7	biñ	biñ	NUM	ANum	NumType=Card	6	flat	_	_
8	nüfūs	nüfūs	NOUN	_	Case=Nom|Number=Sing|Person=3	9	obj	_	_
9	idügi	it	VERB	Ptcp	Aspect=Perf|Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	10	csubj	_	_
10	muḳarrer	muḳarrer	ADJ	Adj	_	0	root	_	_
11	idi	y	AUX	Overt	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	9	cop	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 csubj	color:blue
1	irteye	irte	NOUN	_	Case=Dat|Number=Sing|Person=3	2	obl	_	_
2	ḳalan	ḳal	VERB	Ptcp	Polarity=Pos|Tense=Pres|VerbForm=Part	3	acl	_	_
3	ḳażādan	ḳażā	NOUN	_	Case=Abl|Number=Sing|Person=3	4	obl	_	_
4	ḳorḳmamaḳ	ḳorḳ	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Neg|VerbForm=Vnoun	5	csubj	_	_
5	gerek	gerek	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	dür	y	AUX	Zero	Aspect=Perf|Number=Sing|Person=3|Tense=Pres	5	cop	_	_

~~~


