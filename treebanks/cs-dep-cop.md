---
layout: base
title:  'Statistics of cop in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `cop`

This relation is universal.

20598 nodes (1%) are attached to their parents as `cop`.

17236 instances of `cop` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.36304495582095.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (11575; 56% instances), <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (7524; 37% instances), <tt><a href="cs-pos-DET.html">DET</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (547; 3% instances), <tt><a href="cs-pos-NUM.html">NUM</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (466; 2% instances), <tt><a href="cs-pos-PRON.html">PRON</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (208; 1% instances), <tt><a href="cs-pos-ADV.html">ADV</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (192; 1% instances), <tt><a href="cs-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (67; 0% instances), <tt><a href="cs-pos-PART.html">PART</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (11; 0% instances), <tt><a href="cs-pos-SYM.html">SYM</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-AUX.html">AUX</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Změny	změna	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	3	nsubj	_	_
2	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	citelné	citelný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	6	punct	_	_
5	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	třeba	třeba	ADJ	ACNS------A----	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short	3	conj	_	LId=třeba-1
7	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	9	obj	_	LId=on-1|LGloss=(oni/ono)
8	lépe	dobře	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	9	advmod	_	_
9	prezentovat	prezentovat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	csubj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	BESO	Beso	PROPN	NNNS1-----A----	Case=Nom|Gender=Neut|NameType=Com|Number=Sing|Polarity=Pos	6	nsubj	_	_
2	a	a	CCONJ	J^-------------	_	3	cc	_	LId=a-1
3	SES	SES	PROPN	NNXXX-----A---8	Abbr=Yes|NameType=Com|Polarity=Pos	1	conj	_	_
4	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
5	dvě	dva	NUM	ClHP1----------	Case=Nom|Gender=Fem,Neut|Number=Plur|NumForm=Word|NumType=Card|NumValue=1,2,3	6	nummod	_	LNumValue=2
6	organizace	organizace	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	0	root	_	_
7	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	9	case	_	LId=s-1
8	stejným	stejný	ADJ	AANS7----1A----	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	9	amod	_	_
9	posláním	poslání	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	6	nmod	_	SpaceAfter=No|LDeriv=poslat
10	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cop	color:blue
1	Proto	proto	CCONJ	J^-------------	_	3	cc	_	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)
2	nás	já	PRON	PP-P4--1-------	Case=Acc|Number=Plur|Person=1|PronType=Prs	3	obj	_	_
3	zajímalo	zajímat	VERB	VpNS---XR-AA---	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	5	punct	_	_
5	jaký	jaký	DET	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	3	csubj	_	_
6	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
7	její	jeho	DET	PSZS1FS3-------	Case=Nom|Gender=Masc,Neut|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	8	det	_	LGloss=(přivlast.)
8	pohled	pohled	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj	_	_
9	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	_	LId=na-1
10	působení	působení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	8	nmod	_	LDeriv=působit
11	Američanů	Američan	PROPN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Nat|Number=Plur|Polarity=Pos	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


