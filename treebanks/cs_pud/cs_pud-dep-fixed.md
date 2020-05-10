---
layout: base
title:  'Statistics of fixed in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `fixed`

This relation is universal.

73 nodes (0%) are attached to their parents as `fixed`.

73 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.15068493150685.

The following 11 pairs of parts of speech are connected with `fixed`: <tt><a href="cs_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (31; 42% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (13; 18% instances), <tt><a href="cs_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pud-pos-ADP.html">ADP</a></tt> (11; 15% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-ADP.html">ADP</a></tt> (4; 5% instances), <tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (4; 5% instances), <tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (3; 4% instances), <tt><a href="cs_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pud-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 3% instances), <tt><a href="cs_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	Klášter	klášter	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	4	nsubj:pass	4:nsubj:pass	_
2	Disibodenberg	Disibodenberg	PROPN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|NameType=Geo|Number=Sing|Polarity=Pos	1	nmod	1:nmod:nom	_
3	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	aux:pass	4:aux:pass	_
4	rozpuštěn	rozpuštěný	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=rozpustit
5	a	a	CCONJ	J^-------------	_	9	cc	9:cc	LId=a-1
6	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	8:case	LId=v-1
7	důsledku	důsledek	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	6	fixed	6:fixed	_
8	reformace	reformace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	9	obl	9:obl:v_důsledek:gen	_
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
2	mobily	mobil	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	3	nsubj	3:nsubj	_
3	jsou	být	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	dnes	dnes	ADV	Db-------------	_	3	advmod	3:advmod	_
5	mnohem	mnohem	ADV	Db-------------	_	6	advmod	6:advmod	_
6	víc	hodně	ADV	Dg-------2A---1	Degree=Cmp|Polarity=Pos	8	advmod:emph	8:advmod:emph	LId=hodně-2
7	než	než	SCONJ	J,-------------	_	6	fixed	6:fixed	LId=než-2
8	telefony	telefon	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	3	obj	3:obj	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 fixed	color:blue
1	Divoch	divoch	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	xcomp	3:xcomp	_
2	mu	on	PRON	PHZS3--3-------	Case=Dat|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Variant=Short	3	obl:arg	3:obl:arg:dat	LId=on-1
3	neříkám	říkat	VERB	VB-S---1P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	jen	jen	PART	TT-------------	_	5	advmod:emph	5:advmod:emph	LId=jen-1
5	tak	tak	ADV	Db-------------	PronType=Dem	3	advmod	3:advmod	LId=tak-3
6	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	advmod	3:advmod	LId=pro-1
7	nic	nic	PRON	PW--4----------	Case=Acc|PronType=Neg	6	fixed	6:fixed	_
8	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	fixed	6:fixed	_
9	nic	nic	PRON	PW--4----------	Case=Acc|PronType=Neg	6	fixed	6:fixed	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


