---
layout: base
title:  'Statistics of vocative in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `vocative`

This relation is universal.

58 nodes (0%) are attached to their parents as `vocative`.

32 instances of `vocative` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.5.

The following 7 pairs of parts of speech are connected with `vocative`: <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt> (40; 69% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt> (8; 14% instances), <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt> (4; 7% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="cs_cac-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="cs_cac-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 vocative	color:blue
1	Soudruhu	soudruh	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing|Polarity=Pos	2	nmod	2:nmod:voc	_
2	doktore	doktor	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing|Polarity=Pos	10	vocative	10:vocative	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	10	punct	10:punct	_
4	o	o	ADP	RR--6----------	AdpType=Prep|Case=Loc	5	case	5:case	LId=o-1
5	čem	co	PRON	PQ--6----------	Animacy=Inan|Case=Loc|PronType=Int,Rel	10	obl:arg	10:obl:arg:o:loc	LId=co-1
6	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pass	10:expl:pass	LGloss=(zvr._zájmeno/částice)
7	na	na	ADP	RR--6----------	AdpType=Prep|Case=Loc	8	case	8:case	LId=na-1
8	besedě	beseda	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	10	obl	10:obl:na:loc	_
9	hlavně	hlavně	ADV	Dg-------1A----	Degree=Pos|Polarity=Pos	10	advmod	10:advmod	LDeriv=hlavní
10	hovořilo	hovořit	VERB	VpNS---XR-AA---	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 vocative	color:blue
1	"	"	PUNCT	Z:-------------	_	7	punct	7:punct	_
2	Ladislave	Ladislav	PROPN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	7	vocative	7:vocative	_
3	Falto	Falta	PROPN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	2	flat	2:flat	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	7	punct	7:punct	_
5	už	už	ADV	Db-------------	_	7	advmod	7:advmod	_
6	jste	být	AUX	VB-P---2P-AA---	Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	7:aux	_
7	sbalil	sbalit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
8	kufr	kufr	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	7	obj	7:obj	SpaceAfter=No
9	?	?	PUNCT	Z:-------------	_	7	punct	7:punct	_
10	"	"	PUNCT	Z:-------------	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 vocative	color:blue
1	Je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	2:cop	_
2	krásná	krásný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	4	punct	4:punct	_
4	děvenko	děvenka	NOUN	NNFS5-----A----	Case=Voc|Gender=Fem|Number=Sing|Polarity=Pos	2	vocative	2:vocative|8:vocative	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
6	máma	máma	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	8	nsubj	8:nsubj	_
7	ji	on	PRON	PPFS4--3-------	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	obj	8:obj	_
8	má	mít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	0:root|2:conj	_
9	taky	také	ADV	Db-------------	_	8	advmod	8:advmod	LGloss=(rovněž)
10	ráda	rád	ADJ	ACQW------A----	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short	8	obl	8:obl	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


