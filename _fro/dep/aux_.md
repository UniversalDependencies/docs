---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "fro/dep/aux.html"
udver: '2'
---
An `aux` (auxiliary) of a clause is a function word associated with a verbal predicate that expresses categories such as tense, mood, aspect, voice or evidentiality. 

~~~ conllu
# visual-style 4 3 aux	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	Il	_	PRON	PROper	_	4	nsubj	_	_
2	les	_	PRON	PROper	_	4	obj	_	_
3	ad	_	VERB	VERcjg	_	4	aux	_	_
4	prises	_	VERB	VERppe	_	0	root	_	_

~~~

Auxiliares used to construct the passive voice are also labeled aux:pass.

~~~ conllu
# visual-style 11 4 aux:pass	color:blue
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
1	car	_	CCONJ	CONcoo	_	4	cc:nc	_	_
2	il	_	PRON	PROimp	_	4	expl	_	_
3	n'	_	ADV	ADVneg	_	4	advmod	_	_
4	a	_	VERB	VERcjg	_	0	root	_	_
5	çaienz	_	ADV	ADVgen	_	4	advmod	_	_
6	home	_	NOUN	NOMcom	_	4	obj	_	_
7	qui	_	PRON	PROrel	_	11	nsubj	_	_
8	n'	_	ADV	ADVneg	_	11	advmod	_	_
9	ait	_	AUX	VERcjg	_	11	aux:pass	_	_
10	esté	_	VERB	VERppe	_	11	cop	_	_
11	serviz	_	VERB	VERppe	_	6	acl:relcl	_	_

~~~

In Old French, modal verbs are considered as semi-auxiliaries.
These semi-auxiliaries include voloir, devoir, povoir, savoir, soloir.

~~~ conllu
# visual-style 4 3 aux	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	Mais	_	CCONJ	CONcoo	_	4	cc:nc	_	_
2	je	_	PRON	PROper	_	4	nsubj	_	_
3	doi	_	VERB	VERcjg	_	4	aux	_	_
4	plorer	_	VERB	VERinf	_	0	root	_	_

~~~
<!-- Interlanguage links updated Út zář 29 18:41:08 CEST 2020 -->
