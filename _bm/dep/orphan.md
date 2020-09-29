---
layout: relation
title: 'orphan'
shortdef: 'orphan'
udver: '2'
---

The `orphan` relation is used in cases of head ellipsis. An element belonging to the same clause as the elided head is promoted, all other dependents of this elided head are considered as dependant of the promoted element with their original relations.

In the example below, a copula _yé_ and a postposition are elided. This sentence without ellipsis would be: 'Ò bɛ́ɛ yé fɛ́n kélen yé'.

~~~ conllu
# visual-style 1 3 orphan	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	o	ò	PRON	_	_	0	root	_	_
2	bèè	bɛ́ɛ	DET	_	_	1	det	_	_
3	fèn	fɛ́n	NOUN	_	_	1	orphan	_	_
4	kelen	kélen	NUM	_	_	3	nummod	_	_

~~~
'They all are the same'.
<!-- Interlanguage links updated Út zář 29 20:32:00 CEST 2020 -->
