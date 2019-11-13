---
layout: base
title:  'Statistics of reparandum in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `reparandum`

This relation is universal.

18 nodes (0%) are attached to their parents as `reparandum`.

17 instances of `reparandum` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27777777777778.

The following 13 pairs of parts of speech are connected with `reparandum`: <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (3; 17% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (2; 11% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (2; 11% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (2; 11% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-CCONJ.html">CCONJ</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 6% instances).


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
14	,	,	PUNCT	_	_	3	punct	_	_
15	Hammond	Hammond	PROPN	_	_	17	nsubj:caus	_	_
16	fait	faire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux:caus	_	_
17	lancer	lancer	VERB	_	VerbForm=Inf	0	root	_	_
18	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	navette	navette	NOUN	_	Gender=Fem|Number=Sing	17	obj	_	SpaceAfter=No
20	.	.	PUNCT	_	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 reparandum	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 reparandum	color:blue
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
14	,	,	PUNCT	_	_	3	punct	_	_
15	Hammond	Hammond	PROPN	_	_	17	nsubj:caus	_	_
16	fait	faire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux:caus	_	_
17	lancer	lancer	VERB	_	VerbForm=Inf	0	root	_	_
18	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	navette	navette	NOUN	_	Gender=Fem|Number=Sing	17	obj	_	SpaceAfter=No
20	.	.	PUNCT	_	_	17	punct	_	_

~~~


