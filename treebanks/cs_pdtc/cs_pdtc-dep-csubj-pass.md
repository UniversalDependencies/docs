---
layout: base
title:  'Statistics of csubj:pass in UD_Czech-PDTC'
udver: '2'
---

## Treebank Statistics: UD_Czech-PDTC: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="cs_pdtc-dep-csubj.html">csubj</a></tt>.

247 nodes (0%) are attached to their parents as `csubj:pass`.

236 instances of `csubj:pass` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.92712550607287.

The following 10 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt> (164; 66% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt> (38; 15% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (18; 7% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-NOUN.html">NOUN</a></tt> (14; 6% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="cs_pdtc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cs_pdtc-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pdtc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj:pass	color:blue
1	Doporučuje	doporučovat	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Functor=0:PRED
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	1:expl:pass	LGloss=(zvr._zájmeno/částice)
3	dokoupit	dokoupit	VERB	Vf--------A-P--	Aspect=Perf|Polarity=Pos|VerbForm=Inf	1	csubj:pass	1:csubj:pass	Functor=1:PAT
4	večeře	večeře	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	3	obj	3:obj	Functor=3:PAT
5	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	case	6:case	_
6	1500	1500	NUM	C=-------------	NumForm=Digit|NumType=Card	4	nummod	4:nummod	Functor=4:RSTR
7	Kč	Kč	NOUN	BNXXX-----A----	Abbr=Yes	6	nmod	6:nmod	LGloss=(koruna_česká)|Functor=6:EXT
8	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	9:case	Entity=(cmpr9415015e43--2-gstype:gen|LId=na-1
9	osobu	osoba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	6	nmod	6:nmod:na:acc	Entity=cmpr9415015e43)|Functor=6:REG|SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 csubj:pass	color:blue
1	Není	být	AUX	VB-S---3P-NAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	3:aux:pass	_
2	ovšem	ovšem	PART	TT-------------	_	3	advmod:emph	3:advmod:emph	Functor=3:PREC
3	vyloučeno	vyloučený	ADJ	VsNS----X-APP--	Aspect=Perf|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No|LDeriv=vyloučit|Functor=0:PRED
4	,	,	PUNCT	Z:-------------	_	11	punct	11:punct	_
5	že	že	SCONJ	J,-------------	_	11	mark	11:mark	LId=že-1
6	jiné	jiný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	7	amod	7:amod	Entity=(ln9420513e150--2|Functor=7:RSTR
7	společnosti	společnost	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	11	nsubj	11:nsubj	Entity=ln9420513e150)|Functor=11:ACT|LDeriv=společný
8	budou	být	AUX	VB-P---3F-AAI--	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	11	aux	11:aux	_
9	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	10	case	10:case	Entity=(ln9420513e4--2-gstype:gen|LId=z-1
10	lístku	lístek	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	11	obl	11:obl:z:gen	Entity=ln9420513e4)|Functor=11:DIR1
11	ubývat	ubývat	VERB	Vf--------A-I--	Aspect=Imp|Polarity=Pos|VerbForm=Inf	3	csubj:pass	3:csubj:pass	SpaceAfter=No|Functor=3:PAT
12	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 csubj:pass	color:blue
1	O	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	3:case	Bridge=cmpr9410049e104<cmpr9410049e103:subset|Entity=(cmpr9410049e103--3-gstype:gen|LId=o-1
2	centrální	centrální	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	3:amod	Functor=3:RSTR
3	výrobě	výroba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	6	obl:arg	6:obl:arg:o:loc	Functor=6:PAT
4	tepla	teplo	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	3	nmod	3:nmod:gen	Entity=(cmpr9410049e3--1-gstype:gen)cmpr9410049e103)|Functor=3:PAT|LId=teplo-1
5	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	6	expl:pass	6:expl:pass	LGloss=(zvr._zájmeno/částice)
6	říká	říkat	VERB	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No|Functor=0:PRED
7	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
8	že	že	SCONJ	J,-------------	_	10	mark	10:mark	LId=že-1
9	je	být	AUX	VB-S---3P-AAI--	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	10:cop	Functor=10:EFF
10	nejefektivnější	efektivní	ADJ	AAFS1----3A----	Case=Nom|Degree=Sup|Gender=Fem|Number=Sing|Polarity=Pos	6	csubj:pass	6:csubj:pass	SpaceAfter=No|Functor=6:PAT
11	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


