---
layout: base
title:  'Statistics of compound in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `compound`

This relation is universal.

47 nodes (0%) are attached to their parents as `compound`.

34 instances of `compound` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.42553191489362.

The following 4 pairs of parts of speech are connected with `compound`: <tt><a href="cs_cac-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cac-pos-NUM.html">NUM</a></tt> (42; 89% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (3; 6% instances), <tt><a href="cs_cac-pos-DET.html">DET</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Vždyť	vždyť	CCONJ	J^-------------	_	7	cc	7:cc	_
2	devět	devět	NUM	Cn-S1----------	Case=Nom|Number=Sing|NumForm=Word|NumType=Card	4	nummod:gov	4:nummod:gov	LNumValue=9
3	tisíc	tisíc	NUM	ClXS2----------	Case=Gen|Number=Sing|NumForm=Word|NumType=Card	2	compound	2:compound	LId=tisíc-1|LNumValue=1000
4	hektarů	hektar	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	7	nsubj	7:nsubj|9:nsubj	_
5	už	už	ADV	Db-------------	_	7	cc	7:cc	_
6	něco	něco	PRON	PZ--4----------	Animacy=Inan|Case=Acc|PronType=Ind	7	obj	7:obj|9:obj	_
7	znamená	znamenat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	a	a	CCONJ	J^-------------	_	9	cc	9:cc	LId=a-1
9	vyžaduje	vyžadovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	0:root|7:conj	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 compound	color:blue
1	Rozhodnout	rozhodnout	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	27	csubj	27:csubj	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
3	které	který	DET	P4NS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Int,Rel	9	nsubj	9:nsubj|10:nsubj:xsubj	_
4	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	8:case	LId=z-1
5	šestnácti	šestnáct	NUM	Cn-P2----------	Case=Gen|Number=Plur|NumForm=Word|NumType=Card	8	nummod	8:nummod	LNumValue=16
6	dětských	dětský	ADJ	AANP2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	8	amod	8:amod	_
7	tanečních	taneční	ADJ	AANP2----1A----	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	8	amod	8:amod	LId=taneční-1
8	těles	těleso	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	3	nmod	3:nmod:z:gen	_
9	má	mít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	1:ccomp	_
10	postoupit	postoupit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	9	xcomp	9:xcomp	_
11	dál	daleko	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	10	advmod	10:advmod	SpaceAfter=No|LId=daleko-1|LGloss=(dojít_dále_než_...)
12	,	,	PUNCT	Z:-------------	_	15	punct	15:punct	_
13	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	15	advmod	15:advmod	_
14	je	být	AUX	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	15	compound	15:compound	_
15	zastupovat	zastupovat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	10	appos	10:appos	_
16	náš	můj	DET	PSIS4-P1-------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	17	det	17:det	LGloss=(přivlast.)
17	kraj	kraj	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	15	obj	15:obj	_
18	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	20	case	20:case	LId=na-1
19	národní	národní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	20	amod	20:amod	_
20	přehlídce	přehlídka	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	15	obl	15:obl:na:loc	_
21	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	22	case	22:case	LId=v-1
22	červnu	červen	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	20	nmod	20:nmod:v:loc	_
23	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	24	case	24:case	LId=v-1
24	Bruntále	Bruntál	PROPN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|NameType=Geo|Number=Sing	20	nmod	20:nmod:v:loc	SpaceAfter=No
25	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
26	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	27	expl:pv	27:expl:pv	LGloss=(zvr._zájmeno/částice)
27	zdálo	zdát	VERB	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
28	skoro	skoro	ADV	Db-------------	_	29	advmod:emph	29:advmod:emph	_
29	nemožné	možný	ADJ	AANS1----1N----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Neg	27	advcl:pred	27:advcl:pred	SpaceAfter=No
30	.	.	PUNCT	Z:-------------	_	27	punct	27:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 compound	color:blue
1	Nesmí	smět	VERB	VB-S---3P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	1:expl:pass	LGloss=(zvr._zájmeno/částice)
3	používat	používat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	1	xcomp	1:xcomp	LDeriv=použít
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	5:case	LId=v-1
5	prostorách	prostora	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur	3	obl	3:obl:v:loc	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	7	punct	7:punct	_
7	kde	kde	ADV	Db-------------	PronType=Int,Rel	5	acl:relcl	5:acl:relcl|5:ref	_
8	je	být	AUX	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
9	možnost	možnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	5:nsubj|7:nsubj	LDeriv=možný
10	výbuchu	výbuch	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	nmod	9:nmod:gen	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	12	punct	12:punct	_
12	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	appos	7:appos	_
13	jest	být	AUX	VB-S---3P-AA--2	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	compound	12:compound	_
14	kde	kde	ADV	Db-------------	PronType=Int,Rel	12	advmod	12:advmod	_
15	jsou	být	AUX	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	12:cop	_
16	výpary	výpar	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	12	nsubj	12:nsubj	SpaceAfter=No
17	,	,	PUNCT	Z:-------------	_	18	punct	18:punct	_
18	pachy	pach	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	16	conj	12:nsubj|16:conj	SpaceAfter=No
19	,	,	PUNCT	Z:-------------	_	20	punct	20:punct	_
20	plyny	plyn	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	16	conj	12:nsubj|16:conj	SpaceAfter=No
21	,	,	PUNCT	Z:-------------	_	12	punct	12:punct	_
22	a	a	CCONJ	J^-------------	_	24	cc	24:cc	LId=a-1
23	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	24	case	24:case	LId=v-1
24	místnosti	místnost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	5	conj	3:obl:v:loc|5:conj|29:obl	SpaceAfter=No
25	,	,	PUNCT	Z:-------------	_	28	punct	28:punct	_
26	kde	kde	ADV	Db-------------	PronType=Int,Rel	29	advmod	24:ref	_
27	není	být	AUX	VB-S---3P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	28	cop	28:cop	_
28	možno	možný	ADJ	ACNS------A----	Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short	24	acl:relcl	24:acl:relcl	_
29	větrat	větrat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	28	csubj	28:csubj	SpaceAfter=No
30	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


