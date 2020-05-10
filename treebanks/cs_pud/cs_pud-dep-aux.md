---
layout: base
title:  'Statistics of aux in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="cs_pud-dep-aux-pass.html">aux:pass</a></tt>.

153 nodes (1%) are attached to their parents as `aux`.

141 instances of `aux` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.18954248366013.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (138; 90% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (9; 6% instances), <tt><a href="cs_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="cs_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="cs_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_pud-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 aux	color:blue
1	Bylo	být	VERB	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
2	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	1	nsubj	1:nsubj	_
3	jako	jako	SCONJ	J,-------------	_	8	mark	8:mark	LId=jako-1
4	když	když	SCONJ	J,-------------	_	8	mark	8:mark	_
5	by	být	AUX	Vc-------------	Mood=Cnd|Person=3|VerbForm=Fin	8	aux	8:aux	_
6	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	7	case	7:case	LId=s-1
7	míčem	míč	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	8	obl	8:obl:s:ins	_
8	hrál	hrát	VERB	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	advcl	1:advcl:jako_když	_
9	skořápky	skořápka	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos	8	obj	8:obj	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 aux	color:blue
1	Velká	velký	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	3:amod	_
2	nadmořská	nadmořský	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	3:amod	_
3	výška	výška	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	4	nsubj	4:nsubj	_
4	ochlazuje	ochlazovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	vzduch	vzduch	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	4:obj|12:nsubj	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	12	punct	12:punct	_
7	který	který	DET	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	12	nsubj	5:ref	_
8	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	12	aux	12:aux	_
9	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	12	cop	12:cop	_
10	jinak	jinak	ADV	Db-------------	_	12	advmod	12:advmod	_
11	velice	velice	ADV	Db-------------	_	12	advmod	12:advmod	_
12	horký	horký	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	5	acl:relcl	5:acl:relcl	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Pokud	pokud	SCONJ	J,-------------	_	4	mark	4:mark	_
2	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	4	aux	4:aux	_
3	tomu	ten	DET	PDZS3----------	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Dem	4	obl:arg	4:obl:arg:dat	_
4	tak	tak	ADV	Db-------------	PronType=Dem	12	advcl	12:advcl:pokud	LId=tak-3
5	bylo	být	AUX	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	4	cop	4:cop	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	4	punct	4:punct	_
7	prémiové	prémiový	ADJ	AAIP4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	8	amod	8:amod	_
8	dluhopisy	dluhopis	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	12	nsubj	12:nsubj	_
9	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	12	aux	12:aux	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	12	expl:pv	12:expl:pv	LGloss=(zvr._zájmeno/částice)
11	ničím	nic	PRON	PW--7----------	Case=Ins|PronType=Neg	12	obl	12:obl:ins	_
12	nelišily	lišit	VERB	VpTP---XR-NA---	Animacy=Inan|Aspect=Imp|Gender=Fem,Masc|Number=Plur|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
13	od	od	ADP	RR--2----------	AdpType=Prep|Case=Gen	16	case	16:case	LId=od-1
14	běžných	běžný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	16	amod	16:amod	_
15	spořicích	spořicí	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	16	amod	16:amod	LGloss=(^IC*2t)
16	účtů	účet	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	12	obl:arg	12:obl:arg:od:gen	SpaceAfter=No
17	.	.	PUNCT	Z:-------------	_	12	punct	12:punct	_

~~~


