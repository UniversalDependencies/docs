---
layout: base
title:  'Statistics of mark:prt in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `mark:prt`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-mark.html">mark</a></tt>.

1329 nodes (3%) are attached to their parents as `mark:prt`.

1309 instances of `mark:prt` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06847253574116.

The following 18 pairs of parts of speech are connected with `mark:prt`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (914; 69% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (271; 20% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (78; 6% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt> (25; 2% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (11; 1% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt> (7; 1% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (6; 0% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 mark:prt	color:blue
1	'	'	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
2	Dona	dona	ADJ	Adj	Degree=Pos	8	ccomp	_	_
3	go	go	ADV	Gn	_	2	advmod	_	_
4	leor	leor	ADJ	Adj	_	3	fixed	_	SpaceAfter=No
5	,	,	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
6	'	'	PUNCT	Punct	_	2	punct	_	_
7	a	a	PART	Vb	PartType=Vb|PronType=Rel	8	mark:prt	_	_
8	deir	abair	VERB	VTI	Mood=Ind|Tense=Pres	0	root	_	_
9	Tom	Tom	NOUN	Noun	Gender=Masc|Number=Sing	8	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 mark:prt	color:blue
1	'	'	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
2	Ní	ní	PART	Vb	PartType=Vb	3	mark:prt	_	_
3	raibh	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
4	siad	siad	PRON	Pers	Number=Plur|Person=3	3	nsubj	_	_
5	ní	ní	PART	Comp	Gender=Masc|Number=Sing	7	mark:prt	_	_
6	b'	ba	PART	Comp	Form=VF|Tense=Past|VerbForm=Cop	5	fixed	_	SpaceAfter=No
7	uaisle	uasal	ADJ	Adj	Degree=Cmp,Sup	3	xcomp:pred	_	_
8	ná	ná	CCONJ	Coord	_	9	cc	_	_
9	ní	ní	PART	Comp	Gender=Masc|Number=Sing	11	mark:prt	_	_
10	b'	ba	PART	Comp	Form=VF|Tense=Past|VerbForm=Cop	9	fixed	_	SpaceAfter=No
11	fhearr	maith	ADJ	Adj	Degree=Cmp,Sup	7	conj	_	_
12	i	i	ADP	Simp	_	13	case	_	_
13	gcath	cath	NOUN	Noun	Form=Ecl|Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
14	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark:prt	color:blue
1	D'	do	PART	Vb	PartType=Vb	2	mark:prt	_	SpaceAfter=No
2	iúntaigh	iúntaigh	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	0	root	_	_
3	Pinocchio	Pinocchio	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	2	nsubj	_	_
4	agus	agus	CCONJ	Coord	_	6	cc	_	_
5	d'	do	PART	Vb	PartType=Vb	6	mark:prt	_	SpaceAfter=No
6	fhéach	féach	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	2	conj	_	_
7	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
8	air	ar	ADP	Prep	Gender=Masc|Number=Sing|Person=3	6	obl:prep	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


