---
layout: base
title:  'Statistics of det:numgov in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="cs_pdtc-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs_pdtc-dep-det-nummod.html">det:nummod</a></tt>.

2936 nodes (0%) are attached to their parents as `det:numgov`.

2846 instances of `det:numgov` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5800408719346.

The following 3 pairs of parts of speech are connected with `det:numgov`: <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (2836; 97% instances), <tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (81; 3% instances), <tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (19; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det:numgov	color:blue
1	I	i	CCONJ	TT-------------	_	2	advmod:emph	2:advmod:emph	Bridge=cmpr9415025e8<cmpr9415025e94:subset|Entity=(cmpr9415025e94--3|Functor=2:RHEM|LId=i-2
2	velké	velký	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	3:amod	Functor=3:RSTR
3	firmy	firma	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	5	nsubj	5:nsubj	Entity=cmpr9415025e94)|Functor=5:ACT
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pv	5:expl:pv	LGloss=(zvr._zájmeno/částice)
5	specializují	specializovat	VERB	VB-P---3P-AAB--	Aspect=Imp,Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
6	jen	jen	PART	TT-------------	_	8	advmod:emph	8:advmod:emph	Entity=(cmpr9415025e64--5-gstype:gen|Functor=8:RHEM|LId=jen-1
7	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	10:case	LId=na-1
8	několik	několik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Ind	10	det:numgov	10:det:numgov	Functor=10:RSTR
9	málo	málo	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Ind	10	det:numgov	10:det:numgov	LId=málo-1|LGloss=(málo_peněz)|Functor=10:RSTR
10	teritorií	teritorium	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	5	obl:arg	5:obl:arg:na:acc	Entity=cmpr9415025e64)|Functor=5:PAT|SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det:numgov	color:blue
1	Kolik	kolik	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Dem,Ind	2	det:numgov	2:det:numgov	Functor=2:PAT
2	vás	vy	PRON	PP-P2--2-------	Case=Gen|Number=Plur|Person=2|PronType=Prs	5	nsubj	5:nsubj	Entity=(pdtsc_ak_046.02e45--1-gstype:spec)|Functor=5:ACT.cop
3	bylo	být	AUX	VpNS----R-AAI--	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	cop	5:cop	Functor=5:PRED
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	5:case	Entity=(pdtsc_ak_046.02e88--2-gstype:spec|LId=v-1
5	oddíle	oddíl	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	0	root	0:root	Entity=pdtsc_ak_046.02e88)|Functor=0:LOC
6	?	?	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:numgov	color:blue
1	Pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	case	3:case	LId=pro-1
2	mnoho	mnoho	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Ind	3	det:numgov	3:det:numgov	LId=mnoho-1|Functor=3:RSTR
3	Japonců	Japonec	PROPN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Nat|Number=Plur	6	obl	6:obl:pro:acc	Functor=6:BEN
4	je	být	AUX	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	Functor=6:PRED
5	pačinko	pačinko	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing	6	nsubj	6:nsubj	Entity=(wsj1387001e55--1-gstype:spec)|Functor=6:ACT.cop|LGloss=(hazardní_hra)
6	neškodné	škodný	ADJ	AANS1----1N----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Neg	0	root	0:root	LGloss=(poškozený_n._působící_škodu)|Functor=0:PAT
7	nebo	nebo	CCONJ	J^-------------	_	9	cc	9:cc	Functor=9:CONJ
8	lákavě	lákavě	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	9	advmod	9:advmod	LDeriv=lákavý|Functor=9:MANN
9	neslušné	slušný	ADJ	AANS1----1N----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Neg	6	conj	0:root|6:conj	SpaceAfter=No|Functor=6:PAT
10	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


