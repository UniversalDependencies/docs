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

~~~ conllu
# visual-style 5 6 advcl	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	car	_	CCONJ	CONcoo	_	5	cc:nc	_	_
2	ja	_	ADV	ADVgen	_	5	advmod	_	_
3	s'	_	PRON	PROper	_	5	expl	_	_
4	en	_	ADV	PROadv	_	5	obl	_	_
5	fuient	_	VERB	VERcjg	_	0	root	_	_
6	ferant	_	VERB	VERppa	_	5	advcl	_	_

~~~

Typical structure in Old French :

~~~ conllu
# visual-style 1 4 advcl	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	Fait	_	VERB	VERcjg	_	0	root	_	_
2	sun	_	DET	DETpos	_	3	det	_	_
3	eslais	_	NOUN	NOMcom	_	1	obj	_	_
4	veant	_	VERB	VERppa	_	1	advcl	_	_
5	cent	_	DET	DETcar	_	6	nummod	_	_
6	mil	_	DET	DETcar	_	7	nummod	_	_
7	humes	_	NOUN	NOMcom	_	4	nsubj	_	_

~~~ 

<!-- Interlanguage links updated Út zář 29 18:41:04 CEST 2020 -->
