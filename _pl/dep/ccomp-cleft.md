---
layout: relation
title: 'ccomp:cleft'
shortdef: 'required clausal dependent of the pronoun _to_'
udver: '2'
---

The `ccomp:cleft` relation is used in the Polish [PDB-UD](http://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](http://universaldependencies.org/treebanks/pl_pud/index.html) treebanks for a required clausal dependent of the pronoun _to_ ('it').


~~~ conllu
# visual-style 4 10 ccomp:cleft color:blue
1	Ale	ale	CCONJ	conj	_	0	root	0:root	_
2	wygląda	wyglądać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	1:ccomp	_
3	na	na	ADP	prep:acc	AdpType=Prep	4	case	4:case	Case=Acc
4	to	to	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	2	obl:arg	2:obl:arg	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
6	że	że	SCONJ	comp	_	10	mark	10:mark	_
7	ten	ten	DET	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	8	det	8:det	_
8	osobnik	osobnik	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	10:nsubj	_
9	naprawdę	naprawdę	PART	part	_	10	advmod:emph	10:advmod:emph	_
10	wierzy	wierzyć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	ccomp:cleft	4:ccomp:cleft	_
11	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	12	case	12:case	Case=Acc
12	to	to	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	10	obl:arg	10:obl:arg	SpaceAfter=No
13	,	,	PUNCT	interp	PunctType=Comm	15	punct	15:punct	_
14	co	co	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	15	obj	15:obj	_
15	pisze	pisać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	acl:relcl	12:acl:relcl	SpaceAfter=No
16	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_
~~~

~~~ conllu
1	But	_	_	_	_	_	_	_	_
2	it	_	_	_	_	_	_	_	_
3	looks	_	_	_	_	_	_	_	_
4	like	_	_	_	_	_	_	_	_
5	this	_	_	_	_	_	_	_	_
6	individual	_	_	_	_	_	_	_	_
7	really	_	_	_	_	_	_	_	_
8	believes	_	_	_	_	_	_	_	_
9	in	_	_	_	_	_	_	_	_
10	what	_	_	_	_	_	_	_	_
11	he	_	_	_	_	_	_	_	_
12	writes	_	_	_	_	_	_	_	_
13	.	_	_	_	_	_	_	_	_
~~~	