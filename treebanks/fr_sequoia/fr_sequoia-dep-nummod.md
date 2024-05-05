---
layout: base
title:  'Statistics of nummod in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `nummod`

This relation is universal.

878 nodes (1%) are attached to their parents as `nummod`.

877 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16856492027335.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (874; 100% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Ouverture	ouverture	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
2	tous	tout	ADJ	_	Gender=Masc|Number=Plur	4	amod	_	_
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	_
4	jours	jour	NOUN	_	Gender=Masc|Number=Plur	1	nmod	_	_
5	sauf	sauf	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	lundi	lundi	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
8	de	de	ADP	_	_	10	case	_	_
9	14	14	NUM	_	NumType=Card	10	nummod	_	SpaceAfter=No
10	h	h	NOUN	_	Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
11	30	30	NUM	_	NumType=Card	10	nmod	_	_
12	à	à	ADP	_	_	14	case	_	_
13	18	18	NUM	_	NumType=Card	14	nummod	_	SpaceAfter=No
14	h	h	NOUN	_	Gender=Fem|Number=Sing	10	obl:arg	_	SpaceAfter=No
15	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 nummod	color:blue
1	À	à	ADP	_	_	2	case	_	_
2	cause	cause	NOUN	_	Gender=Fem|Number=Sing	24	obl:mod	_	_
3	de	de	ADP	_	_	5	case	_	_
4	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	difficultés	difficulté	NOUN	_	Gender=Fem|Number=Plur	2	nmod	_	_
6	naturelles	naturel	ADJ	_	Gender=Fem|Number=Plur	5	amod	_	_
7	concernant	concerner	VERB	_	Tense=Pres|VerbForm=Part	5	acl	_	_
8	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	endroit	endroit	NOUN	_	Gender=Masc|Number=Sing	7	obj	_	_
10	où	où	PRON	_	PronType=Rel	12	obl:mod	_	_
11	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	12	expl:pv	_	_
12	déroulent	dérouler	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	acl:relcl	_	_
13	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	14	det	_	_
14	rencontres	rencontre	NOUN	_	Gender=Fem|Number=Plur	12	nsubj	_	_
15	de	de	ADP	_	_	17	case	_	_
16	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	17	det	_	SpaceAfter=No
17	Euro	euro	PROPN	_	Gender=Masc|Number=Sing	14	nmod	_	_
18	2000	2000	NUM	_	NumType=Card	17	nummod	_	SpaceAfter=No
19	,	,	PUNCT	_	_	2	punct	_	_
20	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	groupe	groupe	NOUN	_	Gender=Masc|Number=Sing	24	nsubj	_	_
22	PPE-DE	PPE-DE	PROPN	_	_	21	nmod	_	_
23	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	aux:tense	_	_
24	décidé	décider	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
25	en	en	ADP	_	_	26	case	_	_
26	bloc	bloc	NOUN	_	Gender=Masc|Number=Sing	24	obl:mod	_	_
27	de	de	ADP	_	_	30	mark	_	_
28	ne	ne	ADV	_	Polarity=Neg	30	advmod	_	_
29	pas	pas	ADV	_	Polarity=Neg	30	advmod	_	_
30	soutenir	soutenir	VERB	_	VerbForm=Inf	24	xcomp	_	Subject=SubjRaising
31	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	32	det	_	_
32	résolution	résolution	NOUN	_	Gender=Fem|Number=Sing	30	obj	_	_
33	et	et	CCONJ	_	_	36	cc	_	_
34	de	de	ADP	_	_	36	mark	_	_
35	la	lui	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	36	obj	_	_
36	retirer	retirer	VERB	_	VerbForm=Inf	30	conj	_	SpaceAfter=No|Subject=Instantiated
37	.	.	PUNCT	_	_	24	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	3	det	_	_
2	deux	deux	NUM	_	NumType=Card	3	nummod	_	_
3	premiers	premier	ADJ	_	Gender=Masc|Number=Plur|NumType=Ord	5	nsubj:pass	_	_
4	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	libérés	libérer	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
6	en	en	ADP	_	_	7	case	_	_
7	juin	juin	NOUN	_	Gender=Masc|Number=Sing	5	obl:mod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	Aurel	Aurel	PROPN	_	Gender=Masc|Number=Sing	5	conj	_	_
10	Cornéa	Cornéa	PROPN	_	_	9	flat:name	_	_
11	en	en	ADP	_	_	12	case	_	_
12	décembre	décembre	NOUN	_	Gender=Masc|Number=Sing	9	orphan	_	_
13	de	de	ADP	_	_	16	case	_	_
14	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
15	même	même	ADJ	_	Number=Sing	16	amod	_	_
16	année	année	NOUN	_	Gender=Fem|Number=Sing	12	nmod	_	_
17	et	et	CCONJ	_	_	18	cc	_	_
18	Jean	Jean	PROPN	_	Gender=Fem|Number=Sing	5	conj	_	_
19	Louis	Louis	PROPN	_	Gender=Masc|Number=Sing	18	flat:name	_	_
20	Normandin	Normandin	PROPN	_	_	18	nmod	_	_
21	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	27	27	NUM	_	NumType=Card	18	orphan	_	_
23	novembre	novembre	NOUN	_	Gender=Masc|Number=Sing	22	nmod	_	_
24	de	de	ADP	_	_	26	case	_	_
25	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	26	det	_	SpaceAfter=No
26	année	année	NOUN	_	Gender=Fem|Number=Sing	23	nmod	_	_
27	suivante	suivant	ADJ	_	Gender=Fem|Number=Sing	26	amod	_	SpaceAfter=No
28	,	,	PUNCT	_	_	22	punct	_	_
29	en	en	ADP	_	_	31	case	_	_
30	même	même	ADJ	_	Number=Sing	31	amod	_	_
31	temps	temps	NOUN	_	Gender=Masc	20	nmod	_	_
32	qu'	que	SCONJ	_	_	35	case	_	SpaceAfter=No
33	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	35	det	_	_
34	autre	autre	ADJ	_	Number=Sing	35	amod	_	_
35	journaliste	journaliste	NOUN	_	Gender=Masc|Number=Sing	31	nmod	_	SpaceAfter=No
36	,	,	PUNCT	_	_	37	punct	_	_
37	Roger	Roger	PROPN	_	Gender=Masc|Number=Sing	35	appos	_	_
38	Auque	Auque	PROPN	_	_	37	flat:name	_	SpaceAfter=No
39	,	,	PUNCT	_	_	37	punct	_	_
40	enlevé	enlever	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	35	acl	_	_
41	en	en	ADP	_	_	42	case	_	_
42	janvier	janvier	NOUN	_	Gender=Masc|Number=Sing	40	obl:mod	_	_
43	1987	1987	NUM	_	NumType=Card	42	nmod	_	SpaceAfter=No
44	.	.	PUNCT	_	_	5	punct	_	_

~~~


