---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

The `case` relation is used for adpositions.

~~~ conllu
# visual-style 6 7 case	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white

1	a	à	PRON	_	_	5	nsubj	_	_
2	ni	ni	CCONJ	_	_	3	cc	_	_
3	musokòrònin	mùsokɔrɔnin	NOUN	_	_	1	conj	_	_
4	dò	dɔ́	DET	_	_	3	det	_	_
5	bènna	bɛnna	VERB	_	_	0	root	_	_
6	sira	síra	NOUN	_	_	5	obl	_	_
7	rò	rɔ́	ADP	_	_	6	case	_	_
8	.	.	PUNCT	_	_	5	punct	_	_

~~~

In Bamana, the majority of adpositions are postpositions, but there are some prepositions as well.

~~~ conllu
# visual-style 2 1 case	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white

1	kabini	kàbini	ADP	_	_	2	case	_	_
2	o	ò	PRON	_	_	9	obl	_	_
3	rò	rɔ́	ADP	_	_	2	case	_	_
4	,	,	PUNCT	_	_	2	punct	_	_
5	o	ò	PRON	_	_	9	nsubj	_	_
6	de	dè	DET	_	_	5	det	_	_
7	ye	ye	AUX	_	_	9	aux	_	_
8	a	à	PRON	_	_	9	obj	_	_
9	bò	bɔ́	VERB	_	_	0	root	_	_
10	dunya	dúniya	NOUN	_	_	9	obl	_	_
11	rò	rɔ́	ADP	_	_	10	case	_	_
12	.	.	PUNCT	_	_	9	punct	_	Gloss=.
~~~
