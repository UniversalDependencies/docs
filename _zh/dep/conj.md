---
layout: relation
title: 'conj'
shortdef: 'conjunct'
udver: '2'
---

A conjunct is a relation between two elements that are coordinated. The first conjunct is the head of all following conjuncts. However, any conjunction words (tagged [CCONJ]()) and punctuation in between conjuncts depend on their immediately following conjunct.

The elements can be connected by a coordinating conjunction (1), or simply juxtaposed next to each other with or without punctuation (2). 

~~~ conllu
# visual-style 1 3 conj	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	黃金週	_	PROPN	_	_	0	root	_	Golden-Week
2	和	_	CCONJ	_	_	3	cc	_	and
3	暑假	_	NOUN	_	_	1	conj	_	summer-vacation

1	"Golden	_	_	_	_	0	_	_	_
2	Week	_	_	_	_	0	_	_	_
3	and	_	_	_	_	0	_	_	_
4	summer	_	_	_	_	0	_	_	_
5	vacation"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 3 5 conj	color:blue
# visual-style 3 7 conj	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	你	_	PRON	_	_	3	nsubj	_	2SG
2	慢慢	_	ADV	_	_	3	advmod	_	slowly
3	吸收	_	VERB	_	_	0	root	_	absorb
4	、	_	PUNCT	_	_	5	punct	_	_
5	消化	_	VERB	_	_	3	conj	_	digest
6	、	_	PUNCT	_	_	7	punct	_	_
7	考慮	_	VERB	_	_	3	conj	_	consider

1	"Slowly	_	_	_	_	0	_	_	_
2	absorb,	_	_	_	_	0	_	_	_
3	digest,	_	_	_	_	0	_	_	_
4	and	_	_	_	_	0	_	_	_
5	think	_	_	_	_	0	_	_	_
6	it	_	_	_	_	0	_	_	_
7	over."	_	_	_	_	0	_	_	_

~~~

Clauses can also be coordinated (3). 

~~~ conllu
# visual-style 3 8 conj	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
1	我	_	PRON	_	_	3	nsubj	_	1SG
2	已經	_	ADV	_	_	3	advmod	_	already
3	吃	_	VERB	_	_	0	root	_	eat
4	飽	_	ADJ	_	_	3	compound:vv	_	full
5	了	_	PART	_	_	3	discourse:sp	_	SP
6	，	_	PUNCT	_	_	8	punct	_	_
7	而且	_	CCONJ	_	_	8	cc	_	and
8	覺得	_	VERB	_	_	3	conj	_	feel
9	很	_	ADV	_	_	10	advmod	_	very
10	睏	_	ADJ	_	_	8	xcomp	_	sleepy

1	"I'm	_	_	_	_	0	_	_	_
2	already	_	_	_	_	0	_	_	_
3	full	_	_	_	_	0	_	_	_
4	from	_	_	_	_	0	_	_	_
5	eating,	_	_	_	_	0	_	_	_
6	and	_	_	_	_	0	_	_	_
7	I	_	_	_	_	0	_	_	_
8	feel	_	_	_	_	0	_	_	_
9	very	_	_	_	_	0	_	_	_
10	sleepy,	_	_	_	_	0	_	_	_
11	too."	_	_	_	_	0	_	_	_

~~~

We also use this function for the [VERB]() + [NEG]() + [VERB]() (or [AUX]() + [NEG]() + [AUX]()) interrogative construction (4-5). 

~~~ conllu
# visual-style 5 7 conj	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	外面	_	NOUN	_	_	3	obl	_	outside
2	好	_	ADV	_	_	3	advmod	_	very
3	冷	_	ADJ	_	_	0	root	_	cold
4	，	_	PUNCT	_	_	5	punct	_	_
5	是	_	VERB	_	_	3	parataxis	_	be
6	不	_	ADV	_	_	7	advmod	_	NEG
7	是	_	VERB	_	_	5	conj	_	be
8	？	_	PUNCT	_	_	5	punct	_	_

