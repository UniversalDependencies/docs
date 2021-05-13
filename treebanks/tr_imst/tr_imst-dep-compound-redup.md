---
layout: base
title:  'Statistics of compound:redup in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="tr_imst-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="tr_imst-dep-compound-lvc.html">compound:lvc</a></tt>.

199 nodes (0%) are attached to their parents as `compound:redup`.

198 instances of `compound:redup` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08542713567839.

The following 20 pairs of parts of speech are connected with `compound:redup`: <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (71; 36% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (57; 29% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (23; 12% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (11; 6% instances), <tt><a href="tr_imst-pos-X.html">X</a></tt>-<tt><a href="tr_imst-pos-X.html">X</a></tt> (10; 5% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-PRON.html">PRON</a></tt> (9; 5% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="tr_imst-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_imst-pos-X.html">X</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:redup	color:blue
1	Belli	belli	ADJ	Adj	_	8	amod	_	_
2	ki	ki	CCONJ	Conj	_	1	mark	_	_
3	kız	kız	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	8	nsubj	_	_
4	dört	dört	NUM	NNum	Case=Nom|Number=Sing|NumType=Card|Person=3	8	obj	_	_
5	gününü	gün	NOUN	Noun	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	compound	_	_
6	doğru	doğru	ADJ	Adj	_	8	amod	_	_
7	dürüst	dürüst	ADJ	Adj	_	6	compound:redup	_	_
8	geçirmişti	geçir	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pqp	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound:redup	color:blue
1	Koşa	koşa	ADJ	Adj	_	6	amod	_	_
2	koşa	koş	VERB	Verb	Aspect=Perf|Mood=Opt|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	1	compound:redup	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	4	punct	_	_
4	nefes	nefes	NOUN	Noun	Case=Nom|Number=Sing|Person=3	1	conj	_	_
5	nefese	nefes	NOUN	Noun	Case=Dat|Number=Sing|Person=3	4	compound:redup	_	_
6	geldiniz	gel	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Past	0	root	_	_
7	kıraathaneye	kıraathane	NOUN	Noun	Case=Dat|Number=Sing|Person=3	6	obl	_	SpaceAfter=No
8	...	...	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:redup	color:blue
1	İkincisine	iki	NUM	NNum	Case=Dat|Number=Sing|Number[psor]=Sing|NumType=Ord|Person=3|Person[psor]=3	2	amod	_	_
2	başladık	başla	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	4	punct	_	_
4	gitti	git	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	2	conj	_	_
5	getirdi	getir	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	2	conj	_	_
6	sallana	salla	VERB	Verb	Aspect=Perf|Mood=Opt|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|Voice=Pass	5	nmod	_	_
7	sallana	salla	VERB	Verb	Aspect=Perf|Mood=Opt|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|Voice=Pass	6	compound:redup	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


