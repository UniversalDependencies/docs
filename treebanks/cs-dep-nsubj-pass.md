---
layout: base
title:  'Statistics of nsubj:pass in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="cs-dep-nsubj.html">nsubj</a></tt>.

7718 nodes (1%) are attached to their parents as `nsubj:pass`.

4891 instances of `nsubj:pass` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.71909821197201.

The following 15 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-NOUN.html">NOUN</a></tt> (3536; 46% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-NOUN.html">NOUN</a></tt> (2615; 34% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (486; 6% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (344; 4% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-PROPN.html">PROPN</a></tt> (314; 4% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-PRON.html">PRON</a></tt> (96; 1% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-PRON.html">PRON</a></tt> (95; 1% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-NUM.html">NUM</a></tt> (59; 1% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (37; 0% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-PROPN.html">PROPN</a></tt> (37; 0% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-ADV.html">ADV</a></tt> (32; 0% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-NUM.html">NUM</a></tt> (31; 0% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (21; 0% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-ADV.html">ADV</a></tt> (14; 0% instances), <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj:pass	color:blue
1	Rozdíl	rozdíl	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj:pass	_	_
2	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	_	LId=do-1
3	regulované	regulovaný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	LDeriv=regulovat
4	ceny	cena	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	nmod	_	LId=cena-1|LGloss=(v_penězích,_naturální,_nevyčíslitelná,...)
5	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	aux:pass	_	_
6	hrazen	hrazený	ADJ	VsYS---XX-AP---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
7	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	_	LId=z-1
8	dotací	dotace	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:pass	color:blue
1	Hodnota	hodnota	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	7	nsubj:pass	_	_
2	thajského	thajský	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	_	_
3	vývozu	vývoz	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	1	nmod	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pass	_	LGloss=(zvr._zájmeno/částice)
5	každým	každý	DET	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|PronType=Tot	6	det	_	_
6	rokem	rok	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	7	obl	_	_
7	zvyšuje	zvyšovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	_	LId=o-1
9	více	hodně	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	7	advmod	_	_
10	než	než	SCONJ	J,-------------	_	11	mark	_	LId=než-2
11	12	12	NUM	C=-------------	NumForm=Digit|NumType=Card	9	obl	_	_
12	%	%	SYM	Z:-------------	_	9	nmod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nsubj:pass	color:blue
1	Proto	proto	CCONJ	J^-------------	_	2	cc	_	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)
2	musí	muset	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	odběratel	odběratel	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	2	nsubj	_	_
4	platit	platit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	2	xcomp	_	_
5	tolik	tolik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Dem	4	obj	_	SpaceAfter=No|LId=tolik-1
6	,	,	PUNCT	Z:-------------	_	9	punct	_	_
7	kolik	kolik	DET	C?--1----------	Case=Nom|NumType=Card|PronType=Int,Rel	9	nsubj:pass	_	_
8	bude	být	AUX	VB-S---3F-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	9	aux:pass	_	_
9	stanoveno	stanovený	ADJ	VsNS---XX-AP---	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	5	amod	_	SpaceAfter=No|LGloss=(určit)
10	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


