---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "pcm/dep/aux.html"
---

The relation `aux` is used between between an axuiliary verb and the main verb of a clause. Auxiliaries are used to express TAME (Time, Aspect, Mood, Evidentiality). In Naija auxiliaries precede the verb and there can be several of them attached to the same governor.


~~~ conllu
# visual-style 3 2 aux	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	we	we	PRON	PRON	_	3	nsubj	_	_
2	don	PERF	AUX	AUX	_	3	aux	_	_
3	discover	discover	VERB	VERB	_	0	root	_	
4	dis	this	DET	DET	_	5	det	_	_	
5	thing	thing	NOUN	NOUN	_	3	obj	_

1	we	_	_	_	_	0	_	_	_
2	have	_	_	_	_	0	_	_	_
3	discovered	_	_	_	_	0	_	_	_
4	this	_	_	_	_	0	_	_	_	
5	thing	_	_	_	_	0	_	_	_	

~~~

The auxiliaries of Naija include :

- come
- dey
- don
- fit
- for
- go
- make
