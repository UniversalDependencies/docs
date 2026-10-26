---
layout: base
title:  'Statistics of advcl:pred in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `advcl:pred`

This relation is a language-specific subtype of <tt><a href="cs_cltt-dep-advcl.html">advcl</a></tt>.

70 nodes (0%) are attached to their parents as `advcl:pred`.

64 instances of `advcl:pred` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.6.

The following 11 pairs of parts of speech are connected with `advcl:pred`: <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (33; 47% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (17; 24% instances), <tt><a href="cs_cltt-pos-DET.html">DET</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (5; 7% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (4; 6% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (3; 4% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-PART.html">PART</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 advcl:pred	color:blue
1	(9)	(9)	PUNCT	Z:-------------	_	5	punct	5:punct	_
2	Účetní	účetní	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	3	amod	3:amod	LId=účetní-1
3	jednotky	jednotka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	5	nsubj	5:nsubj	_
4	jsou	být	AUX	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
5	povinny	povinný	ADJ	ACTP------A----	Animacy=Inan|Degree=Pos|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short	0	root	0:root	_
6	vést	vést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	5	xcomp	5:xcomp	LId=vést-1
7	jedno	jeden	NUM	ClNS4----------	Case=Acc|Gender=Neut|Number=Sing|NumForm=Word|NumType=Card	8	nummod	8:nummod	_
8	účetnictví	účetnictví	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	6	obj	6:obj	_
9	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	11	case	11:case	LId=za-1
10	účetní	účetní	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	11	amod	11:amod	LId=účetní-1
11	jednotku	jednotka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	6	obl	6:obl:za:acc	_
12	jako	jako	SCONJ	J,-------------	_	13	mark	13:mark	_
13	celek	celek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	11	advcl:pred	11:advcl:pred:jako	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 18 advcl:pred	color:blue
1	(1)	(1)	PUNCT	Z:-------------	_	12	punct	12:punct	_
2	Peněžní	peněžní	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	3	amod	3:amod	_
3	toky	tok	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	12	nsubj:pass	12:nsubj:pass	_
4	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	10	case	10:case	LId=z-1
5	provozních	provozní	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur	10	nmod	10:nmod:gen	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	7	punct	7:punct	_
7	investičních	investiční	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	5	conj	5:conj|10:nmod:gen	_
8	nebo	nebo	CCONJ	J^-------------	_	9	cc	9:cc	_
9	finančních	finanční	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	5	conj	5:conj|10:nmod:gen	_
10	činností	činnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur	3	nmod	3:nmod:z:gen	_
11	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	12	expl:pass	12:expl:pass	_
12	uvádějí	uvádět	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
13	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	14	case	14:case	LId=v-1
14	přehledu	přehled	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	12	obl	12:obl:v:loc	_
15	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	17	case	17:case	LId=o-1
16	peněžních	peněžní	ADJ	AAIP6----1A----	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	17	amod	17:amod	_
17	tocích	tok	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	14	nmod	14:nmod:o:loc	_
18	nekompenzované	kompenzovaný	ADJ	AAIP1----1N----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Neg	3	advcl:pred	3:advcl:pred	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	12	punct	12:punct	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 16 advcl:pred	color:blue
1	Účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	2:amod	LId=účetní-1
2	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	4:nsubj	_
3	dále	dále	ADV	Db------------1	_	4	advmod	4:advmod	LId=dále-3
4	uvede	uvést	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	informace	informace	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	4	obj	4:obj	_
6	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	7:case	LId=o-1
7	druzích	druh	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	5	nmod	5:nmod:o:loc	LId=druh-1
8	zvířat	zvíře	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	7	nmod	7:nmod:gen|12:nsubj:pass	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	12	punct	12:punct	_
10	která	který	DET	P4NP1----------	Case=Nom|Gender=Neut|Number=Plur|PronType=Int,Rel	12	nsubj:pass	8:ref	_
11	jsou	být	AUX	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux:pass	12:aux:pass	_
12	vykazována	vykazovaný	ADJ	VsQW---XX-AP---	Degree=Pos|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	8	acl:relcl	8:acl:relcl	LDeriv=vykazovat
13	jako	jako	SCONJ	J,-------------	_	16	mark	16:mark	_
14	dlouhodobý	dlouhodobý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	16	amod	16:amod	_
15	hmotný	hmotný	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	16	amod	16:amod	_
16	majetek	majetek	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	advcl:pred	10:advcl:pred:jako	_
17	a	a	CCONJ	J^-------------	_	18	cc	18:cc	LId=a-1
18	zásoby	zásoba	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	16	conj	10:advcl:pred:jako|16:conj	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


