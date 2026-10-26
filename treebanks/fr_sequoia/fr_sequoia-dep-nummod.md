---
layout: base
title:  'Statistics of nummod in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `nummod`

This relation is universal.

913 nodes (1%) are attached to their parents as `nummod`.

913 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17743702081051.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (766; 84% instances), <tt><a href="fr_sequoia-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (145; 16% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Ouverture	ouverture	NOUN	_	Gender=Fem|Number=Sing	0	root	_	Exponence[Gender]=Inherent
2	tous	tout	ADJ	_	Gender=Masc|Number=Plur	4	amod	_	_
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	_
4	jours	jour	NOUN	_	Gender=Masc|Number=Plur	1	nmod	_	Exponence[Gender]=Inherent
5	sauf	sauf	CCONJ	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	lundi	lundi	NOUN	_	Gender=Masc|Number=Sing	4	appos	_	Exponence[Gender]=Inherent
8	de	de	ADP	_	_	10	case	_	_
9	14	14	NUM	_	NumType=Card	10	nummod	_	SpaceAfter=No
10	h	h	NOUN	_	Gender=Fem|Number=Sing	1	nmod	_	Exponence[Gender]=Inherent|SpaceAfter=No
11	30	30	NUM	_	NumType=Card	10	nmod	_	_
12	à	à	ADP	_	_	14	case	_	_
13	18	18	NUM	_	NumType=Card	14	nummod	_	SpaceAfter=No
14	h	h	NOUN	_	Gender=Fem|Number=Sing	10	nmod	_	Exponence[Gender]=Inherent|SpaceAfter=No
15	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	85	85	NUM	_	Number=Plur|NumType=Card	2	nummod	_	Exponence[Number]=Inherent|SpaceAfter=No
2	%	%	SYM	_	ExtPos=NOUN|Number=Plur	9	nsubj	_	_
3	de	de	ADP	_	_	5	case	_	_
4	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	patients	patient	NOUN	_	Gender=Masc|Number=Plur	2	nmod	_	Exponence[Gender]=Inherent
6	n'	ne	ADV	_	Polarity=Neg	9	advmod	_	SpaceAfter=No
7	avaient	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	9	aux:tense	_	_
8	jamais	jamais	ADV	_	Polarity=Neg	9	advmod	_	_
9	reçu	recevoir	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Tense[denom]=Past
10	de	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	11	det	_	_
11	bisphosphonates	bisphosphonate	NOUN	_	Gender=Masc|Number=Plur	9	obj	_	Exponence[Gender]=Inherent|SpaceAfter=No
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	3	det	_	_
2	deux	deux	NUM	_	Number=Plur|NumType=Card	3	nummod	_	Exponence[Number]=Inherent
3	premiers	premier	ADJ	_	Gender=Masc|Number=Plur|NumType=Ord	5	nsubj:pass	_	_
4	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	libérés	libérer	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	Tense[denom]=Past
6	en	en	ADP	_	_	7	case	_	_
7	juin	juin	NOUN	_	Gender=Masc|Number=Sing	5	obl:mod	_	Exponence[Gender]=Inherent|SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	Aurel	Aurel	PROPN	_	Gender=Masc|Number=Sing	5	conj	_	Exponence[Gender]=Inherent
10	Cornéa	Cornéa	PROPN	_	_	9	flat:name	_	_
11	en	en	ADP	_	_	12	case	_	_
12	décembre	décembre	NOUN	_	Gender=Masc|Number=Sing	9	orphan	_	Exponence[Gender]=Inherent
13	de	de	ADP	_	_	16	case	_	_
14	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
15	même	même	ADJ	_	Gender=Fem|Number=Sing	16	amod	_	Exponence[Gender]=Absent
16	année	année	NOUN	_	Gender=Fem|Number=Sing	12	nmod	_	Exponence[Gender]=Inherent
17	et	et	CCONJ	_	_	18	cc	_	_
18	Jean	Jean	PROPN	_	Gender=Fem|Number=Sing	5	conj	_	Exponence[Gender]=Inherent
19	Louis	Louis	PROPN	_	Gender=Masc|Number=Sing	18	flat:name	_	Exponence[Gender]=Inherent
20	Normandin	Normandin	PROPN	_	_	18	nmod	_	_
21	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	27	27	NUM	_	Number=Sing|NumType=Card	18	orphan	_	Exponence[Number]=Inherent
23	novembre	novembre	NOUN	_	Gender=Masc|Number=Sing	22	nmod	_	Exponence[Gender]=Inherent
24	de	de	ADP	_	_	26	case	_	_
25	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	26	det	_	Exponence[Gender]=Absent|SpaceAfter=No
26	année	année	NOUN	_	Gender=Fem|Number=Sing	23	nmod	_	Exponence[Gender]=Inherent
27	suivante	suivant	ADJ	_	Gender=Fem|Number=Sing	26	amod	_	SpaceAfter=No
28	,	,	PUNCT	_	_	22	punct	_	_
29	en	en	ADP	_	_	31	case	_	_
30	même	même	ADJ	_	Gender=Masc|Number=Sing	31	amod	_	Exponence[Gender]=Absent
31	temps	temps	NOUN	_	Gender=Masc	20	nmod	_	Exponence[Gender]=Inherent
32	qu'	que	SCONJ	_	_	35	case	_	SpaceAfter=No
33	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	35	det	_	_
34	autre	autre	ADJ	_	Gender=Masc|Number=Sing	35	amod	_	Exponence[Gender]=Absent
35	journaliste	journaliste	NOUN	_	Gender=Masc|Number=Sing	31	nmod	_	Exponence[Gender]=Inherent|SpaceAfter=No
36	,	,	PUNCT	_	_	37	punct	_	_
37	Roger	Roger	PROPN	_	Gender=Masc|Number=Sing	35	appos	_	Exponence[Gender]=Inherent
38	Auque	Auque	PROPN	_	_	37	flat:name	_	SpaceAfter=No
39	,	,	PUNCT	_	_	37	punct	_	_
40	enlevé	enlever	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	35	acl	_	Tense[denom]=Past
41	en	en	ADP	_	_	42	case	_	_
42	janvier	janvier	NOUN	_	Gender=Masc|Number=Sing	40	obl:mod	_	Exponence[Gender]=Inherent
43	1987	1987	NUM	_	Number=Sing|NumType=Card	42	nmod	_	Exponence[Number]=Inherent|SpaceAfter=No
44	.	.	PUNCT	_	_	5	punct	_	_

~~~


