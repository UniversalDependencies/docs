---
layout: base
title:  'Statistics of parataxis in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `parataxis`

This relation is universal.

88 nodes (1%) are attached to their parents as `parataxis`.

85 instances of `parataxis` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.0454545454545.

The following 15 pairs of parts of speech are connected with `parataxis`: <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (61; 69% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (5; 6% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (5; 6% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt> (2; 2% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_poetry-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-DET.html">DET</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 parataxis	color:blue
1	Dívky	dívka	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos	3	nsubj	_	_
2	pilně	pilně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	3	advmod	_	_
3	předly	příst	VERB	VpTP---XR-AA---	Aspect=Imp|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	Hoši	hoch	NOUN	NNMP1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos	10	nsubj	_	_
5	v	v	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	case	_	_
6	kolo	kolo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	10	obl	_	_
7	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	8	case	_	_
8	dívčinám	dívčina	NOUN	NNFP3-----A----	Case=Dat|Gender=Fem|Number=Plur|Polarity=Pos	10	obl	_	_
9	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pv	_	_
10	sedli	sednout	VERB	VpMP---XR-AA--1	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	parataxis	_	SpaceAfter=No
11	;	;	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 parataxis	color:blue
1	Vyloupena	vyloupený	ADJ	VsQW---XX-AP---	Gender=Fem|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
2	svatyně	svatyně	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	1	nsubj:pass	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	7	punct	_	_
4	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	_	_
5	níž	jenž	PRON	P9FS6----------	Case=Loc|Gender=Fem|Number=Sing|PrepCase=Pre|PronType=Rel	7	obl	_	_
6	bůže	bůže	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	7	nsubj	_	_
7	měl	mít	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	2	acl:relcl	_	_
8	–	–	PUNCT	Z:-------------	_	10	punct	_	_
9	jen	jen	PART	TT-------------	_	10	advmod:emph	_	_
10	pozlátkové	pozlátkový	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	7	parataxis	_	_
11	–	–	PUNCT	Z:-------------	_	10	punct	_	_
12	místo	místo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	7	obj	_	_
13	Boha	bůh	NOUN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	12	nmod	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	Zřídila	zřídit	VERB	VpQW---XR-AA---	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	_	_
3	–	–	PUNCT	Z:-------------	_	4	punct	_	_
4	bída	bída	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	1	parataxis	_	_
5	velká	velký	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	SpaceAfter=No
6	!	!	PUNCT	Z:-------------	_	4	punct	_	_
7	–	–	PUNCT	Z:-------------	_	4	punct	_	_
8	pro	pro	ADP	RR--4----------	AdpType=Prep|Case=Acc	9	case	_	_
9	výrobu	výroba	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	1	obl	_	_
10	dekadence	dekadence	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	9	nmod	_	_
11	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	12	case	_	_
12	nás	já	PRON	PP-P2--1-------	Case=Gen|Number=Plur|Person=1|PronType=Prs	1	nmod	_	_
13	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	14	case	_	_
14	Čechách	Čechy	PROPN	NNFP6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Plur|Polarity=Pos	12	nmod	_	_
15	paralelka	paralelka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	1	nsubj:pass	_	SpaceAfter=No
16	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


