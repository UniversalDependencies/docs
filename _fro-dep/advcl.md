---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier (`advcl`) is a clause which modifies a verb or other predicate (adjective, etc.), as a modifier not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose clause, etc. The dependent must be clausal and the dependent is the main predicate of the clause.

~~~ conllu
# visual-style 7 5 advcl	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	se	_	SCONJ	CONsub	_	5	mark	_	_
2	j'	_	PRON	PROper	_	5	nsubj	_	_
3	ai	_	VERB	VERcjg	_	5	aux	_	_
4	or	_	ADV	ADVgen	_	5	advmod	_	_
5	perdu	_	VERB	VERppe	_	7	advcl	_	_
6	je	_	PRON	PROper	_	7	nsubj	_	_
7	gaaignerai	_	VERB	VERcjg	_	0	root	_	_
8	une	_	DET	DETndf	_	10	det	_	_
9	autre	_	ADJ	ADJind	_	10	amod	_	_
10	fois	_	NOUN	NOMcom	_	7	obl	_	_

~~~
