---
layout: base
title:  'Statistics of nsubj:pass in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="cs_cltt-dep-nsubj.html">nsubj</a></tt>.

372 nodes (1%) are attached to their parents as `nsubj:pass`.

219 instances of `nsubj:pass` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.0994623655914.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (291; 78% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (48; 13% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (21; 6% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (8; 2% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nsubj:pass	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	8	punct	8:punct	_
2	Při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	4:case	LId=při-1
3	průběžné	průběžný	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	4:amod	_
4	inventarizaci	inventarizace	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	8	obl	8:obl:při:loc	_
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	8	expl:pass	8:expl:pass	_
6	odstavec	odstavec	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	nsubj:pass	8:nsubj:pass	_
7	4	4	NUM	C}-------------	NumForm=Roman|NumType=Card	6	nummod	6:nummod	_
8	použije	použít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
9	obdobně	obdobně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	8	advmod	8:advmod	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 nsubj:pass	color:blue
1	Do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	2	case	2:case	LId=do-1
2	nákladů	náklad	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	obl	6:obl:do:gen	_
3	nebo	nebo	CCONJ	J^-------------	_	4	cc	4:cc	_
4	výnosů	výnos	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	2	conj	2:conj|6:obl:do:gen	_
5	jsou	být	AUX	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux:pass	6:aux:pass	_
6	zaúčtovány	zaúčtovaný	ADJ	VsTP---XX-AP---	Animacy=Inan|Degree=Pos|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	LDeriv=zaúčtovat
7	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	9	case	9:case	LId=v-1
8	stejných	stejný	ADJ	AANP6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	9	amod	9:amod	_
9	obdobích	období	NOUN	NNNP6-----A----	Case=Loc|Gender=Neut|Number=Plur	6	obl	6:obl:v:loc	SpaceAfter=No
10	,	,	PUNCT	Z:-------------	_	13	punct	13:punct	_
11	kdy	kdy	ADV	Db-------------	PronType=Int,Rel	13	advmod	13:advmod	_
12	jsou	být	AUX	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	13	aux:pass	13:aux:pass	_
13	zaúčtovány	zaúčtovaný	ADJ	VsTP---XX-AP---	Animacy=Inan|Degree=Pos|Gender=Fem,Masc|Number=Plur|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	9	amod	9:amod	LDeriv=zaúčtovat
14	náklady	náklad	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	13	nsubj:pass	13:nsubj:pass	_
15	nebo	nebo	CCONJ	J^-------------	_	16	cc	16:cc	_
16	výnosy	výnos	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	14	conj	13:nsubj:pass|14:conj	_
17	spojené	spojený	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	14	amod	14:amod|16:amod	_
18	se	s	ADP	RV--7----------	AdpType=Voc|Case=Ins	20	case	20:case	LId=s-1
19	zajišťovanými	zajišťovaný	ADJ	AAFP7----1A----	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	20	amod	20:amod	_
20	položkami	položka	NOUN	NNFP7-----A----	Case=Ins|Gender=Fem|Number=Plur	17	obl:arg	17:obl:arg:s:ins	SpaceAfter=No
21	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 nsubj:pass	color:blue
1	Účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	2:amod	LId=účetní-1
2	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	4:nsubj	_
3	dále	dále	ADV	Db------------1	_	4	advmod	4:advmod	LId=dále-3
4	uvede	uvést	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	informace	informace	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	4	obj	4:obj	_
6	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	7	case	7:case	LId=o-1
7	druzích	druh	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	5	nmod	5:nmod:o:loc	LId=druh-1
8	zvířat	zvíře	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	7	nmod	7:nmod:gen	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	12	punct	12:punct	_
10	která	který	DET	P4NP1----------	Case=Nom|Gender=Neut|Number=Plur|PronType=Int,Rel	12	nsubj:pass	12:nsubj:pass	_
11	jsou	být	AUX	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux:pass	12:aux:pass	_
12	vykazována	vykazovaný	ADJ	VsQW---XX-AP---	Degree=Pos|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	8	amod	8:amod	LDeriv=vykazovat
13	jako	jako	SCONJ	J,-------------	_	16	mark	16:mark|18:mark	_
14	dlouhodobý	dlouhodobý	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	16	amod	16:amod	_
15	hmotný	hmotný	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	16	amod	16:amod	_
16	majetek	majetek	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	xcomp	10:xcomp	_
17	a	a	CCONJ	J^-------------	_	18	cc	18:cc	LId=a-1
18	zásoby	zásoba	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	16	conj	10:xcomp|16:conj	SpaceAfter=No
19	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


