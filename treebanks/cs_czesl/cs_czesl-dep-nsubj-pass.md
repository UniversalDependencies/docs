---
layout: base
title:  'Statistics of nsubj:pass in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="cs_czesl-dep-nsubj.html">nsubj</a></tt>.

15 nodes (0%) are attached to their parents as `nsubj:pass`.

9 instances of `nsubj:pass` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (9; 60% instances), <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt> (4; 27% instances), <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-DET.html">DET</a></tt> (2; 13% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nsubj:pass	color:blue
1	Jak	jak	ADV	Db-------------	PronType=Int,Rel	5	advmod	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pass	_	_
3	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	_	_
4	nás	já	PRON	PP-P2--1-------	Case=Gen|Number=Plur|Person=1|PronType=Prs	5	obl	_	_
5	slaví	slavit	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	Vánoce	vánoce	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	5	nsubj:pass	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:pass	color:blue
1	Čínská	čínský	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
2	lidová	lidový	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	_	_
3	republika	republika	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	5	nsubj:pass	_	_
4	byla	být	AUX	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	aux:pass	_	_
5	vyhlášena	vyhlášený	ADJ	VsQW---XX-AP---	Aspect=Perf|Case=Nom|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	_	_
7	roce	rok	NOUN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	_	_
8	1949	1949	NUM	C=-------------	NumForm=Digit|NumType=Card	7	nummod:gov	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:pass	color:blue
1	Ještě	ještě	ADV	Db-------------	Degree=Pos|Polarity=Pos	5	advmod	_	_
2	bylo	být	AUX	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	5	cop	_	_
3	vše	všechen	DET	PLNS1---------1	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	5	nsubj:pass	_	_
4	najednou	najednou	ADV	Db-------------	Degree=Pos|Polarity=Pos	5	advmod	_	_
5	prozářeno	prozářený	ADJ	VsNS---XX-AP---	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
6	světlem	světlo	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing	5	obj	_	_
7	vědění	vědění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|VerbForm=Vnoun	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


