---
layout: base
title:  'Statistics of advmod:emph in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="cs_czesl-dep-advmod.html">advmod</a></tt>.

104 nodes (1%) are attached to their parents as `advmod:emph`.

100 instances of `advmod:emph` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55769230769231.

The following 16 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt> (43; 41% instances), <tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt> (14; 13% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt> (11; 11% instances), <tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt> (10; 10% instances), <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-CCONJ.html">CCONJ</a></tt> (8; 8% instances), <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt> (6; 6% instances), <tt><a href="cs_czesl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_czesl-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="cs_czesl-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_czesl-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_czesl-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="cs_czesl-pos-DET.html">DET</a></tt>-<tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_czesl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_czesl-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_czesl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="cs_czesl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_czesl-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 advmod:emph	color:blue
1	Podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	2	case	_	_
2	mne	já	PRON	PP-S2--1-------	Case=Gen|Number=Sing|Person=1|PronType=Prs	5	obl	_	_
3	by	být	AUX	Vc-------------	Aspect=Imp|Mood=Cnd|VerbForm=Fin	5	aux	_	_
4	auta	auto	NOUN	NNNP1-----A----	Case=Nom|Gender=Neut|Number=Plur	5	nsubj:pass	_	_
5	měla	mít	VERB	VpQW---XR-AA---	Aspect=Imp|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	být	být	AUX	Vf--------A----	Polarity=Pos|VerbForm=Inf	7	aux:pass	_	_
7	zakázána	zakázaný	ADJ	VsQW---XX-AP---	Aspect=Perf|Case=Nom|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	5	xcomp	_	_
8	alespoň	alespoň	ADV	Db-------------	Degree=Pos|Polarity=Pos	11	advmod:emph	_	_
9	ve	v	ADP	RV--6----------	AdpType=Voc|Case=Loc	11	case	_	_
10	velkých	velký	ADJ	AANP6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur|Polarity=Pos	11	amod	_	_
11	městech	město	NOUN	NNNP6-----A----	Case=Loc|Gender=Neut|Number=Plur	7	obl	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod:emph	color:blue
1	Asi	asi	ADV	TT-------------	Degree=Pos|Polarity=Pos	3	advmod:emph	_	CzechParticle=Yes
2	v	v	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	_
3	sedm	sedm	NUM	Cn-S4----------	Case=Acc|Number=Sing|NumForm=Word|NumType=Card	4	nummod:gov	_	_
4	hodin	hodina	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur	6	obl	_	_
5	večer	večer	ADV	Db-------------	Degree=Pos|Polarity=Pos	4	advmod	_	_
6	začínáme	začínat	VERB	VB-P---1P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	večeřem	večeř	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	obj	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod:emph	color:blue
1	Teď	teď	ADV	Db-------------	PronType=Dem	2	advmod	_	_
2	přeložím	přeložit	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	už	už	ADV	Db-------------	Degree=Pos|Polarity=Pos	2	advmod:emph	_	_
4	žádost	žádost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	_
5	o	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	6	case	_	_
6	podporu	podpora	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	4	nmod	_	_
7	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	9	case	_	_
8	novém	nový	ADJ	AANS6----1A----	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	9	amod	_	_
9	provedení	provedení	NOUN	NNNS6-----A----	Case=Loc|Gender=Neut|Number=Sing|VerbForm=Vnoun	6	nmod	_	_
10	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	_
11	roce	rok	NOUN	NNIS6-----A---1	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	nmod	_	_
12	2010	2010	NUM	C=-------------	NumForm=Digit|NumType=Card	11	nummod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


