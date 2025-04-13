---
layout: base
title:  'Statistics of obj in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `obj`

This relation is universal.

887 nodes (2%) are attached to their parents as `obj`.

727 instances of `obj` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.83765501691094.

The following 12 pairs of parts of speech are connected with `obj`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (757; 85% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (38; 4% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (37; 4% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-PRON.html">PRON</a></tt> (29; 3% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obj	color:blue
1	(4)	(4)	PUNCT	Z:-------------	_	3	punct	3:punct	_
2	Rezervy	rezerva	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	3:nsubj|4:nsubj:xsubj	_
3	nesmějí	smět	VERB	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	mít	mít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	3	xcomp	3:xcomp	_
5	aktivní	aktivní	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	6:amod	_
6	zůstatek	zůstatek	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	4:obj	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	Účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	2:amod	LId=účetní-1
2	operace	operace	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	13	nsubj:pass	13:nsubj:pass	_
3	opravující	opravující	ADJ	AGFS1-----A----	Aspect=Imp|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	2	amod	2:amod	_
4	výši	výše	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	3	obj	3:obj	_
5	vykázaných	vykázaný	ADJ	AAIP2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	6	amod	6:amod	_
6	odpisů	odpis	NOUN	NNIP2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	4	nmod	4:nmod:gen	_
7	a	a	CCONJ	J^-------------	_	8	cc	8:cc	LId=a-1
8	oprávek	oprávka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur	6	conj	4:nmod:gen|6:conj	_
9	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	11:case	LId=v-1
10	předchozích	předchozí	ADJ	AANP6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	11	amod	11:amod	_
11	obdobích	období	NOUN	NNNP6-----A----	Case=Loc|Gender=Neut|Number=Plur	4	nmod	4:nmod:v:loc	_
12	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	13	expl:pass	13:expl:pass	_
13	neprovádějí	provádět	VERB	VB-P---3P-NA---	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	13	punct	13:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 obj	color:blue
1	Oceňovací	oceňovací	ADJ	AAIP1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	2	amod	2:amod	_
2	rozdíly	rozdíl	NOUN	NNIP1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	0	root	0:root	_
3	při	při	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	4:case	LId=při-1
4	uplatnění	uplatnění	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing	2	nmod	2:nmod:při:loc	_
5	reálné	reálný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	6	amod	6:amod	_
6	hodnoty	hodnota	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	4	nmod	4:nmod:gen	_
7	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	8:case	LId=u-1
8	pohledávek	pohledávka	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur	4	nmod	4:nmod:u:gen|13:obj|15:obj	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	13	punct	13:punct	_
10	které	který	DET	P4FP4----------	Case=Acc|Gender=Fem|Number=Plur|PronType=Int,Rel	13	obj	8:ref	_
11	účetní	účetní	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	12	amod	12:amod	LId=účetní-1
12	jednotka	jednotka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	13	nsubj	13:nsubj|15:nsubj	_
13	nabyla	nabýt	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	8	acl:relcl	8:acl:relcl	_
14	a	a	CCONJ	J^-------------	_	15	cc	15:cc	LId=a-1
15	určila	určit	VERB	VpQW---XR-AA---	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	13	conj	8:acl:relcl|13:conj	_
16	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	17	case	17:case	LId=k-1
17	obchodování	obchodování	NOUN	NNNS3-----A----	Case=Dat|Gender=Neut|Number=Sing	15	obl	15:obl:k:dat	_

~~~


