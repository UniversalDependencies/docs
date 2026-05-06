---
layout: base
title:  'Statistics of nmod:poss in UD_Kadiweu-Unicamp'
udver: '2'
---

## Treebank Statistics: UD_Kadiweu-Unicamp: Relations: `nmod:poss`

This relation is a language-specific subtype of .

15 nodes (5%) are attached to their parents as `nmod:poss`.

13 instances of `nmod:poss` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.06666666666667.

The following 3 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt> (10; 67% instances), <tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kbc_unicamp-pos-PROPN.html">PROPN</a></tt> (4; 27% instances), <tt><a href="kbc_unicamp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kbc_unicamp-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:poss	color:blue
1	ica	ica	DET	D	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	TokenRange=0:3
2	loigi	oigi	NOUN	N$	Gender=Masc|Number=Sing|Person[psor]=3	5	nsubj	_	TokenRange=4:9
3	ijo	ijo	DET	D	Gender=Masc|Number=Sing|PronType=Dem	4	det	_	TokenRange=10:13
4	niganigi	niganigi	NOUN	N	Gender=Masc|Number=Sing	2	nmod:poss	_	TokenRange=14:22
5	ipegitegi	pegi	VERB	VBAPL	Mood=Ind|Person[erg]=3|Person[obj]=3|VerbForm=Fin|Voice=Appl	0	root	_	TokenRange=23:32
6	GanigotGa	nigota	NOUN	N$	Gender=Fem|Number=Sing|Person[psor]=2	5	obj	_	SpaceAfter=No|TokenRange=33:42
7	.	.	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No|TokenRange=42:4

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:poss	color:blue
1	liGeladi	Geladi	NOUN	N$	Gender=Masc|Number=Sing|Person[psor]=3	4	nsubj	_	TokenRange=0:8
2	Maria	maria	PROPN	NPR	_	1	nmod:poss	_	TokenRange=9:14
3	aG	aG	PART	NEG	Polarity=Neg	4	advmod	_	_
4	ipegetege	pege	VERB	VBAPL	Gender[obj]=Fem|Mood=Ind|Person[erg]=3|Person[obj]=3|VerbForm=Fin|Voice=Appl	0	root	_	_
5	.	.	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No|TokenRange=26:27

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod:poss	color:blue
1	iGeladi	Geladi	NOUN	N$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1	2	nsubj	_	TokenRange=0:7
2	idei	dei	VERB	VB	Mood=Ind|Person[erg]=3|VerbForm=Fin	0	root	_	TokenRange=8:12
3	me	me	SCONJ	C	_	5	mark	_	_
4	ijo	ijo	DET	D	Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	naigi	naigi	NOUN	N	Gender=Masc|Number=Sing	2	obj	_	TokenRange=18:23
6	naGajo	niGijo	PRON	PRO$	Gender=Fem|Poss=Yes|PronType=Dem	5	nmod:poss	_	SpaceAfter=No|TokenRange=24:30
7	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=30:31

~~~


