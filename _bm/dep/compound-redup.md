---
layout: relation
title: 'compound:redup'
shortdef: 'reduplicated compound'
udver: '2'
---

The `compound:redup` relation is used for reduplication. In Bamana, reduplication occurs with almost all parts of speech, but most often with interjections.
~~~ conllu
# visual-style 5 7 compound:redup	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	buguri	bùguri	NOUN	_	_	3	nsubj	_	_
2	nin	nìn	DET	_	_	1	det	_	_
3	ko	kó	VERB	_	_	0	root	_	_
4	:	:	PUNCT	_	_	3	punct	_	_
5	tot	tot	INTJ	_	_	3	obj	_	_
6	tot	tot	INTJ	_	_	5	compound:redup	_	_
7	tot	tot	INTJ	_	_	5	compound:redup	_	_
8	!	!	PUNCT	_	_	3	punct	_	_

~~~
'This dust said: "tot-tot-tot!"'.
<!-- Interlanguage links updated Čt lis 12 09:43:19 CET 2020 -->
