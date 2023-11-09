---
layout: base
title:  'Statistics of aux in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="cs_pdt-dep-aux-pass.html">aux:pass</a></tt>.

3463 nodes (1%) are attached to their parents as `aux`.

3049 instances of `aux` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5116950620849.

The following 12 pairs of parts of speech are connected with `aux`: <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (3111; 90% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (234; 7% instances), <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (82; 2% instances), <tt><a href="cs_pdt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (14; 0% instances), <tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="cs_pdt-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="cs_pdt-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="cs_pdt-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cs_pdt-pos-X.html">X</a></tt>-<tt><a href="cs_pdt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
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
# visual-style 1 2 aux	color:blue
1	Vyloučeny	vyloučený	ADJ	VsTP----X-APP--	Animacy=Inan|Aspect=Perf|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=vyloučit|Functor=0:PRED
2	by	být	AUX	Vc----------I--	Aspect=Imp|Mood=Cnd|VerbForm=Fin	1	aux	1:aux	_
3	však	však	CCONJ	J^-------------	_	1	cc	1:cc	LId=však-1|Functor=1:PREC
4	byly	být	AUX	VpTP----R-AAI--	Animacy=Inan|Aspect=Imp|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	cop	1:cop	_
5	motorové	motorový	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	8	amod	8:amod	Functor=8:RSTR
6	kapalné	kapalný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	8	amod	8:amod	Functor=8:RSTR
7	pohonné	pohonný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	8	amod	8:amod	Functor=8:RSTR
8	hmoty	hmota	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	1	nsubj	1:nsubj	SpaceAfter=No|Functor=1:PAT
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
3	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	6:nsubj	Entity=(cmpr9410049c161--1-gstype:gen)|Functor=6:ACT.cop
4	patrně	patrně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	6	advmod	6:advmod	LDeriv=patrný|Functor=6:MOD
5	cenový	cenový	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	6:amod	Functor=6:RSTR
6	výbuch	výbuch	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No|Functor=0:PAT
7	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


