---
layout: relation
title: 'clf'
shortdef: 'classifier'
udver: '2'
---

The `clf` relation is used in noun phrases where a cardinal numeral (1,4), an ordinal numeral (2), or a determiner (3) modifying the head noun is accompanied by a classifier. The classifier is attached to the numeral if a numeral is present, or else to the determiner. Note that ordinal numerals are tagged <a>`ADJ`</a> and labeled <a>`amod`</a> in relation to the noun; they are the only words tagged `ADJ` that can be accompanied by a classifier.

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
2	隻	_	NOUN	_	_	1	clf	_	CL
3	雀仔	_	NOUN	_	_	0	root	_	bird

1	"the	_	_	_	_	0	_	_	_
2	first	_	_	_	_	0	_	_	_
3	bird"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 1 2 clf	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	呢	_	DET	_	_	3	det	_	this
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
1	呢	_	DET	_	_	4	det	_	this
2	一	_	NUM	_	_	4	nummod	_	one
3	場	_	NOUN	_	_	2	clf	_	CL:spectator-event
4	友誼賽	_	NOUN	_	_	0	root	_	goodwill-competition

1	"this	_	_	_	_	0	_	_	_
2	goodwill	_	_	_	_	0	_	_	_
3	competition"	_	_	_	_	0	_	_	_

~~~

### Non-`clf` functions of Mandarin classifiers

In other constructions involving classifiers, they are annotated with other syntax relations. First, in Cantonese a classifier may also be considered to function as a determiner when a noun phrase starts with a bare classifier, as in (5, 6).

~~~ conllu
1	切	_	VERB	_	_	0	root	_	cut
2	個	_	NOUN	_	_	3	det	_	CL:generic
3	梨	_	NOUN	_	_	1	obj	_	pear

1	"cut	_	_	_	_	0	_	_	_
2	a	_	_	_	_	0	_	_	_
3	pear"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
1	隻	_	NOUN	_	_	2	det	_	CL
2	貓	_	NOUN	_	_	3	nsubj	_	cat
3	跌	_	VERB	_	_	0	root	_	fall
4	低	_	VERB	_	_	3	compound:dir	_	lower
5	咗	_	AUX	_	_	3	aux	_	PERF

1	"the	_	_	_	_	0	_	_	_
2	cat	_	_	_	_	0	_	_	_
3	fell	_	_	_	_	0	_	_	_
4	down"	_	_	_	_	0	_	_	_

~~~

Second, if a noun phrase does not have a regular noun, then the classifier is promoted to head of the noun phrase and any numeral or determiner would depend on the classifier, such as in (7) and (8). 

~~~ conllu
1	畀	_	VERB	_	_	0	root	_	give
2	三	_	NUM	_	_	3	nummod	_	three
3	分鐘	_	NOUN	_	_	1	obj	_	minutes
4	我	_	PRON	_	_	1	iobj	_	1SG

1	"Give	_	_	_	_	0	_	_	_
2	me	_	_	_	_	0	_	_	_
3	three	_	_	_	_	0	_	_	_
4	minutes."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
1	邊	_	DET	_	_	2	det	_	which
2	位	_	NOUN	_	_	3	nsubj	_	CL:person
3	搵	_	VERB	_	_	0	root	_	look-for
4	馬	_	PROPN	_	_	5	compound	_	Ma
5	生	_	NOUN	_	_	3	obj	_	Mr.
6	呀	_	PART	_	_	3	discourse:sp	_	SP

1	"Who	_	_	_	_	0	_	_	_
2	(which	_	_	_	_	0	_	_	_
3	person)	_	_	_	_	0	_	_	_
4	is	_	_	_	_	0	_	_	_
5	looking	_	_	_	_	0	_	_	_
6	for	_	_	_	_	0	_	_	_
7	Mr.	_	_	_	_	0	_	_	_
8	Ma?"	_	_	_	_	0	_	_	_

~~~

If there is a genitive 嘅 _ge3_ between the classifier and the noun, then the classifier is also treated as a head noun for the numeral, and it is labeled as an [nmod]() dependent of the noun.

~~~ conllu
1	呢	_	DET	_	_	3	det	_	these
2	幾	_	DET	_	_	3	nummod	_	several
3	日	_	NOUN	_	_	5	nmod	_	CL:days
4	嘅	_	PART	_	_	3	case	_	GEN
5	行程	_	NOUN	_	_	0	root	_	itinerary

1	"these	_	_	_	_	0	_	_	_
2	few	_	_	_	_	0	_	_	_
3	day's	_	_	_	_	0	_	_	_
4	itinerary"	_	_	_	_	0	_	_	_

~~~

Note that classifiers are tagged as NOUN. The feature `NounType=Clf` is recommended for distinguishing classifiers from regular nouns.
<!-- Interlanguage links updated Út zář 29 20:31:46 CEST 2020 -->
