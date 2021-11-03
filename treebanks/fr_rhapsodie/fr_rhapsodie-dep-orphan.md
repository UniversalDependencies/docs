---
layout: base
title:  'Statistics of orphan in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `orphan`

This relation is universal.

4 nodes (0%) are attached to their parents as `orphan`.

4 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 3 pairs of parts of speech are connected with `orphan`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 25% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 orphan	color:blue
1	couleur	couleur	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
2	bois	bois	NOUN	_	Gender=Masc	1	compound	_	_
3	de	de	ADP	_	_	4	case	_	_
4	rose	rose	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
5	à	à	ADP	_	_	8	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
7	large	large	ADJ	_	Number=Sing	8	amod	_	_
8	ruban	ruban	NOUN	_	Gender=Masc|Number=Sing	1	orphan	_	_
9	noir	noir	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 orphan	color:blue
1	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	SpaceAfter=No
2	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	été	être	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	an	an	NOUN	_	Gender=Masc|Number=Sing	3	obl:mod	_	_
6	à	à	ADP	_	_	7	case	_	_
7	Lisbonne	Lisbonne	PROPN	_	_	3	obl:arg	_	_
8	et	et	CCONJ	_	_	10	cc	_	_
9	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	an	an	NOUN	_	Gender=Masc|Number=Sing	3	conj	_	_
11	à	à	ADP	_	_	12	case	_	_
12	Porto	Porto	PROPN	_	_	10	orphan	_	_
13	dans	dans	ADP	_	_	14	dep:comp	_	_
14	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	3	dep	_	SpaceAfter=No
15	,	,	PUNCT	_	_	18	punct	_	_
16	dans	dans	ADP	_	_	18	case	_	_
17	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	18	det	_	_
18	collèges	collège	NOUN	_	Gender=Masc|Number=Plur	14	reparandum	_	_
19	et	et	CCONJ	_	_	21	cc	_	_
20	dans	dans	ADP	_	_	21	dep:comp	_	_
21	des	un	DET	de	Definite=Ind|Number=Plur|PronType=Art	18	conj	_	SpaceAfter=No
22	,	,	PUNCT	_	_	25	punct	_	_
23	dans	dans	ADP	_	_	25	case	_	_
24	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	25	det	_	_
25	primaires	primaire	NOUN	_	Gender=Fem|Number=Plur	21	reparandum	_	_
26	portu~	portu~	ADJ	_	_	25	amod	_	SpaceAfter=No
27	,	,	PUNCT	_	_	28	punct	_	_
28	euh	euh	INTJ	_	_	26	discourse	_	SpaceAfter=No
29	,	,	PUNCT	_	_	30	punct	_	_
30	enfin	enfin	ADV	_	_	26	discourse	_	SpaceAfter=No
31	,	,	PUNCT	_	_	32	punct	_	_
32	françaises	français	ADJ	conj:reform	Gender=Fem|Number=Plur	26	reparandum	_	SpaceAfter=No
33	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 orphan	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
3	pas	pas	ADV	_	Polarity=Neg	6	advmod	_	_
4	de	de	ADP	_	_	6	det	_	ExtPos=DET|Idiom=Yes
5	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	fixed	_	InIdiom=Yes
6	paille	paille	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
7	synthétique	synthétique	ADJ	_	Number=Sing	6	amod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	ni	ni	CCONJ	_	_	10	cc	_	_
10	XXX	XXX	X	_	_	6	conj	_	SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	_
12	tu	il	PRON	_	Number=Sing|Person=2|PronType=Prs	13	nsubj	_	_
13	as	avoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	orphan	_	_
14	aucun	aucun	DET	_	Gender=Masc|Number=Sing|Person=3|PronType=Neg	15	det	_	_
15	problème	problème	NOUN	_	Gender=Masc|Number=Sing	13	obj	_	SpaceAfter=No
16	.	.	PUNCT	_	_	6	punct	_	_

~~~


