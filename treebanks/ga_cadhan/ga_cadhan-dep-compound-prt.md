---
layout: base
title:  'Statistics of compound:prt in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `compound:prt`

This relation is a language-specific subtype of .

1 nodes (0%) are attached to their parents as `compound:prt`.

1 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `compound:prt`: <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
1	Treig	tréig	VERB	_	Mood=Imp|Number=Sing|Person=2	0	root	_	_
2	do	do	DET	_	Number=Sing|Person=2|Poss=Yes	3	nmod:poss	_	_
3	dhiomus	díomas	NOUN	_	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Sing	1	obj	_	_
4	na	ná	PART	_	Mood=Imp|PartType=Vb|Polarity=Neg	5	advmod	_	_
5	lean	lean	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Neg	1	parataxis	_	_
6	de	de	ADP	_	Gender=Masc|Number=Sing|Person=3	5	compound:prt	_	_
7	mithidh	mithid	ADJ	_	Degree=Pos	1	parataxis	_	_
8	dhuit	do	ADP	_	Number=Sing|Person=2	7	obl:prep	_	_
9	i	i	ADP	_	_	10	case	_	_
10	n-eirr	earr	NOUN	_	Case=Dat|Definite=Def|Form=Ecl|Gender=Fem|Number=Sing	7	parataxis	_	_
11	th'	do	DET	_	Number=Sing|Person=2|Poss=Yes	12	nmod:poss	_	SpaceAfter=No
12	áoise	aois	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	10	nmod	_	_
13	saoghal	saol	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	17	obj	_	_
14	na	an	DET	_	Case=Gen|Definite=Def|Number=Plur|PronType=Art	15	det	_	_
15	meang	meang	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|NounType=Weak|Number=Plur	13	nmod	_	_
16	do	a	PART	_	PartType=Inf	17	mark	_	_
17	thuigsin	tuiscint	NOUN	_	Form=Len|VerbForm=Inf	7	xcomp	_	_
18	's	agus	CCONJ	_	_	20	cc	_	_
19	nach	is	AUX	_	Polarity=Neg|PronType=Rel|Tense=Pres|VerbForm=Cop	20	cop	_	_
20	tú	tú	PRON	_	Number=Sing|Person=2	17	conj	_	_
21	a-mháin	amháin	ADJ	_	Degree=Pos	20	amod	_	_
22	do	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	23	mark:prt	_	_
23	rothuirrsigh	tuirsigh	VERB	_	Mood=Ind|Tense=Past	20	csubj:cleft	_	SpaceAfter=No
24	.	.	PUNCT	_	_	1	punct	_	_

~~~


