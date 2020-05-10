---
layout: base
title:  'Statistics of discourse in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `discourse`

This relation is universal.

7 nodes (0%) are attached to their parents as `discourse`.

7 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.14285714285714.

The following 5 pairs of parts of speech are connected with `discourse`: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-ADV.html">ADV</a></tt> (2; 29% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-PART.html">PART</a></tt> (2; 29% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-PART.html">PART</a></tt> (1; 14% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 discourse	color:blue
1	„	"	PUNCT	Z:-------------	_	4	punct	4:punct	SpaceAfter=No
2	Naštěstí	naštěstí	ADV	Db-------------	_	4	advmod	4:advmod	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pv	4:expl:pv	LGloss=(zvr._zájmeno/částice)
4	ozval	ozvat	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	23	ccomp	23:ccomp	_
5	někdo	někdo	PRON	PZM-1----------	Animacy=Anim|Case=Nom|Gender=Masc|PronType=Ind	4	nsubj	4:nsubj	_
6	ze	z	ADP	RV--2----------	AdpType=Voc|Case=Gen	7	case	7:case	LId=z-1
7	Sony	Sony	PROPN	NNFXX-----A----	Abbr=Yes|Gender=Fem|NameType=Com|Polarity=Pos	5	nmod	5:nmod:z	_
8	Australia	Austrálie	PROPN	NNFXX-----A----	Foreign=Yes|Gender=Fem|NameType=Geo|Polarity=Pos|Style=Rare	7	flat	7:flat	_
9	a	a	CCONJ	J^-------------	_	10	cc	10:cc	LId=a-1
10	řekl	říci	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	conj	4:conj|23:ccomp	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	15	punct	15:punct	_
12	'	'	PUNCT	Z:-------------	_	15	punct	15:punct	SpaceAfter=No
13	Mimochodem	mimochodem	ADV	Db-------------	_	15	discourse	15:discourse	SpaceAfter=No
14	,	,	PUNCT	Z:-------------	_	13	punct	13:punct	_
15	všimli	všimnout	VERB	VpMP---XR-AA--1	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	10	ccomp	10:ccomp	_
16	jste	být	AUX	VB-P---2P-AA---	Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	15	aux	15:aux	_
17	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	15	expl:pv	15:expl:pv	LGloss=(zvr._zájmeno/částice)
18	tohohle	tenhle	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	15	obl:arg	15:obl:arg:gen	SpaceAfter=No
19	?	?	PUNCT	Z:-------------	_	15	punct	15:punct	SpaceAfter=No
20	'	'	PUNCT	Z:-------------	_	15	punct	15:punct	SpaceAfter=No
21	“	"	PUNCT	Z:-------------	_	4	punct	4:punct	SpaceAfter=No
22	,	,	PUNCT	Z:-------------	_	4	punct	4:punct	_
23	říká	říkat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
24	Pall	Pall	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	23	nsubj	23:nsubj	SpaceAfter=No
25	.	.	PUNCT	Z:-------------	_	23	punct	23:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 discourse	color:blue
1	Koneckonců	koneckonců	PART	TT-------------	_	7	discourse	7:discourse	_
2	naše	můj	DET	PSIP1-P1-------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	3	det	3:det	LGloss=(přivlast.)
3	výsledky	výsledek	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	7	nsubj:pass	7:nsubj:pass	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pass	7:expl:pass	LGloss=(zvr._zájmeno/částice)
5	jen	jen	PART	TT-------------	_	6	advmod:emph	6:advmod:emph	LId=jen-1
6	málokdy	málokdy	ADV	Db-------------	PronType=Ind	7	advmod	7:advmod	_
7	měří	měřit	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	9:case	LId=podle-2
9	toho	ten	DET	PDZS2----------	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Dem	7	obl	7:obl:podle:gen	SpaceAfter=No
10	,	,	PUNCT	Z:-------------	_	13	punct	13:punct	_
11	jak	jak	ADV	Db-------------	PronType=Int,Rel	13	advmod	13:advmod	LId=jak-3
12	jsme	být	AUX	VB-P---1P-AA---	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	13:cop	_
13	zabezpečeni	zabezpečený	ADJ	VsMP---XX-AP---	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	9	acl	9:acl	LDeriv=zabezpečit
14	a	a	CCONJ	J^-------------	_	18	cc	18:cc	LId=a-1
15	kolika	kolik	DET	C?--7----------	Case=Ins|NumType=Card|PronType=Int,Rel	16	det:nummod	16:det:nummod	_
16	pravidly	pravidlo	NOUN	NNNP7-----A----	Case=Ins|Gender=Neut|Number=Plur|Polarity=Pos	18	obl:arg	18:obl:arg:ins	_
17	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	18	expl:pv	18:expl:pv	LGloss=(zvr._zájmeno/částice)
18	řídíme	řídit	VERB	VB-P---1P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	13	conj	9:acl|13:conj	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 10 discourse	color:blue
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


