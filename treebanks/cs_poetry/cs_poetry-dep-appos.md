---
layout: base
title:  'Statistics of appos in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `appos`

This relation is universal.

48 nodes (1%) are attached to their parents as `appos`.

48 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.20833333333333.

The following 16 pairs of parts of speech are connected with `appos`: <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (24; 50% instances), <tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (6; 13% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt> (3; 6% instances), <tt><a href="cs_poetry-pos-DET.html">DET</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="cs_poetry-pos-DET.html">DET</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 appos	color:blue
1	Závist	závist	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	11	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	5	punct	_	_
3	tato	tento	DET	PDFS1----------	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
4	litá	lítý	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	5	amod	_	_
5	saně	saň	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	1	appos	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	5	punct	_	_
7	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	_	_
8	hradech	hrad	NOUN	NNIP6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur|Polarity=Pos	11	obl	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	10	punct	_	_
10	budkách	budka	NOUN	NNFP6-----A----	Case=Loc|Gender=Fem|Number=Plur|Polarity=Pos	8	conj	_	_
11	panuje	panovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	21	punct	_	_
13	Jako	jako	SCONJ	J,-------------	_	17	mark	_	_
14	dravé	dravý	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	17	amod	_	SpaceAfter=No
15	,	,	PUNCT	Z:-------------	_	16	punct	_	_
16	kruté	krutý	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	14	conj	_	_
17	káně	káně	NOUN	NNFP1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	21	advcl	_	_
18	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	19	case	_	_
19	krvi	krev	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	21	obl	_	_
20	jenom	jenom	PART	TT-------------	_	21	advmod:emph	_	_
21	hoduje	hodovat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	conj	_	SpaceAfter=No
22	.	.	PUNCT	Z:-------------	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 appos	color:blue
1	Ti	ten	DET	PDMP1----------	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	3	nsubj	_	_
2	žhavými	žhavý	ADJ	AAMP7----1A----	Animacy=Anim|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos	4	amod	_	_
3	zpyšněli	zpyšnět	VERB	VpMP---XR-AA---	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	boji	boj	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	3	obl	_	_
5	a	a	CCONJ	J^-------------	_	7	cc	_	_
6	nenávist	nenávist	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	7	obj	_	_
7	našli	najít	VERB	VpMP---XR-AA---	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	3	conj	_	_
8	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	_	_
9	králů	král	NOUN	NNMP2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos	7	obl	_	_
10	a	a	CCONJ	J^-------------	_	17	cc	_	_
11	Jemu	on	PRON	PPZS3--3-------	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	17	obl:arg	_	SpaceAfter=No
12	,	,	PUNCT	Z:-------------	_	14	punct	_	_
13	prvnímu	první	ADJ	CrMS3----------	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|NumType=Ord	14	amod	_	_
14	rebelu	rebel	NOUN	NNMS3-----A---1	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	11	appos	_	SpaceAfter=No
15	,	,	PUNCT	Z:-------------	_	14	punct	_	_
16	hrdě	hrdě	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	17	advmod	_	_
17	říkají	říkat	VERB	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	SpaceAfter=No
18	:	:	PUNCT	Z:-------------	_	19	punct	_	_
19	Bratře	bratr	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing|Polarity=Pos	17	ccomp	_	SpaceAfter=No
20	!	!	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 appos	color:blue
1	A	a	CCONJ	J^-------------	_	3	cc	_	_
2	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	_
3	rybě	ryba	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	7	orphan	_	_
4	–	–	PUNCT	Z:-------------	_	5	punct	_	_
5	Bajušáku	Bajušák	PROPN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|NameType=Geo|Number=Sing|Polarity=Pos	3	appos	_	_
6	–	–	PUNCT	Z:-------------	_	3	punct	_	_
7	Kamčadále	Kamčadál	PROPN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|NameType=Geo|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	10	punct	_	_
9	a	a	CCONJ	J^-------------	_	10	cc	_	_
10	Peršan	Peršan	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Nat|Number=Sing|Polarity=Pos	7	conj	_	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	12	case	_	_
12	plameni	plamen	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Polarity=Pos	10	orphan	_	SpaceAfter=No
13	,	,	PUNCT	Z:-------------	_	15	punct	_	_
14	jenž	jenž	PRON	PJYS1----------	Case=Nom|Gender=Masc|Number=Sing|PrepCase=Npr|PronType=Rel	15	nsubj	_	_
15	hořel	hořet	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	12	acl:relcl	_	_
16	stále	stále	ADV	Db-------------	_	15	advmod	_	SpaceAfter=No
17	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


