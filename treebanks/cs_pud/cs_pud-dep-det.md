---
layout: base
title:  'Statistics of det in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: <tt><a href="cs_pud-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="cs_pud-dep-det-nummod.html">det:nummod</a></tt>.

422 nodes (2%) are attached to their parents as `det`.

420 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33649289099526.

The following 7 pairs of parts of speech are connected with `det`: <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (408; 97% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (5; 1% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det	color:blue
1	Lze	lze	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	tu	tu	ADV	Db-------------	PronType=Dem	1	advmod	1:advmod	_
3	najít	najít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	csubj	1:csubj	_
4	paralely	paralela	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	3	obj	3:obj	_
5	mezi	mezi	ADP	RR--7----------	AdpType=Prep|Case=Ins	6	case	6:case	LId=mezi-1
6	hrami	hra	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur	4	nmod	4:nmod:mezi:ins	LGloss=(dětská;_v_divadle;...)
7	a	a	CCONJ	J^-------------	_	10	cc	10:cc	LId=a-1
8	naším	můj	DET	PSZS7-P1-------	Case=Ins|Gender=Masc,Neut|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	10	det	10:det	LGloss=(přivlast.)
9	každodenním	každodenní	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	amod	10:amod	_
10	životem	život	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	6	conj	4:nmod:mezi:ins|6:conj	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	Protože	protože	SCONJ	J,-------------	_	7	mark	7:mark	_
2	série	série	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	7:nsubj	_
3	1	1	NUM	C=-------------	NumForm=Digit|NumType=Card	2	nummod	2:nummod	_
4	už	už	ADV	Db-------------	_	7	advmod	7:advmod	LId=už-1
5	není	být	AUX	VB-S---3P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
6	ta	ten	DET	PDFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	7	det	7:det	_
7	stará	starý	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	9	advcl	9:advcl:protože	SpaceAfter=No|LId=starý-2|LGloss=(člověk,_věc)
8	,	,	PUNCT	Z:-------------	_	7	punct	7:punct	_
9	mohou	moci	VERB	VB-P---3P-AA--1	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	LGloss=(mít_možnost_[něco_dělat])
10	mnozí	mnohý	ADJ	AAMP1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	11	amod	11:amod	_
11	uživatelé	uživatel	NOUN	NNMP1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	9	nsubj	9:nsubj|12:nsubj	_
12	ušetřit	ušetřit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	9	xcomp	9:xcomp	_
13	100	100	NUM	C=-------------	NumForm=Digit|NumType=Card	14	nummod:gov	14:nummod:gov	_
14	eur	euro	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	12	obj	12:obj	SpaceAfter=No|LId=euro-2|LGloss=(evr._měna)
15	.	.	PUNCT	Z:-------------	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det	color:blue
1	Cuaron	Cuaron	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	17	nsubj	5:nmod|17:nsubj	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
3	jehož	jenž	PRON	PJZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PrepCase=Npr|PronType=Rel	5	det	1:ref	LGloss=(který_[ve_vedl.větě])
4	nejnovějším	nový	ADJ	AAIS7----3A----	Animacy=Inan|Case=Ins|Degree=Sup|Gender=Masc|Number=Sing|Polarity=Pos	5	amod	5:amod	_
5	filmem	film	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	1	acl:relcl	1:acl:relcl	_
6	je	být	AUX	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
7	oskarová	oskarový	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	amod	8:amod	_
8	Gravitace	gravitace	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	5:nsubj	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
10	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	12	case	12:case	LId=podle-2
11	dostupných	dostupný	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	12	amod	12:amod	_
12	zpráv	zpráva	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur	17	obl	17:obl:podle:gen	_
13	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	14	case	14:case	LId=v-1
14	době	doba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	17	obl	17:obl:v:loc	_
15	incidentu	incident	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	14	nmod	14:nmod:gen	_
16	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	17	case	17:case	LId=u-1
17	natáčení	natáčení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|VerbForm=Vnoun	0	root	0:root	LDeriv=natáčet
18	nebyl	být	AUX	VpYS---XR-NA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	17	cop	17:cop	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	17	punct	17:punct	_

~~~


