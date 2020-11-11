---
layout: base
title:  'Statistics of obl in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `obl`

This relation is universal.
There are 3 language-specific subtypes of `obl`: <tt><a href="fr_gsd-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="fr_gsd-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="fr_gsd-dep-obl-mod.html">obl:mod</a></tt>.

12 nodes (0%) are attached to their parents as `obl`.

11 instances of `obl` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.

The following 5 pairs of parts of speech are connected with `obl`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (7; 58% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (2; 17% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 26 obl	color:blue
1	En	en	ADP	_	_	2	case	_	wordform=en
2	1951	1951	NUM	_	Number=Plur	14	obl:mod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	pour	pour	ADP	_	_	6	case	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	cinquantenaire	cinquantenaire	NOUN	_	Gender=Masc|Number=Sing	14	obl:mod	_	_
7	de	de	ADP	_	_	9	case	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	mort	mort	NOUN	_	Gender=Fem|Number=Sing	6	nmod	_	_
10	de	de	ADP	_	_	11	case	_	_
11	Verdi	Verdi	PROPN	_	_	9	nmod	_	SpaceAfter=No
12	,	,	PUNCT	_	_	6	punct	_	_
13	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	_
14	chante	chanter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
15	Nabucco	Nabucco	PROPN	_	_	14	obj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	Simon	Simon	PROPN	_	_	14	conj	_	_
18	Boccanegra	Boccanegra	PROPN	_	_	17	flat:name	_	SpaceAfter=No
19	,	,	PUNCT	_	_	21	punct	_	_
20	et	et	CCONJ	_	_	21	cc	_	_
21	Don	Don	PROPN	_	_	14	conj	_	_
22	Carlos	Carlos	PROPN	_	_	21	flat:name	_	SpaceAfter=No
23	,	,	PUNCT	_	_	26	punct	_	_
24	à	à	ADP	_	_	26	case	_	_
25	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	26	det	_	_
26	radio	radio	NOUN	_	Gender=Fem|Number=Sing	14	obl	_	_
27	italienne	italien	ADJ	_	Gender=Fem|Number=Sing	26	amod	_	SpaceAfter=No
28	.	.	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 26 obl	color:blue
1	Allez	Allez	PROPN	_	_	5	nsubj	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
4	premier	premier	ADJ	_	Gender=Masc|Number=Sing	5	amod	_	_
5	album	album	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
6	de	de	ADP	_	_	7	case	_	_
7	Kaolin	Kaolin	PROPN	_	_	5	nmod	_	_
8	enregistré	enregistrer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	acl	_	_
9	en	en	ADP	_	_	10	case	_	_
10	décembre	décembre	NOUN	_	Gender=Masc|Number=Sing	8	obl:mod	_	_
11	2001	2001	NUM	_	Number=Plur	10	nmod	_	_
12	à	à	ADP	_	_	14	case	_	_
13	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	Parkgate	Parkgate	PROPN	_	Gender=Masc|Number=Sing	8	obl:mod	_	_
15	studio	studio	NOUN	_	Gender=Masc|Number=Sing	14	flat:name	_	_
16	à	à	ADP	_	_	17	case	_	_
17	Battlefield	Battlefield	PROPN	_	_	8	obl:mod	_	_
18	et	et	CCONJ	_	_	19	cc	_	_
19	janvier	janvier	NOUN	_	Gender=Masc|Number=Sing	8	conj	_	_
20	2002	2002	NUM	_	Number=Plur	19	nmod	_	_
21	à	à	ADP	_	_	23	case	_	_
22	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	Gam	Gam	PROPN	_	Gender=Masc|Number=Sing	8	obl	_	_
24	studio	studio	NOUN	_	Gender=Masc|Number=Sing	23	flat:name	_	_
25	à	à	ADP	_	_	26	case	_	_
26	Waimes	Waimes	PROPN	_	_	8	obl	_	SpaceAfter=No
27	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 30 obl	color:blue
1	de	de	ADP	_	_	3	case	_	_
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	studio	studio	NOUN	_	Gender=Masc|Number=Sing	27	obl:mod	_	_
4	à	à	ADP	_	_	6	case	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	P5	P5	PROPN	_	Gender=Masc|Number=Sing	3	nmod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	de	de	ADP	_	_	12	case	_	_
9	2	2	NUM	_	Number=Plur	12	nummod	_	_
10	à	à	ADP	_	_	11	case	_	_
11	8	8	NUM	_	Number=Plur	9	nmod	_	_
12	personnes	personne	NOUN	_	Gender=Fem|Number=Plur	27	obl:mod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	_
14	vue	vue	NOUN	_	Gender=Fem|Number=Sing	27	obl:mod	_	_
15	mer	mer	NOUN	_	Gender=Fem|Number=Sing	14	nmod	_	SpaceAfter=No
16	,	,	PUNCT	_	_	20	punct	_	_
17	ou	ou	CCONJ	_	_	20	cc	_	_
18	à	à	ADP	_	_	20	case	_	_
19	50	50	NUM	_	Number=Plur	20	nummod	_	_
20	metres	mètre	NOUN	_	Gender=Masc|Number=Plur	14	conj	_	_
21	de	de	ADP	_	_	23	case	_	_
22	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	23	det	_	_
23	plage	plage	NOUN	_	Gender=Fem|Number=Sing	20	nmod	_	SpaceAfter=No
24	,	,	PUNCT	_	_	20	punct	_	_
25	nous	il	PRON	_	Number=Plur|Person=1|PronType=Prs	27	nsubj	_	_
26	sommes	être	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	27	cop	_	_
27	présent	présent	ADJ	_	Gender=Masc|Number=Sing|Typo=Yes	0	root	_	CorrectNumber=Plur|wordform=présents
28	sur	sur	ADP	_	_	30	case	_	_
29	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	30	det	_	_
30	rive	rive	NOUN	_	Gender=Fem|Number=Sing	27	obl	_	_
31	droite	droit	ADJ	_	Gender=Fem|Number=Sing	30	amod	_	_
32	comme	comme	SCONJ	_	_	35	mark	_	_
33	sur	sur	ADP	_	_	35	case	_	_
34	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	35	det	_	_
35	rive	rive	NOUN	_	Gender=Fem|Number=Sing	30	acl	_	_
36	gauche	gauche	ADJ	_	Gender=Fem|Number=Sing	35	amod	_	_
37	de	de	ADP	_	_	39	case	_	_
38	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	39	det	_	_
39	Grau	Grau	PROPN	_	Gender=Masc|Number=Sing	35	nmod	_	_
40	de	de	ADP	_	_	42	case	_	_
41	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	42	det	_	_
42	Roi	Roi	PROPN	_	Gender=Masc|Number=Sing	39	nmod	_	SpaceAfter=No
43	.	.	PUNCT	_	_	27	punct	_	_

~~~


