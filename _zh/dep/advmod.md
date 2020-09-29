---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
udver: '2'
---

An adverbial modifier of a word is a (non-clausal) adverb or adverbial phrase that serves to modify a predicate (1, 2, 3), a modifier word (4, 5), and in some restricted cases function words (6-8). 

Predicates may be a verb (1) or a predicate adjective (2) or nominal (3) in copular constructions. 

~~~ conllu
# visual-style 3 2 advmod	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	你	_	PRON	_	_	3	nmod	_	2SG
2	已經	_	ADV	_	_	3	advmod	_	already
3	答應	_	VERB	_	_	0	root	_	promise
4	他們	_	PRON	_	_	3	obj	_	3PL

1	"You	_	_	_	_	0	_	_	_
2	already	_	_	_	_	0	_	_	_
3	promised	_	_	_	_	0	_	_	_
4	them."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 1 advmod	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	更	_	ADV	_	_	2	advmod	_	more
2	好	_	ADJ	_	_	0	root	_	good

1	"better"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 6 2 advmod	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	他	_	PRON	_	_	6	nsubj	_	3SG.M
2	曾經	_	ADV	_	_	6	advmod	_	once
3	是	_	VERB	_	_	6	cop	_	COP
4	一	_	NUM	_	_	6	nummod	_	one
5	個	_	NOUN	_	_	4	clf	_	CL:generic
6	廚師	_	NOUN	_	_	0	root	_	chef

1	"He	_	_	_	_	0	_	_	_
2	was	_	_	_	_	0	_	_	_
3	a	_	_	_	_	0	_	_	_
4	chef	_	_	_	_	0	_	_	_
5	once."	_	_	_	_	0	_	_	_

~~~

Modifier words that may be modified by an adverb include numerals (4) and quantifying determiners (5).

~~~ conllu
# visual-style 2 1 advmod	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	大概	_	ADV	_	_	2	advmod	_	around
2	五百	_	NUM	_	_	3	nummod	_	five-hundred
3	元	_	NOUN	_	_	0	root	_	dollars

1	"about	_	_	_	_	0	_	_	_
2	five	_	_	_	_	0	_	_	_
3	hundred	_	_	_	_	0	_	_	_
4	dollars"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 1 advmod	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	太	_	ADV	_	_	2	advmod	_	too
2	多	_	DET	_	_	3	det	_	many
3	人	_	NOUN	_	_	0	root	_	people

1	"too	_	_	_	_	0	_	_	_
2	many	_	_	_	_	0	_	_	_
3	people"	_	_	_	_	0	_	_	_

~~~

When the negative 不 _bù_ precedes a modal auxiliary, it modifies the auxiliary and not the verb (6). This is because when the verb is negated, 不 _bù_ precedes the verb immediately, after the auxiliary (7). Both the auxiliary and the verb can be negated simultaneously in Mandarin (8).

~~~ conllu
# visual-style 3 2 advmod	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	她	_	PRON	_	_	4	nsubj	_	3SG.F
2	不	_	ADV	_	_	3	advmod	_	NEG
3	可以	_	AUX	_	_	4	aux	_	can
4	去	_	VERB	_	_	0	root	_	go

1	"She	_	_	_	_	0	_	_	_
2	is	_	_	_	_	0	_	_	_
3	not	_	_	_	_	0	_	_	_
4	able/allowed	_	_	_	_	0	_	_	_
5	to	_	_	_	_	0	_	_	_
6	go."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 4 3 advmod	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	她	_	PRON	_	_	4	nsubj	_	3SG.F
2	可以	_	AUX	_	_	4	aux	_	can
3	不	_	ADV	_	_	4	advmod	_	NEG
4	去	_	VERB	_	_	0	root	_	go

1	"She	_	_	_	_	0	_	_	_
2	is	_	_	_	_	0	_	_	_
3	able/allowed	_	_	_	_	0	_	_	_
4	to	_	_	_	_	0	_	_	_
5	not	_	_	_	_	0	_	_	_
6	go."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 3 2 advmod	color:blue
# visual-style 5 4 advmod	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	她	_	PRON	_	_	5	nsubj	_	3SG.F
2	不	_	ADV	_	_	3	advmod	_	NEG
3	可以	_	AUX	_	_	5	aux	_	can
4	不	_	ADV	_	_	5	advmod	_	NEG
5	去	_	VERB	_	_	0	root	_	go

1	"She	_	_	_	_	0	_	_	_
2	is	_	_	_	_	0	_	_	_
3	not	_	_	_	_	0	_	_	_
4	able/allowed	_	_	_	_	0	_	_	_
5	to	_	_	_	_	0	_	_	_
6	not	_	_	_	_	0	_	_	_
7	go."	_	_	_	_	0	_	_	_

~~~

Temporal expressions that are adverbs or short adverbial phrases also use the advmod relation. (However, temporal expressions that are nouns or noun phrases use the [obl:tmod]() relation.)

~~~ conllu
# visual-style 4 3 advmod	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	希望	_	VERB	_	_	0	root	_	hope
2	他	_	PRON	_	_	4	nsubj	_	3SG.M
3	早日	_	ADV	_	_	4	advmod	_	early
4	康復	_	VERB	_	_	1	ccomp	_	recover

1	"Hope	_	_	_	_	0	_	_	_
2	he'll	_	_	_	_	0	_	_	_
3	recover	_	_	_	_	0	_	_	_
4	soon."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:43:08 CEST 2020 -->
