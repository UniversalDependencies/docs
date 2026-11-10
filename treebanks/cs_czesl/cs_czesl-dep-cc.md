---
layout: base
title:  'Statistics of cc in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `cc`

This relation is universal.

3 nodes (0%) are attached to their parents as `cc`.

3 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `cc`: <tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_czesl-pos-CCONJ.html">CCONJ</a></tt> (1; 33% instances), <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-CCONJ.html">CCONJ</a></tt> (1; 33% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-CCONJ.html">CCONJ</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	Dokonce	dokonce	ADV	Db-------------	Degree=Pos|Polarity=Pos	6	advmod	_	_
2	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
3	i	i	CCONJ	J^-------------	_	4	cc	_	_
4	vždycky	vždycky	ADV	Db-------------	Degree=Pos|Polarity=Pos|PronType=Tot	6	advmod	_	_
5	ráda	rád	ADJ	ACQW------A----	Case=Nom|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short	6	xcomp	_	_
6	cestovala	cestovat	VERB	VpQW---XR-AA---	Aspect=Imp|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
1	Budu	být	AUX	VB-S---1F-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	2	aux	_	_
2	mit	mít	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	0	root	_	_
3	rodinu	rodina	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	_
4	mojou	můj	DET	PSFS7-S1-------	Case=Ins|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	5	det	_	_
5	rodinou	rodina	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing	2	conj	_	_
6	bude	být	AUX	VB-S---3F-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	5	cop	_	_
7	žena	žena	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
8	ta	a	CCONJ	PDFS1----------	_	9	cc	_	_
9	děti	dítě	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	Tak	tak	ADV	Db-------------	PronType=Dem	4	advmod	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pv	_	_
3	i	i	CCONJ	J^-------------	_	4	cc	_	_
4	stalo	stát	VERB	VpNS---XR-AA---	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


