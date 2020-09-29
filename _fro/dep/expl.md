---
layout: relation
title: 'expl'
shortdef: 'expletive'
udver: '2'
---

`expl` are nominals that appear in an argument position of a predicate but which do not themselves satisfy any of the semantic roles of the predicate. The main predicate of the clause (the verb or predicate adjective or noun) is the governor.

~~~ conllu
# visual-style 7 5 expl	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	Si	_	ADV	ADVgen	_	2	advmod	_	_
2	feroiz	_	VERB	VERcjg	_	0	root	_	_
3	dame	_	NOUN	NOMcom	_	2	vocative	_	_
4	s'	_	SCONJ	CONsub	_	7	mark	_	_
5	il	_	PRON	PROimp	_	7	expl	_	_
6	vos	_	PRON	PROper	_	7	iobj	_	_
7	siet	_	VERB	VERcjg	_	2	advcl	_	_

~~~


In Old French, the expletive relation is also used for reflexive pronouns attached to inherently reflexive verbs:

~~~ conllu
# visual-style 4 3 expl	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	Car	_	CCONJ	CONcoo	_	4	cc:nc	_	_
2	bien	_	ADV	ADVgen	_	4	advmod	_	_
3	s'	_	PRON	PROper	_	4	expl	_	_
4	esforcera	_	VERB	VERcjg	_	0	root	_	_
5	s'	_	SCONJ	CONsub	_	7	mark	_	_
6	il	_	PRON	PROper	_	7	nsubj	_	_
7	vialt	_	VERB	VERcjg	_	4	advcl	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:43:18 CEST 2020 -->
