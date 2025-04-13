---
layout: base
title:  'Statistics of det in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: <tt><a href="cs_poetry-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="cs_poetry-dep-det-nummod.html">det:nummod</a></tt>.

200 nodes (3%) are attached to their parents as `det`.

140 instances of `det` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22.

The following 5 pairs of parts of speech are connected with `det`: <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (193; 97% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (3; 2% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="cs_poetry-pos-DET.html">DET</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Krákorala	krákorat	VERB	VpQW---XR-AA---	Aspect=Imp|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	_
3	svém	svůj	DET	P8ZS6----------	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	4	det	_	_
4	plenu	plen	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	1	obl:arg	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	7	punct	_	_
6	družkám	družka	NOUN	NNFP3-----A----	Case=Dat|Gender=Fem|Number=Plur	7	nmod	_	_
7	sovám	sova	NOUN	NNFP3-----A----	Case=Dat|Gender=Fem|Number=Plur	1	obl	_	_
8	–	–	PUNCT	Z:-------------	_	10	punct	_	_
9	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	10	case	_	_
10	jelenu	jelen	NOUN	NNMS6-----A---1	Animacy=Anim|Case=Loc|Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
1	Blaze	blaze	ADV	Vi-P---2--A----	Polarity=Pos	0	root	_	_
2	tobě	ty	PRON	PH-S3--2-------	Case=Dat|Number=Sing|Person=2|PronType=Prs	1	obl:arg	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	1	punct	_	_
4	nevinňátko	neviňátko	NOUN	NNFS5-----A----	Case=Voc|Gender=Neut|Number=Sing	1	vocative	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	9	punct	_	_
6	Že	že	SCONJ	J,-------------	_	9	mark	_	_
7	tvůj	tvůj	DET	PSYS1-S1-------	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	8	det	_	_
8	outlý	útlý	ADJ	AAMS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	nsubj	_	_
9	zvadnul	zvadnout	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	ccomp	_	_
10	květ	květ	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	SpaceAfter=No
11	;	;	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 det	color:blue
1	–	–	PUNCT	Z:-------------	_	8	punct	_	_
2	O	o	INTJ	RR--6----------	_	8	dep	_	_
3	marně	marně	ADJ	Dg-------1A----	Degree=Pos|Polarity=Pos	8	advmod	_	_
4	snu	sen	NOUN	NNIS6-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	8	obl:arg	_	_
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	expl:pv	_	_
6	jako	jako	SCONJ	J,-------------	_	7	mark	_	_
7	lásce	láska	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Number=Sing	8	advcl	_	_
8	bráníš	bránit	VERB	VB-S---2P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	12	punct	_	_
10	Ty	ty	PRON	PP-S1--2-------	Case=Nom|Number=Sing|Person=2|PronType=Prs	12	det	_	_
11	vzdorné	vzdorný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	12	amod	_	_
12	dítě	dítě	NOUN	NNNS1-----A----	Case=Voc|Gender=Neut|Number=Sing	8	vocative	_	_
13	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	14	case	_	_
14	duší	duše	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing	12	nmod	_	_
15	nevinnou	vinný	ADJ	AAFS7----1N----	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Neg	14	amod	_	SpaceAfter=No
16	,	,	PUNCT	Z:-------------	_	20	punct	_	_
17	než	než	SCONJ	J,-------------	_	20	mark	_	_
18	pomyslit	pomyslit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	20	xcomp	_	_
19	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	18	expl:pv	_	_
20	můžeš	moci	VERB	VB-S---2P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	24	advcl	_	SpaceAfter=No
21	,	,	PUNCT	Z:-------------	_	24	punct	_	_
22	mdle	mdle	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	24	advmod	_	_
23	juž	už	ADV	Db-------------	_	24	advmod	_	_
24	skláníš	sklánět	VERB	VB-S---2P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	8	parataxis	_	_
25	Svou	svůj	DET	P8FS4---------1	Case=Acc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	27	det	_	_
26	nezkušenou	nezkušený	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	27	amod	_	_
27	hlavu	hlava	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	24	obj	_	_
28	dětinnou	dětinný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	27	amod	_	SpaceAfter=No
29	!	!	PUNCT	Z:-------------	_	8	punct	_	_

~~~


