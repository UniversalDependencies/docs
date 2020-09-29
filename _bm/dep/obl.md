---
layout: relation
title: 'obl'
shortdef: 'oblique'
udver: '2'
---


In Bamana, `obl` is used for all verbal arguments except direct objects. Note that there is no `iobj` relation.

~~~ conllu
# visual-style 5 6 obl	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	a	à	PRON	_	_	5	nsubj	_	_
2	ni	ni	CCONJ	_	_	3	cc	_	_
3	musokòrònin	mùsokɔrɔnin	NOUN	_	_	1	conj	_	_
4	dò	dɔ́	DET	_	_	3	det	_	_
5	bènna	bɛnna	VERB	_	_	0	root	_	_
6	sira	síra	NOUN	_	_	5	obl	_	_
7	rò	rɔ́	ADP	_	_	6	case	_	_
8	.	.	PUNCT	_	_	5	punct	_	_

~~~
'He met an old woman on the root'. 


The relation `obl` is used for adverbs as well, as boundaries between nouns in oblique position are sometimes vague. So, there is no `advmod` relation neither.

~~~ conllu
# visual-style 12 13 obl	color:blue
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
1       ni      ní      SCONJ   _       _       4       mark    _       _
2       n       ń       PRON    _       _       4       nsubj   _       _
3       tè      tɛ      AUX     _       _       4       aux     _       _
4       se      sé      VERB    _       _       12      advcl   _       _
5       ka      kà      AUX     _       _       7       aux     _       _
6       a       à       PRON    _       _       7       obj     _       _
7       ci      cì      VERB    _       _       4       xcomp   _ _
8       ,       ,       PUNCT   _       _       4       punct   _       _
9       n       ń       PRON    _       _       12      nsubj   _       _
10      bè      bɛ      AUX     _       _       12      aux     _       _
11      a       à       PRON    _       _       12      obj     _       _
12      to      tó      VERB    _       _       0       root    _       _
13      yen     yèn     ADV     _       _       12      obl     _       _
14      .       .       PUNCT   _       _       12      punct   _       _

# visual-style 4 5 obl	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	Ne	_	PRON	_	_	4	nsubj	_	_
2	bè	_	AUX	_	_	4	aux	_	_
3	a	_	PRON	_	_	4	obj	_	_
4	to	_	VERB	_	_	0	root	_	_
5	yen	_	ADV	_	_	4	obl	_	_
6	.	_	PUNCT	_	_	4	punct	_	_

~~~
'I leave it here'.
<!-- Interlanguage links updated Út zář 29 20:31:59 CEST 2020 -->
