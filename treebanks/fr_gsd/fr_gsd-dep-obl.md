---
layout: base
title:  'Statistics of obl in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `obl`

This relation is universal.
There are 3 language-specific subtypes of `obl`: <tt><a href="fr_gsd-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="fr_gsd-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="fr_gsd-dep-obl-mod.html">obl:mod</a></tt>.

17 nodes (0%) are attached to their parents as `obl`.

16 instances of `obl` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.

The following 6 pairs of parts of speech are connected with `obl`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (9; 53% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (4; 24% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 obl	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	wordform=il
2	devient	devenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	joueur	joueur	NOUN	_	Gender=Masc|Number=Sing	2	xcomp	_	_
4	autonome	autonome	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	_
5	à	à	ADP	_	_	7	case	_	_
6	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	7	det	_	SpaceAfter=No
7	automne	automne	NOUN	_	Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 obl	color:blue
1	Akhmatova	Akhmatova	PROPN	_	_	4	nsubj	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	opéra	opéra	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
5	dont	dont	PRON	_	PronType=Rel	7	nmod	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	création	création	NOUN	_	Gender=Fem|Number=Sing	8	nsubj	_	_
8	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
9	lieu	lieu	NOUN	_	Gender=Masc|Number=Sing	8	obj:lvc	_	_
10	à	à	ADP	_	_	12	case	_	_
11	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	12	det	_	SpaceAfter=No
12	Opéra	Opéra	PROPN	_	Number=Sing	8	obl	_	_
13	Bastille	Bastille	PROPN	_	_	12	flat:name	_	_
14	de	de	ADP	_	_	15	case	_	_
15	Paris	Paris	PROPN	_	_	12	nmod	_	_
16	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	28	28	NUM	_	Number=Sing	8	obl:mod	_	_
18	mars	mars	NOUN	_	Gender=Masc	17	nmod	_	_
19	2011	2011	NUM	_	Number=Plur	18	nmod	_	SpaceAfter=No
20	.	.	PUNCT	_	_	4	punct	_	_

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
27	présent	présent	ADJ	_	Gender=Masc|Number=Sing|Typo=Yes	0	root	_	CorrectForm=présents|CorrectNumber=Plur
28	sur	sur	ADP	_	_	30	case	_	_
29	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	30	det	_	_
30	rive	rive	NOUN	_	Gender=Fem|Number=Sing	27	obl	_	_
31	droite	droit	ADJ	_	Gender=Fem|Number=Sing	30	amod	_	_
32	comme	comme	SCONJ	_	_	35	mark	_	_
33	sur	sur	ADP	_	_	35	case	_	_
34	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	35	det	_	_
35	rive	rive	NOUN	_	Gender=Fem|Number=Sing	27	advcl	_	_
36	gauche	gauche	ADJ	_	Gender=Fem|Number=Sing	35	amod	_	_
37	de	de	ADP	_	_	39	case	_	_
38	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	39	det	_	_
39	Grau	Grau	PROPN	_	Gender=Masc|Number=Sing	35	nmod	_	_
40	de	de	ADP	_	_	42	case	_	_
41	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	42	det	_	_
42	Roi	Roi	PROPN	_	Gender=Masc|Number=Sing	39	nmod	_	SpaceAfter=No
43	.	.	PUNCT	_	_	27	punct	_	_

~~~


