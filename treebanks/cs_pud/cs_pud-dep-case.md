---
layout: base
title:  'Statistics of case in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `case`

This relation is universal.

1857 nodes (10%) are attached to their parents as `case`.

1857 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.50942380183091.

The following 16 pairs of parts of speech are connected with `case`: <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-ADP.html">ADP</a></tt> (1415; 76% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-ADP.html">ADP</a></tt> (218; 12% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-ADP.html">ADP</a></tt> (73; 4% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-ADP.html">ADP</a></tt> (58; 3% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-ADP.html">ADP</a></tt> (26; 1% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (26; 1% instances), <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pud-pos-ADP.html">ADP</a></tt> (13; 1% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (7; 0% instances), <tt><a href="cs_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_pud-pos-ADP.html">ADP</a></tt> (7; 0% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 case	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	Pracoval	pracovat	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
2	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	case	3:case	LId=pro-1
3	BBC	BBC	PROPN	NNFXX-----A---8	Abbr=Yes|Gender=Fem|NameType=Com|Polarity=Pos	1	obl	1:obl:pro	_
4	více	hodně	ADV	Dg-------2A----	Degree=Cmp|Polarity=Pos	7	advmod	7:advmod	LId=hodně-2
5	než	než	SCONJ	J,-------------	_	4	fixed	4:fixed	LId=než-2
6	deset	deset	NUM	Cn-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card	7	nummod:gov	7:nummod:gov	LNumValue=10
7	let	rok	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	1	obl	1:obl:acc	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Jen	jen	PART	TT-------------	_	2	advmod:emph	2:advmod:emph	LId=jen-1
2	50	50	NUM	C=-------------	NumForm=Digit|NumType=Card	5	nsubj	5:nsubj	_
3	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	4:case	LId=z-1
4	nich	on	PRON	P5XP2--3-------	Case=Gen|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs	2	nmod	2:nmod:z:gen	LId=on-1
5	sloužilo	sloužit	VERB	VpNS---XR-AA---	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
6	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	7	case	7:case	LId=k-1
7	obchodování	obchodování	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	5	obl	5:obl:k:dat	SpaceAfter=No|LDeriv=obchodovat
8	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


