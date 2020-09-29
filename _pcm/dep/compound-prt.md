---
layout: relation
title: 'compound:prt'
shortdef: 'phrasal verb particle'
udver: '2'
---

The `compound:prt` relation is used for the particles of idiomatic phrasal verbs. This relation excludes prepositions which would typically be in an [advmod]() relation with their governor. To identify whether the token is a particle or a preposition we try to pronominalize the complement.

- send down something → send it down : down is a particle
- run into someone → \*run them into : into is a preposition

~~~ conllu
# visual-style 3 4 compound:prt	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	make	JUS	AUX	AUX	_	3	aux	_	_
2	God	God	PROPN	PROPN	_	3	nsubj	_	_
3	send	send	VERB	VERB	_	0	root	_	_
4	down	down	ADP	ADP	_	3	compound:prt	_	_
5	di	the	DET	DET	_	6	det	_	_
6	rain	rain	NOUN	NOUN	_	3	obj	_	_


1	let	_	_	_	_	0	_	_	_
2	God	_	_	_	_	0	_	_	_
3	send	_	_	_	_	0	_	_	_
4	down	_	_	_	_	0	_	_	_
5	the	_	_	_	_	0	_	_	_
6	rain	_	_	_	_	0	_	_	_

1	Let	_	_	_	_	0	_	_	_
2	God	_	_	_	_	0	_	_	_
3	send	_	_	_	_	0	_	_	_
4	down	_	_	_	_	0	_	_	_
5	the	_	_	_	_	0	_	_	_
6	rain	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 18:41:14 CEST 2020 -->
