---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
---

An adverbial subordinate clause (e.g. a clause answering the question why? How? Where? When? or a conditional, etc.), usually introduced by a subordinating conjunction or auxiliary (ⲉⲡⲉⲓⲇⲏ, ⲉⲣϣⲁⲛ), or a circumstantial converter (ⲉ/ⲉⲣⲉ).

Example:

~~~ sdparse
ⲉⲛⲉ/CONJ ⲟⲩ/DET ⲙⲟⲛⲁⲭⲟⲥ/NOUN ⲛⲁⲙⲉ/ADV ⲡⲉ/AUX ⲛⲉ/AUX ϥ/PRON ⲛⲁ/AUX ⲣ/VERB ϣⲟⲙⲧ/NUM ⲙ/ADP ⲫⲟⲛⲟⲥ/NOUN \n ...if he were truly a monk, would he have committed three murders?

advcl(ⲣ,ⲙⲟⲛⲁⲭⲟⲥ)
~~~

Rarely, we may also see a subordinate clause governed by a preposition, in which case the preposition is governed by the head of the clause and labeled `mark`, not `case`, even if there is also a second conjunction with a `mark` label.

Example: 

~~~ conllu
1	ⲉ	ⲉⲣⲉ	SCONJ	CCIRC	_	2	mark	_	_
2	ⲙⲛ	ⲙⲛ	VERB	EXIST	_	0	root	_	_
3	ϣⲏⲣⲉ	ϣⲏⲣⲉ	NOUN	N	_	2	nsubj	_	_
4	ⲉ	ⲉⲣⲉ	SCONJ	CCIRC	_	5	mark	_	_
5	ⲙⲛ	ⲙⲛ	VERB	EXIST	_	2	conj	_	_
6	ⲉⲓⲱⲧ	ⲉⲓⲱⲧ	NOUN	N	_	5	nsubj	_	_
7	ⲉ	ⲉⲣⲉ	SCONJ	CCIRC	_	8	mark	_	_
8	ⲙⲛ	ⲙⲛ	VERB	EXIST	_	2	conj	_	_
9	ⲗⲁⲁⲩ	ⲗⲁⲁⲩ	NOUN	N	_	8	nsubj	_	_
10	ⲛϩⲏⲧ	ϩⲛ	ADP	PREP	_	11	case	_	_
11	ⲟⲩ	ⲛⲧⲟⲟⲩ	PRON	PPERO	_	2	nmod	_	_
12	ϩⲟⲗⲱⲥ	ϩⲟⲗⲱⲥ	ADV	ADV	_	2	advmod	_	_
13	ⲙⲙⲁⲩ	ⲙⲙⲁⲩ	ADV	ADV	_	2	advmod	_	_
14	ⲉⲧⲃⲉ	ⲉⲧⲃⲉ	ADP	PREP	_	18	mark	_	_
15	ϫⲉ	ϫⲉ	CONJ	CONJ	_	18	mark	_	_
16	ⲁ	ⲁ	AUX	APST	_	18	aux	_	_
17	ⲩ	ⲛⲧⲟⲟⲩ	PRON	PPERS	_	18	nsubj	_	_
18	ⲡⲱⲧ	ⲡⲱⲧ	VERB	V	_	2	advcl	_	_
19	.	.	PUNCT	PUNCT	_	2	punct	_	_
~~~
