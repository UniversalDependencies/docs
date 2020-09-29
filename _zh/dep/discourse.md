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
1	嗯	_	INTJ	_	_	4	discourse	_	uh-huh
2	，	_	PUNCT	_	_	1	punct	_	_
3	不過	_	ADV	_	_	4	advmod	_	but
4	可能	_	ADJ	_	_	0	root	_	possible
5	是	_	VERB	_	_	7	cop	_	be
6	三	_	NUM	_	_	7	nummod	_	three
7	年	_	NOUN	_	_	4	xcomp	_	CL:years

1	"Yeah,	_	_	_	_	0	_	_	_
2	but	_	_	_	_	0	_	_	_
3	it's	_	_	_	_	0	_	_	_
4	possible	_	_	_	_	0	_	_	_
5	that	_	_	_	_	0	_	_	_
6	it'll	_	_	_	_	0	_	_	_
7	be	_	_	_	_	0	_	_	_
8	three	_	_	_	_	0	_	_	_
9	years."	_	_	_	_	0	_	_	_

~~~


<!-- Interlanguage links updated Út zář 29 20:23:29 CEST 2020 -->
