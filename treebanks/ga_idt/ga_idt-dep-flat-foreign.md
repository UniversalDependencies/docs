---
layout: base
title:  'Statistics of flat:foreign in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="ga_idt-dep-flat-name.html">flat:name</a></tt>.

283 nodes (0%) are attached to their parents as `flat:foreign`.

283 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.84805653710247.

The following 17 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (190; 67% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (49; 17% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (6; 2% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (5; 2% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (5; 2% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	Treasure	Treasure	X	Foreign	Foreign=Yes	0	root	_	_
2	Island	Island	X	Foreign	Foreign=Yes	1	flat:foreign	_	_
3	Uncut	Uncut	X	Foreign	Foreign=Yes	1	flat:foreign	_	_
4	ar	ar	ADP	Simp	_	5	case	_	_
5	Network	Network	X	Foreign	Foreign=Yes	1	nmod	_	NamedEntity=Yes
6	2	2	NUM	Num	_	5	flat	_	NamedEntity=Yes
7	Dé	Dé	PROPN	Subst	Definite=Def|Number=Sing	1	nmod	_	NamedEntity=Yes
8	Luain	Luan	PROPN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	nmod	_	NamedEntity=Yes
9	ag	ag	ADP	Simp	_	10	case	_	_
10	10.30	10.30	NUM	Num	_	1	nmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:foreign	color:blue
1	Níor	níor	PART	Vb	PartType=Vb|Polarity=Neg|Tense=Past	2	advmod	_	_
2	rith	rith	VERB	VTI	Mood=Ind|Polarity=Neg|Tense=Past	0	root	_	_
3	Storm	Storm	PROPN	Noun	Foreign=Yes|Number=Sing	2	nsubj	_	NamedEntity=Yes
4	Alert	Alert	PROPN	Noun	Foreign=Yes|Number=Sing	3	flat:foreign	_	NamedEntity=Yes
5	ag	ag	ADP	Simp	_	6	case	_	_
6	Ascot	Ascot	PROPN	Noun	Definite=Def|Number=Sing	2	obl	_	_
7	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	tseachain	seachtain	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing|Typo=Yes	2	obl:tmod	_	_
9	seo	seo	DET	Det	PronType=Dem	8	det	_	_
10	caite	caite	ADJ	Adj	VerbForm=Part	9	fixed	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 44	bgColor:blue
# visual-style 44	fgColor:white
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 38 44 flat:foreign	color:blue
1	Luath	luath	ADJ	Adj	Degree=Pos	5	advmod	_	_
2	nó	nó	CCONJ	Coord	_	3	cc	_	_
3	mall	mall	ADJ	Adj	Degree=Pos	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	1	punct	_	_
5	tabharfaidh	tabhair	VERB	VTI	Mood=Ind|Tense=Fut	0	root	_	_
6	RTÉ	RTÉ	PROPN	Abr	Abbr=Yes	5	nsubj	_	_
7	agus	agus	CCONJ	Coord	_	10	cc	_	_
8	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	10	det	_	_
9	'	'	PUNCT	Punct	_	10	punct	_	SpaceAfter=No
10	National	National	PROPN	Foreign	Foreign=Yes	6	conj	_	SpaceAfter=No
11	'	'	PUNCT	Punct	_	10	punct	_	_
12	Union	Union	PROPN	Foreign	Foreign=Yes	10	flat:foreign	_	_
13	of	of	NOUN	Foreign	Foreign=Yes	10	flat:foreign	_	_
14	Journalists	Journalists	PROPN	Foreign	Foreign=Yes	10	flat:foreign	_	_
15	oiread	oiread	NOUN	Subst	Case=NomAcc|Number=Sing	5	obj	_	_
16	airde	aird	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	15	nmod	_	_
17	ar	ar	ADP	Simp	_	19	case	_	_
18	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	19	det	_	_
19	difríocht	difríocht	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	5	obl	_	_
20	idir	idir	ADP	Simp	_	21	case	_	_
21	Dún	dún	PROPN	Noun	Definite=Def|Gender=Masc|Number=Sing	15	nmod	_	NamedEntity=Yes
22	Éideann	Éideann	PROPN	Noun	Definite=Def|Gender=Fem|Number=Sing	21	nmod	_	NamedEntity=Yes
23	agus	agus	CCONJ	Coord	_	24	cc	_	_
24	Londain	Londain	PROPN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	21	conj	_	_
25	agus	agus	CCONJ	Coord	_	27	cc	_	_
26	a	a	PART	Vb	Form=Direct|PartType=Vb|PronType=Rel	27	obj	_	_
27	thugann	tabhair	VERB	VTI	Form=Len|Mood=Ind|Tense=Pres	5	conj	_	_
28	siad	siad	PRON	Pers	Number=Plur|Person=3	27	nsubj	_	_
29	do	do	ADP	Simp	_	30	case	_	_
30	Bhaile	Baile	PROPN	Noun	Case=Gen|Definite=Def|Form=Len|Gender=Masc|Number=Sing	27	obl	_	NamedEntity=Yes
31	Átha	Átha	PROPN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	30	nmod	_	NamedEntity=Yes
32	Cliath	Cliath	PROPN	Noun	Case=Gen|Definite=Def|Gender=Fem|NounType=Weak|Number=Plur	31	nmod	_	NamedEntity=Yes
33	agus	agus	CCONJ	Coord	_	34	cc	_	_
34	Béal	Béal	PROPN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	30	conj	_	NamedEntity=Yes
35	Feirste	Feirste	PROPN	Noun	Definite=Def|Gender=Masc|Number=Sing	34	nmod	_	NamedEntity=Yes|SpaceAfter=No
36	,	,	PUNCT	Punct	_	38	punct	_	_
37	'	'	PUNCT	Punct	_	38	punct	_	SpaceAfter=No
38	in	i	ADP	Simp	_	5	parataxis	_	_
39	the	the	X	Foreign	Foreign=Yes	38	flat:foreign	_	_
40	two	two	X	Foreign	Foreign=Yes	38	flat:foreign	_	_
41	parts	parts	X	Foreign	Foreign=Yes	38	flat:foreign	_	_
42	of	of	X	Foreign	Foreign=Yes	38	flat:foreign	_	_
43	this	this	X	Foreign	Foreign=Yes	38	flat:foreign	_	_
44	island	island	X	Foreign	Foreign=Yes	38	flat:foreign	_	SpaceAfter=No
45	'	'	PUNCT	Punct	_	38	punct	_	SpaceAfter=No
46	.	.	PUNCT	.	_	5	punct	_	_

~~~


