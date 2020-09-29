---
layout: relation
title: 'compound:redup'
shortdef: 'reduplicated compound'
udver: '2'
---

The `compound:redup` relation is used for reduplicated compounds. There is a reduplication when a token is followed by one or several occurences of the same token. In Naija reduplication is used to intensify the meaning of an adverb or an adjective.

~~~ conllu
# visual-style 4 5 compound:redup	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	dis	this	DET	DET	_	2	det	_	_
2	plan	plan	NOUN	NOUN	_	3	nsubj	_	_
3	work	work	VERB	VERB	_	0	root	_	_
4	well	well	ADV	ADV	_	3	advmod	_	_
5	well	well	ADV	ADV	_	4	compound:redup	_	_


1	This	_	_	_	_	0	_	_	_
2	plan	_	_	_	_	0	_	_	_
3	work	_	_	_	_	0	_	_	_
4	well	_	_	_	_	0	_	_	_
5	well	_	_	_	_	0	_	_	_

1	This	_	_	_	_	0	_	_	_
2	plan	_	_	_	_	0	_	_	_
3	worked	_	_	_	_	0	_	_	_
4	very	_	_	_	_	0	_	_	_
5	well	_	_	_	_	0	_	_	_

~~~

<!-- Interlanguage links updated Út zář 29 18:41:14 CEST 2020 -->
