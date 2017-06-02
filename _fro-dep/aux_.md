---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "fro/dep/aux.html"
udver: '2'
---

This document is a placeholder for the language-specific documentation
for `aux`.

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

