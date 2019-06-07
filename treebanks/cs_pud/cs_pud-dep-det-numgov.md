---
layout: base
title:  'Statistics of det:numgov in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="cs_pud-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs_pud-dep-det-nummod.html">det:nummod</a></tt>.

43 nodes (0%) are attached to their parents as `det:numgov`.

42 instances of `det:numgov` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53488372093023.

The following 3 pairs of parts of speech are connected with `det:numgov`: <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (40; 93% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (2; 5% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det:numgov	color:blue
1	Nové	nový	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	2	amod	_	_
2	směrnice	směrnice	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	5	nsubj	_	_
3	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	LId=pro-1
4	železo	železo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	2	nmod	_	_
5	znamenají	znamenat	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	9	punct	_	_
7	že	že	SCONJ	J,-------------	_	9	mark	_	LId=že-1
8	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
9	třeba	třeba	ADV	Db-------------	_	5	ccomp	_	LId=třeba-2
10	více	hodně	DET	Dg-------2A----	Degree=Cmp|Polarity=Pos	11	det:numgov	_	LId=hodně-2
11	dárců	dárce	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	9	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det:numgov	color:blue
1	Několik	několik	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Ind	3	det:numgov	_	_
2	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	jich	on	PRON	PPXP2--3-------	Case=Gen|Number=Plur|Person=3|PronType=Prs	4	obj	_	LId=on-1
4	našel	najít	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Z:-------------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 29 det:numgov	color:blue
1	„	"	PUNCT	Z:-------------	_	3	punct	_	SpaceAfter=No
2	Nedávnými	dávný	ADJ	AAFP7----1N----	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Neg	3	amod	_	_
3	událostmi	událost	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	7	iobj	_	SpaceAfter=No|LDeriv=událý
4	“	"	PUNCT	Z:-------------	_	3	punct	_	_
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pass	_	LGloss=(zvr._zájmeno/částice)
6	pravděpodobně	pravděpodobně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	7	advmod	_	LDeriv=pravděpodobný
7	myslí	myslit	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	útoky	útok	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	7	nsubj:pass	_	_
9	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	12	case	_	LId=z-1
10	21	21	NUM	C=-------------	NumForm=Digit|NumType=Card	12	nummod	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	10	punct	_	_
12	října	říjen	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	8	nmod	_	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	16	punct	_	_
14	které	který	DET	P4YP1----------	Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	16	nsubj	_	_
15	dočasně	dočasně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	16	advmod	_	LDeriv=dočasný
16	vyřadily	vyřadit	VERB	VpTP---XR-AA---	Animacy=Inan|Aspect=Perf|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	8	acl	_	_
17	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	18	case	_	LId=z-1
18	provozu	provoz	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	16	iobj	_	_
19	populární	populární	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	20	amod	_	_
20	weby	web	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	16	obj	_	_
21	jako	jako	SCONJ	J,-------------	_	22	mark	_	LId=jako-1
22	Reddit	Reddit	PROPN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|NameType=Com|Number=Sing|Polarity=Pos	20	appos	_	SpaceAfter=No
23	,	,	PUNCT	Z:-------------	_	24	punct	_	_
24	Twitter	Twitter	PROPN	NNIS1-----A----	Animacy=Inan|Case=Nom|Foreign=Yes|Gender=Masc|NameType=Com|Number=Sing|Polarity=Pos	22	conj	_	LGloss=(sociální_síť)
25	nebo	nebo	CCONJ	J^-------------	_	26	cc	_	_
26	Spotify	Spotify	PROPN	NNXXX-----A----	NameType=Com|Polarity=Pos	22	conj	_	SpaceAfter=No
27	,	,	PUNCT	Z:-------------	_	30	punct	_	_
28	a	a	CCONJ	J^-------------	_	30	cc	_	LId=a-1
29	mnoho	mnoho	DET	Ca--4----------	Case=Acc|NumType=Card|PronType=Ind	30	det:numgov	_	LId=mnoho-1
30	dalších	další	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	22	conj	_	SpaceAfter=No
31	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


