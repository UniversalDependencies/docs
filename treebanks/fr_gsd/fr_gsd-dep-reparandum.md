---
layout: base
title:  'Statistics of reparandum in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `reparandum`

This relation is universal.

21 nodes (0%) are attached to their parents as `reparandum`.

21 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 15 pairs of parts of speech are connected with `reparandum`: <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (3; 14% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (2; 10% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (2; 10% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (2; 10% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (2; 10% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1; 5% instances), <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-CCONJ.html">CCONJ</a></tt> (1; 5% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 reparandum	color:blue
1	Quand	quand	SCONJ	_	_	3	mark	_	wordform=quand
2	Daniel	Daniel	PROPN	_	_	3	nsubj	_	_
3	arrive	arriver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	advcl	_	_
4	et	et	CCONJ	_	_	5	cc	_	_
5	confirme	confirmer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	conj	_	_
6	que	que	SCONJ	_	_	8	mark	_	_
7	SG-1	SG-1	NUM	_	_	8	nsubj	_	_
8	était	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	ccomp	_	_
9	dans	dans	ADP	_	_	12	case	_	_
10	des	un	DET	_	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	11	reparandum	_	_
11	ces	ce	DET	_	Gender=Masc|Number=Plur|PronType=Dem	12	det	_	_
12	vaisseaux	vaisseau	NOUN	_	Gender=Masc|Number=Plur	8	obl:arg	_	SpaceAfter=No
13	,	,	PUNCT	_	_	3	punct	_	_
14	Hammond	Hammond	PROPN	_	_	16	nsubj	_	_
15	fait	faire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	aux:caus	_	_
16	lancer	lancer	VERB	_	VerbForm=Inf	0	root	_	_
17	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	navette	navette	NOUN	_	Gender=Fem|Number=Sing	16	obj	_	SpaceAfter=No
19	.	.	PUNCT	_	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 reparandum	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	wordform=le
2	film	film	NOUN	_	Gender=Masc|Number=Sing	5	nsubj:pass	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:tense	_	_
4	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	aux:pass	_	_
5	tourné	tourner	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	à	à	ADP	_	_	7	reparandum	_	_
7	en	en	ADP	_	_	9	case	_	_
8	grande	grand	ADJ	_	Gender=Fem|Number=Sing	9	amod	_	_
9	partie	partie	NOUN	_	Gender=Fem|Number=Sing	5	obl	_	_
10	à	à	ADP	_	_	11	case	_	_
11	Londres	Londres	PROPN	_	_	5	obl	_	_
12	:	:	PUNCT	_	_	13	punct	_	_
13	Dulwich	Dulwich	PROPN	_	_	11	nmod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	_
15	Ealing	Ealing	PROPN	_	_	13	conj	_	_
16	Studios	Studios	PROPN	_	_	15	flat:name	_	SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	_	_
18	Holland	Holland	PROPN	_	_	13	conj	_	_
19	Park	Park	PROPN	_	_	18	flat:name	_	SpaceAfter=No
20	,	,	PUNCT	_	_	21	punct	_	_
21	Pottery	Pottery	PROPN	_	_	13	conj	_	_
22	Lane	Lane	PROPN	_	_	21	flat:name	_	_
23	(	(	PUNCT	_	_	24	punct	_	SpaceAfter=No
24	Notting	Notting	PROPN	_	_	21	appos	_	_
25	Hill	Hill	PROPN	_	_	24	flat:name	_	SpaceAfter=No
26	)	)	PUNCT	_	_	24	punct	_	SpaceAfter=No
27	,	,	PUNCT	_	_	30	punct	_	_
28	dans	dans	ADP	_	_	30	case	_	_
29	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	30	det	_	SpaceAfter=No
30	Essex	Essex	PROPN	_	_	11	conj	_	SpaceAfter=No
31	,	,	PUNCT	_	_	35	punct	_	_
32	en	en	ADP	_	_	35	advmod	_	EXTPOS=ADV|Type=MWE
33	particulier	particulier	NOUN	_	Gender=Masc|Number=Sing	32	fixed	_	_
34	à	à	ADP	_	_	35	case	_	_
35	Hammerwood	Hammerwood	PROPN	_	_	30	nmod	_	_
36	Park	Park	PROPN	_	_	35	flat:name	_	_
37	(	(	PUNCT	_	_	38	punct	_	SpaceAfter=No
38	Sussex	Sussex	PROPN	_	_	35	appos	_	_
39	de	de	ADP	_	_	41	case	_	_
40	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	41	det	_	SpaceAfter=No
41	Est	Est	PROPN	_	_	38	nmod	_	SpaceAfter=No
42	)	)	PUNCT	_	_	38	punct	_	_
43	et	et	CCONJ	_	_	45	cc	_	_
44	à	à	ADP	_	_	45	case	_	_
45	Hollywood	Hollywood	PROPN	_	_	11	conj	_	SpaceAfter=No
46	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 27 reparandum	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	wordform=le
2	moteur	moteur	NOUN	_	Gender=Masc|Number=Sing	7	nsubj:pass	_	_
3	à	à	ADP	_	_	4	case	_	_
4	pistons	piston	NOUN	_	Gender=Masc|Number=Plur	2	nmod	_	_
5	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:tense	_	_
6	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	aux:pass	_	_
7	retiré	retirer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	et	et	CCONJ	_	_	12	cc	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	réacteur	réacteur	NOUN	_	Gender=Masc|Number=Sing	12	nsubj:pass	_	_
11	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	12	aux:pass	_	_
12	monté	monter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	conj	_	_
13	sous	sous	ADP	_	_	15	case	_	_
14	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	SpaceAfter=No
15	avant	avant	NOUN	_	Gender=Masc|Number=Sing	12	obl	_	_
16	de	de	ADP	_	_	18	case	_	_
17	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	fuselage	fuselage	NOUN	_	Gender=Masc|Number=Sing	15	nmod	_	_
19	de	de	ADP	_	_	25	mark	_	EXTPOS=SCONJ|Type=MWE
20	telle	tel	DET	_	Gender=Fem|Number=Sing	19	fixed	_	_
21	sorte	sorte	NOUN	_	Gender=Fem|Number=Sing	19	fixed	_	_
22	que	que	SCONJ	_	_	19	fixed	_	_
23	son	son	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	24	det	_	_
24	échappement	échappement	NOUN	_	Gender=Masc|Number=Sing	25	nsubj	_	_
25	sortait	sortir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	advcl	_	_
26	sous	sous	ADP	_	_	29	case	_	_
27	de	de	ADP	_	_	28	reparandum	_	_
28	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	29	det	_	_
29	milieu	milieu	NOUN	_	Gender=Masc|Number=Sing	25	obl	_	_
30	de	de	ADP	_	_	32	case	_	_
31	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	32	det	_	_
32	fuselage	fuselage	NOUN	_	Gender=Masc|Number=Sing	29	nmod	_	SpaceAfter=No
33	.	.	PUNCT	_	_	7	punct	_	_

~~~


