---
layout: base
title:  'Statistics of amod in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `amod`

This relation is universal.

34408 nodes (10%) are attached to their parents as `amod`.

32013 instances of `amod` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30338874680307.

The following 18 pairs of parts of speech are connected with `amod`: <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (33036; 96% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (802; 2% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (132; 0% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (100; 0% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (89; 0% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (85; 0% instances), <tt><a href="cs_pdt-pos-X.html">X</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (62; 0% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (33; 0% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (23; 0% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (16; 0% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (14; 0% instances), <tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="cs_pdt-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_pdt-pos-X.html">X</a></tt>-<tt><a href="cs_pdt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	|	|	PUNCT	Z:-------------	_	3	punct	3:punct	_
2	Daňový	daňový	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	3:amod	Entity=(cmpr9410009c2--2-gstype:spec|Functor=3:RSTR
3	poradce	poradce	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	0:root	Entity=cmpr9410009c2)|Functor=0:DENOM
4	|	|	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	Restaurátorské	restaurátorský	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	2:amod	Functor=2:RSTR
2	licence	licence	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	3	nsubj	3:nsubj	Functor=3:ACT
3	umožňují	umožňovat	VERB	VB-P---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
4	práce	práce	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	3	obj	3:obj	Entity=(cmpr9410029c4--1-gstype:gen|Functor=3:PAT|LGloss=(jako_činnost_i_místo)
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	7:case	Bridge=cmpr9410029c7<cmpr9410029c5:subset,cmpr9410029c8<cmpr9410029c5:part|Entity=(cmpr9410029c5--3|LId=v-1
6	celé	celý	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	7	amod	7:amod	Functor=7:RSTR
7	ČR	ČR	PROPN	BNXXX-----A----	Abbr=Yes|NameType=Geo|Polarity=Pos	4	nmod	4:nmod:v:loc	Entity=cmpr9410029c5)cmpr9410029c4)|Functor=4:LOC|LGloss=(Česká_republika)|SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 amod	color:blue
1	Proto	proto	CCONJ	J^-------------	_	2	cc	2:cc	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)|Functor=2:PREC
2	musí	muset	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	odběratel	odběratel	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	2	nsubj	2:nsubj|4:nsubj:xsubj	Entity=(cmpr9410049c104--1-gstype:gen)|Functor=2:ACT
4	platit	platit	VERB	Vf--------A-I--	Aspect=Imp|Polarity=Pos|VerbForm=Inf	2	xcomp	2:xcomp	Functor=2:PRED
5	tolik	tolik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Dem	4	obj	4:obj	SpaceAfter=No|LId=tolik-1
6	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
7	kolik	kolik	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Dem,Ind	9	nsubj:pass	9:nsubj:pass	Functor=9:PAT
8	bude	být	AUX	VB-S---3F-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	9	aux:pass	9:aux:pass	_
9	stanoveno	stanovený	ADJ	VsNS----X-APP--	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	5	amod	5:amod	SpaceAfter=No|LGloss=(určit)|LDeriv=stanovit|Functor=5:EXT
10	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


