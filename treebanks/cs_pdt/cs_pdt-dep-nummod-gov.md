---
layout: base
title:  'Statistics of nummod:gov in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `nummod:gov`

This relation is a language-specific subtype of <tt><a href="cs_pdt-dep-nummod.html">nummod</a></tt>.

1143 nodes (0%) are attached to their parents as `nummod:gov`.

1107 instances of `nummod:gov` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35433070866142.

The following 3 pairs of parts of speech are connected with `nummod:gov`: <tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (1109; 97% instances), <tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (29; 3% instances), <tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pdt-pos-NUM.html">NUM</a></tt> (5; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod:gov	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	Entity=(cmpr9410049c10--2-gstype:gen|LId=v-1
2	bytě	byt	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	3	obl	3:obl:v:loc	Entity=cmpr9410049c10)|Functor=3:LOC|LGloss=(místo_k_bydlení)
3	máte	mít	VERB	VB-P---2P-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
4	příjemných	příjemný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	6	amod	6:amod	Entity=(cmpr9410049c13--3|Functor=6:RSTR|LGloss=(všeob.,_poz._emoce)
5	24	24	NUM	C=-------------	NumForm=Digit|NumType=Card	6	nummod:gov	6:nummod:gov	Functor=6:RSTR
6	°	°	NOUN	NNIP2-----A---8	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos|Style=Coll	3	obj	3:obj	Functor=3:PAT|LGloss=(stupeň)
7	C	Celsius	PROPN	NNMXX-----A---b	Abbr=Yes|Animacy=Anim|Gender=Masc|NameType=Giv|Polarity=Pos	6	nmod	6:nmod	Entity=cmpr9410049c13)|Functor=6:CRIT|SpaceAfter=No
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
5	posouzení	posouzení	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	3	obl	3:obl:k:dat	LDeriv=posoudit|Functor=3:AIM
6	třiatřicet	třiatřicet	NUM	Cl-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	2	nummod:gov	2:nummod:gov	SpaceAfter=No|LNumValue=33|Functor=2:COMPL
7	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nummod:gov	color:blue
1	Přes	přes	ADP	RR--4----------	AdpType=Prep|Case=Acc	2	case	2:case	LId=přes-1
2	upozornění	upozornění	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	11	obl	11:obl:přes:acc	LDeriv=upozornit
3	radnice	radnice	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	2	nmod	2:nmod:gen	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	7	punct	7:punct	_
5	že	že	SCONJ	J,-------------	_	7	mark	7:mark	LId=že-1
6	si	se	PRON	P7--3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	7	obl	7:obl:dat	LGloss=(zvr._zájmeno/částice)
7	bere	brát	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	2:acl:že	_
8	velké	velký	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	9	amod	9:amod	_
9	sousto	sousto	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	7	obj	7:obj	SpaceAfter=No
10	,	,	PUNCT	Z:-------------	_	7	punct	7:punct	_
11	najal	najmout	VERB	VpYS----R-AAP--	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
12	130	130	NUM	C=-------------	NumForm=Digit|NumType=Card	13	nummod:gov	13:nummod:gov	_
13	Romů	Rom	PROPN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Giv,Nat|Number=Plur|Polarity=Pos	11	obj	11:obj	SpaceAfter=No
14	,	,	PUNCT	Z:-------------	_	21	punct	21:punct	_
15	aby	aby	SCONJ	J,-------------	_	21	mark	21:mark	_
16	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	21	aux	21:aux	_
17	jich	on	PRON	PEXP2--3------1	Case=Gen|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	21	obj	21:obj	LId=on-1
18	hned	hned	ADV	Db-------------	_	19	advmod:emph	19:advmod:emph	LId=hned-1
19	vzápětí	vzápětí	ADV	Db-------------	_	21	advmod	21:advmod	_
20	40	40	NUM	C=-------------	NumForm=Digit|NumType=Card	17	nummod:gov	17:nummod:gov	_
21	propustil	propustit	VERB	VpYS----R-AAP--	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	11	advcl	11:advcl:aby	SpaceAfter=No
22	.	.	PUNCT	Z:-------------	_	11	punct	11:punct	_

~~~


