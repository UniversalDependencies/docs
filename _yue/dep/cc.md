---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

The coordinating conjunction links a conjunction word to its immediately following conjunct as its head. (See [CCONJ]() for a  list of Cantonese conjunction words.)

~~~ conllu
# visual-style 4 2 cc	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	中文	_	NOUN	_	_	0	root	_	Chinese-language
2	同	_	CCONJ	_	_	4	cc	_	and
3	中國	_	PROPN	_	_	4	compound	_	China
4	歷史	_	NOUN	_	_	1	conj	_	history

1	"Chinese	_	_	_	_	0	_	_	_
2	language	_	_	_	_	0	_	_	_
3	and	_	_	_	_	0	_	_	_
4	Chinese	_	_	_	_	0	_	_	_
5	history"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 7 4 cc	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	佢	_	PRON	_	_	2	nsubj	_	3SG
2	去	_	VERB	_	_	0	root	_	go
3	，	_	PUNCT	_	_	7	punct	_	_
4	但係	_	CCONJ	_	_	7	cc	_	but
5	我	_	PRON	_	_	7	nsubj	_	1SG
6	唔	_	ADV	_	_	7	advmod	_	NEG
7	去	_	VERB	_	_	2	conj	_	go

1	"She's	_	_	_	_	0	_	_	_
2	going,	_	_	_	_	0	_	_	_
3	but	_	_	_	_	0	_	_	_
4	I'm	_	_	_	_	0	_	_	_
5	not	_	_	_	_	0	_	_	_
6	going."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Čt lis 12 09:43:16 CET 2020 -->
