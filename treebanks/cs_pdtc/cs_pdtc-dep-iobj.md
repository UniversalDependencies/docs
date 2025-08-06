---
layout: base
title:  'Statistics of iobj in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `iobj`

This relation is universal.

2118 nodes (0%) are attached to their parents as `iobj`.

1678 instances of `iobj` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.02880075542965.

The following 15 pairs of parts of speech are connected with `iobj`: <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (647; 31% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (630; 30% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt> (267; 13% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt> (249; 12% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (214; 10% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (48; 2% instances), <tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (26; 1% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (13; 1% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-X.html">X</a></tt> (12; 1% instances), <tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="cs_pdtc-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-PART.html">PART</a></tt> (1; 0% instances).


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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Neapol	Neapol	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing	2	nsubj	2:nsubj	_
2	požádala	požádat	VERB	VpQW----R-AAP--	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
3	FIFA	FIFA	NOUN	BNXXX-----A----	Abbr=Yes	2	iobj	2:iobj	SpaceAfter=No|LId=FIFA-88
4	,	,	PUNCT	Z:-------------	_	7	punct	7:punct	_
5	aby	aby	SCONJ	J,-------------	_	7	mark	7:mark	_
6	by	být	AUX	Vc-------------	Aspect=Imp|Mood=Cnd|VerbForm=Fin	7	aux	7:aux	_
7	zasáhla	zasáhnout	VERB	VpQW----R-AAP-1	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	2	ccomp	2:ccomp	_
8	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	9:case	LId=do-1
9	sporu	spor	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	obl:arg	7:obl:arg:do:gen	LGloss=([soudní]_pře)
10	kolem	kolem	ADP	RR--2----------	AdpType=Prep|Case=Gen	11	case	11:case	LId=kolem-1
11	Maradony	Maradona	PROPN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Giv|Number=Sing	9	nmod	9:nmod:kolem:gen	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 iobj	color:blue
1	LN	LN	PROPN	BNXXX-----A----	Abbr=Yes|NameType=Oth	4	iobj	4:iobj	LId=LN-1|LGloss=(Lidové_noviny)|Functor=4:ADDR
2	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obj	4:obj	Entity=(ln9420340e15--1-gstype:spec)|Functor=4:EFF
3	včera	včera	ADV	Db-------------	_	4	advmod	4:advmod	Entity=(ln9420340e98--1-gstype:spec)|Functor=4:TWHEN
4	řekl	říci	VERB	VpYS----R-AAP--	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
5	místopředseda	místopředseda	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	Entity=(ln9420340e21--1-gstype:spec|Functor=4:RSTR
6	sněmovny	sněmovna	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	5	nmod	5:nmod:gen	Bridge=ln9420340e11<ln9420340e17:funct|Entity=(ln9420340e17--1)|Functor=5:APP
7	a	a	CCONJ	J^-------------	_	8	cc	8:cc	LId=a-1|Functor=8:CONJ
8	KDU	KDU	PROPN	BNXXX-----A----	Abbr=Yes|NameType=Oth	6	conj	5:nmod:gen|6:conj	Bridge=ln9420340e1<ln9420340e18:subset|Entity=(ln9420340e18--1-gstype:spec|Functor=6:APP|LGloss=(Křesťansko-demokratická_unie)|SpaceAfter=No
9	-	-	PUNCT	Z:-------------	_	10	punct	10:punct	Functor=10:CONJ|SpaceAfter=No
10	ČSL	ČSL	PROPN	BNXXX-----A----	Abbr=Yes|NameType=Oth	8	conj	5:nmod:gen|8:conj	Entity=ln9420340e18)|Functor=8:APP|LGloss=(Česká_[pův._Čsl.]_strana_lidová)
11	Jan	Jan	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	5	flat	5:flat	Functor=5:RSTR
12	Kasal	Kasal	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	5	flat	5:flat	Entity=ln9420340e21)|Functor=5:ACT|SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


