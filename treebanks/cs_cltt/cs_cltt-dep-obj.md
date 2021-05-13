---
layout: base
title:  'Statistics of obj in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `obj`

This relation is universal.

888 nodes (2%) are attached to their parents as `obj`.

733 instances of `obj` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.79617117117117.

The following 12 pairs of parts of speech are connected with `obj`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (759; 85% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (38; 4% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (37; 4% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (28; 3% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obj	color:blue
1	Stanovená	stanovený	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	_
2	doba	doba	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj	_	_
3	nesmí	smět	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	přesáhnout	přesáhnout	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	3	xcomp	_	_
5	účetní	účetní	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	6	amod	_	LId=účetní-1
6	období	období	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	4	obj	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	Účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	LId=účetní-1
2	operace	operace	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	13	nsubj:pass	_	_
3	opravující	opravující	ADJ	AGFS1-----A----	Aspect=Imp|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	2	amod	_	_
4	výši	výše	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	3	obj	_	_
5	vykázaných	vykázaný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	6	amod	_	_
6	odpisů	odpis	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	4	nmod	_	_
7	a	a	CCONJ	J^-------------	_	8	cc	_	LId=a-1
8	oprávek	oprávka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	6	conj	_	_
9	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	LId=v-1
10	předchozích	předchozí	ADJ	AANP6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	11	amod	_	_
11	obdobích	období	NOUN	NNNP6-----A----	Case=Loc|Gender=Neut|Number=Plur|Polarity=Pos	4	nmod	_	_
12	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	13	expl:pass	_	_
13	neprovádějí	provádět	VERB	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 obj	color:blue
1	Oceňovací	oceňovací	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	2	amod	_	_
2	rozdíly	rozdíl	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	0	root	_	_
3	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	LId=při-1
4	uplatnění	uplatnění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos	2	nmod	_	_
5	reálné	reálný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	_	_
6	hodnoty	hodnota	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	4	nmod	_	_
7	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	_	LId=u-1
8	pohledávek	pohledávka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos	4	nmod	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	13	punct	_	_
10	které	který	DET	P4FP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Int,Rel	13	obj	_	_
11	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	12	amod	_	LId=účetní-1
12	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	13	nsubj	_	_
13	nabyla	nabýt	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	8	acl:relcl	_	_
14	a	a	CCONJ	J^-------------	_	15	cc	_	LId=a-1
15	určila	určit	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	13	conj	_	_
16	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	17	case	_	LId=k-1
17	obchodování	obchodování	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos	15	obl	_	_

~~~


