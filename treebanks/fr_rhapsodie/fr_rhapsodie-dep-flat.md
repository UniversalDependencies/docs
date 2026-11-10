---
layout: base
title:  'Statistics of flat in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="fr_rhapsodie-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="fr_rhapsodie-dep-flat-name.html">flat:name</a></tt>.

95 nodes (0%) are attached to their parents as `flat`.

95 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.71578947368421.

The following 5 pairs of parts of speech are connected with `flat`: <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (85; 89% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-X.html">X</a></tt> (3; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=132106|WordAlignmentEnd=132216
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	SpaceAfter=No|WordAlignmentBegin=132216|WordAlignmentEnd=132296
3	,	,	PUNCT	_	_	6	punct	_	WordAlignmentBegin=132296|WordAlignmentEnd=132296
4	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=132296|WordAlignmentEnd=132336
5	te	toi	PRON	_	Case=Acc|Emph=No|Number=Sing|Person=2|PronType=Prs	6	obj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=132336|WordAlignmentEnd=132427
6	dis	dire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	discourse	_	Exponence[Person]=Absent|SpaceAfter=No|WordAlignmentBegin=132427|WordAlignmentEnd=132554
7	,	,	PUNCT	_	_	8	punct	_	WordAlignmentBegin=132696|WordAlignmentEnd=132696
8	dix-huit	dix-huit	NUM	_	ExtPos=PRON|Number=Plur	0	root	_	Exponence[Number]=Inherent|WordAlignmentBegin=132696|WordAlignmentEnd=132926
9	cent	cent	NUM	_	ExtPos=PROPN|Number=Plur	8	flat	_	Exponence[Number]=Inherent|WordAlignmentBegin=132926|WordAlignmentEnd=133016
10	soixante-dix	soixante-dix	NUM	_	ExtPos=PROPN|Number=Plur	8	flat	_	Exponence[Number]=Inherent|WordAlignmentBegin=133016|WordAlignmentEnd=133336
11	par	par	ADP	_	_	12	case	_	WordAlignmentBegin=133336|WordAlignmentEnd=133426
12	là	là	ADV	_	_	8	advmod	_	SpaceAfter=No|WordAlignmentBegin=133426|WordAlignmentEnd=133558
13	.	.	PUNCT	_	_	8	punct	_	WordAlignmentBegin=133558|WordAlignmentEnd=133558

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 flat	color:blue
1	là	là	ADV	_	_	4	advmod	_	SpaceAfter=No|WordAlignmentBegin=36506|WordAlignmentEnd=36705
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=36705|WordAlignmentEnd=36705
3	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	4	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Unknown|WordAlignmentBegin=36705|WordAlignmentEnd=36892
4	remontez	remonter	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	WordAlignmentBegin=36892|WordAlignmentEnd=37393
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=37393|WordAlignmentEnd=37559
6	boulevard	boulevard	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=37559|WordAlignmentEnd=38183
7	,	,	PUNCT	_	_	8	punct	_	WordAlignmentBegin=38183|WordAlignmentEnd=38183
8	euh	euh	INTJ	_	_	12	discourse:filler	_	SpaceAfter=No|WordAlignmentBegin=38183|WordAlignmentEnd=38977
9	,	,	PUNCT	_	_	10	punct	_	WordAlignmentBegin=38977|WordAlignmentEnd=38977
10	fff	fff	INTJ	_	_	12	discourse	_	SpaceAfter=No|WordAlignmentBegin=38977|WordAlignmentEnd=39387
11	,	,	PUNCT	_	_	10	punct	_	WordAlignmentBegin=39387|WordAlignmentEnd=39671
12	machin	machin	NOUN	_	Gender=Masc|Number=Sing	6	appos	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=39671|WordAlignmentEnd=40227
13	Sembat	Sembat	PROPN	_	_	12	flat	_	SpaceAfter=No|WordAlignmentBegin=40227|WordAlignmentEnd=40671
14	,	,	PUNCT	_	_	15	punct	_	WordAlignmentBegin=40671|WordAlignmentEnd=41843
15	Sembat	Sembat	PROPN	_	_	12	conj:reform	_	WordAlignmentBegin=41843|WordAlignmentEnd=42163
16	quelque	quelque	DET	_	Number=Sing|PronType=Ind	17	det	_	Exponence[Number]=Inherent|WordAlignmentBegin=42163|WordAlignmentEnd=42332
17	chose	chose	NOUN	_	Gender=Fem|Number=Sing	15	flat	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=42332|WordAlignmentEnd=42742
18	.	.	PUNCT	_	_	4	punct	_	WordAlignmentBegin=42742|WordAlignmentEnd=42742

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 flat	color:blue
1	enfin	enfin	ADV	_	_	6	discourse	_	SpaceAfter=No|WordAlignmentBegin=73815|WordAlignmentEnd=74210
2	,	,	PUNCT	_	_	1	punct	_	WordAlignmentBegin=74210|WordAlignmentEnd=74210
3	tout	tout	ADV	_	_	4	advmod	_	WordAlignmentBegin=74210|WordAlignmentEnd=74390
4	récemment	récemment	ADV	_	_	6	advmod	_	SpaceAfter=No|WordAlignmentBegin=74390|WordAlignmentEnd=74810
5	,	,	PUNCT	_	_	4	punct	_	WordAlignmentBegin=74810|WordAlignmentEnd=74810
6	vient	venir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=74810|WordAlignmentEnd=75020
7	de	de	ADP	_	_	9	mark	_	WordAlignmentBegin=75020|WordAlignmentEnd=75060
8	s'	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	9	expl:pass	_	Exponence[Person]=Inherent|SpaceAfter=No|WordAlignmentBegin=75060|WordAlignmentEnd=75140
9	ouvrir	ouvrir	VERB	_	VerbForm=Inf	6	xcomp	_	Subject=SubjRaising|WordAlignmentBegin=75140|WordAlignmentEnd=75420
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	HasSpokenGender=OnlySingExceptWithLiaison|WordAlignmentBegin=75420|WordAlignmentEnd=75500
11	site	site	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=75500|WordAlignmentEnd=75800
12	Famibook	Famibook	PROPN	_	_	11	appos	_	WordAlignmentBegin=76123|WordAlignmentEnd=76760
13	point	point	NOUN	_	Gender=Masc|Number=Sing	12	flat	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=76870|WordAlignmentEnd=77035
14	com	com	X	_	_	12	flat	_	SpaceAfter=No|WordAlignmentBegin=77035|WordAlignmentEnd=77463
15	.	.	PUNCT	_	_	6	punct	_	WordAlignmentBegin=77463|WordAlignmentEnd=77463

~~~


