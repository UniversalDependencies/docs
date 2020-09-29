---
layout: relation
title: 'clf'
shortdef: 'classifier'
udver: '2'
---

The `clf` relation is used in noun phrases where a cardinal numeral (1,3), an ordinal numeral (2), or a determiner (4) modifying the head noun is accompanied by a classifier. The classifier is attached to the numeral if a numeral is present, or else to the determiner. Note that ordinal numerals are tagged <a>`ADJ`</a> and labeled <a>`amod`</a> in relation to the noun; they are the only words tagged [`ADJ`]() that can be accompanied by a classifier.

~~~ conllu
# visual-style 1 2 clf	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	一	_	NUM	_	_	3	nummod	_	one
2	團	_	NOUN	_	_	1	clf	_	CL:sphere
3	火	_	NOUN	_	_	0	root	_	fire

1	"a	_	_	_	_	0	_	_	_
2	ball	_	_	_	_	0	_	_	_
3	of	_	_	_	_	0	_	_	_
4	fire"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 1 2 clf	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	第一	_	ADJ	_	_	3	amod	_	one
2	位	_	NOUN	_	_	1	clf	_	CL:person
3	老師	_	NOUN	_	_	0	root	_	teacher

1	"the	_	_	_	_	0	_	_	_
2	first	_	_	_	_	0	_	_	_
3	teacher"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 1 2 clf	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	這	_	DET	_	_	3	det	_	this
2	本	_	NOUN	_	_	1	clf	_	CL:book
3	書	_	NOUN	_	_	0	root	_	book

1	"this	_	_	_	_	0	_	_	_
2	book"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 3 clf	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	這	_	DET	_	_	4	det	_	this
2	一	_	NUM	_	_	4	nummod	_	one
3	場	_	NOUN	_	_	2	clf	_	CL:spectator-event
4	友誼賽	_	NOUN	_	_	0	root	_	goodwill-competition

1	"this	_	_	_	_	0	_	_	_
2	goodwill	_	_	_	_	0	_	_	_
3	competition"	_	_	_	_	0	_	_	_

~~~

### Non-`clf` functions of Mandarin classifiers

In other constructions involving classifiers, they are annotated with other syntax relations. First, in Mandarin a classifier may also be considered to function as an indefinite determiner when a noun phrase consisting of a bare classifier accompanying a noun is in post-verbal position, as in (4).

~~~ conllu
1	切	_	VERB	_	_	0	root	_	cut
2	個	_	NOUN	_	_	3	det	_	CL:generic
3	梨子	_	NOUN	_	_	1	obj	_	pear

1	"cut	_	_	_	_	0	_	_	_
2	a	_	_	_	_	0	_	_	_
3	pear"	_	_	_	_	0	_	_	_

~~~

Second, if a noun phrase does not have a regular noun, then the classifier is promoted to head of the noun phrase and any numeral or determiner would depend on the classifier, such as in (5) and (6). 

~~~ conllu
1	給	_	VERB	_	_	0	root	_	give
2	我	_	PRON	_	_	1	iobj	_	1SG
3	三	_	NUM	_	_	4	nummod	_	three
4	分鐘	_	NOUN	_	_	1	obj	_	minutes

1	"Give	_	_	_	_	0	_	_	_
2	me	_	_	_	_	0	_	_	_
3	three	_	_	_	_	0	_	_	_
4	minutes."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
1	哪	_	DET	_	_	2	det	_	which
2	位	_	NOUN	_	_	3	nsubj	_	CL:person
3	找	_	VERB	_	_	0	root	_	look-for
4	馬	_	PROPN	_	_	5	compound	_	Ma
5	先生	_	NOUN	_	_	3	obj	_	Mr.

1	"Who	_	_	_	_	0	_	_	_
2	(which	_	_	_	_	0	_	_	_
3	person)	_	_	_	_	0	_	_	_
4	is	_	_	_	_	0	_	_	_
5	looking	_	_	_	_	0	_	_	_
6	for	_	_	_	_	0	_	_	_
7	Mr.	_	_	_	_	0	_	_	_
8	Ma?"	_	_	_	_	0	_	_	_

~~~

If there is a genitive 的 _de_ between the classifier and the noun, then the classifier is also treated as a head noun for the numeral, and it is labeled as an [nmod]() dependent of the noun.

~~~ conllu
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	買	_	VERB	_	_	0	root	_	buy
3	了	_	AUX	_	_	2	aux	_	PERF
4	一	_	NUM	_	_	5	nummod	_	one
5	磅	_	NOUN	_	_	7	nmod	_	CL:pound
6	的	_	PART	_	_	5	case	_	GEN
7	肉	_	NOUN	_	_	2	obj	_	meat

1	"I	_	_	_	_	0	_	_	_
2	bought	_	_	_	_	0	_	_	_
3	a	_	_	_	_	0	_	_	_
4	pound	_	_	_	_	0	_	_	_
5	of	_	_	_	_	0	_	_	_
6	meat."	_	_	_	_	0	_	_	_

~~~

Note that classifiers are tagged as [NOUN](). The feature `NounType=Clf` is recommended for distinguishing classifiers from regular nouns.
<!-- Interlanguage links updated Út zář 29 20:23:23 CEST 2020 -->
