---
layout: base
title:  'Statistics of root in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `root`

This relation is universal.

1020 nodes (4%) are attached to their parents as `root`.

1020 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.55294117647059.

The following 14 pairs of parts of speech are connected with `root`: -<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (643; 63% instances), -<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (173; 17% instances), -<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (62; 6% instances), -<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (37; 4% instances), -<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (36; 4% instances), -<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (32; 3% instances), -<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (12; 1% instances), -<tt><a href="ga_idt-pos-X.html">X</a></tt> (10; 1% instances), -<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), -<tt><a href="ga_idt-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), -<tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), -<tt><a href="ga_idt-pos-AUX.html">AUX</a></tt> (2; 0% instances), -<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (2; 0% instances), -<tt><a href="ga_idt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	fear	fear	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nsubj	_	_
3	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	1	xcomp:pred	_	_
4	fadó	fadó	ADV	Gn	_	1	advmod	_	SpaceAfter=No
5	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Uaisle	uasal	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	0	root	_	_
2	saibhre	saibhir	ADJ	Adj	Case=NomAcc|NounType=NotSlender|Number=Plur	1	amod	_	_
3	de	de	ADP	Simp	_	4	case	_	_
4	chuid	cuid	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	1	nmod	_	_
5	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	Róimhe	Róimh	PROPN	Noun	Case=Gen|Gender=Fem	4	compound	_	_
7	a	a	PART	Vb	PartType=Vb|PronType=Rel	8	mark:prt	_	_
8	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	1	csubj:cleft	_	_
9	ina	i	ADP	Poss	Number=Plur|Person=3|Poss=Yes	10	case	_	_
10	magistri	magistri	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Plur	8	xcomp:pred	_	_
11	tráth	tráth	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	8	obl:tmod	_	_
12	a	a	PART	Vb	PartType=Vb|PronType=Rel	13	nsubj	_	_
13	bhíodh	bí	VERB	PastImp	Form=Len|Mood=Imp|Tense=Past	1	acl:relcl	_	_
14	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	13	xcomp:pred	_	SpaceAfter=No
15	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	B'	is	AUX	Cop	Form=VF|Tense=Past|VerbForm=Cop	2	cop	_	SpaceAfter=No
2	fhearr	maith	ADJ	Adj	Degree=Cmp,Sup	0	root	_	_
3	dúinn	do	ADP	Prep	Number=Plur|Person=1	2	obl:prep	_	_
4	imeacht	imeacht	NOUN	Noun	VerbForm=Inf	2	nsubj	_	_
5	isteach	isteach	ADV	Dir	_	4	advmod	_	_
6	a	a	PART	Voc	PartType=Voc	7	case:voc	_	_
7	Tom	Tom	PROPN	Noun	Case=Voc|Gender=Masc|Number=Sing	2	vocative	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


