---
layout: base
title:  'Statistics of aux in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="cs_pdtc-dep-aux-pass.html">aux:pass</a></tt>.

10100 nodes (1%) are attached to their parents as `aux`.

8270 instances of `aux` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.14485148514851.

The following 13 pairs of parts of speech are connected with `aux`: <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (8880; 88% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (528; 5% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (333; 3% instances), <tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (194; 2% instances), <tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (49; 0% instances), <tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (40; 0% instances), <tt><a href="cs_pdtc-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (24; 0% instances), <tt><a href="cs_pdtc-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (23; 0% instances), <tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (16; 0% instances), <tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (9; 0% instances), <tt><a href="cs_pdtc-pos-X.html">X</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="cs_pdtc-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	*	*	PUNCT	Z:-------------	_	8	punct	8:punct	_
2	Ale	ale	CCONJ	J^-------------	_	8	cc	8:cc	Entity=(cmpr9410019e159--7|Functor=8:PREC
3	vyučení	vyučení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|VerbForm=Vnoun	8	nsubj	8:nsubj|10:nsubj:xsubj	SpaceAfter=No|LDeriv=vyučit|Functor=8:ACT
4	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
5	či	či	CCONJ	J^-------------	_	6	cc	6:cc	LId=či-1|Functor=6:CONJ
6	přeškolení	přeškolení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|VerbForm=Vnoun	3	conj	3:conj|8:nsubj|10:nsubj:xsubj	LDeriv=přeškolit|Functor=3:ACT
7	by	být	AUX	Vc----------I--	Aspect=Imp|Mood=Cnd|VerbForm=Fin	8	aux	8:aux	_
8	mělo	mít	VERB	VpNS----R-AAI--	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
9	být	být	AUX	Vf--------A-I--	Aspect=Imp|Polarity=Pos|VerbForm=Inf	10	cop	10:cop	Functor=10:PRED
10	zárukou	záruka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing	8	xcomp	8:xcomp	Functor=8:PAT
11	kvalifikace	kvalifikace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	10	nmod	10:nmod:gen	Entity=(cmpr9410019e156--1)cmpr9410019e159)|Functor=10:PAT|SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux	color:blue
1	Vyloučeny	vyloučený	ADJ	VsTP----X-APP--	Animacy=Inan|Aspect=Perf|Degree=Pos|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=vyloučit|Functor=0:PRED
2	by	být	AUX	Vc----------I--	Aspect=Imp|Mood=Cnd|VerbForm=Fin	1	aux	1:aux	_
3	však	však	CCONJ	J^-------------	_	1	cc	1:cc	LId=však-1|Functor=1:PREC
4	byly	být	AUX	VpTP----R-AAI--	Animacy=Inan|Aspect=Imp|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	aux:pass	1:aux:pass	_
5	motorové	motorový	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	8	amod	8:amod	Functor=8:RSTR
6	kapalné	kapalný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	8	amod	8:amod	Functor=8:RSTR
7	pohonné	pohonný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	8	amod	8:amod	Functor=8:RSTR
8	hmoty	hmota	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	1	nsubj:pass	1:nsubj:pass	SpaceAfter=No|Functor=1:PAT
9	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux	color:blue
1	Byl	být	AUX	VpYS----R-AAI--	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	cop	6:cop	Functor=6:PRED
2	by	být	AUX	Vc----------I--	Aspect=Imp|Mood=Cnd|VerbForm=Fin	6	aux	6:aux	_
3	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	6:nsubj	Entity=(cmpr9410049e521--1-gstype:gen)|Functor=6:ACT.cop
4	patrně	patrně	PART	TT-------------	_	6	advmod:emph	6:advmod:emph	LId=patrně-1|Functor=6:MOD
5	cenový	cenový	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	6:amod	Functor=6:RSTR
6	výbuch	výbuch	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No|Functor=0:PAT
7	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


