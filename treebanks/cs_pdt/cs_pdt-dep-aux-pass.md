---
layout: base
title:  'Statistics of aux:pass in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="cs_pdt-dep-aux.html">aux</a></tt>.

1339 nodes (0%) are attached to their parents as `aux:pass`.

1306 instances of `aux:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25093353248693.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (1339; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:pass	color:blue
1	Proto	proto	CCONJ	J^-------------	_	2	cc	2:cc	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)|Functor=2:PREC
2	musí	muset	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	odběratel	odběratel	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj|4:nsubj:xsubj	Entity=(cmpr9410049c104--1-gstype:gen)|Functor=2:ACT
4	platit	platit	VERB	Vf--------A-I--	Aspect=Imp|Polarity=Pos|VerbForm=Inf	2	xcomp	2:xcomp	Functor=2:PRED
5	tolik	tolik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Dem	4	obj	4:obj	SpaceAfter=No|LId=tolik-1
6	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
7	kolik	kolik	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Dem,Ind	9	nsubj:pass	9:nsubj:pass	Functor=9:PAT
8	bude	být	AUX	VB-S---3F-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	9	aux:pass	9:aux:pass	_
9	stanoveno	stanovený	ADJ	VsNS----X-APP--	Aspect=Perf|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	5	amod	5:amod	SpaceAfter=No|LGloss=(určit)|LDeriv=stanovit|Functor=5:EXT
10	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


