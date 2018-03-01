---
layout: relation
title: 'amod'
shortdef: 'adjectival modifier'
udver: '2'
---
The relation `amod` is used for adjectival modifiers of noun phrases. In Bamana, adjectival modifiers are postposed.

~~~ conllu
# visual-style 3 4 amod	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white

1	a	à	PRON	_	_	2	nsubj	_	_
2	ko	kó	VERB	_	_	0	root	_	_
3	kuma	kúma	NOUN	_	_	5	nsubj	_	_
4	caman	cáman	ADJ _	_	3	amod	_	_
5	tè	tɛ́	VERB	_	_	2	parataxis:obj	_	_
6	a	à	PRON	_	_	5	obl	_	_
7	rò	rɔ́	ADP	_	_	6	case	_	_
8	.	.	PUNCT	_	_	5	punct	_	_

'He said: "There is no much talks about it"'.
~~~
