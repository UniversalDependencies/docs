---
layout: base
title:  'Statistics of xcomp in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="ga_cadhan-dep-xcomp-pred.html">xcomp:pred</a></tt>.

80 nodes (2%) are attached to their parents as `xcomp`.

80 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.775.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (62; 78% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (9; 11% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 xcomp	color:blue
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
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 xcomp	color:blue
1	Ní	ní	PART	_	PartType=Vb|Polarity=Neg	2	advmod	_	_
2	rabh	bí	VERB	_	Mood=Ind|Polarity=Neg|Tense=Past	0	root	_	_
3	fhios	fios	NOUN	_	Case=Nom|Form=Len|Gender=Masc|Number=Sing	2	nsubj	_	_
4	aige	ag	ADP	_	Gender=Masc|Number=Sing|Person=3	2	xcomp:pred	_	_
5	cé	cé	PRON	_	PronType=Int	2	ccomp	_	_
6	aca	ag	ADP	_	Number=Plur|Person=3	5	obl:prep	_	_
7	bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	5	csubj:cleft	_	_
8	Buck	Buck	PROPN	_	Foreign=Yes	7	nsubj	_	_
9	in	i	ADP	_	_	10	case	_	_
10	innimh	inmhe	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	7	xcomp:pred	_	_
11	míle	míle	NUM	_	NumType=Card	12	nummod	_	_
12	punta	punt	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	15	obj	_	_
13	meadhchain	meáchan	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	12	nmod	_	_
14	a	a	PART	_	PartType=Inf	15	mark	_	_
15	chur	cur	NOUN	_	Form=Len|VerbForm=Inf	7	xcomp	_	_
16	ag	ag	ADP	_	_	17	case	_	_
17	gluaiseacht	gluaiseacht	NOUN	_	VerbForm=Inf	15	xcomp	_	_
18	nó	nó	CCONJ	_	_	20	cc	_	_
19	nach	nach	PART	_	PartType=Cmpl|Polarity=Neg	20	mark:prt	_	_
20	rabh	bí	VERB	_	Mood=Ind|Polarity=Neg|Tense=Past	7	conj	_	SpaceAfter=No
21	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 17 xcomp	color:blue
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Bíodh	bí	VERB	_	Mood=Imp|Number=Sing|Person=3	0	root	_	_
3	fiadhnaidhthe	fianaí	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	_
4	againn	ag	ADP	_	Number=Plur|Person=1	2	xcomp:pred	_	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	SpaceAfter=No
6	"	"	PUNCT	_	_	2	punct	_	_
7	ar	ar	VERB	_	Mood=Ind|Tense=Past	2	parataxis	_	_
8	seisean	seisean	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Emp	7	nsubj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	12	punct	_	_
10	"	"	PUNCT	_	_	12	punct	_	SpaceAfter=No
11	go	go	PART	_	PartType=Cmpl	12	mark:prt	_	_
12	bhfuil	bí	VERB	_	Form=Ecl|Mood=Ind|Tense=Pres	2	ccomp	_	_
13	sise	sí	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Emp	12	nsubj	_	_
14	sásta	sásta	ADJ	_	Degree=Pos	12	xcomp:pred	_	_
15	eisean	é	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Emp	17	obj	_	_
16	a	a	PART	_	PartType=Inf	17	mark	_	_
17	phósadh	pósadh	NOUN	_	Case=Nom|Form=Len|Gender=Masc|Number=Sing	14	xcomp	_	SpaceAfter=No
18	.	.	PUNCT	_	_	12	punct	_	SpaceAfter=No
19	"	"	PUNCT	_	_	12	punct	_	SpacesAfter=\n

~~~


