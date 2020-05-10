---
layout: base
title:  'Statistics of compound in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `compound`

This relation is universal.

21 nodes (0%) are attached to their parents as `compound`.

14 instances of `compound` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.71428571428571.

The following 9 pairs of parts of speech are connected with `compound`: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (5; 24% instances), <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pud-pos-NUM.html">NUM</a></tt> (4; 19% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (4; 19% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (3; 14% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 5% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-NUM.html">NUM</a></tt> (1; 5% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound	color:blue
1	Není	být	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	divu	div	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	1	compound	1:compound	SpaceAfter=No|LId=div-1
3	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
4	když	když	SCONJ	J,-------------	_	10	mark	10:mark	_
5	Glenda	Glenda	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Giv|Number=Sing|Polarity=Pos	10	nsubj	10:nsubj	_
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	8:case	LId=v-1
7	hlavní	hlavní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	8	amod	8:amod	_
8	roli	role	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	10	obl	10:obl:v:loc	LId=role-2|LGloss=(herecká_úloha;_poslání)
9	tak	tak	ADV	Db-------------	PronType=Dem	10	advmod	10:advmod	LId=tak-3
10	září	zářit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	1:advcl:když	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 compound	color:blue
1	Do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	2	case	2:case	LId=do-1
2	roku	rok	NOUN	NNIS2-----A---1	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	8	obl	8:obl:do:gen	_
3	1563	1563	NUM	C=-------------	NumForm=Digit|NumType=Card	2	nummod	2:nummod	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	expl:pass	8:expl:pass	LGloss=(zvr._zájmeno/částice)
5	počet	počet	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	8	nsubj:pass	8:nsubj:pass	_
6	obyvatel	obyvatel	NOUN	NNMP2-----A---1	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	5	nmod	5:nmod:gen	_
7	Benátek	Benátky	PROPN	NNFP2-----A----	Case=Gen|Gender=Fem|NameType=Geo|Number=Plur|Polarity=Pos	6	nmod	6:nmod:gen	_
8	snížil	snížit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
9	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	11:case	LId=na-1
10	zhruba	zhruba	ADV	Db-------------	_	11	advmod:emph	11:advmod:emph	_
11	168	168	NUM	C=-------------	NumForm=Digit|NumType=Card	8	obl	8:obl:na	_
12	tisíc	tisíc	NUM	ClXS4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	11	compound	11:compound	SpaceAfter=No|LId=tisíc-1|LNumValue=1000
13	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 compound	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	LId=v-1
2	říjnu	říjen	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	14	obl	14:obl:v:loc	_
3	2015	2015	NUM	C=-------------	NumForm=Digit|NumType=Card	2	nummod	2:nummod	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
5	měsíc	měsíc	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	6	nmod	6:nmod:acc	_
6	poté	poté	ADV	Db-------------	_	2	appos	2:appos	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
8	co	co	SCONJ	J,-------------	_	10	mark	10:mark	LId=co-3|LGloss=(když:_poté/od_té_doby,_co)
9	skandál	skandál	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	10	nsubj	10:nsubj	_
10	vyšel	vyjít	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	acl	6:acl:co	_
11	najevo	najevo	ADV	Db-------------	_	10	compound	10:compound	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
13	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	14	aux:pass	14:aux:pass	_
14	povýšen	povýšený	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=povýšit
15	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	16	case	16:case	LId=na-1
16	předsedu	předseda	NOUN	NNMS4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	14	obl:arg	14:obl:arg:na:acc	SpaceAfter=No
17	.	.	PUNCT	Z:-------------	_	14	punct	14:punct	_

~~~


