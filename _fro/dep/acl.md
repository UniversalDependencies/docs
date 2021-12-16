---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

`acl` stands for finite and non-finite clauses that modify a nominal.

It is the case for some kind of secondary predication, or attributive structure.

~~~ conllu
# visual-style 7 8 acl	color:blue
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
1	Clers	_	ADJ	ADJqua	_	0	root	_	_
2	est	_	VERB	VERcjg	_	1	cop	_	_
3	li	_	DET	DETdef	_	4	det	_	_
4	jurz	_	NOUN	NOMcom	_	1	nsubj	_	_
5	e	_	CCONJ	CONcoo	_	7	cc	_	_
6	li	_	DET	DETdef	_	7	det	_	_
7	soleilz	_	NOUN	NOMcom	_	4	conj	_	_
8	luisant	_	VERB	VERppa	_	7	acl	_	_

~~~

~~~ conllu
# visual-style 6 11 acl	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
1	desuz	_	ADP	PRE	_	3	case	_	_
2	un	_	DET	DETndf	_	3	det	_	_
3	arbres	_	NOUN	NOMcom	_	8	obl	_	_
4	bel	_	ADJ	ADJqua	_	3	amod	_	_
5	Quatre	_	DET	DETcar	_	6	nummod	_	_
6	perruns	_	NOUN	NOMcom	_	8	obj	_	_
7	i	_	ADV	PROadv	_	8	obl	_	_
8	ad	_	VERB	VERcjg	_	0	root	_	_
9	de	_	ADP	PRE	_	10	case	_	_
10	marbre	_	NOUN	NOMcom	_	11	obl	_	_
11	faiz	_	VERB	VERppe	_	6	acl	_	_

~~~

Old French uses a language-particular subtype `acl:relcl` for the traditional class of relative clauses. 

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

<!-- Interlanguage links updated St lis 3 20:58:33 CET 2021 -->
