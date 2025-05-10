---
layout: base
title:  'Statistics of parataxis in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `parataxis`

This relation is universal.
There are 2 language-specific subtypes of `parataxis`: <tt><a href="fr_rhapsodie-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="fr_rhapsodie-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

4 nodes (0%) are attached to their parents as `parataxis`.

4 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 3 pairs of parts of speech are connected with `parataxis`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (1; 25% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 parataxis	color:blue
1	euh	euh	INTJ	_	_	6	discourse	_	Overlap=Rhap_D0006-104|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	alors	alors	ADV	_	_	6	advmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	changement	changement	NOUN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	_
8	euh	euh	INTJ	_	_	11	discourse	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	crottes	crotte	NOUN	_	Gender=Fem|Number=Plur	6	parataxis	_	_
12	de	de	ADP	_	_	13	case	_	_
13	chien	chien	NOUN	_	Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 25 parataxis	color:blue
1	à	à	ADP	_	_	3	case	_	_
2	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	une	une	NOUN	_	Gender=Fem|Number=Sing	14	nmod	_	_
4	de	de	ADP	_	_	5	case	_	_
5	Libération	Libération	PROPN	_	_	3	nmod	_	_
6	qui	qui	PRON	_	PronType=Rel	8	nsubj	_	_
7	ne	ne	ADV	_	Polarity=Neg	8	advmod	_	_
8	boude	bouder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
9	pas	pas	ADV	_	Polarity=Neg	8	advmod	_	_
10	son	son	DET	_	Number=Sing|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	11	det	_	_
11	plaisir	plaisir	NOUN	_	Gender=Masc|Number=Sing	8	obj	_	SpaceAfter=No
12	,	,	PUNCT	_	_	3	punct	_	_
13	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	caricature	caricature	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
15	de	de	ADP	_	_	16	case	_	_
16	Nicolas	Nicolas	PROPN	_	_	14	nmod	_	_
17	Sarkozy	Sarkozy	PROPN	_	_	16	flat:name	_	_
18	tout	tout	ADV	_	_	19	advmod	_	_
19	ratatiné	ratatiné	ADJ	_	Gender=Masc|Number=Sing	16	amod	_	_
20	sous	sous	ADP	_	_	22	case	_	_
21	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	22	det	_	_
22	exclamation	exclamation	NOUN	_	Gender=Fem|Number=Sing	19	obl:mod	_	SpaceAfter=No
23	:	:	PUNCT	_	_	25	punct	_	_
24	et	et	CCONJ	_	_	25	cc	_	_
25	bling	bling	INTJ	_	_	22	parataxis	_	SpaceAfter=No
26	!	!	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 17 parataxis	color:blue
1	et	et	CCONJ	_	_	9	cc	_	_
2	en	en	ADP	_	_	4	case	_	_
3	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	semaine	semaine	NOUN	_	Gender=Fem|Number=Sing	9	obl:mod	_	_
5	ou	ou	CCONJ	_	_	6	cc	_	_
6	deux	deux	NUM	_	Number=Plur	3	conj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	nsubj	_	Overlap=Rhap_D0009-48bis
9	y	y	PRON	_	Person=3|PronType=Prs	0	root	_	Overlap=Rhap_D0009-48bis
10	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	Overlap=Rhap_D0009-48bis|SpaceAfter=No
11	,	,	PUNCT	_	_	17	punct	_	Overlap=Rhap_D0009-48bis
12	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	13	nsubj	_	Overlap=Rhap_D0009-48bis|SpaceAfter=No
13	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	reparandum	_	Overlap=Rhap_D0009-48bis|SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	_
15	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	17	nsubj:pass	_	Overlap=Rhap_D0009-49|SpaceAfter=No
16	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux:pass	_	Overlap=Rhap_D0009-49
17	relivré	relivrer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	parataxis	_	Overlap=Rhap_D0009-49

~~~


