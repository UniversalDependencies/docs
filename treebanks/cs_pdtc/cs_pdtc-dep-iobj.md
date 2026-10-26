---
layout: base
title:  'Statistics of iobj in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `iobj`

This relation is universal.

2260 nodes (0%) are attached to their parents as `iobj`.

1733 instances of `iobj` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.07477876106195.

The following 18 pairs of parts of speech are connected with `iobj`: <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (674; 30% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (647; 29% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (274; 12% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt> (270; 12% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt> (259; 11% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (68; 3% instances), <tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (26; 1% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-X.html">X</a></tt> (14; 1% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (13; 1% instances), <tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 iobj	color:blue
1	Vnoučata	vnouče	NOUN	NNNP4-----A----	Case=Acc|Gender=Neut|Number=Plur	2	iobj	2:iobj	Entity=(pdtsc_hs_116.02e36--1-gstype:spec)|Functor=2:PAT
2	mám	mít	VERB	VB-S---1P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
3	celkem	celkem	ADV	Db-------------	_	4	advmod	4:advmod	Entity=(pdtsc_hs_116.02e38--2-gstype:spec|Functor=4:EXT
4	čtyři	čtyři	NUM	Cl-P4----------	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	2	obj	2:obj	Entity=pdtsc_hs_116.02e38)|Functor=2:COMPL|LNumValue=4
5	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Samozřejmě	samozřejmě	PART	TT-------------	_	2	advmod:emph	2:advmod:emph	LId=samozřejmě-2|Functor=2:ATT
2	mám	mít	VERB	VB-S---1P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
3	rád	rád	ADJ	ACYS------A----	Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short	2	iobj	2:iobj	LId=rád-1|Functor=2:DPHR
4	spoustu	spousta	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	2	obj	2:obj	Functor=2:PAT
5	amerických	americký	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	6	amod	6:amod	Entity=(ln95048050e70--2-gstype:spec(ln95048050e73--1-gstype:spec)|Functor=6:RSTR
6	filmů	film	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	4	nmod	4:nmod:gen	Entity=ln95048050e70)|Functor=4:MAT|SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 iobj	color:blue
1	Jistý	jistý	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	2:amod	Entity=(ln95045028e8--2-gstype:spec|Functor=2:RSTR
2	člověk	člověk	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	Entity=ln95045028e8)|Functor=4:ACT
3	je	on	PRON	PEXP4--3-------	Case=Acc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	4	iobj	4:iobj	Entity=(ln95045028e5--1-gstype:spec)|Functor=4:ADDR|LId=on-1
4	obvinil	obvinit	VERB	VpYS----R-AAP--	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No|Functor=0:PRED
5	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
6	že	že	SCONJ	J,-------------	_	8	mark	8:mark	LId=že-1
7	mu	on	PRON	P5ZS3--3-------	Case=Dat|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Variant=Short	8	obl:arg	8:obl:arg:dat	Entity=(ln95045028e8--1-gstype:spec)|Functor=8:ADDR|LId=on-1
8	odcizili	odcizit	VERB	VpMP----R-AAP--	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	ccomp	4:ccomp	Functor=4:PAT
9	auto	auto	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	8	obj	8:obj	Entity=(ln95045028e26--1-gstype:spec)|Functor=8:PAT|SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


