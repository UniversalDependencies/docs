---
layout: relation
title:  'advcl:cond'
shortdef : 'conditional adverbial clause'
udver: '2'
---

The `advcl:cond` relation is used for adverbial clauses that specify a condition under which the main event happens.

~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 advcl:cond	color:blue
1	మనం	_	PRON	PRON	_	2	nsubj	_	Translit=manaṁ|LTranslit=_
2	పరిగెత్త	_	VERB	VERB	_	6	advcl:cond	_	Translit=parigètta|LTranslit=_
3	బట్టి	_	SCONJ	SCONJ	_	2	mark	_	Translit=baṭṭi|LTranslit=_
4	వానలో	_	NOUN	NOUN	_	6	obl	_	Translit=vānalo|LTranslit=_
5	తడవ	_	VERB	VERB	_	6	compound:svc	_	Translit=taḍava|LTranslit=_
6	లేదు	_	VERB	VERB	_	0	root	_	Translit=ledu|LTranslit=_
7	.	_	PUNCT	PUNCT	_	6	punct	_	Translit=.|LTranslit=_

~~~

<!-- మనం పరిగెత్త బట్టి వానలో తడవ లేదు. -->
~~~ sdparse
manaṁ parigètta baṭṭi vānalo taḍava ledu. \n we ran as in-the-rain late not.
~~~

“It was not too late in the rain as we ran.”

<!-- Interlanguage links updated Čt lis 12 09:43:09 CET 2020 -->
