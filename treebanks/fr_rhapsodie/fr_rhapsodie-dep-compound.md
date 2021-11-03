---
layout: base
title:  'Statistics of compound in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `compound`

This relation is universal.

51 nodes (0%) are attached to their parents as `compound`.

50 instances of `compound` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.09803921568627.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (48; 94% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 compound	color:blue
1	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	rallonge	rallonge	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
3	à	à	ADP	_	_	4	mark	_	_
4	venir	venir	VERB	_	VerbForm=Inf	2	acl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	également	également	ADV	_	_	4	advmod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	dans	dans	ADP	_	_	10	case	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	secteur	secteur	NOUN	_	Gender=Masc|Number=Sing	4	obl:mod	_	_
11	automobile	automobile	NOUN	_	Gender=Fem|Number=Sing	10	compound	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 compound	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
2	n'	ne	ADV	_	Polarity=Neg	5	advmod	_	SpaceAfter=No
3	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	jamais	jamais	ADV	_	_	5	advmod	_	_
5	eu	avoir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	environnement	environnement	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	_
8	d'	de	ADP	_	_	9	case	_	SpaceAfter=No
9	accent	accent	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	_
10	pied	pied	NOUN	_	Gender=Masc|Number=Sing	9	compound	_	_
11	noir	noir	ADJ	_	Gender=Masc|Number=Sing	10	compound	_	SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 compound	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	expl:subj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	philosophe	philosophe	NOUN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	euh	euh	INTJ	_	_	4	discourse	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	américain	américain	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	euh	euh	INTJ	_	_	8	discourse	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	disciple	disciple	NOUN	_	Gender=Masc|Number=Sing	4	appos	_	_
13	de	de	ADP	_	_	15	case	_	_
14	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	philosophe	philosophe	NOUN	_	Gender=Masc|Number=Sing	12	nmod	_	_
16	anglo	anglo	ADJ	_	Gender=Masc|Number=Sing	15	amod	_	_
17	aus~	aus~	ADJ	_	_	16	compound	_	SpaceAfter=No
18	,	,	PUNCT	_	_	19	punct	_	_
19	autrichien	autrichien	ADJ	conj:reform	Gender=Masc|Number=Sing	17	reparandum	_	SpaceAfter=No
20	,	,	PUNCT	_	_	21	punct	_	_
21	euh	euh	INTJ	_	_	19	discourse	_	SpaceAfter=No
22	,	,	PUNCT	_	_	23	punct	_	_
23	Wittgenstein	Wittgenstein	PROPN	_	_	15	nmod:appos	_	_
24	qui	qui	PRON	_	PronType=Rel	29	nsubj	_	_
25	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	29	aux	_	SpaceAfter=No
26	,	,	PUNCT	_	_	29	punct	_	_
27	euh	euh	INTJ	_	_	29	discourse	_	SpaceAfter=No
28	,	,	PUNCT	_	_	27	punct	_	_
29	avancé	avancer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	advcl:cleft	_	_
30	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	31	det	_	_
31	idée	idée	NOUN	_	Gender=Fem|Number=Sing	29	obj	_	_
32	de	de	ADP	_	_	34	case	_	_
33	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	34	det	_	SpaceAfter=No
34	art	art	NOUN	_	Gender=Masc|Number=Sing	31	nmod	_	_
35	comme	comme	ADP	_	_	36	case	_	_
36	concept	concept	NOUN	_	Gender=Masc|Number=Sing	34	nmod	_	_
37	flou	flou	ADJ	_	Gender=Masc|Number=Sing	36	amod	_	SpaceAfter=No
38	,	,	PUNCT	_	_	41	punct	_	_
39	c'est-à-dire	c'est-à-dire	CCONJ	_	_	41	cc	_	_
40	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	41	det	_	_
41	art	art	NOUN	conj:reform	Gender=Masc|Number=Sing	34	reparandum	_	_
42	dont	dont	PRON	_	PronType=Rel	41	reparandum	_	_
43	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	42	dep	_	Scrap=Yes|SpaceAfter=No
44	,	,	PUNCT	_	_	45	punct	_	_
45	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	43	dep	_	Scrap=Yes
46	a~	a~	X	conj:reform	_	45	dep	_	Scrap=Yes|SpaceAfter=No
47	.	.	PUNCT	_	_	4	punct	_	_

~~~


