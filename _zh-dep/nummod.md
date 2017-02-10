---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
udver: '2'
---

A numeric modifier is a modifier that is a numeral word or phrase preceding the noun or noun phrase it modifies. Ordinal numbers such as 第一 ‘first’ 第二 ‘second’, however, should be treated as adjectives ([amod]()) in terms of their dependency relation to the noun, even though they are tagged as [NUM](). 

Numeric modifiers are always attached to the head of the noun phrase.

~~~ conllu
# visual-style 4 1 nummod	color:blue
1	三	_	NUM	_	_	4	nummod	_	three
2	個	_	NOUN	_	_	1	clf	_	CL:generic
3	好	_	ADJ	_	_	4	amod	_	good
4	警察	_	NOUN	_	_	0	root	_	police

1	"three	_	_	_	_	0	_	_	_
2	good	_	_	_	_	0	_	_	_
3	cops"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 1 nummod	color:blue
1	五	_	NUM	_	_	2	nummod	_	five
2	天	_	NOUN	_	_	0	root	_	CL:days

1	"five	_	_	_	_	0	_	_	_
2	days"	_	_	_	_	0	_	_	_

~~~
