---
layout: base
title:  'Statistics of nsubj:caus in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fr_rhapsodie-dep-nsubj-pass.html">nsubj:pass</a></tt>.

14 nodes (0%) are attached to their parents as `nsubj:caus`.

14 instances of `nsubj:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.71428571428571.

The following 3 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (12; 86% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:caus	color:blue
1	et	et	CCONJ	_	_	6	cc	_	_
2	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj:caus	_	_
3	m'	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	6	iobj	_	SpaceAfter=No
4	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
5	fait	faire	AUX	DoubleAux	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	aux:caus	_	Scrap=Yes
6	voir	voir	VERB	CAUSATIVE	VerbForm=Inf	0	root	_	SpaceAfter=No
7	…	…	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 nsubj:caus	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	que	que	SCONJ	_	_	10	mark	_	_
4	bien	bien	ADV	_	_	10	nsubj:caus	_	_
5	de	de	ADP	_	_	7	case	_	_
6	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
7	tragédies	tragédie	NOUN	_	Gender=Fem|Number=Plur	4	obl:arg	_	_
8	aujourd'hui	aujourd'hui	ADV	_	_	10	advmod	_	_
9	font	faire	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	aux:caus	_	_
10	douter	douter	VERB	_	VerbForm=Inf	2	ccomp	_	_
11	de	de	ADP	_	_	13	case	_	_
12	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	13	det	_	_
13	espérance	espérance	NOUN	_	Gender=Fem|Number=Sing	10	obl:arg	_	SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 nsubj:caus	color:blue
1	à	à	ADP	_	_	3	case	_	_
2	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	3	det	_	SpaceAfter=No
3	intérieur	intérieur	NOUN	_	Gender=Masc|Number=Sing	12	obl:mod	_	_
4	de	de	ADP	_	_	6	case	_	_
5	chaque	chaque	DET	_	Number=Sing|Person=3|PronType=Ind	6	det	_	_
6	nation	nation	NOUN	_	Gender=Fem|Number=Sing	3	nmod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	3	punct	_	_
8	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	exigence	exigence	NOUN	_	Gender=Fem|Number=Sing	12	nsubj:caus	_	_
10	se	se	PRON	_	Person=3|PronType=Prs	12	dep:comp	_	_
11	fait	faire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux:caus	_	_
12	entendre	entendre	VERB	_	VerbForm=Inf	0	root	_	_
13	toujours	toujours	ADV	_	_	15	advmod	_	_
14	plus	plus	NOUN	_	Gender=Masc	15	obl:mod	_	_
15	forte	fort	ADJ	_	Gender=Fem|Number=Sing	12	advcl	_	_
16	pour	pour	ADP	_	_	24	mark	_	_
17	que	que	SCONJ	_	_	24	mark	_	_
18	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	19	det	_	_
19	avancées	avancée	NOUN	_	Gender=Fem|Number=Plur	24	nsubj:pass	_	_
20	de	de	ADP	_	_	22	case	_	_
21	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	science	science	NOUN	_	Gender=Fem|Number=Sing	19	nmod	_	_
23	soient	être	AUX	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	24	aux:pass	_	_
24	orientées	orienter	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	12	advcl	_	_
25	vers	vers	ADP	_	_	27	case	_	_
26	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	_	_
27	bien	bien	NOUN	_	Gender=Masc|Number=Sing	24	obl:arg	_	_
28	de	de	ADP	_	_	30	case	_	_
29	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	30	det	_	SpaceAfter=No
30	Homme	Homme	PROPN	_	_	27	nmod	_	_
31	et	et	CCONJ	_	_	34	cc	_	_
32	ne	ne	ADV	_	Polarity=Neg	34	advmod	_	_
33	se	se	PRON	_	Person=3|PronType=Prs	34	dep:comp	_	_
34	retournent	retourner	VERB	ETRE	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	24	conj	_	_
35	jamais	jamais	ADV	_	_	34	advmod	_	_
36	contre	contre	ADP	_	_	37	case	_	_
37	lui	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	34	obl:arg	_	SpaceAfter=No
38	.	.	PUNCT	_	_	12	punct	_	_

~~~


