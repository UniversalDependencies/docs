---
layout: relation
title: 'nmod:poss'
shortdef: 'possessive nominal modifier'
udver: '2'
---

The `nmod:poss` relation is used between a nominal clause and its possessive determiner.

~~~ conllu
# visual-style 9 7 nmod:poss	color:blue
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
1	we	_	PRON	_	_	3	nsubj	_	_
2	don	_	AUX	_	_	3	aux	_	_
3	check	_	VERB	_	_	0	root	_	_
4	di	_	DET	_	_	5	det	_	_
5	matter	_	NOUN	_	_	3	obj	_	_
6	for	_	ADP	_	_	9	case	_	_
7	our	_	PRON	_	_	9	nmod:poss	_	_
8	national	_	ADJ	_	_	9	amod	_	_
9	headquarters	_	NOUN	_	_	3	obl	_	_

1	we	_	_	_	_	0	_	_	_
2	evaluated	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	matter	_	_	_	_	0	_	_	_
5	at	_	_	_	_	0	_	_	_
6	our	_	_	_	_	0	_	_	_
7	National	_	_	_	_	0	_	_	_
8	Headquarters	_	_	_	_	0	_	_	_

~~~
