---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

This document is a placeholder for the language-specific documentation
for `acl`.

~~~ conllu
# visual-style 3 6 acl:relcl	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	Par	_	ADP	PRE	_	3	case	_	_
2	.XX.	_	DET	DETcar	_	3	nummod	_	_
3	hostages	_	NOUN	NOMcom	_	12	obl	_	_
4	que	_	PRON	PROrel	_	6	obj	_	_
5	li	_	PRON	PROper	_	6	iobj	_	_
6	enveiereiz	_	VERB	VERcjg	_	3	acl:relcl	_	_
7	En	_	ADP	PRE	_	9	case	_	_
8	dulce	_	ADJ	ADJqua	_	9	amod	_	_
9	France	_	PROPN	NOMpro	_	12	obl	_	_
10	s'	_	PRON	PROper	_	12	expl	_	_
11	en	_	ADV	PROadv	_	12	obl	_	_
12	repairerat	_	VERB	VERcjg	_	0	root	_	_
13	li	_	DET	DETdef	_	14	det	_	_
14	reis	_	NOUN	NOMcom	_	12	nsubj	_	_

~~~

~~~ conllu
# visual-style 4 7 acl:relcl	color:blue
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	Vient	_	VERB	VERcjg	_	0	root	_	_
2	a	_	ADP	PRE	_	4	case	_	_
3	son	_	DET	DETpos	_	4	det	_	_
4	mestre	_	NOUN	NOMcom	_	1	obl	_	_
5	qui	_	PRON	PROrel	_	7	nsubj	_	_
6	l'	_	PRON	PROper	_ 7	obj	_	_
7	atent	_	VERB	VERcjg	_	4	acl:relcl	_	_

~~~

`acl` concerns clause modifiers of a noun too.

~~~ conllu
# visual-style 6 15 acl:relcl	color:blue
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	La	_	ADV	ADVgen	_	4	advmod	_	_
2	sus	_	ADV	ADVgen	_	4	advmod	_	_
3	amunt	_	ADV	ADVgen	_	4	advmod	_	_
4	pargetent	_	VERB	VERcjg	_	0	root	_	_
5	tel	_	DET	DETind	_	6	det	_	_
6	luiserne	_	NOUN	NOMcom	_	4	obj	_	_
7	Par	_	ADP	PRE	_	9	case	_	_
8	la	_	DET	DETdef	_	9	det	_	_
9	noit	_	NOUN	NOMcom	_	15	obl	_	_
10	la	_	DET	DETdef	_	11	det	_	_
11	mer	_	NOUN	NOMcom	_	15	nsubj	_	_
12	en	_	ADV	PROadv	_	15	advmod	_	_
13	est	_	VERB	VERcjg	_	15	cop	_	_
14	plus	_	ADV	ADVgen	_	15	advmod	_	_
15	bele	_	ADJ	ADJqua	_	6	acl	_	_

~~~

