---
layout: base
title:  'Statistics of aux:pass in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="cs_pud-dep-aux.html">aux</a></tt>.

164 nodes (1%) are attached to their parents as `aux:pass`.

164 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11585365853659.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (164; 100% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux:pass	color:blue
1	Byla	být	AUX	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	aux:pass	3:aux:pass	_
2	také	také	ADV	Db-------------	_	3	advmod	3:advmod	_
3	obviněna	obviněný	ADJ	VsQW---XX-AP---	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=obvinit
4	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	5	case	5:case	LId=z-1
5	pokusu	pokus	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	3	obl:arg	3:obl:arg:z:gen	_
6	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	7:case	LId=o-1
7	zabití	zabití	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	5	nmod	5:nmod:o:acc	LDeriv=zabít
8	své	svůj	DET	P8FS2---------1	Case=Gen|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	10	det	10:det	LId=svůj-1|LGloss=(přivlast.)
9	dvouleté	dvouletý	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	10	amod	10:amod	_
10	dcery	dcera	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	7	nmod	7:nmod:gen	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


