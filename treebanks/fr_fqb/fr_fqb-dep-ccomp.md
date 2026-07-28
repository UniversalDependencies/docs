---
layout: base
title:  'Statistics of ccomp in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `ccomp`

This relation is universal.

17 nodes (0%) are attached to their parents as `ccomp`.

15 instances of `ccomp` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.35294117647059.

The following 3 pairs of parts of speech are connected with `ccomp`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (14; 82% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (2; 12% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp	color:blue
1	Où	où	ADV	_	PronType=Int	2	obl:arg	_	_
2	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	4	expl:pv	_	_
4	trouve	trouver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
5	South	South	PROPN	_	_	2	nsubj	_	_
6	Bend	Bend	PROPN	_	_	5	flat:name	_	_
7	?	?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 ccomp	color:blue
1	Quel	quel	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	nom	nom	NOUN	_	Gender=Masc|Number=Sing	1	nsubj	_	_
5	de	de	ADP	_	_	7	case	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	compagnie	compagnie	NOUN	_	Gender=Fem|Number=Sing	4	nmod	_	_
8	qui	qui	PRON	_	PronType=Rel	10	nsubj	_	_
9	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:tense	_	_
10	rappelé	rappeler	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	acl:relcl	_	_
11	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
12	grand	grand	ADJ	_	Gender=Masc|Number=Sing	13	amod	_	_
13	nombre	nombre	NOUN	_	Gender=Masc|Number=Sing	10	obj	_	_
14	de	de	ADP	_	_	15	case	_	_
15	voitures	voiture	NOUN	_	Gender=Fem|Number=Plur	13	nmod	_	_
16	afin	afin	ADV	_	_	10	advmod	_	_
17	de	de	ADP	_	_	18	mark	_	_
18	régler	régler	VERB	_	VerbForm=Inf	16	ccomp	_	_
19	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	20	det	_	_
20	problèmes	problème	NOUN	_	Gender=Masc|Number=Plur	18	obj	_	_
21	mécaniques	mécanique	ADJ	_	Number=Plur	20	amod	_	_
22	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 15 ccomp	color:blue
1	Combien	combien	ADV	_	PronType=Int	7	nsubj	_	_
2	de	de	ADP	_	_	3	case	_	_
3	copies	copie	NOUN	_	Gender=Fem|Number=Plur	1	obl:arg	_	_
4	d'	de	ADP	_	_	6	case	_	SpaceAfter=No
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	album	album	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
7	doivent	devoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	être	être	AUX	_	VerbForm=Inf	9	aux:pass	_	_
9	vendues	vendre	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	7	xcomp	_	_
10	afin	afin	ADV	_	_	7	advmod	_	_
11	que	que	SCONJ	_	_	15	mark	_	_
12	celui-ci	celui-ci	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	15	nsubj	_	_
13	soit	être	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
14	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	disque	disque	NOUN	_	Gender=Masc|Number=Sing	10	ccomp	_	_
16	d'	de	ADP	_	_	17	case	_	SpaceAfter=No
17	or	or	NOUN	_	_	15	nmod	_	_
18	?	?	PUNCT	_	_	7	punct	_	_

~~~


