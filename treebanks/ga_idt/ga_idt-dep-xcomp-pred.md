---
layout: base
title:  'Statistics of xcomp:pred in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `xcomp:pred`

This relation is a language-specific subtype of <tt><a href="ga_idt-dep-xcomp.html">xcomp</a></tt>.

1175 nodes (2%) are attached to their parents as `xcomp:pred`.

1170 instances of `xcomp:pred` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.24255319148936.

The following 20 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (486; 41% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (313; 27% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (165; 14% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (71; 6% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (35; 3% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (26; 2% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (22; 2% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (20; 2% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (14; 1% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (9; 1% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 xcomp:pred	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 xcomp:pred	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	1	nsubj	_	_
3	naoi	naoi	NUM	Num	NumType=Card	4	nummod	_	_
4	mbliana	bliain	NOUN	Noun	Form=Ecl|Gender=Fem	1	xcomp:pred	_	_
5	agus	agus	CCONJ	Coord	_	6	cc	_	_
6	leathchéad	céad	NOUN	Noun	Form=Len|Gender=Masc|Number=Sing	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp:pred	color:blue
1	Títhe	Títhe	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	lucht	lucht	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nmod	_	_
3	oibre	obair	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	ba	is	PART	Sup	PronType=Rel|Tense=Past|VerbForm=Cop	5	mark:prt	_	_
5	mhó	mór	ADJ	Adj	Degree=Pos|Form=Len	1	amod	_	_
6	a	a	PART	Vb	PartType=Vb|PronType=Rel	7	mark:prt	_	_
7	bhí	bí	VERB	VI	Form=Len|Mood=Ind|Tense=Past	1	csubj:cleft	_	_
8	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	7	xcomp:pred	_	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


