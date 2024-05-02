---
layout: base
title:  'Statistics of nsubj:pass in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="tr_atis-dep-nsubj.html">nsubj</a></tt>.

25 nodes (0%) are attached to their parents as `nsubj:pass`.

25 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (18; 72% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (5; 20% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nsubj:pass	color:blue
1	American	american	PROPN	_	Case=Nom|Number=Sing	7	obl:agent	_	_
2	Airlines	airlines	PROPN	_	Case=Nom|Number=Sing	1	flat	_	_
3	tarafından	tarafından	ADV	_	_	1	case	_	_
4	ne	ne	ADJ	_	_	6	amod	_	_
5	tür	tür	NOUN	_	Case=Nom|Number=Sing|Person=3	4	compound	_	_
6	uçaklar	uçak	NOUN	_	Case=Nom|Number=Plur|Person=3	7	nsubj:pass	_	_
7	kullanılıyor	kullan	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj:pass	color:blue
1	Atlanta'dan	atlanta	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Boston'a	boston	PROPN	_	Case=Dat|Number=Sing	9	obl	_	_
3	yedinci	yedinci	NUM	_	NumType=Ord	4	nummod	_	_
4	Temmuz	temmuz	PROPN	_	Case=Nom|Number=Sing	5	nmod	_	_
5	sabahı	sabah	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	obl	_	_
6	hangi	hangi	ADJ	_	_	7	amod	_	_
7	tip	tip	NOUN	_	Case=Nom|Number=Sing|Person=3	8	nmod	_	_
8	uçakların	uçak	NOUN	_	Case=Gen|Number=Plur|Person=3	9	nsubj:pass	_	_
9	kullanılacağını	kullan	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	10	ccomp	_	_
10	bilmek	bil	NOUN	_	Case=Nom|Number=Sing|Person=3	11	xcomp	_	_
11	istiyorum	iste	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj:pass	color:blue
1	evet	evet	NOUN	_	Case=Nom|Number=Sing|Person=3	9	discourse	_	_
2	7	7	NUM	_	NumType=Card	3	nummod	_	_
3	Temmuz	temmuz	PROPN	_	Case=Nom|Number=Sing	4	nmod:tmod	_	_
4	sabah	sabah	NOUN	_	Case=Nom|Number=Sing|Person=3	8	nmod:tmod	_	_
5	Atlanta'dan	atlanta	PROPN	_	Case=Abl|Number=Sing	6	nmod	_	_
6	Boston'a	boston	PROPN	_	Case=Dat|Number=Sing	8	nmod	_	_
7	hangi	hangi	ADJ	_	_	8	amod	_	_
8	uçuşlar	uç	NOUN	_	Case=Nom|Number=Plur|Person=3	9	nsubj:pass	_	_
9	kullanılacak	kullan	ADJ	_	_	0	root	_	_

~~~


