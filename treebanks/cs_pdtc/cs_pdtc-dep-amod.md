---
layout: base
title:  'Statistics of amod in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `amod`

This relation is universal.

61437 nodes (9%) are attached to their parents as `amod`.

57820 instances of `amod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25810179533506.

The following 18 pairs of parts of speech are connected with `amod`: <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (59286; 96% instances), <tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (1197; 2% instances), <tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (220; 0% instances), <tt><a href="cs_pdtc-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (219; 0% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (171; 0% instances), <tt><a href="cs_pdtc-pos-X.html">X</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (103; 0% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt> (73; 0% instances), <tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (62; 0% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (46; 0% instances), <tt><a href="cs_pdtc-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (22; 0% instances), <tt><a href="cs_pdtc-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (18; 0% instances), <tt><a href="cs_pdtc-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (6; 0% instances), <tt><a href="cs_pdtc-pos-PART.html">PART</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	|	|	PUNCT	Z:-------------	_	3	punct	3:punct	_
2	Daňový	daňový	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	3:amod	Entity=(cmpr9410009e6--2-gstype:spec|Functor=3:RSTR
3	poradce	poradce	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	Entity=cmpr9410009e6)|Functor=0:DENOM
4	|	|	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	Restaurátorské	restaurátorský	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	2:amod	Functor=2:RSTR
2	licence	licence	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	3:nsubj	Functor=3:ACT
3	umožňují	umožňovat	VERB	VB-P---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
4	práce	práce	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	3	obj	3:obj	Entity=(cmpr9410029e7--1-gstype:gen|Functor=3:PAT|LGloss=(jako_činnost_i_místo)
5	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	7:case	Bridge=cmpr9410029e13<cmpr9410029e9:subset,cmpr9410029e14<cmpr9410029e9:part|Entity=(cmpr9410029e9--3|LId=v-1
6	celé	celý	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	7	amod	7:amod	Functor=7:RSTR
7	ČR	ČR	PROPN	BNXXX-----A----	Abbr=Yes|NameType=Geo	4	nmod	4:nmod:v:loc	Entity=cmpr9410029e9)cmpr9410029e7)|Functor=4:LOC|LGloss=(Česká_republika)|SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 amod	color:blue
1	Jedním	jeden	NUM	CnZS7----------	Case=Ins|Gender=Masc,Neut|Number=Sing|NumForm=Word|NumType=Card	0	root	0:root	Bridge=ln95049025e25<ln95049025e27:subset|Entity=(ln95049025e27--1|Functor=0:PAT|LNumValue=1
2	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	3	case	3:case	Entity=(ln95049025e25--2-gstype:spec|LId=z-1
3	oslovených	oslovený	ADJ	AAMP2----1A----	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	1	amod	1:amod	Entity=ln95049025e25)ln95049025e27)|Functor=1:DIR1|LDeriv=oslovit
4	byl	být	AUX	VpYS----R-AAI--	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	cop	1:cop	Functor=1:PRED
5	i	i	PART	TT-------------	_	6	advmod:emph	6:advmod:emph	LId=i-2|Functor=6:RHEM
6	on	on	PRON	PEYS1--3-------	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	nsubj	1:nsubj	Entity=(ln95049025e9--1-gstype:spec|Functor=1:ACT.cop|LId=on-1
7	sám	samý	DET	PLYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Emp|Variant=Short	6	det	6:det	Entity=ln95049025e9)|Functor=6:RSTR|LGloss=(samotný)|SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


