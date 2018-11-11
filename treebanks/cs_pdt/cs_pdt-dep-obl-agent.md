---
layout: base
title:  'Statistics of obl:agent in UD_Czech-PDT'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDT: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="cs_pdt-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="cs_pdt-dep-obl-arg.html">obl:arg</a></tt>.

631 nodes (0%) are attached to their parents as `obl:agent`.

455 instances of `obl:agent` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.18541996830428.

The following 8 pairs of parts of speech are connected with `obl:agent`: <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (534; 85% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-NOUN.html">NOUN</a></tt> (31; 5% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-PROPN.html">PROPN</a></tt> (24; 4% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt> (17; 3% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (11; 2% instances), <tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdt-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="cs_pdt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdt-pos-PRON.html">PRON</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:agent	color:blue
1	Než	než	SCONJ	J,-------------	_	3	mark	3:mark	LId=než-2
2	bylo	být	AUX	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	aux:pass	3:aux:pass	_
3	zaváto	zavátý	ADJ	VsNS---XX-AP---	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	6	obl	6:obl	LDeriv=zavát
4	sněhem	sníh	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	3	obl:agent	3:obl:agent	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	3	punct	3:punct	_
6	vysušil	vysušit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
7	je	on	PRON	PPNS4--3-------	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	obj	6:obj	LId=on-1|LGloss=(oni/ono)
8	silný	silný	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	9	amod	9:amod	_
9	vítr	vítr	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj	6:nsubj	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:agent	color:blue
1	Jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
2	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	LId=v-1
3	podstatě	podstata	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	4	obl	4:obl	_
4	smluvní	smluvní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
6	řídí	řídit	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	0:root|4:conj	_
7	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pass	6:expl:pass	LGloss=(zvr._zájmeno/částice)
8	módou	móda	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	6	obl:agent	6:obl:agent	SpaceAfter=No|LGloss=(co_je_módní)
9	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
10	zabarvením	zabarvení	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	8	conj	6:obl:agent|8:conj	LDeriv=zabarvit
11	a	a	CCONJ	J^-------------	_	12	cc	12:cc	LId=a-1
12	podobně	podobně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	8	conj	6:obl:agent|8:conj	SpaceAfter=No|LDeriv=podobný
13	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl:agent	color:blue
1	Warrenova	Warrenův	ADJ	AUFS1M---------	Case=Nom|Gender=Fem|Gender[psor]=Masc|NameType=Sur|Number=Sing|Poss=Yes	2	amod	2:amod	LDeriv=Warren
2	šachta	šachta	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	4	nsubj:pass	4:nsubj:pass	_
3	byla	být	AUX	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	aux:pass	4:aux:pass	_
4	objevena	objevený	ADJ	VsQW---XX-AP---	Aspect=Perf|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=objevit
5	Charlesem	Charles	PROPN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	4	obl:agent	4:obl:agent	_
6	Warrenem	Warren	PROPN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|NameType=Geo,Sur|Number=Sing|Polarity=Pos	5	flat	5:flat	_
7	r	rok	NOUN	NNIXX-----A---8	Abbr=Yes|Animacy=Inan|Gender=Masc|Polarity=Pos	4	obl	4:obl	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	_
9	1867	1867	NUM	C=-------------	NumForm=Digit|NumType=Card	7	nummod	7:nummod	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


