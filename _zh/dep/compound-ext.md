---
layout: relation
title: 'compound:ext'
shortdef: 'extent and descriptive verb compound'
udver: '2'
---

This relation is used for two closely related constructions known in Chinese linguistics as "descriptive complements" and "complements of extent". We treat them both in the same way with regards to the particle 得 _de_, where the particle is a `compound:ext` dependent of the verb it follows (with the idea that the addition of 得 changes the valence structure of the verb such that it takes a(n additional) clause or secondary predicate as its complement.

Descriptive complements (1) are treated as [xcomp]() dependents of the compounded verb (since they include a predicative adjective without a subject).

~~~ conllu
# visual-style 2 3 compound:ext	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	你	_	PRON	_	_	2	nsubj	_	2SG
2	説	_	VERB	_	_	0	root	_	say
3	得	_	PART	_	_	2	compound:ext	_	DE
4	對	_	ADJ	_	_	2	xcomp	_	correct

1	"You	_	_	_	_	0	_	_	_
2	said	_	_	_	_	0	_	_	_
3	it	_	_	_	_	0	_	_	_
4	correctly."	_	_	_	_	0	_	_	_

~~~

For complements of extent where the head of the complement is a main verb, they are treated as [xcomp]() (2) or [ccomp]() (3) dependents, depending on whether (i) the subject of the complement is absent and coreferential with the subject of the first verb or (ii) the subject of the complement is present, respectively.

~~~ conllu
# visual-style 2 3 compound:ext	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	熱	_	ADJ	_	_	0	root	_	hot
3	得	_	PART	_	_	2	compound:ext	_	DE
4	想	_	AUX	_	_	5	aux	_	want
5	吐	_	VERB	_	_	2	xcomp	_	vomit
6	了	_	PART	_	_	5	discourse:sp	_	SP

1	"I'm	_	_	_	_	0	_	_	_
2	so	_	_	_	_	0	_	_	_
3	hot	_	_	_	_	0	_	_	_
4	I	_	_	_	_	0	_	_	_
5	want	_	_	_	_	0	_	_	_
6	to	_	_	_	_	0	_	_	_
7	vomit."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 1 2 compound:ext	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	熱	_	ADJ	_	_	0	root	_	hot
2	得	_	PART	_	_	1	compound:ext	_	DE
3	連	_	ADV	_	_	6	advmod	_	even
4	塑膠袋	_	NOUN	_	_	6	nsubj	_	plastic-bag
5	也	_	ADV	_	_	6	advmod	_	also
6	出汗	_	VERB	_	_	1	ccomp	_	sweat
7	了	_	PART	_	_	6	discourse:sp	_	SP

1	"It's	_	_	_	_	0	_	_	_
2	so	_	_	_	_	0	_	_	_
3	hot	_	_	_	_	0	_	_	_
4	even	_	_	_	_	0	_	_	_
5	plastic	_	_	_	_	0	_	_	_
6	bags	_	_	_	_	0	_	_	_
7	are	_	_	_	_	0	_	_	_
8	sweating."	_	_	_	_	0	_	_	_

~~~

Objects of the matrix verb usually cannot occur in their regular postverbal position after the V + 得 compound and instead must be expressed through a "verb-copying" strategy where [verb + object] is first mentioned in an adverbial clause, as illustrated in (4). 

~~~ conllu
# visual-style 4 5 compound:ext	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	你	_	PRON	_	_	2	nsubj	_	2SG
2	喝	_	VERB	_	_	4	advcl	_	drink
3	湯	_	NOUN	_	_	2	obj	_	soup
4	喝	_	VERB	_	_	0	root	_	drink
5	得	_	PART	_	_	4	compound:ext	_	DE
6	這麼	_	ADV	_	_	7	advmod	_	so
7	慢	_	ADJ	_	_	4	xcomp	_	slow

1	"You	_	_	_	_	0	_	_	_
2	drink	_	_	_	_	0	_	_	_
3	soup	_	_	_	_	0	_	_	_
4	so	_	_	_	_	0	_	_	_
5	slowly."	_	_	_	_	0	_	_	_

~~~

However, there are some notable exceptions to the above rule, as seen in (5).

~~~ conllu
# visual-style 3 4 compound:ext	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	什麼	_	DET	_	_	2	det	_	what
2	事	_	NOUN	_	_	3	dislocated	_	matter
3	找	_	VERB	_	_	0	root	_	look-for
4	得	_	PART	_	_	3	compound:ext	_	DE
5	我	_	PRON	_	_	3	obj	_	1SG
6	這麼	_	ADV	_	_	7	advmod	_	so
7	急	_	ADJ	_	_	3	xcomp	_	urgent
8	？	_	_	_	_	3	punct	_	_

1	"What's	_	_	_	_	0	_	_	_
2	got	_	_	_	_	0	_	_	_
3	you	_	_	_	_	0	_	_	_
4	looking	_	_	_	_	0	_	_	_
5	for	_	_	_	_	0	_	_	_
6	me	_	_	_	_	0	_	_	_
7	so	_	_	_	_	0	_	_	_
8	urgently?"	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated St lis 3 20:58:45 CET 2021 -->
