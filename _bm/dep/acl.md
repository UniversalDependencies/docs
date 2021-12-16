---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

The `acl` relation is used for relative clauses. We annotate a modified noun phrase as a head of a predicate of subordinate clause.

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
9	kurun	kùrun	NOUN	_	_	11	obj	_	_
10	nin	nìn	DET	_	_	9	det	_	_
11	ci	cì	VERB	_	_	7	xcomp	_	_
12	.	.	PUNCT	_	_	4	punct	_	_

~~~
'They did not find a man who could break this boat'.

It is possible that noun modified by a relative clause is not expressed in the main clause. In this case, the `acl` relation is between two predicates.

~~~ conllu
# visual-style 11 4 acl	color:blue
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	mininyan	míni.ɲan	NOUN	_	_	4	nsubj	_	_
2	ye	yé	AUX	_	_	4	aux	_	_
3	i	í	PRON	_	_	4	obj	_	_
4	la	dá	VERB	_	_	11	acl	_	_
5	yòrò	yɔ́rɔ	NOUN	_	_	4	obl	_	_
6	min	mín	DET	_	_	5	det:rel	_	_
7	,	,	PUNCT	_	_	4	punct	_	_
8	a	à	PRON	_	_	11	nsubj	_	_
9	ye	yé	AUX	_	_	11	aux	_	_
10	bere	bére	NOUN	_	_	11	obj	_	_
11	siri	sìri	VERB	_	_	0	root	_	_
12	kòrr	kɔ́rr	INTJ	_	_	11	discourse	_	_
13	!	!	PUNCT	_	_	11	punct	_	_
~~~

'Where a python layed down, he tied sticks hard'.
<!-- Interlanguage links updated St lis 3 20:58:33 CET 2021 -->
