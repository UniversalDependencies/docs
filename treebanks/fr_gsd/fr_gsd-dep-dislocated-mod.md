---
layout: base
title:  'Statistics of dislocated:mod in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `dislocated:mod`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-dislocated.html">dislocated</a></tt>.
There are also 2 other language-specific subtypes of `dislocated`: <tt><a href="fr_gsd-dep-dislocated-obj.html">dislocated:obj</a></tt>, <tt><a href="fr_gsd-dep-dislocated-subj.html">dislocated:subj</a></tt>.

1 nodes (0%) are attached to their parents as `dislocated:mod`.

1 instances of `dislocated:mod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 1 pairs of parts of speech are connected with `dislocated:mod`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 dislocated:mod	color:blue
1	Cà	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem|Typo=Yes	5	dislocated:mod	_	CorrectForm=Ça|wordform=cà
2	oui	oui	INTJ	_	_	1	discourse	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	5	nsubj	_	_
5	peut	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	dire	dire	VERB	_	VerbForm=Inf	5	xcomp	_	Subject=SubjRaising
7	que	que	SCONJ	_	_	13	mark	_	_
8	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	13	nsubj	_	SpaceAfter=No
9	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	13	cop	_	_
10	à	à	ADP	_	ExtPos=ADV	13	advmod	_	Idiom=Yes
11	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	fixed	_	InIdiom=Yes
12	fois	fois	NOUN	_	Gender=Fem|Number=Sing	10	fixed	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|InIdiom=Yes
13	futuriste	futuriste	ADJ	_	Gender=Masc|Number=Sing	6	ccomp	_	Exponence[Gender]=Absent
14	et	et	CCONJ	_	_	15	cc	_	_
15	romantique	romantique	ADJ	_	Gender=Masc|Number=Sing	13	conj	_	Exponence[Gender]=Absent|SpaceAfter=No
16	,	,	PUNCT	_	_	18	punct	_	_
17	comme	comme	SCONJ	_	_	18	mark	_	_
18	diner	diner	VERB	_	VerbForm=Inf	13	advcl	_	Subject=Generic
19	avec	avec	ADP	_	_	21	case	_	_
20	ma	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	21	det	_	_
21	moitié	moitié	NOUN	_	Gender=Fem|Number=Sing	18	obl:mod	_	Exponence[Gender]=Inherent|SpaceAfter=No
22	.	.	PUNCT	_	_	5	punct	_	_

~~~


