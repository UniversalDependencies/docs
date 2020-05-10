---
layout: base
title:  'Statistics of cop in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `cop`

This relation is universal.

20597 nodes (1%) are attached to their parents as `cop`.

17236 instances of `cop` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.36223721901248.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (11576; 56% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (7526; 37% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (548; 3% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (466; 2% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (207; 1% instances), <tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (192; 1% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (61; 0% instances), <tt><a href="cs_pdt-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (11; 0% instances), <tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Změny	změna	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	3	nsubj	3:nsubj	_
2	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
3	citelné	citelný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
5	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
6	třeba	třeba	ADJ	ACNS------A----	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short	3	conj	0:root|3:conj	LId=třeba-1
7	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	9	obj	9:obj	LId=on-1|LGloss=(oni/ono)
8	lépe	dobře	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	9	advmod	9:advmod	_
9	prezentovat	prezentovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	csubj	6:csubj	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	BESO	Beso	PROPN	NNNS1-----A----	Case=Nom|Gender=Neut|NameType=Com|Number=Sing|Polarity=Pos	6	nsubj	6:nsubj	_
2	a	a	CCONJ	J^-------------	_	3	cc	3:cc	LId=a-1
3	SES	SES	PROPN	NNXXX-----A---8	Abbr=Yes|NameType=Com|Polarity=Pos	1	conj	1:conj|6:nsubj	_
4	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
5	dvě	dva	NUM	ClHP1----------	Case=Nom|Gender=Fem,Neut|Number=Plur|NumForm=Word|NumType=Card|NumValue=1,2,3	6	nummod	6:nummod	LNumValue=2
6	organizace	organizace	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	0	root	0:root	_
7	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	9	case	9:case	LId=s-1
8	stejným	stejný	ADJ	AANS7----1A----	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	9	amod	9:amod	_
9	posláním	poslání	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	6	nmod	6:nmod:s:ins	SpaceAfter=No|LDeriv=poslat
10	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cop	color:blue
1	Proto	proto	CCONJ	J^-------------	_	3	cc	3:cc	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)
2	nás	já	PRON	PP-P4--1-------	Case=Acc|Number=Plur|Person=1|PronType=Prs	3	obj	3:obj	_
3	zajímalo	zajímat	VERB	VpNS---XR-AA---	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
5	jaký	jaký	DET	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	3	csubj	3:csubj	_
6	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
7	její	jeho	DET	PSZS1FS3-------	Case=Nom|Gender=Masc,Neut|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	8	det	8:det	LGloss=(přivlast.)
8	pohled	pohled	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj	5:nsubj	_
9	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	10:case	LId=na-1
10	působení	působení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	8	nmod	8:nmod:na:acc	LDeriv=působit
11	Američanů	Američan	PROPN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Nat|Number=Plur|Polarity=Pos	10	nmod	10:nmod:gen	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


