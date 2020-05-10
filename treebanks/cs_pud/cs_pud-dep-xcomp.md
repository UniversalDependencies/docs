---
layout: base
title:  'Statistics of xcomp in UD_Czech-PUD'
udver: '2'
---

## Treebank Statistics: UD_Czech-PUD: Relations: `xcomp`

This relation is universal.

249 nodes (1%) are attached to their parents as `xcomp`.

243 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.14859437751004.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (172; 69% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (42; 17% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt> (19; 8% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-VERB.html">VERB</a></tt> (9; 4% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="cs_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	Ne	ne	PART	TT-------------	_	2	advmod:emph	2:advmod:emph	_
2	každý	každý	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	nsubj	6:nsubj|7:nsubj	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pv	7:expl:pv	LGloss=(zvr._zájmeno/částice)
4	nad	nad	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	5:case	LId=nad-1
5	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	7	obl:arg	7:obl:arg:nad:acc	_
6	dokáže	dokázat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	povznést	povznést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	xcomp	6:xcomp	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 xcomp	color:blue
1	Divoch	divoch	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	xcomp	3:xcomp	_
2	mu	on	PRON	PHZS3--3-------	Case=Dat|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs|Variant=Short	3	obl:arg	3:obl:arg:dat	LId=on-1
3	neříkám	říkat	VERB	VB-S---1P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	jen	jen	PART	TT-------------	_	5	advmod:emph	5:advmod:emph	LId=jen-1
5	tak	tak	ADV	Db-------------	PronType=Dem	3	advmod	3:advmod	LId=tak-3
6	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	advmod	3:advmod	LId=pro-1
7	nic	nic	PRON	PW--4----------	Case=Acc|PronType=Neg	6	fixed	6:fixed	_
8	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	fixed	6:fixed	_
9	nic	nic	PRON	PW--4----------	Case=Acc|PronType=Neg	6	fixed	6:fixed	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 xcomp	color:blue
1	Až	až	PART	TT-------------	_	4	advmod:emph	4:advmod:emph	LId=až-3|LGloss=(až_k_...,_až_dost)
2	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	4:case	LId=do-1
3	Smithovy	Smithův	ADJ	AUFS2M---------	Case=Gen|Gender=Fem|Gender[psor]=Masc|NameType=Sur|Number=Sing|Poss=Yes	4	amod	4:amod	LDeriv=Smith
4	smrti	smrt	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	6	obl	6:obl:do:gen	_
5	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	6:nsubj	_
6	zůstávalo	zůstávat	VERB	VpNS---XR-AA---	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	LDeriv=zůstat
7	skoro	skoro	ADV	Db-------------	_	8	advmod:emph	8:advmod:emph	_
8	úplně	úplně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	9	advmod	9:advmod	LDeriv=úplný
9	zapomenuto	zapomenutý	ADJ	VsNS---XX-AP---	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	6	xcomp	6:xcomp	SpaceAfter=No|LDeriv=zapomenout
10	.	.	PUNCT	Z:-------------	_	6	punct	6:punct	_

~~~


