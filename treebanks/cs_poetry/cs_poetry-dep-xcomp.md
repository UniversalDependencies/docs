---
layout: base
title:  'Statistics of xcomp in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `xcomp`

This relation is universal.

77 nodes (1%) are attached to their parents as `xcomp`.

50 instances of `xcomp` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.7012987012987.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (53; 69% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt> (12; 16% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (5; 6% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="cs_poetry-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_poetry-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 xcomp	color:blue
1	Že	že	SCONJ	J,-------------	_	3	mark	_	SpacesBefore=\s
2	nejsem	být	AUX	VB-S---1P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	čist	čist	ADJ	ACYS------A----	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short	5	acl	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	3	punct	_	_
5	to	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	7	obj	_	_
6	dobře	dobře	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	7	advmod	_	_
7	vím	vědět	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	13	punct	_	_
9	leč	leč	CCONJ	J,-------------	_	13	cc	_	_
10	bez	bez	ADP	RR--2----------	AdpType=Prep|Case=Gen	11	case	_	_
11	hříchu	hřích	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	12	obl	_	_
12	žít	žít	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	13	xcomp	_	_
13	neumím	umět	VERB	VB-S---1P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 14 xcomp	color:blue
1	A	a	CCONJ	J^-------------	_	8	advmod:emph	_	_
2	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	3	case	_	_
3	vtělení	vtělení	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	8	obl	_	_
4	želvy	želva	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	3	nmod	_	_
5	obrovité	obrovitý	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	_	_
6	Ind	Ind	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Nat|Number=Sing|Polarity=Pos	8	nsubj	_	_
7	Višnu	Višna	PROPN	NNMS4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	6	flat	_	_
8	měl	mít	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	11	punct	_	_
10	své	svůj	DET	P8NS4---------1	Case=Acc|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	11	det	_	_
11	božství	božství	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	8	obj	_	_
12	nad	nad	ADP	RR--7----------	AdpType=Prep|Case=Ins	13	case	_	_
13	vším	všechen	DET	PLZS7----------	Case=Ins|Gender=Neut|Number=Sing|PronType=Tot	14	det	_	_
14	skryté	skrytý	ADJ	AANS4----1A----	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	8	xcomp	_	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 xcomp	color:blue
1	Lakomství	lakomství	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	3	nsubj	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	3	expl:pv	_	_
3	chápá	chápat	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	statku	statek	NOUN	NNIS3-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	3	obl:arg	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	7	punct	_	_
6	Samo	samý	DET	PLNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Emp|Variant=Short	7	xcomp	_	_
7	chce	chtít	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
8	jen	jen	PART	TT-------------	_	6	advmod:emph	_	_
9	všecko	všecek	PRON	PLNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	10	obj	_	_
10	mít	mít	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	7	xcomp	_	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	12	punct	_	_
12	Loupí	loupit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
13	bratry	bratr	NOUN	NNMP4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|Polarity=Pos	12	obj	_	SpaceAfter=No
14	,	,	PUNCT	Z:-------------	_	15	punct	_	_
15	otce	otec	NOUN	NNMS4-----A----	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	13	conj	_	SpaceAfter=No
16	,	,	PUNCT	Z:-------------	_	17	punct	_	_
17	matku	matka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	13	conj	_	SpaceAfter=No
18	,	,	PUNCT	Z:-------------	_	19	punct	_	_
19	Hubí	hubit	VERB	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
20	lidomlský	lidomilský	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Typo=Yes	21	amod	_	_
21	cýt	cit	NOUN	NNIS1-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	19	obj	_	SpaceAfter=No
22	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


