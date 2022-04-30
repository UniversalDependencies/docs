---
layout: base
title:  'Statistics of aux:pass in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-aux.html">aux</a></tt>.
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_parisstories-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_parisstories-dep-aux-tense.html">aux:tense</a></tt>.

93 nodes (0%) are attached to their parents as `aux:pass`.

93 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34408602150538.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (92; 99% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	me	le	PRON	_	_	4	dep:comp	_	_
3	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	aperçue	apercevoir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	que	que	SCONJ	_	_	8	mark	_	_
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	SpaceAfter=No
7	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	ccomp	_	_
9	qui	qui	PRON	_	_	11	nsubj	_	_
10	les	le	PRON	_	Number=Plur|Person=3|PronType=Prs	11	obj	_	_
11	empêchait	empêcher	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	advcl:cleft	_	_
12	de	de	ADP	_	_	13	mark	_	_
13	gonfler	gonfler	VERB	_	VerbForm=Inf	11	ccomp	_	SpaceAfter=No
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 25 aux:pass	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	nsubj	_	SpaceAfter=No
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
6	vraiment	vraiment	ADV	_	_	9	advmod	_	_
7	plus	plus	ADV	_	_	9	advmod	_	_
8	mon	son	DET	_	Number=Sing|Number[psor]=Sing|Person[psor]=1|PronType=Prs	9	det	_	_
9	amie	amie	NOUN	_	Gender=Fem|Number=Sing	2	reparandum	_	_
10	que	que	SCONJ	_	_	7	dep:comp	_	SpaceAfter=No
11	,	,	PUNCT	_	_	14	punct	_	_
12	que	que	SCONJ	_	_	14	case	_	_
13	ma	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|PronType=Prs	14	det	_	_
14	collègue	collègue	NOUN	_	Number=Sing	10	reparandum	_	SpaceAfter=No
15	,	,	PUNCT	_	_	30	punct	_	_
16	et	et	CCONJ	_	_	30	cc	_	SpaceAfter=No
17	,	,	PUNCT	_	_	30	punct	_	_
18	même	même	ADV	_	_	30	advmod	_	SpaceAfter=No
19	,	,	PUNCT	_	_	20	punct	_	_
20	en	en	PRON	_	Person=3|PronType=Prs	30	advcl	_	_
21	fait	fait	NOUN	_	Gender=Masc|Number=Sing	20	obj	_	SpaceAfter=No
22	,	,	PUNCT	_	_	26	punct	_	_
23	quand	quand	SCONJ	_	_	26	mark	_	_
24	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	26	nsubj	_	_
25	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	26	aux:pass	_	_
26	fâchées	fâchées	ADJ	_	Gender=Fem|Number=Plur	35	advcl	_	SpaceAfter=No
27	,	,	PUNCT	_	_	26	punct	_	_
28	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	30	nsubj	_	SpaceAfter=No
29	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	30	cop	_	_
30	marrant	marrant	ADJ	_	Gender=Masc|Number=Sing	2	reparandum	_	SpaceAfter=No
31	,	,	PUNCT	_	_	35	punct	_	_
32	mais	mais	CCONJ	_	_	35	cc	_	_
33	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	35	nsubj:pass	_	_
34	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	35	aux	_	_
35	obligé	obliger	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	30	conj	_	_
36	de	de	ADP	_	_	38	mark	_	_
37	se	se	PRON	_	Person=3|PronType=Prs|Reflex=Yes	38	dep:comp	_	_
38	parler	parler	VERB	_	VerbForm=Inf	35	xcomp	_	SpaceAfter=No
39	,	,	PUNCT	_	_	41	punct	_	_
40	à	à	ADP	_	_	41	case	_	_
41	cause	cause	NOUN	_	Gender=Fem|Number=Sing	35	obl:mod	_	SpaceAfter=No
42	,	,	PUNCT	_	_	45	punct	_	_
43	enfin	enfin	ADV	_	_	45	discourse	_	SpaceAfter=No
44	,	,	PUNCT	_	_	43	punct	_	_
45	grâce	grâce	ADV	_	_	41	reparandum	_	_
46	au	au	ADP	_	_	47	case	_	_
47	travail	travail	NOUN	_	Gender=Masc|Number=Sing	45	obl:arg	_	SpaceAfter=No
48	,	,	PUNCT	_	_	50	punct	_	_
49	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	50	nsubj	_	_
50	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	45	discourse	_	_
51	dire	dire	VERB	_	VerbForm=Inf	50	xcomp	_	SpaceAfter=No
52	.	.	PUNCT	_	_	2	punct	_	_

~~~


