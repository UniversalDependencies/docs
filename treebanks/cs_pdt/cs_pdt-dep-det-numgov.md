---
layout: base
title:  'Statistics of det:numgov in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="cs_pdt-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs_pdt-dep-det-nummod.html">det:nummod</a></tt>.

211 nodes (0%) are attached to their parents as `det:numgov`.

201 instances of `det:numgov` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49763033175355.

The following 3 pairs of parts of speech are connected with `det:numgov`: <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (205; 97% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (4; 2% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det:numgov	color:blue
1	I	i	CCONJ	J^-------------	_	3	advmod:emph	3:advmod:emph	Bridge=cmpr9415025c5<cmpr9415025c47:subset|Entity=(cmpr9415025c47--3|Functor=3:RHEM|LId=i-1
2	velké	velký	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	3:amod	Functor=3:RSTR
3	firmy	firma	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	5	nsubj	5:nsubj	Entity=cmpr9415025c47)|Functor=5:ACT
4	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	obj	5:obj	LGloss=(zvr._zájmeno/částice)
5	specializují	specializovat	VERB	VB-P---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
6	jen	jen	PART	TT-------------	_	8	advmod:emph	8:advmod:emph	Entity=(cmpr9415025c36--5-gstype:gen|Functor=8:RHEM|LId=jen-1
7	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	10:case	LId=na-1
8	několik	několik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Ind	10	det:numgov	10:det:numgov	Functor=10:RSTR
9	málo	málo	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Ind	10	det:numgov	10:det:numgov	LId=málo-1|LGloss=(málo_peněz)|Functor=10:RSTR
10	teritorií	teritorium	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	5	obl:arg	5:obl:arg:na:acc	Entity=cmpr9415025c36)|Functor=5:PAT|SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 det:numgov	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	Entity=(cmpr9415025c23--3|LId=v-1
2	každém	každý	DET	AANS6----1A----	Case=Loc|Gender=Neut|Number=Sing|PronType=Tot	3	det	3:det	Functor=3:RSTR
3	městě	město	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	5	obl	5:obl:v:loc	Entity=cmpr9415025c23)|Functor=5:LOC
4	jich	on	PRON	PEXP2--3------1	Case=Gen|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	5	obj	5:obj	Entity=(cmpr9415025c5[1/2]--1-gstype:gen)|Functor=5:PAT|LId=on-1
5	najdeme	najít	VERB	VB-P---1P-AAP--	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
6	několik	několik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Ind	4	det:numgov	4:det:numgov	Entity=(cmpr9415025c5[2/2]--1-gstype:gen)|Functor=4:RSTR|SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	9	punct	6.1:punct	Functor=9:CONJ
8	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	9:case	Entity=(cmpr9415025c25--2|LId=v-1
9	centru	centrum	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	5	conj	6.1:dep	Functor=5:LOC
10	Prahy	Praha	PROPN	NNFS2-----A----	Case=Gen|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	9	nmod	9:nmod:gen	Bridge=cmpr9415025c23<cmpr9415025c22:subset|Entity=(cmpr9415025c22--1)cmpr9415025c25)|Functor=9:APP
11	dokonce	dokonce	ADV	Db-------------	_	12	advmod:emph	12:advmod:emph	Functor=12:RHEM
12	několik	několik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Ind	9	orphan	6.1:dep	Functor=9:PAT
13	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	15	case	15:case	Bridge=cmpr9415025c25<cmpr9415025c24:part|Entity=(cmpr9415025c24--3|LId=v-1
14	jedné	jeden	NUM	CnFS6----------	Case=Loc|Gender=Fem|Number=Sing|NumForm=Word|NumType=Card	15	nummod	15:nummod	LNumValue=1|Functor=15:RSTR
15	ulici	ulice	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	9	orphan	6.1:dep	Entity=cmpr9415025c24)|Functor=9:LOC|SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det:numgov	color:blue
1	Už	už	ADV	Db-------------	_	3	advmod:emph	3:advmod:emph	LId=už-1|Functor=3:RHEM
2	před	před	ADP	RR--7----------	AdpType=Prep|Case=Ins	3	case	3:case	LId=před-1
3	rokem	rok	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	obl	5:obl:před:ins	Functor=5:TWHEN
4	1939	1939	NUM	C=-------------	NumForm=Digit|NumType=Card	3	nummod	3:nummod	Functor=3:RSTR
5	bylo	být	AUX	VpNS----R-AAI--	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	Functor=0:PRED
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	8:case	Entity=(ln9420959c55--3-gstype:spec|LId=v-1
7	koncentračních	koncentrační	ADJ	AAIP6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	8	amod	8:amod	Functor=8:RSTR
8	táborech	tábor	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	5	obl	5:obl:v:loc	Entity=ln9420959c55)|Functor=5:LOC|LId=tábor-1
9	mnoho	mnoho	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Ind	10	det:numgov	10:det:numgov	Entity=(ln9420959c52--2|Functor=10:RSTR|LId=mnoho-1
10	Čechů	Čech	PROPN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Giv,Nat|Number=Plur|Polarity=Pos	5	nsubj	5:nsubj|17:nsubj	Functor=5:ACT|SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	17	punct	17:punct	_
12	kteří	který	DET	P4MP1----------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	17	nsubj	10:ref	Entity=(ln9420959c52--1)|Functor=17:ACT
13	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	17	expl:pv	17:expl:pv	LGloss=(zvr._zájmeno/částice)
14	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	15	case	15:case	Entity=(ln9420959c9--2-gstype:spec|LId=v-1
15	Německu	Německo	PROPN	NNNS6-----A----	Case=Loc|Gender=Neut|NameType=Geo|Number=Sing|Polarity=Pos	17	obl	17:obl:v:loc	Entity=ln9420959c9)|Functor=17:LOC
16	dobrovolně	dobrovolně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	17	advmod	17:advmod	LDeriv=dobrovolný|Functor=17:MANN
17	přihlásili	přihlásit	VERB	VpMP----R-AAP--	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	10	acl:relcl	10:acl:relcl	Functor=10:RSTR
18	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	19	case	19:case	Entity=(ln9420959c53--2-gstype:spec|LId=na-1
19	práci	práce	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	17	obl	17:obl:na:acc	Entity=ln9420959c53)ln9420959c52)|Functor=17:DIR3|LGloss=(jako_činnost_i_místo)|SpaceAfter=No
20	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


