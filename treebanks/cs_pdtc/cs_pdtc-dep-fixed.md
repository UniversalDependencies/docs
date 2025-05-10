---
layout: base
title:  'Statistics of fixed in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `fixed`

This relation is universal.

2243 nodes (0%) are attached to their parents as `fixed`.

2243 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.1622826571556.

The following 20 pairs of parts of speech are connected with `fixed`: <tt><a href="cs_pdtc-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (1136; 51% instances), <tt><a href="cs_pdtc-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pdtc-pos-ADP.html">ADP</a></tt> (447; 20% instances), <tt><a href="cs_pdtc-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_pdtc-pos-SCONJ.html">SCONJ</a></tt> (206; 9% instances), <tt><a href="cs_pdtc-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_pdtc-pos-PART.html">PART</a></tt> (149; 7% instances), <tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdtc-pos-ADP.html">ADP</a></tt> (141; 6% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-ADP.html">ADP</a></tt> (37; 2% instances), <tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdtc-pos-SCONJ.html">SCONJ</a></tt> (31; 1% instances), <tt><a href="cs_pdtc-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdtc-pos-PART.html">PART</a></tt> (31; 1% instances), <tt><a href="cs_pdtc-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (20; 1% instances), <tt><a href="cs_pdtc-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt> (12; 1% instances), <tt><a href="cs_pdtc-pos-X.html">X</a></tt>-<tt><a href="cs_pdtc-pos-X.html">X</a></tt> (12; 1% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="cs_pdtc-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="cs_pdtc-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pdtc-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdtc-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	Počet	počet	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	Entity=(cmpr9410049e128--1|Functor=5:ACT
2	pracovníků	pracovník	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	1	nmod	1:nmod:gen	Functor=1:MAT
3	podniku	podnik	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	2:nmod:gen	Entity=(cmpr9410049e59--1-gstype:gen)cmpr9410049e128)|Functor=2:APP
4	zároveň	zároveň	ADV	Db-------------	_	5	advmod	5:advmod	Functor=5:TWHEN
5	klesl	klesnout	VERB	VpYS----R-AAP-1	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc|ExtPos=ADP	9	case	9:case	LId=v-1
7	průběhu	průběh	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	fixed	6:fixed	_
8	6	6	NUM	C=-------------	NumForm=Digit|NumType=Card	9	nummod	9:nummod	Functor=9:RSTR
9	let	léta	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	5	obl	5:obl:v_průběhu:gen	Functor=5:TPAR
10	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	11:case	Bridge=cmpr9410049e128<cmpr9410049e127:subset|Entity=(cmpr9410049e127--2|LId=o-1
11	šestinu	šestina	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	5	obl	5:obl:o:acc	Entity=cmpr9410049e127)|Functor=5:DIFF|LDeriv=šestin|LNumValue=6|SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 fixed	color:blue
1	To	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	2:nsubj	Entity=(ln9420255e188--1-gstype:spec)|Functor=2:ACT
2	znamená	znamenat	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Functor=0:PRED
3	,	,	PUNCT	Z:-------------	_	11	punct	11:punct	_
4	že	že	SCONJ	J,-------------	_	11	mark	11:mark	LId=že-1
5	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc|ExtPos=ADP	8	case	8:case	Entity=(ln9420255e190--4-gstype:gen|LId=v-1
6	vztahu	vztah	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	fixed	5:fixed	_
7	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	5	fixed	5:fixed	LId=k-1
8	občanům	občan	NOUN	NNMP3-----A----	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	11	obl	11:obl:ve_vztahu_k:dat	Entity=ln9420255e190)|Functor=11:REG
9	je	být	AUX	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	11:cop	Functor=11:PAT
10	veřejným	veřejný	ADJ	AAMS7----1A----	Animacy=Anim|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	11	amod	11:amod	Functor=11:RSTR
11	činitelem	činitel	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	2	ccomp	2:ccomp	SpaceAfter=No|LId=činitel-1|Functor=2:PAT
12	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 fixed	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	Entity=(cmpr9410049e27--2-gstype:gen|LId=v-1
2	bytě	byt	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	obl	3:obl:v:loc	Entity=cmpr9410049e27)|Functor=3:LOC|LGloss=(místo_k_bydlení)
3	máte	mít	VERB	VB-P---2P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
4	příjemných	příjemný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	6	amod	6:amod	Entity=(cmpr9410049e32--2|Functor=6:RSTR|LGloss=(všeob.,_poz._emoce)
5	24	24	NUM	C=-------------	NumForm=Digit|NumType=Card	3	obj	3:obj	Functor=3:RSTR
6	°	°	SYM	NNIP2-----A---8	Animacy=Inan|Gender=Masc|Number=Plur|Polarity=Pos	5	nmod	5:nmod	Functor=5:PAT|LGloss=(stupeň)
7	C	Celsius	PROPN	NNMXX-----A---b	Abbr=Yes|Animacy=Anim|Gender=Masc|NameType=Giv	6	nmod	6:nmod	Entity=cmpr9410049e32)|Functor=6:CRIT|SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	12	punct	12:punct	_
9	i	i	CCONJ	J^-------------	ExtPos=SCONJ	12	mark	12:mark	LId=i-1
10	když	když	SCONJ	J,-------------	_	9	fixed	9:fixed	_
11	venku	venku	ADV	Db-------------	_	12	advmod	12:advmod	Entity=(cmpr9410049e29--1)|Functor=12:LOC
12	mrzne	mrznout	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	3:advcl:i_když	SpaceAfter=No|Functor=3:CNCS
13	,	,	PUNCT	Z:-------------	_	15	punct	15:punct	_
14	až	až	SCONJ	J,-------------	_	15	mark	15:mark	LId=až-2|LGloss=(přijde,_až_to_dodělá)|Functor=15:RHEM
15	praští	praštět	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	12:advcl:až	SpaceAfter=No|Functor=12:EXT
16	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


