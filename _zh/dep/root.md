---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The root of a sentence is the predicate of the main clause. This may be a verb (1), a predicate adjective (2), or a nominal in a copular construction (3).  Sometimes only an auxiliary (see AUX) is present, in which case that will be promoted to `root` (4). If there is only a phrase, whatever is the governor of that phrase will be the root (5).

~~~ conllu
# visual-style 1 5 root	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	ROOT	_	_	_	_	0	root	_	_
2	你	_	PRON	_	_	5	nsubj	_	2SG
3	也	_	ADV	_	_	5	advmod	_	also
4	要	_	AUX	_	_	5	aux	_	need
5	幫幫	_	VERB	_	_	1	root	_	help
6	我們	_	PRON	_	_	5	obj	_	1PL

1	"You	_	_	_	_	0	_	_	_
2	have	_	_	_	_	0	_	_	_
3	to	_	_	_	_	0	_	_	_
4	help	_	_	_	_	0	_	_	_
5	us,	_	_	_	_	0	_	_	_
6	too."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 1 4 root	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	ROOT	_	_	_	_	0	root	_	_
2	的確	_	ADV	_	_	4	advmod	_	indeed
3	很	_	ADV	_	_	4	advmod	_	very
4	棒	_	ADJ	_	_	1	root	_	great

1	"It's	_	_	_	_	0	_	_	_
2	great	_	_	_	_	0	_	_	_
3	indeed."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 1 5 root	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	ROOT	_	_	_	_	0	root	_	_
2	他	_	PRON	_	_	5	nsubj	_	3SG.M
3	是	_	VERB	_	_	5	cop	_	be
4	我	_	PRON	_	_	5	nmod	_	1SG
5	男朋友	_	NOUN	_	_	1	root	_	boyfriend

1	"He	_	_	_	_	0	_	_	_
2	is	_	_	_	_	0	_	_	_
3	my	_	_	_	_	0	_	_	_
4	boyfriend."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 1 3 root	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	ROOT	_	_	_	_	0	root	_	_
2	他	_	PRON	_	_	3	nsubj	_	3SG.M
3	能	_	AUX	_	_	1	root	_	can

1	"He	_	_	_	_	0	_	_	_
2	can	_	_	_	_	0	_	_	_
3	(do	_	_	_	_	0	_	_	_
4	it)."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 1 4 root	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	ROOT	_	_	_	_	0	root	_	_
2	哪	_	DET	_	_	4	det	_	which
3	一	_	NUM	_	_	4	nummod	_	one
4	位	_	NOUN	_	_	1	root	_	CL:person
5	？	_	PUNCT	_	_	4	punct	_	_

1	"Who	_	_	_	_	0	_	_	_
2	(which	_	_	_	_	0	_	_	_
3	person)?"	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 18:41:36 CEST 2020 -->
