---
layout: base
title:  'Statistics of expl:pv in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `expl:pv`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="cs_pdtc-dep-expl-pass.html">expl:pass</a></tt>.

9201 nodes (1%) are attached to their parents as `expl:pv`.

7178 instances of `expl:pv` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.18932724703837.

The following 4 pairs of parts of speech are connected with `expl:pv`: <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (8854; 96% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (327; 4% instances), <tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (19; 0% instances), <tt><a href="cs_pdtc-pos-DET.html">DET</a></tt>-<tt><a href="cs_pdtc-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl:pv	color:blue
1	Zdá	zdát	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	1:expl:pv	LGloss=(zvr._zájmeno/částice)
3	vám	vy	PRON	PP-P3--2-------	Case=Dat|Number=Plur|Person=2|PronType=Prs	1	obl:arg	1:obl:arg:dat	Entity=(cmpr9410009e1--1-gstype:gen)|Functor=1:ACT|SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
5	že	že	SCONJ	J,-------------	_	8	mark	8:mark	LId=že-1
6	finanční	finanční	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	7	amod	7:amod	Functor=7:RSTR
7	úřad	úřad	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	nsubj	8:nsubj	Functor=8:ACT
8	nepostupoval	postupovat	VERB	VpYS----R-NAI--	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	1	csubj	1:csubj	Functor=1:PAT
9	správně	správně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	8	advmod	8:advmod	SpaceAfter=No|LDeriv=správný|Functor=8:MANN
10	?	?	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 expl:pv	color:blue
1	Shrnuje	shrnovat	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
2	změny	změna	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	1	obj	1:obj	Functor=1:PAT
3	,	,	PUNCT	Z:-------------	_	4	punct	4:punct	_
4	problémy	problém	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	2	conj	1:obj|2:conj	Functor=2:PAT
5	a	a	CCONJ	J^-------------	_	6	cc	6:cc	LId=a-1|Functor=6:CONJ
6	problémy	problém	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	2	conj	1:obj|2:conj	Functor=2:PAT
7	týkající	týkající	ADJ	AGIP4-----A----	Animacy=Inan|Aspect=Imp|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	6	amod	6:amod	LDeriv=týkat|Functor=6:RSTR
8	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pv	7:expl:pv	LGloss=(zvr._zájmeno/částice)
9	kvality	kvalita	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	7	obl:arg	7:obl:arg:gen	Functor=7:PAT
10	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 expl:pv	color:blue
1	Na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	Entity=(pdtsc_ju_027.05e96--3-gstype:spec|LId=na-1
2	té	ten	DET	PDFS6----------	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	3	det	3:det	Functor=3:RSTR
3	svatbě	svatba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	0	root	0:root	Entity=pdtsc_ju_027.05e96)|Functor=0:LOC
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pv	3:expl:pv	LGloss=(zvr._zájmeno/částice)
5	můj	můj	DET	PSYS1-S1-------	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	3	dep	3:dep	Entity=(pdtsc_ju_027.05e1--1-gstype:spec)|Functor=3:RSTR
6	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_
7	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_
8	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


