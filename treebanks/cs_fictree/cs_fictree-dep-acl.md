---
layout: base
title:  'Statistics of acl in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="cs_fictree-dep-acl-relcl.html">acl:relcl</a></tt>.

445 nodes (0%) are attached to their parents as `acl`.

441 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.68539325842697.

The following 11 pairs of parts of speech are connected with `acl`: <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (217; 49% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (176; 40% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (18; 4% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (10; 2% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (8; 2% instances), <tt><a href="cs_fictree-pos-DET.html">DET</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (7; 2% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl	color:blue
1	Koukám	koukat	VERB	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	4:case	_
3	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	det	4:det	_
4	psaníčko	psaníčko	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	1	obl:arg	1:obl:arg:na:acc	_
5	a	a	CCONJ	J^-------------	_	6	cc	6:cc	_
6	mám	mít	VERB	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	0:root|1:conj	_
7	pocit	pocit	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	6	obj	6:obj	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
9	že	že	SCONJ	J,-------------	_	10	mark	10:mark	_
10	vím	vědět	VERB	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl	7:acl:že	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	16	punct	16:punct	_
12	co	co	PRON	PQ--1----------	Animacy=Inan|Case=Nom|PronType=Int,Rel	16	nsubj	16:nsubj	_
13	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	16	cop	16:cop	_
14	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	15	case	15:case	_
15	něm	on	PRON	P5NS6--3-------	Case=Loc|Gender=Neut|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs	16	obl	16:obl:v:loc	_
16	napsáno	napsaný	ADJ	VsNS------AP---	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	10	ccomp	10:ccomp	SpaceAfter=No
17	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl	color:blue
1	že	že	SCONJ	J,-------------	_	2	mark	2:mark	_
2	přišla	přijít	VERB	VpFS----R-AA---	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
3	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	4:case	_
4	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	2	obl:arg	2:obl:arg:na:acc	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
6	jak	jak	ADV	Db-------------	PronType=Int,Rel	8	advmod	8:advmod	_
7	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	expl:pv	8:expl:pv	_
8	zmocnit	zmocnit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	acl	4:acl	_
9	jejich	jeho	DET	PSFP2FP3-------	Case=Gen|Gender=Fem|Gender[psor]=Fem|Number=Plur|Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	10	det	10:det	_
10	zbraní	zbraň	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	8	obl:arg	8:obl:arg:gen	SpaceAfter=No
11	;	;	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl	color:blue
1	To	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	2:nsubj	_
2	není	být	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	4:case	_
4	tom	ten	DET	PDNS6----------	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	2	obl	2:obl:v:loc	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
6	že	že	SCONJ	J,-------------	_	8	mark	8:mark	_
7	není	být	AUX	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
8	hezká	hezký	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	acl	4:acl:že	_
9	a	a	CCONJ	J^-------------	_	10	cc	10:cc	_
10	má	mít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	4:acl:že|8:conj	_
11	už	už	ADV	Db-------------	_	10	advmod	10:advmod	_
12	leta	rok	NOUN	NNNP4-----A---6	Case=Acc|Gender=Neut|Number=Plur|Polarity=Pos|Style=Coll	10	obj	10:obj	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


