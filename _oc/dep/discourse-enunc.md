---
layout: relation
title: 'discourse:enunc'
shortdef: 'enunciative particle'
udver: '2'
---

The Gascon varieties of Occitan has enunciative particles, which signal the modality of the sentence or clause. They are obligatory (although they can be elided in some phonetic contexts), they have a fixed position in the clause (before the main predicate, but after the subject if the subject is realized), and they can only be separated from the predicate by clitics. 

Most frequent ones include: 

- *que* (declarative, assertive)
- *ja* (declarative, assertive, underlines the certainty)
- *e* (interrogative)
- *be* (exclamative)

`discourse:enunc` is used to attach these particles to the predicate of the clause they belong to.



~~~ conllu
# visual-style 7 6 discourse:enunc	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white

1	Un	_	DET	_	_	2	det	_	a
2	gojat	_	NOUN	_	_	7	nsubj	_	young-man
3	gran	_	ADJ	_	_	2	amod	_	tall
4	e	_	CCONJ	_	_	5	cc	_	and
5	espatlut	_	ADJ	_	_	3	conj	_	broad-shouldered
6	qu'	_	PART	_	_	7	discourse:enunc	_	PART
7	entrè	_	VERB	_	_	0	root	_	entered
8	.	_	PUNCT	_	_	7	punct	_	Gloss=.


1	A	_	_	_	_	0	_	_	_
2	tall	_	_	_	_	0	_	_	_
3	and	_	_	_	_	0	_	_	_
4	broad-shouldered	_	_	_	_	0	_	_	_
5	young	_	_	_	_	0	_	_	_
6	man	_	_	_	_	0	_	_	_
7	entered	_	_	_	_	0	_	_	_
8	.	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated So 10. května 2025, 18:15:28 CEST -->
