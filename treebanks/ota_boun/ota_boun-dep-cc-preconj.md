---
layout: base
title:  'Statistics of cc:preconj in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="ota_boun-dep-cc.html">cc</a></tt>.

12 nodes (0%) are attached to their parents as `cc:preconj`.

12 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-CCONJ.html">CCONJ</a></tt> (11; 92% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-CCONJ.html">CCONJ</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	Hem	hem	CCONJ	_	_	3	cc:preconj	_	_
2	kendi	kendi	PRON	Reflex	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Reflex=Yes	3	nmod:poss	_	_
3	varlığını	varlık	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obj	_	_
4	hem	hem	CCONJ	_	_	6	cc	_	_
5	karısının	karı	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	nmod:poss	_	_
6	sevgisini	sevgi	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	conj	_	_
7	görmek	gör	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	9	csubj	_	_
8	bir	bir	DET	Indef	_	9	det	_	_
9	saâdet	saâdet	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
10	değil	değil	AUX	Neg	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	9	aux	_	_
11	miydi	mi	AUX	Ques	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Tense=Past	9	discourse	_	_
12	?	?	PUNCT	Ques	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	Hem	hem	CCONJ	_	_	2	cc:preconj	_	_
2	yiyorlar	ye	VERB	_	Aspect=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres	0	root	_	_
3	hem	hem	CCONJ	_	_	5	cc	_	_
4	gülerek	gül	VERB	Conv	Aspect=Prog|Polarity=Pos|VerbForm=Conv	5	advcl	_	_
5	konuşuyorlar	konuş	VERB	_	Aspect=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres	2	conj	_	_
6	.	.	PUNCT	Stop	_	5	punct	_	_

~~~


