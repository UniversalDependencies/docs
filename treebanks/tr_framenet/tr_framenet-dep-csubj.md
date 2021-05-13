---
layout: base
title:  'Statistics of csubj in UD_Turkish-FrameNet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-FrameNet: Relations: `csubj`

This relation is universal.

36 nodes (0%) are attached to their parents as `csubj`.

36 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.47222222222222.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (28; 78% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 csubj	color:blue
1	Uçağın	uçak	NOUN	_	Case=Gen|Number=Sing|Person=3	3	nsubj	_	_
2	sorti	sorti	NOUN	_	Case=Nom|Number=Sing|Person=3	3	compound	_	_
3	yapması	yap	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	csubj	_	_
4	kulenin	kule	NOUN	_	Case=Gen|Number=Sing|Person=3	6	nsubj	_	_
5	ilgisini	ilgi	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	compound	_	_
6	çekmişti	çek	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 csubj	color:blue
1	Sebzeleri	sebze	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	3	obj	_	_
2	elden	el	NOUN	_	Case=Abl|Number=Sing|Person=3	3	compound	_	_
3	almak	al	NOUN	_	Case=Nom|Number=Sing|Person=3	5	csubj	_	_
4	en	en	ADV	_	Degree=Sup	5	advmod	_	_
5	sağlıklısı	sağlıklı	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 csubj	color:blue
1	Ekmek	ekmek	NOUN	_	Case=Nom|Number=Sing|Person=3	2	nsubj	_	_
2	azalmış	azal	ADJ	_	_	5	parataxis	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	almak	al	NOUN	_	Case=Nom|Number=Sing|Person=3	5	csubj	_	_
5	gerekli	gerekli	ADJ	_	_	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


