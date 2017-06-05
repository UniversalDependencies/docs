---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
udver: '2'
---

The `nummod` relation is used between a nominal phrase and its numeric modifier.

~~~ conllu
# visual-style 6 5 nummod	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	make	_	AUX	_	_	3	aux	_	_
2	I	_	PRON	_	_	3	nsubj	_	_
3	give	_	VERB	_	_	0	root	_	_
4	you	_	PRON	_	_	3	iobj	_	_
5	one	_	NUM	_	_	6	nummod	_	_
6	instance	_	NOUN	_	_	3	obj	_	_

1	let	_	_	_	_	0	_	_	_
2	me	_	_	_	_	0	_	_	_
3	give	_	_	_	_	0	_	_	_
4	you	_	_	_	_	0	_	_	_
5	one	_	_	_	_	0	_	_	_
6	instance	_	_	_	_	0	_	_	_

~~~
