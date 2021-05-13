---
layout: base
title:  'Statistics of det in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: <tt><a href="cs_pdt-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="cs_pdt-dep-det-nummod.html">det:nummod</a></tt>.

29206 nodes (2%) are attached to their parents as `det`.

28523 instances of `det` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36098746832843.

The following 13 pairs of parts of speech are connected with `det`: <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (28634; 98% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (132; 0% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (130; 0% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (100; 0% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (73; 0% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (67; 0% instances), <tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (42; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (10; 0% instances), <tt><a href="cs_pdt-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (9; 0% instances), <tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="cs_pdt-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="cs_pdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_pdt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Může	moci	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	LGloss=(mít_možnost_[něco_dělat])
2	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	LId=po-1
3	mně	já	PRON	PP-S6--1-------	Case=Loc|Number=Sing|Person=1|PronType=Prs	7	obl:arg	7:obl:arg:po:loc	_
4	takové	takový	DET	PDIP4----------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	5	det	5:det	_
5	údaje	údaj	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	7	obj	7:obj	_
6	pojišťovna	pojišťovna	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	1	nsubj	1:nsubj|7:nsubj	_
7	vyžadovat	vyžadovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	1	xcomp	1:xcomp	SpaceAfter=No
8	?	?	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 det	color:blue
1	To	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	5	obj	5:obj	_
2	všechno	všechen	DET	PLNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	1	det	1:det	_
3	musí	muset	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	někdo	někdo	PRON	PZM-1----------	Animacy=Anim|Case=Nom|Gender=Masc|PronType=Ind	3	nsubj	3:nsubj|5:nsubj	_
5	zaplatit	zaplatit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	3	xcomp	3:xcomp	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	Nevidím	vidět	VERB	VB-S---1P-NA---	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	žádná	žádný	DET	PWNP4----------	Case=Acc|Gender=Neut|Number=Plur|PronType=Neg	3	det	3:det	_
3	dramata	drama	NOUN	NNNP4-----A----	Case=Acc|Gender=Neut|Number=Plur|Polarity=Pos	1	obj	1:obj	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	7	punct	7:punct	_
5	ani	ani	CCONJ	J^-------------	_	7	cc	7:cc	_
6	moji	můj	DET	PSMP1-S1-------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	7	det	7:det	LGloss=(přivlast.)
7	nejbližší	blízký	ADJ	AAMP1----3A----	Animacy=Anim|Case=Nom|Degree=Sup|Gender=Masc|Number=Plur|Polarity=Pos	1	conj	0:root|1:conj	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


