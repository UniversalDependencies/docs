---
layout: base
title:  'Statistics of nsubj:outer in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="it_postwita-dep-nsubj-pass.html">nsubj:pass</a></tt>.

1 nodes (0%) are attached to their parents as `nsubj:outer`.

1 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.

The following 1 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 5 nsubj:outer	color:blue
1	RT	RT	SYM	SYM	_	4	parataxis	_	_
2	@user	@user	SYM	SYM	_	4	vocative	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	ragazzi	ragazzo	NOUN	S	Gender=Masc|Number=Plur	0	root	_	_
5	che	che	PRON	PR	PronType=Rel	12	nsubj:outer	_	_
6	“	“	PUNCT	FB	_	9	punct	_	_
7	perchè	perché	ADV	B	_	9	advmod	_	_
8	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	9	det	_	_
9	tette	tetta	NOUN	S	Gender=Fem|Number=Plur	12	nsubj	_	_
10	di	di	ADP	E	_	11	case	_	_
11	fuori	fuori	ADV	B	_	9	advmod	_	_
12	hanno	avere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	acl	_	_
13	più	più	ADV	B	_	15	advmod	_	_
14	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	15	iobj	_	_
15	piace	piacere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	ccomp	_	_
16	di	di	ADP	E	_	18	case	_	_
17	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	sorriso	sorriso	NOUN	S	Gender=Masc|Number=Sing	13	obl	_	SpaceAfter=No
19	?	?	PUNCT	FS	_	12	punct	_	_
20	“	“	PUNCT	FB	_	12	punct	_	_
21	e	e	CCONJ	CC	_	25	cc	_	_
22	poi	poi	ADV	B	_	25	advmod	_	_
23	se	se	SCONJ	CS	_	25	mark	_	_
24	non	non	ADV	BN	PronType=Neg	25	advmod	_	_
25	hai	avere	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	12	conj	_	_
26	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	27	det	_	_
27	balcone	balcone	NOUN	S	Gender=Masc|Number=Sing	25	obj	_	_
28	con	con	ADP	E	_	29	case	_	_
29	tanto	tanto	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	25	obl	_	_
30	di	di	ADP	E	_	31	case	_	_
31	fiori	fiore	NOUN	S	Gender=Masc|Number=Plur	29	nmod	_	_
32	nem…	nem…	X	X	_	25	dep	_	_

~~~


