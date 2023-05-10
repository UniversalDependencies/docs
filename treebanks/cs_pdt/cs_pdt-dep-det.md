---
layout: base
title:  'Statistics of det in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: <tt><a href="cs_pdt-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="cs_pdt-dep-det-nummod.html">det:nummod</a></tt>.

7156 nodes (2%) are attached to their parents as `det`.

6553 instances of `det` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36696478479598.

The following 10 pairs of parts of speech are connected with `det`: <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (6631; 93% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (386; 5% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (52; 1% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (25; 0% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (18; 0% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (18; 0% instances), <tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (15; 0% instances), <tt><a href="cs_pdt-pos-X.html">X</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (7; 0% instances), <tt><a href="cs_pdt-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Jsou	být	AUX	VB-P---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	Functor=3:PRED
2	vám	vy	PRON	PP-P3--2-------	Case=Dat|Number=Plur|Person=2|PronType=Prs	3	obl:arg	3:obl:arg:dat	Entity=(cmpr9410009c1--1-gstype:gen)|Functor=3:BEN
3	nejasná	jasný	ADJ	AANP1----1N----	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Neg	0	root	0:root	Functor=0:PAT
4	některá	některý	DET	PZNP1----------	Case=Nom|Gender=Neut|Number=Plur|PronType=Ind	5	det	5:det	Functor=5:RSTR
5	ustanovení	ustanovení	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos|VerbForm=Vnoun	3	nsubj	3:nsubj	LDeriv=ustanovit|Functor=3:ACT.cop
6	daňových	daňový	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	7:amod	Functor=7:RSTR
7	zákonů	zákon	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	nmod	5:nmod:gen	SpaceAfter=No|Functor=5:APP
8	?	?	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 det	color:blue
1	Stát	stát	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	nsubj	3:nsubj	Bridge=ln94202135c10<ln94202135c6:funct|Entity=(ln94202135c6--1-gstype:spec)|Functor=3:ACT|LGloss=(státní_útvar)|LId=stát-1
2	letos	letos	ADV	Db-------------	_	3	advmod	3:advmod	Entity=(ln94202135c2--1-gstype:spec)|Functor=3:TWHEN
3	přispěje	přispět	VERB	VB-S---3P-AAP--	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
4	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	5:case	Entity=(ln94202135c12--2-gstype:spec|LId=na-1
5	péči	péče	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	3	obl:arg	3:obl:arg:na:acc	Functor=3:PAT
6	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	7:case	Entity=(ln94202135c4--2-gstype:gen|LId=o-1
7	luka	luka	NOUN	NNNP4-----A----	Case=Acc|Gender=Neut|Number=Plur|Polarity=Pos	5	nmod	5:nmod:o:acc	Entity=ln94202135c4)ln94202135c12)|Functor=5:PAT
8	400	400	NUM	C=-------------	NumForm=Digit|NumType=Card	3	obl	3:obl	Entity=(ln94202135c13--1-gstype:spec|Functor=3:RSTR
9	miliony	milion	DET	CzIP7----------	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|NumType=Ord|PronType=Int,Rel	8	det	8:det	Functor=8:MEANS|LGloss=(^DD**milión)|LNumValue=1000000
10	korun	koruna	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	9	nmod	9:nmod:gen	Entity=ln94202135c13)|Functor=9:MAT

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 det	color:blue
1	To	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	5	obj	5:obj	Functor=5:PAT
2	všechno	všechen	DET	PLNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	1	det	1:det	Functor=1:RSTR
3	musí	muset	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	někdo	někdo	PRON	PK--1----------	Animacy=Anim|Case=Nom|PronType=Ind	3	nsubj	3:nsubj|5:nsubj:xsubj	Functor=3:ACT
5	zaplatit	zaplatit	VERB	Vf--------A-P--	Aspect=Perf|Polarity=Pos|VerbForm=Inf	3	xcomp	3:xcomp	SpaceAfter=No|Functor=3:PRED
6	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


