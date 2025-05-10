---
layout: base
title:  'Statistics of flat in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `flat`

This relation is universal.

11784 nodes (2%) are attached to their parents as `flat`.

11784 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.82476238968092.

The following 11 pairs of parts of speech are connected with `flat`: <tt><a href="cs_pdtc-pos-X.html">X</a></tt>-<tt><a href="cs_pdtc-pos-X.html">X</a></tt> (5077; 43% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt> (3684; 31% instances), <tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt> (2881; 24% instances), <tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (75; 1% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (40; 0% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt> (12; 0% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-X.html">X</a></tt> (4; 0% instances), <tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="cs_pdtc-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdtc-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	Zajímavou	zajímavý	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	2:amod	Entity=(cmpr9415025e222--2-gstype:spec|Functor=2:RSTR
2	službu	služba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	5	obj	5:obj	Functor=5:PAT
3	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	4:case	Entity=(cmpr9415025e221--2|LId=pro-1
4	podnikatele	podnikatel	NOUN	NNMP4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	2	nmod	2:nmod:pro:acc	Entity=cmpr9415025e221)cmpr9415025e222)|Functor=2:BEN
5	nabízí	nabízet	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
6	firma	firma	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	5:nsubj	Bridge=cmpr9415025e8<cmpr9415025e217:subset|Entity=(cmpr9415025e217--1|Functor=5:ACT
7	Incentive	Incentive	X	F%-------------	Foreign=Yes	6	nmod	6:nmod	LId=Incentive-77|Functor=6:FPHR
8	Travel	Travel	X	F%-------------	Foreign=Yes	7	flat	7:flat	Entity=cmpr9415025e217)|Functor=7:FPHR|LId=Travel-77|SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	N	N	NOUN	Q3-------------	Abbr=Yes	3	nmod	3:nmod	Entity=(lnd94103043e10--3-gstype:spec|Functor=3:RSTR|LId=N-33|SpaceAfter=No
2	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_
3	Petersen	Petersen	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	4	nsubj	4:nsubj	Entity=lnd94103043e10)|Functor=4:ACT
4	jednal	jednat	VERB	VpYS----R-AAI--	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
5	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	6	case	6:case	Bridge=lnd94103043e2<lnd94103043e30:funct|Entity=(lnd94103043e30--2|LId=v-1
6	Sněmovně	sněmovna	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	4	obl	4:obl:v:loc	Entity=lnd94103043e30)|Functor=4:LOC
7	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	8	case	8:case	LId=s-1
8	předsedou	předseda	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	4	obl:arg	4:obl:arg:s:ins	Bridge=lnd94103043e30<lnd94103043e31:funct|Entity=(lnd94103043e31--1)|Functor=4:RSTR
9	Milanem	Milan	PROPN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|NameType=Giv|Number=Sing	8	flat	8:flat	Functor=8:RSTR
10	Uhdem	Uhde	PROPN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|NameType=Giv|Number=Sing	8	flat	8:flat	SpaceAfter=No|Functor=8:ADDR
11	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Jiří	Jiří	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	0	root	0:root	Entity=(cmpr9410009e26--1-gstype:spec|Functor=0:RSTR
2	Gebarowský	Gebarowský	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	1	flat	1:flat	Entity=cmpr9410009e26)|Functor=1:DENOM

~~~


