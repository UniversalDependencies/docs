---
layout: base
title:  'Statistics of dep in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `dep`

This relation is universal.
There are 1 language-specific subtypes of `dep`: <tt><a href="fr_gsd-dep-dep-comp.html">dep:comp</a></tt>.

32 nodes (0%) are attached to their parents as `dep`.

24 instances of `dep` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.625.

The following 17 pairs of parts of speech are connected with `dep`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (9; 28% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (5; 16% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (3; 9% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (2; 6% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 18 dep	color:blue
1	En	en	ADP	_	_	2	case	_	wordform=en
2	1991	1991	NUM	_	Number=Plur	8	obl:mod	_	_
3	et	et	CCONJ	_	_	5	cc	_	_
4	en	en	ADP	_	_	5	case	_	_
5	1997	1997	NUM	_	Number=Plur	2	conj	_	SpaceAfter=No
6	,	,	PUNCT	_	_	2	punct	_	_
7	elle	lui	PRON	_	Emph=No|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	publie	publier	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	deux	deux	NUM	_	Number=Plur	10	nummod	_	_
10	recueils	recueil	NOUN	_	Gender=Masc|Number=Plur	8	obj	_	_
11	intitulés	intituler	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	10	acl	_	_
12	Enigme	énigme	NOUN	_	ExtPos=PROPN|Gender=Fem|Number=Sing	11	xcomp	_	Title=Yes|wordform=énigme
13	dans	dans	ADP	_	_	15	case	_	InTitle=Yes
14	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	15	det	_	InTitle=Yes
15	miroir	miroir	NOUN	_	Gender=Masc|Number=Sing	12	nmod	_	InTitle=Yes
16	et	et	CCONJ	_	_	12	cc	_	_
17	Voler	voler	VERB	_	ExtPos=PROPN|VerbForm=Inf	12	conj	_	Subject=Generic|Title=Yes|wordform=voler
18	selon	selon	ADP	_	_	12	dep	_	InTitle=Yes|SpaceAfter=No
19	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dep	color:blue
1	Beneš	Beneš	PROPN	_	_	2	nsubj	_	_
2	part	partir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	pour	pour	ADP	_	_	2	dep	_	Scrap=Yes
4	à	à	ADP	_	_	5	case	_	_
5	Londres	Londres	PROPN	_	_	2	obl:arg	_	_
6	où	où	PRON	_	PronType=Rel	8	obl:mod	_	_
7	il	lui	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	fonde	fonder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
9	en	en	ADP	_	_	10	case	_	_
10	1940	1940	NUM	_	Number=Plur	8	obl:mod	_	_
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	gouvernement	gouvernement	NOUN	_	Gender=Masc|Number=Sing	8	obj	_	_
13	tchécoslovaque	tchécoslovaque	ADJ	_	Gender=Masc|Number=Sing	12	amod	_	_
14	en	en	ADP	_	_	15	case	_	_
15	exil	exil	NOUN	_	Gender=Masc|Number=Sing	8	obl:mod	_	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	et	et	CCONJ	_	_	19	cc	_	_
18	en	en	PRON	_	Emph=No|Person=3|PronType=Prs	21	nmod	_	_
19	assume	assumer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	conj	_	_
20	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	présidence	présidence	NOUN	_	Gender=Fem|Number=Sing	19	obj	_	SpaceAfter=No
22	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 dep	color:blue
1	Quand	quand	SCONJ	_	_	3	mark	_	wordform=quand
2	Daniel	Daniel	PROPN	_	_	3	nsubj	_	_
3	arrive	arriver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	advcl	_	_
4	et	et	CCONJ	_	_	5	cc	_	_
5	confirme	confirmer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	conj	_	_
6	que	que	SCONJ	_	_	8	mark	_	_
7	SG-1	SG-1	PROPN	_	_	8	nsubj	_	_
8	était	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	ccomp	_	_
9	dans	dans	ADP	_	_	12	case	_	_
10	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	12	dep	_	Scrap=Yes
11	ces	ce	DET	_	Number=Plur|PronType=Dem	12	det	_	_
12	vaisseaux	vaisseau	NOUN	_	Gender=Masc|Number=Plur	8	obl:arg	_	SpaceAfter=No
13	,	,	PUNCT	_	_	3	punct	_	_
14	Hammond	Hammond	PROPN	_	_	16	nsubj:caus	_	_
15	fait	faire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	aux:caus	_	_
16	lancer	lancer	VERB	_	VerbForm=Inf	0	root	_	Subject=Generic
17	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	navette	navette	NOUN	_	Gender=Fem|Number=Sing	16	obj	_	SpaceAfter=No
19	.	.	PUNCT	_	_	16	punct	_	_

~~~


