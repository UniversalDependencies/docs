---
layout: base
title:  'Statistics of nummod in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `nummod`

This relation is universal.

143 nodes (0%) are attached to their parents as `nummod`.

140 instances of `nummod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32867132867133.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (133; 93% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (5; 3% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	trois	trois	NUM	_	_	2	nummod	_	AlignBegin=18727|AlignEnd=19111|Number[lex]=Plur
2	policiers	policier	NOUN	_	_	0	root	_	AlignBegin=19111|AlignEnd=19661|Gender[lex]=Masc|Number[ctxt]=Plur
3	blessés	blesser	VERB	_	VerbForm=Part	2	acl	_	AlignBegin=19661|AlignEnd=20296|Gender[ctxt]=Masc|Number[ctxt]=Plur|SpaceAfter=No|Tense[denom]=Past
4	.	.	PUNCT	_	_	2	punct	_	AlignBegin=20296|AlignEnd=20296

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 24 nummod	color:blue
1	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	AlignBegin=30596|AlignEnd=30681
2	crois	croire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=30681|AlignEnd=30811
3	qu'	que	SCONJ	_	_	16	mark	_	AlignBegin=30811|AlignEnd=30931|SpaceAfter=No
4	il	lui	PRON	_	Case=Nom|Emph=No|ExtPos=ADP|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	reparandum	_	AlignBegin=30931|AlignEnd=30961|Idiom=Yes
5	y	y	PRON	_	Person=3|PronType=Prs	4	fixed	_	AlignBegin=30961|AlignEnd=30991|InIdiom=Yes
6	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	fixed	_	AlignBegin=30991|AlignEnd=31161|InIdiom=Yes|SpaceAfter=No
7	,	,	PUNCT	_	_	4	punct	_	AlignBegin=31161|AlignEnd=31161
8	il	lui	PRON	_	Case=Nom|Emph=No|ExtPos=ADP|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	case	_	AlignBegin=31161|AlignEnd=31191|Idiom=Yes
9	y	y	PRON	_	Person=3|PronType=Prs	8	fixed	_	AlignBegin=31191|AlignEnd=31231|InIdiom=Yes
10	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	fixed	_	AlignBegin=31231|AlignEnd=31271|InIdiom=Yes
11	quelques	quelque	DET	_	Number=Plur|PronType=Ind	12	det	_	AlignBegin=31271|AlignEnd=31601
12	années	année	NOUN	_	_	16	obl:mod	_	AlignBegin=31601|AlignEnd=31881|Gender[lex]=Fem|Number[ctxt]=Plur|SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	AlignBegin=31881|AlignEnd=31881
14	ils	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Plur|Person=3|PronType=Prs	16	nsubj	_	AlignBegin=31881|AlignEnd=31991
15	avaient	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	16	aux:tense	_	AlignBegin=31991|AlignEnd=32161
16	dit	dire	VERB	_	Gender=Masc|VerbForm=Part|Voice=Act	2	ccomp	_	AlignBegin=32161|AlignEnd=32311|Number[ctxt]=Sing|Tense[denom]=Past
17	que	que	SCONJ	_	_	21	mark	_	AlignBegin=32311|AlignEnd=32341
18	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	19	det	_	AlignBegin=32341|AlignEnd=32371|Gender[ctxt]=Masc|SpaceAfter=No
19	immobilier	immobilier	NOUN	_	_	21	nsubj	_	AlignBegin=32371|AlignEnd=32981|Gender[lex]=Masc|Number[ctxt]=Sing
20	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	21	aux:tense	_	AlignBegin=32981|AlignEnd=33171
21	augmenté	augmenter	VERB	_	VerbForm=Part|Voice=Act	16	ccomp	_	AlignBegin=33171|AlignEnd=33511|Gender[ctxt]=Masc|Number[ctxt]=Sing|Tense[denom]=Past
22	d'	de	ADP	_	_	25	case	_	AlignBegin=33511|AlignEnd=33551|SpaceAfter=No
23	environ	environ	ADV	_	_	24	advmod	_	AlignBegin=33551|AlignEnd=33871
24	neuf	neuf	NUM	_	_	25	nummod	_	AlignBegin=33871|AlignEnd=34031|Number[lex]=Plur
25	pour	pour	ADP	_	ExtPos=NOUN	21	obl:mod	_	AlignBegin=34031|AlignEnd=34251|Idiom=Yes
26	cent	cent	NUM	_	_	25	fixed	_	AlignBegin=34251|AlignEnd=34421|InIdiom=Yes|Number[lex]=Sing
27	à	à	ADP	_	_	28	case	_	AlignBegin=34421|AlignEnd=34511
28	Paris	Paris	PROPN	_	_	21	obl:mod	_	AlignBegin=34511|AlignEnd=34950|Gender[lex]=Unknown|SpaceAfter=No
29	.	.	PUNCT	_	_	2	punct	_	AlignBegin=34950|AlignEnd=34950

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	pa~	pa~	X	_	ExtPos=SCONJ	10	reparandum	_	AlignBegin=192560|AlignEnd=192665|Overlap=Rhap_D2008-63|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=192910|AlignEnd=192560|Overlap=Rhap_D2008-54bis
3	parce	parce	ADV	_	ExtPos=SCONJ	10	mark	_	AlignBegin=192665|AlignEnd=192845|Idiom=Yes|Overlap=Rhap_D2008-63
4	que	que	SCONJ	_	_	3	fixed	_	AlignBegin=192845|AlignEnd=192910|InIdiom=Yes|Overlap=Rhap_D2008-63
5	à	à	ADP	_	_	7	case	_	AlignBegin=192910|AlignEnd=192975
6	trente	trente	NUM	_	_	7	nummod	_	AlignBegin=192975|AlignEnd=193195|Number[lex]=Plur
7	mille	mille	NUM	_	Number=Plur	10	obl:mod	_	AlignBegin=193195|AlignEnd=193345|SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	AlignBegin=193345|AlignEnd=193345
9	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	10	nsubj	_	AlignBegin=193345|AlignEnd=193462|Polite=Unknown
10	êtes	être	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=193465|AlignEnd=193595
11	dans	dans	ADP	_	_	26	reparandum	_	AlignBegin=193595|AlignEnd=193795|SpaceAfter=No
12	,	,	PUNCT	_	_	11	punct	_	AlignBegin=193795|AlignEnd=193795
13	dans	dans	ADP	_	_	26	reparandum	_	AlignBegin=193795|AlignEnd=194069|SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	AlignBegin=194069|AlignEnd=194069
15	encore	encore	ADV	_	_	17	advmod	_	AlignBegin=194069|AlignEnd=194330
16	dans	dans	ADP	_	_	17	case	_	AlignBegin=194330|AlignEnd=194452
17	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	reparandum	_	AlignBegin=194452|AlignEnd=195252|Scrap=Yes|SpaceAfter=No
18	,	,	PUNCT	_	_	17	punct	_	AlignBegin=195252|AlignEnd=195252
19	dans	dans	ADP	_	_	21	case	_	AlignBegin=195252|AlignEnd=195374
20	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	AlignBegin=195374|AlignEnd=195409
21	raison~	raison~	X	_	ExtPos=NOUN	26	reparandum	_	AlignBegin=195409|AlignEnd=195605|SpaceAfter=No
22	,	,	PUNCT	_	_	23	punct	_	AlignBegin=195605|AlignEnd=195605
23	enfin	enfin	ADV	_	_	21	discourse	_	AlignBegin=195605|AlignEnd=195885|SpaceAfter=No
24	,	,	PUNCT	_	_	21	punct	_	AlignBegin=195885|AlignEnd=195885
25	dans	dans	ADP	_	_	26	case	_	AlignBegin=195885|AlignEnd=196115
26	l~	l~	X	_	_	10	obl:arg	_	AlignBegin=196115|AlignEnd=196201|SpaceAfter=No
27	…	…	PUNCT	_	_	10	punct	_	AlignBegin=196201|AlignEnd=196201

~~~


