---
layout: base
title:  'Statistics of nmod:range in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `nmod:range`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-nmod.html">nmod</a></tt>.

22 nodes (0%) are attached to their parents as `nmod:range`.

22 instances of `nmod:range` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.27272727272727.

The following 5 pairs of parts of speech are connected with `nmod:range`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (11; 50% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (4; 18% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (3; 14% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (2; 9% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 nmod:range	color:blue
1	Ouverture	ouverture	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
2	tous	tout	ADJ	_	Gender=Masc|Number=Plur	4	amod	_	_
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	_
4	jours	jour	NOUN	_	Gender=Masc|Number=Plur	1	nmod	_	_
5	sauf	sauf	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	lundi	lundi	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
8	de	de	ADP	_	_	10	case	_	_
9	14	14	NUM	_	NumType=Card	10	nummod	_	SpaceAfter=No
10	h	h	NOUN	_	_	1	nmod	_	SpaceAfter=No
11	30	30	NUM	_	NumType=Card	10	nummod	_	_
12	à	à	ADP	_	_	14	case	_	_
13	18	18	NUM	_	NumType=Card	14	nummod	_	SpaceAfter=No
14	h	h	NOUN	_	_	10	nmod:range	_	SpaceAfter=No
15	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod:range	color:blue
1	-	-	PUNCT	_	_	8	punct	_	_
2	De	de	ADP	_	_	3	case	_	_
3	2004	2004	NUM	_	NumType=Card	8	obl:mod	_	_
4	à	à	ADP	_	_	5	case	_	_
5	2006	2006	NUM	_	NumType=Card	3	nmod:range	_	_
6	s'	se	PRON	_	Person=3|Reflex=Yes	8	expl	_	SpaceAfter=No
7	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	développée	développer	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
9	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	extension	extension	NOUN	_	Gender=Fem|Number=Sing	8	nsubj	_	_
11	inattendue	inattendu	ADJ	_	Gender=Fem|Number=Sing	10	amod	_	_
12	de	de	ADP	_	_	14	case	_	_
13	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	14	det	_	_
14	affaire	affaire	NOUN	_	Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 23 nmod:range	color:blue
1	Un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	viticulteur	viticulteur	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	acquéreur	acquéreur	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
5	d'	de	ADP	_	_	7	case	_	SpaceAfter=No
6	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	parcelle	parcelle	NOUN	_	Gender=Fem|Number=Sing	4	nmod	_	_
8	sur	sur	ADP	_	_	10	case	_	_
9	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	zone	zone	NOUN	_	Gender=Fem|Number=Sing	4	nmod	_	_
11	artisanale	artisanal	ADJ	_	Gender=Fem|Number=Sing	10	amod	_	_
12	et	et	CCONJ	_	_	13	cc	_	_
13	souhaite	souhaiter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	_
14	que	que	SCONJ	_	_	18	mark	_	_
15	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	superficie	superficie	NOUN	_	Gender=Fem|Number=Sing	18	nsubj:pass	_	_
17	soit	être	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	aux:pass	_	_
18	portée	porter	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	13	ccomp	_	_
19	de	de	ADP	_	_	20	case	_	_
20	1.000	1.000	PRON	_	NumType=Card	18	obl:arg	_	_
21	à	à	ADP	_	_	23	case	_	_
22	1.500	1.500	NUM	_	NumType=Card	23	nummod	_	_
23	m2	m2	NOUN	_	Gender=Masc|Number=Sing	20	nmod:range	_	_

~~~


