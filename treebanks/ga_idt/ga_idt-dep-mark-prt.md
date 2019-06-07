---
layout: base
title:  'Statistics of mark:prt in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `mark:prt`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-mark.html">mark</a></tt>.

753 nodes (3%) are attached to their parents as `mark:prt`.

740 instances of `mark:prt` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05179282868526.

The following 13 pairs of parts of speech are connected with `mark:prt`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (526; 70% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (171; 23% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt> (19; 3% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (9; 1% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (7; 1% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt> (6; 1% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark:prt	color:blue
1	Ar	ar	PART	Vb	PartType=Vb|Tense=Past	2	mark:prt	_	_
2	ith	ith	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
3	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	2	nsubj	_	_
4	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	dinnéar	dinnéar	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	2	obj	_	SpaceAfter=No
6	?	?	PUNCT	?	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark:prt	color:blue
1	(	(	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
2	postas	postas	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
3	níos	níos	PART	Cmp	Number=Sing|PartType=Comp	4	mark:prt	_	_
4	mó	mór	ADJ	Adj	Degree=Cmp,Sup	2	amod	_	SpaceAfter=No
5	)	)	PUNCT	Punct	_	4	punct	_	SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 mark:prt	color:blue
1	Ní	ní	PART	Vb	PartType=Vb|Polarity=Neg	2	advmod	_	_
2	raibh	bí	VERB	PastInd	Form=Len|Mood=Ind|Polarity=Neg|Tense=Past	0	root	_	_
3	inti	i	ADP	Prep	Gender=Fem|Number=Sing|Person=3	2	xcomp:pred	_	_
4	ach	ach	SCONJ	Subord	_	2	mark:prt	_	_
5	cúpla	cúpla	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	2	nsubj	_	_
6	focal	focal	NOUN	Noun	Case=Gen|Gender=Masc|NounType=Weak|Number=Plur	5	nmod	_	_
7	á	do	ADP	Poss	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	8	case	_	_
8	rá	rá	NOUN	Noun	VerbForm=Inf	6	xcomp	_	_
9	go	go	PART	Vb	PartType=Cmpl	10	mark:prt	_	_
10	raibh	bí	VERB	PastInd	Form=Ecl|Mood=Ind|Tense=Past	8	ccomp	_	_
11	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	10	nsubj	_	_
12	ar	ar	ADP	Simp	_	13	case	_	_
13	tí	tí	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	10	xcomp:pred	_	_
14	bogadh	bogadh	NOUN	Noun	VerbForm=Inf	13	xcomp	_	_
15	ó	ó	ADP	Simp	_	16	case	_	_
16	Chaisleán	caisleán	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	14	nmod	_	_
17	Dracula	Dracula	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	16	compound	_	SpaceAfter=No
18	.	.	PUNCT	.	_	2	punct	_	_

~~~


