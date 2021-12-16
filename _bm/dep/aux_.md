---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
udver: '2'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "bm/dep/aux.html"
---

The relation `aux` is  used between a predicative marker and a predicate. Auxiliaries are used to express TAM and polarity values.


~~~ conllu
# visual-style 3 2 aux	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	a	à	PRON	_	_	4	nsubj	_	_
2	ye	ye	AUX	_	_	4	aux	_	_
3	ji	jí	NOUN	_	_	4	obj	_	_
4	kè	kɛ́	VERB	_	_	0	root	_	_
5	a	à	PRON	_	_	4	obl	_	_
6	la	lá	ADP	_	_	5	case	_	_
7	.	.	PUNCT	_	_	4	punct	_	_

~~~
'He made a water of this'.

Moreover, the relation `aux` is used with a marker of retrospective _tùn_, which has POS tag PART, as formally it behaves as a particle. We chose a relation `aux` for it, as semantically it is a TAM auxiliary. 

~~~ conllu
# visual-style 3 2 aux  color:blue
# visual-style 3        bgColor:blue
# visual-style 3        fgColor:white
# visual-style 2        bgColor:blue
# visual-style 2        fgColor:white
1	ne	nê	PRON	_	_	6	nsubj	_	_
2	tun	tùn	PART	_	_	3	aux	_	_
3	ye	ye	AUX	_	_	6	aux	_	_
4	kegunya	kègun.ya	NOUN	_	_	6	obj	_	_
5	wèrè	wɛ́rɛ	DET	_	_	4	det	_	_
6	di	dí	VERB	_	_	0	root	_	_
7	i	í	PRON	_	_	6	obl	_	_
8	ma	mà	ADP	_	_	7	case	_	_

~~~

'I gave another cunning to you'.
<!-- Interlanguage links updated St lis 3 20:58:39 CET 2021 -->
