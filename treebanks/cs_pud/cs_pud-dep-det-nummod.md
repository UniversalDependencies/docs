---
layout: base
title:  'Statistics of det:nummod in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="cs_pud-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs_pud-dep-det-numgov.html">det:numgov</a></tt>.

10 nodes (0%) are attached to their parents as `det:nummod`.

10 instances of `det:nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.7.

The following 1 pairs of parts of speech are connected with `det:nummod`: <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (10; 100% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 det:nummod	color:blue
1	Existuje	existovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	mnoho	mnoho	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Ind	4	det:numgov	4:det:numgov	LId=mnoho-1
3	pravěkých	pravěký	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	4	amod	4:amod	_
4	artefaktů	artefakt	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	1	nsubj	1:nsubj	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
6	včetně	včetně	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	9:case	LId=včetně-2
7	několika	několik	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Ind	9	det:nummod	9:det:nummod	_
8	různých	různý	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	9	amod	9:amod	_
9	menhirů	menhir	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	4	nmod	4:nmod:včetně:gen	_
10	a	a	CCONJ	J^-------------	_	11	cc	11:cc	LId=a-1
11	dolmenů	dolmen	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	9	conj	4:nmod:včetně:gen|9:conj	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


