---
layout: base
title:  'Statistics of det in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: <tt><a href="cs_fictree-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="cs_fictree-dep-det-nummod.html">det:nummod</a></tt>.

4232 nodes (3%) are attached to their parents as `det`.

4150 instances of `det` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31592627599244.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (4095; 97% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (42; 1% instances), <tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (29; 1% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (20; 0% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (19; 0% instances), <tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (13; 0% instances), <tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (8; 0% instances), <tt><a href="cs_fictree-pos-PART.html">PART</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="cs_fictree-pos-X.html">X</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Tím	ten	DET	PDIS7----------	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	smíchem	smích	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	4	obl	_	_
3	ale	ale	CCONJ	J^-------------	_	4	cc	_	_
4	dodávala	dodávat	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	každému	každý	DET	PLIS3----1A----	Animacy=Inan|Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|PronType=Tot	6	det	_	_
6	jevu	jev	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	4	iobj	_	_
7	nějaký	nějaký	DET	PZIS4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Ind	9	det	_	_
8	snesitelnější	snesitelný	ADJ	AAIS4----2A----	Animacy=Inan|Case=Acc|Degree=Cmp|Gender=Masc|Number=Sing|Polarity=Pos	9	amod	_	_
9	smysl	smysl	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 det	color:blue
1	Nad	nad	ADP	RR--7----------	AdpType=Prep|Case=Ins	2	case	_	_
2	tím	ten	DET	PDNS7----------	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	5	obl	_	_
3	vším	všechen	DET	PLNS7----------	Case=Ins|Gender=Neut|Number=Sing|PronType=Tot	2	det	_	_
4	byl	být	AUX	VpIS----R-AA---	Animacy=Inan|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	aux:pass	_	_
5	vyveden	vyvedený	ADJ	VsIS------AP---	Animacy=Inan|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
6	nápis	nápis	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj:pass	_	_
7	Bitva	bitva	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	6	nmod	_	_
8	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	_
9	Krásné	Krásná	PROPN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	7	nmod	_	_
10	a	a	CCONJ	J^-------------	_	11	cc	_	_
11	letopočet	letopočet	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	conj	_	_
12	1427	1427	NUM	C=-------------	NumForm=Digit|NumType=Card	11	nummod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	Snad	snad	PART	TT-------------	_	5	advmod	_	_
2	byste	být	AUX	Vc-P---2-------	Mood=Cnd|Number=Plur|Person=2|VerbForm=Fin	5	aux	_	_
3	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	8	iobj	_	_
4	tady	tady	ADV	Db-------------	PronType=Dem	5	advmod	_	_
5	nechtěla	chtít	VERB	VpFS----R-NA---	Gender=Fem|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	tu	ten	DET	PDFS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	Vídeň	Vídeň	PROPN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	8	obj	_	_
8	předvádět	předvádět	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	5	xcomp	_	SpaceAfter=No
9	!	!	PUNCT	Z:-------------	_	5	punct	_	SpaceAfter=No
10	"	"	PUNCT	Z:-------------	_	5	punct	_	_

~~~


