---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

The `acl` relation is used for clauses that modify a noun phrase in a main clause. We annotate a modified noun phrase as a head of a predicate of subordinative clause.

~~~ conllu
# visual-style 3 7 acl	color:blue
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white

1	u	ù	PRON	_	_	4	nsubj	_	_
2	ma	ma	AUX	_	_	4	aux	_	_
3	mògò	mɔ̀gɔ	NOUN	_	_	4	obj	_	_
4	sòrò	sɔ̀rɔ	VERB	_	_	0	root	_	_
5	min	mîn	PRON	_	_	7	nsubj	_	_
6	bè	bɛ	AUX	_	_	7	aux	_	_
7	se	sé	VERB	_	_	3	acl	_	_
8	ka	kà	AUX	_	_	11	_	_	_
9	kurun	kùrun	NOUN	_	_	11	obj	_ _
10	nin	nìn	DET	_ _	9	det	_	_
11	ci	cì	VERB	_	_	7	xcomp	_	_
12	.	.	PUNCT	_	_	4	punct	_	_.

'They did not find a man who could break this boat'.
~~~
