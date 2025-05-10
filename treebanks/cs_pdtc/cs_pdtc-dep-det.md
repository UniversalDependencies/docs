---
layout: base
title:  'Statistics of det in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: <tt><a href="cs_pdtc-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="cs_pdtc-dep-det-nummod.html">det:nummod</a></tt>.

14923 nodes (2%) are attached to their parents as `det`.

14762 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32292434497085.

The following 11 pairs of parts of speech are connected with `det`: <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (14589; 98% instances), <tt><a href="cs_pdtc-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (92; 1% instances), <tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (81; 1% instances), <tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (65; 0% instances), <tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (46; 0% instances), <tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (21; 0% instances), <tt><a href="cs_pdtc-pos-X.html">X</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (14; 0% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (10; 0% instances), <tt><a href="cs_pdtc-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="cs_pdtc-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Jsou	být	AUX	VB-P---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	Functor=3:PRED
2	vám	vy	PRON	PP-P3--2-------	Case=Dat|Number=Plur|Person=2|PronType=Prs	3	obl	3:obl:dat	Entity=(cmpr9410009e1--1-gstype:gen)|Functor=3:BEN
3	nejasná	jasný	ADJ	AANP1----1N----	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Neg	0	root	0:root	Functor=0:PAT
4	některá	některý	DET	PZNP1----------	Case=Nom|Gender=Neut|Number=Plur|PronType=Ind	5	det	5:det	Functor=5:RSTR
5	ustanovení	ustanovení	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|VerbForm=Vnoun	3	nsubj	3:nsubj	LDeriv=ustanovit|Functor=3:ACT.cop
6	daňových	daňový	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	7:amod	Functor=7:RSTR
7	zákonů	zákon	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	5	nmod	5:nmod:gen	SpaceAfter=No|Functor=5:APP
8	?	?	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	To	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	2	det	2:det	Functor=2:PAT
2	všechno	všechen	DET	PLNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	5	obj	5:obj	Functor=5:RSTR
3	musí	muset	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	někdo	někdo	PRON	PK--1----------	Animacy=Anim|Case=Nom|PronType=Ind	3	nsubj	3:nsubj|5:nsubj:xsubj	Functor=3:ACT
5	zaplatit	zaplatit	VERB	Vf--------A-P--	Aspect=Perf|Polarity=Pos|VerbForm=Inf	3	xcomp	3:xcomp	SpaceAfter=No|Functor=3:PRED
6	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 det	color:blue
1	Jedním	jeden	NUM	CnZS7----------	Case=Ins|Gender=Masc,Neut|Number=Sing|NumForm=Word|NumType=Card	0	root	0:root	Bridge=ln95049025e25<ln95049025e27:subset|Entity=(ln95049025e27--1|Functor=0:PAT|LNumValue=1
2	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	3	case	3:case	Entity=(ln95049025e25--2-gstype:spec|LId=z-1
3	oslovených	oslovený	ADJ	AAMP2----1A----	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	1	amod	1:amod	Entity=ln95049025e25)ln95049025e27)|Functor=1:DIR1|LDeriv=oslovit
4	byl	být	AUX	VpYS----R-AAI--	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	cop	1:cop	Functor=1:PRED
5	i	i	PART	TT-------------	_	6	advmod:emph	6:advmod:emph	LId=i-2|Functor=6:RHEM
6	on	on	PRON	PEYS1--3-------	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	nsubj	1:nsubj	Entity=(ln95049025e9--1-gstype:spec|Functor=1:ACT.cop|LId=on-1
7	sám	samý	DET	PLYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Emp|Variant=Short	6	det	6:det	Entity=ln95049025e9)|Functor=6:RSTR|LGloss=(samotný)|SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


