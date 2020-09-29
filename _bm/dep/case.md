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
'He and an old woman met on the road'.

In Bamana, the majority of adpositions are postpositions, but there are some prepositions as well. These are _kàbi_, ~ _kàbíni_ 'since', _fo_, ~ _fɔ_, 'till, _ni_, and _àní_, 'with'.

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
12	.	.	PUNCT	_	_	9	punct	_	_
~~~
'After that, she gave birth to it (lit: Since that, she make it go away to the world)'.


All these prepositions are conjunctions as well, if they introduce a clause.

~~~ conllu
# visual-style 3 1 mark color:blue
# visual-style 3        bgColor:blue
# visual-style 3        fgColor:white
# visual-style 1        bgColor:blue
# visual-style 1        fgColor:white
1	kabini	kàbini	SCONJ	_	_	3	mark	_	_
2	o	ò	PRON	_	_	3	nsubj	_	_
3	bòra	bɔra	VERB	_	_	8	advcl	_	_
4	a	à	PRON	_	_	3	obl	_	_
5	la	lá	ADP	_	_	4	case	_	_
6	,	,	PUNCT	_	_	3	punct	_	_
7	a	à	PRON	_	_	8	nsubj	_	_
8	bè	bɛ́	VERB	_	_	0	root	_	_
9	o	ò	DET	_	_	10	det	_	_
10	nò	nɔ̀	NOUN	_	_	8	obl	_	_
11	na	ná	ADP	_	_	10	case	_	_
12	.	.	PUNCT	_	_	8	punct	_	_
~~~
'Since it happened, it is so (traditional way to end a fairy tail)'.
<!-- Interlanguage links updated Út zář 29 20:23:20 CEST 2020 -->
