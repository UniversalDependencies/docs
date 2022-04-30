---
layout: base
title:  'Statistics of nummod in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `nummod`

This relation is universal.

148 nodes (0%) are attached to their parents as `nummod`.

142 instances of `nummod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40540540540541.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (136; 92% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (5; 3% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (1; 1% instances).


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
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	crois	croire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	qu'	que	SCONJ	_	_	16	mark	_	SpaceAfter=No
4	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	expl:subj	_	_
5	y	y	PRON	_	Person=3|PronType=Prs	6	iobj	_	_
6	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	advcl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	expl:subj	_	_
9	y	y	PRON	_	Person=3|PronType=Prs	10	iobj	_	_
10	a	avoir	VERB	conj:reform	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	reparandum	_	_
11	quelques	quelque	DET	_	Number=Plur|PronType=Ind	12	dep	_	_
12	années	année	NOUN	_	Gender=Fem|Number=Plur	10	obj	_	SpaceAfter=No
13	,	,	PUNCT	_	_	6	punct	_	_
14	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	16	nsubj	_	_
15	avaient	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	16	aux	_	_
16	dit	dire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	ccomp	_	_
17	que	que	SCONJ	_	_	21	mark	_	_
18	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	19	det	_	SpaceAfter=No
19	immobilier	immobilier	NOUN	_	Gender=Masc|Number=Sing	21	nsubj	_	_
20	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	21	aux	_	_
21	augmenté	augmenter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	16	ccomp	_	_
22	d'	de	ADP	_	_	25	case	_	SpaceAfter=No
23	environ	environ	ADV	_	_	24	advmod	_	_
24	neuf	neuf	NUM	_	Number=Plur	25	nummod	_	_
25	pour	pour	ADP	_	_	21	obl:mod	_	ExtPos=NOUN|Idiom=Yes
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
1	pa~	pa~	SCONJ	_	_	0	root	_	Overlap=Rhap_D2008-54bis|SpaceAfter=No
2	,	,	PUNCT	_	_	10	punct	_	Overlap=Rhap_D2008-54bis
3	parce	parce	SCONJ	_	_	10	mark	_	ExtPos=SCONJ|Idiom=Yes|Overlap=Rhap_D2008-54bis
4	que	que	SCONJ	_	_	3	fixed	_	InIdiom=Yes|Overlap=Rhap_D2008-54bis
5	à	à	ADP	_	_	7	case	_	_
6	trente	trente	NUM	_	Number=Plur	7	nummod	_	_
7	mille	mille	NUM	_	Number=Plur	10	obl:mod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	10	nsubj	_	_
10	êtes	être	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	1	reparandum	_	_
11	dans	dans	ADP	_	_	10	iobj	_	SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	_
13	dans	dans	ADP	_	_	11	reparandum	_	SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	_
15	encore	encore	ADV	_	_	16	advmod	_	_
16	dans	dans	ADP	_	_	13	reparandum	_	_
17	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	SpaceAfter=No
18	,	,	PUNCT	_	_	21	punct	_	_
19	dans	dans	ADP	_	_	21	case	_	_
20	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	raison~	raison~	NOUN	_	_	16	reparandum	_	SpaceAfter=No
22	,	,	PUNCT	_	_	23	punct	_	_
23	enfin	enfin	ADV	_	_	21	discourse	_	SpaceAfter=No
24	,	,	PUNCT	_	_	26	punct	_	_
25	dans	dans	ADP	_	_	26	case	_	_
26	l~	l~	X	_	_	21	reparandum	_	SpaceAfter=No
27	…	…	PUNCT	_	_	1	punct	_	_

~~~


