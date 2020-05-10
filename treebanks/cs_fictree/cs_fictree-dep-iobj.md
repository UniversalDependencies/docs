---
layout: base
title:  'Statistics of iobj in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `iobj`

This relation is universal.

271 nodes (0%) are attached to their parents as `iobj`.

157 instances of `iobj` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75276752767528.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (139; 51% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (91; 34% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (26; 10% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt> (9; 3% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (6; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 iobj	color:blue
1	Nějací	nějaký	DET	PZMP1----------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	2	det	2:det	_
2	lidé	člověk	NOUN	NNMP1-----A---1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	7	nsubj	7:nsubj	_
3	doma	doma	ADV	Db-------------	_	2	advmod	2:advmod	_
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	5:case	_
5	Čáslavi	Čáslav	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	2	nmod	2:nmod:v:loc	_
6	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	iobj	7:iobj	_
7	nabídli	nabídnout	VERB	VpMP----R-AA--1	Animacy=Anim|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	13	punct	13:punct	_
9	že	že	SCONJ	J,-------------	_	13	mark	13:mark	_
10	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	13	expl:pv	13:expl:pv	_
11	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	12	case	12:case	_
12	mě	já	PRON	PH-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs|Variant=Short	13	obl:arg	13:obl:arg:o:acc	_
13	postarají	postarat	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	ccomp	7:ccomp	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 iobj	color:blue
1	Jako	jako	SCONJ	J,-------------	_	2	mark	2:mark	_
2	dítě	dítě	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	4	xcomp	4:xcomp	_
3	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	měla	mít	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
5	podobné	podobný	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	6	amod	6:amod	_
6	pocity	pocit	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	4	iobj	4:iobj	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 iobj	color:blue
1	"	"	PUNCT	Z:-------------	_	7	punct	7:punct	SpaceAfter=No
2	Tatínku	tatínek	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing|Polarity=Pos	7	vocative	7:vocative	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	7	punct	7:punct	_
4	já	já	PRON	PP-S1--1-------	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	7:nsubj|8:nsubj	_
5	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	8	iobj	8:iobj	_
6	už	už	ADV	Db-------------	_	7	advmod	7:advmod	_
7	nemůžu	moci	VERB	VB-S---1P-NA---	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	vydržet	vydržet	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	7	xcomp	7:xcomp	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	12	punct	12:punct	_
10	jak	jak	CCONJ	J^-------------	_	12	mark	12:mark	_
11	tě	ty	PRON	PH-S4--2-------	Case=Acc|Number=Sing|Person=2|PronType=Prs|Variant=Short	12	obj	12:obj	_
12	nenávidí	nenávidět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	8	ccomp	8:ccomp	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	SpaceAfter=No
16	"	"	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


