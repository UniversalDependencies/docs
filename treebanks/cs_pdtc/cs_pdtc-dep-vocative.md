---
layout: base
title:  'Statistics of vocative in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `vocative`

This relation is universal.

83 nodes (0%) are attached to their parents as `vocative`.

53 instances of `vocative` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.92771084337349.

The following 13 pairs of parts of speech are connected with `vocative`: <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (44; 53% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt> (21; 25% instances), <tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="cs_pdtc-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 vocative	color:blue
1	Ty	ty	PRON	PP-S1--2-------	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	6:nsubj	Entity=(cmpr9410049e5--1-gstype:gen)|Functor=6:ACT|SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	3	punct	3:punct	_
3	spotřebiteli	spotřebitel	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing	6	vocative	6:vocative	Entity=(cmpr9410049e5--1-gstype:gen)|Functor=6:VOCAT|SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	3	punct	3:punct	_
5	pěkně	pěkně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	6	advmod	6:advmod	LDeriv=pěkný|Functor=6:MANN
6	plať	platit	VERB	Vi-S---2--A-I--	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	0	root	0:root	SpaceAfter=No|Functor=0:PRED
7	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 vocative	color:blue
1	Gratuluji	gratulovat	VERB	VB-S---1P-AAI-1	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
2	,	,	PUNCT	Z:-------------	_	3	punct	3:punct	_
3	Basile	Basil	PROPN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|NameType=Giv|Number=Sing	1	vocative	1:vocative	Entity=(faust_2010_07_es_16e9--1-gstype:spec)|Functor=1:VOCAT
4	,	,	PUNCT	Z:-------------	_	3	punct	3:punct	Functor=3:CONJ
5	slyším	slyšet	VERB	VB-S---1P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	0:root|1:conj	Functor=1:PRED
6	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
7	že	že	SCONJ	J,-------------	_	8	mark	8:mark	Entity=(faust_2010_07_es_16e7--3-gstype:spec|LId=že-1
8	máš	mít	VERB	VB-S---2P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	ccomp	5:ccomp	Functor=5:PAT
9	novou	nový	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	10	amod	10:amod	Functor=10:RSTR
10	výstavu	výstava	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	8	obj	8:obj	Entity=faust_2010_07_es_16e7)|Functor=8:PAT

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 vocative	color:blue
1	Kde	kde	ADV	Db-------------	PronType=Int,Rel	0	root	0:root	Functor=0:LOC
2	právě	právě	ADV	Db-------------	_	1	advmod	1:advmod	LId=právě-1|Functor=1:TWHEN
3	jsi	být	AUX	VB-S---2P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	1:cop	Functor=1:PRED
4	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
5	příteli	přítel	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing	1	vocative	1:vocative	Entity=(faust_2010_07_es_17e1--1-gstype:spec)|Functor=1:VOCAT
6	?	?	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


