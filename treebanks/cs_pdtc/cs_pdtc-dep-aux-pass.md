---
layout: base
title:  'Statistics of aux:pass in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="cs_pdtc-dep-aux.html">aux</a></tt>.

3312 nodes (0%) are attached to their parents as `aux:pass`.

3260 instances of `aux:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.16817632850242.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (3312; 100% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 aux:pass	color:blue
1	Je	být	AUX	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux:pass	5:aux:pass	_
2	tu	tu	ADV	Db-------------	PronType=Dem	5	advmod	5:advmod	LId=tu-1|Functor=5:LOC
3	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	4:case	Entity=(cmpr9410009e1--2-gstype:gen|LId=pro-1
4	vás	vy	PRON	PP-P4--2-------	Case=Acc|Number=Plur|Person=2|PronType=Prs	5	obl	5:obl:pro:acc	Entity=cmpr9410009e1)|Functor=5:BEN
5	připravena	připravený	ADJ	VsQW----X-APP--	Aspect=Perf|Degree=Pos|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=připravit|Functor=0:PRED
6	rubrika	rubrika	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	5	nsubj:pass	5:nsubj:pass	Entity=(cmpr9410009e6--1-gstype:spec|Functor=5:PAT
7	Daňový	daňový	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	8	amod	8:amod	Functor=8:RSTR
8	poradce	poradce	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	nmod	6:nmod:nom	Entity=cmpr9410009e6)|Functor=6:ID|SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


