---
layout: base
title:  'Statistics of reparandum in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `reparandum`

This relation is universal.

13 nodes (0%) are attached to their parents as `reparandum`.

13 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07692307692308.

The following 10 pairs of parts of speech are connected with `reparandum`: <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (3; 23% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (2; 15% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 8% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-CCONJ.html">CCONJ</a></tt> (1; 8% instances), <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1; 8% instances), <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (1; 8% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-PUNCT.html">PUNCT</a></tt> (1; 8% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 reparandum	color:blue
1	Quand	quand	SCONJ	_	_	3	mark	_	_
2	Daniel	Daniel	PROPN	_	_	3	nsubj	_	_
3	arrive	arriver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	advcl	_	_
4	et	et	CCONJ	_	_	5	cc	_	_
5	confirme	confirmer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	conj	_	_
6	que	que	SCONJ	_	_	8	mark	_	_
7	SG-1	SG-1	NUM	_	_	8	nsubj	_	_
8	était	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	ccomp	_	_
9	dans	dans	ADP	_	_	13	case	_	_
10	de	de	ADP	_	_	12	reparandum	_	_
11	les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	reparandum	_	_
12	ces	ce	DET	_	Gender=Masc|Number=Plur|PronType=Dem	13	det	_	_
13	vaisseaux	vaisseau	NOUN	_	Gender=Masc|Number=Plur	8	obl:arg	_	SpaceAfter=No
14	,	,	PUNCT	_	_	17	punct	_	_
15	Hammond	Hammond	PROPN	_	_	17	nsubj:caus	_	_
16	fait	faire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux:caus	_	_
17	lancer	lancer	VERB	_	VerbForm=Inf	0	root	_	_
18	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	navette	navette	NOUN	_	Gender=Fem|Number=Sing	17	obj	_	SpaceAfter=No
20	.	.	PUNCT	_	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 reparandum	color:blue
1	Un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	coup	coup	NOUN	_	Gender=Masc|Number=Sing	19	nsubj	_	_
3	de	de	ADP	_	_	4	case	_	_
4	pied	pied	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	_
5	donné	donner	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl	_	_
6	à	à	ADP	_	_	8	case	_	_
7	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	spectateur	spectateur	NOUN	_	Gender=Masc|Number=Sing	5	obl:arg	_	_
9	à	à	ADP	_	_	11	case	_	_
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	cours	cours	NOUN	_	Gender=Masc|Number=Sing	5	obl:mod	_	_
12	de	de	ADP	_	_	14	case	_	_
13	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	Druivencross	Druivencross	PROPN	_	_	11	nmod	_	_
15	d'	de	ADP	_	_	16	case	_	SpaceAfter=No
16	Overijse	Overijse	PROPN	_	_	14	nmod	_	_
17	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	18	reparandum	_	_
18	lui	lui	PRON	_	Number=Sing|Person=3|PronType=Prs	19	iobj	_	_
19	vaut	valoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
20	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	suspension	suspension	NOUN	_	Gender=Fem|Number=Sing	19	obj	_	_
22	de	de	ADP	_	_	23	case	_	_
23	compétition	compétition	NOUN	_	Gender=Fem|Number=Sing	21	nmod	_	_
24	durant	durant	ADP	_	_	26	case	_	_
25	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	mois	mois	NOUN	_	Gender=Masc|Number=Sing	21	nmod	_	_
27	de	de	ADP	_	_	28	case	_	_
28	septembre	septembre	NOUN	_	Gender=Masc|Number=Sing	26	nmod	_	_
29	2006	2006	NUM	_	_	28	nmod	_	SpaceAfter=No
30	.	.	PUNCT	_	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 reparandum	color:blue
1	Beneš	Beneš	PROPN	_	_	2	nsubj	_	_
2	part	partir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	pour	pour	ADP	_	_	4	reparandum	_	_
4	à	à	ADP	_	_	5	case	_	_
5	Londres	Londres	PROPN	_	_	2	obl:arg	_	_
6	où	où	ADV	_	PronType=Rel	8	advmod	_	_
7	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	fonde	fonder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
9	en	en	ADP	_	_	10	case	_	_
10	1940	1940	NUM	_	_	8	obl	_	_
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	gouvernement	gouvernement	NOUN	_	Gender=Masc|Number=Sing	8	obj	_	_
13	tchécoslovaque	tchécoslovaque	ADJ	_	Gender=Masc|Number=Sing	12	amod	_	_
14	en	en	ADP	_	_	15	case	_	_
15	exil	exil	NOUN	_	Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
16	,	,	PUNCT	_	_	8	punct	_	_
17	et	et	CCONJ	_	_	19	cc	_	_
18	en	en	PRON	_	Person=3	21	nmod	_	_
19	assume	assumer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	conj	_	_
20	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	présidence	présidence	NOUN	_	Gender=Fem|Number=Sing	19	obj	_	SpaceAfter=No
22	.	.	PUNCT	_	_	2	punct	_	_

~~~


