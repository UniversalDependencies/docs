---
layout: base
title:  'Statistics of det in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `det`

This relation is universal.

9454 nodes (8%) are attached to their parents as `det`.

7843 instances of `det` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05722445525703.

The following 17 pairs of parts of speech are connected with `det`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (8008; 85% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (1056; 11% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (105; 1% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (90; 1% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (57; 1% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (49; 1% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (23; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (21; 0% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (11; 0% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (10; 0% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
1	Caithfidh	caith	VERB	VTI	Mood=Ind|Tense=Fut	0	root	_	_
2	foirne	foireann	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Plur	5	nsubj	_	_
3	úsáid	úsáid	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	5	obj	_	_
4	a	a	PART	Inf	PartType=Inf	5	mark	_	_
5	bhaint	baint	NOUN	Noun	Form=Len|VerbForm=Inf	1	xcomp	_	_
6	as	as	ADP	Simp	_	8	case	_	_
7	na	an	DET	Art	Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	huimhreacha	uimhir	NOUN	Noun	Case=NomAcc|Definite=Def|Form=HPref|Gender=Fem|Number=Plur	5	obl	_	_
9	4-15	4-15	NUM	Num	_	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	Mo	mo	DET	Det	Number=Sing|Person=1|Poss=Yes	2	nmod:poss	_	_
2	léan	léan	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
3	go	go	PART	Vb	PartType=Cmpl	4	mark:prt	_	_
4	mbeidh	bí	VERB	FutInd	Form=Ecl|Mood=Ind|Tense=Fut	2	acl	_	_
5	ar	ar	ADP	Simp	_	7	case	_	_
6	na	an	DET	Art	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
7	Gaeil	Gael	PROPN	Noun	Definite=Def|Gender=Masc|Number=Plur	4	obl	_	_
8	luí	luí	NOUN	Noun	VerbForm=Inf	7	xcomp:pred	_	_
9	síos	síos	ADV	Dir	_	8	advmod	_	_
10	arís	arís	ADV	Gn	_	8	advmod	_	_
11	ina	i	ADP	Poss	Number=Plur|Person=3|Poss=Yes	12	case	_	_
12	dtír	tír	NOUN	Noun	Case=NomAcc|Definite=Def|Form=Ecl|Gender=Fem|Number=Sing	4	obl	_	_
13	féin	féin	PRON	Ref	Reflex=Yes	12	nmod	_	SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 det	color:blue
1	Cén	cé	PRON	Q	Number=Sing|PronType=Int	0	root	_	_
2	áit	áit	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	1	nsubj	_	_
3	an	an	PART	Vb	PartType=Vb	4	mark:prt	_	_
4	bhfágfaidh	fág	VERB	VTI	Form=Ecl|Mood=Ind|Tense=Fut	2	acl:relcl	_	_
5	mé	mé	PRON	Pers	Number=Sing|Person=1	4	nsubj	_	_
6	iad	iad	PRON	Pers	Number=Plur|Person=3	4	obj	_	_
7	seo	seo	PRON	Dem	PronType=Dem	6	det	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	10	punct	_	_
9	a	a	PART	Voc	PartType=Voc	10	case:voc	_	_
10	Tom	Tom	PROPN	Noun	Case=Voc|Definite=Def|Gender=Masc|Number=Sing	1	vocative	_	SpaceAfter=No
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


