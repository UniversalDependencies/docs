---
layout: base
title:  'Statistics of case:voc in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `case:voc`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-case.html">case</a></tt>.

56 nodes (0%) are attached to their parents as `case:voc`.

56 instances of `case:voc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.01785714285714.

The following 2 pairs of parts of speech are connected with `case:voc`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (29; 52% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (27; 48% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case:voc	color:blue
1	'	'	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
2	Sea	is	AUX	Cop	Tense=Pres|VerbForm=Cop	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	5	punct	_	_
4	a	a	PART	Voc	PartType=Voc	5	case:voc	_	_
5	Dhaid	Daid	NOUN	Noun	Case=Voc|Definite=Def|Form=Len|Gender=Masc|Number=Sing	2	vocative	_	SpaceAfter=No
6	,	,	PUNCT	Punct	_	8	punct	_	_
7	ba	is	AUX	Cop	Tense=Past|VerbForm=Cop	8	cop	_	_
8	shona	sona	ADJ	Adj	Degree=Pos|Form=Len	2	csubj:cleft	_	SpaceAfter=No
9	,	,	PUNCT	Punct	_	10	punct	_	_
10	na	an	DET	Art	Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	laethanta	lá	NOUN	Noun	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	12	nsubj	_	_
12	iad	iad	PRON	Pers	Number=Plur|Person=3	8	nmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 case:voc	color:blue
1	Cén	cé	PRON	Q	Number=Sing|PronType=Int	0	root	_	_
2	áit	áit	NOUN	Noun	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	1	nsubj	_	_
3	an	an	PART	Vb	PartType=Vb	4	mark:prt	_	_
4	bhfágfaidh	fág	VERB	VTI	Form=Ecl|Mood=Ind|Tense=Fut	2	acl:relcl	_	_
5	mé	mé	PRON	Pers	Number=Sing|Person=1	4	nsubj	_	_
6	iad	iad	PRON	Pers	Number=Plur|Person=3	4	obj	_	_
7	seo	seo	PRON	Dem	PronType=Dem	6	det	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	10	punct	_	_
9	a	a	PART	Voc	PartType=Voc	10	case:voc	_	_
10	Tom	Tom	PROPN	Noun	Case=Voc|Definite=Def|Gender=Masc|Number=Sing	1	vocative	_	SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


