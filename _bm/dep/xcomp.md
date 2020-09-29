
---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

The `xcomp` relation is used for clausal complements, but unlike [ccomp]() lack an explicit subject. The reference of the subject is determined by an argument external to the `xcomp` clause, which means that the clause inherits its subject from higher up in the tree. It is used in infinitive constructions with a predicative marker _kà_.

~~~ conllu
# visual-style 3 6 xcomp        color:blue
# visual-style 3        bgColor:blue
# visual-style 3        fgColor:white
# visual-style 6        bgColor:blue
# visual-style 6        fgColor:white
1	ne	_	PRON	_	_	3	nsubj	_	_
2	bè	_	AUX	_	_	3	aux	_	_
3	se	_	VERB	_	_	0	root	_	_
4	ka	_	AUX	_	_	6	aux	_	_
5	o	_	PRON	_	_	6	obj	_	_
6	kè	_	VERB	_	_	3	xcomp	_	_
7	.	_	PUNCT	_	_	3	punct	_	_

~~~
'I can do it'.

The infinitival construction can also express sequential or  purpose meaning, which semantically is not proper for core argument, but as a construction is the same, we decided to annotate it as `xcomp` as well.

~~~ conllu
# visual-style 2 5 xcomp	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	syèdennin	syɛdennin	NOUN	_	_	2	nsubj	_	_
2	yèlènna	yɛlɛnna	VERB	_	_	0	root	_	_
3	ka	kà	AUX	_	_	5	aux	_	_
4	lenburusun	lenburusun	NOUN	_	_	5	obj	_	_
5	yuguyugu	yúguyugu	VERB	_	_	2	xcomp	_	_
6	.	.	PUNCT	_	_	2	punct	_	_

~~~
'A chicken climbed a lemon tree and shook it'.
<!-- Interlanguage links updated Út zář 29 20:23:45 CEST 2020 -->
