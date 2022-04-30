---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---

The `det` relation applies to the head of a nominal and its determiner. All determiners are tagged [DET](), and thus all words with the tag will be a `det` dependent. Classifiers may also function as determiners (see further below).

~~~ conllu
# visual-style 4 1 det	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	這	_	DET	_	_	4	det	_	this
2	頓	_	NOUN	_	_	1	clf	_	CL
3	英雄	_	NOUN	_	_	4	compound	_	hero
4	宴	_	NOUN	_	_	0	root	_	banquet

1	"this	_	_	_	_	0	_	_	_
2	heroes'	_	_	_	_	0	_	_	_
3	banquet"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 3 1 det	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	哪	_	DET	_	_	3	det	_	which
2	一	_	NUM	_	_	3	nummod	_	one
3	位	_	NOUN	_	_	0	root	_	CL:person

1	"Which	_	_	_	_	0	_	_	_
2	person?"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 1 det	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	每	_	DET	_	_	2	det	_	every
2	次	_	NOUN	_	_	0	root	_	CL:time

1	"every	_	_	_	_	0	_	_	_
2	time"	_	_	_	_	0	_	_	_

~~~

Classifiers are treated as determiners when a noun phrase begins with a bare classifier. In Mandarin Chinese, this only occurs when the bare-classifier noun phrase is in postverbal position (and has an indefinite interpretation).

~~~ conllu
# visual-style 4 3 det	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	買	_	VERB	_	_	0	root	_	buy
2	了	_	AUX	_	_	1	aux	_	PERF
3	本	_	NOUN	_	_	4	det	_	CL:book
4	書	_	NOUN	_	_	1	obj	_	book

1	"bought	_	_	_	_	0	_	_	_
2	a	_	_	_	_	0	_	_	_
3	book"	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated St lis 3 20:58:50 CET 2021 -->
