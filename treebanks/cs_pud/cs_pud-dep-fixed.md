---
layout: base
title:  'Statistics of fixed in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `fixed`

This relation is universal.

66 nodes (0%) are attached to their parents as `fixed`.

66 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.10606060606061.

The following 7 pairs of parts of speech are connected with `fixed`: <tt><a href="cs_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (31; 47% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (12; 18% instances), <tt><a href="cs_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pud-pos-ADP.html">ADP</a></tt> (10; 15% instances), <tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_pud-pos-PART.html">PART</a></tt> (6; 9% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-ADP.html">ADP</a></tt> (4; 6% instances), <tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 3% instances), <tt><a href="cs_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	Klášter	klášter	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj:pass	4:nsubj:pass	_
2	Disibodenberg	Disibodenberg	PROPN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|NameType=Geo|Number=Sing	1	nmod	1:nmod:nom	_
3	byl	být	AUX	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	aux:pass	4:aux:pass	_
4	rozpuštěn	rozpuštěný	ADJ	VsYS---XX-AP---	Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=rozpustit
5	a	a	CCONJ	J^-------------	_	9	cc	9:cc	LId=a-1
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc|ExtPos=ADP	8	case	8:case	LId=v-1
7	důsledku	důsledek	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	fixed	6:fixed	_
8	reformace	reformace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	9	obl	9:obl:v_důsledku:gen	_
9	chátral	chátrat	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	conj	0:root|4:conj	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	Naše	můj	DET	PSIP1-P1-------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	2	det	2:det	LGloss=(přivlast.)
2	mobily	mobil	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	3:nsubj	_
3	jsou	být	AUX	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	0:root	_
4	dnes	dnes	ADV	Db-------------	_	0	root	3:advmod	_
5	mnohem	mnohem	ADV	Db-------------	_	6	advmod	6:advmod	_
6	víc	více	ADV	Dg-------2A---1	Degree=Cmp|ExtPos=ADV|Polarity=Pos	8	advmod	8:advmod	LId=hodně-2
7	než	než	SCONJ	J,-------------	_	6	fixed	6:fixed	LId=než-2
8	telefony	telefon	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	4	obj	3:obj	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	4	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 fixed	color:blue
1	Na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc|ExtPos=ADP	4	case	4:case	LId=na-1
2	rozdíl	rozdíl	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	fixed	1:fixed	_
3	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	1	fixed	1:fixed	LId=od-1
4	toho	ten	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	14	obl	14:obl:na_rozdíl_od:gen	_
5	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	8:case	LId=z-1
6	28	28	NUM	C=-------------	NumForm=Digit|NumType=Card	8	nummod	8:nummod	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_
8	října	říjen	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	4:nmod:z:gen	_
9	byl	být	AUX	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	14	aux:pass	14:aux:pass	_
10	dopis	dopis	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	14	nsubj:pass	14:nsubj:pass	_
11	pana	pan	NOUN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	12	nmod	12:nmod:gen	LGloss=(oslovení)
12	Comeyho	Comey	PROPN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	10	nmod	10:nmod:gen	_
13	stěží	stěží	ADV	Db-------------	_	14	advmod	14:advmod	_
14	okomentován	okomentovaný	ADJ	VsYS---XX-AP---	Aspect=Perf|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No|LDeriv=okomentovat
15	.	.	PUNCT	Z:-------------	_	14	punct	14:punct	_

~~~


