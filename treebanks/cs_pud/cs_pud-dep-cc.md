---
layout: base
title:  'Statistics of cc in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `cc`

This relation is universal.

653 nodes (4%) are attached to their parents as `cc`.

645 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.45788667687596.

The following 13 pairs of parts of speech are connected with `cc`: <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt> (233; 36% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt> (220; 34% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt> (84; 13% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt> (59; 9% instances), <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt> (13; 2% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (12; 2% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt> (11; 2% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (9; 1% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="cs_pud-pos-DET.html">DET</a></tt>-<tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="cs_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_pud-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 cc	color:blue
1	Lze	lze	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	tu	tu	ADV	Db-------------	PronType=Dem	1	advmod	1:advmod	_
3	najít	najít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	csubj	1:csubj	_
4	paralely	paralela	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	3	obj	3:obj	_
5	mezi	mezi	ADP	RR--7----------	AdpType=Prep|Case=Ins	6	case	6:case	LId=mezi-1
6	hrami	hra	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur|Polarity=Pos	4	nmod	4:nmod:mezi:ins	LGloss=(dětská;_v_divadle;...)
7	a	a	CCONJ	J^-------------	_	10	cc	10:cc	LId=a-1
8	naším	můj	DET	PSZS7-P1-------	Case=Ins|Gender=Masc,Neut|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	10	det	10:det	LGloss=(přivlast.)
9	každodenním	každodenní	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	10	amod	10:amod	_
10	životem	život	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	6	conj	4:nmod:mezi:ins|6:conj	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cc	color:blue
1	Co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	2	obj	7:ref	LId=co-1
2	říká	říkat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl:relcl	7:acl:relcl	_
3	a	a	CCONJ	J^-------------	_	5	cc	5:cc	LId=a-1
4	co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	5	obj	7:ref	LId=co-1
5	dělá	dělat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	2:conj|7:acl:relcl	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	2	punct	2:punct	_
7	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	8	nsubj	2:obj|5:obj|8:nsubj	_
8	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
9	–	-	PUNCT	Z:-------------	_	14	punct	14:punct	_
10	no	no	PART	TT-------------	_	14	discourse	14:discourse	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	14	punct	14:punct	_
12	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	14	cop	14:cop	_
13	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	14	nsubj	14:nsubj	_
14	neuvěřitelné	uvěřitelný	ADJ	AANS1----1N----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Neg	8	conj	0:root|8:conj	SpaceAfter=No|LDeriv=uvěřit
15	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Navíc	navíc	ADV	Db-------------	_	8	advmod	8:advmod	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	obj	8:obj	LGloss=(zvr._zájmeno/částice)
3	makedonská	makedonský	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	6:amod	_
4	a	a	CCONJ	J^-------------	_	5	cc	5:cc	LId=a-1
5	perská	perský	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	conj	3:conj|6:amod	_
6	elita	elita	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	8	nsubj	8:nsubj	_
7	hodně	hodně	ADV	Db-------------	_	8	advmod	8:advmod	LId=hodně-3|LGloss=(velmi)
8	promísily	promísit	VERB	VpTP---XR-AA---	Animacy=Inan|Aspect=Perf|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
9	sňatky	sňatek	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	8	obl	8:obl:ins	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


