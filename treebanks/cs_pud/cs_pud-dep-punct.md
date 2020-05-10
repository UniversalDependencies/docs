---
layout: base
title:  'Statistics of punct in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `punct`

This relation is universal.

2624 nodes (14%) are attached to their parents as `punct`.

1488 instances of `punct` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.93978658536585.

The following 11 pairs of parts of speech are connected with `punct`: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-PUNCT.html">PUNCT</a></tt> (1541; 59% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-PUNCT.html">PUNCT</a></tt> (444; 17% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-PUNCT.html">PUNCT</a></tt> (374; 14% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-PUNCT.html">PUNCT</a></tt> (88; 3% instances), <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pud-pos-PUNCT.html">PUNCT</a></tt> (86; 3% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-PUNCT.html">PUNCT</a></tt> (41; 2% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-PUNCT.html">PUNCT</a></tt> (27; 1% instances), <tt><a href="cs_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pud-pos-PUNCT.html">PUNCT</a></tt> (11; 0% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-PUNCT.html">PUNCT</a></tt> (7; 0% instances), <tt><a href="cs_pud-pos-PART.html">PART</a></tt>-<tt><a href="cs_pud-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="cs_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pud-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 punct	color:blue
1	Nové	nový	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	2	amod	2:amod	_
2	výdaje	výdaj	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	3	nsubj	3:nsubj	_
3	pocházejí	pocházet	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	7	case	7:case	LId=z-1
5	bohatých	bohatý	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	7:amod	_
6	bankovních	bankovní	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	7	amod	7:amod	_
7	účtů	účet	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	3	obl	3:obl:z:gen	_
8	Clintonové	Clintonová	PROPN	NNFS2-----A----	Case=Gen|Gender=Fem|NameType=Sur|Number=Sing|Polarity=Pos	7	nmod	7:nmod:gen	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 punct	color:blue
1	Maximální	maximální	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	2:amod	_
2	množství	množství	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
3	:	:	PUNCT	Z:-------------	_	5	punct	5:punct	_
4	5000	5000	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod:gov	5:nummod:gov	_
5	dolarů	dolar	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	2	appos	2:appos	_
6	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	7:case	LId=na-1
7	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	5	nmod	5:nmod:na:acc	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 9 punct	color:blue
1	Co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	2	obj	7:ref	LId=co-1
2	říká	říkat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl:relcl	7:acl:relcl	_
3	a	a	CCONJ	J^-------------	_	5	cc	5:cc	LId=a-1
4	co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	5	obj	7:ref	LId=co-1
5	dělá	dělat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	2:conj|7:acl:relcl	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	2	punct	2:punct	_
7	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	8	nsubj	2:obj|5:obj|8:nsubj	_
8	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
9	–	-	PUNCT	Z:-------------	_	14	punct	14:punct	_
10	no	no	PART	TT-------------	_	14	discourse	14:discourse	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	14	punct	14:punct	_
12	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	cop	14:cop	_
13	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	14	nsubj	14:nsubj	_
14	neuvěřitelné	uvěřitelný	ADJ	AANS1----1N----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Neg	8	conj	0:root|8:conj	SpaceAfter=No|LDeriv=uvěřit
15	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


