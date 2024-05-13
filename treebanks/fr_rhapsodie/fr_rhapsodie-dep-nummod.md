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

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (132; 92% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (5; 3% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	trois	trois	NUM	_	Number=Plur	2	nummod	_	_
2	policiers	policier	NOUN	_	Gender=Masc|Number=Plur	0	root	_	_
3	blessés	blesser	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	acl	_	SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 24 nummod	color:blue
1	je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	crois	croire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	qu'	que	SCONJ	_	_	16	mark	_	SpaceAfter=No
4	il	lui	PRON	_	ExtPos=ADP|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	reparandum	_	Idiom=Yes
5	y	y	PRON	_	Person=3|PronType=Prs	4	fixed	_	InIdiom=Yes
6	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	fixed	_	InIdiom=Yes|SpaceAfter=No
7	,	,	PUNCT	_	_	4	punct	_	_
8	il	lui	PRON	_	ExtPos=ADP|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	case	_	Idiom=Yes
9	y	y	PRON	_	Person=3|PronType=Prs	8	fixed	_	InIdiom=Yes
10	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	fixed	_	InIdiom=Yes
11	quelques	quelque	DET	_	Number=Plur|PronType=Ind	12	det	_	_
12	années	année	NOUN	_	Gender=Fem|Number=Plur	16	obl:mod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	_
14	ils	eux	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	16	nsubj	_	_
15	avaient	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	16	aux:tense	_	_
16	dit	dire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	ccomp	_	_
17	que	que	SCONJ	_	_	21	mark	_	_
18	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	19	det	_	SpaceAfter=No
19	immobilier	immobilier	NOUN	_	Gender=Masc|Number=Sing	21	nsubj	_	_
20	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	21	aux:tense	_	_
21	augmenté	augmenter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	16	ccomp	_	_
22	d'	de	ADP	_	_	25	case	_	SpaceAfter=No
23	environ	environ	ADV	_	_	24	advmod	_	_
24	neuf	neuf	NUM	_	Number=Plur	25	nummod	_	_
25	pour	pour	ADP	_	ExtPos=NOUN	21	obl:mod	_	Idiom=Yes
26	cent	cent	NUM	_	Number=Plur	25	fixed	_	InIdiom=Yes
27	à	à	ADP	_	_	28	case	_	_
28	Paris	Paris	PROPN	_	_	21	obl:mod	_	SpaceAfter=No
29	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	pa~	pa~	SCONJ	_	_	10	reparandum	_	Overlap=Rhap_D2008-54bis|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	Overlap=Rhap_D2008-54bis
3	parce	parce	ADV	_	ExtPos=SCONJ	10	mark	_	Idiom=Yes|Overlap=Rhap_D2008-54bis
4	que	que	SCONJ	_	_	3	fixed	_	InIdiom=Yes|Overlap=Rhap_D2008-54bis
5	à	à	ADP	_	_	7	case	_	_
6	trente	trente	NUM	_	Number=Plur	7	nummod	_	_
7	mille	mille	NUM	_	Number=Plur	10	obl:mod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	vous	vous	PRON	_	Number=Plur|Person=2|PronType=Prs	10	nsubj	_	_
10	êtes	être	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
11	dans	dans	ADP	_	_	26	reparandum	_	SpaceAfter=No
12	,	,	PUNCT	_	_	11	punct	_	_
13	dans	dans	ADP	_	_	26	reparandum	_	SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	_
15	encore	encore	ADV	_	_	17	advmod	_	_
16	dans	dans	ADP	_	_	17	case	_	_
17	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	reparandum	_	Scrap=Yes|SpaceAfter=No
18	,	,	PUNCT	_	_	17	punct	_	_
19	dans	dans	ADP	_	_	21	case	_	_
20	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	raison~	raison~	NOUN	_	_	26	reparandum	_	SpaceAfter=No
22	,	,	PUNCT	_	_	23	punct	_	_
23	enfin	enfin	ADV	_	_	21	discourse	_	SpaceAfter=No
24	,	,	PUNCT	_	_	21	punct	_	_
25	dans	dans	ADP	_	_	26	case	_	_
26	l~	l~	X	_	_	10	obl:arg	_	SpaceAfter=No
27	…	…	PUNCT	_	_	10	punct	_	_

~~~


