---
layout: base
title:  'Statistics of discourse in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `discourse`

This relation is universal.

7 nodes (0%) are attached to their parents as `discourse`.

7 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.14285714285714.

The following 5 pairs of parts of speech are connected with `discourse`: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (2; 29% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-PART.html">PART</a></tt> (2; 29% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-PART.html">PART</a></tt> (1; 14% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 discourse	color:blue
1	Koneckonců	koneckonců	PART	TT-------------	_	7	discourse	_	_
2	naše	můj	DET	PSIP1-P1-------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	3	det	_	LGloss=(přivlast.)
3	výsledky	výsledek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	7	nsubj:pass	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pass	_	LGloss=(zvr._zájmeno/částice)
5	jen	jen	PART	TT-------------	_	6	advmod:emph	_	LId=jen-1
6	málokdy	málokdy	ADV	Db-------------	PronType=Ind	7	advmod	_	_
7	měří	měřit	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	LId=podle-2
9	toho	ten	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	Z:-------------	_	13	punct	_	_
11	jak	jak	ADV	Db-------------	PronType=Int,Rel	13	advmod	_	LId=jak-3
12	jsme	být	AUX	VB-P---1P-AA---	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	_
13	zabezpečeni	zabezpečený	ADJ	VsMP---XX-AP---	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	9	acl	_	_
14	a	a	CCONJ	J^-------------	_	18	cc	_	LId=a-1
15	kolika	kolik	DET	C?--7----------	Case=Ins|NumType=Card|PronType=Int,Rel	16	det:nummod	_	_
16	pravidly	pravidlo	NOUN	NNNP7-----A----	Case=Ins|Gender=Neut|Number=Plur|Polarity=Pos	18	obj	_	_
17	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	18	expl:pv	_	LGloss=(zvr._zájmeno/částice)
18	řídíme	řídit	VERB	VB-P---1P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	13	conj	_	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 discourse	color:blue
1	„	"	PUNCT	Z:-------------	_	4	punct	_	SpaceAfter=No
2	Naštěstí	naštěstí	ADV	Db-------------	_	4	advmod	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pv	_	LGloss=(zvr._zájmeno/částice)
4	ozval	ozvat	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	23	ccomp	_	_
5	někdo	někdo	PRON	PZM-1----------	Animacy=Anim|Case=Nom|Gender=Masc|PronType=Ind	4	nsubj	_	_
6	ze	z	ADP	RV--2----------	AdpType=Voc|Case=Gen	7	case	_	LId=z-1
7	Sony	Sony	PROPN	NNFXX-----A----	Abbr=Yes|Gender=Fem|NameType=Com|Polarity=Pos	5	nmod	_	_
8	Australia	Austrálie	PROPN	NNFXX-----A----	Foreign=Yes|Gender=Fem|NameType=Geo|Polarity=Pos|Style=Rare	7	flat	_	_
9	a	a	CCONJ	J^-------------	_	10	cc	_	LId=a-1
10	řekl	říci	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	conj	_	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	15	punct	_	_
12	'	'	PUNCT	Z:-------------	_	15	punct	_	SpaceAfter=No
13	Mimochodem	mimochodem	ADV	Db-------------	_	15	discourse	_	SpaceAfter=No
14	,	,	PUNCT	Z:-------------	_	13	punct	_	_
15	všimli	všimnout	VERB	VpMP---XR-AA--1	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	10	ccomp	_	_
16	jste	být	AUX	VB-P---2P-AA---	Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	15	aux	_	_
17	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	15	expl:pv	_	LGloss=(zvr._zájmeno/částice)
18	tohohle	tenhle	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	15	obj	_	SpaceAfter=No
19	?	?	PUNCT	Z:-------------	_	15	punct	_	SpaceAfter=No
20	'	'	PUNCT	Z:-------------	_	15	punct	_	SpaceAfter=No
21	“	"	PUNCT	Z:-------------	_	4	punct	_	SpaceAfter=No
22	,	,	PUNCT	Z:-------------	_	4	punct	_	_
23	říká	říkat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
24	Pall	Pall	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	23	nsubj	_	SpaceAfter=No
25	.	.	PUNCT	Z:-------------	_	23	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 discourse	color:blue
1	Internet	internet	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj	_	_
2	konec	konec	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	discourse	_	_
3	konců	konec	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	2	compound	_	_
4	není	být	AUX	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	luxus	luxus	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	10	punct	_	_
7	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
8	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	10	nsubj	_	_
9	nezbytný	zbytný	ADJ	AAIS1----1N----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Neg	10	amod	_	_
10	nástroj	nástroj	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	conj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


