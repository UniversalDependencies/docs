---
layout: base
title:  'Statistics of nsubj:pass in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="cs_pdtc-dep-nsubj.html">nsubj</a></tt>.

3633 nodes (1%) are attached to their parents as `nsubj:pass`.

2538 instances of `nsubj:pass` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.75529865125241.

The following 17 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (2011; 55% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (812; 22% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (313; 9% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (194; 5% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt> (108; 3% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (49; 1% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (46; 1% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (33; 1% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt> (14; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt> (13; 0% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (10; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (10; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt> (10; 0% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-X.html">X</a></tt> (4; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nsubj:pass	color:blue
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


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:pass	color:blue
1	Trh	trh	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	Entity=(cmpr9410029e47--1-gstype:spec)|Functor=4:ACT
2	nový	nový	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	3:amod	Entity=(cmpr9410029e41--2-gstype:gen|Functor=3:RSTR
3	výrobek	výrobek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	4:obj	Entity=cmpr9410029e41)|Functor=4:PAT
4	uvítal	uvítat	VERB	VpYS----R-AAP--	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
5	a	a	CCONJ	J^-------------	_	10	cc	10:cc	LId=a-1|Functor=10:CONJ
6	celá	celý	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	amod	8:amod	Functor=8:RSTR
7	jeho	jeho	DET	P9XXXZS3-------	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	8	det	8:det	Entity=(cmpr9410029e41--1-gstype:gen)|Functor=8:PAT
8	produkce	produkce	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	10	nsubj:pass	10:nsubj:pass	Functor=10:PAT
9	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pass	10:expl:pass	LGloss=(zvr._zájmeno/částice)
10	prodá	prodat	VERB	VB-S---3P-AAP--	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	0:root|4:conj	SpaceAfter=No|Functor=4:PRED
11	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nsubj:pass	color:blue
1	Proto	proto	CCONJ	J^-------------	_	2	cc	2:cc	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)|Functor=2:PREC
2	musí	muset	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	odběratel	odběratel	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj|4:nsubj:xsubj	Entity=(cmpr9410049e307--1-gstype:gen)|Functor=2:ACT
4	platit	platit	VERB	Vf--------A-I--	Aspect=Imp|Polarity=Pos|VerbForm=Inf	2	xcomp	2:xcomp	Functor=2:PRED
5	tolik	tolik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Dem	4	obj	4:obj	SpaceAfter=No|LId=tolik-1
6	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
7	kolik	kolik	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Dem,Ind	9	nsubj:pass	9:nsubj:pass	Functor=9:PAT
8	bude	být	AUX	VB-S---3F-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	9	aux:pass	9:aux:pass	_
9	stanoveno	stanovený	ADJ	VsNS----X-APP--	Aspect=Perf|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	5	acl	5:acl	SpaceAfter=No|LGloss=(určit)|LDeriv=stanovit|Functor=5:EXT
10	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


