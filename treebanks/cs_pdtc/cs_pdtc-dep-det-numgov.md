---
layout: base
title:  'Statistics of det:numgov in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="cs_pdtc-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs_pdtc-dep-det-nummod.html">det:nummod</a></tt>.

596 nodes (0%) are attached to their parents as `det:numgov`.

582 instances of `det:numgov` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58221476510067.

The following 3 pairs of parts of speech are connected with `det:numgov`: <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (574; 96% instances), <tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (17; 3% instances), <tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (5; 1% instances).


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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det:numgov	color:blue
1	Mnoho	mnoho	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Ind	2	det:numgov	2:det:numgov	LId=mnoho-1|Functor=2:RSTR
2	Asijců	Asijec	PROPN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Nat|Number=Plur	3	nsubj	3:nsubj	Functor=3:ACT
3	považuje	považovat	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
4	americkou	americký	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	5	amod	5:amod	Functor=5:RSTR
5	přítomnost	přítomnost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	3	obj	3:obj	LDeriv=přítomný|Functor=3:PAT
6	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	8	case	8:case	_
7	potřebnou	potřebný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	amod	8:amod	Functor=8:RSTR
8	protiváhu	protiváha	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	3	obl:arg	3:obl:arg:za:acc	Functor=3:EFF
9	japonského	japonský	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	amod	10:amod	Entity=(wsj0043001e7--2-gstype:spec|Functor=10:RSTR
10	vlivu	vliv	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	nmod	8:nmod:gen	Entity=wsj0043001e7)|Functor=8:RSTR|SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


