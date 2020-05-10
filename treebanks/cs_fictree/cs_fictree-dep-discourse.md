---
layout: base
title:  'Statistics of discourse in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `discourse`

This relation is universal.

303 nodes (0%) are attached to their parents as `discourse`.

254 instances of `discourse` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.39273927392739.

The following 17 pairs of parts of speech are connected with `discourse`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PART.html">PART</a></tt> (131; 43% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (114; 38% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (19; 6% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-INTJ.html">INTJ</a></tt> (7; 2% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-PART.html">PART</a></tt> (4; 1% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-SCONJ.html">SCONJ</a></tt> (3; 1% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 discourse	color:blue
1	Neměla	mít	VERB	VpFS----R-NA---	Gender=Fem|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
2	nejmenší	malý	ADJ	AANS4----3A----	Case=Acc|Degree=Sup|Gender=Neut|Number=Sing|Polarity=Pos	3	amod	3:amod	_
3	ponětí	ponětí	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	1	obj	1:obj|8:obl:arg:o:loc	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
5	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	6	case	6:case	_
6	čem	co	PRON	PQ--6----------	Animacy=Inan|Case=Loc|PronType=Int,Rel	8	obl:arg	3:ref	_
7	to	to	PART	TT-------------	_	8	discourse	8:discourse	_
8	mluvím	mluvit	VERB	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	3:acl:relcl	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 discourse	color:blue
1	Ale	ale	CCONJ	J^-------------	_	4	cc	4:cc	_
2	babička	babička	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	4	nsubj	4:nsubj	_
3	si	se	PRON	P7--3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	4	discourse	4:discourse	_
4	prosadila	prosadit	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
6	že	že	SCONJ	J,-------------	_	9	mark	9:mark	_
7	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pass	9:expl:pass	_
8	lípa	lípa	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	9	nsubj:pass	9:nsubj:pass	_
9	přesadí	přesadit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	ccomp	4:ccomp	_
10	a	a	CCONJ	J^-------------	_	11	cc	11:cc	_
11	hotovo	hotový	ADJ	ACNS------A----	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short	9	conj	4:ccomp|9:conj	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 discourse	color:blue
1	Co	co	PRON	PQ--1----------	Animacy=Inan|Case=Nom|PronType=Int,Rel	8	nsubj	8:nsubj	_
2	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	expl:pv	8:expl:pv	_
3	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	8	discourse	8:discourse	_
4	tam	tam	ADV	Db-------------	PronType=Dem	8	advmod	8:advmod	_
5	takhle	takhle	ADV	Db-------------	_	8	advmod	8:advmod	_
6	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	7:case	_
7	ránu	ráno	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	8	obl	8:obl:po:loc	_
8	děje	dít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
9	?	?	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


