---
layout: base
title:  'Statistics of cop in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `cop`

This relation is universal.

4781 nodes (1%) are attached to their parents as `cop`.

4014 instances of `cop` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.35661995398452.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (2565; 54% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (1788; 37% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (142; 3% instances), <tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (128; 3% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (93; 2% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (42; 1% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (11; 0% instances), <tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="cs_pdt-pos-X.html">X</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="cs_pdt-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cop	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cop	color:blue
1	*	*	PUNCT	Z:-------------	_	8	punct	8:punct	_
2	Ale	ale	CCONJ	J^-------------	_	8	cc	8:cc	Entity=(cmpr9410019c69--7|Functor=8:PREC
3	vyučení	vyučení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	8	nsubj	8:nsubj|10:nsubj:xsubj	SpaceAfter=No|LDeriv=vyučit|Functor=8:ACT
4	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
5	či	či	CCONJ	J^-------------	_	6	cc	6:cc	LId=či-1|Functor=6:CONJ
6	přeškolení	přeškolení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	3	conj	3:conj|8:nsubj|10:nsubj:xsubj	LDeriv=přeškolit|Functor=3:ACT
7	by	být	AUX	Vc----------I--	Aspect=Imp|Mood=Cnd|VerbForm=Fin	8	aux	8:aux	_
8	mělo	mít	VERB	VpNS----R-AAI--	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
9	být	být	AUX	Vf--------A-I--	Aspect=Imp|Polarity=Pos|VerbForm=Inf	10	cop	10:cop	Functor=10:PRED
10	zárukou	záruka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	8	xcomp	8:xcomp	Functor=8:PAT
11	kvalifikace	kvalifikace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	10	nmod	10:nmod:gen	Entity=(cmpr9410019c67--1)cmpr9410019c69)|Functor=10:PAT|SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Jaká	jaký	DET	P4FS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Int,Rel	0	root	0:root	Entity=(cmpr9413037c4--1|Functor=0:PAT
2	je	být	AUX	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	1:cop	Functor=1:PRED
3	vzdělanost	vzdělanost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	1	nsubj	1:nsubj	LDeriv=vzdělaný|Functor=1:ACT.cop
4	našeho	náš	DET	PSZS2-P1-------	Case=Gen|Gender=Masc,Neut|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	5	det	5:det	Entity=(cmpr9413037c2--1-gstype:spec)|Functor=5:APP
5	národa	národ	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	3	nmod	3:nmod:gen	Entity=cmpr9413037c4)|Functor=3:APP|SpaceAfter=No
6	?	?	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


