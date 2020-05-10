---
layout: base
title:  'Statistics of root in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `root`

This relation is universal.

1000 nodes (5%) are attached to their parents as `root`.

1000 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.518.

The following 9 pairs of parts of speech are connected with `root`: -<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (731; 73% instances), -<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (154; 15% instances), -<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (93; 9% instances), -<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (9; 1% instances), -<tt><a href="cs_pud-pos-NUM.html">NUM</a></tt> (5; 1% instances), -<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (3; 0% instances), -<tt><a href="cs_pud-pos-PRON.html">PRON</a></tt> (3; 0% instances), -<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), -<tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Možná	možná	ADV	Db-------------	_	4	advmod	4:advmod	LId=možná-1|LGloss=(snad)
2	bylo	být	AUX	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	cop	4:cop	_
3	příliš	příliš	ADV	Db-------------	_	4	advmod	4:advmod	_
4	upjaté	upjatý	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos|Style=Rare	0	root	0:root	LDeriv=upnout
5	oblečení	oblečení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	4	nsubj	4:nsubj	SpaceAfter=No|LDeriv=obléci
6	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Maximální	maximální	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	2	amod	2:amod	_
2	množství	množství	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
3	:	:	PUNCT	Z:-------------	_	5	punct	5:punct	_
4	5000	5000	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nummod:gov	5:nummod:gov	_
5	dolarů	dolar	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	2	appos	2:appos	_
6	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	7:case	LId=na-1
7	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	5	nmod	5:nmod:na:acc	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


