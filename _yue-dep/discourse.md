---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

The discourse relation is used for interjections (words tagged [INTJ]()) and other discourse particles or words which are not clearly linked to the syntactic structure of the sentence except in a discursive sense. However, if an interjected element is clausal (including tag questions and words with a sentence-final particle or single words that are verbs or predicate adjectives), it should be given the relation [parataxis]().

~~~ conllu
# visual-style 4 1 discourse	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	哦	_	INTJ	_	_	4	discourse	_	oh
2	，	_	PUNCT	_	_	1	punct	_	_
3	不過	_	ADV	_	_	4	advmod	_	but
4	要	_	VERB	_	_	0	root	_	require
5	三	_	NUM	_	_	7	nummod	_	three
6	年	_	NOUN	_	_	4	obj	_	CL:years

1	"Okay,	_	_	_	_	0	_	_	_
2	but	_	_	_	_	0	_	_	_
3	it'll	_	_	_	_	0	_	_	_
4	take	_	_	_	_	0	_	_	_
5	three	_	_	_	_	0	_	_	_
6	years."	_	_	_	_	0	_	_	_

~~~
