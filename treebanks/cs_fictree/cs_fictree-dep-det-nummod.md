---
layout: base
title:  'Statistics of det:nummod in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="cs_fictree-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="cs_fictree-dep-det-numgov.html">det:numgov</a></tt>.

52 nodes (0%) are attached to their parents as `det:nummod`.

49 instances of `det:nummod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38461538461538.

The following 3 pairs of parts of speech are connected with `det:nummod`: <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (49; 94% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (2; 4% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det:nummod	color:blue
1	Hlavní	hlavní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	2:amod	_
2	sestra	sestra	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	4	nsubj	4:nsubj	_
3	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pv	4:expl:pv	_
4	dostavila	dostavit	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
5	během	během	ADP	RR--2----------	AdpType=Prep|Case=Gen	7	case	7:case	_
6	několika	několik	DET	Ca--2----------	Case=Gen|NumType=Card|PronType=Ind	7	det:nummod	7:det:nummod	_
7	minut	minuta	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	4	obl	4:obl:během:gen	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 det:nummod	color:blue
1	Nebylo	být	VERB	VpNS----R-NA---	Gender=Neut|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
2	slyšet	slyšet	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	ccomp	1:ccomp	_
3	nic	nic	PRON	PW--1----------	Case=Nom|PronType=Neg	2	obj	2:obj	_
4	víc	víc	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Ind	3	det:nummod	3:det:nummod	_
5	než	než	SCONJ	J,-------------	_	6	mark	6:mark	_
6	vrčení	vrčení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	4	advcl	4:advcl:než	_
7	mašiny	mašina	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	6	nmod	6:nmod:gen	_
8	odkudsi	odkudsi	ADV	Db-------------	PronType=Ind	9	advmod	9:advmod	_
9	zezadu	zezadu	ADV	Db-------------	_	6	advmod	6:advmod	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det:nummod	color:blue
1	Potom	potom	ADV	Db-------------	_	3	advmod	3:advmod	_
2	dlaň	dlaň	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	3	obj	3:obj	_
3	otevřela	otevřít	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	5	punct	5:punct	_
5	leželo	ležet	VERB	VpNS----R-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	conj	0:root|3:conj	_
6	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	7:case	_
7	ní	on	PRON	P5FS6--3-------	Case=Loc|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs	5	obl	5:obl:na:loc	_
8	už	už	PART	TT-------------	_	5	advmod	5:advmod	_
9	jen	jen	PART	TT-------------	_	11	advmod:emph	11:advmod:emph	_
10	několik	několik	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Ind	11	det:nummod	11:det:nummod	_
11	málo	málo	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Ind	12	det:numgov	12:det:numgov	_
12	zrnek	zrnko	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	5	nsubj	5:nsubj	_
13	a	a	CCONJ	J^-------------	_	18	cc	18:cc	_
14	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	16	case	16:case	_
15	její	jeho	DET	PSFS6FS3-------	Case=Loc|Gender=Fem|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	16	det	16:det	_
16	pokožce	pokožka	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	18	obl	18:obl:na:loc	_
17	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	18	expl:pv	18:expl:pv	_
18	ukázaly	ukázat	VERB	VpIP----R-AA---	Animacy=Inan|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	conj	0:root|3:conj	_
19	jeho	jeho	DET	PSIP1IS3-------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	20	det	20:det	_
20	otisky	otisk	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	18	nsubj	18:nsubj	_
21	jako	jako	SCONJ	J,-------------	_	22	mark	22:mark	_
22	stovky	stovka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	20	xcomp	20:xcomp	_
23	malých	malý	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	24	amod	24:amod	_
24	jizviček	jizvička	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	22	nmod	22:nmod:gen	SpaceAfter=No
25	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


