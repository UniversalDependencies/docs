---
layout: base
title:  'Statistics of acl:inf in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `acl:inf`

This relation is a language-specific subtype of <tt><a href="pt_gsd-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="pt_gsd-dep-acl-relcl.html">acl:relcl</a></tt>.

61 nodes (0%) are attached to their parents as `acl:inf`.

60 instances of `acl:inf` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.09836065573771.

The following 4 pairs of parts of speech are connected with `acl:inf`: <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (43; 70% instances), <tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (8; 13% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (8; 13% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:inf	color:blue
1	Há	haver	VERB	VERB	_	0	root	_	_
2	bilhões	_	NUM	NUM	NumType=Card	4	nummod	_	_
3	de	de	ADP	ADP	_	4	case	_	_
4	reais	real	NOUN	NOUN	_	1	obj	_	_
5	em	em	ADP	ADP	_	6	case	_	_
6	indenizações	indenização	NOUN	NOUN	_	1	nmod	_	_
7	a	_	ADP	ADP	_	9	mark	_	_
8	serem	ser	AUX	AUX	_	9	aux:pass	_	_
9	pagas	pagar	VERB	VERB	_	6	acl:inf	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:inf	color:blue
1	Não	não	ADV	ADV	Polarity=Neg	2	advmod	_	_
2	tenho	ter	VERB	VERB	_	0	root	_	_
3	nada	_	PRON	PRON	_	2	obj	_	_
4	a	_	ADP	ADP	_	5	mark	_	_
5	perder	perder	VERB	VERB	_	3	acl:inf	_	SpaceAfter=No
6	!	!	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:inf	color:blue
1	Patrick	_	PROPN	PNOUN	_	2	nsubj	_	_
2	vê	ver	VERB	VERB	_	0	root	_	_
3	Sandro	_	PROPN	PNOUN	_	2	obj	_	_
4	ser	ser	AUX	AUX	_	5	aux:pass	_	_
5	levado	levar	VERB	VERB	_	3	acl:inf	_	_
6	por	por	ADP	ADP	_	8	case	_	_
7	os	o	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	policiais	policial	NOUN	NOUN	_	5	nmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


