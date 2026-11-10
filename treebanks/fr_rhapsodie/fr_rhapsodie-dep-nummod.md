---
layout: base
title:  'Statistics of nummod in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `nummod`

This relation is universal.

129 nodes (0%) are attached to their parents as `nummod`.

129 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25581395348837.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (122; 95% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (5; 4% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	trois	trois	NUM	_	Number=Plur	2	nummod	_	Exponence[Number]=Inherent|WordAlignmentBegin=18727|WordAlignmentEnd=19111
2	policiers	policier	NOUN	_	Gender=Masc|Number=Plur	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|WordAlignmentBegin=19111|WordAlignmentEnd=19661
3	blessés	blesser	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	acl	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|SpaceAfter=No|Status[Tense]=Denom|WordAlignmentBegin=19661|WordAlignmentEnd=20296
4	.	.	PUNCT	_	_	2	punct	_	WordAlignmentBegin=20296|WordAlignmentEnd=20296

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 24 nummod	color:blue
1	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|WordAlignmentBegin=30596|WordAlignmentEnd=30681
2	crois	croire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|WordAlignmentBegin=30681|WordAlignmentEnd=30811
3	qu'	que	SCONJ	_	_	16	mark	_	SpaceAfter=No|WordAlignmentBegin=30811|WordAlignmentEnd=30931
4	il	lui	PRON	_	Case=Nom|Emph=No|ExtPos=ADP|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	reparandum	_	Exponence[Person]=Inherent|Idiom=Yes|WordAlignmentBegin=30931|WordAlignmentEnd=30961
5	y	y	PRON	_	Person=3|PronType=Prs	4	fixed	_	Exponence[Person]=Inherent|InIdiom=Yes|WordAlignmentBegin=30961|WordAlignmentEnd=30991
6	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	fixed	_	InIdiom=Yes|SpaceAfter=No|WordAlignmentBegin=30991|WordAlignmentEnd=31161
7	,	,	PUNCT	_	_	4	punct	_	WordAlignmentBegin=31161|WordAlignmentEnd=31161
8	il	lui	PRON	_	Case=Nom|Emph=No|ExtPos=ADP|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	case	_	Exponence[Person]=Inherent|Idiom=Yes|WordAlignmentBegin=31161|WordAlignmentEnd=31191
9	y	y	PRON	_	Person=3|PronType=Prs	8	fixed	_	Exponence[Person]=Inherent|InIdiom=Yes|WordAlignmentBegin=31191|WordAlignmentEnd=31231
10	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	fixed	_	InIdiom=Yes|WordAlignmentBegin=31231|WordAlignmentEnd=31271
11	quelques	quelques	DET	_	Number=Plur|PronType=Ind	12	det	_	Exponence[Number]=Inherent|LiaisonAfter=Yes|WordAlignmentBegin=31271|WordAlignmentEnd=31601
12	années	année	NOUN	_	Gender=Fem|Number=Plur	16	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No|WordAlignmentBegin=31601|WordAlignmentEnd=31881
13	,	,	PUNCT	_	_	12	punct	_	WordAlignmentBegin=31881|WordAlignmentEnd=31881
14	ils	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Plur|Person=3|PronType=Prs	16	nsubj	_	Exponence[Person]=Inherent|WordAlignmentBegin=31881|WordAlignmentEnd=31991
15	avaient	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	16	aux:tense	_	WordAlignmentBegin=31991|WordAlignmentEnd=32161
16	dit	dire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	2	ccomp	_	Exponence[Number]=Absent|PastPartHasSpokenGender=Yes|Status[Tense]=Denom|WordAlignmentBegin=32161|WordAlignmentEnd=32311
17	que	que	SCONJ	_	_	21	mark	_	WordAlignmentBegin=32311|WordAlignmentEnd=32341
18	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	Exponence[Gender]=Absent|HasSpokenGender=OnlySingExceptWithLiaison|LiaisonAfter=Yes|SpaceAfter=No|WordAlignmentBegin=32341|WordAlignmentEnd=32371
19	immobilier	immobilier	NOUN	_	Gender=Masc|Number=Sing	21	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=32371|WordAlignmentEnd=32981
20	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	21	aux:tense	_	WordAlignmentBegin=32981|WordAlignmentEnd=33171
21	augmenté	augmenter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	16	ccomp	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Status[Tense]=Denom|WordAlignmentBegin=33171|WordAlignmentEnd=33511
22	d'	de	ADP	_	_	25	case	_	SpaceAfter=No|WordAlignmentBegin=33511|WordAlignmentEnd=33551
23	environ	environ	ADV	_	_	24	advmod	_	WordAlignmentBegin=33551|WordAlignmentEnd=33871
24	neuf	neuf	NUM	_	Number=Plur	25	nummod	_	Exponence[Number]=Inherent|WordAlignmentBegin=33871|WordAlignmentEnd=34031
25	pour	pour	ADP	_	ExtPos=NOUN	21	obl:mod	_	Idiom=Yes|WordAlignmentBegin=34031|WordAlignmentEnd=34251
26	cent	cent	NUM	_	Number=Sing	25	fixed	_	Exponence[Number]=Inherent|InIdiom=Yes|WordAlignmentBegin=34251|WordAlignmentEnd=34421
27	à	à	ADP	_	_	28	case	_	WordAlignmentBegin=34421|WordAlignmentEnd=34511
28	Paris	Paris	PROPN	_	_	21	obl:mod	_	SpaceAfter=No|WordAlignmentBegin=34511|WordAlignmentEnd=34950
29	.	.	PUNCT	_	_	2	punct	_	WordAlignmentBegin=34950|WordAlignmentEnd=34950

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 nummod	color:blue
1	mais	mais	CCONJ	_	_	24	cc	_	WordAlignmentBegin=242030|WordAlignmentEnd=242090
2	en	en	ADP	_	_	3	case	_	WordAlignmentBegin=242090|WordAlignmentEnd=242150
3	mille	mille	NUM	_	ExtPos=PROPN|Number=Sing	24	obl:mod	_	Exponence[Number]=Inherent|WordAlignmentBegin=242150|WordAlignmentEnd=242240
4	neuf	neuf	NUM	_	ExtPos=PROPN|Number=Plur	3	flat	_	Exponence[Number]=Inherent|WordAlignmentBegin=242240|WordAlignmentEnd=242360
5	cent	cent	NUM	_	ExtPos=PROPN|Number=Plur	3	flat	_	Exponence[Number]=Inherent|WordAlignmentBegin=242360|WordAlignmentEnd=242510
6	dix-huit	dix-huit	NUM	_	ExtPos=PROPN|Number=Plur	3	flat	_	Exponence[Number]=Inherent|SpaceAfter=No|WordAlignmentBegin=242510|WordAlignmentEnd=242889
7	,	,	PUNCT	_	_	3	punct	_	WordAlignmentBegin=242889|WordAlignmentEnd=243037
8	à	à	ADP	_	_	9	case	_	WordAlignmentBegin=243037|WordAlignmentEnd=243346
9	Rennes	Rennes	PROPN	_	_	24	obl:mod	_	WordAlignmentBegin=243346|WordAlignmentEnd=243602
10	par	par	ADP	_	_	11	case	_	WordAlignmentBegin=243602|WordAlignmentEnd=243732
11	exemple	exemple	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No|WordAlignmentBegin=243732|WordAlignmentEnd=243983
12	,	,	PUNCT	_	_	15	punct	_	WordAlignmentBegin=243983|WordAlignmentEnd=243983
13	soixante-dix	soixante-dix	NUM	_	Number=Plur	14	nummod	_	Exponence[Number]=Inherent|WordAlignmentBegin=243983|WordAlignmentEnd=244352
14	mille	mille	NUM	_	Number=Plur	15	nummod	_	Exponence[Number]=Inherent|WordAlignmentBegin=244352|WordAlignmentEnd=244482
15	habitants	habitant	NOUN	_	Gender=Masc|Number=Plur	9	parataxis:parenth	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|WordAlignmentBegin=244482|WordAlignmentEnd=244782
16	en	en	ADP	_	_	17	case	_	WordAlignmentBegin=244782|WordAlignmentEnd=244812
17	mille	mille	NUM	_	ExtPos=PROPN|Number=Sing	15	nmod	_	Exponence[Number]=Inherent|WordAlignmentBegin=244812|WordAlignmentEnd=244872
18	neuf	neuf	NUM	_	ExtPos=PROPN|Number=Plur	17	flat	_	Exponence[Number]=Inherent|WordAlignmentBegin=244872|WordAlignmentEnd=244972
19	cent	cent	NUM	_	ExtPos=PROPN|Number=Plur	17	flat	_	Exponence[Number]=Inherent|WordAlignmentBegin=244972|WordAlignmentEnd=245092
20	dix-huit	dix-huit	NUM	_	ExtPos=PROPN|Number=Plur	17	flat	_	Exponence[Number]=Inherent|SpaceAfter=No|WordAlignmentBegin=245092|WordAlignmentEnd=245352
21	,	,	PUNCT	_	_	17	punct	_	WordAlignmentBegin=245352|WordAlignmentEnd=245352
22	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	24	expl:subj	_	Exponence[Person]=Inherent|WordAlignmentBegin=245352|WordAlignmentEnd=245383
23	y	y	PRON	_	Person=3|PronType=Prs	24	expl:comp	_	Exponence[Person]=Inherent|WordAlignmentBegin=245383|WordAlignmentEnd=245453
24	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	Exponence[Number]=Absent|Exponence[Person]=Absent|WordAlignmentBegin=245453|WordAlignmentEnd=245602
25	trente	trente	NUM	_	Number=Plur	26	nummod	_	Exponence[Number]=Inherent|WordAlignmentBegin=245602|WordAlignmentEnd=245862
26	baignoires	baignoire	NOUN	_	Gender=Fem|Number=Plur	24	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No|WordAlignmentBegin=245862|WordAlignmentEnd=246399
27	.	.	PUNCT	_	_	24	punct	_	WordAlignmentBegin=246399|WordAlignmentEnd=246399

~~~


