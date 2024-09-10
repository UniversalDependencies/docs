---
layout: base
title:  'Statistics of advmod in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="ota_dudu-dep-advmod-emph.html">advmod:emph</a></tt>.

27 nodes (3%) are attached to their parents as `advmod`.

26 instances of `advmod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.92592592592593.

The following 6 pairs of parts of speech are connected with `advmod`: <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (13; 48% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (7; 26% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (3; 11% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (2; 7% instances), <tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="ota_dudu-pos-NUM.html">NUM</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	oġlan	oġlan	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nsubj	_	_
2	yine	yine	ADV	_	_	3	advmod	_	_
3	eydür	de	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	şimdi	şimdi	ADV	Adverb	_	2	advmod	_	_
2	vaḳt	vaḳt	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	obl	_	_
3	degil	degil	AUX	Neg	_	2	aux	_	_
4	dir	i	AUX	Zero	Aspect=Perf|Number=Sing|Person=3|Tense=Pres	2	cop	_	_
5	gidilmez	git	VERB	Verb	Aspect=Hab|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|Voice=Pass	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
1	ṣan’at-ı	ṣan’at	NOUN	_	Case=Nom|Number=Sing|Person=3	6	obj	_	_
2	şiʿire	şiʿir	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	1	nmod:poss	_	_
3	pek	pek	ADV	_	_	4	advmod	_	_
4	degersiz	degersiz	ADJ	Adj	_	6	amod	_	DerivedFrom=deger
5	bir	bir	DET	Indef	_	6	det	_	_
6	intisâbım	intisâb	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	7	nsubj	_	_
7	var	var	NOUN	Exist	Number=Sing|Person=3|Polarity=Pos	0	root	_	_
8	dır	i	AUX	Zero	Aspect=Perf|Number=Sing|Person=3|Tense=Pres	7	cop	_	_
9	.	.	PUNCT	Stop	_	7	punct	_	_

~~~


