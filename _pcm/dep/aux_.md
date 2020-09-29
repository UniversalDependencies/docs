---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
udver: '2'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "pcm/dep/aux.html"
---

The relation `aux` is  used between an auxiliary verb and a predicate (verb, adverb, adjective...). Auxiliaries are used to express TAME (Time, Aspect, Mood, Evidentiality). In Naija auxiliaries precede the predicate and there can be several of them attached to the same governor.


~~~ conllu
# visual-style 3 2 aux	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	we	we	PRON	PRON	_	3	nsubj	_	_
2	don	PERF	AUX	AUX	_	3	aux	_	_
3	discover	discover	VERB	VERB	_	0	root	_	_
4	dis	this	DET	DET	_	5	det	_	_
5	thing	thing	NOUN	NOUN	_	3	obj	_	_

1	we	_	_	_	_	0	_	_	_
2	have	_	_	_	_	0	_	_	_
3	discover	_	_	_	_	0	_	_	_
4	this	_	_	_	_	0	_	_	_
5	thing	_	_	_	_	0	_	_	_

1	we	_	_	_	_	0	_	_	_
2	have	_	_	_	_	0	_	_	_
3	discovered	_	_	_	_	0	_	_	_
4	this	_	_	_	_	0	_	_	_
5	thing	_	_	_	_	0	_	_	_

~~~


~~~ conllu
# visual-style 4 2 aux	color:blue
# visual-style 4 3 aux	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	im	he	PRON	PRON	_	4	nsubj	_	_
2	go	will	AUX	AUX	_	4	aux	_	_
3	come	come	AUX	AUX	_	4	aux	_	_
4	reach	arrive	VERB	VERB	_	0	root	_	_
5	Ogere	Ogere	PROPN	PROPN	_	4	obj	_	_
6	now	now	ADV	ADV	_	4	advmod	_	_

1	him	_	_	_	_	0	_	_	_
2	will	_	_	_	_	0	_	_	_
3	come	_	_	_	_	0	_	_	_
4	arrive	_	_	_	_	0	_	_	_
5	Ogere	_	_	_	_	0	_	_	_
6	now	_	_	_	_	0	_	_	_	

1	On	_	_	_	_	0	_	_	_
2	getting	_	_	_	_	0	_	_	_
3	to	_	_	_	_	0	_	_	_
4	Ogere	_	_	_	_	0	_	_	_	
~~~

An auxiliary might be dependent on an adjective or an adverb, such as in the example below :

~~~ conllu
# visual-style 4 3 aux	color:blue
# visual-style 7 6 aux	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	if	if	SCONJ	SCONJ	_	4	mark	_	_
2	im	he	PRON	PRON	_	4	nsubj	_	_
3	don	have	AUX	AUX	_	4	aux	_	_
4	ready	ready	ADV	ADV	_	7	advcl	_	_
5	you	you	PRON	PRON	_	7	nsubj	_	_
6	fit	can	AUX	AUX	_	7	aux	_	_
7	come	come	VERB	VERB	_	0	root	_	_
8	meet	meet	VERB	VERB	_	7	xcomp	_	_
9	am	he	PRON	PRON	_	8	obj	_	_

1	if	_	_	_	_	0	_	_	_
2	him	_	_	_	_	0	_	_	_
3	have	_	_	_	_	0	_	_	_
4	ready	_	_	_	_	0	_	_	_	
5	you	_	_	_	_	0	_	_	_	
6	can	_	_	_	_	0	_	_	_	
7	come	_	_	_	_	0	_	_	_
8	meet	_	_	_	_	0	_	_	_
9	him	_	_	_	_	0	_	_	_

1	If	_	_	_	_	0	_	_	_
2	he	_	_	_	_	0	_	_	_
3	is	_	_	_	_	0	_	_	_
4	ready	_	_	_	_	0	_	_	_	
5	you	_	_	_	_	0	_	_	_	
6	can	_	_	_	_	0	_	_	_	
7	come	_	_	_	_	0	_	_	_
8	to	_	_	_	_	0	_	_	_
9	see	_	_	_	_	0	_	_	_
10	him	_	_	_	_	0	_	_	_	
~~~

The auxiliaries of Naija include :

- come
- dey
- don
- fit
- for
- go
- make
- neva

Some of these auxiliaries can also be used as the main verb of a clause:

- come
- dey
- fit
- go
- make

See more about the auxiliaries in the [AUX]() page.
<!-- Interlanguage links updated Út zář 29 18:41:08 CEST 2020 -->
