---
layout: base
title:  'Statistics of dep:comp in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-dep.html">dep</a></tt>.

17 nodes (0%) are attached to their parents as `dep:comp`.

12 instances of `dep:comp` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.11764705882353.

The following 6 pairs of parts of speech are connected with `dep:comp`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (11; 65% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> (2; 12% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 dep:comp	color:blue
1	Pourquoi	pourquoi	ADV	_	PronType=Int	4	advmod	_	wordform=pourquoi
2	ne	ne	ADV	_	Polarity=Neg	4	advmod	_	_
3	lui	lui	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	dep:comp	_	_
4	fait	faire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	-on	on	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	4	nsubj	_	wordform=on
6	pas	pas	ADV	_	Polarity=Neg	4	advmod	_	_
7	confiance	confiance	NOUN	_	Gender=Fem|Number=Sing	4	obj:lvc	_	_
8	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 dep:comp	color:blue
1	À	à	ADP	_	_	3	case	_	wordform=à
2	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	occasion	occasion	NOUN	_	Gender=Fem|Number=Sing	13	obl:mod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	François	François	PROPN	_	_	13	nsubj	_	_
6	Fillon	Fillon	PROPN	_	_	5	flat:name	_	_
7	alors	alors	ADV	_	_	8	advmod	_	_
8	ministre	ministre	NOUN	_	Gender=Masc|Number=Sing	5	appos	_	_
9	de	de	ADP	_	_	11	case	_	_
10	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	11	det	_	SpaceAfter=No
11	Éducation	éducation	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	wordform=éducation
12	nationale	national	ADJ	_	Gender=Fem|Number=Sing	11	amod	_	_
13	déclare	déclarer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	que	que	SCONJ	_	_	13	dep:comp	_	SpaceAfter=No
15	.	.	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 33 36 dep:comp	color:blue
1	Un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	wordform=un
2	an	an	NOUN	_	Gender=Masc|Number=Sing	20	obl:mod	_	_
3	plus	plus	ADV	_	_	4	advmod	_	_
4	tard	tard	ADV	_	_	2	advmod	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	13	13	NUM	_	Number=Sing	2	appos	_	_
7	juillet	juillet	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
8	2008	2008	NUM	_	Number=Plur	7	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	2	punct	_	_
10	une	un	NUM	_	Gender=Fem|Number=Sing	11	nummod	_	_
11	quarantaine	quarantaine	NOUN	_	Gender=Fem|Number=Sing	20	nsubj	_	_
12	de	de	ADP	_	_	13	case	_	_
13	chefs	chef	NOUN	_	Gender=Masc|Number=Plur	11	nmod	_	_
14	d'	de	ADP	_	_	15	case	_	SpaceAfter=No
15	Etats	Etats	PROPN	_	_	13	nmod	_	_
16	et	et	CCONJ	_	_	18	cc	_	_
17	de	de	ADP	_	_	18	case	_	_
18	gouvernements	gouvernement	NOUN	_	Gender=Masc|Number=Plur	15	conj	_	_
19	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	20	expl:pv	_	_
20	rassemblent	rassembler	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
21	à	à	ADP	_	_	22	case	_	_
22	Paris	Paris	PROPN	_	_	20	obl:mod	_	_
23	pour	pour	ADP	_	_	27	case	_	_
24	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	27	det	_	_
25	grand	grand	ADJ	_	Gender=Masc|Number=Sing	27	amod	_	_
26	«	«	PUNCT	_	_	27	punct	_	_
27	show	show	NOUN	_	Gender=Masc|Number=Sing	20	obl:mod	_	_
28	»	»	PUNCT	_	_	27	punct	_	_
29	diplomatique	diplomatique	ADJ	_	Gender=Masc|Number=Sing	27	amod	_	_
30	et	et	CCONJ	_	_	32	cc	_	_
31	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	32	det	_	_
32	dîner	dîner	NOUN	_	Gender=Masc|Number=Sing	27	conj	_	_
33	à	à	ADP	_	_	32	dep	_	_
34	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	36	det	_	_
35	Grand	grand	ADJ	_	Gender=Masc|Number=Sing	36	amod	_	wordform=grand
36	Palais	palais	NOUN	_	Gender=Masc|Number=Sing	33	dep:comp	_	SpaceAfter=No|wordform=palais
37	,	,	PUNCT	_	_	42	punct	_	_
38	qui	qui	PRON	_	PronType=Rel	42	nsubj	_	_
39	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	42	aux:tense	_	_
40	d'	de	ADP	_	ExtPos=ADV	42	advmod	_	Idiom=Yes|SpaceAfter=No
41	ailleurs	ailleurs	ADV	_	_	40	fixed	_	InIdiom=Yes
42	coûté	coûter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	32	acl:relcl	_	_
43	5050	5050	NUM	_	Number=Plur	44	nummod	_	_
44	euros	euro	NOUN	_	Gender=Masc|Number=Plur	42	obj	_	_
45	par	par	ADP	_	_	46	case	_	_
46	personne	personne	NOUN	_	Gender=Fem|Number=Sing	44	nmod	_	_
47	!	!	PUNCT	_	_	20	punct	_	_

~~~


