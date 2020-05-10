---
layout: base
title:  'Statistics of nsubj:pass in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="cs_pdt-dep-nsubj.html">nsubj</a></tt>.

7718 nodes (1%) are attached to their parents as `nsubj:pass`.

4891 instances of `nsubj:pass` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.72790878465924.

The following 15 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (3608; 47% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (2616; 34% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (486; 6% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (344; 4% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (241; 3% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt> (96; 1% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt> (95; 1% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (59; 1% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (38; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (35; 0% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt> (32; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (31; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (22; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt> (14; 0% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj:pass	color:blue
1	Rozdíl	rozdíl	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj:pass	6:nsubj:pass	_
2	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	4:case	LId=do-1
3	regulované	regulovaný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	4:amod	LDeriv=regulovat
4	ceny	cena	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	nmod	1:nmod:do:gen	LId=cena-1|LGloss=(v_penězích,_naturální,_nevyčíslitelná,...)
5	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	aux:pass	6:aux:pass	_
6	hrazen	hrazený	ADJ	VsYS---XX-AP---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=hradit
7	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	8:case	LId=z-1
8	dotací	dotace	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	6	obl	6:obl:z:gen	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:pass	color:blue
1	Hodnota	hodnota	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	7	nsubj:pass	7:nsubj:pass	_
2	thajského	thajský	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	3:amod	_
3	vývozu	vývoz	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	1	nmod	1:nmod:gen	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pass	7:expl:pass	LGloss=(zvr._zájmeno/částice)
5	každým	každý	DET	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|PronType=Tot	6	det	6:det	_
6	rokem	rok	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	7	obl	7:obl:ins	_
7	zvyšuje	zvyšovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	9:case	LId=o-1
9	více	hodně	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	7	advmod	7:advmod	_
10	než	než	SCONJ	J,-------------	_	11	mark	11:mark	LId=než-2
11	12	12	NUM	C=-------------	NumForm=Digit|NumType=Card	9	obl	9:obl:než	_
12	%	%	SYM	Z:-------------	_	9	nmod	9:nmod	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nsubj:pass	color:blue
1	Proto	proto	CCONJ	J^-------------	_	2	cc	2:cc	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)
2	musí	muset	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	odběratel	odběratel	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	2	nsubj	2:nsubj|4:nsubj	_
4	platit	platit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	2	xcomp	2:xcomp	_
5	tolik	tolik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Dem	4	obj	4:obj	SpaceAfter=No|LId=tolik-1
6	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
7	kolik	kolik	DET	C?--1----------	Case=Nom|NumType=Card|PronType=Int,Rel	9	nsubj:pass	9:nsubj:pass	_
8	bude	být	AUX	VB-S---3F-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	9	aux:pass	9:aux:pass	_
9	stanoveno	stanovený	ADJ	VsNS---XX-AP---	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	5	amod	5:amod	SpaceAfter=No|LDeriv=stanovit|LGloss=(určit)
10	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


