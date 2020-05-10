---
layout: base
title:  'Statistics of det in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: <tt><a href="cs_cac-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="cs_cac-dep-det-nummod.html">det:nummod</a></tt>.

11222 nodes (2%) are attached to their parents as `det`.

11080 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3566209231866.

The following 10 pairs of parts of speech are connected with `det`: <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (11036; 98% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (57; 1% instances), <tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (34; 0% instances), <tt><a href="cs_cac-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (30; 0% instances), <tt><a href="cs_cac-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (18; 0% instances), <tt><a href="cs_cac-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (17; 0% instances), <tt><a href="cs_cac-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (15; 0% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (8; 0% instances), <tt><a href="cs_cac-pos-DET.html">DET</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (6; 0% instances), <tt><a href="cs_cac-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_cac-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Za	za	ADP	RR--7----------	AdpType=Prep|Case=Ins	3	case	3:case	LId=za-1
2	tím	ten	DET	PDZS7----------	Case=Ins|Gender=Masc,Neut|Number=Sing|PronType=Dem	3	det	3:det	_
3	účelem	účel	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	obl	5:obl:za:ins	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pv	5:expl:pv	LGloss=(zvr._zájmeno/částice)
5	zavazujeme	zavazovat	VERB	VB-P---1P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Kdepak	kdepak	ADV	Db-------------	_	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	4	punct	1.1:punct	_
3	žádná	žádný	DET	PWFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Neg	4	det	4:det	_
4	dršťková	dršťkový	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	1	conj	1.1:dep	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	4	punct	1.1:punct	_
6	žádné	žádný	DET	PWNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	7	det	7:det	_
7	pivčo	pivčo	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|Style=Coll	4	orphan	1.1:dep	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Moje	můj	DET	PSHS1-S1-------	Case=Nom|Gender=Fem,Neut|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	2	det	2:det	LGloss=(přivlast.)
2	Drahuška	Drahuška	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Giv|Number=Sing|Polarity=Pos|Style=Coll	7	nsubj	7:nsubj	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pv	7:expl:pv	LGloss=(zvr._zájmeno/částice)
4	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	5:case	LId=na-1
5	mne	já	PRON	PP-S4--1-------	Case=Acc|Number=Sing|Person=1|PronType=Prs	7	obl:arg	7:obl:arg:na:acc	LGloss=(2./4.pád)
6	významně	významně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	7	advmod	7:advmod	LDeriv=významný
7	podívala	podívat	VERB	VpQW---XR-AA---	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


