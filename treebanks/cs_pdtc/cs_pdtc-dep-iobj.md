---
layout: base
title:  'Statistics of iobj in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `iobj`

This relation is universal.

447 nodes (0%) are attached to their parents as `iobj`.

371 instances of `iobj` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.9821029082774.

The following 12 pairs of parts of speech are connected with `iobj`: <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (153; 34% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (123; 28% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt> (59; 13% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt> (55; 12% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (35; 8% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (10; 2% instances), <tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (1; 0% instances).


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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	Vždyť	vždyť	CCONJ	J^-------------	_	2	cc	2:cc	LId=vždyť-1|Functor=2:PREC
2	je	být	AUX	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
3	třeba	třeba	ADV	Db-------------	_	2	obj	2:obj	LId=třeba-1|Functor=2:CPHR
4	dát	dát	VERB	Vf--------A-P--	Aspect=Perf|Polarity=Pos|VerbForm=Inf	2	csubj	2:csubj	LId=dát-1|Functor=2:ACT
5	dohromady	dohromady	ADV	Db-------------	_	4	iobj	4:iobj	Functor=4:DPHR
6	talent	talent	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	4:obj	Entity=(ln9420976e70--1|Functor=4:PAT|LId=talent-1|SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
8	odvahu	odvaha	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	6	conj	4:obj|6:conj	Functor=6:PAT
9	a	a	CCONJ	J^-------------	_	10	cc	10:cc	Functor=10:CONJ|LId=a-1
10	štěstí	štěstí	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	6	conj	4:obj|6:conj	Entity=ln9420976e70)|Functor=6:PAT|SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


