---
layout: base
title:  'Statistics of parataxis in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `parataxis`

This relation is universal.

20 nodes (0%) are attached to their parents as `parataxis`.

16 instances of `parataxis` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.45.

The following 10 pairs of parts of speech are connected with `parataxis`: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (5; 25% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (3; 15% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (3; 15% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (2; 10% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (2; 10% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-NUM.html">NUM</a></tt> (1; 5% instances), <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 parataxis	color:blue
1	Jak	jak	ADV	Db-------------	PronType=Int,Rel	2	mark	2:mark	LId=jak-3
2	spěchal	spěchat	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	6	parataxis	6:parataxis	_
3	uchvátit	uchvátit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	2	xcomp	2:xcomp	_
4	Kadeš	Kadeš	PROPN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|NameType=Geo|Number=Sing|Polarity=Pos	3	obj	3:obj	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	2	punct	2:punct	_
6	dopustil	dopustit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
7	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pv	6:expl:pv	LGloss=(zvr._zájmeno/částice)
8	Ramses	Ramses	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	6	nsubj	6:nsubj	_
9	II	II	NUM	C}-------------	NumForm=Roman|NumType=Card	8	nummod	8:nummod	SpaceAfter=No|LId=II-3|LNumValue=2
10	.	.	PUNCT	Z:-------------	_	9	punct	9:punct	_
11	zásadní	zásadní	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	13:amod	_
12	taktické	taktický	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	13:amod	_
13	chyby	chyba	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	6	obl:arg	6:obl:arg:gen	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 18 parataxis	color:blue
1	Podávaly	podávat	VERB	VpTP---XR-AA---	Animacy=Inan|Aspect=Imp|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	LGloss=(něco_[někomu]_[někam])|LDeriv=podat
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	1:expl:pass	LGloss=(zvr._zájmeno/částice)
3	alkoholické	alkoholický	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	4	amod	4:amod	_
4	nápoje	nápoj	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	1	nsubj:pass	1:nsubj:pass	_
5	jako	jako	SCONJ	J,-------------	_	7	case	7:case	LId=jako-1
6	například	například	ADV	Db-------------	_	7	advmod:emph	7:advmod:emph	_
7	pivo	pivo	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	4	appos	4:appos	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
9	bjórr	bjórr	NOUN	NNXXX-----A----	Foreign=Yes|Polarity=Pos	7	conj	4:appos|7:conj	_
10	(	(	PUNCT	Z:-------------	_	13	punct	13:punct	SpaceAfter=No
11	silné	silný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	13	amod	13:amod	_
12	ovocné	ovocný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	13	amod	13:amod	_
13	víno	víno	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	9	appos	9:appos	SpaceAfter=No
14	)	)	PUNCT	Z:-------------	_	13	punct	13:punct	_
15	a	a	CCONJ	J^-------------	_	21	cc	21:cc	LId=a-1
16	–	-	PUNCT	Z:-------------	_	18	punct	18:punct	_
17	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	18	case	18:case	LId=pro-1
18	bohaté	bohatý	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	21	parataxis	21:parataxis	_
19	–	-	PUNCT	Z:-------------	_	18	punct	18:punct	_
20	dovážené	dovážený	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	21	amod	21:amod	LGloss=(z_ciziny)|LDeriv=dovážet
21	víno	víno	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	7	conj	4:appos|7:conj	SpaceAfter=No
22	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 parataxis	color:blue
1	Byly	být	AUX	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	cop	5:cop	_
2	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	nsubj	5:nsubj	_
3	poslední	poslední	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	5	amod	5:amod	_
4	dvě	dva	NUM	ClHP1----------	Case=Nom|Gender=Fem,Neut|Number=Plur|NumForm=Word|NumType=Card|NumValue=1,2,3	5	nummod	5:nummod	LNumValue=2
5	nahrávky	nahrávka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	0	root	0:root|9:obj	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
7	které	který	DET	P4FP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Int,Rel	9	obj	5:ref	_
8	Rafferty	Rafferty	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	9	nsubj	9:nsubj	_
9	vytvořil	vytvořit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	acl:relcl	5:acl:relcl	_
10	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	11	case	11:case	LId=s-1
11	Hughem	Hugh	PROPN	NNMS7-----A----	Animacy=Anim|Case=Ins|Foreign=Yes|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	9	obl	9:obl:s:ins	_
12	Murphym	Murphy	PROPN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	11	flat	11:flat	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	15	punct	15:punct	_
14	ten	ten	DET	PDYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	15	nsubj	15:nsubj	_
15	zemřel	zemřít	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	11	parataxis	11:parataxis	_
16	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	17	case	17:case	LId=v-1
17	roce	rok	NOUN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	15	obl	15:obl:v:loc	_
18	1998	1998	NUM	C=-------------	NumForm=Digit|NumType=Card	17	nummod	17:nummod	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


