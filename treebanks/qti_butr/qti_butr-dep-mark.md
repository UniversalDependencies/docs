---
layout: base
title:  'Statistics of mark in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `mark`

This relation is universal.

7 nodes (2%) are attached to their parents as `mark`.

5 instances of `mark` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `mark`: <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-SCONJ.html">SCONJ</a></tt> (5; 71% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-SCONJ.html">SCONJ</a></tt> (1; 14% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-PART.html">PART</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 mark	color:blue
1	Seems	seem	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	Lang=en
2	like	like	SCONJ	_	_	6	mark	_	Lang=en
3	bu	bu	DET	_	_	4	det	_	Lang=tr
4	gece	gece	NOUN	_	Case=Nom|Number=Sing|Person=3	6	obl	_	Lang=tr
5	burada	bura	PRON	_	Case=Loc|Number=Sing|Person=3	6	obl	_	Lang=tr
6	uyuyacağız	uyu	VERB	_	Aspect=Perf|Number=Plur|Person=1|Polarity=Pos|Tense=Fut	1	ccomp	_	Lang=tr|SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 4 mark	color:blue
1	Bunu	bu	PRON	_	Case=Acc|Number=Sing|Person=3	2	obj	_	Lang=tr
2	yapmak	yap	VERB	_	Case=Nom|Polarity=Pos	3	nsubj	_	Lang=tr
3	zorundayım	zorunda	NOUN	_	Number=Sing|Number[psor]=Sing|Person=1|Person[psor]=1	0	root	_	Lang=tr
4	çünkü	çünkü	SCONJ	_	_	12	mark	_	Lang=tr
5	literally	literally	ADV	_	_	12	advmod	_	Lang=en
6	my	my	DET	_	_	8	det	_	Lang=en
7	görev	görev	NOUN	_	Case=Nom|Number=Sing|Person=3	8	nmod	_	Lang=tr
8	tanımımda	tanım	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	10	obl	_	Lang=tr
9	yer	yer	NOUN	_	Case=Nom|Number=Sing|Person=3	10	compound	_	Lang=tr
10	alan	al	VERB	_	Polarity=Pos|Tense=Pres|VerbForm=Part	12	acl	_	Lang=tr
11	bir	bir	DET	_	_	12	det	_	Lang=tr
12	şey	şey	NOUN	_	Case=Nom|Number=Sing|Person=3	3	conj	_	Lang=tr|SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 mark	color:blue
1	You're	you	PRON	_	_	3	nsubj	_	Lang=en
2	not	not	PART	_	Polarity=Neg	3	advmod	_	Lang=en
3	supposed	suppose	VERB	_	Tense=Past|VerbForm=Part	0	root	_	Lang=en
4	to	to	PART	_	_	6	mark	_	Lang=en
5	onu	o	PRON	_	Case=Acc|Number=Sing|Person=3	6	obj	_	Lang=tr
6	yapmak	yap	VERB	_	Case=Nom|Polarity=Pos|VerbForm=Vnoun	3	xcomp	_	Lang=tr
7	bu	bu	DET	_	_	8	det	_	Lang=tr
8	arada	ara	NOUN	_	Case=Loc|Number=Sing|Person=3	3	discourse	_	Lang=tr|SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


