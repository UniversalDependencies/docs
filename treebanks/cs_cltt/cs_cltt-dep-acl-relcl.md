---
layout: base
title:  'Statistics of acl:relcl in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="cs_cltt-dep-acl.html">acl</a></tt>.

481 nodes (1%) are attached to their parents as `acl:relcl`.

481 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.77962577962578.

The following 9 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (345; 72% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (60; 12% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (59; 12% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl:relcl	color:blue
1	Výrobou	výroba	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	3	obl:arg	3:obl:arg:ins	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pass	3:expl:pass	_
3	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	i	i	CCONJ	J^-------------	_	6	advmod:emph	6:advmod:emph	LId=i-1
5	jiná	jiný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	6:amod	_
6	činnost	činnost	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj:pass	3:nsubj:pass|10:obl:při:loc	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
8	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	9:case	LId=při-1
9	které	který	DET	P4FS6----------	Case=Loc|Gender=Fem|Number=Sing|PronType=Int,Rel	10	obl	6:ref	_
10	nevznikají	vznikat	VERB	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl:relcl	6:acl:relcl	_
11	hmotné	hmotný	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	12	amod	12:amod	_
12	produkty	produkt	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	10	nsubj	10:nsubj	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl:relcl	color:blue
1	Účetním	účetní	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	2:amod	LId=účetní-1
2	záznamem	záznam	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	4	obl:arg	4:obl:arg:ins	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pass	4:expl:pass	_
4	rozumí	rozumět	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	data	datum	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos	4	nsubj:pass	4:nsubj:pass|9:nsubj	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
7	která	který	DET	P4NP1----------	Case=Nom|Gender=Neut|Number=Plur|PronType=Int,Rel	9	nsubj	5:ref	_
8	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
9	záznamem	záznam	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	5	acl:relcl	5:acl:relcl	_
10	veškerých	veškerý	PRON	PLXP2----------	Case=Gen|Number=Plur|PronType=Tot	11	nmod	11:nmod:gen	_
11	skutečností	skutečnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	9	nmod	9:nmod:gen	_
12	týkajících	týkající	ADJ	AGFP2-----A----	Aspect=Imp|Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	11	amod	11:amod	_
13	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	12	expl:pv	12:expl:pv	_
14	vedení	vedení	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	12	obl:arg	12:obl:arg:gen	_
15	účetnictví	účetnictví	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing|Polarity=Pos	14	nmod	14:nmod:gen	SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 acl:relcl	color:blue
1	Tyto	tento	DET	PDFP1----------	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	2	det	2:det	_
2	povinnosti	povinnost	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	3	obj	3:obj	_
3	mají	mít	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	5	amod	5:amod	LId=účetní-1
5	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	3	nsubj	3:nsubj	_
6	po	po	ADP	RR--4----------	AdpType=Prep|Case=Acc	7	case	7:case	LId=po-1
7	dobu	doba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	3	obl	3:obl:po:acc|12:obl:po:acc	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	12	punct	12:punct	_
9	po	po	ADP	RR--4----------	AdpType=Prep|Case=Acc	10	case	10:case	LId=po-1
10	kterou	který	DET	P4FS4----------	Case=Acc|Gender=Fem|Number=Sing|PronType=Int,Rel	12	obl	7:ref	_
11	jsou	být	AUX	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	12:cop	_
12	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short	7	acl:relcl	7:acl:relcl	_
13	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	12	xcomp	12:xcomp	LId=vést-1
14	nebo	nebo	CCONJ	J^-------------	_	15	cc	15:cc	_
15	uschovávat	uschovávat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	13	conj	12:xcomp|13:conj	_
16	uvedené	uvedený	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	18	amod	18:amod	_
17	účetní	účetní	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	18	amod	18:amod	LId=účetní-1
18	záznamy	záznam	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	13	obj	13:obj|15:obj	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


