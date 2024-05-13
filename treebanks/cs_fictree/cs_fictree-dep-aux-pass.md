---
layout: base
title:  'Statistics of aux:pass in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="cs_fictree-dep-aux.html">aux</a></tt>.

138 nodes (0%) are attached to their parents as `aux:pass`.

137 instances of `aux:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.85507246376812.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-AUX.html">AUX</a></tt> (138; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	Nad	nad	ADP	RR--7----------	AdpType=Prep|Case=Ins	2	case	2:case	_
2	tím	ten	DET	PDNS7----------	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	5	obl	5:obl:nad:ins	_
3	vším	všechen	DET	PLNS7----------	Case=Ins|Gender=Neut|Number=Sing|PronType=Tot	2	det	2:det	_
4	byl	být	AUX	VpIS----R-AA---	Animacy=Inan|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	aux:pass	5:aux:pass	_
5	vyveden	vyvedený	ADJ	VsIS------AP---	Animacy=Inan|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	_
6	nápis	nápis	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	5	nsubj:pass	5:nsubj:pass	_
7	Bitva	bitva	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	6	nmod	6:nmod:nom	_
8	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	9:case	_
9	Krásné	Krásná	PROPN	NNFS2-----A----	Case=Gen|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	7	nmod	7:nmod:u:gen	_
10	a	a	CCONJ	J^-------------	_	11	cc	11:cc	_
11	letopočet	letopočet	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	conj	5:nsubj:pass|6:conj	_
12	1427	1427	NUM	C=-------------	NumForm=Digit|NumType=Card	11	nummod	11:nummod	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


