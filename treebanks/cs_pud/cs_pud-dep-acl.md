---
layout: base
title:  'Statistics of acl in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="cs_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

111 nodes (1%) are attached to their parents as `acl`.

110 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.03603603603604.

The following 18 pairs of parts of speech are connected with `acl`: <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (52; 47% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (17; 15% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (9; 8% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (4; 4% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (4; 4% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	Mají	mít	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	jednu	jeden	NUM	ClFS4----------	Case=Acc|Gender=Fem|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	3	nummod	3:nummod	LNumValue=1
3	příležitost	příležitost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	1	obj	1:obj	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	obj	5:obj	LGloss=(zvr._zájmeno/částice)
5	spasit	spasit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	3	acl	3:acl	SpaceAfter=No
6	:	:	PUNCT	Z:-------------	_	7	punct	7:punct	_
7	porazit	porazit	VERB	Vf--------A----	Aspect=Perf|Polarity=Pos|VerbForm=Inf	3	appos	3:appos	_
8	Anglii	Anglie	PROPN	NNFS4-----A----	Case=Acc|Gender=Fem|NameType=Geo|Number=Sing|Polarity=Pos	7	obj	7:obj	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	Sní	snít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	LId=o-1
3	tom	ten	DET	PDZS6----------	Case=Loc|Gender=Masc,Neut|Number=Sing|PronType=Dem	1	obl:arg	1:obl:arg:o:loc	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	7	punct	7:punct	_
5	že	že	SCONJ	J,-------------	_	7	mark	7:mark	LId=že-1
6	kariéru	kariéra	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	7	obj	7:obj	_
7	ukončí	ukončit	VERB	VB-P---3P-AA---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl	3:acl:že	_
8	zde	zde	ADV	Db-------------	PronType=Dem	7	advmod	7:advmod	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 acl	color:blue
1	Svým	svůj	DET	P8ZS7----------	Case=Ins|Gender=Masc,Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	2	det	2:det	LId=svůj-1|LGloss=(přivlast.)
2	rozsahem	rozsah	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	3	obl	3:obl:ins	_
3	patří	patřit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	6	case	6:case	LId=k-1
5	nejrozsáhlejším	rozsáhlý	ADJ	AAFP3----3A----	Case=Dat|Degree=Sup|Gender=Fem|Number=Plur|Polarity=Pos	6	amod	6:amod	_
6	kulturám	kultura	NOUN	NNFP3-----A----	Case=Dat|Gender=Fem|Number=Plur|Polarity=Pos	3	obl:arg	3:obl:arg:k:dat	_
7	doby	doba	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	6	nmod	6:nmod:gen	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	12	punct	12:punct	_
9	ze	z	ADP	RV--2----------	AdpType=Voc|Case=Gen	10	case	10:case	LId=z-1
10	které	který	DET	P4FS2----------	Case=Gen|Gender=Fem|Number=Sing|PronType=Int,Rel	12	nmod	12:nmod:z:gen	_
11	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	12:cop	_
12	známo	známý	ADJ	ACNS------A----	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short	7	acl	7:acl	LId=známý-2|LGloss=(co_známe)
13	mnoho	mnoho	DET	Ca--1----------	Case=Nom|NumType=Card|PronType=Ind	14	det:numgov	14:det:numgov	LId=mnoho-1
14	nalezišť	naleziště	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur|Polarity=Pos	12	nsubj	12:nsubj	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


