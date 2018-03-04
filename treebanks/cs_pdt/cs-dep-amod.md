---
layout: base
title:  'Statistics of amod in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `amod`

This relation is universal.

158099 nodes (10%) are attached to their parents as `amod`.

147193 instances of `amod` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30986913263209.

The following 17 pairs of parts of speech are connected with `amod`: <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (150647; 95% instances), <tt><a href="cs-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (5216; 3% instances), <tt><a href="cs-pos-NUM.html">NUM</a></tt>-<tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (602; 0% instances), <tt><a href="cs-pos-DET.html">DET</a></tt>-<tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (489; 0% instances), <tt><a href="cs-pos-PRON.html">PRON</a></tt>-<tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (457; 0% instances), <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (261; 0% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (248; 0% instances), <tt><a href="cs-pos-PRON.html">PRON</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (46; 0% instances), <tt><a href="cs-pos-NUM.html">NUM</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (27; 0% instances), <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (26; 0% instances), <tt><a href="cs-pos-DET.html">DET</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (22; 0% instances), <tt><a href="cs-pos-PART.html">PART</a></tt>-<tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (21; 0% instances), <tt><a href="cs-pos-ADV.html">ADV</a></tt>-<tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (15; 0% instances), <tt><a href="cs-pos-SYM.html">SYM</a></tt>-<tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (13; 0% instances), <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-PROPN.html">PROPN</a></tt> (6; 0% instances), <tt><a href="cs-pos-INTJ.html">INTJ</a></tt>-<tt><a href="cs-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="cs-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Přenosová	přenosový	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	_
2	rychlost	rychlost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No|LDeriv=rychlý
3	:	:	PUNCT	Z:-------------	_	10	punct	_	_
4	(	(	PUNCT	Z:-------------	_	5	punct	_	SpaceAfter=No
5	A	A	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Giv|Polarity=Pos	10	nmod	_	SpaceAfter=No|LId=A-0
6	4	4	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod	_	SpaceAfter=No
7	/	/	PUNCT	Z:-------------	_	8	punct	_	SpaceAfter=No
8	sec	s`sekunda	NOUN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|Polarity=Pos	5	nmod	_	SpaceAfter=No|LId=s`sekunda-2
9	)	)	PUNCT	Z:-------------	_	5	punct	_	_
10	12	12	NUM	C=-------------	NumForm=Digit|NumType=Card	2	appos	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 amod	color:blue
1	OECD	OECD	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Polarity=Pos	0	root	_	LId=OECD-1|LGloss=(Ev._org._hosp._spolupr._a_roz.)
2	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	3	case	_	LId=k-1
3	vývoji	vývoj	NOUN	NNIS3-----A----	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	1	dep	_	_
4	HDP	HDP	NOUN	NNIXX-----A---8	Abbr=Yes|Animacy=Inan|Gender=Masc|Polarity=Pos	3	nmod	_	LGloss=(hrubý_domácí_produkt)
5	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	9	case	_	LId=v-1
6	střední	střední	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	9	amod	_	_
7	a	a	CCONJ	J^-------------	_	8	cc	_	LId=a-1
8	východní	východní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	conj	_	_
9	Evropě	Evropa	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	3	nmod	_	SpaceAfter=No
10	:	:	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	Z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	2	case	_	LId=z-1
2	dalších	další	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	3	obl	_	_
3	byly	být	VERB	VpTP---XR-AA---	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	mezi	mezi	ADP	RR--7----------	AdpType=Prep|Case=Ins	6	case	_	LId=mezi-1
5	prvními	první	ADJ	CrIP7----------	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|NumType=Ord	6	amod	_	_
6	deseti	deset	NUM	Cn-P7----------	Case=Ins|Number=Plur|NumForm=Word|NumType=Card	3	obl	_	LNumValue=10
7	ještě	ještě	ADV	Db-------------	_	8	advmod:emph	_	_
8	Pupp	Pupp	PROPN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|NameType=Com|Number=Sing|Polarity=Pos	3	nsubj	_	_
9	a	a	CCONJ	J^-------------	_	10	cc	_	LId=a-1
10	Jalta	Jalta	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


