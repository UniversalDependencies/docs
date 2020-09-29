---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
udver: '2'
---

The `nummod` relation is used between a nominal phrase and its numeric modifier, which is expressed by cardinal numeral. For ordinal numerals, [amod]() link relation is used.

~~~ conllu
# visual-style 3 4 nummod	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	a	à	PRON	_	_	5	nsubj	_	_
2	ye	ye	AUX	_	_	5	aux	_	_
3	denkè	dénkɛ	NOUN	_	_	5	obj	_	_
4	kelen	kélen	NUM	_	_	3	nummod	_	_
5	sòrò	sɔ̀rɔ	VERB	_	_	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_.

~~~

'She has one child'.
<!-- Interlanguage links updated Út zář 29 20:23:38 CEST 2020 -->
