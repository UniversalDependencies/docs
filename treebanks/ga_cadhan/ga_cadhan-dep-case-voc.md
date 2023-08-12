---
layout: base
title:  'Statistics of case:voc in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `case:voc`

This relation is a language-specific subtype of <tt><a href="ga_cadhan-dep-case.html">case</a></tt>.

17 nodes (0%) are attached to their parents as `case:voc`.

17 instances of `case:voc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `case:voc`: <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PART.html">PART</a></tt> (16; 94% instances), <tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_cadhan-pos-PART.html">PART</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case:voc	color:blue
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	a	a	PART	_	PartType=Voc	5	case:voc	_	_
5	dhaltha	dalta	NOUN	_	Case=Nom|Form=Len|Gender=Masc|Number=Sing	2	vocative	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	ach	ach	CCONJ	_	_	8	cc	_	_
8	cad	is	PRON	_	PronType=Int	2	conj	_	_
9	a	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	10	mark:prt	_	_
10	bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	8	acl:relcl	_	_
11	aici	ag	ADP	_	Gender=Fem|Number=Sing|Person=3	10	xcomp:pred	_	_
12	le	le	ADP	_	_	13	case	_	_
13	déanamh	déanamh	NOUN	_	VerbForm=Inf	10	xcomp	_	SpaceAfter=No
14	?	.	PUNCT	_	_	2	punct	_	SpaceAfter=No
15	"	"	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 case:voc	color:blue
1	A	a	DET	_	Number=Plur|Person=3|Poss=Yes	2	nmod:poss	_	_
2	sgéala	scéala	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	_
3	mar	mar	SCONJ	_	_	4	mark	_	_
4	ta	bí	VERB	_	Mood=Ind|Tense=Pres	0	root	_	_
5	i	i	ADP	_	_	6	case	_	_
6	leabhraibh	leabhar	NOUN	_	Case=Dat|Definite=Def|Gender=Masc|Number=Plur	4	xcomp:pred	_	_
7	na	an	DET	_	Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	monairc-si	monarc	NOUN	_	Case=Nom|Definite=Def|Form=Emp|Gender=Masc|Number=Plur	4	parataxis	_	_
9	a	a	PART	_	PartType=Voc	10	case:voc	_	_
10	Thoirrdhealbhaidh	Traolach	PROPN	_	Case=Voc|Definite=Def|Form=Len|Gender=Masc|Number=Sing	4	vocative	_	_
11	ni	is	AUX	_	Polarity=Neg|Tense=Pres|VerbForm=Cop	12	cop	_	_
12	meisde	miste	ADJ	_	Degree=Pos	4	parataxis	_	_
13	ag	ag	ADP	_	_	14	case	_	_
14	Dia	Dia	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	12	obl	_	_
15	bar	bhur	DET	_	Number=Plur|Person=2|Poss=Yes	16	nmod:poss	_	_
16	n-áit	áit	NOUN	_	Case=Nom|Definite=Def|Form=Ecl|Gender=Fem|Number=Sing	12	nsubj	_	_
17	gan	gan	ADP	_	_	18	case	_	_
18	dol	dul	NOUN	_	VerbForm=Inf	4	parataxis	_	_
19	díobh	de	ADP	_	Number=Plur|Person=3	18	obl:prep	_	_
20	'na	i	ADP	_	Number=Plur|Person=3|Poss=Yes	21	case	_	_
21	ccompraitt	comparáid	NOUN	_	Case=Nom|Form=Ecl|Gender=Fem|Number=Sing	18	obl	_	SpaceAfter=No
22	.	.	PUNCT	_	_	4	punct	_	_

~~~


