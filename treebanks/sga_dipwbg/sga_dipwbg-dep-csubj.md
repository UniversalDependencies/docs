---
layout: base
title:  'Statistics of csubj in UD_Old_Irish-DipWBG'
udver: '2'
---

## Treebank Statistics: UD_Old_Irish-DipWBG: Relations: `csubj`

This relation is universal.

2 nodes (0%) are attached to their parents as `csubj`.

1 instances of `csubj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipwbg-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 csubj	color:blue
1	Acht	acht	SCONJ	_	_	4	mark	_	_
2	nammáa	nammá	ADV	_	_	1	advmod	_	_
3	is	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	4	nsubj	_	SpaceAfter=No
4	samlid	amal	ADV	_	_	0	root	_	_
5	is	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	6	cop	_	SpaceAfter=No
6	torbe	torbae	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	_
7	són	són	PRON	_	PronType=Ana	6	nsubj:outer	_	_
8	co	co	SCONJ	_	_	10	mark	_	_
9	eter	eter	PART	_	PartType=Vb	10	compound:prt	_	SpaceAfter=No
10	certa	etarcerta	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	6	csubj	_	_
11	a	a	PART	_	PartType=Rel|PronType=Dem	10	obj	_	SpaceAfter=No
12	nas	as	PART	_	PartType=Vb	13	compound:prt	_	SpaceAfter=No
13	bera	asbeir	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	11	acl:relcl	_	_
14	et	_	CCONJ	_	Foreign=Yes	16	cc	_	_
15	con	co	SCONJ	_	_	16	mark	_	SpaceAfter=No
16	rucca	beirid	VERB	_	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	10	conj	_	_
17	i	i	ADP	_	AdpType=Prep|Definite=Ind	18	case	_	SpaceAfter=No
18	nætarcne	etargne	NOUN	_	Case=Acc|Number=Sing	16	obl	_	_
19	cáich	cách	PRON	_	PronType=Ind	18	nmod	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 20 csubj	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	2	advmod	_	_
2	léic	léicid	VERB	_	Mood=Imp|Number=Sing|Person=2|Voice=Act	0	root	_	_
3	uáit	ó	ADP	_	AdpType=Prep|Definite=Ind|Number=Sing|Person=2|PronType=Prs	2	obl:prep	_	_
4	inna	a	DET	_	Case=Acc|Gender=Neut|Number=Plur|PronType=Art	5	det	_	SpaceAfter=No
5	biada	biad	NOUN	_	Case=Acc|Number=Plur	2	obj	_	_
6	mílsi	milis	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	5	amod	_	_
7	et	_	X	_	Foreign=Yes	9	cc	_	SpaceAfter=No
8	to	do	PART	_	PartType=Vb	9	compound:prt	_	SpaceAfter=No
9	mil	domeil	VERB	_	Mood=Imp|Number=Sing|Person=2|Voice=Act	2	conj	_	_
10	inna	a	DET	_	Case=Acc|Gender=Neut|Number=Plur|PronType=Art	11	det	_	SpaceAfter=No
11	hí	í	PART	_	PartType=Dct	9	obj	_	_
12	siu	so	PART	_	PronType=Dem	11	amod	_	_
13	do	do	PART	_	PartType=Vb	14	compound:prt	_	SpaceAfter=No
14	mmeil	domeil	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	11	acl:relcl	_	_
15	do	do	PRON	_	Number=Sing|Person=2|Poss=Yes|PronType=Prs	16	nmod:poss	_	_
16	chenél	cenél	NOUN	_	Case=Nom|Number=Sing	14	nsubj	_	_
17	ar	ara	SCONJ	_	_	20	mark	_	SpaceAfter=No
18	ná	ná	SCONJ	_	Polarity=Neg	20	mark	_	SpaceAfter=No
19	p	is	AUX	_	Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	20	nsubj	_	SpaceAfter=No
20	hé	é	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	23	csubj	_	_
21	som	som	PRON	_	PronType=Emp	20	amod	_	_
22	con	con	PART	_	PartType=Vb	23	compound:prt	_	SpaceAfter=No
23	éit	conéitet	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	2	advcl	_	_
24	dét	do	ADP	_	AdpType=Prep|Definite=Ind|Number=Sing|Person=2|PronType=Prs	23	obl:prep	_	SpaceAfter=No
25	so	so	PRON	_	PronType=Emp	24	amod	_	_

~~~


