---
layout: base
title:  'Statistics of det in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: <tt><a href="cs_pdtc-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="cs_pdtc-dep-det-nummod.html">det:nummod</a></tt>.

72968 nodes (2%) are attached to their parents as `det`.

72244 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32488214011622.

The following 13 pairs of parts of speech are connected with `det`: <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (71183; 98% instances), <tt><a href="cs_pdtc-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (481; 1% instances), <tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (448; 1% instances), <tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (370; 1% instances), <tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (242; 0% instances), <tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (126; 0% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (49; 0% instances), <tt><a href="cs_pdtc-pos-X.html">X</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (42; 0% instances), <tt><a href="cs_pdtc-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (10; 0% instances), <tt><a href="cs_pdtc-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (9; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="cs_pdtc-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="cs_pdtc-pos-INTJ.html">INTJ</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (1; 0% instances).


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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 det	color:blue
1	Šel	jít	VERB	VpYS----R-AAI--	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
2	jsem	být	AUX	VB-S---1P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	1:aux	_
3	znovu	znovu	ADV	Db-------------	_	1	advmod	1:advmod	Functor=1:TWHEN
4	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	5:case	Entity=(pdtsc_lk16379_06.03e69--2-gstype:spec|LId=na-1
5	marodku	marodka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	1	obl	1:obl:na:acc	Entity=pdtsc_lk16379_06.03e69)|Functor=1:DIR3
6	a	a	CCONJ	J^-------------	_	7	cc	7:cc	LId=a-1|Functor=7:CONJ
7	přišel	přijít	VERB	VpYS----R-AAP--	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	conj	0:root|1:conj	Functor=1:PRED
8	jsem	být	AUX	VB-S---1P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	7:aux	_
9	zase	zase	ADV	Db-------------	_	7	advmod	7:advmod	LId=zase-1|Functor=7:TWHEN
10	za	za	ADP	RR--7----------	AdpType=Prep|Case=Ins	12	case	12:case	Entity=(pdtsc_lk16379_06.03e74--3-gstype:spec
11	tím	ten	DET	PDZS7----------	Case=Ins|Gender=Masc,Neut|Number=Sing|PronType=Dem	12	det	12:det	Functor=12:RSTR
12	Maďarem	Maďar	PROPN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|NameType=Nat|Number=Sing	7	obl	7:obl:za:ins	Entity=pdtsc_lk16379_06.03e74)|Functor=7:DIR3
13	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


