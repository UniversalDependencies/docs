---
layout: base
title:  'Statistics of advcl:cleft in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `advcl:cleft`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-advcl.html">advcl</a></tt>.

18 nodes (0%) are attached to their parents as `advcl:cleft`.

18 instances of `advcl:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.44444444444444.

The following 6 pairs of parts of speech are connected with `advcl:cleft`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (5; 28% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (5; 28% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (3; 17% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (2; 11% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (2; 11% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 advcl:cleft	color:blue
1	Cinquième	cinquième	ADJ	_	Gender=Fem|Number=Sing	2	amod	_	_
2	visite	visite	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
3	pastorale	pastoral	ADJ	_	Gender=Fem|Number=Sing	2	amod	_	_
4	en	en	ADP	_	_	5	case	_	_
5	1886	1886	NUM	_	_	2	nmod	_	_
6	:	:	PUNCT	_	_	8	punct	_	_
7	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	8	nsubj	_	SpaceAfter=No
8	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
9	lors	lors	ADV	_	_	12	case	_	_
10	de	de	ADP	_	_	9	fixed	_	_
11	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	12	det	_	_
12	voyage	voyage	NOUN	_	Gender=Masc|Number=Sing	2	parataxis	_	_
13	qu'	que	SCONJ	_	_	15	mark	_	SpaceAfter=No
14	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	_
15	meurt	mourir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	advcl:cleft	_	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	assassiné	assassiner	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	14	acl	_	_
18	par	par	ADP	_	_	20	case	_	_
19	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	déséquilibré	déséquilibré	NOUN	_	Gender=Masc|Number=Sing	17	obl:agent	_	_
21	(	(	PUNCT	_	_	23	punct	_	SpaceAfter=No
22	son	son	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	23	det	_	_
23	domestique	domestique	NOUN	_	Gender=Masc|Number=Sing	20	appos	_	_
24	?	?	PUNCT	_	_	23	punct	_	SpaceAfter=No
25	)	)	PUNCT	_	_	23	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 14 advcl:cleft	color:blue
1	C'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	2	nsubj	_	SpaceAfter=No
2	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	en	en	ADP	_	_	4	mark	_	_
4	voyant	voir	VERB	_	Tense=Pres|VerbForm=Part	2	advcl	_	_
5	les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	duels	duel	NOUN	_	Gender=Masc|Number=Plur	4	obj	_	_
7	de	de	ADP	_	_	8	case	_	_
8	Piet	Piet	PROPN	_	_	6	nmod	_	_
9	Moeskops	Moeskops	PROPN	_	_	8	flat:name	_	_
10	et	et	CCONJ	_	_	11	cc	_	_
11	Victor	Victor	PROPN	_	_	8	conj	_	_
12	Linart	Linart	PROPN	_	_	11	flat:name	_	_
13	que	que	SCONJ	_	_	14	mark	_	_
14	naît	naître	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	advcl:cleft	_	_
15	son	son	DET	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	16	det	_	_
16	ambition	ambition	NOUN	_	Gender=Fem|Number=Sing	14	nsubj	_	_
17	de	de	ADP	_	_	18	mark	_	_
18	devenir	devenir	VERB	_	VerbForm=Inf	16	acl	_	_
19	lui	lui	PRON	_	Number=Sing|Person=3|PronType=Prs	18	obl:mod	_	_
20	aussi	aussi	ADV	_	_	19	advmod	_	_
21	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
22	grand	grand	ADJ	_	Gender=Masc|Number=Sing	23	amod	_	_
23	coureur	coureur	NOUN	_	Gender=Masc|Number=Sing	18	xcomp	_	SpaceAfter=No
24	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 advcl:cleft	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	président	président	NOUN	_	Gender=Masc|Number=Sing	6	dislocated	_	_
3	légitime	légitime	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	_
4	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	6	nsubj	_	SpaceAfter=No
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	Etienne	Etienne	PROPN	_	_	29	ccomp	_	_
7	Tshisekedi	Tshisekedi	PROPN	_	_	6	flat:name	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	10	nsubj	_	SpaceAfter=No
10	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
11	pour	pour	ADP	_	_	12	case	_	_
12	lui	lui	PRON	_	Number=Sing|Person=3|PronType=Prs	6	parataxis	_	_
13	que	que	SCONJ	_	_	16	mark	_	_
14	nous	nous	PRON	_	Number=Plur|Person=1|PronType=Prs	16	nsubj	_	_
15	avons	avoir	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	16	aux	_	_
16	voté	voter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	12	advcl:cleft	_	SpaceAfter=No
17	,	,	PUNCT	_	_	20	punct	_	_
18	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	20	nsubj	_	SpaceAfter=No
19	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	_
20	lui	lui	PRON	_	Number=Sing|Person=3|PronType=Prs	6	conj	_	_
21	qui	qui	PRON	_	PronType=Rel	22	nsubj	_	_
22	doit	devoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	acl:relcl	_	_
23	diriger	diriger	VERB	_	VerbForm=Inf	22	xcomp	_	_
24	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	pays	pays	NOUN	_	Gender=Masc|Number=Sing	23	obj	_	_
26	"	"	PUNCT	_	_	6	punct	_	SpaceAfter=No
27	,	,	PUNCT	_	_	29	punct	_	_
28	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	29	aux	_	_
29	expliqué	expliquer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
30	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	31	det	_	_
31	opposant	opposant	NOUN	_	Gender=Masc|Number=Sing	29	nsubj	_	SpaceAfter=No
32	.	.	PUNCT	_	_	29	punct	_	_

~~~


