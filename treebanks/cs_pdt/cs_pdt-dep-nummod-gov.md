---
layout: base
title:  'Statistics of nummod:gov in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="cs_pdt-dep-nummod.html">nummod</a></tt>.

1846 nodes (1%) are attached to their parents as `nummod:gov`.

1803 instances of `nummod:gov` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44528710725894.

The following 3 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (1790; 97% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (37; 2% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (19; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod:gov	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	Entity=(cmpr9410049c10--2-gstype:gen|LId=v-1
2	bytě	byt	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	obl	3:obl:v:loc	Entity=cmpr9410049c10)|Functor=3:LOC|LGloss=(místo_k_bydlení)
3	máte	mít	VERB	VB-P---2P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
4	příjemných	příjemný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	6	amod	6:amod	Entity=(cmpr9410049c13--3|Functor=6:RSTR|LGloss=(všeob.,_poz._emoce)
5	24	24	NUM	C=-------------	NumForm=Digit|NumType=Card	6	nummod:gov	6:nummod:gov	Functor=6:RSTR
6	°	°	NOUN	NNIP2-----A---8	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Style=Coll	3	obj	3:obj	Functor=3:PAT|LGloss=(stupeň)
7	C	Celsius	PROPN	NNMXX-----A---b	Abbr=Yes|Animacy=Anim|Gender=Masc|NameType=Giv	6	nmod	6:nmod	Entity=cmpr9410049c13)|Functor=6:CRIT|SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	12	punct	12:punct	_
9	i	i	CCONJ	J^-------------	_	12	mark	12:mark	LId=i-1
10	když	když	SCONJ	J,-------------	_	9	fixed	9:fixed	_
11	venku	venku	ADV	Db-------------	_	12	advmod	12:advmod	Functor=12:LOC
12	mrzne	mrznout	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	3:advcl:i_když	SpaceAfter=No|Functor=3:CNCS
13	,	,	PUNCT	Z:-------------	_	15	punct	15:punct	_
14	až	až	SCONJ	J,-------------	_	15	mark	15:mark	LId=až-2|LGloss=(přijde,_až_to_dodělá)|Functor=15:RHEM
15	praští	praštět	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	12:advcl:až	SpaceAfter=No|Functor=12:EXT
16	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 nummod:gov	color:blue
1	Nyní	nyní	ADV	Db-------------	PronType=Dem	3	advmod	3:advmod	Functor=3:TWHEN
2	jich	on	PRON	PEXP2--3------1	Case=Gen|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	3	obj	3:obj	Bridge=ln94207126c11<ln94207126c12:subset|Entity=(ln94207126c12--1)|Functor=3:PAT|LId=on-1
3	má	mít	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
4	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	5	case	5:case	LId=k-1
5	posouzení	posouzení	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|VerbForm=Vnoun	3	obl	3:obl:k:dat	LDeriv=posoudit|Functor=3:AIM
6	třiatřicet	třiatřicet	NUM	Cl-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card	2	nummod:gov	2:nummod:gov	SpaceAfter=No|LNumValue=33|Functor=2:COMPL
7	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 nummod:gov	color:blue
1	Nezapomeňte	zapomenout	VERB	Vi-P---2--N-P--	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Polarity=Neg|VerbForm=Fin	0	root	0:root	SpaceAfter=No|Functor=0:PRED
2	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
3	že	že	SCONJ	J,-------------	_	5	mark	5:mark	LId=že-1
4	zde	zde	ADV	Db-------------	PronType=Dem	5	advmod	5:advmod	Entity=(ln9420959c74--1-gstype:spec)|Functor=5:LOC
5	zůstal	zůstat	VERB	VpYS----R-AAP--	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	ccomp	1:ccomp	Functor=1:PAT
6	majetek	majetek	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	Functor=5:ACT
7	po	po	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	12:case	LId=po-1
8	třech	tři	NUM	Cl-P6----------	Case=Loc|Number=Plur|NumForm=Word|NumType=Card	12	nummod:gov	12:nummod:gov	LNumValue=3|Functor=12:RSTR
9	a	a	CCONJ	J^-------------	_	10	cc	10:cc	LId=a-1|Functor=10:CONJ
10	půl	půl	NUM	Cl-XX----------	NumForm=Word|NumType=Card	8	conj	8:conj|12:nummod:gov	LId=půl-1|Functor=8:RSTR
11	milionu	milion	NUM	CzIS6----------	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|NumType=Card	12	nummod:gov	12:nummod:gov	LNumValue=1000000|LGloss=(^DD**milión)|Functor=12:HER
12	Němců	Němec	PROPN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Giv,Nat|Number=Plur	6	nmod	6:nmod:po:loc	Entity=(ln9420959c40--1-gstype:gen)|Functor=6:MAT|SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


