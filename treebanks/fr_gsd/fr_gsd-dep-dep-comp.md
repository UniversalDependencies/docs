---
layout: base
title:  'Statistics of dep:comp in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-dep.html">dep</a></tt>.

18 nodes (0%) are attached to their parents as `dep:comp`.

11 instances of `dep:comp` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.55555555555556.

The following 6 pairs of parts of speech are connected with `dep:comp`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (7; 39% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (6; 33% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> (2; 11% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 dep:comp	color:blue
1	Charles	Charles	PROPN	_	_	3	nsubj	_	_
2	Tisseyre	Tisseyre	PROPN	_	_	1	flat:name	_	_
3	naît	naître	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	de	de	ADP	_	_	5	case	_	_
5	Michelle	Michelle	PROPN	_	_	3	obl:mod	_	_
6	et	et	CCONJ	_	_	8	cc	_	_
7	de	de	ADP	_	_	8	case	_	_
8	Pierre	Pierre	PROPN	_	_	5	conj	_	_
9	Tisseyre	Tisseyre	PROPN	_	_	8	flat:name	_	_
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	15	15	NUM	_	Number=Sing	3	dep:comp	_	_
12	juillet	juillet	NOUN	_	Gender=Masc|Number=Sing	11	nmod	_	_
13	1949	1949	NUM	_	Number=Plur	12	nmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 dep:comp	color:blue
1	Un	un	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	13	advcl	_	wordform=un
2	de	de	ADP	_	_	5	case	_	_
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	5	det	_	_
4	meilleurs	meilleur	ADJ	_	Gender=Masc|Number=Plur	5	amod	_	_
5	Chercheurs	chercheur	NOUN	_	Gender=Masc|Number=Plur	1	nmod	_	wordform=chercheurs
6	de	de	ADP	_	_	8	case	_	_
7	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Fondation	fondation	NOUN	_	Gender=Fem|Number=Sing	5	nmod	_	wordform=fondation
9	Huntik	Huntik	PROPN	_	_	8	appos	_	SpaceAfter=No
10	,	,	PUNCT	_	_	1	punct	_	_
11	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
12	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
13	chef	chef	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
14	de	de	ADP	_	_	16	case	_	_
15	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	groupe	groupe	NOUN	_	Gender=Masc|Number=Sing	13	nmod	_	_
17	de	de	ADP	_	_	18	case	_	_
18	chercheurs	chercheur	NOUN	_	Gender=Masc|Number=Plur	16	nmod	_	_
19	dont	dont	PRON	_	PronType=Rel	21	dep:comp	_	_
20	fait	faire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	acl:relcl	_	_
21	partie	partie	NOUN	_	Gender=Fem|Number=Sing	20	obj:lvc	_	_
22	Lok	Lok	PROPN	_	_	20	nsubj	_	SpaceAfter=No
23	.	.	PUNCT	_	_	13	punct	_	_

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


