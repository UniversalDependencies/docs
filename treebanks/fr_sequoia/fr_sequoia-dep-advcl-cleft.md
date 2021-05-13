---
layout: base
title:  'Statistics of advcl:cleft in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `advcl:cleft`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-advcl.html">advcl</a></tt>.

20 nodes (0%) are attached to their parents as `advcl:cleft`.

20 instances of `advcl:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.5.

The following 4 pairs of parts of speech are connected with `advcl:cleft`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (16; 80% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (2; 10% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 13 advcl:cleft	color:blue
1	C'	ce	PRON	_	Number=Sing|Person=3	5	expl:subj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	dans	dans	ADP	_	_	5	case	_	_
4	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	aisance	aisance	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
6	toute	toute	ADV	_	_	7	advmod	_	_
7	naturelle	naturel	ADJ	_	Gender=Fem|Number=Sing	5	amod	_	_
8	que	que	PRON	_	PronType=Rel	13	iobj	_	_
9	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	élèves	élève	NOUN	_	Number=Plur	13	nsubj	_	_
11	apprentis-acteurs	apprenti-acteur	NOUN	_	Gender=Masc|Number=Plur	10	nmod	_	_
12	ont	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	aux:tense	_	_
13	joué	jouer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	advcl:cleft	_	SpaceAfter=No
14	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 advcl:cleft	color:blue
1	C'	ce	PRON	_	Number=Sing|Person=3	3	expl:subj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	Renaud	Renaud	PROPN	_	Gender=Masc|Number=Sing	0	root	_	_
4	van	van	X	_	_	3	dep	_	_
5	Ruymbeke	Ruymbeke	PROPN	_	_	3	flat:name	_	_
6	qui	qui	PRON	_	PronType=Rel	7	nsubj	_	_
7	reprendra	reprendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	3	advcl:cleft	_	_
8	alors	alors	ADV	_	_	7	advmod	_	_
9	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	10	det	_	_
10	dossier	dossier	NOUN	_	Gender=Masc|Number=Sing	7	obj	_	_
11	qui	qui	PRON	_	PronType=Rel	13	nsubj	_	_
12	s'	se	PRON	_	Person=3|Reflex=Yes	13	expl:pass	_	SpaceAfter=No
13	enlisera	enliser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	10	acl:relcl	_	_
14	dans	dans	ADP	_	_	16	case	_	_
15	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	16	det	_	_
16	sables	sables	NOUN	_	Gender=Masc|Number=Plur	13	obl:mod	_	_
17	de	de	ADP	_	_	19	case	_	_
18	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	secret	secret	NOUN	_	Gender=Masc|Number=Sing	16	nmod	_	_
20	défense	défense	NOUN	_	Gender=Fem|Number=Sing	19	nmod	_	SpaceAfter=No
21	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 19 advcl:cleft	color:blue
1	Pour	pour	ADP	_	_	3	mark	_	_
2	être	être	AUX	_	VerbForm=Inf	3	cop	_	_
3	précis	précis	ADJ	_	Gender=Masc	7	advcl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	c'	ce	PRON	_	Number=Sing|Person=3	7	expl:subj	_	SpaceAfter=No
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	autour	autour	ADV	_	_	0	root	_	_
8	de	de	ADP	_	_	9	case	_	_
9	1950	1950	NUM	_	NumType=Card	7	dep	_	_
10	que	que	PRON	_	PronType=Rel	19	iobj	_	_
11	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	société	société	NOUN	_	Gender=Fem|Number=Sing	19	nsubj	_	_
13	d'	de	ADP	_	_	14	case	_	SpaceAfter=No
14	aviculture	aviculture	NOUN	_	Gender=Fem|Number=Sing	12	nmod	_	_
15	de	de	ADP	_	_	16	case	_	_
16	Belfort	Belfort	PROPN	_	Gender=Masc|Number=Sing	14	nmod	_	_
17	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	aux:tense	_	_
18	vraiment	vraiment	ADV	_	_	19	advmod	_	_
19	pris	prendre	VERB	_	Gender=Masc|Tense=Past|VerbForm=Part	7	advcl:cleft	_	_
20	sa	son	DET	_	Gender=Fem|Number=Sing|Poss=Yes	22	det	_	_
21	réelle	réel	ADJ	_	Gender=Fem|Number=Sing	22	amod	_	_
22	importance	importance	NOUN	_	Gender=Fem|Number=Sing	19	obj	_	SpaceAfter=No
23	,	,	PUNCT	_	_	19	punct	_	_
24	avec	avec	ADP	_	_	26	case	_	_
25	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	26	det	_	_
26	présidence	présidence	NOUN	_	Gender=Fem|Number=Sing	19	obl:mod	_	_
27	de	de	ADP	_	_	28	case	_	_
28	Claude	Claude	PROPN	_	Number=Sing	26	nmod	_	_
29	Simon	Simon	PROPN	_	Gender=Masc|Number=Sing	28	flat:name	_	SpaceAfter=No
30	.	.	PUNCT	_	_	7	punct	_	_

~~~


