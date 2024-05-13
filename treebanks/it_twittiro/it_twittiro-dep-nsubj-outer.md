---
layout: base
title:  'Statistics of nsubj:outer in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="it_twittiro-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="it_twittiro-dep-nsubj-pass.html">nsubj:pass</a></tt>.

1 nodes (0%) are attached to their parents as `nsubj:outer`.

1 instances of `nsubj:outer` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nsubj:outer	color:blue
1	@user	@user	SYM	SYM	_	9	vocative:mention	_	SpaceAfter=No
2	:	:	PUNCT	FC	_	1	punct	_	_
3	Mario	mario	PROPN	SP	_	9	nsubj	_	_
4	Monti	Monti	PROPN	SP	_	3	flat:name	_	_
5	e	e	CCONJ	CC	_	6	cc	_	_
6	Sara	Sara	PROPN	SP	_	3	conj	_	_
7	Tommasi	Tommasi	PROPN	SP	_	6	flat:name	_	_
8	sono	essere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	usciti	uscire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
10	entrambi	entrambi	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	9	nsubj:outer	_	_
11	da	da	ADP	E	_	13	case	_	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	Bocconi	Bocconi	PROPN	SP	_	9	obl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	9	punct	_	_
15	Lui	egli	PRON	PE	Number=Sing|Person=3|PronType=Prs	9	parataxis	_	_
16	a	a	ADP	E	_	17	case	_	_
17	testa	testa	NOUN	S	Gender=Fem|Number=Sing	15	nmod	_	_
18	alta	alto	ADJ	A	Gender=Fem|Number=Sing	17	amod	_	SpaceAfter=No
19	,	,	PUNCT	FF	_	20	punct	_	_
20	lei	egli	PRON	PE	Gender=Fem|Number=Sing|PronType=Prs	15	conj	_	_
21	a	a	ADP	E	_	22	case	_	_
22	90	90	NUM	N	NumType=Card	20	orphan	_	SpaceAfter=No
23	!	!	PUNCT	FS	_	15	punct	_	_

~~~