1	"It's	_	_	_	_	0	_	_	_
2	cold	_	_	_	_	0	_	_	_
3	outside,	_	_	_	_	0	_	_	_
4	isn't	_	_	_	_	0	_	_	_
5	it?"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 1 3 conj	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	喝	_	VERB	_	_	0	root	_	drink
2	不	_	ADV	_	_	3	advmod	_	NEG
3	喝	_	VERB	_	_	1	conj	_	drink
4	咖啡	_	NOUN	_	_	1	obj	_	coffee
5	？	_	PUNCT	_	_	1	punct	_	_

1	"Do	_	_	_	_	0	_	_	_
2	you	_	_	_	_	0	_	_	_
3	drink	_	_	_	_	0	_	_	_
4	coffee	_	_	_	_	0	_	_	_
5	(or	_	_	_	_	0	_	_	_
6	not)?"	_	_	_	_	0	_	_	_

~~~

In more formal registers, the negative adverb 否 _fǒu_ may replace the NEG + VERB part of the VERB + NEG + VERB construction  for certain (auxiliary) verbs (e.g., 是否 _shìfǒu_ and 能否 _néngfǒu_ instead of 是不是 _shìbùshì_ and 能不能 _néngbùnéng_). In this case, the negative adverb may also be treated as a `conj` dependent (but note that 是否 _shìfǒu_ may also be an adverb when modifying a main verb).

~~~ conllu
# visual-style 2 3 conj	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	我	_	PRON	_	_	4	nsubj	_	1SG
2	能	_	AUX	_	_	4	aux	_	can
3	否	_	ADV	_	_	2	conj	_	NEG
4	申請	_	VERB	_	_	0	root	_	apply
5	信用卡	_	NOUN	_	_	4	obj	_	credit-card
6	？	_	PUNCT	_	_	4	punct	_	_

1	"Can	_	_	_	_	0	_	_	_
2	I	_	_	_	_	0	_	_	_
3	apply	_	_	_	_	0	_	_	_
4	for	_	_	_	_	0	_	_	_
5	a	_	_	_	_	0	_	_	_
6	credit	_	_	_	_	0	_	_	_
7	card?"	_	_	_	_	0	_	_	_

~~~

Note that the "_et cetera_" particle 等(等) / _děng(děng)_ is treated as the final conjunct in a series of conjuncts.

~~~ conllu
# visual-style 5 8 conj	color:blue
# visual-style 5 7 conj	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
1	這裡	_	PRON	_	_	3	obl	_	here
2	能	_	AUX	_	_	3	aux	_	can
3	買	_	VERB	_	_	0	root	_	buy
4	到	_	VERB	_	_	3	compound:vv	_	arrive
5	臭豆腐	_	NOUN	_	_	3	obj	_	stinky-tofu
6	、	_	PUNCT	_	_	7	punct	_	_
7	滷水蛋	_	PUNCT	_	_	5	conj	_	brined-eggs
8	等等	_	PART	_	_	5	conj	_	etc.

1	"One	_	_	_	_	0	_	_	_
2	can	_	_	_	_	0	_	_	_
3	buy	_	_	_	_	0	_	_	_
4	stinky	_	_	_	_	0	_	_	_
5	tofu,	_	_	_	_	0	_	_	_
6	brined	_	_	_	_	0	_	_	_
7	eggs,	_	_	_	_	0	_	_	_
8	etc.	_	_	_	_	0	_	_	_
9	here."	_	_	_	_	0	_	_	_

~~~

Another special case where `conj` is used is in the paired adjacent prepositional phrases indicating a span of distance, time, _etc_., introduced by prepositions such as 從... 到... / _cóng... dào..._ "from... to...", 由... 到... / _yóu... dào..._ "from... to..." -- the second prepositional phrase is treated as a conjunct of the first:

~~~ conllu
# visual-style 2 4 conj	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	從	_	ADP	_	_	2	case	_	from
2	星期一	_	NOUN	_	_	5	obl:tmod	_	Monday
3	到	_	ADP	_	_	4	case	_	to
4	星期三	_	NOUN	_	_	2	conj	_	Wednesday
5	關門	_	VERB	_	_	0	root	_	close

1	"Closed	_	_	_	_	0	_	_	_
2	from	_	_	_	_	0	_	_	_
3	Monday	_	_	_	_	0	_	_	_
4	to	_	_	_	_	0	_	_	_
5	Wednesday"	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:58 CEST 2021 -->
