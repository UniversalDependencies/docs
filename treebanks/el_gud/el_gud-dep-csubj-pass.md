---
layout: base
title:  'Statistics of csubj:pass in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="el_gud-dep-csubj.html">csubj</a></tt>.

2 nodes (0%) are attached to their parents as `csubj:pass`.

2 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj:pass	color:blue
1	Συνεπώς	συνεπής	ADV	AdBa	_	3	advmod	_	_
2	,	,	PUNCT	PUNCT	_	3	punct	_	PunctType=Comm
3	αποκλείεται	αποκλείω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	να	να	SCONJ	PtSj	_	5	mark	_	_
5	παίζεται	παίζω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	csubj:pass	_	_
6	βρόμικο	βρόμικος	ADJ	AjBa	Case=Nom|Gender=Neut|Number=Sing	7	amod	_	_
7	παιχνίδι	παιχνίδι	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Sing	5	nsubj:pass	_	_
8	με	με	ADP	AsPpSp	_	10	case	_	_
9	την	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	ασφάλεια	ασφάλεια	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	PTERMP	_	3	punct	_	PunctType=Peri

~~~


