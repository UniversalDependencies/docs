---
layout: base
title:  'Statistics of obl:prep in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `obl:prep`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="ga_idt-dep-obl-tmod.html">obl:tmod</a></tt>.

468 nodes (2%) are attached to their parents as `obl:prep`.

463 instances of `obl:prep` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.49358974358974.

The following 10 pairs of parts of speech are connected with `obl:prep`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (262; 56% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (144; 31% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (44; 9% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (7; 1% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:prep	color:blue
1	ART	Art	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
2	:	:	PUNCT	Punct	_	4	punct	_	_
3	Céard	cé	PRON	Q	PronType=Int	4	nsubj	_	_
4	tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
5	i	i	ADP	Simp	_	6	case	_	_
6	gceist	ceist	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	4	xcomp:pred	_	_
7	agat	ag	ADP	Prep	Number=Sing|Person=2	4	obl:prep	_	SpaceAfter=No
8	?	?	PUNCT	?	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obl:prep	color:blue
1	Níl	bí	VERB	VI	Mood=Ind|Polarity=Neg|Tense=Pres	0	root	_	_
2	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	3	det	_	_
3	fhios	fios	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	1	nsubj	_	_
4	agat	ag	ADP	Prep	Number=Sing|Person=2	1	obl:prep	_	_
5	cad	cad	DET	Det	PronType=Int	1	ccomp	_	_
6	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	8	nmod	_	_
7	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	éagóir	éagóir	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	5	xcomp:pred	_	_
9	orm	ar	ADP	Prep	Number=Sing|Person=1	8	obl:prep	_	_
10	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
11	mé	mé	PRON	Pers	Number=Sing|Person=1	13	obj	_	_
12	a	a	PART	Inf	PartType=Inf	13	mark	_	_
13	choimeád	coimeád	NOUN	Noun	Form=Len|VerbForm=Inf	5	xcomp	_	_
14	anseo	anseo	ADV	Loc	_	13	advmod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:prep	color:blue
1	B'	is	AUX	Cop	Form=VF|Tense=Past|VerbForm=Cop	2	cop	_	SpaceAfter=No
2	fhearr	maith	ADJ	Adj	Degree=Cmp,Sup	0	root	_	_
3	dúinn	do	ADP	Prep	Number=Plur|Person=1	2	obl:prep	_	_
4	imeacht	imeacht	NOUN	Noun	VerbForm=Inf	2	nsubj	_	_
5	isteach	isteach	ADV	Dir	_	4	advmod	_	_
6	a	a	PART	Voc	PartType=Voc	7	case:voc	_	_
7	Tom	Tom	PROPN	Noun	Case=Voc|Gender=Masc|Number=Sing	2	vocative	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


