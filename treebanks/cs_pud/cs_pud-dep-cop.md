---
layout: base
title:  'Statistics of cop in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `cop`

This relation is universal.

345 nodes (2%) are attached to their parents as `cop`.

293 instances of `cop` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25507246376812.

The following 7 pairs of parts of speech are connected with `cop`: <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (149; 43% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (146; 42% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (22; 6% instances), <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (9; 3% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (8; 2% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (7; 2% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (4; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 cop	color:blue
1	Co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	2	obj	7:ref	LId=co-1
2	říká	říkat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl:relcl	7:acl:relcl	_
3	a	a	CCONJ	J^-------------	_	5	cc	5:cc	LId=a-1
4	co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	5	obj	7:ref	LId=co-1
5	dělá	dělat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	2:conj|7:acl:relcl	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	2	punct	2:punct	_
7	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	8	nsubj	2:obj|5:obj|8:nsubj	_
8	je	být	AUX	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
9	–	-	PUNCT	Z:-------------	_	14	punct	14:punct	_
10	no	no	PART	TT-------------	_	14	discourse	14:discourse	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	14	punct	14:punct	_
12	je	být	AUX	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	cop	14:cop	_
13	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	14	nsubj	14:nsubj	_
14	neuvěřitelné	uvěřitelný	ADJ	AANS1----1N----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Neg	8	conj	0:root|8:conj	SpaceAfter=No|LDeriv=uvěřit
15	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 cop	color:blue
1	Občas	občas	ADV	Db-------------	_	6	advmod	6:advmod	_
2	je	být	AUX	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
3	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	6:nsubj	_
4	jako	jako	SCONJ	J,-------------	_	6	mark	6:mark	LId=jako-1
5	nadpřirozená	nadpřirozený	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	6:amod	_
6	schopnost	schopnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No|LDeriv=schopný
7	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Naše	můj	DET	PSIP1-P1-------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	2	det	2:det	LGloss=(přivlast.)
2	mobily	mobil	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	3:nsubj	_
3	jsou	být	AUX	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	0:root	_
4	dnes	dnes	ADV	Db-------------	_	0	root	3:advmod	_
5	mnohem	mnohem	ADV	Db-------------	_	6	advmod	6:advmod	_
6	víc	hodně	ADV	Dg-------2A---1	Degree=Cmp|Polarity=Pos	8	advmod:emph	8:advmod:emph	LId=hodně-2
7	než	než	SCONJ	J,-------------	_	6	fixed	6:fixed	LId=než-2
8	telefony	telefon	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	4	obj	3:obj	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	4	punct	3:punct	_

~~~


