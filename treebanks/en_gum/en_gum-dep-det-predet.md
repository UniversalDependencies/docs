---
layout: base
title:  'Statistics of det:predet in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-det.html">det</a></tt>.

79 nodes (0%) are attached to their parents as `det:predet`.

79 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.24050632911392.

The following 3 pairs of parts of speech are connected with `det:predet`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (73; 92% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (5; 6% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det:predet	color:blue
1	Why	why	SCONJ	WRB	PronType=Int	4	mark	_	_
2	should	should	AUX	MD	VerbForm=Fin	4	aux	_	_
3	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Entity=(person-9)
4	bother	bother	VERB	VB	VerbForm=Inf	0	root	_	_
5	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	6	nmod:poss	_	Entity=(person-60(person-9)
6	children	child	NOUN	NNS	Number=Plur	4	obj	_	Entity=person-60)
7	with	with	ADP	IN	_	10	case	_	_
8	all	all	PRON	PDT	_	10	det:predet	_	Entity=(event-55
9	this	this	DET	DT	Number=Sing|PronType=Dem	10	det	_	_
10	nonsense	nonsense	NOUN	NN	Number=Sing	4	obl	_	Entity=event-55)|SpaceAfter=No
11	?	?	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 det:predet	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	Entity=(abstract-22(place-17
2	land	land	NOUN	NN	Number=Sing	13	dislocated	_	Entity=place-17)|SpaceAfter=No
3	,	,	PUNCT	,	_	6	punct	_	_
4	the	the	DET	DT	Definite=Def|PronType=Art	6	det	_	Entity=(substance-23
5	natural	natural	ADJ	JJ	Degree=Pos	6	amod	_	_
6	resources	resource	NOUN	NNS	Number=Plur	2	conj	_	Entity=substance-23)|SpaceAfter=No
7	,	,	PUNCT	,	_	9	punct	_	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	_	Entity=(abstract-24
9	markets	market	NOUN	NNS	Number=Plur	2	conj	_	Entity=abstract-22)abstract-24)|SpaceAfter=No
10	,	,	PUNCT	,	_	2	punct	_	_
11	all	all	PRON	PDT	_	12	det:predet	_	Entity=(abstract-22
12	these	these	PRON	DT	Number=Plur|PronType=Dem	13	nsubj	_	Entity=abstract-22)
13	go	go	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
14	together	together	ADV	RB	_	13	advmod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 det:predet	color:blue
1	That	that	PRON	DT	Number=Sing|PronType=Dem	2	nsubj	_	Entity=(event-19)
2	started	start	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	2	obj	_	Entity=(person-2)
4	out	out	ADP	RP	_	2	compound:prt	_	_
5	on	on	ADP	IN	_	6	case	_	_
6	books	book	NOUN	NNS	Number=Plur	2	obl	_	Entity=(object-21)
7	and	and	CCONJ	CC	_	10	cc	_	_
8	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	Entity=(person-2)
9	have	have	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	amassed	amass	VERB	VBN	Tense=Past|VerbForm=Part	2	conj	_	_
11	quite	quite	PRON	PDT	_	13	det:predet	_	Entity=(object-22
12	a	a	DET	DT	Definite=Ind|PronType=Art	13	det	_	_
13	few	few	ADJ	JJ	Degree=Pos	10	obj	_	Entity=object-22)
14	since	since	ADP	IN	_	15	case	_	_
15	then	then	ADV	RB	PronType=Dem	10	obl	_	Entity=(event-19)|SpaceAfter=No
16	.	.	PUNCT	.	_	2	punct	_	_

~~~


